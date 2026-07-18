import BaseClient from "./Client";

export default class PollingClient extends BaseClient {
    poll?: any | null
    connect(token: string) {
        // Validate if token is anvailable and is string
        if(!token) {
            throw Error("Token is invalid")
        } else if(typeof token !== "string") {
            throw Error("Token must be a string")
        }
        // Validate if poll is already started
        if(this.poll) {
            throw Error("Client is already started")
        }

        // Save token
        this.__token = token

        // Start intialize
        this.__intialize()
    }

    disconnect() {
        if(!this.poll) return console.log("Client is already disconnected")
        this.poll = null
    }

    __intialize() {

    }
}