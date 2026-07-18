import { AxiosResponse } from "axios";
import EventEmitter from "node:events";

export default interface Client extends EventEmitter {
    isConnected: boolean

    //Method
    connect(token: string): boolean
    disconnect(): boolean

    request(method: "GET" | "POST" | "PATCH" | "DELETE", params: string, data: any, headers: any): Promise<AxiosResponse>
}