/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "react-modal";
import CartContent from "../cart-content/CartContent";
import logo from "../../assets/audiophile.svg";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    padding: "20px",
  },
  content: {
    top: "130px",
    left: "unset",
    right: "calc((100vw - 1110px)/2)",
    width: "377px",
    height: "fit-content",
  },
};

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <nav className={styles.links}>
          <Link to={"/"}>Home</Link> 
          <Link to={"/products/headphones"}>Headphones</Link>
          <Link to={"/products/speakers"}>Speakers</Link>
          <Link to={"/products/earphones"}>Earphones</Link>
        </nav>
        <button className={styles.cart} onClick={() => setModalIsOpen(true)}>
          <IoCartOutline size={25} color="var(--color-text-two)" />
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <CartContent setIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
};

export default Navbar;
