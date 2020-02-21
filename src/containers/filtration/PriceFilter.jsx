import React from 'react';
import {InputNumber} from "antd";

export default function PriceFilter({minPrice, maxPrice, setFilter}) {
  return (
    <div>
      <InputNumber
        defaultValue={minPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setFilter({minPrice: value})}
        value={minPrice}
      />
      <InputNumber
        defaultValue={maxPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setFilter({maxPrice: value})}
        value={maxPrice}
      />
    </div>
  )
}