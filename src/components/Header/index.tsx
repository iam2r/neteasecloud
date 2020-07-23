import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import Search from "./Search";
import "./style.scss";
import { Pages } from "@/router";
@Component
export default class Header extends tsx<any> {
  protected render() {
    return (
      <div class="header-component">
        <transition name="fade">
          <Search v-show={this.$route.name == Pages.Home} />
        </transition>
      </div>
    );
  }
}
