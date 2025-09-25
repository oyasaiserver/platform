package io.oyasai.vertex.services.sentry

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedField
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedTitle
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import io.oyasai.lib.minecraft.Service
import java.awt.Color
import java.io.PrintWriter
import java.io.StringWriter
import java.lang.System.getenv
import java.time.Instant
import java.util.logging.Handler
import java.util.logging.Level
import java.util.logging.LogRecord
import java.util.logging.Logger

object SentryService : Service, Handler() {
  private val logger by lazy { Logger.getLogger("") }

  private val webhookClient = WebhookClient.withUrl(getenv("DISCORD_WEBHOOK_URL"))
  private val stringWriter = StringWriter()

  private const val MAX_STACK_TRACE_LENGTH = 800

  init {
    logger.addHandler(this)
  }

  override fun onDisable() {
    logger.removeHandler(this)
  }

  override fun publish(record: LogRecord) {
    if (record.level != Level.SEVERE) {
      return
    }

    val timestamp = Instant.ofEpochMilli(record.millis)
    val title = EmbedTitle("🚨 **Platform Exception**", null)
    val stackTraceField =
      EmbedField(
        false,
        "Stack Trace",
        "```${
          record.thrown?.let { thrownToStackTrace(it).take(MAX_STACK_TRACE_LENGTH) } ?: "No stack trace available"
        }```",
      )

    WebhookEmbedBuilder()
      .setTitle(title)
      .setDescription("`${record.message}`")
      .setColor(Color.RED.rgb and 0xFFFFFF)
      .setTimestamp(timestamp)
      .addField(stackTraceField)
      .build()
      .let { webhookClient.send(it) }
  }

  private fun thrownToStackTrace(thrown: Throwable): String =
    stringWriter
      .apply { PrintWriter(stringWriter).use { pw -> thrown.printStackTrace(pw) } }
      .toString()

  override fun flush() {}

  override fun close() {
    webhookClient.close()
  }
}
