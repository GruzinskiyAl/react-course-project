import React, {useCallback} from "react";
import AppHeader from "../ui/AppHeader";
import {useSelector, useDispatch} from "react-redux";
import {selectBasketFullPrice} from "../store/selectors";
import {showProductFormModal} from "../store/modals/actions";

export default function NavBarContainer() {
  const dispatch = useDispatch();
  const fullPrice = useSelector(selectBasketFullPrice);

  const addProductClickHandler = useCallback(() => {
    dispatch(showProductFormModal());
  }, [dispatch]);

  return (
    <AppHeader fullPrice={fullPrice} addProductClickHandler={addProductClickHandler}/>
  )
}
