interface ProductProps {
  id: number;
  title: string;
  img: string;
  price: number | string;
}

export default function ProductCard({ id, title, img, price }: ProductProps) {
  return (
    <article key={id}>
      <h1>{title} </h1>
      <img src={img} alt={title} height={120} width={80} />
      <p>$ {price}</p>
    </article>
  );
}
