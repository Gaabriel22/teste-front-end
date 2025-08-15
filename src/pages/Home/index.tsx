import { Brands } from "../../components/Brands"
import { Categories } from "../../components/Categories"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "../../components/Hero"
import { Partners } from "../../components/Partners"
import { ProductsShowcase } from "../../components/ProductsShowcase"

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <ProductsShowcase showTabs={true} showViewAll={false} />
      <Partners />
      <ProductsShowcase showTabs={false} showViewAll={true} />
      <Partners />
      <Brands />
      <ProductsShowcase showTabs={false} showViewAll={true} />
      <Footer />
    </>
  )
}
