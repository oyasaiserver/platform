package icu.oyasai.games.bedwars

import java.util.UUID
import kotlin.math.sqrt
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.entity.Entity
import org.bukkit.entity.Fireball
import org.bukkit.entity.Player
import org.bukkit.entity.TNTPrimed
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageByEntityEvent
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityExplodeEvent
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

internal data class BwImpulse(val x: Double, val y: Double, val z: Double)

/** Directional impulse based on displacement from an elevated explosion origin. */
internal fun explosionImpulse(
    dx: Double,
    dy: Double,
    dz: Double,
    accelerationY: Double,
    reduceY: Double,
    multiplier: Double,
): BwImpulse {
  require(listOf(dx, dy, dz, accelerationY, reduceY, multiplier).all { it.isFinite() })
  require(reduceY > 0 && multiplier >= 0)
  val y = dy - accelerationY
  val length = sqrt(dx * dx + y * y + dz * dz)
  if (!length.isFinite() || length == 0.0) return BwImpulse(0.0, 0.0, 0.0)
  return BwImpulse(
      dx / length * multiplier,
      y / length / reduceY * multiplier,
      dz / length * multiplier,
  )
}

/** Match-owned explosions only; the caller checks both entity ownership and player membership. */
internal class BedWarsExplosion(
    private val plugin: JavaPlugin,
    private val settings: ConfigurationSection,
    private val affected: (Entity, Player) -> Boolean,
    private val participant: (Player) -> Boolean,
) : Listener {
  private data class Landing(var groundChecks: Int, val task: BukkitTask)

  private val landing = mutableMapOf<UUID, Landing>()

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun explode(event: EntityExplodeEvent) {
    val source = event.entity
    if (source !is Fireball && source !is TNTPrimed) return
    val range = settings.getDouble("tnt-fireball-jumping.detection-distance", 3.0)
    if (!range.isFinite() || range <= 0) return
    for (player in
        source.world
            .getNearbyEntities(source.location, range, range, range)
            .filterIsInstance<Player>()) {
      if (!affected(source, player)) continue
      val delta = player.location.toVector().subtract(source.location.toVector())
      val impulse =
          explosionImpulse(
              delta.x,
              delta.y,
              delta.z,
              settings.getDouble("tnt-fireball-jumping.acceleration-y", .5),
              settings.getDouble("tnt-fireball-jumping.reduce-y", 2.2),
              settings.getDouble("tnt-fireball-jumping.launch-multiplier", 2.0),
          )
      player.velocity = player.velocity.add(Vector(impulse.x, impulse.y, impulse.z))
      forget(player.uniqueId)
      val id = player.uniqueId
      val task =
          plugin.server.scheduler.runTaskTimer(
              plugin,
              Runnable {
                val state = landing[id] ?: return@Runnable
                if (!player.isOnline || !participant(player)) {
                  forget(id)
                  return@Runnable
                }
                if (player.isOnGround) state.groundChecks++
                if (state.groundChecks > 3) forget(id)
              },
              20L,
              10L,
          )
      landing[id] = Landing(0, task)
    }
  }

  @EventHandler(priority = EventPriority.HIGH, ignoreCancelled = true)
  fun damage(event: EntityDamageEvent) {
    val player = event.entity as? Player ?: return
    if (!participant(player)) return
    if (event.cause == EntityDamageEvent.DamageCause.ENTITY_EXPLOSION) {
      val source = (event as? EntityDamageByEntityEvent)?.damager ?: return
      if (source !is Fireball && source !is TNTPrimed || !affected(source, player)) return
      val damage = settings.getDouble("explosion-damage", .25)
      if (damage.isFinite() && damage >= 0) event.damage = damage
    } else if (event.cause == EntityDamageEvent.DamageCause.FALL && player.uniqueId in landing) {
      val damage = settings.getDouble("tnt-fireball-jumping.fall-damage", 3.0)
      if (damage.isFinite() && damage >= 0) event.damage = damage
      forget(player.uniqueId)
    }
  }

  fun forget(id: UUID) {
    landing.remove(id)?.task?.cancel()
  }

  fun close() {
    HandlerList.unregisterAll(this)
    landing.keys.toList().forEach(::forget)
  }
}
