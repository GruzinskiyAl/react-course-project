import React from "react";
import {Icon, Spin} from "antd";

export default function Spinner({size, ...props}) {
  const antIcon = <Icon type="loading" style={{fontSize: size}} spin/>;
  return (<Spin indicator={antIcon} {...props}/>)
}