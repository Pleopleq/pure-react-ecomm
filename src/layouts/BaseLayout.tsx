import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function BaseLayout() {
  let { itemId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const product = fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <main>
      <Navbar></Navbar>
    </main>
  );
}
