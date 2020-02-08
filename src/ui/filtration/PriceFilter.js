import React from 'react';
import {InputNumber} from "antd";

export default function PriceFilter({minPrice, maxPrice, setMinPrice, setMaxPrice}) {
  return (
    <div>
      <InputNumber
        defaultValue={minPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setMinPrice(value)}
        value={minPrice}
      />
      <InputNumber
        defaultValue={maxPrice}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')}
        onChange={value => setMaxPrice(value)}
        value={maxPrice}
      />
    </div>
  )
}