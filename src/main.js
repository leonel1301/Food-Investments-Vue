import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import PrimeVue from "primevue/config";
import SplitButton from "primevue/splitbutton";
import Toolbar from "primevue/toolbar";
import Card from "primevue/card";

import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import i18n from "./locales/i18n";

const app = createApp(App);

app.component("Button", Button);
app.component("InputText", InputText);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.component("SplitButton", SplitButton);
app.component("Toolbar", Toolbar);
app.component("Toast", Toast);
app.component("Card", Card);

app.use(ToastService);
app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.mount("#app");