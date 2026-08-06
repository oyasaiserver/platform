#!/usr/bin/env node --enable-source-maps

/**
 * hashtag-webhook-monitor.ts
 *
 * 対象ハッシュタグにマッチしたツイートを検出し、未通知のものを Discord webhook に流す常駐プロセス。
 *
 * - for await (const _ of setInterval(...)) で 5〜15 分間隔ポーリング
 * - 重複通知防止のため、通知済みツイート ID を node:sqlite に保存
 *
 * 環境変数：
 *   TWITTERAPI_IO_KEY    twitterapi.io の API キー（必須）
 *   DISCORD_WEBHOOK_URL  通知先の Discord webhook（必須）
 *   HASHTAG              監視ハッシュタグ（任意，既定 "#example"）
 *   INTERVAL_MS          ポーリング間隔ミリ秒（任意，既定 600000 = 10 分）
 *   IMAGES_ONLY          "1" のとき画像付きのみに絞る（任意，既定 なし=全件）
 *   DB_FILE              SQLite ファイル（任意，既定 ./seen.db）
 *
 * 実行：
 *   Node 24+  : node hashtag-webhook-monitor.ts
 *   Node 22.x : node --experimental-sqlite --experimental-strip-types hashtag-webhook-monitor.ts
 */

import { DatabaseSync } from "node:sqlite";
import { setInterval } from "node:timers/promises";

// ---- 設定 ------------------------------------------------------------------

const BASE = "https://api.twitterapi.io";
const HASHTAG = process.env.HASHTAG ?? "#example";
const INTERVAL_MS = Number(process.env.INTERVAL_MS ?? 10 * 60 * 1000);
const IMAGES_ONLY = process.env.IMAGES_ONLY === "1";
const DB_FILE = process.env.DB_FILE ?? "./seen.db";
const MAX_PAGES = 20; // クレジット浪費防止のページ上限
const REQUEST_TIMEOUT_MS = 20_000;

const API_KEY = process.env.TWITTERAPI_IO_KEY;
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

if (!API_KEY) {
  console.error("TWITTERAPI_IO_KEY is not set");
  process.exit(1);
}
if (!DISCORD_WEBHOOK_URL) {
  console.error("DISCORD_WEBHOOK_URL is not set");
  process.exit(1);
}

// ---- 型 --------------------------------------------------------------------

interface TweetAuthor {
  id?: string | number;
  id_str?: string;
  userName?: string;
  screen_name?: string;
  name?: string;
}

interface Tweet {
  id?: string | number;
  id_str?: string;
  text?: string;
  full_text?: string;
  createdAt?: string;
  created_at?: string;
  author?: TweetAuthor;
  user?: TweetAuthor;
}

interface SearchResponse {
  tweets?: Tweet[];
  next_cursor?: string;
  nextCursor?: string;
  has_next_page?: boolean;
}

// ---- DB（重複通知防止のみ）-------------------------------------------------

const db = new DatabaseSync(DB_FILE);
db.exec(`
  CREATE TABLE IF NOT EXISTS seen_tweets (
    tweet_id TEXT PRIMARY KEY,
    seen_at  TEXT NOT NULL
  );
`);

const stmtSeen = db.prepare(
  "SELECT 1 AS x FROM seen_tweets WHERE tweet_id = ?",
);
const stmtMarkSeen = db.prepare(
  "INSERT OR IGNORE INTO seen_tweets (tweet_id, seen_at) VALUES (?, ?)",
);

function alreadySeen(tweetId: string): boolean {
  return stmtSeen.get(tweetId) !== undefined;
}

/** 新規なら true（= 未通知だった）。既通知なら false。 */
function markSeen(tweetId: string): boolean {
  return stmtMarkSeen.run(tweetId, new Date().toISOString()).changes === 1;
}

// ---- Discord ---------------------------------------------------------------

