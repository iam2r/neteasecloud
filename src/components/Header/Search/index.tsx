import { Component as tsx, modifiers } from "vue-tsx-support";
import { Component, Watch } from "vue-property-decorator";
import { services } from '@/context';
import "./style.scss";
import { ResquestSearch } from '@/services/Request';
import { ResponseSearchAdvice } from '@/services/Response';
import FontIcons from '@/common/components/fonticons';

@Component
export default class Search extends tsx<any> {
    private searchValue: string = "";
    private searchAdvice: ResponseSearchAdvice['data'] = {
        showKeyword: '',
        realkeyword: ''
    };

    private async initSearchAdvice() {
        const res = await services.searchAdvice();
        this.searchAdvice = res.data;
    }

    private async initSearch() {
        let req = new ResquestSearch();
        req.keywords = this.searchValue || this.searchAdvice.realkeyword;
        const res = await services.search(req);

    }

    protected created() {
        this.initSearchAdvice();
    }

    @Watch('searchValue')
    protected onSearchValueChange() {
        if (this.searchValue) return;
        this.initSearchAdvice();
    }

    protected render() {
        return (
            <div class="search-component">

                <FontIcons class="icon-search" value="search" onTap={() => { this.initSearch() }} />
                <input onKeydown={modifiers.enter(this.initSearch)}
                    type="text" placeholder={this.searchAdvice.showKeyword} v-model={this.searchValue} />
            </div>
        )
    }
}