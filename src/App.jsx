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
import {useProducts} from "./hooks/useProducts";
import NavBarContainer from "./containers/NavBarContainer";
import ProductFormContainer from "./containers/ProductFormContainer";

export default function App() {
  const {products} = useProducts();

  return (
    <Router>
      <NavBarContainer/>
      <ProductFormContainer />
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
