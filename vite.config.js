import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal_website_yt/",
  build: {
    outDir: "./docs",
    // outDir: "./dist",
  },
});
