package io.oyasai.oyasaiAdminTools.worldborder

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.World
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.LivingEntity
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
import org.bukkit.scheduler.BukkitTask
import org.bukkit.util.Vector

object WorldBorderManager {
  const val DEFAULT_MESSAGE = "&cYou have reached the edge of this world."
  const val DEFAULT_KNOCKBACK = 3.0
  const val DEFAULT_TIMER_TICKS = 5

  private val plugin
    get() = OyasaiAdminTools.plugin

  private val borders = ConcurrentHashMap<String, WorldBorderData>()
  private val handlingPlayers = ConcurrentHashMap.newKeySet<String>()

  var message: String = DEFAULT_MESSAGE
    private set

  var roundBorder: Boolean = false
    private set

  var whooshEffect: Boolean = true
    private set

  var portalRedirection: Boolean = true
    private set

  var knockBack: Double = DEFAULT_KNOCKBACK
    private set

  var timerDelayTicks: Int = DEFAULT_TIMER_TICKS
    private set

  var denyEnderpearl: Boolean = true
    private set

  val formattedMessage: String
    get() = message.replace(Regex("&([0-9a-fk-orA-FK-OR])"), "§$1")

  private var borderTask: BukkitTask? = null

  private val ownFile: File
    get() = File(plugin.dataFolder, "worldborder.yml")

  private val legacyFile: File
    get() = File(plugin.dataFolder.parentFile, "WorldBorder/config.yml")

  fun enable() {
    plugin.dataFolder.mkdirs()
    load()
    applyAllLoadedWorlds()
    startTimer()
  }

  fun disable() {
    borderTask?.cancel()
    borderTask = null
    save()
  }

  fun reload() {
    borderTask?.cancel()
    borderTask = null
    load()
    applyAllLoadedWorlds()
    startTimer()
  }

  fun getBorder(worldName: String): WorldBorderData? = borders[worldName]

  fun allBorders(): Map<String, WorldBorderData> = borders.toSortedMap()

  fun setBorder(
      worldName: String,
      radiusX: Int,
      radiusZ: Int,
      x: Double,
      z: Double,
  ): WorldBorderData {
    val previous = borders[worldName]
    val data =
        WorldBorderData(
            x = x,
            z = z,
            radiusX = radiusX,
            radiusZ = radiusZ,
            shapeRound = previous?.shapeRound,
            wrapping = previous?.wrapping ?: false,
        )
    borders[worldName] = data
    save()
    Bukkit.getWorld(worldName)?.let { applyToWorld(it) }
    return data
  }

  fun setRadii(worldName: String, radiusX: Int, radiusZ: Int): WorldBorderData? {
    val current = borders[worldName] ?: return null
    return setBorder(worldName, radiusX, radiusZ, current.x, current.z)
  }

  fun removeBorder(worldName: String): Boolean {
    val removed = borders.remove(worldName) != null
    if (removed) {
      save()
      Bukkit.getWorld(worldName)?.worldBorder?.reset()
    }
    return removed
  }

  // 境界はすべて独自ロジックで判定する。バニラボーダーを設定すると縞模様の壁と
  // 境界外ダメージが付き、旧 Brettflan WorldBorder の挙動と変わってしまうため残さない。
  fun applyToWorld(world: World) {
    world.worldBorder.reset()
  }

  fun knockBackIfOutside(
      player: Player,
      target: Location? = null,
      notify: Boolean = true,
  ): Location? {
    if (knockBack == 0.0) return null
    val loc = (target ?: player.location).clone()
    val world = loc.world ?: return null
    val border = borders[world.name] ?: return null
    if (border.inside(loc.x, loc.z, roundBorder)) return null

    val key = player.name.lowercase()
    if (!handlingPlayers.add(key)) return null

    try {
      val newLoc =
          border.correctedPosition(loc, roundBorder, knockBack, player.isFlying)
              ?: world.spawnLocation
      if (player.isInsideVehicle) {
        val ride = player.vehicle
        player.leaveVehicle()
        if (ride != null) {
          val vertOffset = if (ride is LivingEntity) 0.0 else ride.location.y - loc.y
          val rideLoc = newLoc.clone().apply { y = newLoc.y + vertOffset }
          ride.velocity = Vector(0, 0, 0)
          ride.teleport(rideLoc, TeleportCause.PLUGIN)
        }
      }
      if (player.passengers.isNotEmpty()) {
        player.eject()
      }
      WorldBorderListener.showWhoosh(loc)
      if (notify) player.sendMessage(formattedMessage)
      if (target == null) {
        player.teleport(newLoc, TeleportCause.PLUGIN)
        return null
      }
      return newLoc
    } finally {
      handlingPlayers.remove(key)
    }
  }

