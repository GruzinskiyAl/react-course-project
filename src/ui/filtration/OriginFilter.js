import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

export default function OriginFilter({options, origins, setOrigins}) {
  const [checkedList, setCheckedList] = useState(origins);

  const onChange = useCallback(checkedList => {
    setOrigins(checkedList);
  }, [setOrigins]);

  useEffect(() => {
    setCheckedList(origins)
  }, [origins, setOrigins]);

  return (
    <CheckboxGroup
      options={options}
      value={checkedList}
      onChange={onChange}
    />
  )
}