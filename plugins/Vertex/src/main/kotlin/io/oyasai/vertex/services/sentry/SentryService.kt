package io.oyasai.vertex.services.sentry

import club.minnced.discord.webhook.WebhookClient
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedField
import club.minnced.discord.webhook.send.WebhookEmbed.EmbedTitle
import club.minnced.discord.webhook.send.WebhookEmbedBuilder
import io.oyasai.vertex.services.Service
import java.awt.Color
import java.io.PrintWriter
import java.io.StringWriter
import java.lang.System.getenv
import java.time.Instant
import java.util.logging.*

object SentryService : Service, Handler() {
  private val logger by lazy { Logger.getLogger("") }
  private val webhookClient = WebhookClient.withUrl(getenv("DISCORD_WEBHOOK_URL"))
  private const val MAX_STACK_TRACE_LENGTH = 800
  private const val RGB_MASK = 0xFFFFFF

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
    sendErrorNotification(
      timestamp = Instant.ofEpochMilli(record.millis),
      message = SimpleFormatter().formatMessage(record),
      throwable = record.thrown,
    )
  }

  private fun sendErrorNotification(timestamp: Instant, message: String, throwable: Throwable?) {
    val title = EmbedTitle("🚨 **Platform Exception**", null)
    val stack =
      throwable?.let { thrownToStackTrace(it) }?.take(MAX_STACK_TRACE_LENGTH) ?: "<unknown>"
    val stackTraceField = EmbedField(false, "Stack Trace", "```$stack```")
    WebhookEmbedBuilder()
      .setTitle(title)
      .setDescription("`$message`")
      .setColor(Color.RED.rgb and RGB_MASK)
      .setTimestamp(timestamp)
      .addField(stackTraceField)
      .build()
      .let { webhookClient.send(it) }
  }

  private fun thrownToStackTrace(thrown: Throwable): String {
    val sw = StringWriter()
    PrintWriter(sw).use { thrown.printStackTrace(it) }
    return sw.toString()
  }

  override fun flush() {}

  override fun close() {
    webhookClient.close()
  }
}
