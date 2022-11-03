import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

interface ProductProps {
  id: number;
  title: string;
  img: string;
  price: number | string;
}

export default function ProductCard({ id, title, img, price }: ProductProps) {
  return (
    <Link to={`/item/${id}`} className={styles.product_link}>
      <article key={id} className={styles.product_card}>
        <h1 className={styles.product_card__title}>{title} </h1>
        <img src={img} alt={title} height={120} width={80} />
        <p className={styles.product_card__price}>$ {price}</p>
      </article>
    </Link>
  );
}
