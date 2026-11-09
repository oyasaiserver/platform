package io.oyasai.directstate.update

import io.oyasai.directstate.Permissions
import org.bukkit.GameMode
import org.bukkit.NamespacedKey
import org.bukkit.block.Block
import org.bukkit.entity.Entity
import org.bukkit.entity.Hanging
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Painting
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.hanging.HangingBreakEvent
import org.bukkit.event.hanging.HangingPlaceEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.BoundingBox

/** dsuで扱った額縁・絵画を、支持消失と閉塞による破壊から保護する。 */
internal class HangingSupport(
    private val enabled: (Player) -> Boolean,
    private val keeping: (Player) -> Boolean,
    private val isTool: (ItemStack?) -> Boolean,
) : Listener {
  fun touch(player: Player, entity: Entity) {
    if (!supports(entity)) return
    if (keeping(player)) setLocked(entity, true)
    else if (!enabled(player) && Permissions.has(player, Permissions.UPDATE))
        setLocked(entity, false)
  }

  fun beforeEdit(player: Player, blocks: List<Block>) {
    if (keeping(player))
        blocks.flatMap(::affected).distinctBy { it.uniqueId }.forEach { setLocked(it, true) }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun placed(event: HangingPlaceEvent) {
    if (supports(event.entity) && event.player?.let(keeping) == true) setLocked(event.entity, true)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun interact(event: PlayerInteractAtEntityEvent) {
    val player = event.player
    if (event.hand != EquipmentSlot.HAND || isTool(player.inventory.itemInMainHand)) return
    if (player.gameMode != GameMode.SURVIVAL && player.gameMode != GameMode.CREATIVE) return
    if (
        player.isSneaking &&
            (!player.inventory.itemInMainHand.type.isAir ||
                !player.inventory.itemInOffHand.type.isAir)
    )
        return
    touch(player, event.rightClicked)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun breaking(event: HangingBreakEvent) {
    if (!supports(event.entity) || !isLocked(event.entity)) return
    if (
        event.cause == HangingBreakEvent.RemoveCause.PHYSICS ||
            event.cause == HangingBreakEvent.RemoveCause.OBSTRUCTION
    )
        event.isCancelled = true
  }

  companion object {
    private val key = NamespacedKey.fromString("directstate:hanging-locked")!!

    fun supports(entity: Entity) = entity is ItemFrame || entity is Painting

    fun isLocked(entity: Entity) =
        entity.persistentDataContainer.get(key, PersistentDataType.BYTE) == 1.toByte()

    fun setLocked(entity: Entity, locked: Boolean) {
      if (locked) entity.persistentDataContainer.set(key, PersistentDataType.BYTE, 1.toByte())
      else entity.persistentDataContainer.remove(key)
    }

    /** 大きい絵画も、中心ではなく占有範囲と支持面全体で照合する。 */
    fun affected(block: Block): List<Hanging> {
      val changed =
          BoundingBox(
              block.x.toDouble(),
              block.y.toDouble(),
              block.z.toDouble(),
              block.x + 1.0,
              block.y + 1.0,
              block.z + 1.0,
          )
      return block.world
          .getNearbyEntities(changed.clone().expand(1.0))
          .filterIsInstance<Hanging>()
          .filter {
            if (!supports(it)) return@filter false
            val box = it.boundingBox
            val support = box.clone().shift(it.attachedFace.direction.multiply(0.5)).expand(-1.0E-7)
            changed.overlaps(box) || changed.overlaps(support)
          }
    }
  }
}
