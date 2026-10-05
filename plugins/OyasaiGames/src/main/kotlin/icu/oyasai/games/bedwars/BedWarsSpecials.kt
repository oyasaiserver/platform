package icu.oyasai.games.bedwars

import java.util.UUID
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.Sound
import org.bukkit.attribute.Attribute
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.entity.Egg
import org.bukkit.entity.Entity
import org.bukkit.entity.Fireball
import org.bukkit.entity.IronGolem
import org.bukkit.entity.Player
import org.bukkit.entity.TNTPrimed
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockPlaceEvent
import org.bukkit.event.entity.EntityTargetLivingEntityEvent
import org.bukkit.event.entity.ProjectileHitEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.potion.PotionEffect

/** Match-scoped entities and traps; terrain mutations always go through the match journal. */
class BedWarsSpecials(
    private val plugin: JavaPlugin,
    private val team: (UUID) -> String?,
    private val enemies: (Player) -> List<Player>,
    private val placeBlock: (Player, Location, Material) -> Boolean,
    private val inArena: (Player) -> Boolean,
    private val config: ConfigurationSection?,
    private val owner: (Entity, UUID) -> Unit = { _, _ -> },
    private val canPlace: (Player, Location) -> Boolean = { _, _ -> false },
    private val onError: (Exception) -> Unit = {
      plugin.logger.warning("BedWars special failed: ${it.javaClass.simpleName}")
    },
) : Listener {
  private val key = NamespacedKey(plugin, "bedwars_special")
  private val entities = mutableListOf<Entity>()
  private val golems = mutableMapOf<IronGolem, UUID>()
  private val eggs = mutableMapOf<Egg, UUID>()

  private data class Trap(
      val location: Location,
      val owner: UUID,
      val effects: List<PotionEffect>,
      val sounds: List<Sound>,
  )

  private val traps = mutableListOf<Trap>()
  private val options = mutableMapOf<String, Map<String, Any?>>()
  private val optionIds = mutableMapOf<Map<String, Any?>, String>()
  private var closed = false
  private val bridgeTask =
      plugin.server.scheduler.runTaskTimer(
          plugin,
          Runnable {
            if (!closed)
                try {
                  tickEggs()
                } catch (error: Exception) {
                  onError(error)
                }
          },
          1L,
          1L,
      )

  fun tag(item: ItemStack, properties: List<Map<String, Any?>>) {
    val property = properties.firstOrNull() ?: return
    val name = property["name"].toString().lowercase()
    if (
        name !in
            setOf(
                "trap",
                "golem",
                "throwablefireball",
                "autoigniteabletnt",
                "bridgeegg",
                "popuptower",
                "tracker",
            )
    )
        return
    // Only a match-local key is persisted; full config is never written into player items.
    val id =
        optionIds.getOrPut(property) { "$name:${options.size}".also { options[it] = property } }
    item.editMeta { it.persistentDataContainer.set(key, PersistentDataType.STRING, id) }
  }

  private fun kind(item: ItemStack?): String? =
      item?.itemMeta?.persistentDataContainer?.get(key, PersistentDataType.STRING)

  private fun consume(player: Player, hand: EquipmentSlot) {
    val item =
        if (hand == EquipmentSlot.HAND) player.inventory.itemInMainHand
        else player.inventory.itemInOffHand
    item.amount -= 1
  }

  @EventHandler
  fun use(event: PlayerInteractEvent) {
    try {
      useItem(event)
    } catch (error: Exception) {
      onError(error)
    }
  }

  private fun useItem(event: PlayerInteractEvent) {
    val player = event.player
    if (
        !inArena(player) ||
            event.hand == null ||
            event.action !in setOf(Action.RIGHT_CLICK_AIR, Action.RIGHT_CLICK_BLOCK)
    )
        return
    val id = kind(event.item) ?: return
    val name = id.substringBefore(':')
    if (name == "autoigniteabletnt") return // BlockPlace preserves protection and placement checks.
    event.isCancelled = true
    val location =
        event.clickedBlock?.location?.add(0.5, 1.0, 0.5)
            ?: player.location.clone().add(player.location.direction.multiply(2.0))
    when (name) {
      "tracker" ->
          enemies(player)
              .filter { it.world == player.world }
              .minByOrNull { it.location.distanceSquared(player.location) }
              ?.let {
                player.compassTarget = it.location
                player.sendMessage("最も近い敵を追跡しています。")
              }
      "throwablefireball" -> {
        val fireball = player.launchProjectile(Fireball::class.java)
        entities.add(fireball)
        owner(fireball, player.uniqueId)
        fireball.yield = config?.getDouble("throwable-fireball.damage", 2.0)?.toFloat() ?: 2f
        fireball.setIsIncendiary(config?.getBoolean("throwable-fireball.incendiary", true) ?: true)
        if (config?.getBoolean("throwable-fireball.damage-thrower", true) != false)
            fireball.shooter = null
        consume(player, event.hand!!)
      }
      "bridgeegg" -> {
        val egg = player.launchProjectile(Egg::class.java)
        eggs[egg] = player.uniqueId
        entities.add(egg)
        owner(egg, player.uniqueId)
        consume(player, event.hand!!)
      }
      "golem" -> {
        if (!canPlace(player, location)) return
        val golem = player.world.spawn(location, IronGolem::class.java)
        entities.add(golem)
        owner(golem, player.uniqueId)
        golem.isPlayerCreated = true
        val color = team(player.uniqueId) ?: "WHITE"
        val label = config?.getString("golem.name-format", "%team% Golem") ?: "%team% Golem"
        golem.customName = label.replace("%teamcolor%", "").replace("%team%", color)
        golem.isCustomNameVisible = config?.getBoolean("golem.show-name", true) ?: true
        golem.isCollidable = config?.getBoolean("golem.collidable", false) ?: false
        golem.getAttribute(Attribute.MAX_HEALTH)?.baseValue =
            config?.getDouble("golem.health", 20.0) ?: 20.0
        golem.health = golem.getAttribute(Attribute.MAX_HEALTH)?.value ?: 20.0
        golem.getAttribute(Attribute.MOVEMENT_SPEED)?.baseValue =
            (options[id]?.get("speed") as? Number)?.toDouble()
                ?: config?.getDouble("golem.speed", 0.25)
                ?: 0.25
        golem.getAttribute(Attribute.FOLLOW_RANGE)?.baseValue =
            (options[id]?.get("follow") as? Number)?.toDouble()
                ?: config?.getDouble("golem.follow-range", 10.0)
                ?: 10.0
        golems[golem] = player.uniqueId
        consume(player, event.hand!!)
      }
      "trap" -> {
        if (event.clickedBlock == null || !canPlace(player, location)) return
        if (!placeBlock(player, location, Material.TRIPWIRE)) return
        val data = options[id]?.get("data") as? List<*> ?: emptyList<Any>()
        val effects =
            data.mapNotNull { raw ->
              val effect =
                  (raw as? Map<*, *>)?.get("effect") as? Map<*, *> ?: return@mapNotNull null
              val type =
                  Registry.EFFECT.get(NamespacedKey.minecraft(effect["effect"].toString()))
                      ?: return@mapNotNull null
              PotionEffect(
                  type,
                  (effect["duration"] as? Number)?.toInt() ?: 100,
                  (effect["amplifier"] as? Number)?.toInt() ?: 0,
                  effect["ambient"] as? Boolean ?: true,
                  effect["particles"] as? Boolean ?: true,
                  effect["icon"] as? Boolean ?: true,
              )
            }
        val sounds =
            data.mapNotNull { raw ->
              (raw as? Map<*, *>)?.get("sound")?.toString()?.let {
                runCatching { Sound.valueOf(it) }.getOrNull()
              }
            }
        traps.add(Trap(location, player.uniqueId, effects, sounds))
        consume(player, event.hand!!)
      }
      "popuptower" -> {
        if (!canPlace(player, location)) return
        val facing = player.facing
        val dx = facing.modX
        val dz = facing.modZ
        var placed = false
        towerOffsets(dx, dz).forEach { (x, y, z) ->
          val target = location.clone().add(x.toDouble(), y.toDouble(), z.toDouble())
          if (target.block.type.isAir)
              placed = placeBlock(player, target, wool(team(player.uniqueId))) || placed
        }
        if (placed) {
          for (y in 1..5) {
            val target = location.clone().add(dx.toDouble(), y.toDouble(), dz.toDouble())
            if (target.block.type.isAir && placeBlock(player, target, Material.LADDER)) {
              val data = target.block.blockData as org.bukkit.block.data.Directional
              data.facing = facing.oppositeFace
              target.block.setBlockData(data, false)
            }
          }
        }
        if (placed) consume(player, event.hand!!)
      }
    }
  }

  @EventHandler(ignoreCancelled = true, priority = EventPriority.HIGHEST)
  fun tnt(event: BlockPlaceEvent) {
    try {
      ignite(event)
    } catch (error: Exception) {
      onError(error)
    }
  }

  private fun ignite(event: BlockPlaceEvent) {
    if (
        !inArena(event.player) ||
            kind(event.itemInHand)?.substringBefore(':') != "autoigniteabletnt"
    )
        return
    val block = event.blockPlaced
    // Parent placement listener records the original state before this conversion.
    block.setType(Material.AIR, false)
    val tnt = block.world.spawn(block.location.add(0.5, 0.0, 0.5), TNTPrimed::class.java)
    entities.add(tnt)
    owner(tnt, event.player.uniqueId)
    tnt.source = event.player
    tnt.fuseTicks = (config?.getInt("auto-igniteable-tnt.explosion-time", 3) ?: 3) * 20
    tnt.yield = config?.getDouble("auto-igniteable-tnt.damage", 2.5)?.toFloat() ?: 2.5f
  }

  @EventHandler
  fun target(event: EntityTargetLivingEntityEvent) {
    val owner = golems[event.entity] ?: return
    val target = event.target as? Player
    if (target == null || team(target.uniqueId) == null || team(target.uniqueId) == team(owner))
        event.isCancelled = true
  }

  @EventHandler
  fun eggHit(event: ProjectileHitEvent) {
    val egg = event.entity as? Egg ?: return
    if (eggs.remove(egg) != null) egg.remove()
  }

  fun tick() {
    try {
      tickItems()
    } catch (error: Exception) {
      onError(error)
    }
  }

  private fun tickEggs() {
    eggs.entries.toList().forEach { (egg, id) ->
      val player = plugin.server.getPlayer(id)
      if (!egg.isValid || player == null || !inArena(player)) {
        eggs.remove(egg)
        return@forEach
      }
      if (egg.world != player.world || egg.location.distanceSquared(player.location) > 900) {
        eggs.remove(egg)
        return@forEach
      }
      val base = egg.location.clone().subtract(0.0, 3.0, 0.0)
      listOf(base, base.clone().subtract(1.0, 0.0, 0.0), base.clone().subtract(0.0, 0.0, 1.0))
          .forEach { location ->
            if (location.block.type.isAir) placeBlock(player, location, wool(team(id)))
          }
    }
  }

  private fun representative(id: UUID): Player? {
    val color = team(id) ?: return null
    return plugin.server.onlinePlayers.firstOrNull { team(it.uniqueId) == color && inArena(it) }
  }

  private fun tickItems() {
    golems.entries.toList().forEach { (golem, id) ->
      if (!golem.isValid) {
        golems.remove(golem)
        return@forEach
      }
      val player = representative(id)
      if (player == null) {
        golem.target = null
        return@forEach
      }
      val range = golem.getAttribute(Attribute.FOLLOW_RANGE)?.value ?: 10.0
      golem.target =
          enemies(player)
              .filter {
                it.world == golem.world &&
                    it.location.distanceSquared(golem.location) <= range * range
              }
              .minByOrNull { it.location.distanceSquared(golem.location) }
    }
    traps.toList().forEach { trap ->
      if (trap.location.block.type != Material.TRIPWIRE) {
        traps.remove(trap)
        return@forEach
      }
      val player = representative(trap.owner) ?: return@forEach
      val target =
          enemies(player).firstOrNull {
            it.world == trap.location.world &&
                it.location.block.location == trap.location.block.location
          } ?: return@forEach
      target.addPotionEffects(trap.effects)
      trap.sounds.forEach { target.playSound(trap.location, it, 1f, 1f) }
      player.sendMessage("罠に敵がかかりました。")
      placeBlock(player, trap.location, Material.AIR)
      traps.remove(trap)
    }
  }

  fun clear() {
    closed = true
    bridgeTask.cancel()
    entities.forEach { if (it.isValid) it.remove() }
    entities.clear()
    golems.clear()
    eggs.clear()
    traps.clear()
    options.clear()
    optionIds.clear()
    HandlerList.unregisterAll(this)
  }

  companion object {
    /**
     * Geometry measured from the public SBA compact tower: five-high walls and roof battlements.
     */
    fun towerOffsets(dx: Int, dz: Int): Set<Triple<Int, Int, Int>> {
      require(kotlin.math.abs(dx) + kotlin.math.abs(dz) == 1)
      val cells = linkedSetOf<Triple<Int, Int, Int>>()
      for (y in 1..5) for (x in -2..2) for (z in -2..2) {
        if (
            (kotlin.math.abs(x) == 2 || kotlin.math.abs(z) == 2) &&
                !(x == -2 * dx && z == -2 * dz && y <= 2)
        )
            cells.add(Triple(x, y, z))
      }
      for (x in -1..1) for (z in -1..1) cells.add(Triple(x, 5, z))
      for (x in listOf(-2, 2)) for (z in listOf(-2, 2)) cells.add(Triple(x, 5, z))
      for (x in -3..3) for (z in -3..3) {
        if (
            maxOf(kotlin.math.abs(x), kotlin.math.abs(z)) == 3 &&
                minOf(kotlin.math.abs(x), kotlin.math.abs(z)) < 3
        )
            cells.add(Triple(x, 6, z))
        if (
            maxOf(kotlin.math.abs(x), kotlin.math.abs(z)) == 3 &&
                minOf(kotlin.math.abs(x), kotlin.math.abs(z)) == 2
        )
            cells.add(Triple(x, 7, z))
      }
      cells.add(Triple(3 * dx, 7, 3 * dz))
      cells.add(Triple(-3 * dx, 7, -3 * dz))
      return cells
    }

    fun wool(color: String?): Material =
        Material.matchMaterial("${color?.uppercase() ?: "WHITE"}_WOOL") ?: Material.WHITE_WOOL
  }
}
