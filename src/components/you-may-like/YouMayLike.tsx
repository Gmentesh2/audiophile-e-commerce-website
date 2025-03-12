import { Link } from "react-router-dom";
import { Product } from "../../pages/products/Products";
import styles from "./you-may-like.module.css";

type Props = {
  product: null | Product;
};

const YouMayLike = ({ product }: Props) => {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2 className={styles.heading}>You May Like</h2>
        <section className={styles.cardSection}>
          {product?.others?.map((other) => (
            <div key={other.slug} className={styles.card}>
              <img src={`/${other.image.desktop}`} alt={other.name} />
              <h3 className={styles.h3}>{other.name}</h3>
              <Link className={styles.link} to={`/single-product/${other.slug}`}>See Product</Link>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default YouMayLike;
