import { createApp } from "vue";
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from "@/App.vue";
import "@/static/style/index.scss";

const app = createApp(App);

app.mount("#app");
