use std::time::{Duration, SystemTime, UNIX_EPOCH};

use reqwest::{Client, Url};

mod request;
mod response;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    env_logger::init();

    let interval = Duration::from_hours(1);

    let webhook_url = std::env::var("DISCORD_WEBHOOK_URL").unwrap();

    let twitterapiio_api_key = std::env::var("TWITTERAPIIO_API_KEY").unwrap();

    let client = Client::new();

    log::info!("Initialized with interval: {}m", interval.as_secs() / 60);

    loop {
        let now = SystemTime::now();

        log::info!("Started new cron run");

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

        log::info!("Found {} new tweets", resp.tweets.len());

        for tweet in resp.tweets {
            let payload = request::DiscordWebhookRequest {
                content: tweet.url.unwrap(),
                username: "oyasai-x-cron".to_string(),
            };
            log::info!("Found tweet: {}", tweet.id);
            client.post(&webhook_url).json(&payload).send().await?;
        }

        log::info!("Done. Sleeping...");

        std::thread::sleep(interval);
    }
}
