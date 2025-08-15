import styles from "./styles.module.scss"
import logoBrands from "../../assets/Logo.png"

export const Brands = () => {
  return (
    <section id="brands" className={styles.brandsSection}>
      <div className={styles.container}>
        <h2 className={styles.brandsTitle}>Navegue por marcas</h2>
        <div className={styles.brandsGrid}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={styles.brandLogoWrapper}>
              <img src={logoBrands} alt={`Brand Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
