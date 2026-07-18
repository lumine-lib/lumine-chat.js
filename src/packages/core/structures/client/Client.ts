import EventEmitter from "node:events"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
export default class Client extends EventEmitter {
    __token: string | null = null 
    __baseUrl: string = "https://example.com/api"
    __headers: any
    isConnected: boolean = false

    async request(method: "GET" | "POST" | "PATCH" | "DELETE", params: string, data: any, headers: any = {}): Promise<AxiosResponse> {
        let object: AxiosRequestConfig = {
            method: method,
            baseURL: this.__baseUrl + params,
            headers: {...this.__headers, ...headers},
            data: data ?? null
        }
        return axios(object)
    }
}