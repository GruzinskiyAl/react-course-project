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
import {routingConfig} from "./routes/routingConfig";

const App = () => {
  const modalVisible = useSelector(state => state.modal.visible);
  return (
    <div>
      <AppHeaderContainer/>
      {modalVisible && <ProductFormContainer/>}
      <Switch>
        <Route path={routingConfig.product.path}>
          <ProductRoute/>
        </Route>
        <Route path={routingConfig.products.path}>
          <ProductsRoute/>
        </Route>
        <Route path={routingConfig.createdProducts.path}>
          <CreatedProductsRoute/>
        </Route>
        <Route path={routingConfig.basket.path}>
          <BasketRoute/>
        </Route>
        <Route path="*">
          <Redirect to={routingConfig.products.path}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
