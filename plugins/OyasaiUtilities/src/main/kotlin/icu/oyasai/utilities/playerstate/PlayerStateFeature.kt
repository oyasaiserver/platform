package icu.oyasai.utilities.playerstate

import icu.oyasai.utilities.Main
import java.io.File
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.PluginCommand
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityDamageEvent
import org.bukkit.event.entity.EntityRegainHealthEvent
import org.bukkit.event.entity.FoodLevelChangeEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.player.*
import org.bukkit.metadata.FixedMetadataValue
import org.bukkit.scheduler.BukkitTask

class PlayerStateFeature(val plugin: Main) : Listener {
  lateinit var settings: PlayerStateSettings
    private set

  lateinit var store: PlayerStateStore
    private set

  var bridge: PlayerStateBridge = object : PlayerStateBridge {}
    private set

  private val activity = mutableMapOf<UUID, Long>()
  private val afkPosition = mutableMapOf<UUID, Location>()
  private val flightTransfers = mutableMapOf<UUID, Pair<Int, Boolean>>()
  private val jumpLocked = mutableSetOf<UUID>()
  private val replaced = mutableMapOf<String, Command>()
  private val tasks = mutableSetOf<BukkitTask>()
  private val commands = PlayerStateCommands(this)
  private var enabled = false

  fun enable() {
    settings = PlayerStateSettings(File(plugin.dataFolder, "PlayerState/config.yml"))
    store =
        PlayerStateStore(
            requireNotNull(plugin.database) { "Shared SQLite database is unavailable" },
            File(plugin.dataFolder.parentFile, "Essentials/userdata"),
        )
    if (plugin.server.pluginManager.isPluginEnabled("Essentials")) {
      bridge =
          EssentialsPlayerStateBridge(
              requireNotNull(plugin.server.pluginManager.getPlugin("Essentials"))
          )
      bridge.enable()
      plugin.server.pluginManager.registerEvents(bridge as Listener, plugin)
    }
    PlayerStateRules.aliases.forEach { (name, aliases) ->
      val own = requireNotNull(plugin.getCommand(name))
      own.setExecutor(commands)
      own.tabCompleter = commands
      // Own every approved unqualified label, including vanilla names and e-prefixed aliases.
      // Leave other plugins and all Essentials namespaced commands intact.
      (listOf(name) + aliases).forEach { label ->
        val previous = plugin.server.commandMap.knownCommands[label]
        if (
            previous != own &&
                previous != null &&
                ((previous is PluginCommand && previous.plugin.name == "Essentials") ||
                    previous.javaClass.name.startsWith("org.bukkit.command.defaults.") ||
                    previous.javaClass.name.endsWith(".VanillaCommandWrapper") ||
                    previous === plugin.server.commandMap.knownCommands["minecraft:$label"])
        ) {
          replaced[label] = previous
          plugin.server.commandMap.knownCommands[label] = own
        }
      }
    }
    plugin.server.pluginManager.registerEvents(this, plugin)
    enabled = true
    Bukkit.getOnlinePlayers().forEach(::join)
    tasks += plugin.server.scheduler.runTaskTimer(plugin, Runnable { checkActivity() }, 20, 20)
  }

  fun disable() {
    tasks.forEach { it.cancel() }
    tasks.clear()
    HandlerList.unregisterAll(this)
    bridge.disable()
    if (enabled)
        Bukkit.getOnlinePlayers().forEach { player ->
          runCatching { saveFlight(player) }
              .onFailure {
                plugin.logger.log(
                    java.util.logging.Level.SEVERE,
                    "PlayerState: failed to save ${player.uniqueId}",
                    it,
                )
              }
          player.removeMetadata(PlayerStateRules.AFK_METADATA, plugin)
          player.isSleepingIgnored = player.hasPermission("essentials.sleepingignored")
        }
    replaced.forEach { (label, previous) ->
      if ((plugin.server.commandMap.knownCommands[label] as? PluginCommand)?.plugin == plugin)
          plugin.server.commandMap.knownCommands[label] = previous
    }
    replaced.clear()
    enabled = false
  }

  fun isAfk(player: Player) = afkPosition.containsKey(player.uniqueId)

