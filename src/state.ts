import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $state: State;
    _uid: number;
  }
}

export interface State {
  transitions: { [key: string]: string; pages: string };
  resizeCount: number;
}

export const state: State = {
  resizeCount: 0,
  transitions: {
    pages: "fade",
  },
};

export default Vue.prototype.$state = Vue.observable(state);
