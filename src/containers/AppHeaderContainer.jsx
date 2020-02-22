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
  const matchEditableProducts = useRouteMatch(routingConfig.editableProducts.path);
  const currentRouteKey = (matchProducts && routingConfig.products.key) ||
    (matchEditableProducts && routingConfig.editableProducts.key);
  const dispatch = useDispatch();
  const fullPrice = useSelector(selectBasketFullPrice);

  const addProductClickHandler = useCallback(() => {
    dispatch(ModalActions.showProductFormModal());
  }, [dispatch]);
  return (
    <div>
      <AppHeader fullPrice={fullPrice} addProductClickHandler={addProductClickHandler}/>
      <Menu mode="horizontal" selectedKeys={[currentRouteKey]}>
        <Menu.Item key={routingConfig.products.key}>
          <Link to={routingConfig.products.path}>
            <Icon type="shopping"/>
            Products
          </Link>
        </Menu.Item>
        <Menu.Item key={routingConfig.editableProducts.key}>
          <Link to={routingConfig.editableProducts.path}>
            <Icon type="appstore"/>
            Editable Products
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
