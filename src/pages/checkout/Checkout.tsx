import CheckoutForm from "./components/checkout-form/CheckoutForm";
import styles from "./checkout.module.css";
import Summary from "./components/summary/Summary";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "./components/checkout-modal/CheckoutModal";
import { useState } from "react";

const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <main className={`${styles.main}`}>
      <div className="container">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="link"
        >
          Go back
        </button>
        <div className={styles.checkoutContainer}>
          <CheckoutForm />
          <Summary setIsOpen={setIsOpen} />
        </div>
      </div>
      <CheckoutModal isOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default Checkout;
