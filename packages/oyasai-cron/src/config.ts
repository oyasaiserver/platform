export interface Config {
  apiKey: string;
  discordWebhookUrl: string;
  hashtag: string;
  intervalMs: number;
  imagesOnly: boolean;
  dbFile: string;
  maxPages: number;
  requestTimeoutMs: number;
}

const DEFAULTS = {
  hashtag: "#example",
  intervalMs: 10 * 60 * 1000,
  maxPages: 20,
  requestTimeoutMs: 20_000,
  dbFile: "./seen.db",
} as const;

function getEnv(name: string, required = false): string | undefined {
  const value = process.env[name];
  if (required && !value) {
    console.error(`${name} is not set`);
    process.exit(1);
  }
  return value;
}

export function loadConfig(): Config {
  return {
    apiKey: getEnv("TWITTERAPI_IO_KEY", true)!,
    discordWebhookUrl: getEnv("DISCORD_WEBHOOK_URL", true)!,
    hashtag: getEnv("HASHTAG") ?? DEFAULTS.hashtag,
    intervalMs: Number(getEnv("INTERVAL_MS") ?? DEFAULTS.intervalMs),
    imagesOnly: getEnv("IMAGES_ONLY") === "1",
    dbFile: getEnv("DB_FILE") ?? DEFAULTS.dbFile,
    maxPages: DEFAULTS.maxPages,
    requestTimeoutMs: DEFAULTS.requestTimeoutMs,
  };
}