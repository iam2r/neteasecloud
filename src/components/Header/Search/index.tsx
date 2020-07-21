import { Component as tsx, modifiers } from "vue-tsx-support";
import { Component, Watch, Ref } from "vue-property-decorator";
import { services } from '@/context';
import "./style.scss";
import { ResquestSearch } from '@/services/Request';
import { ResponseSearchAdvice } from '@/services/Response';
import FontIcons from '@/common/components/fonticons';

@Component
export default class Search extends tsx<any> {
    private enterSearch: boolean = false;
    private searchValue: string = "";
    private searchAdvice: ResponseSearchAdvice['data'] = {
        showKeyword: '',
        realkeyword: ''
    };

    @Ref('input-dom')
    private readonly inputDom !: HTMLInputElement;

    private async initSearchAdvice() {
        const res = await services.searchAdvice();
        this.searchAdvice = res.data;
    }

    private async initSearch() {
        let req = new ResquestSearch();
        req.keywords = this.searchValue || this.searchAdvice.realkeyword;
        const res = await services.search(req);

    }


    @Watch('searchValue')
    protected onSearchValueChange() {
        if (this.searchValue) return;
        this.initSearchAdvice();
    }

    private onLeave() {
        this.enterSearch = false;
        console.log(this.inputDom)
        this.inputDom.blur();
    }

    protected created() {
        this.initSearchAdvice();
    }


    protected render() {
        return (
            <div class="search-component" data-status={this.enterSearch ? 'enter' : 'leave'}>
                <v-touch tag="i" class="icon-search" onTap={() => { this.initSearch() }}></v-touch>

                <input ref="input-dom" onFocus={() => { this.enterSearch = true }} onKeydown={modifiers.enter(this.initSearch)}
                    type="text" placeholder={this.searchAdvice.showKeyword} v-model={this.searchValue} />

                <transition name="fade">
                    <v-touch tag="span" onTap={() => { this.onLeave() }} v-show={this.enterSearch} class="btn-leave">
                        取消
                    </v-touch>
                </transition>

            </div>
        )
    }
}