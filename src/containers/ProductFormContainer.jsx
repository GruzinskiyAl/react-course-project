import React, {useCallback} from "react";
import {connect} from "react-redux";
import {reset} from "redux-form";
import {Button, Modal} from 'antd';

import ProductForm from "../components/ProductForm";
import useProductFormInitialValues from "../hooks/form/useProductFormInitialValues";
import {useInjectSaga} from "./AppWrapper";
import {modalSaga} from "../store/modal/saga/modalSaga";
import {ModalActions} from "../store/modal/actions";

const {submitUpdatingModal, submitCreationModal, hideProductFormModal} = ModalActions;

const ProductFormContainer = ({modal, dispatch}) => {
  useInjectSaga('modalSaga', modalSaga, modal.productId);
  const initialValues = useProductFormInitialValues(modal.productId);

  const handleCancel = useCallback(() => {
    dispatch(hideProductFormModal())
  }, [dispatch]);

  const handleSubmit = useCallback((productId) => {
    const action = (productId) ? submitUpdatingModal : submitCreationModal;
    dispatch(action());
  }, [dispatch]);

  const handleClear = useCallback(() => {
    dispatch(reset('productForm'))
  }, [dispatch]);

  return (
    <div>
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
    </div>
  )
};

const mapStateToProps = state => ({
    modal: state.modal,
  })
;

export default connect(mapStateToProps)(ProductFormContainer)