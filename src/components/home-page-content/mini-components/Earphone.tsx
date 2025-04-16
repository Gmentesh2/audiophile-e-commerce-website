import { Link } from "react-router-dom";
import styles from "./mini-content.module.css";
import earphone from "../../../assets/home/desktop/image-earphones-yx1.jpg";

const Earphone = () => {
  return (
    <div data-aos="fade-up" className={styles.earphone}>
      <section>
        <img src={earphone} alt="" />
      </section>
      <section className={styles.earphoneContent}>
        <h1>YX1 EARPHONES</h1>
        <Link to={"/single-product/1"}>See Product</Link>
      </section>
    </div>
  );
};

export default Earphone;
