interface Product {
  title: string;
  img: string;
  price: string;
  description: string;
  category: string;
}

export default function Product({
  title,
  img,
  price,
  description,
  category,
}: Product) {
  return (
    <section>
      <div>
        <h1> {title} </h1>
        <img src={img} alt={title} />
        <span>{price} </span>
      </div>
      <div>
        <span>{category}</span>
        <p> {description} </p>
      </div>

      <div>
        <button>Add to cart</button>
        <button>Buy now!</button>
      </div>
    </section>
  );
}
