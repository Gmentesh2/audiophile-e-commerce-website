import { Link } from "react-router-dom";
import styles from "./hero.module.css";
//import heroImage from "../../assets/home/desktop/image-hero.jpg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={`container ${styles.heroContainer} `}>
        <div className={styles.heroContent}>
          <h4>new product</h4>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link className={styles.btn} to={"/single-product/4"}>See product</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
