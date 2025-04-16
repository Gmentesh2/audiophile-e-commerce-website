import { Link } from "react-router-dom";
import { Product } from "../../pages/products/Products";
import styles from "./product-card.module.css";

type Props = {
  product: Product;
  flexDirection?: "row" | "row-reverse";
};
const ProductCard = ({ product, flexDirection = "row" }: Props) => {
  return (
    <div
      className={styles.card}
      key={product.id}
      style={{ flexDirection: flexDirection }}
      data-aos="fade-up"
    >
      <div className={styles.left}>
        {product.new && <span className={styles.new}>New Product</span>}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link className={styles.btn} to={`/single-product/${product.id}`}>
          See product
        </Link>
      </div>
      <img className={styles.img} src={"/" + product.image.desktop} alt="" />
    </div>
  );
};

export default ProductCard;
