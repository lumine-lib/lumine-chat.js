import EventEmitter from "node:events"

export default class PollingClient extends EventEmitter {
    __token: string | null = null 

    isConnected: boolean = false
}