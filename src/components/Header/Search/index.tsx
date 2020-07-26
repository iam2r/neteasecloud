import { Component as tsx, modifiers } from "vue-tsx-support";
import { Component, Watch, Ref } from "vue-property-decorator";
import context from "@/context";
import "./style.scss";
import { ResquestSearch, ResquestSearchSuggest } from "@/services/Request";
import {
  ResponseSearchAdvice,
  ResponseSearchHotDetail,
  IconType,
  SearchSuggest,
  ResponseSearchSuggest,
} from "@/services/Response";
import ScrollView from "@/common/components/scrollview";
import Tabs from "@/common/components/tabs";
import Sliders from "@/common/components/swiper";
import Loading from "@/components/Loading";
import { getStore, setStore } from "@/common/Utils";
import { Debounce } from "@/common/Decorator";
import { divide } from "lodash";

enum SearchPageStatus {
  DEFAULT = "default",
  HOT = "hot",
  SUGGEST = "suggest",
  RESULT = "result",
}

interface PromisePools {
  search: Promise<any>;
  searchSuggest: Promise<ResponseSearchSuggest>;
  searchHotDetail: Promise<ResponseSearchHotDetail>;
  searchAdvice: Promise<ResponseSearchAdvice>;
}

@Component
export default class Search extends tsx<any> {
  private focus: boolean = false;
  private pageStatus: SearchPageStatus = SearchPageStatus.DEFAULT;

  private searchValue: string = "";
  private searchAdvice: ResponseSearchAdvice["data"] = {
    showKeyword: "",
    realkeyword: "",
  };

  private hotList: ResponseSearchHotDetail["data"] = [];
  private suggestList: SearchSuggest[] = [];
  @Ref("input-dom")
  private readonly inputDom!: HTMLInputElement;

  //query
  private promisePools: PromisePools = {
    search: null,
    searchHotDetail: null,
    searchAdvice: null,
    searchSuggest: null,
  };
  private async querySearchAdvice() {
    this.promisePools.searchAdvice = context.services.searchAdvice();
    const res = await this.promisePools.searchAdvice;
    this.searchAdvice = res.data;
  }
  private async querySearch() {
    const req = new ResquestSearch();
    req.keywords = this.searchValue || this.searchAdvice.realkeyword;
    this.promisePools.search = context.services.search(req);
    const res = await this.promisePools.search;
    this.addHistory(req.keywords);
  }
  private async querySearchHotDetail() {
    this.promisePools.searchHotDetail = context.services.searchHotDetail();
    const res = await this.promisePools.searchHotDetail;
    this.hotList = res.data;
  }
  private async querySearchSuggest() {
    const req = new ResquestSearchSuggest();
    req.keywords = this.searchValue;
    req.type = "mobile";
    this.promisePools.searchSuggest = context.services.searchSuggest(req);
    const res = await this.promisePools.searchSuggest;
    this.suggestList = res.result?.allMatch || [];
  }

  @Watch("pageStatus", { immediate: true })
  protected onPageStatusChange(
    newVal: SearchPageStatus,
    oldVal: SearchPageStatus
  ) {
    console.log(newVal, oldVal);
    if (newVal == SearchPageStatus.DEFAULT) {
      this.searchValue = "";
      this.querySearchAdvice();
      this.inputDom && this.inputDom.blur();
    }

    if (newVal == SearchPageStatus.HOT && oldVal == SearchPageStatus.DEFAULT) {
      this.querySearchHotDetail();
    }

    if (newVal == SearchPageStatus.SUGGEST) {
      this.querySearchSuggest();
    }

    if (newVal == SearchPageStatus.RESULT) {
      this.querySearch();
    }
  }

  @Debounce(300, {
    leading: false,
    trailing: true,
  })
  private onInput(e) {
    if (!this.focus) return; //兼容ie11，ie11 改变placeholder也会触发input事件
    this.suggestList = [];
    this.searchValue = (e.target as any).value; //v-model 默认不会在输入法组合文字过程中得到更新
    if (this.searchValue) {
      if (this.pageStatus == SearchPageStatus.SUGGEST) {
        this.querySearchSuggest();
      } else {
        this.pageStatus = SearchPageStatus.SUGGEST;
      }
    } else {
      this.pageStatus = SearchPageStatus.HOT;
    }
  }

  private onFocus() {
    this.focus = true;
    if (this.pageStatus == SearchPageStatus.DEFAULT) {
      this.pageStatus = SearchPageStatus.HOT;
    }
  }

  private onBlur() {
    this.focus = false;
  }

