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

const state: State = {
  resizeCount: 0,
  transitions: {
    pages: "fade",
  },
};

export default state;
