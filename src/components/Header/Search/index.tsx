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

  @Watch("searchValue")
  protected onSearchValueChange() {
    if (this.searchValue) return;
    this.initSearchAdvice();
  }

  @Watch("pageStatus")
  protected onPageStatusChange(
    newVal: SearchPageStatus,
    oldVal: SearchPageStatus
  ) {
    if (newVal == SearchPageStatus.HOT) {
      this.initSearchHotDetail();
    }
  }

  private togglePageStatus(status: SearchPageStatus) {
    this.pageStatus = status;
  }

  private toDefault() {
    this.togglePageStatus(SearchPageStatus.DEFAULT);
    this.inputDom.blur();
  }

  protected created() {
    this.initSearchAdvice();
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
                        console.log(history);
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
                <li>
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
                </li>
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
          <v-touch
            tag="i"
            class="icon-search"
            onTap={() => {
              this.initSearch();
            }}
          ></v-touch>

          <input
            ref="input-dom"
            onFocus={() => {
              this.togglePageStatus(SearchPageStatus.HOT);
            }}
            onKeydown={modifiers.enter(this.initSearch)}
            type="text"
            placeholder={this.searchAdvice.showKeyword}
            v-model={this.searchValue}
          />
          <transition name="fade">
            <v-touch
              tag="span"
              onTap={() => {
                this.toDefault();
              }}
              v-show={this.checkPageStatus.isHot}
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
