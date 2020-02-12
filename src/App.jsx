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
import {useProducts} from "./hooks/useProducts";
import {selectCurrentProducts, selectFiltration} from "./store/selectors";
import {connect} from "react-redux";
import CreatedProductsRoute from "./routes/CreatedProductsRoute";

const App = ({ filtration, currentProducts }) => {
  useProducts(filtration);

  return (
    <Router>
      <AppHeaderContainer/>
      <ProductFormContainer/>
      <Switch>
        <Route path="/products/:productId">
          <ProductRoute/>
        </Route>
        <Route path="/products">
          <ProductsRoute currentProducts={currentProducts} />
        </Route>
        <Route path="/created-products">
          <CreatedProductsRoute currentProducts={currentProducts}/>
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
  filtration: selectFiltration(state),
  currentProducts: selectCurrentProducts(state),
});

export default connect(mapStateToProps)(App)