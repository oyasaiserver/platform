package io.oyasai.oyasaiAdminTools.vanish

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.staff.*
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.entity.Projectile
import org.bukkit.event.*
import org.bukkit.event.entity.*
import org.bukkit.event.player.*
import org.bukkit.metadata.FixedMetadataValue
import org.bukkit.potion.*

class VanishFeature(plugin: OyasaiAdminTools) : ToggleFeature(plugin, "vanish") {
  private lateinit var store: ToggleStore
  private val states = mutableMapOf<UUID, Boolean>()
  private val sleepBefore = mutableMapOf<UUID, Boolean>()
  private val effectBefore = mutableMapOf<UUID, PotionEffect?>()

  override fun start() {
    store = ToggleStore(plugin.db, "vanish")
    Bukkit.getOnlinePlayers().forEach { states[it.uniqueId] = store.load(it.uniqueId) }
    refresh()
  }

  fun isVanished(p: Player) = states[p.uniqueId] == true

  override fun toggle(sender: CommandSender, target: Player, enabled: Boolean?) {
    val value = enabled ?: !isVanished(target)
    store.save(target.uniqueId, value)
    states[target.uniqueId] = value
    refresh()
    target.sendMessage("§6vanish: ${if (value) "ON" else "OFF"}")
    if (sender != target)
        sender.sendMessage("§6${target.name} vanish: ${if (value) "ON" else "OFF"}")
  }

  private fun refresh() {
    Bukkit.getOnlinePlayers().forEach { target ->
      val hidden = isVanished(target)
      target.setMetadata("vanished", FixedMetadataValue(plugin, hidden))
      Bukkit.getOnlinePlayers()
          .filter { it != target }
          .forEach { viewer ->
            if (hidden && !viewer.hasPermission("essentials.vanish.see"))
                viewer.hidePlayer(plugin, target)
            else viewer.showPlayer(plugin, target)
          }
      if (hidden) {
        if (plugin.config.getBoolean("staff.sleep-ignores-vanished", true)) {
          sleepBefore.putIfAbsent(target.uniqueId, target.isSleepingIgnored)
          target.isSleepingIgnored = true
        }
        if (
            target.hasPermission("essentials.vanish.effect") &&
                !effectBefore.containsKey(target.uniqueId)
        ) {
          effectBefore[target.uniqueId] = target.getPotionEffect(PotionEffectType.INVISIBILITY)
          target.addPotionEffect(
              PotionEffect(PotionEffectType.INVISIBILITY, PotionEffect.INFINITE_DURATION, 1, false)
          )
        }
      } else restore(target)
    }
  }

  private fun restore(p: Player) {
    sleepBefore.remove(p.uniqueId)?.let {
      if (!p.hasPermission("essentials.sleepingignored")) p.isSleepingIgnored = it
    }
    if (effectBefore.containsKey(p.uniqueId)) {
      val old = effectBefore.remove(p.uniqueId)
      val current = p.getPotionEffect(PotionEffectType.INVISIBILITY)
      if (current != null && current.amplifier == 1 && current.isInfinite) {
        p.removePotionEffect(PotionEffectType.INVISIBILITY)
        old?.let { p.addPotionEffect(it) }
      }
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun join(e: PlayerJoinEvent) {
    try {
      states[e.player.uniqueId] = store.load(e.player.uniqueId)
      refresh()
    } catch (failure: Exception) {
      plugin.logger.log(java.util.logging.Level.SEVERE, "Vanish restore failed", failure)
    }
    plugin.server.scheduler.runTask(plugin, Runnable { refresh() })
  }

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    restore(e.player)
    states.remove(e.player.uniqueId)
    e.player.removeMetadata("vanished", plugin)
  }

  @EventHandler
  fun respawn(e: PlayerRespawnEvent) {
    effectBefore.remove(e.player.uniqueId)
    plugin.server.scheduler.runTask(plugin, Runnable { refresh() })
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun pickup(e: EntityPickupItemEvent) {
    val p = e.entity as? Player ?: return
    if (isVanished(p) && !p.hasPermission("essentials.vanish.pickup")) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun damage(e: EntityDamageByEntityEvent) {
    val p = (e.damager as? Player) ?: ((e.damager as? Projectile)?.shooter as? Player) ?: return
    if (e.entity is Player && isVanished(p) && !p.hasPermission("essentials.vanish.pvp"))
        e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun target(e: EntityTargetEvent) {
    val p = e.target as? Player ?: return
    if (isVanished(p)) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun gameEvent(e: org.bukkit.event.block.BlockReceiveGameEvent) {
    val p = e.entity as? Player ?: return
    if (isVanished(p)) e.isCancelled = true
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun combust(e: EntityCombustByEntityEvent) {
    val p = (e.combuster as? org.bukkit.entity.Arrow)?.shooter as? Player ?: return
    if (e.entity is Player && isVanished(p) && !p.hasPermission("essentials.vanish.pvp"))
        e.isCancelled = true
  }

  override fun stop() {
    Bukkit.getOnlinePlayers().forEach { target ->
      Bukkit.getOnlinePlayers().forEach { it.showPlayer(plugin, target) }
      target.removeMetadata("vanished", plugin)
      restore(target)
    }
    states.clear()
  }
}
