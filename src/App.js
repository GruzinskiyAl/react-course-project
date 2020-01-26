import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
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
