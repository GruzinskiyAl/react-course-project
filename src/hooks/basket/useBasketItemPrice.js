import {useMemo} from "react";
import {makeSelectBasketItemPrice} from "../../store/selectors";
import {useSelector} from "react-redux";

export default function useBasketItemPrice(id) {
  const basketItemPriceSelector = useMemo(() => makeSelectBasketItemPrice(id), [id]);
  return useSelector(basketItemPriceSelector)
}
