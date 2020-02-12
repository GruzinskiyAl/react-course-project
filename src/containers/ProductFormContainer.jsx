import React from "react";
import {connect} from "react-redux";
import {Button, Modal} from 'antd';

import ProductForm from "../components/ProductForm";
import {useProduct} from "../hooks/products/useProduct";
import useProductFormInitialValues from "../hooks/form/useProductFormInitialValues";
import useModalActionHandlers from "../hooks/modal/useModalActionHandlers";
import {getFormValues} from "redux-form";

const ProductFormContainer = ({modal, formValues}) => {
  console.log('render');
  const {product} = useProduct(modal.productId);
  const initialValues = useProductFormInitialValues(product);
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
            onClick={() => handleSubmit(formValues, modal.productId)}
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
    formValues: getFormValues('productForm')(state)
  })
;

export default connect(mapStateToProps)(ProductFormContainer)