  private get checkPageStatus() {
    return {
      isDefault: this.pageStatus == SearchPageStatus.DEFAULT,
      isHot: this.pageStatus == SearchPageStatus.HOT,
      isSuggest: this.pageStatus == SearchPageStatus.SUGGEST,
      isResult: this.pageStatus == SearchPageStatus.RESULT,
    };
  }

  private historyCount: number = 1; //set时+1，确保get的更新。

  private get historyList(): string[] {
    const result = getStore("search-history", "localStorage");
    return this.historyCount && result ? JSON.parse(result) : [];
  }

  private set historyList(list: string[]) {
    setStore("search-history", JSON.stringify(list), "localStorage");
    this.historyCount++;
  }

  private deleteHistory() {
    this.historyList = [];
  }

  private addHistory(keywords: string) {
    const index = this.historyList.indexOf(keywords);
    if (~index)
      return this.historyList.unshift(...this.historyList.splice(index, 1));
    this.historyList.unshift(keywords);
    if (this.historyList.length > 10) this.historyList.pop();
    this.historyList = [...this.historyList];
  }

  private toResult(keywords?: string) {
    keywords && (this.searchValue = keywords);
    this.$nextTick(() => {
      this.pageStatus = SearchPageStatus.RESULT;
    });
  }

  private renderHot() {
    return (
      <transition-group tag="div" name="fade" class="search-page-hot">
        {this.historyList.length != 0 && (
          <section key="search-history" class="search-history">
            <div class="title-box">
              <span>搜索历史</span>
              <v-touch
                tag="i"
                class="icon-delete"
                onTap={() => {
                  this.deleteHistory();
                }}
              ></v-touch>
            </div>
            <div class="content-box">
              <ScrollView
                options={{
                  direction: "horizontal",
                  slidesPerView: "auto",
                  freeMode: true,
                  mousewheel: false,
                  freeModeMomentumBounce: context.device.desktop ? true : false,
                }}
              >
                <transition-group
                  name="flip-list"
                  tag="ul"
                  class="history-list-scroller"
                >
                  {this.historyList.map((history) => (
                    <v-touch
                      key={history}
                      tag="li"
                      onTap={() => {
                        this.toResult(history);
                      }}
                    >
                      <div class="flex">{history}</div>
                    </v-touch>
                  ))}
                </transition-group>
              </ScrollView>
            </div>
          </section>
        )}

        <section key="search-hot-list" class="search-hot-list">
          <div class="title-box">
            <span>热搜榜</span>
          </div>
          <div class="content-box">
            <promised
              promise={this.promisePools.searchHotDetail}
              scopedSlots={{
                combined: ({ isPending, isDelayOver, data, error }) => [
                  data && (
                    <ul class="search-hot-data">
                      {this.hotList.map(
                        ({ searchWord, iconType, content }, i) => (
                          <v-touch
                            tag="li"
                            onTap={() => {
                              this.toResult(searchWord);
                            }}
                          >
                            <span class={i < 4 ? "mark" : ""}>{i + 1}</span>
                            <div>
                              <section class="search-word">
                                <span>{searchWord}</span>
                                <i data-type={iconType}>
                                  {(() => {
                                    switch (iconType) {
                                      case IconType.HOT:
                                        return "HOT";
                                      case IconType.NEW:
                                        return "NEW";
                                      case IconType.UP:
                                        return "UP";
                                      default:
                                        return "";
                                    }
                                  })()}
                                </i>
                              </section>
                              <section class="hot-content">
                                <p>{content}</p>
                              </section>
                            </div>
                          </v-touch>
                        )
                      )}
                    </ul>
                  ),
                  isPending && <Loading />,
                ],
              }}
            />
          </div>
        </section>
      </transition-group>
    );
  }

  private renderSuggest() {
    return (
      this.searchValue && (
        <div class="search-page-suggest">
          <v-touch
            class="search-tips"
            onTap={() => {
              this.toResult();
            }}
          >
            {`搜索 “${this.searchValue}”`}
          </v-touch>

          <promised
            promise={this.promisePools.searchSuggest}
            scopedSlots={{
              combined: ({ isPending, isDelayOver, data, error }) => [
                data && (
                  <ul class="suggest-data">
                    {this.suggestList.map(({ keyword }) => (
                      <v-touch
                        tag="li"
                        onTap={() => {
                          this.toResult(keyword);
                        }}
                      >
                        <i class="icon-search"></i>
                        <span>{keyword}</span>
                      </v-touch>
                    ))}
                  </ul>
                ),
                isPending && <Loading />,
              ],
            }}
          />
        </div>
      )
    );
  }

