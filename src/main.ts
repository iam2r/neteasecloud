import "minireset.css";
import "normalize.css";
import "swiper/css/swiper.css";
import "@/styles/_adapter.scss";
import "./state";
import Vue from 'vue'
import router from './router';
import App from "./App";
import VueTouch from "vue-touch";
import ResizeObserver from "resize-observer-polyfill";
import "./context";


export enum ScreenState {
  LANDSCAPE='landscape',
  PORTRAIT='portrait'
}
const elements = [document.body];
const robserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (elements.includes(entry.target as HTMLElement)) {
      const screenState = innerWidth > innerHeight ?  ScreenState.LANDSCAPE:ScreenState.PORTRAIT;
      document.querySelector('html').setAttribute('data-screen', screenState);
      if(screenState==ScreenState.PORTRAIT){
        setTimeout(()=>{
          document.documentElement.scrollTop = 0;
        },300)
      }

    }
  }
});
elements.forEach(element => robserver.observe(element));

Vue.config.productionTip = false;
Vue.use(VueTouch, { name: 'v-touch' });
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')