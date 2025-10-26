import { useContext } from "react";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";
import ProductBtn from "../product-btn/ProductBtn";
import { useNavigate } from "react-router-dom";
import styles from "./cart-content.module.css";
import ProductPreview from "../product-preview/ProductPreview";
import emptyCartImage from "../../assets/emptyCartImage.png";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartContent = ({ setIsOpen }: Props) => {
  const context = useContext(SelectedProductsContext);
  const navigate = useNavigate();

  const removeAll = () => {
    context?.setSelectedItems([]);
  };
  const findTotalPrice = () => {
    let totalPrice = 0;
    context?.selectedItems?.forEach((item) => {
      totalPrice += item.product.price * item.amount;
    });
    return totalPrice;
  };

  if (context?.selectedItems?.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <img
          className={styles.emptyCartImage}
          src={emptyCartImage}
          alt="empty cart"
        />
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <header className={styles.header}>
        <h2>CART ({context?.selectedItems?.length})</h2>
        <button onClick={removeAll}>Remove all</button>
      </header>
      <div>
        {(context?.selectedItems || []).map((item) => {
          return (
            <section className={styles.row} key={item.product.id}>
              <ProductPreview product={item.product} />
              <ProductBtn
                product={item.product}
                count={item.amount}
                size="small"
              />
            </section>
          );
        })}
      </div>

      <section className={styles.totalSection}>
        <p className={styles.total}>TOTAL</p>
        <p className={styles.totalPrice}>$ {findTotalPrice()}</p>
      </section>
      <button
        onClick={() => {
          navigate("/checkout");
          setIsOpen(false);
        }}
        className={styles.checkout}
      >
        checkout
      </button>
    </div>
  );
};

export default CartContent;