  private resultActive: number = 0;

  private resultNavs: { id: number; name: string; pagesCount?: number }[] = [
    { id: 1018, name: "综合" },
    { id: 1, name: "单曲" },
    { id: 10, name: "专辑" },
    { id: 100, name: "歌手" },
    { id: 1000, name: "歌单" },
    { id: 1006, name: "歌词" },
    { id: 1014, name: "视频" },
  ]; //默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合

  @Ref("result-nav-scroll")
  private readonly resultNavScroll!: ScrollView;

  @Watch("resultActive")
  @Watch("$state.resizeCount")
  protected fixedCurrentNav2Center() {
    const $container = this.$el.querySelector(".navs-container");
    const $lis = $container.querySelectorAll(".navs-container .tabs-item");
    const container = $container.getBoundingClientRect();
    const start = $lis[0].getBoundingClientRect();
    const current = $lis[this.resultActive].getBoundingClientRect();
    const center2Start = current.x - start.x + current.width / 2; //当前元素中点距离起点的距离。
    let translate = -center2Start + container.width / 2;
    const swiper = this.resultNavScroll.swiperScroll;
    translate = Math.min(swiper.minTranslate(), translate);
    translate = Math.max(swiper.maxTranslate(), translate);
    setTimeout(() => {
      this.resultNavScroll.scrollTo(translate, 300);
    });
  }

  private renderResult() {
    return (
      <div class="search-page-result">
        <div class="navs-container">
          <ScrollView
            ref="result-nav-scroll"
            options={{
              direction: "horizontal",
              slidesPerView: "auto",
              freeMode: true,
              mousewheel: false,
              freeModeMomentumBounce: context.device.desktop ? true : false,
            }}
          >
            <Tabs
              v-model={this.resultActive}
              length={this.resultNavs.length}
              scopedSlots={{
                default: ({ i, isActive }) =>
                  this.resultNavs.map(({ name }) => (
                    <div>
                      <span> {name}</span>
                    </div>
                  ))[i],
              }}
            />
          </ScrollView>
        </div>
        <div class="contents-container">
          <Sliders
            v-model={this.resultActive}
            length={this.resultNavs.length}
            options={{}}
            scopedSlots={{
              default: (i) =>
                this.resultNavs.map(({ name }) => <span> {name}</span>)[i],
            }}
          />
        </div>
      </div>
    );
  }

  protected render() {
    return (
      <div class="search-component" data-status={this.pageStatus}>
        <div class="search-input-container">
          <v-touch tag="i" class="icon-search"></v-touch>
          <form action="#">
            <input
              class={this.searchValue ? "has-value" : "no-value"}
              ref="input-dom"
              onFocus={(e) => {
                if (e.target != e.currentTarget) e.preventDefault();
                this.onFocus();
              }}
              onBlur={() => {
                this.onBlur();
              }}
              onInput={(e) => {
                this.onInput(e);
              }}
              onKeydown={modifiers.enter.prevent(() => {
                this.toResult();
              })}
              type="search"
              placeholder={this.searchAdvice.showKeyword}
              v-model={this.searchValue}
            />
          </form>

          <transition name="fade">
            <v-touch
              class="search-delete"
              tag="i"
              onTap={() => {
                this.searchValue = "";
                this.inputDom.value = "";
                this.pageStatus = SearchPageStatus.HOT;
              }}
              v-show={this.searchValue}
            ></v-touch>
          </transition>
          <transition name="fade">
            <v-touch
              tag="span"
              onTap={() => {
                this.pageStatus = SearchPageStatus.DEFAULT;
              }}
              v-show={!this.checkPageStatus.isDefault}
              class="btn-leave"
            >
              取消
            </v-touch>
          </transition>
        </div>
        <transition name="fade">
          {!this.checkPageStatus.isDefault && (
            <div name="move" class="search-content-main">
              {[
                <ScrollView
                  key="before-result"
                  class="search-scroll-view"
                  scopedSlots={{
                    default: () => (
                      <transition
                        name={this.$state.transitions.pages}
                        mode="out-in"
                      >
                        <div
                          class="search-scroll-view-scroller"
                          key={this.pageStatus}
                        >
                          {[
                            this.checkPageStatus.isHot && this.renderHot(),
                            this.checkPageStatus.isSuggest &&
                              this.renderSuggest(),
                          ]}
                        </div>
                      </transition>
                    ),
                  }}
                />,
                <transition name="fade">
                  {this.checkPageStatus.isResult && this.renderResult()}
                </transition>,
              ]}
            </div>
          )}
        </transition>
      </div>
    );
  }
}
