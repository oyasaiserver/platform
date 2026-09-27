package icu.oyasai.utilities.spawn

import com.earth2me.essentials.Kit
import com.earth2me.essentials.textreader.KeywordReplacer
import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.OyasaiUtilities.color
import icu.oyasai.utilities.YamlConfig
import java.io.File
import java.util.Locale
import java.util.UUID
import java.util.logging.Level
import net.ess3.api.IEssentials
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerRespawnEvent
import org.bukkit.event.player.PlayerTeleportEvent.TeleportCause

/** 復活地点を EssentialsSpawn と同じ順で決める。null ならバニラに任せる。 */
internal fun <L> respawnTarget(
    jailed: Boolean,
    respawnAtHome: Boolean,
    respawnAtBed: Boolean,
    anchorSpawn: Boolean,
    respawnAtAnchor: Boolean,
    bed: () -> L?,
    home: () -> L?,
    spawn: L?,
): L? {
  if (jailed) return null
  if (respawnAtHome) {
    val useBed = respawnAtBed && (!anchorSpawn || respawnAtAnchor)
    ((if (useBed) bed() else null) ?: home())?.let {
      return it
    }
  }
  return spawn
}

/** 外製 EssentialsSpawn の置き換え。Essentials が有効なときだけ Main から呼ぶ。 */
object SpawnFeature : Listener, CommandExecutor {
  private const val OTHERS = "oyasaiutilities.spawn.others"

  private val plugin
    get() = OyasaiUtilities.plugin

  private val config by lazy { YamlConfig("Spawn/config.yml") }
  private lateinit var ess: IEssentials

  fun onEnable() {
    ess = plugin.server.pluginManager.getPlugin("Essentials") as IEssentials
    if (!config.contains("world")) importFromEssentials()
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.getCommand("spawn")?.setExecutor(this)
  }

  /** 初回だけ Essentials/spawn.yml の spawns.default を取り込む。 */
  private fun importFromEssentials() {
    val section =
        YamlConfiguration.loadConfiguration(
                File(plugin.dataFolder.parentFile, "Essentials/spawn.yml"),
            )
            .getConfigurationSection("spawns.default")
    if (section == null) {
      plugin.logger.warning("Spawn: no spawn point in Spawn/config.yml or Essentials/spawn.yml")
      return
    }
    for (key in listOf("world", "x", "y", "z", "yaw", "pitch")) config.set(key, section.get(key))
    config.save()
    plugin.logger.info("Spawn: imported spawn point from Essentials/spawn.yml")
  }

  private fun spawnLocation(): Location? {
    val world =
        config
            .getString("world")
            ?.let { runCatching { UUID.fromString(it) }.getOrNull() }
            ?.let(Bukkit::getWorld) ?: return null
    return Location(
        world,
        config.getDouble("x"),
        config.getDouble("y"),
        config.getDouble("z"),
        config.getDouble("yaw").toFloat(),
        config.getDouble("pitch").toFloat(),
    )
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val target =
        when {
          args.isNotEmpty() -> {
            if (!sender.hasPermission(OTHERS)) {
              sender.sendMessage("&c他のプレイヤーをスポーンへ送る権限がありません".color())
              return true
            }
            Bukkit.getPlayer(args[0])
                ?: run {
                  sender.sendMessage("&cプレイヤーが見つかりません: ${args[0]}".color())
                  return true
                }
          }
          sender is Player -> sender
          else -> {
            sender.sendMessage("/spawn <player>")
            return true
          }
        }
    val loc =
        spawnLocation()
            ?: run {
              sender.sendMessage("&cスポーン地点が設定されていません".color())
              return true
            }
    target.teleportAsync(loc, TeleportCause.COMMAND)
    target.sendMessage("&aスポーンにTP中…".color())
    if (target != sender) sender.sendMessage("&a${target.name} をスポーンへ送りました".color())
    return true
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onRespawn(event: PlayerRespawnEvent) {
    val player = event.player
    val user = ess.getUser(player)
    val settings = ess.settings
    respawnTarget(
            jailed = user.isJailed && !user.jail.isNullOrEmpty(),
            respawnAtHome = settings.respawnAtHome,
            respawnAtBed = settings.isRespawnAtBed,
            anchorSpawn = event.isAnchorSpawn,
            respawnAtAnchor = settings.isRespawnAtAnchor,
            bed = { player.respawnLocation },
            home = { user.getHome(player.location) },
            spawn = spawnLocation(),
        )
        ?.let(event::setRespawnLocation)
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onJoin(event: PlayerJoinEvent) {
    val player = event.player
    if (player.hasPlayedBefore()) return
    // 原作どおり 1 tick 後にスポーンへ、2 tick 後に歓迎文とキット。
    // 同期 teleport にして、後続の JoinCommands の tp より先に必ず終わらせる。
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              val loc = spawnLocation()
              if (player.isOnline && loc != null) player.teleport(loc, TeleportCause.PLUGIN)
            },
            1L,
        )
    Bukkit.getScheduler().runTaskLater(plugin, Runnable { welcome(player) }, 2L)
  }

  private fun welcome(player: Player) {
    if (!player.isOnline) return
    val user = ess.getUser(player)
    val settings = ess.settings
    if (settings.announceNewPlayers) {
      KeywordReplacer(settings.announceNewPlayerFormat, user.source, ess).lines.forEach {
        ess.broadcastMessage(user, it)
      }
    }
    val kit = settings.newPlayerKit
    if (kit.isNullOrEmpty()) return
    try {
      Kit(kit.lowercase(Locale.ENGLISH), ess).expandItems(user)
    } catch (ex: Exception) {
      plugin.logger.log(Level.WARNING, "Spawn: failed to give new player kit '$kit'", ex)
    }
  }
}
