import {useDispatch} from "react-redux";
import {submit, reset} from 'redux-form';
import {hideProductFormModal, toggleLoading} from "../../store/modal/actions";
import {useCallback} from "react";
import {patchProductData, postProductData} from "../../api/products";

export default function useModalActionHandlers() {
  const dispatch = useDispatch();

  const handleCancel = useCallback(() => {
    dispatch(hideProductFormModal())
  }, [dispatch]);

  const handleSubmit = useCallback((formValues, productId) => {
    dispatch(submit('productForm'));
    dispatch(toggleLoading(true));
    (productId)
      ? postProductData(formValues)
        .then((data) => {
          dispatch(toggleLoading(false));
          dispatch(hideProductFormModal());
        })
        .catch(e => {
          console.log(e);
          dispatch(toggleLoading(false));
          dispatch(hideProductFormModal());
        })
      : patchProductData(formValues, productId)
        .then((data) => {
          dispatch(toggleLoading(false));
          dispatch(hideProductFormModal());
        })
        .catch(e => {
          console.log(e);
          dispatch(toggleLoading(false));
          dispatch(hideProductFormModal());
        })
  }, [dispatch]);

  const handleClear = useCallback(() => {
    dispatch(reset('productForm'))
  }, [dispatch]);

  return {
    handleCancel,
    handleSubmit,
    handleClear
  }
};
