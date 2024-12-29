import styles from "./category-section.module.css";
type Props = {
  category: string | undefined;
};

const CategorySection = ({ category }: Props) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h}>{category}</h2>
    </section>
  );
};

export default CategorySection;
