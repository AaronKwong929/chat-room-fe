import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: `./`,
    alias: { "@": require("path").resolve(__dirname, "src") },
    server: {
        host: `localhost`,
        port: 9090,
        strictPort: true,
        proxy: {
            "/api/": {
                target: `localhost:9000`,
                changeOrigin: true,
                ws: true,
                rewrite: (path) => path.replace(/^\/api\//, ""),
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                // example : additionalData: `@import "./src/design/styles/variables";`
                // don't need to include file extend .scss
                additionalData: `@import "./src/static/style/variables";`,
            },
        },
    },
    build: {
        outDir: `chat-room`,
    },
});
