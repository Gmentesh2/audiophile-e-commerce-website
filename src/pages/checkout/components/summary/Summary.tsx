import { useContext } from "react";
import styles from "./summary.module.css";
import { SelectedProductsContext } from "../../../../context/SelectedProductsContext";
import ProductPreview from "../../../../components/product-preview/ProductPreview";
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Summary = ({ setIsOpen }: Props) => {
  const context = useContext(SelectedProductsContext);
  return (
    <div className={styles.summary}>
      <h2>Summary</h2>
      <div className={styles.products}>
        {(context?.selectedItems || []).map((item) => {
          return (
            <section className={styles.row} key={item.product.id}>
              <ProductPreview product={item.product} />
              <p>x{item.amount}</p>
            </section>
          );
        })}
      </div>

      <ul className={styles.list}>
        <li className={styles.li}>
          <span className={styles.label}>TOTAL</span>
          <span className={styles.value}>$5396</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>SHIPPING</span>
          <span className={styles.value}>$5396</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>VAT (INCLUDED)</span>
          <span className={styles.value}>$5396</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>GRAND TOTAL</span>
          <span className={styles.value}>$5396</span>
        </li>
      </ul>
      <button
        className={`btn ${styles.summaryBtn}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Summary;
