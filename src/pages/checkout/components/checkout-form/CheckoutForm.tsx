/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable no-empty-pattern */
import RadioInput from "../../../../components/radio-input/RadioInput";
import styles from "./checkout-form.module.css";
import iconCash from "../../../../assets/checkout/icon-cash-on-delivery.svg";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<{
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipCode: string;
    city: string;
    country: string;
  }>;
  errors: FieldErrors<FormData>;
};

const CheckoutForm = ({ register, errors }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">(
    "e-money"
  );
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (
    <div className={styles.form}>
      <h1>CHECKOUT</h1>
      <h3 className={styles.inputHeading}>Billing Details</h3>
      <section className={styles.inputSection}>
        <div className={styles.inputContainer}>
          <label
            style={{
              color: errors?.name?.message ? "var(--color-error)" : "",
            }}
            className="label"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
              maxLength: {
                value: 30,
                message: "Name must be at most 30 characters long",
              },
            })}
            className="input"
            style={{
              borderColor: errors?.name?.message ? "var(--color-error)" : "",
            }}
            type="text"
            name="name"
            id="name"
            placeholder="Alexei ward"
          />
          <p className={styles.errorText}>{errors?.name?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <label
            style={{
              color: errors?.email?.message ? "var(--color-error)" : "",
            }}
            className="label"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email your email",
              },
              pattern: {
                value: emailRegex,
                message: "wrong format",
              },
            })}
            className="input"
            type="text"
            name="email"
            id="email"
            style={{
              borderColor: errors?.email?.message ? "var(--color-error)" : "",
            }}
          />
          <p className={styles.errorText}>{errors.email?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            {...register("phoneNumber")}
            className="input"
            type="text"
            name=""
            id="phone-number"
          />
        </div>
      </section>
      {""}
      <h3 className={styles.inputHeading}>Shipping Info</h3>
      <section className={styles.inputSection}>
        <div className={styles.inputContainer} style={{ gridColumn: "1 / 3" }}>
          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            {...register("address")}
            className="input"
            type="text"
            name=""
            id="address"
            placeholder=""
          />
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="zip-code">
            Zip Code
          </label>
          <input
            {...register("zipCode")}
            className="input"
            type="text"
            name=""
            id="zip-code"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="city">
            City
          </label>
          <input
            {...register("city")}
            className="input"
            type="text"
            name=""
            id="city"
          />
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="country">
            Country
          </label>
          <input
            {...register("country")}
            className="input"
            type="text"
            name=""
            id="country"
          />
        </div>
      </section>

      <h3 className={styles.inputHeading}>PAYMENT DETAILS</h3>
      <section className={styles.inputSection} style={{ rowGap: "16px" }}>
        <h3 className="label">Payment Method</h3>

        <RadioInput
          checked={paymentMethod === "e-money"}
          label="e-Money"
          name="payment-method"
          onChange={() => setPaymentMethod("e-money")}
        />
        <div style={{ gridColumn: "2/3" }}>
          <RadioInput
            checked={paymentMethod === "cash"}
            label="Cash on Delivery"
            name="payment-method"
            onChange={() => setPaymentMethod("cash")}
          />
        </div>
      </section>
      {/*e-money input */}
      {paymentMethod === "e-money" && (
        <section className={styles.inputSection} style={{ marginBottom: "0" }}>
          <div className={styles.inputContainer}>
            <label className="label" htmlFor="e-money-number">
              e-Money Number
            </label>
            <input
              className="input"
              type="number"
              id="e-money-number"
              placeholder="238521993"
            />
          </div>
          <div className={styles.inputContainer}>
            <label className="label" htmlFor="e-money-pin">
              e-Money PIN
            </label>
            <input
              className="input"
              type="number"
              id="e-money-pin"
              placeholder="6891"
            />
          </div>
        </section>
      )}

      {/*Cash method */}
      {paymentMethod === "cash" && (
        <section className={styles.cashDelivery}>
          <img src={iconCash} alt="" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </section>
      )}
    </div>
  );
};

export default CheckoutForm;
