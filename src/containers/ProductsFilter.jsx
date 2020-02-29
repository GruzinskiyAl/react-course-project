import React from "react";
import PriceFilter from "../components/filtration/PriceFilter";
import OriginFilter from "../components/filtration/OriginFilter";
import {useInjectSaga} from "./AppWrapper";
import availableFiltersSaga from "../store/filtration/saga/availableFiltersSaga";
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 10px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
`;

export default function ProductsFilter({filtration, action}) {
  useInjectSaga('availableFiltersSaga', availableFiltersSaga);

  return (
    <Wrapper>
      <Title>Origin filter:</Title>
      <OriginFilter origins={filtration.origins} setFilter={action}/>
      <Title>Price filter:</Title>
      <PriceFilter minPrice={filtration.minPrice} maxPrice={filtration.maxPrice} setFilter={action}/>
    </Wrapper>
  )
};
