import styles from "./styles.module.scss"
import logoEconverse from "../../assets/Logo.png"

export const Header = () => {
  return (
    <header className={styles.siteHeader}>
      {/* Top Bar */}
      <div className={styles.headerTop}>
        <div className={`${styles.container} ${styles.headerTopContainer}`}>
          <div className={styles.promoItem}>
            <img src="/icons/ShieldCheck.svg" alt="Escudo Verificado" className={styles.promoIcon} />
            <p>
              Compra <span className={styles.boldText}>100% segura</span>
            </p>
          </div>
          <div className={styles.promoItem}>
            <img src="/icons/Truck.svg" alt="Caminhão" className={styles.promoIcon} />
            <p>
              <span className={styles.boldText}>Frete grátis</span> acima de R$ 200
            </p>
          </div>
          <div className={styles.promoItem}>
            <img src="/icons/CreditCard.svg" alt="Cartão de Crédito" className={styles.promoIcon} />
            <p>
              <span className={styles.boldText}>Parcele</span> suas compras
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className={styles.headerMain}>
        <div className={`${styles.container} ${styles.headerMainContainer}`}>
          {/* Logo */}
          <a href="/" className={styles.logo} aria-label="Página inicial">
            <img src={logoEconverse} alt="Econverse Logo" />
          </a>

          {/* Search Bar */}
          <form className={styles.searchBar}>
            <input type="text" placeholder="O que você está buscando?" className={styles.searchInput} />
            <button type="submit" className={styles.searchButton} aria-label="Pesquisar">
              <img src="/icons/MagnifyingGlass.svg" alt="Lupa" className={styles.searchIcon} />
            </button>
          </form>

          {/* Header Actions */}
          <div className={styles.headerActions}>
            <img src="/icons/Group.svg" alt="Meus pedidos" className={styles.headerActionIcon} />
            <img src="/icons/Heart.svg" alt="Favoritos" className={styles.headerActionIcon} />
            <img src="/icons/UserCircle.svg" alt="Minha conta" className={styles.headerActionIcon} />
            <img src="/icons/ShoppingCart.svg" alt="Carrinho de compras" className={styles.headerActionIcon} />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.headerNav}>
        <div className={styles.container}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">TODAS CATEGORIAS</a>
            </li>
            <li>
              <a href="#">SUPERMERCADO</a>
            </li>
            <li>
              <a href="#">LIVROS</a>
            </li>
            <li>
              <a href="#">MODA</a>
            </li>
            <li>
              <a href="#">LANÇAMENTOS</a>
            </li>
            <li>
              <a href="#" className={styles.highlight}>
                OFERTAS DO DIA
              </a>
            </li>
            <li>
              <a href="#" className={styles.navIconLink}>
                <img src="/icons/CrownSimple.svg" alt="Coroa Simples" />
                <span>ASSINATURA</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
