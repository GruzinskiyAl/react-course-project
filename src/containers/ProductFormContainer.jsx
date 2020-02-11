import React, {useCallback, useState} from "react";
import {Modal} from 'antd';
import {connect} from "react-redux";
import {submit, getFormValues} from 'redux-form';
import {hideProductFormModal} from "../store/modals/actions";
import {bindActionCreators} from "redux";
import ProductForm from "../components/ProductForm";
import {postProductData} from "../api/products";
import {makeSelectorProductById} from "../store/selectors";
import {useSelector} from "react-redux";
import {useProduct} from "../hooks/useProduct";

function FormContainer({modalVisible, modalProductId, formValues, hideProductFormModal, submit}) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const product = useProduct(modalProductId);
  debugger
  const handleOf = useCallback( () => {
    submit('productForm');
    setConfirmLoading(true);
    postProductData(formValues)
      .then((data) => {
        setConfirmLoading(false);
        hideProductFormModal();
      })
  }, [hideProductFormModal, formValues, submit]);

  const handleCancel = useCallback( () => {
    hideProductFormModal()
  }, [hideProductFormModal]);

  return (
    <div>
      <Modal
        title="Product Form"
        destroyOnClose={true}
        visible={modalVisible}
        cancelButtonProps={{disabled: confirmLoading}}
        onOk={handleOf}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <ProductForm disabled={confirmLoading} initialValues={{...product}}/>
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
)(FormContainer)