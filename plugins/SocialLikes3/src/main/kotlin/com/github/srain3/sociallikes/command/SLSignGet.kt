package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Events
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BlockStateMeta
import org.bukkit.persistence.PersistentDataType

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
      val requestedHanging = args.getOrNull(1)?.let { it.lowercase() == "hanging" }
      genSignItem(slData, sender, requestedHanging)
      sender.sendMessage(
          Tools.socialLikesLOGO + "&r Like看板のアイテムを渡しました! 設置して/slupdateを行ってください".color()
      )
    } else {
      sender.sendMessage(Tools.socialLikesLOGO + "&e 他人のLike看板は取得できません".color())
    }
    return true
  }

  private fun genSignItem(slData: SLData, player: Player, requestedHanging: Boolean?) {
    val itemMaterial = resolveSignItemMaterial(slData, requestedHanging)
    val item = ItemStack(itemMaterial)
    val meta = item.itemMeta as? BlockStateMeta ?: return
    val signState = meta.blockState as? Sign ?: return

    writeSLSignLines(signState, slData)
    signState.isWaxed = true
    signState.persistentDataContainer.set(
        Events.slSignItemIdKey,
        PersistentDataType.INTEGER,
        slData.id,
    )
    meta.blockState = signState
    meta.persistentDataContainer.set(Events.slSignItemIdKey, PersistentDataType.INTEGER, slData.id)
    meta.setDisplayName("&a${slData.title}".color())
    meta.lore = listOf("&7設置後に&e/slupdate".color())
    item.itemMeta = meta

    player.inventory.addItem(item)
  }

  private fun resolveSignItemMaterial(slData: SLData, requestedHanging: Boolean?): Material {
    val sourceMaterial = sourceSignMaterial(slData)
    val woodName = sourceMaterial?.woodName() ?: "OAK"
    val hanging = requestedHanging ?: sourceMaterial?.isHangingSignMaterial() ?: false
    return Material.matchMaterial("$woodName${if (hanging) "_HANGING_SIGN" else "_SIGN"}")
        ?: if (hanging) Material.OAK_HANGING_SIGN else Material.OAK_SIGN
  }

  private fun sourceSignMaterial(slData: SLData): Material? {
    slData.signMaterial
        ?.let { Material.matchMaterial(it) }
        ?.let {
          return it
        }
    slData.loc.world ?: return null
    val sourceState = slData.loc.block.state
    return if (sourceState is Sign) sourceState.type else null
  }

  private fun Material.woodName(): String =
      when {
        name.endsWith("_WALL_HANGING_SIGN") -> name.removeSuffix("_WALL_HANGING_SIGN")
        name.endsWith("_HANGING_SIGN") -> name.removeSuffix("_HANGING_SIGN")
        name.endsWith("_WALL_SIGN") -> name.removeSuffix("_WALL_SIGN")
        name.endsWith("_SIGN") -> name.removeSuffix("_SIGN")
        else -> "OAK"
      }

  private fun Material.isHangingSignMaterial(): Boolean = name.contains("HANGING_SIGN")

  private fun writeSLSignLines(sign: Sign, slData: SLData) {
    sign.getSide(Side.FRONT).apply {
      setLine(0, Tools.socialLikesLOGO)
      setLine(1, "&a".color() + slData.title)
      setLine(2, "&f${Bukkit.getOfflinePlayer(slData.owner).name}".color())
      setLine(3, "&7Likes&8: &6${slData.likes.count()}${if (slData.check){" &e✓"}else{""}}".color())
    }
  }
}
