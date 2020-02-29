import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css'
import styled from 'styled-components';

import AppHeaderContainer from "./containers/AppHeaderContainer";
import ProductFormContainer from "./containers/ProductFormContainer";
import ProductsRoute from "./routes/ProductsRoute";
import ProductRoute from "./routes/ProductRoute";
import BasketRoute from "./routes/BasketRoute";
import EditableProductsRoute from "./routes/EditableProductsRoute";
import {routingConfig} from "./routes/routingConfig";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  const modalVisible = useSelector(state => state.modal.visible);
  return (
    <Wrapper>
      <AppHeaderContainer/>
      {modalVisible && <ProductFormContainer/>}
      <Switch>
        <Route path={routingConfig.product.path}>
          <ProductRoute/>
        </Route>
        <Route path={routingConfig.products.path}>
          <ProductsRoute/>
        </Route>
        <Route path={routingConfig.editableProducts.path}>
          <EditableProductsRoute/>
        </Route>
        <Route path={routingConfig.basket.path}>
          <BasketRoute/>
        </Route>
        <Route path="*">
          <Redirect to={routingConfig.products.path}/>
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default App;
