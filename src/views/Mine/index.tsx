import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";

@Component
export default class Mine extends tsx<any> {
    protected render() {
        return (
            <div class="page-mine">
                mine
           </div>
        )
    }
}