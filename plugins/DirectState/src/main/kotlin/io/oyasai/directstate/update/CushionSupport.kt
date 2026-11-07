package io.oyasai.directstate.update

import io.oyasai.directstate.integration.CushionItemData
import io.papermc.paper.event.entity.EntityBreakEvent
import java.util.logging.Level
import org.bukkit.GameMode
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.block.Block
import org.bukkit.entity.Cushion
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.entity.EntityPlaceEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.util.BoundingBox

/** dsuで扱ったクッションの消滅を止める */
internal class CushionSupport(
    private val plugin: JavaPlugin,
    private val enabled: (Player) -> Boolean,
    private val applyItem: (Player, Cushion, ItemStack) -> Unit = CushionItemData::apply,
) : Listener {
  private val key = NamespacedKey.fromString("directstate:keep_cushion")!!

  private fun keep(cushion: Cushion) {
    cushion.persistentDataContainer.set(key, PersistentDataType.BYTE, 1.toByte())
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun placed(event: EntityPlaceEvent) {
    val cushion = event.entity as? Cushion ?: return
    if (event.player?.let(enabled) == true) keep(cushion)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun breakBlock(event: BlockBreakEvent) {
    if (!enabled(event.player)) return
    val block = event.block
    val support = block.boundingBox
    if (support.volume == 0.0) return
    for (entity in block.world.getNearbyEntities(support.clone().expand(0.0, 1.0, 0.0))) {
      if (entity !is Cushion) continue
      val box = entity.boundingBox
      // バニラの支持判定と同じ、底面直下1/64ブロックの範囲を使う。
      val anchor =
          BoundingBox(
              box.minX,
              box.minY - 1.0 / 64,
              box.minZ,
              Math.nextDown(box.maxX),
              box.minY,
              Math.nextDown(box.maxZ),
          )
      if (support.overlaps(anchor)) keep(entity)
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun breaking(event: EntityBreakEvent) {
    val cushion = event.entity as? Cushion ?: return
    if (
        event.cause != EntityBreakEvent.RemoveCause.PHYSICS &&
            event.cause != EntityBreakEvent.RemoveCause.OBSTRUCTION
    )
        return
    val data = cushion.persistentDataContainer
    if (
        data.has(key, PersistentDataType.BYTE) &&
            data.get(key, PersistentDataType.BYTE) == 1.toByte()
    )
        event.isCancelled = true
  }

  /** ForcePlacementが通常操作・権限・配置先の境界を確認した後に呼ぶ。 */
  fun place(event: PlayerInteractEvent, target: Block) {
    val point = event.interactionPoint ?: return
    val player = event.player
    val hand = event.hand ?: return
    val original = player.inventory.getItem(hand).clone()
    if (!original.isSimilar(event.item) || original.amount < 1) return
    val location =
        target.location.clone().add(0.5, 0.0, 0.5).apply {
          y = Math.round(point.y * 8).toDouble() / 8
          setDirection(player.facing.direction)
        }
    if (location.y < target.world.minHeight || location.y >= target.world.maxHeight) return
    var created: Cushion? = null
    var accepted = false
    try {
      val cushion = target.world.createEntity(location, Cushion::class.java).also { created = it }
      cushion.setRotation(location.yaw, 0f)
      applyItem(player, cushion, original)
      val box = cushion.boundingBox
      if (
          box.maxY > target.world.maxHeight ||
              target.world.getNearbyEntities(box).any {
                it is Cushion && it.boundingBox.overlaps(box)
              }
      )
          return
      val place = EntityPlaceEvent(cushion, player, event.clickedBlock!!, event.blockFace, hand)
      plugin.server.pluginManager.callEvent(place)
      if (place.isCancelled || cushion.isDead) return
      val checked = player.inventory.getItem(hand)
      if (!checked.isSimilar(original) || checked.amount != original.amount) return
      keep(cushion)
      target.world.addEntity(cushion)
      if (!cushion.isValid) return
      val current = player.inventory.getItem(hand)
      if (!current.isSimilar(original) || current.amount != original.amount) return
      if (player.gameMode != GameMode.CREATIVE) {
        player.inventory.setItem(
            hand,
            if (current.amount == 1) null else current.clone().apply { amount-- },
        )
      }
      accepted = true
    } catch (error: Exception) {
      plugin.logger.log(
          Level.WARNING,
          "Cushion placement reverted because item data or placement could not be applied.",
          error,
      )
      return
    } finally {
      // 受理されなかった生成や、リスナーによるアイテム変更では実体も残さない。
      if (!accepted) created?.remove()
    }
    player.swingHand(hand)
    target.world.playSound(location, Sound.ENTITY_CUSHION_PLACE, 0.75f, 0.8f)
  }
}
