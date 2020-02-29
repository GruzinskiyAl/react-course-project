import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "antd";
import {useSelector} from "react-redux";
import {selectAvailableOrigins} from "../../store/selectors";
import Spinner from "../Spinner";


export default function OriginFilter({origins, setFilter}) {
  const options = useSelector(selectAvailableOrigins);
  const [checkedList, setCheckedList] = useState([]);

  const onChange = useCallback(checkedList => {
    setFilter({origins: checkedList});
  }, [setFilter]);

  useEffect(() => {
    setCheckedList(origins)
  }, [origins, setFilter]);

  const groupStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  return ((options.length)
      ? <Checkbox.Group
        style={groupStyle}
        options={options}
        defaultValue={origins}
        value={checkedList}
        onChange={onChange}
      />
      : <Spinner size={16}/>
  )
}