import { Component, Prop, Emit, Model } from "vue-property-decorator";
import { Component as tsx } from "vue-tsx-support";
import { VNode } from "vue";
import "./styles.scss";
export interface TabsProps {
  length: number;
}

export interface TabsSlots {
  default?: number;
}

@Component
export default class Tabs extends tsx<TabsProps, any, TabsSlots> {
  @Model("change", { type: Number })
  private active!: number;

  @Prop({ default: 0 })
  private length: TabsProps["length"];

  @Emit("change")
  private toggleIndex(index: number) {
    if (this.active == index) return;
  }

  protected render(): VNode {
    return (
      <ul class="tabs-wrapper">
        {Array.from({ length: this.length }).map((item, i) => (
          <li
            class={["tabs-item", this.active == i ? "active" : ""]}
            onClick={() => {
              this.toggleIndex(i);
            }}
          >
            {this.$scopedSlots.default(i)}
          </li>
        ))}
      </ul>
    );
  }
}
