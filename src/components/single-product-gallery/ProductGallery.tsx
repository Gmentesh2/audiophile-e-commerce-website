import { Product } from "../../pages/products/Products";
import styles from "./product-gallery.module.css";

type Props = {
  product: Product | null;
};

const ProductGallery = ({ product }: Props) => {
  return (
    <div className={styles.gallery}>
      <div data-aos="fade-up" className={`container ${styles.container}`}>
        <div className={styles.imgContainer}>
          <img className={styles.first} src={`/${product?.gallery.first.desktop}`} alt="" />
          <img className={styles.second} src={`/${product?.gallery.second.desktop}`} alt="" />
          <img className={styles.third} src={`/${product?.gallery.third.desktop}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

