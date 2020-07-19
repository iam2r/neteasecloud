import { Component as tsx } from "vue-tsx-support";
import { Component } from "vue-property-decorator";
import { PortalTarget } from "portal-vue";
import ScrollView from "@/common/components/scrollview";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./app.scss";
@Component
export default class App extends tsx<any> {
    protected render() {
        return (
            <div id="app">
                <div id="pages-box">
                    <ScrollView class="pages-scroll-view" scopedSlots={{
                        default: () =>
                            <transition name="fade">
                                <div class="page-box-container" key={this.$route.name}>
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