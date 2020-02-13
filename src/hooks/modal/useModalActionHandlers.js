import {useDispatch} from "react-redux";
import {submit, reset, SubmissionError} from 'redux-form';
import {hideProductFormModal, toggleLoading} from "../../store/modal/actions";
import {useCallback} from "react";
import {patchProductData, postProductData} from "../../api/products";

export default function useModalActionHandlers() {
  const dispatch = useDispatch();

  const handleCancel = useCallback(() => {
    dispatch(hideProductFormModal())
  }, [dispatch]);

  const makeRequest = (data, id) => {
    return id ? patchProductData(data, id) : postProductData(data)
  };

  const handleSubmit = useCallback((formValues, productId) => {
    dispatch(submit('productForm'));
    dispatch(toggleLoading(true));
    return makeRequest(formValues, productId)
      .then((data) => {
        dispatch(toggleLoading(false));
        dispatch(hideProductFormModal());
      })
      .catch(error => {
        console.log(error);
        dispatch(toggleLoading(false));
        // if (error.response.data.error.props.validationErrors) {
        //   throw new SubmissionError(error.response.data.error.props.validationErrors)
        // }
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
