package icu.oyasai.utilities.schematic

import icu.oyasai.utilities.Main
import java.io.File
import java.net.HttpURLConnection
import java.net.URI
import java.util.logging.Level
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

class SchematicFeature(private val plugin: Main) : CommandExecutor {
  fun enable() {
    try {
      val command =
          requireNotNull(plugin.getCommand("oyasai-schematics")) {
            "plugin.yml に oyasai-schematics が定義されていません"
          }
      command.setExecutor(this)
    } catch (e: Exception) {
      plugin.logger.log(
          Level.SEVERE,
          "Schematic failed to start; /oyasai-schematics remains unavailable",
          e,
      )
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.getOrNull(0)?.lowercase() != "load" || args.size < 2) return false
    val id = SchematicStore.idOf(args[1])
    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          val result = runCatching {
            val directory = File("plugins/FastAsyncWorldEdit/schematics").apply { mkdirs() }
            val connection =
                URI.create("https://api.schematic.cloud/download/$id").toURL().openConnection()
                    as HttpURLConnection
            try {
              connection.connectTimeout = 10_000
              connection.readTimeout = 30_000
              require(connection.responseCode == HttpURLConnection.HTTP_OK) {
                "HTTP ${connection.responseCode}"
              }
              require(connection.contentLengthLong <= SchematicStore.MAX_BYTES) {
                "サイズ上限は 32 MiB です"
              }
              val deadline = System.nanoTime() + 60_000_000_000L
              connection.inputStream.use { input ->
                SchematicStore.save(directory, id, input, deadline)
              }
            } finally {
              connection.disconnect()
            }
          }
          if (!plugin.isEnabled) return@Runnable
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                result.fold(
                    onSuccess = {
                      sender.sendMessage(
                          Component.text(
                                  "[${command.name}] ダウンロード成功。このメッセージをクリックしてコマンドをコピー、実行してロードできます。"
                              )
                              .clickEvent(ClickEvent.copyToClipboard("/schematic load $id.schem"))
                      )
                    },
                    onFailure = {
                      plugin.logger.warning("Schematic $id download failed: ${it.message}")
                      sender.sendMessage(
                          Component.text("[${command.name}] ダウンロードに失敗しました: ${it.message}")
                      )
                    },
                )
              },
          )
        },
    )
    return true
  }
}
