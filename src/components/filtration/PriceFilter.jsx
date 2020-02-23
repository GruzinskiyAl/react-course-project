import React from 'react';
import {InputNumber} from "antd";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  & span{
    margin-right: 5px;
  }
`;

export default function PriceFilter({minPrice, maxPrice, setFilter}) {
  return (
    <Wrapper>
      <InputWrapper>
        <span>from:</span>
        <InputNumber
          defaultValue={minPrice}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value => setFilter({minPrice: value})}
          value={minPrice}
        />
      </InputWrapper>
      <InputWrapper>
        <span>to:</span>
        <InputNumber
          defaultValue={maxPrice}
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          onChange={value => setFilter({maxPrice: value})}
          value={maxPrice}
        />
      </InputWrapper>
    </Wrapper>
  )
}