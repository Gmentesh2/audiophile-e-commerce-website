/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
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
        <button className={styles.cart}>
          <IoCartOutline size={25} color="var(--color-text-two)" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
