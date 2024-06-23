import "./assets/main.css";

import { createApp } from "vue";
import router from "../src/router/router.js";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
