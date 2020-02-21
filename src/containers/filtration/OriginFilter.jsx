import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

export default function OriginFilter({options, origins, setFilter}) {
  const [checkedList, setCheckedList] = useState([]);

  const onChange = useCallback(checkedList => {
    setFilter({origins: checkedList});
  }, [setFilter]);

  useEffect(() => {
    setCheckedList(origins)
  }, [origins, setFilter]);

  return (
    <CheckboxGroup
      options={options}
      defaultValue={origins}
      value={checkedList}
      onChange={onChange}
    />
  )
}