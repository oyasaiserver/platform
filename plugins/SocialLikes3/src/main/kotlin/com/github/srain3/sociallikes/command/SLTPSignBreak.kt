package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.gui.SLSignSetting
import org.bukkit.Material
import org.bukkit.block.Sign
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType

object SLTPSignBreak : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slsignbreak") return false
    if (sender !is Player) return false

    val targetBlock =
        sender.getTargetBlockExact(3)
            ?: run {
              sender.sendMessage("§c視線の先にブロックがありません")
              return true
            }

    val state = targetBlock.state
    if (state !is Sign) {
      sender.sendMessage("§c看板を見て実行してください")
      return true
    }

    val container = state.persistentDataContainer
    if (!container.has(SLSignSetting.sltpSignKey, PersistentDataType.INTEGER)) {
      sender.sendMessage("§cこの看板はSLTP看板ではありません")
      return false
    }

    val id = container.get(SLSignSetting.sltpSignKey, PersistentDataType.INTEGER) ?: 0
    val data = Data.getSLData(id)
    if (data != null) {
      if (container.get(SLSignSetting.sltpSignUUIDKey, PersistentDataType.STRING) !=
          sender.uniqueId.toString() && !sender.isOp && data.owner != sender.uniqueId) {
        sender.sendMessage("§c他人の看板は回収できません")
        return true
      }
      val item = SLSignSetting.createCommandSignItem(targetBlock.type, data, sender.uniqueId)
      targetBlock.type = Material.AIR
      sender.inventory.addItem(item)
      sender.sendMessage("§a看板の再入手に成功しました")
    } else {
      sender.sendMessage("§cIDが存在しないため、看板の再入手に失敗しました")
    }
    return true
  }
}
