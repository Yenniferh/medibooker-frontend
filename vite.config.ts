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
});
