import { Link } from "react-router-dom";
import styles from "../mini-components/mini-content.module.css";
import speaker1 from "../../../assets/home/desktop/image-speaker-zx9.png";
import decorator from "../../../assets/home/desktop/pattern-circles.svg";

const Speakers = () => {
  return (
    <div className={styles.speakersContainer}>
      <article className={styles["zx9-speaker"]}>
        <div className={styles["speaker-img"]}>
          <img className={styles.decorator} src={decorator} alt="" />
          <img className={styles.speakerIMG} src={speaker1} alt="" />
        </div>
        <div className={styles["speaker-content"]}>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={"/single-product/6"}>See Product</Link>
        </div>
      </article>
      <article className={styles["zx7-speaker"]}>
        <div className={styles["speaker-content-2"]}>
          <h1>ZX7 SPEAKER</h1>
          <Link to={"/single-product/5"}>See Product</Link>
        </div>
      </article>
    </div>
  );
};

export default Speakers;
