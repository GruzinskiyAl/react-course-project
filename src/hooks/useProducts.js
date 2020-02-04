import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../api/products";
import {getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {selectProductsList} from "../store/selectors";

export const useProducts = function () {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);

  useEffect(() => {
    if (!products.length) {
      getProductsData()
        .then(data => {
          const dataToSave = normalizeProducts(data);
          dispatch(getProducts(dataToSave));
        })
        .catch(error => {
          console.log("Error obtaining characters:", error);
        });
    }
  }, [dispatch, products]);
  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};