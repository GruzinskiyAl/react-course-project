import React, {useCallback} from "react";
import {connect} from "react-redux";
import {reset} from "redux-form";
import {Button, Modal} from 'antd';
import ProductForm from "../components/ProductForm";
import useProductFormInitialValues from "../hooks/form/useProductFormInitialValues";
import {useInjectSaga} from "./AppWrapper";
import {modalSaga} from "../store/modal/saga/modalSaga";
import {ModalActions} from "../store/modal/actions";
import availableFiltersSaga from "../store/filtration/saga/availableFiltersSaga";

const ProductFormContainer = ({modal, dispatch}) => {
  useInjectSaga('modalSaga', modalSaga, modal.productId);
  useInjectSaga('availableFiltersSaga', availableFiltersSaga);

  const initialValues = useProductFormInitialValues(modal.productId);

  const handleCancel = useCallback(() => {
    dispatch(ModalActions.hideProductFormModal())
  }, [dispatch]);

  const handleSubmit = useCallback((productId) => {
    const action = (productId) ? ModalActions.submitUpdatingModal : ModalActions.submitCreationModal;
    dispatch(action());
  }, [dispatch]);

  const handleClear = useCallback(() => {
    dispatch(reset('productForm'))
  }, [dispatch]);

  return (
    <Modal
      title="Product Form"
      destroyOnClose={true}
      visible={true}
      confirmLoading={modal.loading}
      onCancel={handleCancel}
      footer={[
        <Button key="clear" loading={modal.loading} onClick={handleClear}>
          Clear
        </Button>,
        <Button
          key="submit" type="primary" loading={modal.loading}
          onClick={() => handleSubmit(modal.productId)}
        >
          Submit
        </Button>,
      ]}
    >
      <ProductForm disabled={modal.loading} initialValues={initialValues}/>
    </Modal>
  )
};

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(ProductFormContainer)
