import "minireset.css";
import "normalize.css";
import "swiper/css/swiper.css";
import "./_adapter.scss";

import Vue from 'vue'
import router from './router';
import App from "./App";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
