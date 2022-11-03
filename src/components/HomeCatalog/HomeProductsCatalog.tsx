import ProductCard from "../ProductCard/ProductCard";
import styles from "./HomeProductsCatalog.module.css";

type Product = {
  id: number;
  title: string;
  price: string;
  image: string;
};

interface ProductsProps {
  products: Array<Product>;
}

export default function HomeProductsCatalog({ products }: ProductsProps) {
  return (
    <section className={styles.home_catalog}>
      {products.map(({ title, price, id, image }: Product) => {
        return (
          <ProductCard
            id={id}
            title={title}
            price={price}
            img={image}></ProductCard>
        );
      })}
    </section>
  );
}
