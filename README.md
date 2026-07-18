# Lumine Chat
Lumine chat is Simple Library to Connect your app in your favorite chat platform

[Guide](lumine-chatjs.intacent.my.id) | [API Reference](lumine-chatjs.intacent.my.id/api) | [Package Documentation](lumine-chatjs.intacent.my.id/api/modules)

## Feature
- Simple chat bot feature support

## Platform Supported
- Discord (Since 26.7.17, Rewrite for [lumined.js](https://github.com/lumine-lib/lumined.js) & [lumine-discord.js](https://github.com/lumine-lib/lumine-discord.js))
- Telegram (Since 26.7.17, Rewrite for [luminet.js](https://github.com/lumine-lib/luminet.js))

## How use that

```js
const { DiscordClient, DiscordGatewayIntents } = require("lumine-chat.js")

const dcc = new DiscordClient({ // Declare discord bot client
    intents: []
})

dcc.login(process.env.token) // Input your bot token here
```