import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link, useRouteMatch} from "react-router-dom";
import {Icon, Menu} from "antd";
import {routingConfig} from "../routes/routingConfig";
import {ModalActions} from "../store/modal/actions";
import {selectBasketFullPrice} from "../store/selectors";
import AppHeader from "../ui/AppHeader";

export default function AppHeaderContainer() {
  const matchProducts = useRouteMatch(routingConfig.products.path);
  const matchCreatedProducts = useRouteMatch(routingConfig.createdProducts.path);
  const currentRouteKey = (matchProducts && routingConfig.products.key) ||
    (matchCreatedProducts && routingConfig.createdProducts.key);
  const dispatch = useDispatch();
  const fullPrice = useSelector(selectBasketFullPrice);

  const addProductClickHandler = useCallback(() => {
    dispatch(ModalActions.showProductFormModal());
  }, [dispatch]);
  return (
    <>
      <AppHeader fullPrice={fullPrice} addProductClickHandler={addProductClickHandler}/>
      <Menu mode="horizontal" selectedKeys={[currentRouteKey]}>
        <Menu.Item key={routingConfig.products.key}>
          <Link to={routingConfig.products.path}>
            <Icon type="shopping"/>
            Products
          </Link>
        </Menu.Item>
        <Menu.Item key={routingConfig.createdProducts.key}>
          <Link to={routingConfig.createdProducts.path}>
            <Icon type="appstore"/>
            Created Products
          </Link>
        </Menu.Item>
      </Menu>
    </>
  )
}
