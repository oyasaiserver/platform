package io.oyasai.vertex.services.schematics

import io.oyasai.vertex.services.Service
import java.io.File
import java.net.URI
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
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
        if (!sender.isOp) {
          return false
        }
        val input =
            args.getOrElse(1) {
              return false
            }
        val id = input.substringAfterLast("/")
        val directory = File("plugins/FastAsyncWorldEdit/schematics").apply { mkdirs() }
        URI.create("https://api.schematic.cloud/download/$id").toURL().readBytes().let {
          File(directory, "$id.schem").writeBytes(it)
        }
        sender.sendMessage(
            Component.text("[$name] ダウンロード成功。このメッセージをクリックしてコマンドをコピー、実行してロードできます。")
                .clickEvent(ClickEvent.copyToClipboard("/schematic load $id.schem")))
      }
    }
    return true
  }
}

object SchematicsService : Service() {
  override val commands = listOf<Command>(OyasaiSchematics)
}
