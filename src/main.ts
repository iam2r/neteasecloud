import "minireset.css";
import "normalize.css";
import "swiper/css/swiper.css";
import "@/styles/_adapter.scss";
import "./state";
import Vue from 'vue'
import router from './router';
import App from "./App";
import { loadScripts } from './common/Utils';
import VueTouch from "vue-touch";
import "./context";

loadScripts({ id: 'font-icon', src: '//at.alicdn.com/t/font_1955919_p3gh301jc.js' }).then(() => {
  Vue.config.productionTip = false;
  Vue.use(VueTouch, { name: 'v-touch' });
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')

})
