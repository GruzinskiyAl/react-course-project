import {useMemo} from "react";
import {makeSelectBasketItemCount} from "../store/selectors";
import {useSelector} from "react-redux";

export default function useBasketItemPrice(id) {
  const basketItemCountSelector = useMemo(() =>
    makeSelectBasketItemCount(id), [id]);

  return useSelector(basketItemCountSelector)
}
