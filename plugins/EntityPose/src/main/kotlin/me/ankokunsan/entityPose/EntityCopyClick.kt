package me.ankokunsan.entityPose

import java.util.UUID
import org.bukkit.Particle
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.BoundingBox
import org.bukkit.util.Vector

class EntityCopyClick : Listener {
  companion object {
    val selection = mutableMapOf<UUID, Pair<Vector?, Vector?>>()
    val clipboard = mutableMapOf<UUID, List<EntityCopyData>>()
    val highlightTasks = mutableMapOf<UUID, BukkitTask>()
  }

  private fun isCopyWand(item: ItemStack?): Boolean {
    if (item == null || item.type.isAir) return false
    if (!item.hasItemMeta()) return false
    val meta = item.itemMeta ?: return false
    return meta.persistentDataContainer.has(EntityPose.COPY_STICK_KEY, PersistentDataType.BYTE)
  }

  @EventHandler
  fun onLeftClick(event: EntityDamageByEntityEvent) {
    val player = event.damager as? Player ?: return
    val hand = player.inventory.itemInMainHand
    if (!isCopyWand(hand)) return
    if (!player.hasPermission("entitypose_arrange")) return //
    val entity = event.entity
    if (entity is Player) {
      player.sendMessage("§6[EntityPose] §cプレイヤーをコピーしようとしないでね")
      return
    }
    if (entity is LivingEntity && entity.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのモブはAIが有効です")
      return
    }
    event.isCancelled = true
    // pos1
    val uuid = player.uniqueId
    val current = selection[uuid] ?: (null to null)
    val entitybox1 = entity.boundingBox
    val newpos1 = entitybox1.min
    selection[uuid] = newpos1 to current.second
    player.sendMessage("§6[EntityPose] §bpos1を設定しました")
    player.spawnParticle(Particle.NOTE, entity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5, 0.0)
  }

  @EventHandler
  fun onRightClick(event: PlayerInteractAtEntityEvent) {
    if (event.hand == EquipmentSlot.OFF_HAND) return

    val player = event.player
    val hand = player.inventory.itemInMainHand
    if (!isCopyWand(hand)) return
    if (!player.hasPermission("entitypose_arrange")) return //
    val entity = event.rightClicked
    if (entity is LivingEntity && entity.hasAI()) {
      player.sendMessage("§6[EntityPose] §cこのモブはAIが有効です")
      return
    }
    event.isCancelled = true
    // pos2
    val uuid = player.uniqueId
    val current = selection[uuid] ?: (null to null)
    val entitybox2 = entity.boundingBox
    val newPos2 = entitybox2.max
    selection[uuid] = current.first to newPos2
    player.spawnParticle(Particle.NOTE, entity.location.add(0.0, 1.0, 0.0), 10, 0.5, 0.5, 0.5, 0.0)

    val pos1 = current.first
    if (pos1 != null) {
      player.sendMessage("§6[EntityPose] §bpos2を設定しました")
      player.sendMessage("§6[EntityPose] §b/ecopyでコピーできます")
      val box = BoundingBox.of(pos1, newPos2).expand(0.5)
      val world = player.world
      highlightTasks[uuid]?.cancel()
      val targets =
          world.getNearbyEntities(box).filter { entity ->
            entity != player && (entity as? LivingEntity)?.hasAI() == false
          }
      player.sendMessage("§6[EntityPose] §f範囲内に ${targets.size} 体見つかりました")
      val task =
          object : BukkitRunnable() {
                override fun run() {
                  if (!player.isOnline) {
                    this.cancel()
                    highlightTasks.remove(uuid)
                    return
                  }
                  targets.forEach { entity ->
                    if (entity.isValid) {
                      val headlocation = entity.location.add(0.0, entity.height + 0.2, 0.0)
                      player.spawnParticle(
                          Particle.HAPPY_VILLAGER, headlocation, 10, 0.1, 0.1, 0.1, 0.05)
                    }
                  }
                }
              }
              .runTaskTimer(EntityPose.INSTANCE, 0L, 10L) // 10L = 0.5秒間隔
      highlightTasks[uuid] = task
    } else {
      player.sendMessage("§6[EntityPose] §bpos2を設定しました")
    }
  }
}
