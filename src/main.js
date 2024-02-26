import "./assets/main.css";
import "./api/axios";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Lara from "../src/assets/presets/lara";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  unstyled: true,
  pt: Lara, //apply preset
});

app.mount("#app");
