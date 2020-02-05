import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../api/products";
import {getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {selectFiltration, selectProductsList} from "../store/selectors";

export const useProducts = function () {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const filters = useSelector(selectFiltration);
  // console.log(filters);
  const origins = filters.origins;

  useEffect(() => {
    if (!products.length) {
      getProductsData(filters)
        .then(data => {
          console.log('request');
          const dataToSave = normalizeProducts(data);
          dispatch(getProducts(dataToSave));
        })
        .catch(error => {
          console.log("Error obtaining characters:", error);
        });
    }
  }, [dispatch, products, origins]);
  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};
