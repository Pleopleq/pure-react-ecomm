import styles from "./HomeProductsCatalog.module.css";

type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
};

interface ProductsProps {
  products: Array<Product>;
}

export default function HomeProductsCatalog({ products }: ProductsProps) {
  return (
    <section className={styles.home_catalog}>
      {products.map(({ title, description, price, id, image }: Product) => {
        return (
          <div key={id}>
            <h1>{title} </h1>
            <img src={image} alt='title' width={80} height={80} />
            <p>{description} </p>
            <p>{price} </p>
          </div>
        );
      })}
    </section>
  );
}
