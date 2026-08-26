use std::time::{Duration, SystemTime, UNIX_EPOCH};

use reqwest::{Client, Url};

mod request;
mod response;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let interval = Duration::from_hours(15);

    let webhook_url = std::env::var("DISCORD_WEBHOOK_URL").unwrap();

    let twitterapiio_api_key = std::env::var("TWITTERAPIIO_API_KEY").unwrap();

    let client = Client::new();

    loop {
        let now = SystemTime::now();

        let since = &(now - interval)
            .duration_since(UNIX_EPOCH)
            .unwrap()
            .as_secs();

        let query = format!("#おやさい鯖 since_time:{}", since);

        let url = Url::parse_with_params(
            "https://api.twitterapi.io/twitter/tweet/advanced_search",
            &[("queryType", "Latest"), ("query", query.as_str())],
        )
        .unwrap();

        let resp = client
            .get(url)
            .header("x-api-key", &twitterapiio_api_key)
            .send()
            .await?
            .json::<response::SearchResponse>()
            .await?;

        for tweet in resp.tweets {
            let payload = request::DiscordWebhookRequest {
                content: tweet.url.unwrap(),
                username: "oyasai-x-cron".to_string(),
            };
            client.post(&webhook_url).json(&payload).send().await?;
        }
        std::thread::sleep(interval);
    }
}
