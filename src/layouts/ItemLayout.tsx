import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";

interface Product {
  title: string;
  image: string;
  price: string;
  description: string;
  category: string;
}

export default function BaseLayout() {
  let { itemId } = useParams();
  const [product, setProduct] = useState<Product>({
    title: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <Product
        title={product.title}
        img={product.image}
        price={product.price}
        description={product.description}
        category={product.category}></Product>
    </main>
  );
}
