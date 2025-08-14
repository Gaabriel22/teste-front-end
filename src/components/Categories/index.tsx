import type React from "react"
import styles from "./styles.module.scss"

interface Category {
  name: string
  icon: React.ReactNode
  active?: boolean
}

// Lista de categorias
const categories: Category[] = [
  { name: "Tecnologia", icon: <img src="/icons/tecnologia-icon.svg" alt="Tecnologia" />, active: true },
  { name: "Supermercado", icon: <img src="/icons/supermercado-icon.svg" alt="Supermercado" /> },
  { name: "Bebidas", icon: <img src="/icons/whiskey-icon.svg" alt="Bebidas" /> },
  { name: "Ferramentas", icon: <img src="/icons/ferramentas-icon.svg" alt="Ferramentas" /> },
  { name: "Saúde", icon: <img src="/icons/cuidados-de-saude-icon.svg" alt="Saúde" /> },
  { name: "Esportes e Fitness", icon: <img src="/icons/corrida-icon.svg" alt="Esportes e Fitness" /> },
  { name: "Moda", icon: <img src="/icons/moda-icon.svg" alt="Moda" /> },
]

// Subcomponente para cada item de categoria
const CategoryItem = ({ name, icon, active }: Category) => (
  <a
    href="#"
    className={styles.categoryItem}
    aria-current={active ? "true" : undefined} 
  >
    <div className={`${styles.categoryIconWrapper} ${active ? styles.active : ""}`}>{icon}</div>
    <p className={`${styles.categoryLabel} ${active ? styles.activeLabel : ""}`}>{name}</p>
  </a>
)

export const Categories = () => (
  <section id="categories" className={styles.categoriesSection}>
    <div className={styles.categoriesGrid}>
      {categories.map((cat) => (
        <CategoryItem key={cat.name} {...cat} />
      ))}
    </div>
  </section>
)
