import { IHttpResponse } from "../models/interfaces/IHttpResponse";

export const ok = async (data: any): Promise<IHttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    };
}

export const noContent = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 204,
        body: null
    };
}