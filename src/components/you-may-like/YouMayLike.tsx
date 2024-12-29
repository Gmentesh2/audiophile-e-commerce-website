import { Product } from "../../pages/Products";
import styles from "./you-may-like.module.css";
type Props = {
  product: null | Product;
};

const YouMayLike = ({ product }: Props) => {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <h2>You May Like</h2>
        <section className={styles.cardSection}>
          {product?.others?.map((other) => {
            return (
              <div key={other.slug} className={styles.card}>
                <img src={`/${other.image.desktop}`} alt="" />

                <h3 className={styles.h3}>{other.name}</h3>
                <button >See product</button>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default YouMayLike;
