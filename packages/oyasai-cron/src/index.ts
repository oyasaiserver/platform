#!/usr/bin/env node --enable-source-maps

import { loadConfig } from "./config.ts";
import { createTwitterClient } from "./twitter.ts";
import { createDiscordClient } from "./discord.ts";
import { createSeenTweetsDb } from "./db.ts";
import { runCron } from "./cron.ts";

const config = loadConfig();

const twitter = createTwitterClient(config.apiKey, config.requestTimeoutMs);
const discord = createDiscordClient(config.discordWebhookUrl);
const db = createSeenTweetsDb(config.dbFile);

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => {
    console.log(`\n${signal} received, closing db`);
    db.close();
    process.exit(0);
  });
}

await runCron(config, twitter, discord, db);
