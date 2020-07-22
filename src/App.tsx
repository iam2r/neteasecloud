import { Component as tsx } from "vue-tsx-support";
import { Component, Ref } from "vue-property-decorator";
import { PortalTarget } from "portal-vue";
import ScrollView from "@/common/components/scrollview";
import ResizeObserver from "resize-observer-polyfill";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/app.scss";
@Component
export default class App extends tsx<any> {
    @Ref("pages-box")
    private readonly pagesBox!: HTMLElement;
    @Ref("page-box-container")
    private readonly pageBoxContainer!: HTMLElement;
    @Ref()
    private readonly pageScroll!: ScrollView;

    private get pageScrollEffect(): HTMLElement[] {
        return [this.pagesBox, this.pageBoxContainer]
    }



    private observePageResize() {
        const elements = this.pageScrollEffect;
        const robserver = new ResizeObserver((entries) => {
            for (const entry of entries) {  
                if (elements.includes(entry.target as HTMLElement)) {
                    this.pageScroll.updateScroll()
                }
            }
        });

        this.pageScrollEffect.forEach(element => robserver.observe(element))
    }

    protected mounted() {
        // this.observePageResize();
    }

    protected render() {
        return (
            <div id="app">
                <div ref="pages-box" id="pages-box">
                    <ScrollView ref="pageScroll" class="pages-scroll-view" scopedSlots={{
                        default: () =>
                            <transition name={this.$state.transitions.pages}>
                                <div ref="page-box-container" class="page-box-container" key={this.$route.name}>
                                    <router-view />
                                </div>
                            </transition>
                    }} />
                </div>
                <div id="fixed-box">
                    <Header />
                    <Footer />
                    <PortalTarget name={"fixed"} multiple />
                </div>
            </div>
        )
    }
}