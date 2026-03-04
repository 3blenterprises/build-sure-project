import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Define __dirname manually for ES Modules
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return {
    // UPDATED FOR CUSTOM DOMAIN:
    // This tells the browser to look for assets at the root of your domain.
    base: '/', 
    
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
