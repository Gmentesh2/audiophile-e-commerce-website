/* eslint-disable @typescript-eslint/no-unused-vars */
import RadioInput from "../../../../components/radio-input/RadioInput";
import styles from "./checkout-form.module.css";
import iconCash from "../../../../assets/checkout/icon-cash-on-delivery.svg";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "../../Checkout";

type Props = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const CheckoutForm = ({ register, errors }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState<"e-money" | "cash">(
    "e-money"
  );
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /^\+?\d+$/;

  return (
    <div data-aos="fade-up" className={styles.form}>
      <h1>CHECKOUT</h1>
      <h3 className={styles.inputHeading}>Billing Details</h3>
      <section className={`${styles.inputSection} ${styles.miniSection}`}>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="name">
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
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Enter your email",
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
            placeholder="alexei@mail.com"
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
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Phone number is required",
              },
              pattern: {
                value: numberRegex,
                message: "wrong format",
              },
            })}
            className="input"
            type="text"
            id="phone-number"
            placeholder="+1 202-555-0136"
            style={{
              borderColor: errors?.phoneNumber?.message
                ? "var(--color-error)"
                : "",
            }}
          />
          <p className={styles.errorText}>{errors.phoneNumber?.message}</p>
        </div>
      </section>
      {""}
      <h3 className={styles.inputHeading}>Shipping Info</h3>
      <section className={`${styles.inputSection} ${styles.miniSection}`}>
        <div className={styles.inputContainer} style={{ gridColumn: "1 / 3" }}>
          <label className="label" htmlFor="address">
            Address
          </label>
          <input
            {...register("address", {
              required: {
                value: true,
                message: "Address is required",
              },
            })}
            className="input"
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            style={{
              borderColor: errors?.address?.message ? "var(--color-error)" : "",
            }}
          />
          <p className={styles.errorText}>{errors.address?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="zip-code">
            Zip Code
          </label>
          <input
            {...register("zipCode", {
              required: {
                value: true,
                message: "Zip Code is required",
              },
            })}
            className="input"
            type="text"
            id="zip-code"
            placeholder="10001"
            style={{
              borderColor: errors?.zipCode?.message ? "var(--color-error)" : "",
            }}
          />
          <p className={styles.errorText}>{errors.zipCode?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="city">
            City
          </label>
          <input
            {...register("city", {
              required: {
                value: true,
                message: "Please enter your city",
              },
            })}
            className="input"
            type="text"
            id="city"
            placeholder="New York"
            style={{
              borderColor: errors?.city?.message ? "var(--color-error)" : "",
            }}
          />
          <p className={styles.errorText}>{errors.city?.message}</p>
        </div>
        <div className={styles.inputContainer}>
          <label className="label" htmlFor="country">
            Country
          </label>
          <input
            {...register("country", {
              required: {
                value: true,
                message: "Please enter your country",
              },
            })}
            className="input"
            type="text"
            id="country"
            placeholder="United States"
            style={{
              borderColor: errors?.country?.message ? "var(--color-error)" : "",
            }}
          />
          <p className={styles.errorText}>{errors.country?.message}</p>
        </div>
      </section>

      <h3 className={styles.inputHeading}>PAYMENT DETAILS</h3>
      <section
        className={`${styles.inputSection} ${styles.miniSection2}`}
        style={{ rowGap: "16px" }}
      >
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
        <section
          className={`${styles.inputSection} ${styles.miniSection}`}
          style={{ marginBottom: "0" }}
        >
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
            <input className="input" type="number" id="e-money-pin" />
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
