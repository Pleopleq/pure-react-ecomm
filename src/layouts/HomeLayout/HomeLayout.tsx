import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeProductsCatalog from "../../components/HomeCatalog/HomeProductsCatalog";
import styles from "./HomeLayout.module.css";
import { useEffect, useState } from "react";

export default function HomeLayout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <Navbar></Navbar>
      <main className={styles.home_view}>
        <Sidebar></Sidebar>
        <HomeProductsCatalog products={products}></HomeProductsCatalog>
      </main>
    </main>
  );
}
