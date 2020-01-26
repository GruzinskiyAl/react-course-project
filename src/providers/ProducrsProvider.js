import React, { useState, useEffect, Children } from "react";

export const ProductsContext = React.createContext({
  products: [],
  isLoading: false
});

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://yalantis-react-school.herokuapp.com/api/v1/products")
      .then(result => result.json())
      .then(resultJson => {
        setIsLoading(false);
        setProducts(resultJson.items);
      });
  });

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
