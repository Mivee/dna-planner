import { createApp } from "vue";
import "@fortawesome/fontawesome-free/js/all.min.js";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);

app.mount("#app");
