import { Product } from "../../pages/products/Products"
import styles from "./product-preview.module.css"

type Props = {
    product: Product
}
const ProductPreview = ({product} : Props) => {
  return (
    <div className={styles.left}>
    <img
      className={styles.img}
      src={`/${product.image.desktop}`}
      alt=""
    />
    <div className={styles.info}>
      <p>{product.name.split(" ")[0]}</p>
      <p>$ {product.price}</p>
    </div>
  </div>
  )
}

export default ProductPreview