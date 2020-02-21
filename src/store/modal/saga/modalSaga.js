import {ModalActionTypes, ModalActions} from "../actions";
import {takeLatest, put} from 'redux-saga/effects'
import {ProductActionTypes} from "../../products/actions";
import {createProductSaga} from "../../products/saga/createProductSaga";
import {updateProductSaga} from "../../products/saga/updateProductSaga";
import {submit} from 'redux-form';

function* modalSuccessSaga() {
  yield put(ModalActions.setLoading(false));
  yield put(ModalActions.hideProductFormModal());
}

function* modalFailureSaga() {
  yield put(ModalActions.setLoading(false));
}

function* modalSubmitSaga() {
  yield put(submit('productForm'));
  yield put(ModalActions.setLoading(true));
}

export function* modalSaga(productId) {
  yield takeLatest([ModalActionTypes.SUBMIT_CREATION_MODAL,
    ModalActionTypes.SUBMIT_UPDATE_MODAL], modalSubmitSaga);

  yield takeLatest(ModalActionTypes.SUBMIT_UPDATE_MODAL, updateProductSaga, productId);
  yield takeLatest(ModalActionTypes.SUBMIT_CREATION_MODAL, createProductSaga);

  yield takeLatest([ProductActionTypes.UPDATE_PRODUCT_SUCCESS,
    ProductActionTypes.CREATE_PRODUCT_SUCCESS], modalSuccessSaga);
  yield takeLatest([ProductActionTypes.UPDATE_PRODUCT_FAILURE,
    ProductActionTypes.CREATE_PRODUCT_FAILURE], modalFailureSaga);
}
