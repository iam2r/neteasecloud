import { Component, Prop, Emit, Watch, Ref } from "vue-property-decorator";
import { Component as tsx } from "vue-tsx-support";
import SwiperClass, { SwiperOptions } from "swiper";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import { VNode } from "vue";
import "./style.scss";
export interface MySwiperProps {
  options?: SwiperOptions;
  length: number;
}

export interface MySwiperEvents {
  onSetTranslate?: (swiper: SwiperClass, translate?: number) => void;
}

export interface MySwiperSlots {
  default?: number;
  other?: SwiperClass;
}

@Component
export default class MySwiper extends tsx<
  MySwiperProps,
  MySwiperEvents,
  MySwiperSlots
> {
  @Prop({
    default: () => {
      return {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      };
    },
  })
  private options: MySwiperProps["options"];
  @Prop({ default: 0 })
  private length: MySwiperProps["length"];

  @Ref()
  public readonly mySwiper!: any;

  public get swiperInstance(): SwiperClass {
    return this.mySwiper.$swiper;
  }

  protected mounted() {
    setTimeout(() => {
      this.updateScroll();
    });
  }

  protected beforeDestroy() {}

  @Emit("setTranslate")
  private onSetTranslate(translate: number) {
    return this.swiperInstance;
  }

  public updateScroll() {
    if (this.options.loop) {
      //更新loop模式克隆的节点；开启loop模式 后如果slide变更后，update方法不会重新创建更新loop的克隆节点，源码分析 loopDestroy loopCreate updateSlides 即可
      (this.swiperInstance as any).loopDestroy();
      (this.swiperInstance as any).loopCreate();
    }
    this.swiperInstance.updateSlides();
    this.swiperInstance.update();
  }

  protected render(): VNode {
    return (
      <Swiper
        ref="mySwiper"
        onSetTranslate={() => {
          this.onSetTranslate(this.swiperInstance.translate);
        }}
        options={{
          ...this.options,
        }}
      >
        {Array.from({ length: this.length }).map((item, i) => (
          <SwiperSlide>{this.$scopedSlots.default(i)}</SwiperSlide>
        ))}
      </Swiper>
    );
  }
}
