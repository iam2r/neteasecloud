import { State } from "@/state";

declare module "vue/types/vue" {
  interface Vue {
    $state: State;
    _uid: number;
  }
}