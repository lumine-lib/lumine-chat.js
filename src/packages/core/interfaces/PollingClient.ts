import Client from "./Client";

export default interface PollingClient extends Client {
    poll: any | null // WS Connection
}