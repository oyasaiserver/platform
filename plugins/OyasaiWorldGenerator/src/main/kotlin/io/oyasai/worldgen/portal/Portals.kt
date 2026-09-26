package io.oyasai.worldgen.portal

import io.oyasai.worldgen.world.loadNormalYaml
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.util.UUID
import kotlin.math.floor
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerPortalEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.event.vehicle.VehicleMoveEvent
import org.bukkit.plugin.java.JavaPlugin

data class Portal(
    val name: String,
    var world: String,
    var minX: Int,
    var minY: Int,
    var minZ: Int,
    var maxX: Int,
    var maxY: Int,
    var maxZ: Int,
    var destination: String,
    var safeTeleport: Boolean = true,
) {
  fun contains(location: Location): Boolean =
      location.world?.name == world &&
          location.blockX in minX..maxX &&
          location.blockY in minY..maxY &&
          location.blockZ in minZ..maxZ

  fun locationString() = "$world:$minX,$minY,$minZ:$maxX,$maxY,$maxZ"
}

internal data class PortalImport(val portals: Map<String, Portal>, val skipped: List<String>)

internal fun parsePortals(source: File): PortalImport {
  val root =
      loadNormalYaml(source).getConfigurationSection("portals")
          ?: return PortalImport(emptyMap(), emptyList())
  val parsed = linkedMapOf<String, Portal>()
  val skipped = mutableListOf<String>()
  for (name in root.getKeys(false)) {
    val section = root.getConfigurationSection(name)
    val rawLocation = section?.getString("location").orEmpty()
    val parts = rawLocation.split(':')
    val world = if (parts.size == 3) parts[0] else section?.getString("world").orEmpty()
    val corners = if (parts.size == 3) parts.drop(1) else parts
    val first = corners.getOrNull(0)?.split(',')?.map(String::toDoubleOrNull)
    val second = corners.getOrNull(1)?.split(',')?.map(String::toDoubleOrNull)
    if (
        section == null ||
            !name.matches(Regex("[A-Za-z0-9_.-]+")) ||
            world.isBlank() ||
            first?.size != 3 ||
            second?.size != 3 ||
            first.any {
              it == null || !it.isFinite() || it < Int.MIN_VALUE || it > Int.MAX_VALUE
            } ||
            second.any { it == null || !it.isFinite() || it < Int.MIN_VALUE || it > Int.MAX_VALUE }
    ) {
      skipped += name
      continue
    }
    val a = first.filterNotNull().map { floor(it).toInt() }
    val b = second.filterNotNull().map { floor(it).toInt() }
    parsed[name] =
        Portal(
            name,
            world,
            minOf(a[0], b[0]),
            minOf(a[1], b[1]),
            minOf(a[2], b[2]),
            maxOf(a[0], b[0]),
            maxOf(a[1], b[1]),
            maxOf(a[2], b[2]),
            section.getConfigurationSection("action")?.getString("value")
                ?: section.getString("destination").orEmpty(),
            section.getBoolean("safe-teleport", true),
        )
  }
  return PortalImport(parsed, skipped)
}

class Portals(private val plugin: JavaPlugin) : Listener {
  private val file = File(plugin.dataFolder, "portals.yml")
  private val entries = linkedMapOf<String, Portal>()
  private val byWorld = mutableMapOf<String, List<Portal>>()
  private val lastUse = mutableMapOf<UUID, Long>()
  private val arrival = mutableMapOf<UUID, String>()

  fun all(): Collection<Portal> = entries.values

  fun find(name: String): Portal? =
      entries[name] ?: entries.values.firstOrNull { it.name.equals(name, true) }

  fun initialize() {
    if (!file.exists()) {
      val legacy = File(plugin.server.pluginsFolder, "Multiverse-Portals/portals.yml")
      if (legacy.isFile) {
        val imported = parsePortals(legacy)
        entries.putAll(imported.portals)
        save()
        plugin.logger.info(
            "[OWG][portals] Imported ${entries.size}; skipped=${imported.skipped.size} ${imported.skipped}"
        )
      } else {
        save()
        plugin.logger.info("[OWG][portals] No legacy file; created empty registry")
      }
    }
    val loaded = parsePortals(file)
    entries.clear()
    entries.putAll(loaded.portals)
    reindex()
    plugin.logger.info(
        "[OWG][portals] Registry loaded: ${entries.size}; skipped=${loaded.skipped.size} ${loaded.skipped}"
    )
  }

  private fun reindex() {
    byWorld.clear()
    byWorld.putAll(entries.values.groupBy { it.world })
  }

  fun put(portal: Portal) {
    entries[portal.name] = portal
    save()
  }

  fun remove(name: String): Boolean {
    if (entries.remove(name) == null) return false
    save()
    return true
  }

  fun save() {
    val config = YamlConfiguration().apply { options().pathSeparator('\u0000') }
    val root = config.createSection("portals")
    for (portal in entries.values) {
      val section = root.createSection(portal.name)
      section.set("location", portal.locationString())
      section.set(
          "action",
          mapOf("type" to "multiverse-destination", "value" to portal.destination),
      )
      section.set("safe-teleport", portal.safeTeleport)
    }
    file.parentFile.mkdirs()
    val temporary = File(file.parentFile, "${file.name}.tmp")
    config.save(temporary)
    try {
      Files.move(
          temporary.toPath(),
          file.toPath(),
          StandardCopyOption.ATOMIC_MOVE,
          StandardCopyOption.REPLACE_EXISTING,
      )
    } finally {
      temporary.delete()
    }
    reindex()
  }

