import { Product } from "../../pages/products/Products";
import styles from "./about-product.module.css";

type Props = {
  product: Product | null;
};

const AboutProduct = ({ product }: Props) => {
  const descriptionParts = product?.features.split("\n\n") || [];

  return (
    <div className={styles.productInfo}>
      <div data-aos="fade-up" className={`container ${styles.container}`}>
        <article className={styles.description}>
          <h1>Features</h1>
          {descriptionParts.map((part) => (
            <p key={part}>{part}</p>
          ))}
        </article>
        <article className={styles.inTheBox}>
          <h1>In the Box</h1>
          <div>
            {product?.includes.map((i) => {
              return (
                <div className={styles.items} key={i.item}>
                  <span className={styles.quantity}>{i.quantity}x</span>
                  <span className={styles.item}>{i.item}</span>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
};

export default AboutProduct;
