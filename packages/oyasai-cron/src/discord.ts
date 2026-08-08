export interface DiscordClient {
  post(content: string): Promise<void>;
}

export function createDiscordClient(webhookUrl: string): DiscordClient {
  async function post(content: string): Promise<void> {
    async function send(): Promise<Response> {
      return fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
      });
    }

    try {
      const response = await send();
      if (response.status === 429) {
        const body = (await response.json().catch(() => ({}))) as { retry_after?: number };
        await new Promise((r) => setTimeout(r, (body.retry_after ?? 1) * 1000));
        await send();
      } else if (!response.ok) {
        console.error(`discord webhook failed: HTTP ${response.status}`);
      }
    } catch (error) {
      console.error("discord webhook error:", error);
    }
  }

  return { post };
}