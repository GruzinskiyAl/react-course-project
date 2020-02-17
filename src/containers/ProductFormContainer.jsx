import React from "react";
import {connect} from "react-redux";
import {getFormValues, isValid} from "redux-form";
import {Button, Modal} from 'antd';

import ProductForm from "../components/ProductForm";
import useProductFormInitialValues from "../hooks/form/useProductFormInitialValues";
import useModalActionHandlers from "../hooks/modal/useModalActionHandlers";

const ProductFormContainer = ({modal, formValues, isValid}) => {
  const initialValues = useProductFormInitialValues(modal.productId);
  const {handleCancel, handleClear, handleSubmit} = useModalActionHandlers();

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
            onClick={() => handleSubmit(formValues, modal.productId, isValid)}
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
    formValues: getFormValues('productForm')(state),
    isValid: isValid('productForm')(state)
  })
;

export default connect(mapStateToProps)(ProductFormContainer)