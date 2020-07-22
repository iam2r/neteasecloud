import { Component, Prop } from "vue-property-decorator";
import { Component as tsx } from "vue-tsx-support";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ResizeObserver from "resize-observer-polyfill";
import { VNode } from "vue";

import "./style.scss";
export interface ScrollViewProps {
  option?: any;
}

export interface ScrollViewSlots {
  default: void;
}

@Component
export default class ScrollView extends tsx<
ScrollViewProps,
any,
ScrollViewSlots
> {
  @Prop({
    default: () => {
      return {
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: true,
        noSwiping: true,
        observer: true,
        observeParents: true,
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          snapOnRelease: false,
          hide: true,
        },
        mousewheel: true,
      };
    },
  })
  private options: ScrollViewProps["option"];
  @Prop({ default: "" })
  private scrollerClass: string | { [key: string]: boolean };

  private get swiperScroll(): any {
    return (this.$refs.mySwiper as any).$swiper;
  }

  protected mounted() {
    this.initClickHandel();
    setTimeout(() => {
      this.updateScroll();
      this.observeResize();
    });
  }

  private observeResize() {
    const wrapper: HTMLElement = this.$el as HTMLElement;
    const scroller: HTMLElement = this.$el.querySelector(".swiper-slide *");
    const elements: HTMLElement[] = [this.$el as HTMLElement, this.$el.querySelector(".swiper-slide *")]
    console.log(wrapper, scroller)
    const robserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (elements.includes(entry.target as HTMLElement)) {
          setTimeout(() => {
            console.log('ddddddddddddddddddddddddddddddddd')
            this.updateScroll();
          }, 500)
        }
      }
    });
    elements.forEach(element => robserver.observe(element));
  }

  private initClickHandel() {
    //文本节点可选中
    (this.swiperScroll.el as HTMLElement).addEventListener("click", () => {
      // this.addNoSwipingToTextNode(this.swiperScroll.el);
      this.stopScroll();
    });
  }

  private addNoSwipingToTextNode(el: HTMLElement | Text) {
    const childNodes = el.childNodes;
    childNodes.forEach((el: HTMLElement | Text) => {
      if (el.nodeType == 1) {
        this.addNoSwipingToTextNode(el);
      } else if (
        el.nodeType == 3 &&
        el.nodeValue.replace(/(^\s*)|(\s*$)/g, "")
      ) {
        const p = el.parentNode as HTMLElement;
        p.classList.remove("swiper-no-swiping");
        p.classList.add("swiper-no-swiping");
      }
    });
  }

  public updateScroll() {
    this.swiperScroll.update();
    this.swiperScroll.scrollbar && this.swiperScroll.scrollbar.updateSize();
  }

  public stopScroll() {
    const swiper = this.swiperScroll;
    this.scrollTo(swiper.getTranslate(), 0);
  }

  public scrollTo(translate: number, duration: number) {
    const swiper = this.swiperScroll;
    //开启freeModeMomentumBounce后，源码分析知touchEnd时会给wrapper容器注册transitionEnd事件，纠正为maxTranslate或者minTranslate的值。
    //若纠正的时机在此处传的translate值被设置之后，就会出现到达指定的translate位置后，又滚动到底部（maxTranslate值处）或顶部（minTranslate值处）
    //此处需要禁止transitionEnd事件里的方法执行， 源码知swiper.touchEventsData.allowMomentumBounce变量可以控制 transitionEnd事件是否执行
    swiper.touchEventsData.allowMomentumBounce = false;
    swiper.transitionEnd();
    swiper.setTransition(duration);
    swiper.setTranslate(translate);
  }

  protected render(): VNode {
    return (
      <Swiper
        ref="mySwiper"
        class="scroll-container"
        options={{
          ...this.options,
          scrollbar: {
            ...this.options.scrollbar,
            el: this.options.scrollbar.el + "-" + this._uid,
          },
        }}
      >
        <SwiperSlide ref="scroller" class={this.scrollerClass}>
          {this.$scopedSlots.default()}
        </SwiperSlide>
        <div
          class={[
            "swiper-scrollbar",
            (this.options.scrollbar.el + "-" + this._uid)
              .replace(".", "")
              .replace("#", ""),
          ]}
          slot="scrollbar"
        ></div>
      </Swiper>
    );
  }
}
