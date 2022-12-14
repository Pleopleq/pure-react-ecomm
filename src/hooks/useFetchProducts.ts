import { useState, useEffect } from "react";

const useFetchProducts = (url: string, limit = 9) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${url}?limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return products;
};

export default useFetchProducts;
