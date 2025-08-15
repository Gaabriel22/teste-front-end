import { useState } from "react"
import type { Product } from "../../types/Product"
import styles from "./styles.module.scss"

interface ProductModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen) return null

  const increment = () => setQuantity((q) => q + 1)
  const decrement = () => setQuantity((q) => (q > 1 ? q - 1 : 1))

  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.popupClose} onClick={onClose}>
          <img src="/icons/line-close-1.svg" alt="Fechar" />
          <img src="/icons/line-close-2.svg" alt="Fechar" />
        </button>

        <div className={styles.popupImage}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.popupDetails}>
          <h3>{product.productName}</h3>
          <p className={styles.popupPrice}>
            R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>

          <p className={styles.popupDescription}>{product.descriptionShort}</p>
          <a href="#" className={styles.popupDetailsLink}>
            Veja mais detalhes do produto &gt;
          </a>

          <div className={styles.popupActions}>
            <div className={styles.quantitySelector}>
              <button onClick={decrement}>
                <img src="/icons/minus.svg" alt="Retirar" />
              </button>
              <span>{quantity.toString().padStart(2, "0")}</span>
              <button onClick={increment}>
                <img src="/icons/plus.svg" alt="Adicionar" />
              </button>
            </div>
            <button className={styles.btnBuyPopup}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
