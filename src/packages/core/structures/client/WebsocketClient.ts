import { WebSocket } from "ws";
import BaseClient from "./Client";

export default class WebsocketClient extends BaseClient {
    ws?: WebSocket | null
    connect(token: string) {
        // Validate if token is anvailable and is string
        if(!token) {
            throw Error("Token is invalid")
        } else if(typeof token !== "string") {
            throw Error("Token must be a string")
        }
        // Validate if ws is already started
        if(this.ws) {
            throw Error("Client is already started")
        }

        // Save token
        this.token = token

        // Start intialize
        this.intialize()
    }

    protected intialize() {
        console.log("Default intialize of WebsocketClient")
    }

    disconnect() {
        if(!this.ws) return console.log("Client is already disconnected")
        this.ws = null
    }

    sendWs(data: any) {
        if(!this.ws) throw Error("Client is disconnected")
        return this.ws.send(data)
    }
}