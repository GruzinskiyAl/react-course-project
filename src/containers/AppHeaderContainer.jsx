import React, {useCallback} from "react";
import AppHeader from "../ui/AppHeader";
import {useSelector, useDispatch} from "react-redux";
import {selectBasketFullPrice} from "../store/selectors";
import {showProductFormModal} from "../store/modal/actions";

export default function AppHeaderContainer() {
  const dispatch = useDispatch();
  const fullPrice = useSelector(selectBasketFullPrice);

  const addProductClickHandler = useCallback(() => {
    dispatch(showProductFormModal());
  }, [dispatch]);

  return (
    <AppHeader fullPrice={fullPrice} addProductClickHandler={addProductClickHandler}/>
  )
}