  fun setAfk(player: Player, value: Boolean, message: String? = null, broadcast: Boolean = true) {
    if (isAfk(player) == value) return
    if (value) afkPosition[player.uniqueId] = player.location
    else {
      afkPosition.remove(player.uniqueId)
      activity[player.uniqueId] = System.currentTimeMillis()
    }
    player.setMetadata(PlayerStateRules.AFK_METADATA, FixedMetadataValue(plugin, value))
    player.isSleepingIgnored =
        player.hasPermission("essentials.sleepingignored") ||
            (value && settings.bool("sleep-ignores-afk-players"))
    val text =
        "§7${player.displayName} は" +
            if (value) "離席中です。${message?.let { " ($it)" } ?: ""}" else "離席から戻りました。"
    if (!player.hasMetadata("vanished") || !player.getMetadata("vanished").any { it.asBoolean() }) {
      player.sendMessage(text)
      if (broadcast && settings.bool("broadcast-afk-message"))
          Bukkit.getOnlinePlayers()
              .filter { it != player && it.canSee(player) }
              .forEach { it.sendMessage(text) }
    }
  }

  fun active(player: Player, broadcast: Boolean = true) {
    setAfk(player, false, broadcast = broadcast)
    activity[player.uniqueId] = System.currentTimeMillis()
  }

  private fun interact(player: Player) {
    if (settings.bool("cancel-afk-on-interact")) active(player)
  }

  private fun checkActivity() {
    val now = System.currentTimeMillis()
    Bukkit.getOnlinePlayers().forEach { player ->
      val last = activity[player.uniqueId] ?: return@forEach
      if (now - last <= 10000) return@forEach
      val kick = settings.int("auto-afk-kick")
      if (
          kick > 0 &&
              now - last > kick * 1000L &&
              !player.hasPermission("essentials.kick.exempt") &&
              !player.hasPermission("essentials.afk.kickexempt")
      ) {
        player.kickPlayer("離席時間が ${kick / 60.0} 分を超えました。")
        return@forEach
      }
      val timeout = settings.int("auto-afk")
      if (
          !isAfk(player) &&
              timeout > 0 &&
              now - last > timeout * 1000L &&
              player.hasPermission("essentials.afk.auto")
      )
          setAfk(player, true)
    }
  }

  fun applyNick(player: Player) {
    val nick = store.get(player.uniqueId).nickname
    if (settings.bool("change-displayname"))
        player.setDisplayName(
            if (nick.isNullOrEmpty()) player.name
            else
                (if (player.hasPermission("essentials.nick.hideprefix")) ""
                else settings.string("nickname-prefix")) + nick + "§r"
        )
  }

  private fun join(player: Player) {
    val saved = store.get(player.uniqueId)
    if (saved.lastName.isEmpty()) {
      saved.flySpeed = player.flySpeed
      saved.walkSpeed = player.walkSpeed
      saved.flying = player.isFlying
    }
    saved.lastName = player.name
    store.save(player.uniqueId)
    activity[player.uniqueId] = System.currentTimeMillis()
    player.setMetadata(PlayerStateRules.AFK_METADATA, FixedMetadataValue(plugin, false))
    // Essentials schedules login work; reapply after all join handlers and that task finish.
    later {
      if (!player.isOnline) return@later
      bridge.syncNick(player, saved.nickname)
      applyNick(player)
      if (!player.hasPermission("essentials.fly")) saved.flyMode = false
      if (saved.flyMode) {
        player.allowFlight = true
        if (saved.flying) player.isFlying = true
        if (!plugin.server.pluginManager.isPluginEnabled("Essentials"))
            player.sendMessage("§6飛行モードを有効にしました。")
      }
      // A false command flag must not revoke another feature's flight (e.g. a RedBull ticket).
      // The early join handler already prevents Essentials from restoring a stale true flag.
      if (
          player.hasPermission("essentials.fly.safelogin") &&
              !player.isInWater &&
              unsafeBelow(player)
      ) {
        player.fallDistance = 0f
        player.allowFlight = true
        player.isFlying = true
      }
      if (!player.hasPermission("essentials.speed")) {
        player.flySpeed = 0.1f
        player.walkSpeed = 0.2f
      } else {
        player.flySpeed = saved.flySpeed.coerceIn(-1f, 1f)
        player.walkSpeed = saved.walkSpeed.coerceIn(-1f, 1f)
      }
      bridge.syncFly(player, saved.flyMode)
      player.isSleepingIgnored =
          player.hasPermission("essentials.sleepingignored") ||
              (isAfk(player) && settings.bool("sleep-ignores-afk-players"))
      store.save(player.uniqueId)
    }
  }

