import { IResponse } from '@/common/Services';

export class ResponseSearchAdvice extends IResponse {
    data: {
        showKeyword: string,
        realkeyword: string,
        action?:number
    }
}