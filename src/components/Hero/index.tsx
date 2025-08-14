import styles from "./styles.module.scss"
import heroBackground from "../../assets/hero-background.png"

export const Hero = () => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <img src={heroBackground} alt="Black Friday promotion" />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <h1>Venha conhecer nossas promoções</h1>
        <p>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#" className={styles.heroButton}>
          Ver produto
        </a>
      </div>
    </section>
  )
}