  fun describe(worldName: String): String {
    val border = borders[worldName]
    return if (border == null) {
      "No border was found for the world \"$worldName\"."
    } else {
      "World \"$worldName\" has border ${border.describe()}"
    }
  }

  private fun load() {
    borders.clear()
    val own = ownFile
    val ownCfg = if (own.exists()) YamlConfiguration.loadConfiguration(own) else null
    val ownWorlds = ownCfg?.getConfigurationSection("worlds")?.getKeys(false)

    if (ownCfg != null && !ownWorlds.isNullOrEmpty()) {
      loadFrom(ownCfg)
      plugin.logger.info("Loaded ${borders.size} world borders from ${own.name}")
      return
    }

    if (legacyFile.exists()) {
      loadFrom(YamlConfiguration.loadConfiguration(legacyFile))
      save()
      plugin.logger.info(
          "Migrated ${borders.size} world borders from WorldBorder/config.yml to ${own.name}"
      )
      return
    }

    if (ownCfg != null) {
      loadFrom(ownCfg)
    }
    save()
    plugin.logger.info("No world borders configured yet (${own.name})")
  }

  private fun loadFrom(cfg: FileConfiguration) {
    message = cfg.getString("message") ?: DEFAULT_MESSAGE
    roundBorder = cfg.getBoolean("round-border", false)
    whooshEffect = cfg.getBoolean("whoosh-effect", true)
    portalRedirection = cfg.getBoolean("portal-redirection", true)
    knockBack = cfg.getDouble("knock-back-dist", DEFAULT_KNOCKBACK)
    timerDelayTicks = cfg.getInt("timer-delay-ticks", DEFAULT_TIMER_TICKS).coerceAtLeast(1)
    denyEnderpearl = cfg.getBoolean("deny-enderpearl", true)

    val worlds = cfg.getConfigurationSection("worlds") ?: return
    for (rawName in worlds.getKeys(false)) {
      val section = worlds.getConfigurationSection(rawName) ?: continue
      val worldName = rawName.replace("<", ".")
      val radiusX: Int
      val radiusZ: Int
      if (section.isSet("radius") && !section.isSet("radiusX")) {
        val radius = section.getInt("radius")
        radiusX = radius
        radiusZ = radius
      } else {
        radiusX = section.getInt("radiusX", 0)
        radiusZ = section.getInt("radiusZ", 0)
      }
      val shapeRound =
          if (section.contains("shape-round")) section.getBoolean("shape-round") else null
      borders[worldName] =
          WorldBorderData(
              x = section.getDouble("x", 0.0),
              z = section.getDouble("z", 0.0),
              radiusX = radiusX,
              radiusZ = radiusZ,
              shapeRound = shapeRound,
              wrapping = section.getBoolean("wrapping", false),
          )
    }
  }

  fun save() {
    plugin.dataFolder.mkdirs()
    val yaml = YamlConfiguration()
    yaml.set("cfg-version", 12)
    yaml.set("message", message)
    yaml.set("round-border", roundBorder)
    yaml.set("whoosh-effect", whooshEffect)
    yaml.set("portal-redirection", portalRedirection)
    yaml.set("knock-back-dist", knockBack)
    yaml.set("timer-delay-ticks", timerDelayTicks)
    yaml.set("deny-enderpearl", denyEnderpearl)

    for ((name, border) in borders) {
      val key = name.replace(".", "<")
      yaml.set("worlds.$key.x", border.x)
      yaml.set("worlds.$key.z", border.z)
      yaml.set("worlds.$key.radiusX", border.radiusX)
      yaml.set("worlds.$key.radiusZ", border.radiusZ)
      yaml.set("worlds.$key.wrapping", border.wrapping)
      border.shapeRound?.let { yaml.set("worlds.$key.shape-round", it) }
    }
    yaml.save(ownFile)
  }

  private fun applyAllLoadedWorlds() {
    Bukkit.getWorlds().forEach { applyToWorld(it) }
  }

  private fun startTimer() {
    borderTask?.cancel()
    val delay = timerDelayTicks.toLong()
    borderTask =
        plugin.server.scheduler.runTaskTimer(
            plugin,
            Runnable {
              if (knockBack == 0.0) return@Runnable
              for (player in Bukkit.getOnlinePlayers()) {
                knockBackIfOutside(player)
              }
            },
            delay,
            delay,
        )
  }
}
