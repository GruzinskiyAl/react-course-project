import {useDispatch} from "react-redux";
import {getProductsData} from "../../api/products";
import {getProducts, getEditableProducts} from "../../store/products/actions";
import {normalizeProducts} from "../../utils/normalizers";
import {useEffect} from "react";

export const useProducts = function (productsFilters, editableProductsFilters) {
  const dispatch = useDispatch();

  const makeRequest = (options) => {
    return getProductsData(options)
      .then(data => normalizeProducts(data))
  };

  useEffect(() => {
    const options = {
      queryParams: editableProductsFilters
    };
    makeRequest(options)
      .then(data => dispatch(getEditableProducts(data)))
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });

  }, [editableProductsFilters, dispatch]);

  useEffect(() => {
    const options = {
      queryParams: productsFilters
    };
    makeRequest(options)
      .then(data => dispatch(getProducts(data)))
      .catch(error => {
        console.log("Error obtaining characters:", error);
      });
  }, [productsFilters, dispatch]);
};
