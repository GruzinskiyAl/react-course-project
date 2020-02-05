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
import AppHeader from "./ui/AppHeader";
import {useProducts} from "./hooks/useProducts";
import {selectFiltration} from "./store/selectors";

export default function App() {
  const {products} = useProducts();

  return (
    <Router>
      <AppHeader/>
      <Switch>
        <Route path="/products/:productId">
          <ProductRoute/>
        </Route>
        <Route path="/products">
          <ProductsRoute products={products}/>
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