async function discordPost(content: string): Promise<void> {
  const send = () =>
    fetch(DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
    });
  try {
    const res = await send();
    if (res.status === 429) {
      const body = (await res.json().catch(() => ({}))) as {
        retry_after?: number;
      };
      await new Promise((r) => setTimeout(r, (body.retry_after ?? 1) * 1000));
      await send();
    } else if (!res.ok) {
      console.error(`discord webhook failed: HTTP ${res.status}`);
    }
  } catch (err) {
    console.error("discord webhook error:", err);
  }
}

// ---- API -------------------------------------------------------------------

async function advancedSearch(
  query: string,
  cursor: string | null,
): Promise<SearchResponse> {
  const params = new URLSearchParams({ query, queryType: "Latest" });
  if (cursor) params.set("cursor", cursor);
  const url = `${BASE}/twitter/tweet/advanced_search?${params.toString()}`;

  for (let attempt = 0; attempt < 4; attempt++) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        headers: { "X-API-Key": API_KEY! },
        signal: ctrl.signal,
      });
      if (res.status === 429 || res.status >= 500) {
        const wait = 2 ** attempt * 1000;
        console.warn(`HTTP ${res.status}, retrying in ${wait}ms`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as SearchResponse;
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error("advancedSearch: exhausted retries");
}

function formatTweet(t: Tweet, tweetId: string): string {
  const author = t.author ?? t.user ?? {};
  const username = author.userName ?? author.screen_name ?? "unknown";
  const display = author.name ?? username;
  const text = (t.text ?? t.full_text ?? "").trim();
  const url = `https://x.com/${username}/status/${tweetId}`;
  // Discord は URL 単体を貼るとカード展開してくれるので、本文 + URL のシンプル構成
  const head = `**${display}** (@${username})`;
  return text ? `${head}\n${text}\n${url}` : `${head}\n${url}`;
}

// ---- 1 回分のスキャン ------------------------------------------------------

async function scanOnce(): Promise<void> {
  const query = IMAGES_ONLY ? `${HASHTAG} filter:images` : HASHTAG;
  let cursor: string | null = null;
  let pages = 0;
  let posted = 0;
  let scanned = 0;

  // 古い順に通知したいので、新着ツイートを一旦ためて逆順に流す
  const pending: Array<{ id: string; tweet: Tweet }> = [];

  while (pages < MAX_PAGES) {
    const data = await advancedSearch(query, cursor);
    const tweets = data.tweets ?? [];
    if (tweets.length === 0) break;

    for (const t of tweets) {
      const tweetId = String(t.id ?? t.id_str ?? "");
      if (!tweetId || alreadySeen(tweetId)) continue;
      scanned++;
      pending.push({ id: tweetId, tweet: t });
    }

    cursor = data.next_cursor ?? data.nextCursor ?? null;
    const hasNext = data.has_next_page ?? Boolean(cursor);
    if (!hasNext || !cursor) break;
    pages++;
  }

  // advanced_search は新しい順で返るので、reverse して古い順に投稿
  pending.reverse();
  for (const { id, tweet } of pending) {
    // markSeen が true（新規登録成功）のときだけ通知＝多重起動でも二重通知しない
    if (markSeen(id)) {
      await discordPost(formatTweet(tweet, id));
      posted++;
    }
  }

  console.log(
    `[${new Date().toISOString()}] scan complete | scanned=${scanned} posted=${posted} pages=${pages + 1}`,
  );
}

// ---- メインループ ----------------------------------------------------------

async function runGuarded(): Promise<void> {
  try {
    await scanOnce();
  } catch (err) {
    console.error("scan error:", err);
    await discordPost(`⚠️ monitor scan error: ${String(err)}`);
  }
}

async function main(): Promise<void> {
  console.log(
    `monitor started | hashtag=${HASHTAG} imagesOnly=${IMAGES_ONLY} interval=${INTERVAL_MS}ms`,
  );
  await runGuarded();
  for await (const _ of setInterval(INTERVAL_MS)) {
    await runGuarded();
  }
}

for (const sig of ["SIGINT", "SIGTERM"] as const) {
  process.on(sig, () => {
    console.log(`\n${sig} received, closing db`);
    db.close();
    process.exit(0);
  });
}

await main();
