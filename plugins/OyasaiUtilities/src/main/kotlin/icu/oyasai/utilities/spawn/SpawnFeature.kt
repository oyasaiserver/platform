package icu.oyasai.utilities.spawn

import icu.oyasai.utilities.OyasaiUtilities
import icu.oyasai.utilities.OyasaiUtilities.color
import icu.oyasai.utilities.YamlConfig
import java.io.File
import java.util.UUID
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerRespawnEvent
import org.bukkit.event.player.PlayerTeleportEvent.TeleportCause
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.Damageable

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

/** 外製 EssentialsSpawn の置き換え。設定の初回取り込み以外は Essentials に依存しない。 */
object SpawnFeature : Listener, CommandExecutor {
  private const val OTHERS = "essentials.spawn.others"

  private val plugin
    get() = OyasaiUtilities.plugin

  private val config by lazy { YamlConfig("Spawn/config.yml") }

  fun onEnable() {
    importSettings()
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
    for (key in listOf("world", "world-name", "x", "y", "z", "yaw", "pitch")) config.set(
        key,
        section.get(key),
    )
    config.save()
    plugin.logger.info("Spawn: imported spawn point from Essentials/spawn.yml")
  }

  fun spawnLocation(): Location? {
    val world =
        config
            .getString("world")
            ?.let { runCatching { UUID.fromString(it) }.getOrNull() }
            ?.let(Bukkit::getWorld)
            ?: config.getString("world-name")?.let(Bukkit::getWorld)
            ?: config.getString("world")?.let(Bukkit::getWorld)
            ?: return null
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
    if (sender is Player && plugin.teleportFeature?.isJailed(sender) == true) {
      sender.sendMessage("&c入獄中はスポーンへ移動できません".color())
      return true
    }
    if (!sender.hasPermission("essentials.spawn")) {
      sender.sendMessage("&cこのコマンドを使う権限がありません".color())
      return true
    }
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
    if (plugin.teleportFeature?.isJailed(target) == true) {
      sender.sendMessage("&c入獄中はスポーンへ移動できません".color())
      return true
    }
    val loc =
        spawnLocation()
            ?: run {
              sender.sendMessage("&cスポーン地点が設定されていません".color())
              return true
            }
    if (plugin.teleportFeature?.teleport(target, loc) != true) return true
    target.sendMessage("&aスポーンにTP中…".color())
    if (target != sender) sender.sendMessage("&a${target.name} をスポーンへ送りました".color())
    return true
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onRespawn(event: PlayerRespawnEvent) {
    val player = event.player
    val teleport = plugin.teleportFeature ?: return
    if (teleport.isJailed(player)) {
      // Missing configured jail must not send an inmate to home or public spawn.
      event.respawnLocation = teleport.jailLocation(player) ?: player.location
      return
    }
    respawnTarget(
            jailed = false,
            respawnAtHome = config.getBoolean("respawn-at-home", true),
            respawnAtBed = config.getBoolean("respawn-at-bed", true),
            anchorSpawn = event.isAnchorSpawn,
            respawnAtAnchor = config.getBoolean("respawn-at-anchor", false),
            bed = { player.respawnLocation },
            home = { teleport.homeForRespawn(player) },
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
              if (
                  player.isOnline && loc != null && plugin.teleportFeature?.isJailed(player) != true
              )
                  player.teleport(loc, TeleportCause.PLUGIN)
            },
            1L,
        )
    Bukkit.getScheduler().runTaskLater(plugin, Runnable { welcome(player) }, 2L)
  }

  /** Import operator configuration once, independently of the Essentials runtime. */
  private fun importSettings() {
    if (config.getBoolean("settings-imported")) return
    val source =
        YamlConfiguration.loadConfiguration(
            File(plugin.dataFolder.parentFile, "Essentials/config.yml")
        )
    for ((key, default) in
        mapOf("respawn-at-home" to true, "respawn-at-bed" to true, "respawn-at-anchor" to false)) {
      if (!config.contains(key)) config.set(key, source.getBoolean(key, default))
    }
    if (!config.contains("welcome-format")) {
      config.set("welcome-format", source.getString("newbies.announce-format", ""))
    }
    config.set("settings-imported", true)
    config.save()
  }

  private fun welcome(player: Player) {
    if (!player.isOnline) return
    config
        .getString("welcome-format")
        ?.takeIf { it.isNotBlank() }
        ?.let { format ->
          Bukkit.broadcastMessage(
              format
                  .replace("{DISPLAYNAME}", player.displayName)
                  .replace("{USERNAME}", player.name)
                  .replace("{PLAYER}", player.name)
                  .color()
          )
        }
    try {
      val items = plugin.teleportFeature?.locations?.toolsKit.orEmpty().map(::parseToolsItem)
      for (item in items) {
        player.inventory.addItem(item).values.forEach {
          player.world.dropItemNaturally(player.location, it)
        }
      }
    } catch (ex: Exception) {
      plugin.logger.log(
          Level.WARNING,
          "Spawn: failed to give new player kit 'tools'; check Kits/kits.yml",
          ex,
      )
    }
  }
}

/** The tools kit accepts Essentials material aliases and common item metadata. */
internal fun parseToolsItem(line: String): ItemStack {
  val tokens = line.trim().split(Regex("\\s+"))
  require(tokens.size >= 2 && !tokens[0].startsWith("/")) { "Unsupported tools kit entry: $line" }
  val materialToken = tokens[0].removePrefix("minecraft:").split(':', limit = 2)
  val normalized = materialToken[0].replace("_", "").lowercase()
  val material =
      Material.entries.firstOrNull { it.name.replace("_", "").lowercase() == normalized }
          ?: throw IllegalArgumentException("Unknown tools kit material: ${tokens[0]}")
  val amount = tokens[1].toInt()
  require(amount > 0) { "Invalid tools kit amount: $amount" }
  val item = ItemStack(material, amount)
  val meta = item.itemMeta ?: return item
  if (materialToken.size == 2) {
    require(meta is Damageable) { "Durability is unsupported for $material" }
    meta.damage = materialToken[1].toInt()
  }
  for (token in tokens.drop(2)) {
    val pair = token.split(':', limit = 2)
    require(pair.size == 2) { "Invalid tools kit metadata: $token" }
    val value = pair[1].replace('_', ' ').color()
    when (pair[0].lowercase()) {
      "name" -> meta.setDisplayName(value)
      "lore" -> meta.lore = value.split('|')
      "unbreakable" -> meta.isUnbreakable = pair[1].toBooleanStrict()
      else -> {
        val enchantName =
            when (pair[0].lowercase()) {
              "digspeed" -> "efficiency"
              "durability" -> "unbreaking"
              else -> pair[0].lowercase()
            }
        val enchant =
            Enchantment.getByKey(NamespacedKey.minecraft(enchantName))
                ?: throw IllegalArgumentException("Unsupported tools kit metadata: $token")
        meta.addEnchant(enchant, pair[1].toInt(), true)
      }
    }
  }
  item.itemMeta = meta
  return item
}
