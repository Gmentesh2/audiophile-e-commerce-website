import styles from "./category-section.module.css";
type Props = {
  category: string | undefined;
};

const CategorySection = ({ category }: Props) => {
  return (
    <section  className={styles.section}>
      <h2 data-aos="zoom-in-up" className={styles.h}>{category}</h2>
    </section>
  );
};

export default CategorySection;
