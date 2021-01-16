import { createApp } from "vue";
import VueObserveVisibility from "vue3-observe-visibility";

import App from "./App.vue";
import "./assets/scss/app.scss";

createApp(App)
  .use(VueObserveVisibility)
  // .directive("observe-visibility", ObserveVisibility)
  .mount("#app");
