import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import ProductsRoute from "./routes/ProductsRoute";
import ProductRoute from "./routes/ProductRoute";
import BasketRoute from "./routes/BasketRoute";
import AppHeaderContainer from "./containers/AppHeaderContainer";
import ProductFormContainer from "./containers/ProductFormContainer";
import {useProducts} from "./hooks/products/useProducts";
import {
  selectCurrentEditableProducts,
  selectCurrentProducts,
  selectEditableProductsFilters,
  selectProductsFilters
} from "./store/selectors";
import {connect} from "react-redux";
import CreatedProductsRoute from "./routes/CreatedProductsRoute";

const App = ({productsFilters, editableProductsFilters, currentProducts, currentEditableProducts, modalVisible}) => {
  useProducts(productsFilters, editableProductsFilters);

  return (
    <Router>
      <AppHeaderContainer/>
      {modalVisible && <ProductFormContainer/>}
      <Switch>
        <Route path="/products/:productId">
          <ProductRoute/>
        </Route>
        <Route path="/products">
          <ProductsRoute currentProducts={currentProducts}/>
        </Route>
        <Route path="/created-products">
          <CreatedProductsRoute currentEditableProducts={currentEditableProducts}/>
        </Route>
        <Route path="/basket">
          <BasketRoute/>
        </Route>
        <Route path="*">
          <Redirect to="/products"/>
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = state => ({
  productsFilters: selectProductsFilters(state),
  editableProductsFilters: selectEditableProductsFilters(state),
  currentProducts: selectCurrentProducts(state),
  currentEditableProducts: selectCurrentEditableProducts(state),
  modalVisible: state.modal.visible,
});

export default connect(mapStateToProps)(App)