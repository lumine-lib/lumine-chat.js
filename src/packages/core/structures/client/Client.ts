import EventEmitter from "node:events"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
export default class Client extends EventEmitter {
    protected token?: string | null
    protected baseUrl: string = "https://example.com/api"
    protected headers: any
    isConnected: boolean = false

    async request(method: "GET" | "POST" | "PATCH" | "DELETE", params: string, data: any, headers: any = {}): Promise<AxiosResponse> {
        let object: AxiosRequestConfig = {
            method: method,
            baseURL: this.baseUrl + params,
            headers: {...this.headers, ...headers},
            data: data ?? null
        }
        return axios(object)
    }
}