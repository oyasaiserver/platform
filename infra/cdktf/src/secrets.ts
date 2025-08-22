import { Secrets } from "@oyasaiserver/lib/secrets";

export const secrets = Secrets.fromEnv([
  "ENVIRONMENT",
  'CLOUDFLARE_API_TOKEN',
] as const)

const sec = {

}