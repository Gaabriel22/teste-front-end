import { useEffect, useRef, useState } from "react"
import type { Product } from "../../types/Product"
import { fetchProduct } from "../../utils/fetchProducts"
import styles from "./styles.module.scss"

interface ProductsShowcaseProps {
  showTabs?: boolean
  showViewAll?: boolean
}

export const ProductsShowcase = ({ showTabs = true, showViewAll = true }: ProductsShowcaseProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProduct()
      setProducts(data)
    }
    loadProducts()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const scrollAmount = 300
    carouselRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section id="products1" className={styles.productShowcase} aria-label="Produtos relacionados">
      <div className={styles.container}>
        <header className={styles.sectionTitleContainer}>
          <div className={styles.row}>
            <div className={styles.line} aria-hidden="true"></div>
            <h2>Produtos relacionados</h2>
            <div className={styles.line} aria-hidden="true"></div>
          </div>

          {showViewAll && (
            <a href="#" className={styles.viewAllLink} aria-label="Ver todos os produtos relacionados">
              Ver todos
            </a>
          )}
        </header>

        {showTabs && (
          <nav className={styles.productTabs} aria-label="Categorias de produtos">
            {["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS", "VER TODOS"].map((tab) => (
              <a key={tab} href="#" className={styles.tabLink}>
                {tab}
              </a>
            ))}
          </nav>
        )}

        <div className={styles.productCarouselWrapper}>
          <button
            className={`${styles.carouselArrow} ${styles.prev}`}
            onClick={() => scroll("left")}
            aria-label="Scroll para a esquerda"
          >
            <img src="/icons/arrow-left.svg" alt="" aria-hidden="true" />
          </button>

          <div className={styles.productCarousel} ref={carouselRef} role="list">
            {products.map((product, index) => (
              <article key={index} className={styles.productCard} role="listitem">
                <div className={styles.productImageContainer}>
                  <img src={product.photo} alt={product.productName} className={styles.productImage} loading="lazy" />
                </div>
                <div className={styles.productInfo}>
                  <p className={styles.productDescription}>{product.descriptionShort}</p>
                  <p className={styles.productPriceOld}>R$ {(product.price * 1.05).toFixed(2)}</p>
                  <p className={styles.productPriceNew}>R$ {product.price.toFixed(2)}</p>
                  <p className={styles.productInstalments}>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                  <p className={styles.productShipping}>Frete grátis</p>
                </div>
                <button className={styles.buyButton}>Comprar</button>
              </article>
            ))}
          </div>

          <button
            className={`${styles.carouselArrow} ${styles.next}`}
            onClick={() => scroll("right")}
            aria-label="Scroll para a direita"
          >
            <img src="/icons/arrow-right.svg" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
