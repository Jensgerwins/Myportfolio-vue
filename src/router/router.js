import { createMemoryHistory, createRouter } from "vue-router";
import Lebenslauf from "../View/Lebenslauf.vue";
import Projekte from "../View/Projekte.vue";
import Login from "../View/Login.vue";
import App from "@/App.vue";

const routes = [
  {
    path: "/app",
    component: App,
    name: "App",
  },
  {
    path: "/projekte",
    component: Projekte,
    name: "Projekte",
  },
  {
    path: "/lebenslauf",
    component: Lebenslauf,
    name: "Lebenslauf",
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
