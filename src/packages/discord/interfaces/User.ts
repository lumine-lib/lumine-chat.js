export default interface User {
    id: string
    username: string
    discriminator: string
    globalName?: string | null
    avatar?: string | null
    bot?: boolean | false
    system?: boolean | false
    isMfaEnabled: boolean | false
    banner?: string | null
    accentColor?: number | null
    locale?: string | null
    email?: string | null // Require scope email
    flags?: number | null
    premiumType?: number | null 
}