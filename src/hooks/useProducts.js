import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProductsData} from "../api/products";
import {getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {selectFiltration, selectProductsList} from "../store/selectors";

export const useProducts = function () {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsList);
  const filtration = useSelector(selectFiltration);

  useEffect(() => {
    const options = {
      queryParams: filtration
    };
    getProductsData(options)
      .then(data => {
        dispatch(getProducts(normalizeProducts(data)));
      })
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });
  }, [dispatch, filtration]);
  return useMemo(
    () => ({
      products
    }),
    [products]
  );
};
