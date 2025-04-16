import { Link } from "react-router-dom";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.heroContainer} `}>
        <div className={styles.heroContent}>
          <h4 data-aos="fade-down">new product</h4>
          <h1 data-aos="fade-down">XX99 Mark II Headphones</h1>
          <p data-aos="fade-down">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link data-aos="zoom-in-up" className={styles.btn} to={"/single-product/4"}>
            See product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
