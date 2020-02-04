export const getProductsData = function (options) {
    return fetch(`${process.env.REACT_APP_BASE_API_URL}/products`, options)
        .then(result => result.json())
        .then(json => json.items)
        .catch(error => console.log(error))
};
