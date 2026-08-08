import { DatabaseSync } from "node:sqlite";

export interface SeenTweetsDb {
  alreadySeen(tweetId: string): boolean;
  markSeen(tweetId: string): boolean;
  close(): void;
}

export function createSeenTweetsDb(dbFile: string): SeenTweetsDb {
  const db = new DatabaseSync(dbFile);
  db.exec(`
    CREATE TABLE IF NOT EXISTS seen_tweets (
      tweet_id TEXT PRIMARY KEY,
      seen_at  TEXT NOT NULL
    );
  `);

  const stmtSeen = db.prepare("SELECT 1 AS x FROM seen_tweets WHERE tweet_id = ?");
  const stmtMarkSeen = db.prepare(
    "INSERT OR IGNORE INTO seen_tweets (tweet_id, seen_at) VALUES (?, ?)"
  );

  function alreadySeen(tweetId: string): boolean {
    return stmtSeen.get(tweetId) !== undefined;
  }

  function markSeen(tweetId: string): boolean {
    return stmtMarkSeen.run(tweetId, new Date().toISOString()).changes === 1;
  }

  function close(): void {
    db.close();
  }

  return { alreadySeen, markSeen, close };
}