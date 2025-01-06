import { useContext } from "react";
import styles from "./summary.module.css";
import { SelectedProductsContext } from "../../../../context/SelectedProductsContext";
import ProductPreview from "../../../../components/product-preview/ProductPreview";
type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Summary = ({ setIsOpen }: Props) => {
  const context = useContext(SelectedProductsContext);

  const findTotalPrice = () => {
    let totalPrice = 0;
    context?.selectedItems?.forEach((item) => {
      totalPrice += item.product.price * item.amount;
    });
    return totalPrice;
  };
  const costs = {
    shipping: 10,
    VAT: 5,
  };
  const findGrandTotalPrice = ({
    totalPrice,
    shipping,
    vat,
  }: {
    totalPrice: number;
    shipping: number;
    vat: number;
  }) => {
    return totalPrice + shipping + vat;
  };

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
          <span className={styles.value}>$ {findTotalPrice()}</span>
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
          <span className={styles.value}>
            $
            {findGrandTotalPrice({
              totalPrice: findTotalPrice(),
              shipping: costs.shipping,
              vat: costs.VAT,
            })}
          </span>
        </li>
      </ul>
      <button
        className={`btn ${styles.summaryBtn}`}
        onClick={() => {
          if (
            context?.selectedItems?.length &&
            context?.selectedItems.length > 0
          ) {
            setIsOpen(true);
          }
        }}
        type="submit"
      >
        CONTINUE
      </button>
    </div>
  );
};

export default Summary;
