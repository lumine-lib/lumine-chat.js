import EventEmitter from "node:events";

export default interface Client extends EventEmitter {
    __token: string | null

    isConnected: boolean

    //Method
    connect(token: string): boolean
    disconnect(): boolean
}