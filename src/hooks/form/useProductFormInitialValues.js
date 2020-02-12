import { useMemo } from 'react';
import {get} from 'lodash'

export default function useProductFormInitialValues(productData) {
    return useMemo(() => ({
            name: get(productData, 'name', ''),
            price: get(productData, 'price', ''),
            origin: get(productData, 'origin', '')
    }), [productData])
}
