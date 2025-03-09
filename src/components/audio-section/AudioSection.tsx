/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "./audio-section.module.css";
import icon from "../../assets/shared/desktop/image-best-gear.jpg";
const AudioSection = () => {
  return (
    <section className={styles.section}>
      <div className={`${styles.audioSectionContainer} container`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.heading}>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p className={styles.p}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img className={styles.img} src={icon} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default AudioSection;
