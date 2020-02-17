import React from "react";
import {Select} from 'antd';
import {withInputRender} from "../hocs/withInputRender";

const {Option} = Select;

const ORIGINS = ['usa', 'africa', 'asia', 'europe'];

const SelectField = props => {
  return (
    <Select {...props}>
      {ORIGINS.map(el => {
        return <Option key={el} value={el}>{el}</Option>
      })}
    </Select>
  )
};

export default withInputRender(SelectField);
