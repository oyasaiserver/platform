package icu.oyasai.utilities.creative_management

import java.io.File
import java.nio.file.Files
import java.util.Base64
import java.util.UUID
import java.util.logging.Level
import org.bukkit.GameMode
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabCompleter
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityPickupItemEvent
import org.bukkit.event.entity.PlayerDeathEvent
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerDropItemEvent
import org.bukkit.event.player.PlayerGameModeChangeEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerSwapHandItemsEvent
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

/**
 * shortcut: Temporary workaround for the unmodified Zombies JAR. Zombies must eventually merge into
 * OyasaiGames and use the protection service directly; remove this adapter and its reflection when
 * that migration is complete.
 */
internal class ZombiesCompatibility(
    private val plugin: JavaPlugin,
    private val protection: MinigameProtection,
) : Listener {
  private val directory = File(plugin.dataFolder, "CreativeManagement/minigames/zombies")
  private val pending = mutableSetOf<UUID>()
  private var access: ZombiesAccess? = null
  private var task: BukkitTask? = null
  private var restoreCommand: (() -> Unit)? = null

  fun enable() {
    (if (directory.exists()) checkNotNull(directory.listFiles()) { "Cannot read Zombies snapshots" }
        else emptyArray())
        .filter { it.extension == "yml" }
        .forEach {
          val id = UUID.fromString(it.nameWithoutExtension)
          pending.add(id)
          protection.acquire(id, OWNER)
        }
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.server.pluginManager.getPlugin("Zombies")?.takeIf { it.isEnabled }?.let(::attach)
    task = plugin.server.scheduler.runTaskTimer(plugin, Runnable { tick() }, 1L, 1L)
  }

  fun disable() {
    task?.cancel()
    // Native shutdown schedules mode-settle tasks, so run it while Zombies is still enabled.
    runCatching { access?.stopBeforeDisable() }
        .onFailure {
          plugin.logger.log(
              Level.SEVERE,
              "Zombies pre-disable recovery failed; snapshots retained",
              it,
          )
        }
    // Keep disk snapshots and holds: Zombies may still run its shutdown restoration later.
    restoreCommand?.invoke()
    restoreCommand = null
    access = null
  }

  private fun attach(zombies: Plugin) {
    try {
      restoreCommand?.invoke()
      restoreCommand = null
      access = ZombiesAccess(zombies)
      val native =
          plugin.server.getPluginCommand("zombies:zombies") ?: error("Missing Zombies command")
      check(native.plugin === zombies)
      restoreCommand = interceptZombiesCommand(native, ::beforeCommand, ::tick)
    } catch (e: Exception) {
      access = null
      plugin.logger.log(
          Level.SEVERE,
          "Unsupported Zombies internals; disabling Zombies to protect inventories. Merge Zombies into OyasaiGames to remove this workaround.",
          e,
      )
      plugin.server.pluginManager.disablePlugin(zombies)
    }
  }

  @EventHandler
  fun enabled(event: PluginEnableEvent) {
    if (event.plugin.name == "Zombies") attach(event.plugin)
  }

  // Wrap the actual executor: GUI performCommand/dispatchCommand bypass preprocess events.
  private fun beforeCommand(sender: CommandSender, args: Array<out String>): Boolean {
    val action = args.getOrNull(0)?.lowercase() ?: return true
    val target =
        when (action) {
          "join",
          "rejoin" -> sender as? Player
          "forcejoin" ->
              if (sender.hasPermission("zombies.command.forcejoin"))
                  args.getOrNull(1)?.let(plugin.server::getPlayerExact)
              else null
          else -> null
        } ?: return true
    return try {
      val zombies = access ?: error("Zombies inventory compatibility is unavailable")
      if (!zombies.member(target.uniqueId)) begin(target)
      true
    } catch (e: Exception) {
      sender.sendMessage("§c持ち物の保護を開始できないため、Zombies への参加を中止しました。")
      plugin.logger.log(Level.SEVERE, "Zombies inventory protection failed", e)
      false
    }
  }

  // Also covers programmatic force-joins before CreativeManagement observes the mode change.
  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun mode(event: PlayerGameModeChangeEvent) {
    val zombies = access ?: return
    try {
      if (zombies.member(event.player.uniqueId)) begin(event.player)
    } catch (e: Exception) {
      event.isCancelled = true
      plugin.logger.log(Level.SEVERE, "Zombies mode change blocked: inventory protection failed", e)
      plugin.server.pluginManager.disablePlugin(zombies.plugin)
    }
  }

  private fun recovering(player: Player): Boolean =
      player.uniqueId in pending && (access?.member(player.uniqueId) != true)

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun recoveringCommand(event: PlayerCommandPreprocessEvent) {
    if (recovering(event.player)) {
      event.isCancelled = true
      event.player.sendMessage("§e持ち物を復元中です。少し待ってください。")
    }
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun click(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (recovering(player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun drag(event: InventoryDragEvent) {
    val player = event.whoClicked as? Player ?: return
    if (recovering(player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun drop(event: PlayerDropItemEvent) {
    if (recovering(event.player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun pickup(event: EntityPickupItemEvent) {
    val player = event.entity as? Player ?: return
    if (recovering(player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun interact(event: PlayerInteractEvent) {
    if (recovering(event.player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun swap(event: PlayerSwapHandItemsEvent) {
    if (recovering(event.player)) event.isCancelled = true
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun death(event: PlayerDeathEvent) {
    if (!recovering(event.entity)) return
    event.drops.clear()
    event.droppedExp = 0
    event.keepInventory = true
    event.keepLevel = true
  }

  private fun begin(player: Player) {
    val id = player.uniqueId
    if (id in pending) return
    protection.checkAvailable(id, OWNER)
    check(player.itemOnCursor.type.isAir) { "Empty the cursor before joining Zombies" }
    player.closeInventory()
    check(player.itemOnCursor.type.isAir) { "Inventory close left an item on the cursor" }
    val yaml = YamlConfiguration()
    yaml.set("mode", player.gameMode.name)
    yaml.set("held-slot", player.inventory.heldItemSlot)
    yaml.set(
        "inventory",
        player.inventory.contents.map {
          it?.let { item -> Base64.getEncoder().encodeToString(item.serializeAsBytes()) }
        },
    )
    durableInventoryWrite(file(id), yaml.saveToString().toByteArray(Charsets.UTF_8))
    pending.add(id)
    protection.acquire(id, OWNER)
  }

  private fun tick() {
    for (id in pending.toList()) {
      val player = plugin.server.getPlayer(id)?.takeIf { it.isOnline } ?: continue
      try {
        if (access?.busy(id) == true || player.isDead) continue
        restore(player)
      } catch (e: Exception) {
        plugin.logger.log(
            Level.SEVERE,
            "Zombies recovery failed; snapshot and protection retained for $id",
            e,
        )
        player.kickPlayer("持ち物の復元が未完了です。管理者に連絡してください。")
      }
    }
  }

  private fun restore(player: Player) {
    val id = player.uniqueId
    val yaml = YamlConfiguration().also { it.load(file(id)) }
    val mode = GameMode.valueOf(yaml.getString("mode") ?: error("Missing recovery mode"))
    val inventory =
        (yaml.getList("inventory") ?: error("Missing recovery inventory"))
            .map {
              if (it == null) null
              else ItemStack.deserializeBytes(Base64.getDecoder().decode(it as String))
            }
            .toTypedArray()
    check(inventory.size == player.inventory.contents.size) { "Invalid recovery inventory size" }
    protection.acquire(id, OWNER)
    player.closeInventory()
    player.gameMode = mode
    check(player.gameMode == mode) { "Recovery game mode was cancelled" }
    player.setItemOnCursor(null)
    player.inventory.contents = inventory
    player.inventory.heldItemSlot = yaml.getInt("held-slot").coerceIn(0, 8)
    player.saveData()
    protection.release(player, OWNER)
    Files.delete(file(id).toPath())
    pending.remove(id)
  }

  private fun file(id: UUID) = File(directory, "$id.yml")

  private companion object {
    const val OWNER = "zombies-compatibility"
  }
}

/** All knowledge of private Zombies implementation lives here, never in normal game handling. */
internal class ZombiesAccess(val plugin: Plugin) {
  private fun field(instance: Any, name: String): Any =
      instance.javaClass.getDeclaredField(name).let {
        it.isAccessible = true
        it.get(instance) ?: error("Zombies field $name is null")
      }

  private val game = field(plugin, "arenaManager")
  private val arena = game.javaClass.getMethod("getArena", UUID::class.java)
  private val offline = field(game, "pendingOfflineRestores") as Map<*, *>
  private val coordinator = field(game, "gameModeSwitchCoordinator")
  private val tasks = field(coordinator, "tasks")
  private val operationIds = tasks.javaClass.getMethod("operationIds")
  private val shutdown = game.javaClass.getMethod("shutdown")

  fun stopBeforeDisable() {
    if (plugin.isEnabled) shutdown.invoke(game)
  }

  fun member(id: UUID): Boolean = plugin.isEnabled && arena.invoke(game, id) != null

  fun busy(id: UUID): Boolean {
    if (!plugin.isEnabled) return false
    return member(id) ||
        offline.containsKey(id) ||
        (operationIds.invoke(tasks) as Set<*>).contains("game-mode-switch:$id")
  }
}

/** Preserve native dispatch and tab completion, including GUI and console command callers. */
internal fun interceptZombiesCommand(
    command: PluginCommand,
    before: (CommandSender, Array<out String>) -> Boolean,
    after: () -> Unit,
): () -> Unit {
  val original = command.executor
  val completer = command.tabCompleter
  val wrapper = CommandExecutor { sender, cmd, label, args ->
    if (!before(sender, args)) true
    else
        try {
          original.onCommand(sender, cmd, label, args)
        } finally {
          after()
        }
  }
  if (completer == null && original is TabCompleter) command.tabCompleter = original
  command.setExecutor(wrapper)
  return {
    if (command.executor === wrapper) {
      command.setExecutor(original)
      command.tabCompleter = completer
    }
  }
}
