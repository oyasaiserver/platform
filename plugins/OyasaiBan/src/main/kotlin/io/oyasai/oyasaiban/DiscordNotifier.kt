package io.oyasai.oyasaiban

import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import org.slf4j.Logger

class DiscordNotifier(
    private val webhookUrl: String,
    private val logger: Logger,
) {
  private val http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()

  fun sendBan(
      targetName: String,
      operator: String,
      reason: String,
      duration: String,
  ) {
    if (webhookUrl.isBlank()) {
      logger.warn("BAN webhook URL is not set.")
      return
    }
    val payload =
        """
        {"embeds":[{"color":16711680,"thumbnail":{"url":"https://vzge.me/bust/${targetName.json()}?y=-40"},"title":"プレイヤーがBANされました","description":"対象: ${targetName.json()}","fields":[{"inline":true,"name":"執行","value":"${operator.json()}"},{"inline":true,"name":"期間","value":"${duration.json()}"},{"inline":false,"name":"理由","value":"${reason.json()}"}]}]}
        """
            .trimIndent()
    val request =
        runCatching {
              HttpRequest.newBuilder(URI.create(webhookUrl))
                  .timeout(Duration.ofSeconds(10))
                  .header("Content-Type", "application/json")
                  .POST(HttpRequest.BodyPublishers.ofString(payload))
                  .build()
            }
            .getOrElse {
              logger.warn("BAN webhook URL is invalid: {}", it.message)
              return
            }
    http.sendAsync(request, HttpResponse.BodyHandlers.discarding()).whenComplete { response, error
      ->
      when {
        error != null -> logger.warn("BAN webhook failed: {}", error.message)
        response.statusCode() !in 200..299 ->
            logger.warn("BAN webhook returned HTTP {}.", response.statusCode())
      }
    }
  }

  private fun String.json(): String = buildString {
    for (char in this@json) {
      when (char) {
        '\\' -> append("\\\\")
        '"' -> append("\\\"")
        '\b' -> append("\\b")
        '\u000C' -> append("\\f")
        '\n' -> append("\\n")
        '\r' -> append("\\r")
        '\t' -> append("\\t")
        else -> if (char.code < 0x20) append("\\u%04x".format(char.code)) else append(char)
      }
    }
  }
}
