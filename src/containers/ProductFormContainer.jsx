import React, {useCallback, useState} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {submit, getFormValues} from 'redux-form';
import {Modal} from 'antd';

import {postProductData} from "../api/products";
import ProductForm from "../components/ProductForm";
import {useProduct} from "../hooks/useProduct";
import useProductFormInitialValues from "../hooks/useProductFormInitialValues";
import {hideProductFormModal} from "../store/modals/actions";

const ProductFormContainer = ({modalVisible, modalProductId, formValues, hideProductFormModal, submit}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const {product} = useProduct(modalProductId);
  const initialValues = useProductFormInitialValues(product);
  console.log(initialValues);

  const handleOk = useCallback(() => {
    submit('productForm');
    setConfirmLoading(true);
    postProductData(formValues)
      .then((data) => {
        setConfirmLoading(false);
        hideProductFormModal();
      })
  }, [hideProductFormModal, formValues, submit]);

  const handleCancel = useCallback(() => {
    hideProductFormModal()
  }, [hideProductFormModal]);

  return (
    <div>
      <Modal
        title="Product Form"
        destroyOnClose={true}
        visible={modalVisible}
        cancelButtonProps={{disabled: confirmLoading}}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ProductForm disabled={confirmLoading} initialValues={initialValues}/>
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({
  modalVisible: state.modals.visible,
  modalProductId: state.modals.productId,
  formValues: getFormValues('productForm')(state)
});

const actions = {
  hideProductFormModal,
  submit
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductFormContainer)