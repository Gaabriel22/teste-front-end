import axios from "axios"
import type { Product } from "../types/Product"
import type { ApiResponse } from "../types/ApiResponse"

export const fetchProduct = async (): Promise<Product[]> => {
  const { data } = await axios.get<ApiResponse>(
    "/econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  )
  return data.products
}
