import React, {useCallback, useEffect, useState} from 'react';
import {Checkbox} from "antd";

const CheckboxGroup = Checkbox.Group;

export default function RegionFilter({origins, setOrigins}) {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = useCallback(checkedList => {
    setCheckedList(checkedList);
    setIndeterminate(!!checkedList.length && checkedList.length < origins.length,);
    setCheckAll(checkedList.length === origins.length)
  }, [origins]);


  const onCheckAllChange = useCallback(e => {
    setCheckedList(e.target.checked ? origins : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked)
  }, [origins]);

  useEffect(()=>{
    setOrigins(checkedList)
  }, [checkedList, setOrigins]);

  return (
    <div>
      <div style={{borderBottom: '1px solid #E9E9E9'}}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
      </div>
      <br/>
      <CheckboxGroup
        options={origins}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  )
}