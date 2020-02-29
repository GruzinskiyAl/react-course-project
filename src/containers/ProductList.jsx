import React from "react";
import Product from "../ui/Product";
import styled from "styled-components";
import Spinner from "../components/Spinner";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  height: 80vh;
  overflow: auto;
`;

export default function ProductList({products, loading}) {
  if (loading && !products.length) {
    return (<Spinner size={24}><Wrapper>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </Wrapper></Spinner>)
  }
  return (
    <Wrapper>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </Wrapper>)
}


