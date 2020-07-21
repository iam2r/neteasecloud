import Services, { IRequest, IResponse, IError } from "@/common/Services";
import { ResquestSearch } from './Request';
import { ResponseSearchAdvice } from './Response';



export enum Commond {
    SearchAdvice = 'search/default',
    Search = 'search'
}


export default class NetEaseServices extends Services {

    public searchAdvice(callback?: (err: IError, res: ResponseSearchAdvice) => void): Promise<ResponseSearchAdvice> {
        return this.send<IRequest, ResponseSearchAdvice>(Commond.SearchAdvice, new IRequest(), callback)
    }

    public search(req: ResquestSearch, callback?: (err: IError, res: IResponse) => void): Promise<IResponse> {
        return this.send<ResquestSearch, IResponse>(Commond.Search, req, callback)
    }
 
}