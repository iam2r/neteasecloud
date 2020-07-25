import "./state";
import "./context";
import "minireset.css";
import "normalize.css";
import "swiper/css/swiper.css";
import "@/styles/_adapter.scss";

import Vue from "vue";
import router from "./router";
import App from "./App";
import VueTouch from "vue-touch";
import { Promised } from "vue-promised";

Vue.config.productionTip = false;
Vue.component("promised", Promised);
Vue.use(VueTouch, { name: "v-touch" });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
