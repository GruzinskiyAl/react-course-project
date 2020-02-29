import React from "react";
import {Select} from 'antd';
import {withInputRender} from "../hocs/withInputRender";
import {useSelector} from "react-redux";
import {selectAvailableOrigins} from "../store/selectors";

const {Option} = Select;

const SelectField = props => {
  const origins = useSelector(selectAvailableOrigins);

  return (
    <Select {...props}>
      {origins.map(el => {
        return <Option key={el} value={el}>{el}</Option>
      })}
    </Select>
  )
};

export default withInputRender(SelectField);
