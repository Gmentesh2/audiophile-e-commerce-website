import Earphone from "./mini-components/Earphone"
import styles from "./home-page-content.module.css"
import Speakers from "./mini-components/Speaker"

const HomePageContent = () => {
  return (
    <div className={styles.homePageContent}>
        <div className={`container ${styles.contentContainer}`}  >
            <Speakers />
            <Earphone />
        </div>
    </div>
  )
}

export default HomePageContent