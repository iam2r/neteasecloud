import { Component as tsx } from "vue-tsx-support";
import { Component, Watch } from "vue-property-decorator";
import Tabs from "@/common/components/tabs";
import { Pages } from "@/router";
import "./style.scss";
import FontIcons from '@/common/components/fonticons';
@Component
export default class Footer extends tsx<any> {
    private list: { key: Pages, value: string }[] = [{ key: Pages.Home, value: '发现' }, { key: Pages.Mine, value: '我的' }];

    private get active(): number {
        const active = this.list.findIndex(it => it.key == this.$route.name);
        return ~active ? active : 0;
    }

    private set active(active: number) {
        this.$router.replace({ name: this.list[active].key })
    }




    protected render() {
        return (
            <div class="footer-component">
                <Tabs class="footer-navs" v-model={this.active} length={this.list.length} scopedSlots={{
                    default: ({ i, isActive }) =>
                        <div class="footer-nav-item">
                            <div class="icon-box-container">
                                <transition name="scale">
                                    <div key={isActive ? 'on' : 'off'} class="icon-box" data-status={isActive ? 'on' : 'off'}>
                                        <i class={'icon-' + this.list[i].key}></i>
                                    </div>
                                </transition>
                            </div>

                            <span> {this.list[i].value}</span>
                        </div>
                }} />
            </div>
        )
    }
}