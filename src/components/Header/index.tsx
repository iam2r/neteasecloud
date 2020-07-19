import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import "./style.scss";
@Component
export default class Header extends tsx<any> {
    protected render() {
        return (
            <div class="header-component">
                Header
           </div>
        )
    }
}