  private fun at(location: Location): Portal? =
      byWorld[location.world?.name]?.firstOrNull { it.contains(location) }

  @EventHandler(ignoreCancelled = true)
  fun onMove(event: PlayerMoveEvent) {
    if (event.player.isInsideVehicle) return
    val to = event.to
    if (
        event.from.blockX == to.blockX &&
            event.from.blockY == to.blockY &&
            event.from.blockZ == to.blockZ
    )
        return
    val portal = at(to)
    if (portal == null) {
      arrival.remove(event.player.uniqueId)
      return
    }
    if (at(event.from) != null) return
    // MV waits for PlayerPortalEvent when the interior is a Nether portal.
    if (to.block.type == Material.NETHER_PORTAL) return
    use(event.player, portal)
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onNether(event: PlayerPortalEvent) {
    val portal = at(event.from) ?: return
    event.isCancelled = true
    use(event.player, portal)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onTeleport(event: PlayerTeleportEvent) {
    val target = at(event.to)
    if (target != null) arrival[event.player.uniqueId] = target.name
    else arrival.remove(event.player.uniqueId)
  }

  @EventHandler
  fun onVehicleMove(event: VehicleMoveEvent) {
    if (
        event.from.blockX == event.to.blockX &&
            event.from.blockY == event.to.blockY &&
            event.from.blockZ == event.to.blockZ
    )
        return
    val portal = at(event.to) ?: return
    if (at(event.from) != null) return
    for (player in event.vehicle.passengers.filterIsInstance<Player>()) {
      use(player, portal, dismount = true)
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    lastUse.remove(event.player.uniqueId)
    arrival.remove(event.player.uniqueId)
  }

  private fun use(player: Player, portal: Portal, dismount: Boolean = false) {
    val id = player.uniqueId
    if (arrival[id] == portal.name) return
    val now = System.currentTimeMillis()
    if (now - (lastUse[id] ?: 0L) < 1000) return
    val destination = destination(portal.destination) ?: return
    // ponytail: vehicles stay behind; move passengers with vehicles if that behavior becomes
    // necessary.
    if (dismount) player.leaveVehicle()
    if (player.teleport(destination)) {
      lastUse[id] = now
      arrival[id] = at(destination)?.name ?: ""
      player.fallDistance = 0f
    }
  }

  private fun destination(value: String): Location? {
    if (value.startsWith("p:")) {
      val parts = value.split(':')
      if (parts.size !in 2..3) return null
      val target = find(parts[1]) ?: return null
      val world = Bukkit.getWorld(target.world) ?: return null
      val x = (target.minX + target.maxX + 1) / 2.0
      val z = (target.minZ + target.maxZ + 1) / 2.0
      val y =
          (maxOf(target.minY, world.minHeight) until minOf(target.maxY, world.maxHeight - 1))
              .firstOrNull { safe(world, x, it.toDouble(), z) } ?: target.minY
      if (target.safeTeleport && !safe(world, x, y.toDouble(), z)) return null
      val yaw =
          when (parts.getOrNull(2)?.lowercase()) {
            "n",
            "north" -> 180f
            "ne",
            "northeast" -> 225f
            "e",
            "east" -> 270f
            "se",
            "southeast" -> 315f
            "s",
            "south" -> 0f
            "sw",
            "southwest" -> 45f
            "w",
            "west" -> 90f
            "nw",
            "northwest" -> 135f
            else -> -1f
          }
      return Location(world, x, y.toDouble(), z, yaw, 0f)
    }
    if (value.startsWith("e:")) {
      val parts = value.split(':')
      if (parts.size != 3 && parts.size != 5) return null
      val world = Bukkit.getWorld(parts[1]) ?: return null
      val xyz = parts[2].split(',').map(String::toDoubleOrNull)
      if (xyz.size != 3 || xyz.any { it == null || !it.isFinite() }) return null
      val pitch = parts.getOrNull(3)?.toFloatOrNull() ?: if (parts.size == 3) 0f else return null
      val yaw = parts.getOrNull(4)?.toFloatOrNull() ?: if (parts.size == 3) 0f else return null
      if (!pitch.isFinite() || !yaw.isFinite()) return null
      return Location(world, xyz[0]!!, xyz[1]!!, xyz[2]!!, yaw, pitch)
    }
    return null
  }

  private fun safe(world: World, x: Double, y: Double, z: Double): Boolean {
    val feet = Location(world, x, y, z).block
    return world.worldBorder.isInside(feet.location) &&
        !feet.type.isSolid &&
        feet.type != Material.FIRE &&
        !feet.getRelative(0, 1, 0).type.isSolid &&
        feet.getRelative(0, 1, 0).type != Material.FIRE &&
        feet.getRelative(0, -1, 0).type.isSolid
  }
}
