import { IHttpResponse } from "../models/interfaces/IHttpResponse";

export const ok = async (data: any): Promise<IHttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    };
}