package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Events.idKey
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.Tools.isLegacySLSign
import com.github.srain3.sociallikes.Tools.isSLSign
import com.github.srain3.sociallikes.Tools.updateLegacySLSign
import com.github.srain3.sociallikes.Tools.updateSLSign
import com.github.srain3.sociallikes.datas.Data
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.session.SessionOwner
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.TextColor
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable

object SLUpdate : CommandExecutor {
  val switch = mutableMapOf<UUID, Boolean>()

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "slupdate") return false
    if (sender !is Player) return false
    if (args.isNotEmpty() && args[0] == "region") {
      updateAllInRegion(sender)
      return true
    }
    sender.sendMessage(Tools.socialLikesLOGO + "&eアップデートモードに入りました".color())
    sender.sendMessage(Tools.socialLikesLOGO + "&e移動させたlike看板を右クリックで更新します(10秒後モード終了)".color())
    switch[sender.uniqueId] = true

    object : BukkitRunnable() {
          override fun run() {
            if (switch[sender.uniqueId] == true) {
              if (sender.isOnline) {
                sender.sendMessage(Tools.socialLikesLOGO + "&eアップデートモードを自動終了しました".color())
              }
              switch[sender.uniqueId] = false
            }
          }
        }
        .runTaskLater(Tools.plugin, 20 * 10)

    return true
  }

  fun updateAllInRegion(player: Player) {
    val we = WorldEdit.getInstance()
    if (we == null) {
      player.sendMessage("WorldEdit読み込み失敗")
      return
    }
    val actor = BukkitAdapter.adapt(player)
    val localSession = we.sessionManager.get(actor as SessionOwner)
    val region = localSession.selection

    region.forEach { blockVector3 ->
      val block =
          player.world.getBlockAt(blockVector3.x(), blockVector3.y(), blockVector3.z()).state
      if (block !is Sign) return@forEach

      var id =
          block.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: Integer.MIN_VALUE
      var susp = false
      if (isSLSign(block)) {
        val data = Data.getSLData(id)
        if (data != null) updateSLSign(data, block) else susp = true
      } else if (isLegacySLSign(block)) {
        id =
            block
                .getSide(Side.FRONT)
                .line(0)
                .style()
                .color()
                ?.asHexString()
                ?.substring(1)
                ?.toIntOrNull(16) ?: Integer.MIN_VALUE
        id = -id
        val data = Data.getSLData(id)
        if (data != null) updateLegacySLSign(data, block) else susp = true
      } else return@forEach
      val result =
          if (!susp) Component.text("アップデートしました！ ").color(TextColor.color(0x55FF55))
          else Component.text("不審な看板を検知。スキップしました。 ").color(TextColor.color(0xFF5555))
      val message =
          Component.text(Tools.socialLikesLOGO)
              .append(result)
              .append(
                  Component.text("ID: ${if(id==Integer.MIN_VALUE) "不明" else id}, ")
                      .color(TextColor.color(0xAAAAAA)))
              .append(
                  Component.text(
                          "Location: ${block.world.name} / ${block.x}, ${block.y}, ${block.z}")
                      .color(TextColor.color(0xAAAAAA)))
              .clickEvent(ClickEvent.runCommand("/minecraft:tp ${block.x} ${block.y} ${block.z}"))
      player.sendMessage(message)
    }
  }
}
