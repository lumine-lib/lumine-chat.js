// Library / Framework
import WebSocket, { MessageEvent } from "ws";
// Module
import WebsocketClient from "../../../core/structures/client/WebsocketClient";
// Enums / Interface / Types
import { OPCodes } from "../../enums/DiscordGateway";
export default class Client extends WebsocketClient {
    protected override wssurl: string = "wss://gateway.discord.gg/?v=10&encoding=json";
    protected override headers: any = {}
    protected intents: number = 0
    private nowWsUrl?: string | null = null

    constructor(DiscordClientOption: { token?: string }) {
        super()
        if (DiscordClientOption?.token) this.token = DiscordClientOption.token
    }

    protected override intialize(): void {

        let botoption = {
            token: this.token,
            properties: {
                $os: "lumine-chat.js",
                $browser: 'lumine-chat.js',
                $device: "linux",
            },
            intents: this.intents,
            presence: {}
        }

        // Check if ws url is already set or not
        if (!this.nowWsUrl) {
            this.ws = new WebSocket(this.wssurl);
            this.nowWsUrl = this.wssurl
        }

        if (!this.ws) return;

        let sequence: number = 0

        if (this?.nowWsUrl !== this.wssurl) {
            this.ws.onclose = this.ws.onerror = (e: any) => {
                this.ws = null
                this.intialize()
            }
        } else {
            this.ws.onopen = () => {
            }
        }

        this.ws.onmessage = async ({ data }: MessageEvent) => {
            if (!this.ws) return;
            let packet = JSON.parse(`${data}`)


            if ((packet?.d?.resume_gateway_url) && (this.nowWsUrl === this.wssurl)) {
                await this.ws.close()
                this.ws = new WebSocket(packet.d.resume_gateway_url)
                this.wssurl = packet.d.resume_gateway_url
                return this.intialize()
            } else {
                switch (packet.op) {
                    case OPCodes.HELLO:
                        if (packet.s) sequence = packet.s;
                        setInterval(() => this.sendWs({op: OPCodes.HEARTBEAT, d: sequence}), packet.d.heartbeat_interval - 3000);
                        this.sendWs({op: OPCodes.IDENTIFY, d: botoption});
                }

                if (!packet?.t) return;
                this.emit('rawEvent', { t: packet.t, d: packet.d })
            }
        }
    }
}