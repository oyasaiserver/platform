package io.oyasai.oyasaiAdminTools.discord

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import club.minnced.discord.webhook.send.WebhookMessageBuilder
import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.rank.RankManager
import java.util.UUID

object SendEmbedMessage {
  var url_promotion = plugin.config.getString("webhook-url", "") ?: ""
  var url_ban = plugin.config.getString("webhook-ban-url", "") ?: ""

  fun sendBanNotification(
      targetName: String,
      bannerName: String?,
      reason: String,
      duration: String,
  ) {
    if (url_ban.isEmpty()) {
      plugin.logger.warning("Webhook URL is not set.")
      return
    }
    val client = WebhookClient.withUrl(url_ban)

    val emb =
        WebhookEmbedBuilder()
            .setColor(0xFF0000)
            .setThumbnailUrl("https://vzge.me/bust/${targetName}?y=-40")
            .setTitle(WebhookEmbed.EmbedTitle("プレイヤーがBANされました", null))
            .setDescription("対象: $targetName")
            .addField(WebhookEmbed.EmbedField(true, "執行", bannerName ?: "Unknown"))
            .addField(WebhookEmbed.EmbedField(true, "期間", duration))
            .addField(WebhookEmbed.EmbedField(false, "理由", reason))
            .build()
    val message = WebhookMessageBuilder().addEmbeds(emb).build()
    client.send(message)
  }

  fun sendPromotionNotification(
      targetUUID: UUID,
      targetName: String?,
      promoterName: String?,
      record: PromotionRecord,
  ) {
    val prevRank = RankManager.getRankByGroupName(record.previousRank)
    val newRank = RankManager.getRankByGroupName(record.newRank)
    if (prevRank == null || newRank == null) {
      plugin.logger.warning("Invalid rank: ${record.previousRank} or ${record.newRank}")
      return
    }
    if (url_promotion.isEmpty()) {
      plugin.logger.warning("Webhook URL is not set.")
      return
    }
    val color = if (record.type == PromotionType.PROMOTE) 0x00FF00 else 0xFF0000
    val title =
        if (record.type == PromotionType.PROMOTE) if (record.isForced) "**特例**昇格！" else "昇格！"
        else "降格！"
    val rotate = if (record.type == PromotionType.PROMOTE) "" else "y=140"

    val lastBuildID =
        if (record.lastBuildID == Integer.MIN_VALUE) "なし（何故）" else record.lastBuildID.toString()

    val info =
        StringBuilder()
            .append("プレイ時間: ${record.playedSec/3600}時間\n")
            .append("最後の建築: ${lastBuildID}\n")
            .append("建築数: ${record.builds}\n")
            .append("レベル: ${record.lastLv}\n")
            .append("${targetUUID}\n")
            .toString()

    val client = WebhookClient.withUrl(url_promotion)
    val emb =
        WebhookEmbedBuilder()
            .setColor(color)
            .setTitle(WebhookEmbed.EmbedTitle(title, null))
            .setDescription("対象: ${targetName}")
            .addField(WebhookEmbed.EmbedField(true, "元のランク", prevRank.name))
            .addField(WebhookEmbed.EmbedField(true, "新しいランク", newRank.name))
            .addField(WebhookEmbed.EmbedField(false, "備考", record.note))
            .addField(WebhookEmbed.EmbedField(false, "情報", info))
            .setThumbnailUrl("https://vzge.me/bust/${targetName}?y=-40")
            .setFooter(
                WebhookEmbed.EmbedFooter(
                    "Promoted by ${promoterName}・業務ありがとう",
                    "https://vzge.me/bust/${promoterName}?${rotate}",
                )
            )
            .build()
    val message = WebhookMessageBuilder().addEmbeds(emb).build()
    client.send(message)
  }
}
