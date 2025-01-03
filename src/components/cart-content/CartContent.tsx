import { useContext } from "react";
import { SelectedProductsContext } from "../../context/SelectedProductsContext";
import ProductBtn from "../product-btn/ProductBtn";
import { useNavigate } from "react-router-dom";
import styles from "./cart-content.module.css";
import ProductPreview from "../product-preview/ProductPreview";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartContent = ({ setIsOpen }: Props) => {
  const context = useContext(SelectedProductsContext);
  //console.log(context?.selectedItems);
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

  return (
    <div>
      <header>
        <h2>CART ({context?.selectedItems?.length})</h2>
        <button onClick={removeAll}>Remove All</button>
      </header>
      <div style={{margin: "10px 0"}}>
        {(context?.selectedItems || []).map((item) => {
          return (
            <section className={styles.row} key={item.product.id}>
     
              <ProductPreview product={item.product} />
              <ProductBtn product={item.product} count={item.amount} size="small" />
            </section>
          );
        })}
      </div>

      <section>
        <p>TOTAL</p>
        <p>$ {findTotalPrice()}</p>
      </section>
      <button
        onClick={() => {
          navigate("/checkout");
          setIsOpen(false);
        }}
      >
        checkout
      </button>
    </div>
  );
};

export default CartContent;
