import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import Search from "./Search";
import "./style.scss";
@Component
export default class Header extends tsx<any> {
    protected render() {
        return (
            <div class="header-component">
                <Search />
            </div>
        )
    }
}