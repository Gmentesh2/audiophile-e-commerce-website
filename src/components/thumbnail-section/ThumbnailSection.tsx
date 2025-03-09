import { Link } from "react-router-dom";
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import styles from "./thumbnail-section.module.css";
const ThumbnailSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.sectionContainer}`}>
        <article className={styles.card}>
          <img src={headphonesImg} alt="#" />
          <h3>Headphones</h3>
          <Link className={styles.link} to={"/products/headphones"}>
            <span className={styles.shop}>Shop</span>{" "}
            <span className={styles.arrow}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                className="arrow"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </article>
        <article className={styles.card}>
          <img src={speakersImg} alt="" />
          <h3>Speakers</h3>
          <Link className={styles.link} to={"/products/speakers"}>
            <span className={styles.shop}>Shop</span>{" "}
            <span className={styles.arrow}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </article>
        <article className={styles.card}>
          <img src={earphonesImg} alt="" />
          <h3>Earphones</h3>
          <Link className={styles.link} to={"/products/earphones"}>
            <span className={styles.shop}>Shop</span>{" "}
            <span className={styles.arrow}>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.3219 1L6.3219 6L1.3219 11"
                  stroke="#D87D4A"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default ThumbnailSection;
