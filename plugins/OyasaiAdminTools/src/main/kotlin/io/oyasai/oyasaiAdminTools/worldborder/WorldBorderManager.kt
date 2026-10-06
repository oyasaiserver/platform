package io.oyasai.oyasaiAdminTools.worldborder

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.World
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

  fun enable() {
    load()
    applyAllLoadedWorlds()
    startTimer()
  }

  fun disable() {
    borderTask?.cancel()
    borderTask = null
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
        )
    borders[worldName] = data
    plugin.db.saveBorder(worldName, data)
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
      plugin.db.deleteBorder(worldName)
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
    plugin.reloadConfig()
    val cfg = plugin.config
    message = cfg.getString("worldborder.message", DEFAULT_MESSAGE) ?: DEFAULT_MESSAGE
    roundBorder = cfg.getBoolean("worldborder.round-border", false)
    whooshEffect = cfg.getBoolean("worldborder.whoosh-effect", true)
    portalRedirection = cfg.getBoolean("worldborder.portal-redirection", true)
    knockBack = cfg.getDouble("worldborder.knock-back-dist", DEFAULT_KNOCKBACK)
    timerDelayTicks =
        cfg.getInt("worldborder.timer-delay-ticks", DEFAULT_TIMER_TICKS).coerceAtLeast(1)
    denyEnderpearl = cfg.getBoolean("worldborder.deny-enderpearl", true)
    borders.putAll(plugin.db.loadBorders())
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
