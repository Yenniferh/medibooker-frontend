// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const localServer = {
  host: "localhost",
  open: true,
  port: 3003,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: localServer,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "html"],
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.d.ts", "src/setupTests.ts", "src/main.tsx", "src/**/types.ts"],
      watermarks: {
        statements: [80, 95],
        functions: [80, 95],
        branches: [80, 95],
        lines: [80, 95],
      },
    },
  },
});
