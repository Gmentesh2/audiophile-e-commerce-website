import { Product } from "../../pages/products/Products"
import styles from "./product-preview.module.css"

type Props = {
    product: Product;
    imgSize?: number;
}
const ProductPreview = ({product, imgSize = 64} : Props) => {
  return (
    <div className={styles.left}>
    <img
      className={styles.img}
      src={`/${product?.image?.desktop}`}
      alt="#"
      style={{width: imgSize}}
    />
    <div className={styles.info}>
      <p className={styles.productName}>{product?.name.split(" ")[0]}</p>
      <p className={styles.productPrice}>$ {product?.price}</p>
    </div>
  </div>
  )
}

export default ProductPreview