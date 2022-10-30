import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(
  {
    plugins: [react()],
    build: {
      outDir: './src/public/js/',
      rollupOptions: {
        input: {
          bundle: './src/app/index.jsx',
        },
        output: {
          entryFileNames: '[name].js',
        }
      },
    }
  }
)
