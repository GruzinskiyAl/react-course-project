import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {submit, reset} from 'redux-form';

import {hideProductFormModal, toggleLoading} from "../../store/modal/actions";
import {patchProductData, postProductData} from "../../api/products";
import {normalizeProducts} from "../../utils/normalizers";

const makeRequest = (data, id) => {
  return id ? patchProductData(data, id) : postProductData(data)
};

export default function useModalActionHandlers() {
  const dispatch = useDispatch();

  const handleCancel = useCallback(() => {
    dispatch(hideProductFormModal())
  }, [dispatch]);

  const handleSubmit = useCallback((formValues, productId, isValid) => {
    dispatch(submit('productForm'));
    dispatch(toggleLoading(true));
    return isValid
      ? makeRequest(formValues, productId)
        .then((data) => {
          console.log(normalizeProducts(data));
          dispatch(toggleLoading(false));
          dispatch(hideProductFormModal());
        })
        .catch(error => {
          console.log(error);
          dispatch(toggleLoading(false));
        })
      : dispatch(toggleLoading(false));
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