  private fun unsafeBelow(player: Player): Boolean {
    val at = player.location
    var y = Math.round(at.y).toInt()
    var count = 0
    while (y >= player.world.minHeight) {
      val floor = player.world.getBlockAt(at.blockX, y - 1, at.blockZ)
      val feet = player.world.getBlockAt(at.blockX, y, at.blockZ)
      val head = player.world.getBlockAt(at.blockX, y + 1, at.blockZ)
      val unsafe =
          floor.type in hollowMaterials ||
              y > player.world.maxHeight ||
              floor.type in dangerous ||
              floor.blockData is org.bukkit.block.data.type.Bed ||
              feet.type == Material.NETHER_PORTAL ||
              feet.type !in hollowMaterials ||
              head.type !in hollowMaterials
      if (!unsafe) return false
      y--
      count++
      if (count > 2) return true
    }
    return true
  }

  fun saveFlight(player: Player) {
    val s = store.get(player.uniqueId)
    // flymode is command state, not creative/spectator's inherent allowFlight.
    s.flying = player.isFlying
    s.flySpeed = player.flySpeed
    s.walkSpeed = player.walkSpeed
    store.save(player.uniqueId)
  }

  private fun later(action: () -> Unit) {
    lateinit var task: BukkitTask
    task =
        plugin.server.scheduler.runTask(
            plugin,
            Runnable {
              tasks.remove(task)
              if (enabled) action()
            },
        )
    tasks += task
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun beforeJoin(event: PlayerJoinEvent) {
    val saved = store.get(event.player.uniqueId)
    bridge.syncFly(event.player, saved.flyMode)
    bridge.syncNick(event.player, saved.nickname)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onJoin(event: PlayerJoinEvent) {
    join(event.player)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onQuit(event: PlayerQuitEvent) {
    saveFlight(event.player)
    val id = event.player.uniqueId
    activity.remove(id)
    afkPosition.remove(id)
    flightTransfers.remove(id)
    jumpLocked.remove(id)
    event.player.removeMetadata(PlayerStateRules.AFK_METADATA, plugin)
    store.forget(id)
  }

  @EventHandler(priority = EventPriority.LOW)
  fun onDeath(event: PlayerDeathEvent) {
    val player = event.entity
    if (PlayerStateRules.keepExperience(player::hasPermission)) {
      event.keepLevel = true
      event.droppedExp = 0
    }
    if (PlayerStateRules.keepInventory(player::hasPermission)) {
      // If Essentials (or vanilla) already retained it, don't remove matching added loot twice.
      if (!event.keepInventory)
          player.inventory.contents.filterNotNull().forEach { event.drops.remove(it) }
      event.keepInventory = true
      for (slot in 0..40) {
        val item = player.inventory.getItem(slot) ?: continue
        val policy =
            PlayerStateRules.cursePolicy(
                item.containsEnchantment(org.bukkit.enchantments.Enchantment.VANISHING_CURSE),
                item.containsEnchantment(org.bukkit.enchantments.Enchantment.BINDING_CURSE),
                settings.vanishingPolicy,
                settings.bindingPolicy,
            )
        if (policy != "keep") {
          if (policy == "drop") event.drops.add(item.clone())
          player.inventory.setItem(slot, null)
        }
      }
    }
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onTeleport(event: PlayerTeleportEvent) {
    if (
        settings.bool("world-change-preserve-flying") &&
            event.cause in
                listOf(
                    PlayerTeleportEvent.TeleportCause.PLUGIN,
                    PlayerTeleportEvent.TeleportCause.COMMAND,
                ) &&
            event.from.world != event.to.world &&
            event.player.allowFlight &&
            event.player.hasPermission("essentials.fly")
    )
        flightTransfers[event.player.uniqueId] = Bukkit.getCurrentTick() to event.player.isFlying
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onWorld(event: PlayerChangedWorldEvent) {
    val p = event.player
    if (
        settings.bool("world-change-fly-reset") &&
            p.gameMode !in listOf(GameMode.CREATIVE, GameMode.SPECTATOR) &&
            !p.hasPermission("essentials.fly")
    ) {
      p.fallDistance = 0f
      p.isFlying = false
      p.allowFlight = false
    }
    if (settings.bool("world-change-speed-reset")) {
      if (!p.hasPermission("essentials.speed")) {
        p.flySpeed = 0.1f
        p.walkSpeed = 0.2f
      } else {
        // Essentials applies its tiny client refresh adjustment while present; don't multiply
        // twice.
        p.flySpeed =
            if (p.flySpeed > settings.maxFly && !p.hasPermission("essentials.speed.bypass"))
                settings.maxFly
            else if (plugin.server.pluginManager.isPluginEnabled("Essentials")) p.flySpeed
            else p.flySpeed * 0.99999f
        if (p.walkSpeed > settings.maxWalk && !p.hasPermission("essentials.speed.bypass"))
            p.walkSpeed = settings.maxWalk
      }
    }
    flightTransfers.remove(p.uniqueId)?.let { (tick, flying) ->
      if (tick == Bukkit.getCurrentTick() && p.hasPermission("essentials.fly")) {
        p.allowFlight = true
        if (flying) p.isFlying = true
      }
    }
    applyNick(p)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onMove(event: PlayerMoveEvent) {
    if (
        event.from.blockX == event.to.blockX &&
            event.from.blockY == event.to.blockY &&
            event.from.blockZ == event.to.blockZ
    )
        return
    val player = event.player
    val position = afkPosition[player.uniqueId]
    if (position != null && settings.bool("freeze-afk-players")) {
      if (event.to.y >= event.from.blockY + 1) active(player)
      else
          event.to =
              event.from.clone().apply {
                yaw = event.to.yaw
                pitch = event.to.pitch
              }
      return
    }
    if (
        settings.bool("cancel-afk-on-move") &&
            (position == null ||
                position.world != event.to.world ||
                position.distanceSquared(event.to) > 9)
    )
        active(player)
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun onInteract(event: PlayerInteractEvent) {
    // Essentials also counts cancelled interactions (e.g. opening menus in protected regions).
    if (event.action != org.bukkit.event.block.Action.PHYSICAL) interact(event.player)
    if (
        event.player.uniqueId in jumpLocked &&
            event.action.name == "LEFT_CLICK_AIR" &&
            event.player.isFlying
    )
        commands.jump(event.player)
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onCommand(event: PlayerCommandPreprocessEvent) {
    val label = event.message.drop(1).substringBefore(' ').lowercase().substringAfter(':')
    if (label != "afk" && settings.bool("cancel-afk-on-interact"))
        active(event.player, label != "vanish")
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onChat(event: AsyncPlayerChatEvent) {
    if (settings.bool("cancel-afk-on-chat"))
        plugin.server.scheduler.runTask(
            plugin,
            Runnable { if (event.player.isOnline) active(event.player) },
        )
  }

  @EventHandler(priority = EventPriority.LOW, ignoreCancelled = true)
  fun onFish(event: PlayerFishEvent) {
    if (settings.bool("cancel-afk-on-fish")) interact(event.player)
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onDamage(event: EntityDamageEvent) {
    if (frozen(event.entity as? Player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onFood(event: FoodLevelChangeEvent) {
    if (frozen(event.entity as? Player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onRegain(event: EntityRegainHealthEvent) {
    if (
        event.regainReason == EntityRegainHealthEvent.RegainReason.SATIATED &&
            frozen(event.entity as? Player)
    )
        event.isCancelled = true
  }

  private fun frozen(p: Player?) = p != null && isAfk(p) && settings.bool("freeze-afk-players")

  fun toggleJump(player: Player): Boolean =
      if (jumpLocked.remove(player.uniqueId)) false
      else {
        jumpLocked.add(player.uniqueId)
        true
      }

  companion object {
    // Essentials LocationUtil's HOLLOW_MATERIALS, evaluated only with a running server registry.
    private val hollowMaterials by lazy {
      Material.values()
          .filter { it.isBlock && it.isTransparent }
          .toMutableSet()
          .apply {
            remove(Material.BARRIER)
            remove(Material.DIRT_PATH)
            remove(Material.FARMLAND)
            add(Material.LIGHT)
            remove(Material.WATER)
          }
    }
    val dangerous =
        setOf(
            Material.LAVA,
            Material.FIRE,
            Material.SOUL_FIRE,
            Material.CACTUS,
            Material.CAMPFIRE,
            Material.SOUL_CAMPFIRE,
            Material.MAGMA_BLOCK,
            Material.SWEET_BERRY_BUSH,
            Material.WITHER_ROSE,
        )
  }
}
