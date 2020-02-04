import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import "./App.css";
import ProductProvider from "./providers/ProductsProvider";
import ShopItemsProvider from "./providers/ShopItemsProvider";
import ProductsRoute from "./routes/ProductsRoute";
import ProductRoute from "./routes/ProductRoute";
import ShopRoute from "./routes/ShopRoute";
import AppHeader from "./ui/AppHeader";

export default function App() {
  useEffect(()=> {

  });

  return (
    <ProductProvider>
      <ShopItemsProvider>
        <Router>
          <AppHeader />
          <Switch>
            <Route path="/products/:productId">
              <ProductRoute />
            </Route>
            <Route path="/products">
              <ProductsRoute />
            </Route>
            <Route path="/shop">
              <ShopRoute />
            </Route>
            <Route path="*">
              <Redirect to="/products" />
            </Route>
          </Switch>
        </Router>
      </ShopItemsProvider>
    </ProductProvider>
  );
}
