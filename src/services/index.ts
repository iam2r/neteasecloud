import Services, { IRequest, IResponse, IError } from "@/common/Services";
import { ResquestSearch } from "./Request";
import { ResponseSearchAdvice, ResponseSearchHotDetail } from "./Response";

export enum Commond {
  SearchAdvice = "search/default",
  Search = "search",
  SearchHot = "search/hot/detail",
}

export default class NetEaseServices extends Services {
  public searchAdvice(
    callback?: (err: IError, res: ResponseSearchAdvice) => void
  ): Promise<ResponseSearchAdvice> {
    return this.send<IRequest, ResponseSearchAdvice>(
      Commond.SearchAdvice,
      new IRequest(),
      callback
    );
  }

  public search(
    req: ResquestSearch,
    callback?: (err: IError, res: IResponse) => void
  ): Promise<IResponse> {
    return this.send<ResquestSearch, IResponse>(Commond.Search, req, callback);
  }

  public searchHotDetail(
    callback?: (err: IError, res: ResponseSearchHotDetail) => void
  ): Promise<ResponseSearchHotDetail> {
    return this.send<IRequest, ResponseSearchHotDetail>(
      Commond.SearchHot,
      new IRequest(),
      callback
    );
  }
}
