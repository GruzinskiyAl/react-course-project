import { useMemo } from 'react';
import {get} from 'lodash'
import {useProduct} from "../products/useProduct";

export default function useProductFormInitialValues(productId) {
    const {product} = useProduct(productId);

    return useMemo(() => ({
            name: get(product, 'name', ''),
            price: get(product, 'price', ''),
            origin: get(product, 'origin', '')
    }), [product])
}
