import React from "react";
import Product from "../ui/Product";


export default function ProductList({products}) {
  return (!(products && products.length)
    ? <div>Loading..</div>
    : <div className={'product-list'}>
      {products.map(product => (
        <Product key={product.id} product={product}/>
      ))}
    </div>)
}


