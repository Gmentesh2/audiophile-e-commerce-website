import { Link } from "react-router-dom";
import { Product } from "../../pages/products/Products";
import styles from "./product-card.module.css";

type Props = {
  product: Product;
  flexDirection?: "row" | "row-reverse";
};
const ProductCard = ({ product, flexDirection = "row" }: Props) => {
  //const navigate = useNavigate()

  return (
    <div
      className={styles.card}
      key={product.id}
      style={{ flexDirection: flexDirection }}
    >
      <div className={styles.left}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {/* <button onClick={() => {
          navigate(`/single-product/${product.id}`)
        }}>See Product</button> */}
        <Link className={styles.btn} to={`/single-product/${product.id}`} >See product</Link>
      </div>
      <img className={styles.img} src={"/" + product.image.desktop} alt="" />
    </div>
  );
};

export default ProductCard;
