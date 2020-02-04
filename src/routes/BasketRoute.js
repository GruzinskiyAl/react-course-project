import React from "react";
import { useShopProducts } from "../hooks/useShopProducts";
import ProductList from "../containers/ProductList";
import {useSelector} from "react-redux";
import {selectBasketProductsList} from "../store/selectors";

export default function BasketRoute() {
  const basketProductsList = useSelector(selectBasketProductsList);
  if (basketProductsList) {
    return (
      <div>
        <ProductList products={basketProductsList} />
      </div>
    );
  }
}
