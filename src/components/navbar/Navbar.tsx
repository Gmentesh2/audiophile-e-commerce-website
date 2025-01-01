/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "react-modal";
import CartContent from "../cart-content/CartContent";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.46)',
    padding: "20px"
  },
  content: {
    top: "130px",
    left: "unset",
    right: "calc((100vw - 1110px)/2)",
    width: "377px",
    height: "488px"
  },

};

const Navbar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <h2>audiophile</h2>
        <nav className={styles.links}>
          <Link to={"/"}>Home</Link>
          <Link to={"/products/headphones"}>Headphones</Link>
          <Link to={"/products/speakers"}>Speakers</Link>
          <Link to={"/products/earphones"}>Earphones</Link>
        </nav>
        <button className={styles.cart} onClick={() => setIsOpen(true)}>
          <IoCartOutline size={25} color="var(--color-text-two)" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
       // overlayClassName={"cart-modal-overlay"}
      >
        <CartContent setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
};

export default Navbar;
