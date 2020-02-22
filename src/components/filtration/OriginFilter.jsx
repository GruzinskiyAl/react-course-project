import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "antd";
import {useSelector} from "react-redux";
import {selectAvailableOrigins} from "../../store/selectors";
import Spinner from "../Spinner";

const CheckboxGroup = Checkbox.Group;

export default function OriginFilter({origins, setFilter}) {
  const options = useSelector(selectAvailableOrigins);
  const [checkedList, setCheckedList] = useState([]);

  const onChange = useCallback(checkedList => {
    setFilter({origins: checkedList});
  }, [setFilter]);

  useEffect(() => {
    setCheckedList(origins)
  }, [origins, setFilter]);

  return ((options.length)
      ? <CheckboxGroup
        options={options}
        defaultValue={origins}
        value={checkedList}
        onChange={onChange}
      />
      : <Spinner size={16}/>
  )
}