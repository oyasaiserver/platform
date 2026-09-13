package icu.oyasai.utilities.elevator

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.OyasaiUtilities.color
import icu.oyasai.utilities.YamlConfig
import icu.oyasai.utilities.tpath.TeleportManager
import java.time.Duration
import java.util.UUID
import kotlin.math.abs
import kotlin.math.ceil
import kotlin.math.floor
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.title.Title
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.Sound
import org.bukkit.World
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerMoveEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.player.PlayerToggleSneakEvent

object Elevator : Listener, CommandExecutor {
  private val plugin
    get() = OyasaiUtilities.plugin

  private val config by lazy { YamlConfig("Elevator/config.yml", true) }
  private val lastUseTick = mutableMapOf<UUID, Int>()
  private val legacySounds = mapOf("ORB_PICKUP" to "ENTITY_EXPERIENCE_ORB_PICKUP")

  private var combinations = emptyList<Combination>()
  private var enabledWorlds = emptyList<String>()
  private var maxDistance = 40
  private var ignoreAll = false
  private var ignoreExact = emptySet<Material>()
  private var ignoreContains = emptyList<String>()
  private var cooldownTicks = 0
  private var cooldownMessage = ""
  private var actionBarEnabled = true
  private var titleEnabled = true
  private var floorUp = ""
  private var floorDown = ""
  private var floorUpTitle = ""
  private var floorUpSubTitle = ""
  private var floorDownTitle = ""
  private var floorDownSubTitle = ""
  private var titleFadeIn = 5
  private var titleStay = 10
  private var titleFadeOut = 5
  private var soundUp = SoundSettings()
  private var soundDown = SoundSettings()

