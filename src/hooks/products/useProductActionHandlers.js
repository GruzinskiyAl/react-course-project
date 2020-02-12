import {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {decrementBasketItemCount, dropBasketItem, incrementBasketItemCount} from "../../store/basket/actions";
import {showProductFormModal} from "../../store/modal/actions";

export default function useProductActionHandler(id) {
  const dispatch = useDispatch();

  const handleIncrementClick = useCallback(() => {
    dispatch(incrementBasketItemCount(id))
  }, [id, dispatch]);

  const handleDecrementClick = useCallback(() => {
    dispatch(decrementBasketItemCount(id))
  }, [id, dispatch]);

  const handleDeleteClick = useCallback(() => {
    dispatch(dropBasketItem(id))
  }, [id, dispatch]);

  const handleChangeClick = useCallback(() => {
    dispatch(showProductFormModal(id));
  }, [id, dispatch]);

  return {
    handleIncrementClick,
    handleDecrementClick,
    handleDeleteClick,
    handleChangeClick
  }
}