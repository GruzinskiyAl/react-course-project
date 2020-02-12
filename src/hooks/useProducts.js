import {useDispatch} from "react-redux";
import {getProductsData} from "../api/products";
import { getProducts} from "../store/products/actions";
import {normalizeProducts} from "../utils/normalizers";
import {useEffect} from "react";

export const useProducts = function (filtration) {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      queryParams: filtration
    };

    getProductsData(options)
      .then(data => normalizeProducts(data))
      .then(data => {

        dispatch(getProducts(data));
      })
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });
  }, [filtration, dispatch]);
};
