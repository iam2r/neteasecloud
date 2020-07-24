import { Component as tsx, modifiers } from "vue-tsx-support";
import { Component, Watch, Ref } from "vue-property-decorator";
import { services } from "@/context";

import "./style.scss";
import { ResquestSearch } from "@/services/Request";
import {
  ResponseSearchAdvice,
  ResponseSearchHotDetail,
  IconType,
} from "@/services/Response";
import ScrollView from "@/common/components/scrollview";

enum SearchPageStatus {
  DEFAULT = "default",
  HOT = "hot",
  SUGGEST = "suggest",
  RESULT = "result",
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
  private historyList: string[] = [
    "那么骄傲",
    "往下跳",
    "xxx",
    "那么骄傲",
    "往下跳",
    "xxx",
    "那么骄傲",
    "往下跳",
    "xxx",
    "那么骄傲",
    "往下跳",
    "xxx",
  ];
  private hotList: ResponseSearchHotDetail["data"] = [];

  @Ref("input-dom")
  private readonly inputDom!: HTMLInputElement;

  private async initSearchAdvice() {
    const res = await services.searchAdvice();
    this.searchAdvice = res.data;
  }

  private async initSearch() {
    const req = new ResquestSearch();
    req.keywords = this.searchValue || this.searchAdvice.realkeyword;
    const res = await services.search(req);
  }

  private async initSearchHotDetail() {
    const res = await services.searchHotDetail();
    this.hotList = res.data;
  }

  private async initSearchSuggest() {}

  @Watch("searchValue")
  protected onSearchValueChange() {
    if (this.searchValue) {
      if (this.focus) {
        if (this.pageStatus == SearchPageStatus.SUGGEST) {
          this.initSearchSuggest();
        } else {
          this.pageStatus = SearchPageStatus.SUGGEST;
        }
      }
    } else {
      this.pageStatus = SearchPageStatus.HOT;
    }
  }

  @Watch("pageStatus", { immediate: true })
  protected onPageStatusChange(
    newVal: SearchPageStatus,
    oldVal: SearchPageStatus
  ) {
    if (newVal == SearchPageStatus.DEFAULT) {
      this.initSearchAdvice();
      this.inputDom && this.inputDom.blur();
    }

    if (newVal == SearchPageStatus.HOT) {
      this.initSearchHotDetail();
    }

    if (newVal == SearchPageStatus.SUGGEST) {
      this.initSearchSuggest();
    }

    if (newVal == SearchPageStatus.RESULT) {
      this.initSearch();
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

  private deleteHistory() {
    this.historyList = [];
  }

  private toResult(keywords: string) {
    this.searchValue = keywords;
    this.$nextTick(() => {
      this.pageStatus = SearchPageStatus.RESULT;
    });
  }

  private renderHot() {
    return (
      <div class="search-page-hot">
        {this.historyList.length != 0 && (
          <section class="search-history">
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
                  mousewheel: true,
                  freeModeMomentumBounce: false,
                }}
              >
                <ul class="history-list-scroller">
                  {this.historyList.map((history) => (
                    <v-touch
                      tag="li"
                      onTap={() => {
                        this.toResult(history);
                      }}
                    >
                      {history}
                    </v-touch>
                  ))}
                </ul>
              </ScrollView>
            </div>
          </section>
        )}

        <section class="search-hot-list">
          <div class="title-box">
            <span>热搜榜</span>
          </div>
          <ul class="content-box">
            {this.hotList.length != 0 &&
              this.hotList.map(({ searchWord, iconType, content }, i) => (
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
              ))}
          </ul>
        </section>
      </div>
    );
  }

  private renderSuggest() {
    return <div>suggest</div>;
  }

  private renderResult() {
    return <div>result</div>;
  }

  protected render() {
    return (
      <div class="search-component" data-status={this.pageStatus}>
        <div class="search-input-container">
          <v-touch tag="i" class="icon-search"></v-touch>

          <input
            ref="input-dom"
            onFocus={() => {
              this.onFocus();
            }}
            onBlur={() => {
              this.onBlur();
            }}
            onInput={(e) => {
              //v-model 默认不会在输入法组合文字过程中得到更新
              this.searchValue = (e.target as any).value;
            }}
            type="text"
            placeholder={this.searchAdvice.showKeyword}
            v-model={this.searchValue}
          />
          <transition name="fade">
            <v-touch
              class="search-delete"
              tag="i"
              onTap={() => {
                this.searchValue = "";
              }}
              v-show={this.searchValue}
            >
              +
            </v-touch>
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
            <div class="search-content-mian">
              <ScrollView
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
                          this.checkPageStatus.isResult && this.renderResult(),
                        ]}
                      </div>
                    </transition>
                  ),
                }}
              />
            </div>
          )}
        </transition>
      </div>
    );
  }
}
