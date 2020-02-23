import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {BasketActions} from "../../store/basket/actions";
import {ModalActions} from "../../store/modal/actions";

export default function useProductActionHandler(id) {
  const dispatch = useDispatch();

  const handleIncrementClick = useCallback(() => {
    dispatch(BasketActions.incrementBasketItemCount(id))
  }, [id, dispatch]);

  const handleDeleteClick = useCallback(() => {
    dispatch(BasketActions.dropBasketItem(id))
  }, [id, dispatch]);

  const handleChangeClick = useCallback(() => {
    dispatch(ModalActions.showProductFormModal(id));
  }, [id, dispatch]);

  const handleChangeCount = useCallback((id, count) => {
    dispatch(BasketActions.setBasketItemCount({id, count}))
  }, [dispatch]);

  return {
    handleIncrementClick,
    handleDeleteClick,
    handleChangeClick,
    handleChangeCount
  }
}