  fun reload() {
    config.saveDefault()
    config.reload()
    combinations =
        config.getStringList("combinations").mapNotNull { line ->
          parseCombination(line).also { parsed ->
            if (parsed == null) {
              plugin.logger.warning("[Elevator] Unknown combination: $line")
            }
          }
        }
    enabledWorlds = config.getStringList("enabledworlds")
    maxDistance = config.getInt("maxDistance", 40)
    cooldownTicks = config.getInt("elevatorCooldown", 0)
    cooldownMessage = config.getString("elevatorCooldownMessage") ?: ""
    actionBarEnabled = config.getBoolean("actionBarEnabled", true)
    titleEnabled = config.getBoolean("titleBarEnabled", true)
    floorUp = config.getString("floorUp") ?: ""
    floorDown = config.getString("floorDown") ?: ""
    floorUpTitle = config.getString("floorUpTitle") ?: ""
    floorUpSubTitle = config.getString("floorUpSubTitle") ?: ""
    floorDownTitle = config.getString("floorDownTitle") ?: ""
    floorDownSubTitle = config.getString("floorDownSubTitle") ?: ""
    titleFadeIn = config.getInt("titleBarFadeIn", 5)
    titleStay = config.getInt("titleBarStay", 10)
    titleFadeOut = config.getInt("titleBarFadeOut", 5)
    soundUp = readSound("elevatorSound.up", 0.5)
    soundDown = readSound("elevatorSound.down", 1.0)
    val ignoreRaw = config.getString("ignoreList") ?: ""
    ignoreAll = ignoreRaw.equals("all", ignoreCase = true)
    val exact = mutableSetOf<Material>()
    val contains = mutableListOf<String>()
    if (!ignoreAll) {
      ignoreRaw
          .split(',')
          .map { it.trim() }
          .filter { it.isNotEmpty() }
          .forEach { token ->
            when (val parsed = ElevatorMaterials.ignoreToken(token)) {
              is ElevatorMaterials.IgnoreToken.Exact -> exact += parsed.material
              is ElevatorMaterials.IgnoreToken.NameContains -> contains += parsed.needle
              null -> plugin.logger.warning("[Elevator] Unknown ignoreList material: $token")
            }
          }
    }
    ignoreExact = exact
    ignoreContains = contains
    plugin.logger.info("[Elevator] Loaded ${combinations.size} combination(s)")
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.firstOrNull().equals("reload", ignoreCase = true)) {
      if (!sender.isOp && !sender.hasPermission("oyasaiutilities.elevator.reload")) {
        sender.sendMessage("&cPermission denied.".color())
        return true
      }
      reload()
      sender.sendMessage("&aElevator config reloaded.".color())
      return true
    }
    sender.sendMessage("&eElevator&7: jump to go up, sneak to go down. &f/$label reload".color())
    return true
  }

  @EventHandler(priority = EventPriority.NORMAL, ignoreCancelled = true)
  fun onMove(event: PlayerMoveEvent) {
    val player = event.player
    if (!player.currentInput.isJump || event.to.y <= event.from.y) return
    tryElevate(player, up = true)
  }

  @EventHandler(priority = EventPriority.NORMAL, ignoreCancelled = true)
  fun onSneak(event: PlayerToggleSneakEvent) {
    if (!event.isSneaking) return
    tryElevate(event.player, up = false)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    lastUseTick.remove(event.player.uniqueId)
  }

  private fun tryElevate(player: Player, up: Boolean) {
    if (player.gameMode == GameMode.SPECTATOR) return
    if (!worldEnabled(player.world)) return
    val combo = matchCombination(player.location) ?: return
    val now = Bukkit.getCurrentTick()
    val last = lastUseTick[player.uniqueId]
    if (last != null) {
      val elapsed = now - last
      if (elapsed < 4) return
      if (cooldownTicks > 0 && elapsed < cooldownTicks) {
        if (cooldownMessage.isNotBlank()) {
          val seconds = ((cooldownTicks - elapsed + 19) / 20).coerceAtLeast(1)
          player.sendMessage(cooldownMessage.replace("%cooldown%", seconds.toString()).color())
        }
        return
      }
    }
    val destination = findDestination(player, combo, up) ?: return
    lastUseTick[player.uniqueId] = now
    TeleportManager.pushIgnore(player)
    player.teleport(destination)
    playSound(player, if (up) soundUp else soundDown)
    if (actionBarEnabled) {
      val bar = if (up) floorUp else floorDown
      if (bar.isNotBlank()) player.sendActionBar(legacy(bar))
    }
    if (titleEnabled) {
      val title = if (up) floorUpTitle else floorDownTitle
      val sub = if (up) floorUpSubTitle else floorDownSubTitle
      if (title.isNotBlank() || sub.isNotBlank()) {
        player.showTitle(
            Title.title(
                legacy(title),
                legacy(sub),
                Title.Times.times(
                    Duration.ofMillis(titleFadeIn * 50L),
                    Duration.ofMillis(titleStay * 50L),
                    Duration.ofMillis(titleFadeOut * 50L),
                ),
            )
        )
      }
    }
  }

  private fun worldEnabled(world: World): Boolean =
      enabledWorlds.isEmpty() || world.name in enabledWorlds

  private fun matchCombination(location: Location): Combination? {
    val (floor, base) = standingBlocks(location)
    return combinations.firstOrNull { it.matches(floor, base) }
  }

  private fun findDestination(player: Player, combo: Combination, up: Boolean): Location? {
    val loc = player.location
    val world = loc.world ?: return null
    val x = loc.blockX
    val z = loc.blockZ
    val frac = loc.y - loc.blockY
    val fullBlock = frac < 0.001
    val originFloor = standingBlocks(loc).first
    val startY = if (up) ceil(loc.y).toInt() + 1 else ceil(loc.y).toInt() - 1
    val yRange = if (up) startY until world.maxHeight else startY downTo world.minHeight + 1
    val limit = combo.maxDistance ?: maxDistance
    for (y in yRange) {
      val floor = world.getBlockAt(x, y - 1, z)
      val base = world.getBlockAt(x, y - 2, z)
      if (!combo.matches(floor, base)) continue
      if (combo.floor == null && !sameStandHeight(originFloor, floor)) continue
      if (!destinationClear(world, x, y, z, fullBlock)) continue
      val destY = if (fullBlock) y.toDouble() else y - (1.0 - frac)
      val dest = Location(world, x + 0.5, destY, z + 0.5, loc.yaw, loc.pitch)
      if (floor(loc.distance(dest)).toInt() > limit) {
        val msg =
            if (up) "&cThe distance to the next floor is too great!"
            else "&cThe distance to the previous floor is too great!"
        player.sendMessage(msg.color())
        return null
      }
      return dest
    }
    return null
  }

  private fun destinationClear(world: World, x: Int, y: Int, z: Int, fullBlock: Boolean): Boolean {
    if (ignoreAll) return true
    if (!ignored(world.getBlockAt(x, y, z))) return false
    if (fullBlock && !ignored(world.getBlockAt(x, y + 1, z))) return false
    return true
  }

  private fun ignored(block: Block): Boolean {
    val type = block.type
    if (type in ignoreExact) return true
    val name = type.name
    return ignoreContains.any { name.contains(it) }
  }

  private fun standingBlocks(location: Location): Pair<Block, Block> {
    val feet = location.block
    val floor = if (location.y - location.blockY < 0.001) feet.getRelative(BlockFace.DOWN) else feet
    return floor to floor.getRelative(BlockFace.DOWN)
  }

  private fun sameStandHeight(origin: Block, dest: Block): Boolean =
      abs(origin.boundingBox.height - dest.boundingBox.height) < 0.001

  private fun parseCombination(line: String): Combination? {
    val parts = line.split(',').map { it.trim() }.filter { it.isNotEmpty() }
    if (parts.isEmpty()) return null
    val floorAny = parts[0].equals("any", ignoreCase = true)
    val baseAny = parts.size < 2 || parts[1].equals("any", ignoreCase = true)
    val floor = if (floorAny) null else ElevatorMaterials.resolve(parts[0]) ?: return null
    val base = if (baseAny) null else ElevatorMaterials.resolve(parts[1]) ?: return null
    val custom = parts.getOrNull(2)?.toIntOrNull() ?: if (parts.size >= 3) return null else null
    return Combination(floor, base, custom)
  }

  private fun readSound(path: String, defaultPitch: Double): SoundSettings {
    val section = config.getConfigurationSection(path)
    return SoundSettings(
        enabled = section?.getBoolean("enabled", true) ?: true,
        world = section?.getBoolean("world", false) ?: false,
        sound = section?.getString("sound") ?: "ORB_PICKUP",
        pitch = (section?.getDouble("pitch", defaultPitch) ?: defaultPitch).toFloat(),
        volume = (section?.getDouble("volume", 1.0) ?: 1.0).toFloat(),
    )
  }

  private fun playSound(player: Player, settings: SoundSettings) {
    if (!settings.enabled) return
    val sound = resolveSound(settings.sound) ?: return
    if (settings.world) {
      player.world.playSound(player.location, sound, settings.volume, settings.pitch)
    } else {
      player.playSound(player.location, sound, settings.volume, settings.pitch)
    }
  }

  private fun resolveSound(name: String): Sound? {
    val enumName =
        ElevatorMaterials.normalize(name.trim().substringAfterLast(':').replace('.', '_'))
    val mapped = legacySounds[enumName] ?: enumName
    return Registry.SOUNDS.get(NamespacedKey.minecraft(mapped.lowercase().replace('_', '.')))
  }

  private fun legacy(text: String) =
      LegacyComponentSerializer.legacySection().deserialize(text.color())

  private data class Combination(
      val floor: Material?,
      val base: Material?,
      val maxDistance: Int?,
  ) {
    fun matches(floorBlock: Block, baseBlock: Block): Boolean {
      if (floor != null && floorBlock.type != floor) return false
      if (base != null && baseBlock.type != base) return false
      return true
    }
  }

  private data class SoundSettings(
      val enabled: Boolean = true,
      val world: Boolean = false,
      val sound: String = "ORB_PICKUP",
      val pitch: Float = 1f,
      val volume: Float = 1f,
  )
}
