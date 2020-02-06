export const getProductsData = function ({queryParams}) {
    let url = new URL(`${process.env.REACT_APP_BASE_API_URL}/products`);
    Object.keys(queryParams).forEach(key=>url.searchParams.append(key, queryParams[key]));
    console.log(url);
    return fetch(url)
        .then(result => result.json())
        .then(json => json.items)
        .catch(error => console.log(error))
};

export const getProductData = function (productId, options) {
    let url = new URL(`${process.env.REACT_APP_BASE_API_URL}/products/${productId}`)
    return fetch(url, options)
        .then(result => result.json())
        .catch(error => console.log(error))
};
