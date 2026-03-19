package me.ankokunsan.entityPose.commands

import kotlin.collections.filter
import me.ankokunsan.entityPose.EntityCopyClick.Companion.activeselection
import me.ankokunsan.entityPose.EntityCopyClick.Companion.selection
import me.ankokunsan.entityPose.stopHighlight
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class EntityCut : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    val player =
        sender as? Player
            ?: run {
              return true
            }
    if (!player.hasPermission("entitypose_arrange")) {
      player.sendMessage("§cあなたにはこのコマンドを使う権限がありません！")
      return true
    }
    val uuid = player.uniqueId
    val targets = activeselection[uuid]?.filter { it.isValid }

    if (targets == null) {
      player.sendMessage("§6[EntityPose] §c範囲選択されているエンティティがいません")
      return true
    }
    targets.forEach { entity -> if (entity.isValid) entity.remove() }
    activeselection.remove(uuid)
    selection.remove(uuid)
    stopHighlight(uuid)
    player.sendMessage("§6[EntityPose] §f範囲内の${targets.size}体を削除しました")
    return true
  }
}
