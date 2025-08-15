import styles from "./styles.module.scss"
import econverseLogo from "../../assets/Logo.png"

export const Footer = () => {
  return (
    <footer id="footer" className={styles.siteFooter}>
      <div className={styles.newsletterSection}>
        <div className={`container ${styles.newsletterContainer}`}>
          <div className={styles.newsletterText}>
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assina a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          <form className={styles.newsletterForm}>
            <div className={styles.formInputs}>
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>
            <div className={styles.formTerms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Aceitos os termos e condições</label>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className={`container ${styles.footerMainContainer}`}>
          <div className={styles.footerAbout}>
            <a href="#" className={styles.footerLogo}>
              <img src={econverseLogo} alt="Econverse Logo" />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/icons/facebook.svg" alt="Facebook" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className={styles.footerLinksDivider} />

          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Institucional</h4>
              <ul>
                <li>
                  <a href="#">Sobre Nós</a>
                </li>
                <li>
                  <a href="#">Movimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>Ajuda</h4>
              <ul>
                <li>
                  <a href="#">Suporte</a>
                </li>
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="#">Perguntas Frequentes</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h4>Termos</h4>
              <ul>
                <li>
                  <a href="#">Termos e Condições</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Troca e Devolução</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </footer>
  )
}
