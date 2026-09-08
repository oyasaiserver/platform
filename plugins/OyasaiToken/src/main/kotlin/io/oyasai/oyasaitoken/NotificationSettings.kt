package io.oyasai.oyasaitoken

import io.oyasai.oyasaitoken.internal.NotificationType
import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

internal data class NotificationSettings(
    val enabled: Boolean,
    private val messages: Map<String, String>,
) {
  fun render(notification: PendingNotification): String {
    val key = notification.type.name.lowercase()
    return message(key)
        .replace("{amount}", notification.delta.absoluteValueText())
        .replace("{delta}", notification.delta.signedText())
        .replace("{balance}", notification.balanceAfter.toString())
  }

  fun renderSummary(notifications: List<PendingNotification>): String {
    require(notifications.isNotEmpty()) { "notification summary requires at least one entry" }
    val totalDelta = notifications.fold(0L) { total, item -> total + item.delta }
    return message("summary")
        .replace("{count}", notifications.size.toString())
        .replace("{delta}", totalDelta.signedText())
        .replace("{balance}", notifications.last().balanceAfter.toString())
  }

  private fun message(key: String): String = messages[key] ?: DEFAULT_MESSAGES.getValue(key)

  companion object {
    const val SCHEMA_VERSION = 1

    private val DEFAULT_MESSAGES =
        mapOf(
            "add" to "{amount}トークンを受け取りました。現在の残高は{balance}トークンです。",
            "remove" to "{amount}トークンが差し引かれました。現在の残高は{balance}トークンです。",
            "set" to "トークン残高が{balance}トークンに変更されました（増減: {delta}）。",
            "summary" to "ログアウト中に{count}件のトークン変更があり、合計{delta}トークンでした。現在の残高は{balance}トークンです。",
        )

    fun disabled(): NotificationSettings = NotificationSettings(false, DEFAULT_MESSAGES)

    fun load(file: File): NotificationSettings {
      val yaml = YamlConfiguration()
      yaml.load(file)
      val schemaVersion = yaml.getInt("schema-version", -1)
      require(schemaVersion == SCHEMA_VERSION) {
        "unsupported schema-version $schemaVersion (expected $SCHEMA_VERSION)"
      }
      val configuredMessages =
          DEFAULT_MESSAGES.keys.associateWith { key ->
            yaml.getString("messages.$key")?.takeIf(String::isNotBlank)
                ?: DEFAULT_MESSAGES.getValue(key)
          }
      return NotificationSettings(yaml.getBoolean("enabled", false), configuredMessages)
    }
  }
}

internal data class PendingNotification(
    val transactionId: Long,
    val targetUuid: java.util.UUID,
    val type: NotificationType,
    val delta: Long,
    val balanceAfter: Long,
)

private fun Long.signedText(): String = if (this > 0) "+$this" else toString()

private fun Long.absoluteValueText(): String =
    if (this == Long.MIN_VALUE) "9223372036854775808" else kotlin.math.abs(this).toString()
