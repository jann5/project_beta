import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    // Gzip compression
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    // Brotli compression
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-slot",
            "@radix-ui/react-label",
            "@radix-ui/react-separator",
            "class-variance-authority",
            "clsx",
            "tailwind-merge",
            "lucide-react",
            "sonner"
          ],
          "motion-vendor": ["framer-motion"],
          "convex-vendor": ["convex"],
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
