// https://github.com/kaitoInfra/fast-twitter-api/blob/07dd32eea01169f23acae7fba0b58b14cbc75096/openapi.json
#![allow(dead_code)]

use serde::Deserialize;

#[derive(Debug, Deserialize)]
pub struct SearchResponse {
    pub tweets: Vec<Tweet>,
    pub has_next_page: bool,
    pub next_cursor: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct Tweet {
    pub id: String,
    pub url: Option<String>,
    pub text: Option<String>,
    pub source: Option<String>,
    #[serde(rename = "retweetCount")]
    pub retweet_count: Option<i64>,
    #[serde(rename = "replyCount")]
    pub reply_count: Option<i64>,
    #[serde(rename = "likeCount")]
    pub like_count: Option<i64>,
    #[serde(rename = "quoteCount")]
    pub quote_count: Option<i64>,
    #[serde(rename = "viewCount")]
    pub view_count: Option<i64>,
    #[serde(rename = "createdAt")]
    pub created_at: Option<String>,
    pub lang: Option<String>,
    #[serde(rename = "bookmarkCount")]
    pub bookmark_count: Option<i64>,
    #[serde(rename = "isReply")]
    pub is_reply: Option<bool>,
    #[serde(rename = "inReplyToId")]
    pub in_reply_to_id: Option<String>,
    #[serde(rename = "conversationId")]
    pub conversation_id: Option<String>,
    #[serde(rename = "displayTextRange")]
    pub display_text_range: Option<Vec<i64>>,
    #[serde(rename = "inReplyToUserId")]
    pub in_reply_to_user_id: Option<String>,
    #[serde(rename = "inReplyToUsername")]
    pub in_reply_to_username: Option<String>,
    pub author: Option<UserInfo>,
    pub entities: Option<TweetEntities>,
    // These are recursive (Tweet inside Tweet), so box them
    pub quoted_tweet: Option<Box<Tweet>>,
    pub retweeted_tweet: Option<Box<Tweet>>,
    #[serde(rename = "isLimitedReply")]
    pub is_limited_reply: Option<bool>,
}

#[derive(Debug, Deserialize)]
pub struct UserInfo {
    #[serde(rename = "userName")]
    pub user_name: Option<String>,
    pub url: Option<String>,
    pub id: Option<String>,
    pub name: Option<String>,
    #[serde(rename = "isBlueVerified")]
    pub is_blue_verified: Option<bool>,
    #[serde(rename = "verifiedType")]
    pub verified_type: Option<String>,
    #[serde(rename = "profilePicture")]
    pub profile_picture: Option<String>,
    #[serde(rename = "coverPicture")]
    pub cover_picture: Option<String>,
    pub description: Option<String>,
    pub location: Option<String>,
    pub followers: Option<i64>,
    pub following: Option<i64>,
    #[serde(rename = "canDm")]
    pub can_dm: Option<bool>,
    #[serde(rename = "createdAt")]
    pub created_at: Option<String>,
    #[serde(rename = "favouritesCount")]
    pub favourites_count: Option<i64>,
    #[serde(rename = "mediaCount")]
    pub media_count: Option<i64>,
    #[serde(rename = "statusesCount")]
    pub statuses_count: Option<i64>,
    #[serde(rename = "possiblySensitive")]
    pub possibly_sensitive: Option<bool>,
    #[serde(rename = "pinnedTweetIds")]
    pub pinned_tweet_ids: Option<Vec<String>>,
}

#[derive(Debug, Deserialize)]
pub struct TweetEntities {
    #[serde(default)]
    pub hashtags: Vec<Hashtag>,
    #[serde(default)]
    pub urls: Vec<UrlEntity>,
    #[serde(default, rename = "user_mentions")]
    pub user_mentions: Vec<UserMention>,
}

#[derive(Debug, Deserialize)]
pub struct Hashtag {
    pub indices: Option<Vec<i64>>,
    pub text: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UrlEntity {
    pub display_url: Option<String>,
    pub expanded_url: Option<String>,
    pub indices: Option<Vec<i64>>,
    pub url: Option<String>,
}

#[derive(Debug, Deserialize)]
pub struct UserMention {
    pub id_str: Option<String>,
    pub name: Option<String>,
    pub screen_name: Option<String>,
}
