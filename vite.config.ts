import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: false,
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      "@theme": fileURLToPath(new URL("./src/theme/scss", import.meta.url)),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@theme/bootstrap.scss";'
      },
    },
  },
});
