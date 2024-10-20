import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Importe o módulo path
//  "./src/presentation/components"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/presentation/components"),
      "@pages": path.resolve(__dirname, "src/app/pages"),
    },
  },
});
