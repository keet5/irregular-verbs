import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  base: "/irregular-verbs/",
  plugins: [solid()],
  build: {
    // assetsInlineLimit: 0,
  },

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
