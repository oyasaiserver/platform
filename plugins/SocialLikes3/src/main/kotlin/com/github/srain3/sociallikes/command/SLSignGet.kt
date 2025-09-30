package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object SLSignGet : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name != "slsignget") return false
    if (args.isNullOrEmpty()) return false
    if (sender !is Player) return false
    val id = args[0].toIntOrNull() ?: return false

    val slData =
      Data.getSLData(id)
        ?: run {
          sender.sendMessage(Tools.socialLikesLOGO + "&e ID:${id}は存在しません".color())
          return true
        }
    if (slData.owner == sender.uniqueId || sender.isOp) {
      if (args.size == 2) {
        if (args[1].lowercase() == "hanging") {
          genSignItem(slData, sender, true)
        } else {
          genSignItem(slData, sender, false)
        }
      } else {
        genSignItem(slData, sender, false)
      }
      sender.sendMessage(
        Tools.socialLikesLOGO + "&r Like看板のアイテムを渡しました! 設置して/slupdateを行ってください".color()
      )
    } else {
      sender.sendMessage(Tools.socialLikesLOGO + "&e 他人のLike看板は取得できません".color())
    }
    return true
  }

  private fun genSignItem(slData: SLData, player: Player, hanging: Boolean) {
    if (slData.check) {
      Bukkit.dispatchCommand(
        Bukkit.getConsoleSender(),
        "minecraft:give ${player.name} ${
          if (hanging) {
            "oak_hanging_sign"
          } else {
            "oak_sign"
          }
        }[item_name='\"${escapeForNBT(slData.title)}\"',lore=['[{\"color\":\"gray\",\"text\":\"設置後に\"},{\"color\":\"yellow\",\"text\":\"/slupdate\"}]'],minecraft:block_entity_data={PublicBukkitValues:{\"sociallikes3:sociallikes_id\":${slData.id}},id:\"minecraft:sign\",is_waxed:1b,front_text:{messages:[[{\"text\":\"(\",\"color\":\"dark_gray\"},{\"text\":\"Social\",\"color\":\"dark_purple\"},{\"text\":\"Likes\",\"color\":\"gray\"},{\"text\":\")\",\"color\":\"dark_gray\"}],{\"text\":\"${
          escapeForNBT(
            slData.title
          )
        }\",\"color\":\"green\"},{\"text\":\"${
          Bukkit.getOfflinePlayer(
            slData.owner
          ).name
        }\",\"color\":\"white\"},[{\"text\":\"Likes\",\"color\":\"gray\"},{\"text\":\":\",\"color\":\"dark_gray\"},{\"text\":\"${slData.likes.count()}\",\"color\":\"gold\"},{\"text\":\" ✓\",\"color\":\"yellow\"}]]}}] 1",
      )
    } else {
      Bukkit.dispatchCommand(
        Bukkit.getConsoleSender(),
        "minecraft:give ${player.name} ${
          if (hanging) {
            "oak_hanging_sign"
          } else {
            "oak_sign"
          }
        }[item_name='\"${escapeForNBT(slData.title)}\"',lore=['[{\"color\":\"gray\",\"text\":\"設置後に\"},{\"color\":\"yellow\",\"text\":\"/slupdate\"}]'],minecraft:block_entity_data={PublicBukkitValues:{\"sociallikes3:sociallikes_id\":${slData.id}},id:\"minecraft:sign\",is_waxed:1b,front_text:{messages:[[{\"text\":\"(\",\"color\":\"dark_gray\"},{\"text\":\"Social\",\"color\":\"dark_purple\"},{\"text\":\"Likes\",\"color\":\"gray\"},{\"text\":\")\",\"color\":\"dark_gray\"}],{\"text\":\"${
          escapeForNBT(
            slData.title
          )
        }\",\"color\":\"green\"},{\"text\":\"${
          Bukkit.getOfflinePlayer(
            slData.owner
          ).name
        }\",\"color\":\"white\"},[{\"text\":\"Likes\",\"color\":\"gray\"},{\"text\":\":\",\"color\":\"dark_gray\"},{\"text\":\"${slData.likes.count()}\",\"color\":\"gold\"}]]}}] 1",
      )
    }
  }

  private fun escapeForNBT(input: String): String =
    input.replace("\\", "\\\\").replace("\"", "\\\"").replace("'", "\\'")
}
