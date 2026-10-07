package io.oyasai.vertex.services.schematics

import io.oyasai.vertex.Vertex
import io.oyasai.vertex.services.Service
import java.io.File
import java.net.HttpURLConnection
import java.net.URI
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandSender

object OyasaiSchematics : Command("oyasai-schematics") {
  override fun execute(
      sender: CommandSender,
      commandLabel: String,
      args: Array<out String>,
  ): Boolean {
    val option =
        args.getOrElse(0) {
          return true
        }
    when (option.lowercase()) {
      "load" -> {
        // 青匠(blue)以上は LuckPerms の継承で group.blue を持つ。
        if (!sender.isOp && !sender.hasPermission("group.blue")) {
          return false
        }
        val input =
            args.getOrElse(1) {
              return false
            }
        val id = input.substringAfterLast("/")
        val plugin = Vertex.plugin
        Bukkit.getScheduler()
            .runTaskAsynchronously(
                plugin,
                Runnable {
                  val result = runCatching {
                    val directory = File("plugins/FastAsyncWorldEdit/schematics").apply { mkdirs() }
                    val temporary = Files.createTempFile(directory.toPath(), "download-", ".part")
                    try {
                      val connection =
                          URI.create("https://api.schematic.cloud/download/$id")
                              .toURL()
                              .openConnection() as HttpURLConnection
                      connection.connectTimeout = 10_000
                      connection.readTimeout = 30_000
                      try {
                        require(connection.responseCode == HttpURLConnection.HTTP_OK) {
                          "HTTP ${connection.responseCode}"
                        }
                        val maxBytes = 32L * 1024 * 1024
                        require(connection.contentLengthLong <= maxBytes) { "サイズ上限は 32 MiB です" }
                        val deadline = System.nanoTime() + 60_000_000_000L
                        connection.inputStream.use { input ->
                          Files.newOutputStream(temporary).use { output ->
                            val buffer = ByteArray(8192)
                            var total = 0L
                            while (true) {
                              check(System.nanoTime() < deadline) { "ダウンロードがタイムアウトしました" }
                              val count = input.read(buffer)
                              if (count < 0) break
                              total += count
                              require(total <= maxBytes) { "サイズ上限は 32 MiB です" }
                              output.write(buffer, 0, count)
                            }
                          }
                        }
                        Files.move(
                            temporary,
                            File(directory, "$id.schem").toPath(),
                            StandardCopyOption.REPLACE_EXISTING,
                            StandardCopyOption.ATOMIC_MOVE,
                        )
                      } finally {
                        connection.disconnect()
                      }
                    } finally {
                      Files.deleteIfExists(temporary)
                    }
                  }
                  if (!plugin.isEnabled) return@Runnable
                  Bukkit.getScheduler()
                      .runTask(
                          plugin,
                          Runnable {
                            result.fold(
                                onSuccess = {
                                  sender.sendMessage(
                                      Component.text(
                                              "[$name] ダウンロード成功。このメッセージをクリックしてコマンドをコピー、実行してロードできます。"
                                          )
                                          .clickEvent(
                                              ClickEvent.copyToClipboard(
                                                  "/schematic load $id.schem"
                                              )
                                          )
                                  )
                                },
                                onFailure = {
                                  plugin.logger.warning(
                                      "Schematic $id download failed: ${it.message}"
                                  )
                                  sender.sendMessage(
                                      Component.text("[$name] ダウンロードに失敗しました: ${it.message}")
                                  )
                                },
                            )
                          },
                      )
                },
            )
      }
    }
    return true
  }
}

object SchematicsService : Service() {
  override val commands = listOf<Command>(OyasaiSchematics)
}
