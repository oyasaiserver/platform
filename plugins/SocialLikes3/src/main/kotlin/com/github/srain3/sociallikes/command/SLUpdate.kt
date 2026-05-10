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
import com.sk89q.worldedit.util.formatting.text.TextComponent
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.TextColor
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import java.util.*
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
    if (args.size > 1 && args[1] == "region"){
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

  fun updateAllInRegion(player: Player){
    //FAWEから選択範囲のブロックリストを取得
    val we = WorldEdit.getInstance()
    if (we == null) {
      player.sendMessage("WorldEdit読み込み失敗")
      return
    }

    val actor = BukkitAdapter.adapt(player)
    val localSession = we.sessionManager.get(actor as SessionOwner)

    val clipboardHolder = localSession.existingClipboard ?: run {
      actor.printError(TextComponent.of("Your clipboard is empty."))
      return
    }

    val clipboard = clipboardHolder.getClipboards().firstOrNull() ?: run {
      actor.printError(TextComponent.of("Your clipboard is empty."))
      return
    }
    val region = clipboard.region
    player.sendMessage("${region.width}x${region.height}x${region.length}")
    region.forEach { blockVector3 ->
      val block = player.world.getBlockAt(blockVector3.x(), blockVector3.y(), blockVector3.z())
      if (block !is Sign) return
      var id = block.persistentDataContainer.get(idKey, PersistentDataType.INTEGER) ?: return
      if (isSLSign(block.state)){

        val data = Data.getSLData(id) ?: return
        updateSLSign(data, block)

      } else if (isLegacySLSign(block.state)){

        id =
          block
            .getSide(Side.FRONT)
            .line(0)
            .style()
            .color()
            ?.asHexString()
            ?.substring(1)
            ?.toIntOrNull(16) ?: return
        id = -id
        val data = Data.getSLData(id) ?: return
        updateLegacySLSign(data, block.state)

      } else return

      val message = Component.text(Tools.socialLikesLOGO)
      .append(Component.text("アップデートしました！ ").color(TextColor.color(0x55FF55)))
      .append(Component.text("Location: ${block.world} / ${block.x}, ${block.y}, ${block.z}").color(TextColor.color(0xAAAAAA)))
      .append(Component.text("ID: ${id}").color(TextColor.color(0xAAAAAA)))
      .hoverEvent(Component.text("クリックで ${id} にテレポート"))
      .clickEvent(
        ClickEvent.runCommand("/minecraft:execute in ${block.world} run minecraft:tp ${block.x} ${block.y} ${block.z}"))
      player.sendMessage(message)
    }
  }
}
