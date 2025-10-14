package io.oyasai.vertex.services.sentry

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedField
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedTitle
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import io.oyasai.vertex.Secrets
import io.oyasai.vertex.services.Service
import java.awt.Color
import java.io.PrintWriter
import java.io.StringWriter
import java.time.Instant
import java.util.logging.*

object SentryService : Service, Handler() {
  private val logger = Logger.getLogger(SentryService::class.simpleName)
  private val webhookClient = runCatching { WebhookClient.withUrl(Secrets.DISCORD_WEBHOOK_URL) }

  private const val MAX_STACK_TRACE_LENGTH = 800
  private const val RGB_MASK = 0xFFFFFF

  init {
    if (webhookClient.isSuccess) {
      logger.addHandler(this)
    }
  }

  override fun onDisable() {
    logger.removeHandler(this)
  }

  override fun publish(record: LogRecord) {
    if (record.level != Level.SEVERE) {
      return
    }
    sendErrorNotification(
      timestamp = Instant.ofEpochMilli(record.millis),
      message = SimpleFormatter().formatMessage(record),
      throwable = record.thrown ?: return,
    )
  }

  private fun sendErrorNotification(timestamp: Instant, message: String, throwable: Throwable) {
    val client =
      webhookClient.getOrElse {
        return
      }
    val title = EmbedTitle("🚨 **Platform Exception**", null)
    val stack =
      throwableToStackTrace(throwable).let {
        if (it.length > MAX_STACK_TRACE_LENGTH) it.take(MAX_STACK_TRACE_LENGTH) + "...(truncated)"
        else it
      }
    val stackTraceField = EmbedField(false, "Stack Trace", "```$stack```")
    val embed =
      WebhookEmbedBuilder()
        .setTitle(title)
        .setDescription("`${message.replace("`", "\\`")}`")
        .setColor(Color.RED.rgb and RGB_MASK)
        .setTimestamp(timestamp)
        .addField(stackTraceField)
        .build()
    runCatching { client.send(embed) }
      .onFailure { logger.log(Level.WARNING, "Failed to send Discord error notification", it) }
  }

  private fun throwableToStackTrace(thrown: Throwable): String =
    StringWriter().also { PrintWriter(it).use(thrown::printStackTrace) }.toString()

  override fun flush() {}

  override fun close() {
    webhookClient.getOrNull()?.close()
  }
}
