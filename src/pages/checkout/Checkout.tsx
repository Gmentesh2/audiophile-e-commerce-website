import CheckoutForm from "./components/checkout-form/CheckoutForm";
import styles from "./checkout.module.css";
import Summary from "./components/summary/Summary";
import { useNavigate } from "react-router-dom";
import CheckoutModal from "./components/checkout-modal/CheckoutModal";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};
const Checkout = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    setIsOpen(true)
  };
  console.log(errors);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.checkoutContainer}>
            <CheckoutForm register={register} errors={errors} />
            <Summary setIsOpen={setIsOpen} />
          </div>
        </form>
      </div>
      <CheckoutModal isOpen={modalIsOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default Checkout;
