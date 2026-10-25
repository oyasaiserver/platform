package com.github.sahyuya.oyasaiMenu.item

import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.Material
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
    private val item: ItemStack = MenuBook.create(),
) : CommandExecutor, Listener {
  private val activatedTicks = mutableMapOf<UUID, Int>()

  fun enable() {
    requireNotNull((plugin as JavaPlugin).getCommand("getmenu")).setExecutor(this)
    plugin.server.pluginManager.registerEvents(this, plugin)
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
    giveItem(sender, copyItem(item))
    sender.sendMessage(" §8► §aYou have received menu item!")
    return true
  }

  @EventHandler
  fun onFirstJoin(event: PlayerJoinEvent) {
    giveOnFirstJoin(event.player)
  }

  internal fun giveOnFirstJoin(player: Player) {
    if (!player.hasPlayedBefore()) giveItem(player, copyItem(item))
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
    val template = item
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
    val template = item
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

internal object MenuBook {
  val name: Component = Component.text("menu本", NamedTextColor.GREEN, TextDecoration.BOLD)
  val lore: List<Component> =
      listOf(
          Component.text("右クリックで", NamedTextColor.GOLD, TextDecoration.BOLD)
              .append(Component.text("/menu", NamedTextColor.BLUE, TextDecoration.BOLD))
              .append(Component.text("代わりに!", NamedTextColor.GOLD, TextDecoration.BOLD))
      )

  fun create(): ItemStack =
      ItemStack(Material.BOOK, 1).apply {
        itemMeta =
            itemMeta.apply {
              displayName(MenuBook.name)
              lore(MenuBook.lore)
            }
      }
}
