package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.Main
import java.io.File
import java.util.UUID
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.inventory.CraftItemEvent
import org.bukkit.event.player.PlayerInteractAtEntityEvent
import org.bukkit.event.player.PlayerInteractEntityEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack

class CommandItems(private val plugin: Main) : CommandExecutor, Listener {
  private val store = CommandItemStore(File(plugin.dataFolder, "command-items.db"))
  private val items = linkedMapOf<String, ItemStack>()
  private val activatedTicks = mutableMapOf<UUID, Int>()
  private var ready = false

  fun enable() {
    listOf("savedyeitem", "savemenuitem", "getdye", "getmenu").forEach {
      requireNotNull(plugin.getCommand(it)).setExecutor(this)
    }
    // 保存の失敗はこの機能だけを無効にし、他の機能の有効化を妨げない。
    try {
      store.open()
      listOf("dye", "menu").forEach { name ->
        store.load(name)?.let { items[name] = ItemStack.deserializeBytes(it) }
      }
      ready = true
      plugin.server.pluginManager.registerEvents(this, plugin)
    } catch (failure: Exception) {
      plugin.logger.log(
          Level.SEVERE,
          "Command item storage failed to start; command items are unavailable.",
          failure,
      )
      disable()
    }
  }

  fun disable() {
    ready = false
    runCatching { store.close() }
        .onFailure { plugin.logger.log(Level.SEVERE, "Failed to close command item storage.", it) }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤー専用です。")
      return true
    }
    if (args.isNotEmpty()) return false
    if (!ready) {
      sender.sendMessage("§cアイテム保存機能は現在利用できません。")
      return true
    }
    val dye = command.name == "savedyeitem" || command.name == "getdye"
    val name = if (dye) "dye" else "menu"
    val title = if (dye) "Dye" else "Menu"
    if (command.name.startsWith("save")) {
      val item = sender.inventory.itemInMainHand.clone()
      try {
        store.save(name, item.serializeAsBytes())
        items[name] = item
        sender.sendMessage(" §8► §e$title item has been saved！")
      } catch (failure: Exception) {
        plugin.logger.log(Level.SEVERE, "Failed to save $name command item.", failure)
        sender.sendMessage("§cアイテムの保存に失敗しました。")
      }
    } else {
      items[name]?.let { giveItem(sender, it.asOne()) }
      sender.sendMessage(" §8► §aYou have received $name item!")
    }
    return true
  }

  @EventHandler
  fun onFirstJoin(event: PlayerJoinEvent) {
    if (!event.player.hasPlayedBefore()) items.values.forEach { giveItem(event.player, it.clone()) }
  }

  @EventHandler
  fun onRightClick(event: PlayerInteractEvent) {
    if (event.action != Action.RIGHT_CLICK_AIR && event.action != Action.RIGHT_CLICK_BLOCK) return
    if (activate(event.player)) event.isCancelled = true
  }

  @EventHandler
  fun onEntityClick(event: PlayerInteractEntityEvent) {
    if (activate(event.player)) event.isCancelled = true
  }

  @EventHandler
  fun onEntityAtClick(event: PlayerInteractAtEntityEvent) {
    if (activate(event.player)) event.isCancelled = true
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    activatedTicks.remove(event.player.uniqueId)
  }

  private fun activate(player: Player): Boolean {
    val held = player.inventory.itemInMainHand
    val matching = items.filterValues { !it.type.isAir && held.isSimilar(it) }
    if (matching.isEmpty()) return false
    // Skript と同様、両手・エンティティの重複イベントでも1 tickに1回だけ実行する。
    val tick = Bukkit.getCurrentTick()
    if (activatedTicks.put(player.uniqueId, tick) == tick) return true
    matching.keys.forEach { name ->
      player.performCommand(if (name == "dye") "painttools dye" else "menu")
    }
    return true
  }

  @EventHandler
  fun onCraft(event: CraftItemEvent) {
    items.forEach { (name, item) ->
      if (!item.type.isAir && event.inventory.contents.any { it?.isSimilar(item) == true }) {
        event.isCancelled = true
        event.whoClicked.sendMessage(" §8► §cYou can not use the $name item in crafting!")
      }
    }
  }
}
