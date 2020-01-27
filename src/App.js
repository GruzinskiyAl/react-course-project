import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import ProductProvider from "./providers/ProducrsProvider";
import ProductsRoute from "./routes/ProductsRoute";

export default function App() {
  return (
    <ProductProvider>
      <Router>
        {/* <AppHeader /> */}
        <Switch>
          <Route path="/products">
            <ProductsRoute />
          </Route>
          <Route path="*">
            <Redirect to="/products" />
          </Route>
        </Switch>
      </Router>
    </ProductProvider>
  );
}
