import { defineConfig } from "vite";
import * as path from "path";
import vue from "@vitejs/plugin-vue";
import analyze from "rollup-plugin-analyzer";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    visualizer({
      filename: "./dist/bundle.html",
      open: true,
      gzipSize: true,
      template: "treemap", // sunburst|treemap|network
      sourcemap: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      plugins: [analyze()],
    },
  },
});
