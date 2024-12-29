/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Product } from "../../pages/Products";

import styles from "./product-info.module.css";
import ProductBtn from "../product-btn/ProductBtn";

type Props = {
  product: Product | null;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <section className={styles.section}>
      <div className={`${styles.infoContainer} container`}>
        <div>
          <img
            className={styles.img}
            src={`/${product?.image.desktop}`}
            alt="#"
          />
        </div>
        <div>
          <h2 className={styles.heading}>{product?.name}</h2>
          <p className={styles.p}>{product?.description}</p>
          <h3>$ {product?.price}</h3>
          <div>
            <ProductBtn product={product} />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
