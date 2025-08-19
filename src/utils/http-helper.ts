import { IHttpResponse } from "../models/interfaces/IHttpResponse";

export const ok = async (data: any): Promise<IHttpResponse> =>{
    return {
        statusCode: 200,
        body: data
    };
}

export const created = async (data: any): Promise<IHttpResponse> => {
    return {
        statusCode: 201,
        body: data
    };
}

export const noContent = async (): Promise<IHttpResponse> => {
    return {
        statusCode: 204,
        body: null
    };
}

export const badRequest = async (message: string): Promise<IHttpResponse> => {
    return {
        statusCode: 400,
        body: { error: message }
    };
}

export const notFound = async (message: string): Promise<IHttpResponse> => {
    return {
        statusCode: 404,
        body: { error: message }
    };
}