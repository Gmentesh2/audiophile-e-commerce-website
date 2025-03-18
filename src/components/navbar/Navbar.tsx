import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Modal from "react-modal";
import CartContent from "../cart-content/CartContent";
import logo from "../../assets/audiophile.svg";
import burgerMenuIMG from "../../assets/shared/tablet/icon-hamburger.svg";
import ThumbnailSection from "../thumbnail-section/ThumbnailSection";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.50)",
    padding: "20px",
  },
};

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);

  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen);

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.navbarContainer}`}>
        <div className={styles.navbarLeft}>
          <button
            onClick={toggleBurgerMenu}
            className={styles.burgerMenuBtn}
            type="button"
          >
            <img src={burgerMenuIMG} alt="" />
          </button>
          <Link className={styles.home} to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
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
      {isBurgerMenuOpen && (
        <>
          <button
            className={styles.overlay}
            onClick={toggleBurgerMenu}
          ></button>
          <div className={styles.burgerMenuContent}>
            <ThumbnailSection />
          </div>
        </>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        className={styles.modalContent}
      >
        <CartContent setIsOpen={setModalIsOpen} />
      </Modal>
    </div>
  );
};

export default Navbar;
