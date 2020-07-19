import { Component as tsx } from "vue-tsx-support";
import { Component, Watch } from "vue-property-decorator";
import Tabs from "@/common/components/tabs";
import { Pages } from "@/router";
import "./style.scss";
@Component
export default class Footer extends tsx<any> {
    private list: { key: Pages, value: string }[] = [{ key: Pages.Home, value: '发现' }, { key: Pages.Mine, value: '我的' }];
    private active: number = 0;


    private get currentPage(): Pages {
        return this.list[this.active].key
    }

    @Watch("active")
    protected onActiveChange() {
        this.$router.replace({ name: this.currentPage })
    }

    protected render() {
        return (
            <div class="footer-component">
                <Tabs class="footer-navs" v-model={this.active} length={this.list.length} scopedSlots={{
                    default: (i) => <span> {this.list[i].value}</span>


                }} />
            </div>
        )
    }
}