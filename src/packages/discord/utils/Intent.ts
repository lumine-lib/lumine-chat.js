export async function parseIntent(intent: Array<number>): Promise<any> {
    if (intent.length) throw Error("Please provide at least one discord intent")
    let intents: number = 0
    await intent.forEach((int) => {
        intents += int
    })
    return intents
}