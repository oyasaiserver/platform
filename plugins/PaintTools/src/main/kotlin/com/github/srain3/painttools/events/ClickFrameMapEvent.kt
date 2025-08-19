package com.github.srain3.painttools.events

import com.github.srain3.painttools.tools.ToolBox
import com.github.srain3.painttools.tools.configs.MapIdList
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Rotation
import org.bukkit.block.BlockFace
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.meta.MapMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Vector

/** アイテムフレームをクリックした時のイベント */
object ClickFrameMapEvent : Listener {
  @EventHandler
  fun getClickRotateEvent(event: PlayerInteractEntityEvent) {
    if (event.rightClicked !is ItemFrame) return
    val frame = event.rightClicked as ItemFrame
    if (frame.item.type != Material.FILLED_MAP) return
    val mapMeta = frame.item.itemMeta as MapMeta
    val id =
      mapMeta.persistentDataContainer.get(
        NamespacedKey(ToolBox.pl, "ID"),
        PersistentDataType.INTEGER,
      ) ?: return
    if (!MapIdList.checkID(id)) return
    event.isCancelled = true
    object : BukkitRunnable() {
        override fun run() {
          frame.rotation = Rotation.NONE
        }
      }
      .runTaskLater(ToolBox.pl, 0)

    val blockVec = faceVec(frame.facing)
    val block = frame.location.add(blockVec).block

    val e =
      PlayerInteractEvent(
        event.player,
        Action.RIGHT_CLICK_BLOCK,
        event.player.inventory.itemInMainHand,
        block,
        frame.facing.oppositeFace,
      )
    Bukkit.getServer().pluginManager.callEvent(e)
  }

  private fun faceVec(face: BlockFace): Vector {
    return when (face) {
      BlockFace.NORTH -> Vector(0.0, 0.0, -1.0)
      BlockFace.SOUTH -> Vector(0.0, 0.0, 1.0)
      BlockFace.WEST -> Vector(-1.0, 0.0, 0.0)
      BlockFace.EAST -> Vector(1.0, 0.0, 0.0)
      BlockFace.UP -> Vector(0.0, 1.0, 0.0)
      BlockFace.DOWN -> Vector(0.0, -1.0, 0.0)
      else -> Vector(0.0, 0.0, 0.0)
    }
  }

  @EventHandler
  fun mapDamageEvent(event: EntityDamageByEntityEvent) {
    if (event.entity !is ItemFrame) return
    if (event.damager !is Player) return
    val frame = event.entity as ItemFrame
    if (frame.item.type != Material.FILLED_MAP) return
    val mapMeta = frame.item.itemMeta as MapMeta
    val id =
      mapMeta.persistentDataContainer.get(
        NamespacedKey(ToolBox.pl, "ID"),
        PersistentDataType.INTEGER,
      ) ?: return
    if (!MapIdList.checkID(id)) return

    val handItem = (event.damager as Player).inventory.itemInMainHand
    if (!ToolBox.checkDye(handItem.type)) {
      if (handItem.type != Material.PAPER) {
        if (handItem.type != Material.FEATHER) {
          if (handItem.type != Material.INK_SAC) {
            if (handItem.type != Material.SUGAR) {
              return
            }
          }
        }
      }
    }
    event.isCancelled = true

    val blockVec = faceVec(frame.facing)
    val block = frame.location.add(blockVec).block
    val player = event.damager as Player

    val e =
      PlayerInteractEvent(
        player,
        Action.LEFT_CLICK_BLOCK,
        player.inventory.itemInMainHand,
        block,
        frame.facing.oppositeFace,
      )
    Bukkit.getServer().pluginManager.callEvent(e)
  }
}
