/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    coverage: {
      reporter: ["text", "json", "html"],
    },
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: ["./tests/setupTests.ts"],
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
});
