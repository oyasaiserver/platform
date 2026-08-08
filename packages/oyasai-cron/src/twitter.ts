export interface TweetAuthor {
  id?: string | number;
  id_str?: string;
  userName?: string;
  screen_name?: string;
  name?: string;
}

export interface Tweet {
  id?: string | number;
  id_str?: string;
  text?: string;
  full_text?: string;
  createdAt?: string;
  created_at?: string;
  author?: TweetAuthor;
  user?: TweetAuthor;
  extendedEntities?: {
    media?: Array<{ type: string }>;
  };
  entities?: {
    media?: Array<{ type: string }>;
  };
}

export interface SearchResponse {
  tweets?: Tweet[];
  next_cursor?: string;
  nextCursor?: string;
  has_next_page?: boolean;
}

export interface TwitterClient {
  search(query: string, cursor: string | null): Promise<SearchResponse>;
}

const BASE_URL = "https://api.twitterapi.io";

export function createTwitterClient(
  apiKey: string,
  requestTimeoutMs: number,
  maxRetries = 4
): TwitterClient {
  async function search(query: string, cursor: string | null): Promise<SearchResponse> {
    const params = new URLSearchParams({ query, queryType: "Latest" });
    if (cursor) params.set("cursor", cursor);
    const url = `${BASE_URL}/twitter/tweet/advanced_search?${params.toString()}`;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), requestTimeoutMs);
      try {
        const response = await fetch(url, {
          headers: { "X-API-Key": apiKey },
          signal: controller.signal,
        });

        if (response.status === 429 || response.status >= 500) {
          const wait = 2 ** attempt * 1000;
          console.warn(`HTTP ${response.status}, retrying in ${wait}ms`);
          await new Promise((r) => setTimeout(r, wait));
          continue;
        }
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return (await response.json()) as SearchResponse;
      } finally {
        clearTimeout(timeout);
      }
    }
    throw new Error("search: exhausted retries");
  }

  return { search };
}

export function extractTweetId(tweet: Tweet): string {
  return String(tweet.id ?? tweet.id_str ?? "");
}

export function hasImages(tweet: Tweet): boolean {
  const media = tweet.extendedEntities?.media ?? tweet.entities?.media ?? [];
  return media.some((m) => m.type === "photo" || m.type === "image");
}