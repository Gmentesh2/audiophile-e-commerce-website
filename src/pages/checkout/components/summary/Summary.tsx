import { useContext, useMemo } from "react";
import styles from "./summary.module.css";
import { SelectedProductsContext } from "../../../../context/SelectedProductsContext";
import ProductPreview from "../../../../components/product-preview/ProductPreview";
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Summary = ({ setIsOpen }: Props) => {
  const context = useContext(SelectedProductsContext);

  const findTotalPrice = useMemo(() => {
    return (
      context?.selectedItems?.reduce(
        (total, item) => total + item.product.price * item.amount,
        0
      ) ?? 0
    );
  }, [context?.selectedItems]);

  const costs = {
    shipping: 10,
    VAT: 5,
  };

  const findGrandTotalPrice = useMemo(() => {
    return findTotalPrice + costs.shipping + costs.VAT;
  }, [findTotalPrice, costs.shipping, costs.VAT]);

  const handleContinueClick = () => {
    if (context?.selectedItems?.length) {
      setIsOpen(true);
    }
  };

  return (
    <div data-aos="fade-up" className={styles.summary}>
      <h2 className={styles.heading}>Summary</h2>
      <div className={styles.products}>
        {(context?.selectedItems || []).map((item) => {
          return (
            <section className={styles.row} key={item.product.id}>
              <ProductPreview product={item.product} />
              <p className={styles.productAmount}>x{item.amount}</p>
            </section>
          );
        })}
      </div>

      <ul className={styles.list}>
        <li className={styles.li}>
          <span className={styles.label}>TOTAL</span>
          <span className={styles.value}>$ {findTotalPrice}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>SHIPPING</span>
          <span className={styles.value}>${costs.shipping}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>VAT (INCLUDED)</span>
          <span className={styles.value}>${costs.VAT}</span>
        </li>
        <li className={styles.li}>
          <span className={styles.label}>GRAND TOTAL</span>
          <span className={styles.value}>${findGrandTotalPrice}</span>
        </li>
      </ul>
      <button
        className={`btn ${styles.summaryBtn}`}
        onClick={handleContinueClick}
        type="submit"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Summary;
