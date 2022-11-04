import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HomeProductsCatalog from "../../components/HomeCatalog/HomeProductsCatalog";
import styles from "./HomeLayout.module.css";
import useFetchProducts from "../../hooks/useFetchProducts";

export default function HomeLayout() {
  const products = useFetchProducts("https://fakestoreapi.com/products");

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
