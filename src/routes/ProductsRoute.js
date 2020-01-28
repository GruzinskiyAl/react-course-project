import React, {useContext} from "react";
import ProductList from "../containers/ProductList";
import {ProductsContext} from "../providers/ProducrsProvider";

export default function ProductsRoute() {
    const {products, isLoading} = useContext(ProductsContext);

    if (products) {
        return <ProductList products={products}/>;
    }
}
