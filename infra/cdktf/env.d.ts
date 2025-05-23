declare global {
  namespace NodeJS {
    type ProcessEnv = Readonly<{
      CLOUDFLARE_ACCOUNT_ID: string
      CLOUDFLARE_API_TOKEN: string
    }>
  }
}

export {}
