import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/econverse": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/econverse/, ""),
      },
    },
  },
})
