package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import net.md_5.bungee.api.chat.ClickEvent
import net.md_5.bungee.api.chat.HoverEvent
import net.md_5.bungee.api.chat.TextComponent
import net.md_5.bungee.api.chat.hover.content.Text
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLNear : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slnear") return false
    if (sender !is Player) return false

    if (!Data.loading) {
      // ファイルのロードが終わっていない場合の処理
      sender.sendMessage(Tools.socialLikesLOGO + " &e現在ロード作業中です、しばらくお待ち下さい。".color())
      return true
    }
    val loc = sender.location.clone()
    val list = Data.getSLNearToSLDataMap(loc)

    val size =
        if (args.isEmpty()) {
          5
        } else {
          var num = (args[0].toIntOrNull() ?: 5)
          if (num <= 0) {
            num = 5
          }
          num
        }

    val maxIndex = list.size - 1
    if (maxIndex == -1) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e周囲にLike看板はありませんでした".color())
      return true
    }
    sender.sendMessage(Tools.socialLikesLOGO + "&r ～近くの建築～".color())
    for (i in 0 until size) {
      if (i > maxIndex) break
      val data = list[i].second
      val distance = ((list[i].first * 100).toInt()) / 100.0
      sender
          .spigot()
          .sendMessage(
              TextComponent(
                      Tools.socialLikesLOGO +
                          "&r${distance}m先: &a${data.title}&7(ID:${data.id})".color())
                  .apply {
                    this.clickEvent =
                        ClickEvent(ClickEvent.Action.RUN_COMMAND, "/sociallikes3:sltp ${data.id}")
                    this.hoverEvent =
                        HoverEvent(
                            HoverEvent.Action.SHOW_TEXT, Text("&nクリックでその建築へテレポート&rします".color()))
                  })
    }

    return true
  }
}
