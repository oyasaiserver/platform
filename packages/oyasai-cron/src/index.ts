#!/usr/bin/env node --enable-source-maps
import { ok } from "node:assert";
import { env } from "node:process";
import { setTimeout } from "node:timers/promises";

function mustEnv(name: string): string {
  const value = env[name];
  ok(value, `Required envvar ${name} missing`);
  return value;
}

type SearchResponse = {
  tweets: { id: string; url?: string }[];
};

const INTERVAL_MS = 60 * 60 * 1000;

const webhookUrl = mustEnv("DISCORD_WEBHOOK_URL");
const apiKey = mustEnv("TWITTERAPIIO_API_KEY");

console.log(`Initialized with interval: ${INTERVAL_MS / 60000}m`);

async function run(): Promise<void> {
  console.log("Started new cron run");

  const since = Math.floor(Date.now() / 1000) - INTERVAL_MS / 1000;
  const url = new URL(
    "https://api.twitterapi.io/twitter/tweet/advanced_search",
  );
  url.searchParams.set("queryType", "Latest");
  url.searchParams.set("query", `#おやさい鯖 since_time:${since}`);

  const res = await fetch(url, { headers: { "x-api-key": apiKey } });
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  const { tweets } = (await res.json()) as SearchResponse;

  console.log(`Found ${tweets.length} new tweets`);

  for (const tweet of tweets) {
    if (!tweet.url) continue;
    console.log(`Found tweet: ${tweet.id}`);
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: tweet.url,
        username: "oyasai-x-cron",
      }),
    });
  }

  console.log("Done.");
}

while (true) {
  await run();
  await setTimeout(INTERVAL_MS);
}
