import React from "react";
import {
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
import {useSelector} from "react-redux";
import CreatedProductsRoute from "./routes/CreatedProductsRoute";

const App = () => {
  const modalVisible = useSelector(state => state.modal.visible);
  return (
    <div>
      <AppHeaderContainer/>
      {modalVisible && <ProductFormContainer/>}
      <Switch>
        <Route path="/products/:productId">
          <ProductRoute/>
        </Route>
        <Route path="/products">
          <ProductsRoute/>
        </Route>
        <Route path="/created-products">
          <CreatedProductsRoute/>
        </Route>
        <Route path="/basket">
          <BasketRoute/>
        </Route>
        <Route path="*">
          <Redirect to="/products"/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
