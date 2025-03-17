/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigate } from "react-router-dom";
import styles from "./checkout-modal.module.css";
import Modal from "react-modal";
import { useContext, useState } from "react";
import {
  ContextType,
  SelectedItem,
  SelectedProductsContext,
} from "../../../../context/SelectedProductsContext";
import orderConfirmation from "../../../../assets/checkout/icon-order-confirmation.svg";
import ProductPreview from "../../../../components/product-preview/ProductPreview";
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
  },
  content: {
    width: "540px",
    minHeight: "fit-content",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
};

const CheckoutModal = ({ isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const context = useContext(SelectedProductsContext) as ContextType;
  const [viewLess, setViewLess] = useState(true);

  const firstProduct: SelectedItem[] = context?.selectedItems
    ? [context.selectedItems[0]]
    : [];

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
    <div>
      <Modal
        isOpen={isOpen}
        ariaHideApp={false}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className={styles.container}>
          <img src={orderConfirmation} alt="" />
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>

          <div className={styles.content}>
            <div className={styles.left}>
              {(viewLess ? firstProduct : context?.selectedItems || []).map(
                (item, index) => {
                  return (
                    <section
                      className={styles.row}
                      key={item?.product.id ? `${item?.product.id}` : index}
                    >
                      <ProductPreview imgSize={50} product={item?.product} />
                      <p>x{item?.amount}</p>
                    </section>
                  );
                }
              )}
              <button
                style={{
                  display:
                    context.selectedItems?.length === 1 ? "none" : "block",
                }}
                onClick={() => {
                  setViewLess(!viewLess);
                }}
                className={styles.showMoreBtn}
              >
                 {viewLess
                  ? `and ${(context?.selectedItems?.length ?? 0) - 1} other item(s)`
                  : "View less"}
              </button>
            </div>
            <div className={styles.right}>
              <h3>GRAND TOTAL</h3>
              <h3>
                ${" "}
                {findGrandTotalPrice({
                  totalPrice: findTotalPrice(),
                  shipping: costs.shipping,
                  vat: costs.VAT,
                })}
              </h3>
            </div>
          </div>

          <button
            className={`btn ${styles.btn}`}
            onClick={() => {
              navigate("/");
              setIsOpen(false);
            }}
            
          >
            Back to home
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutModal;
