/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import logo from "../../assets/shared/desktop/logo.svg";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.left}>
          <img src={logo} alt="" />
          <p className={styles.p}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={styles.p2}>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={styles.right}>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/products/headphones"}>Headphones</Link>
            <Link to={"/products/speakers"}>Speakers</Link>
            <Link to={"/products/earphones"}>Earphones</Link>
          </nav>
          <ul>
            <li>
              <img src={facebookIcon} alt="" />
            </li>
            <li>
              <img src={twitterIcon} alt="" />
            </li>
            <li>
              <img src={instagramIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
