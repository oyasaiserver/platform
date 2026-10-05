package com.github.sahyuya.oyasaiMenu.item

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
import org.bukkit.plugin.Plugin
import org.bukkit.plugin.java.JavaPlugin

class MenuItem(
    private val plugin: Plugin,
    private val currentTick: () -> Int = Bukkit::getCurrentTick,
    private val matches: (ItemStack, ItemStack) -> Boolean = { held, template ->
      !template.type.isAir && held.isSimilar(template)
    },
    private val copyItem: (ItemStack) -> ItemStack = { it.clone() },
) : CommandExecutor, Listener {
  private val store = ItemTemplateStore(File(plugin.dataFolder, "command-items.db"))
  internal var item: ItemStack? = null
  private val activatedTicks = mutableMapOf<UUID, Int>()
  private var ready = false

  fun enable() {
    listOf("savemenuitem", "getmenu").forEach {
      requireNotNull((plugin as JavaPlugin).getCommand(it)).setExecutor(this)
    }
    // 保存の失敗はこの機能だけを無効にし、他の機能の有効化を妨げない。
    try {
      store.open()
      item = store.load("menu")?.let { ItemStack.deserializeBytes(it) }
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
    if (command.name == "savemenuitem") {
      val saved = sender.inventory.itemInMainHand.clone()
      try {
        store.save("menu", saved.serializeAsBytes())
        item = saved
        sender.sendMessage(" §8► §eMenu item has been saved！")
      } catch (failure: Exception) {
        plugin.logger.log(Level.SEVERE, "Failed to save menu command item.", failure)
        sender.sendMessage("§cアイテムの保存に失敗しました。")
      }
    } else {
      item?.let { giveItem(sender, it.asOne()) }
      sender.sendMessage(" §8► §aYou have received menu item!")
    }
    return true
  }

  @EventHandler
  fun onFirstJoin(event: PlayerJoinEvent) {
    giveOnFirstJoin(event.player)
  }

  internal fun giveOnFirstJoin(player: Player) {
    if (!player.hasPlayedBefore()) item?.let { giveItem(player, copyItem(it)) }
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

  internal fun activate(player: Player): Boolean {
    val template = item ?: return false
    val held = player.inventory.itemInMainHand
    if (!matches(held, template)) return false
    // Skript と同様、両手・エンティティの重複イベントでも1 tickに1回だけ実行する。
    val tick = currentTick()
    if (activatedTicks.put(player.uniqueId, tick) == tick) return true
    player.performCommand("menu")
    return true
  }

  @EventHandler
  fun onCraft(event: CraftItemEvent) {
    if (cancelCraft(event.inventory.contents) { event.whoClicked.sendMessage(it) }) {
      event.isCancelled = true
    }
  }

  internal fun cancelCraft(
      contents: Array<out ItemStack?>,
      sendMessage: (String) -> Unit,
  ): Boolean {
    val template = item ?: return false
    if (!contents.any { it != null && matches(it, template) }) return false
    sendMessage(" §8► §cYou can not use the menu item in crafting!")
    return true
  }

  private fun giveItem(player: Player, stack: ItemStack) {
    player.inventory.addItem(stack).values.forEach {
      player.world.dropItemNaturally(player.location, it)
    }
  }
}
