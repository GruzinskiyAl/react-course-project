import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext({
  products: [],
  isLoading: false
});

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch(`${process.env.REACT_APP_BASE_API_URL}/products`)
      .then(result => result.json())
      .then(resultJson => {
        setIsLoading(false);
        setProducts(resultJson.items);
      });
  }, []);

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
