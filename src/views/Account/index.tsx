import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";

@Component
export default class Account extends tsx<any> {
  protected render() {
    return <div class="page-account">Account</div>;
  }
}
