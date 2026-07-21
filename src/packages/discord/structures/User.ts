export default class User {
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

    constructor(user: any) {
        this.id = user.id
        this.username = user.username
        this.discriminator = user.discriminator
        this.globalName = user.global_name
        this.avatar = user.avatar
        this.bot = user.bot ?? false
        this.system = user.system ?? false
        this.isMfaEnabled = user.mfa_enabled ?? false
        this.banner = user.banner ?? null
        this.accentColor = user.accent_color ?? null
        this.locale = user.locale ?? null
        this.premiumType = user.premium_type ?? null
    }
}