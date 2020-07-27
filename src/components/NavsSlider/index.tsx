import {
  Component,
  Prop,
  Emit,
  Model,
  Ref,
  Watch,
} from "vue-property-decorator";
import { Component as tsx } from "vue-tsx-support";
import { VNode } from "vue";
import "./styles.scss";
import ScrollView from "@/common/components/scrollview";
import Tabs from "@/common/components/tabs";
import Sliders from "@/common/components/swiper";
export interface NavsSliderProps {
  length: number;
}

export interface NavsSliderSlots {
  default?: number;
  nav?: { i: number; isActive: boolean };
}

@Component
export default class NavsSlider extends tsx<
  NavsSliderProps,
  any,
  NavsSliderSlots
> {
  @Model("change", { type: Number })
  private value!: number;

  @Prop({ default: 0 })
  private length: NavsSliderProps["length"];

  private get active() {
    return this.value;
  }

  private set active(val: number) {
    this.$emit("change", val);
  }

  private navLineTransform: number = 0;
  private navLineWidth: number = 0;
  private navLineDuration: number = 0;

  @Ref("nav-scroll")
  private readonly navScroll!: ScrollView;

  @Watch("active")
  @Watch("$state.resizeCount") //横竖屏变化,pc resize就会触发
  protected calcPosition() {
    const $container = this.$el.querySelector(".navs-container");
    const $lis = $container.querySelectorAll(".navs-container .tabs-item");
    const container = $container.getBoundingClientRect();
    const start = $lis[0].getBoundingClientRect();
    const current = $lis[this.active].getBoundingClientRect();
    const lineWidth = current.width * 0.8;
    const center2Start = current.x - start.x + current.width / 2; //起点情况下，当前元素中点距离起点的距离。
    const navLineTransform = center2Start - lineWidth / 2; //假设外层滑块不动，line的位置；
    let translate = -center2Start + container.width / 2;
    const swiper = this.navScroll.swiperScroll;
    translate = Math.min(swiper.minTranslate(), translate);
    translate = Math.max(swiper.maxTranslate(), translate);
    this.navLineWidth = lineWidth;
    setTimeout(() => {
      this.navLineTransform = navLineTransform;
      this.navScroll.scrollTo(translate, 300);
    }, 100);
  }

  protected mounted() {
    this.calcPosition();
  }

  protected render(): VNode {
    return (
      <div class="navs-slider-component">
        <div class="navs-container">
          <ScrollView
            ref="nav-scroll"
            options={{
              direction: "horizontal",
              slidesPerView: "auto",
              freeMode: true,
              mousewheel: false,
              freeModeMomentumBounce: false,
            }}
          >
            <Tabs
              v-model={this.active}
              length={this.length}
              scopedSlots={{
                line: () => (
                  <div
                    class="nav-line"
                    style={{
                      transform: `translate3d(${this.navLineTransform}px, 0px, 0px)`,
                      width: this.navLineWidth + "px",
                    }}
                  ></div>
                ),
                default: ({ i, isActive }) => [
                  this.$scopedSlots.nav({ i, isActive }),
                ],
              }}
            />
          </ScrollView>
        </div>
        <div class="contents-container">
          <Sliders
            v-model={this.active}
            length={this.length}
            options={{ initialSlide: this.active }}
            scopedSlots={{
              default: (i) => this.$scopedSlots.default(i),
            }}
          />
        </div>
      </div>
    );
  }
}
