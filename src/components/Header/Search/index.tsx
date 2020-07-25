import { Component as tsx, modifiers } from "vue-tsx-support";
import { Component, Watch, Ref } from "vue-property-decorator";
import context from "@/context";
import "./style.scss";
import { ResquestSearch } from "@/services/Request";
import {
  ResponseSearchAdvice,
  ResponseSearchHotDetail,
  IconType,
} from "@/services/Response";
import ScrollView from "@/common/components/scrollview";
import Loading from "@/components/Loading";
import { getStore, setStore } from "@/common/Utils";

enum SearchPageStatus {
  DEFAULT = "default",
  HOT = "hot",
  SUGGEST = "suggest",
  RESULT = "result",
}

interface PromisePools {
  search: Promise<any>;
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

  @Ref("input-dom")
  private readonly inputDom!: HTMLInputElement;

  //query
  private promisePools: PromisePools = {
    search: null,
    searchHotDetail: null,
    searchAdvice: null,
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
  private async querySearchSuggest() {}

  @Watch("pageStatus", { immediate: true })
  protected onPageStatusChange(
    newVal: SearchPageStatus,
    oldVal: SearchPageStatus
  ) {
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

  private onInput() {
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
    this.historyList = this.historyList.sort(() => Math.random() - 0.5);
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

        <section class="search-hot-list">
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
              this.onInput();
            }}
            onKeydown={modifiers.enter(() => {
              this.toResult();
            })}
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
