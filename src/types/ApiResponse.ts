import type { Product } from "./Product"

export interface ApiResponse {
  success: boolean
  products: Product[]
}
