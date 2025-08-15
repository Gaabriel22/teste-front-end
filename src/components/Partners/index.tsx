import styles from "./styles.module.scss"
import partnersImg from "../../assets/partners-image.png"

export const Partners = () => {
  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        {[1, 2].map((_, index) => (
          <div key={index} className={styles.partnerBanner}>
            <img src={partnersImg} alt="Partner background" className={styles.bannerBg} />
            <div className={styles.bannerOverlay} />
            <div className={styles.bannerContent}>
              <h2>Parceiros</h2>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
              <a href="#" className={styles.bannerButton}>
                Confira
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
