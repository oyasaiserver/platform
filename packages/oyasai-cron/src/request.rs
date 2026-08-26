use serde::Serialize;

#[derive(Serialize)]
pub struct DiscordWebhookRequest {
    pub content: String,
    pub username: String,
}
