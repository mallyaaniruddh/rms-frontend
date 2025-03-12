import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/rms-frontend/",  // this matches GitHub repo name
  define: {
    "VITE_BASE_URL": '"/rms-frontend/"',  // Ensures proper asset paths
  }
});
