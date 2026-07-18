import Client from "./Client";

export default interface WebsocketClient extends Client {
    ws: WebSocket | null // WS Connection

    sendWs(data: any): any
}