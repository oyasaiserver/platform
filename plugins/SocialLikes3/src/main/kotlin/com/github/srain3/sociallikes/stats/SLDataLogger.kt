package com.github.srain3.sociallikes.stats

import com.github.srain3.sociallikes.Tools
import java.io.File
import java.io.FileWriter
import java.io.PrintWriter
import java.time.ZonedDateTime
import java.time.format.DateTimeFormatter
import java.util.concurrent.Executors
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

/** SLデータ系コマンド（/sldata, /sldataop, /sllucky）の利用ログを 日別のファイル（JSON Lines形式）へ非同期に安全記録するロガー。 */
object SLDataLogger {
  private val executor =
      Executors.newSingleThreadExecutor { r ->
        Thread(r, "SocialLikes-CommandLogger-Thread").apply { isDaemon = true }
      }

  private val isoFormatter = DateTimeFormatter.ISO_OFFSET_DATE_TIME
  private val fileDateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd")

  private fun getLogFolder(): File {
    val folder = File(Tools.plugin.dataFolder, "logs")
    if (!folder.exists()) {
      folder.mkdirs()
    }
    return folder
  }

  /** コマンド実行ログを非同期で記録する。 */
  fun log(
      sender: CommandSender,
      commandLabel: String,
      args: List<String>,
      durationMs: Long = 0,
      success: Boolean = true,
      extraInfo: String? = null,
  ) {
    val now = ZonedDateTime.now(java.time.ZoneId.of("Asia/Tokyo"))
    val isPlayer = sender is Player
    val playerName = sender.name
    val playerUuid = if (isPlayer) (sender as Player).uniqueId.toString() else "CONSOLE"
    val ip =
        if (isPlayer) (sender as Player).address?.address?.hostAddress ?: "unknown" else "127.0.0.1"
    val fullCmd =
        if (args.isEmpty()) "/$commandLabel" else "/$commandLabel ${args.joinToString(" ")}"

    executor.submit {
      try {
        val todayStr = now.format(fileDateFormatter)
        val logFile = File(getLogFolder(), "sldata-$todayStr.log")

        val json = buildString {
          append("{")
          append("\"time\":\"").append(now.format(isoFormatter)).append("\",")
          append("\"player\":\"").append(escapeJson(playerName)).append("\",")
          append("\"uuid\":\"").append(playerUuid).append("\",")
          append("\"sender_type\":\"").append(if (isPlayer) "PLAYER" else "CONSOLE").append("\",")
          append("\"cmd\":\"").append(escapeJson(fullCmd)).append("\",")
          append("\"duration_ms\":").append(durationMs).append(",")
          append("\"success\":").append(success).append(",")
          append("\"ip\":\"").append(escapeJson(ip)).append("\"")
          if (extraInfo != null) {
            append(",\"extra\":\"").append(escapeJson(extraInfo)).append("\"")
          }
          append("}")
        }

        PrintWriter(FileWriter(logFile, true)).use { writer -> writer.println(json) }
      } catch (e: Exception) {
        Tools.plugin.logger.warning("[SLDataLogger] ログの書き込みに失敗しました: ${e.message}")
      }
    }
  }

  private fun escapeJson(str: String): String {
    return str.replace("\\", "\\\\")
        .replace("\"", "\\\"")
        .replace("\n", "\\n")
        .replace("\r", "\\r")
        .replace("\t", "\\t")
  }
}
