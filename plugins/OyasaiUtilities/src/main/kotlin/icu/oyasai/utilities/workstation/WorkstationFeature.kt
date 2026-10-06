package icu.oyasai.utilities.workstation

import icu.oyasai.utilities.Main
import java.net.URI
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabExecutor
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

class WorkstationFeature(private val plugin: Main) : TabExecutor, Listener {
  private val enderViews = mutableMapOf<UUID, Inventory>()
  private val replacedAliases = mutableMapOf<String, Command>()

  fun enable() {
    WorkstationRules.aliases.keys.forEach { name ->
      requireNotNull(plugin.getCommand(name)).apply {
        setExecutor(this@WorkstationFeature)
        tabCompleter = this@WorkstationFeature
      }
    }
    // Essentials refuses to delegate e-prefixed aliases. Only take these aliases from Essentials.
    val commands = plugin.server.commandMap.knownCommands
    mapOf("ec" to "enderchest", "eskull" to "skull").forEach { (alias, name) ->
      val previous = commands[alias]
      if (previous is PluginCommand && previous.plugin.name == "Essentials") {
        replacedAliases[alias] = previous
        commands[alias] = requireNotNull(plugin.getCommand(name))
      }
    }
    plugin.server.pluginManager.registerEvents(this, plugin)
  }

  fun disable() {
    HandlerList.unregisterAll(this)
    // Do not leave writable enderchest views behind when listeners are unregistered.
    enderViews.keys.toList().forEach { Bukkit.getPlayer(it)?.closeInventory() }
    enderViews.clear()
    val commands = plugin.server.commandMap.knownCommands
    replacedAliases.forEach { (alias, previous) ->
      if ((commands[alias] as? PluginCommand)?.plugin == plugin) commands[alias] = previous
    }
    replacedAliases.clear()
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("essentials.${command.name}")) {
      sender.sendMessage("§cこのコマンドを使用する権限がありません。")
      return true
    }
    if (sender !is Player) {
      sender.sendMessage("§cこのコマンドはプレイヤー専用です。")
      return true
    }
    when (command.name) {
      "workbench" -> sender.openWorkbench(null, true)
      "anvil" -> sender.openAnvil(null, true)
      "loom" -> sender.openLoom(null, true)
      "grindstone" -> sender.openGrindstone(null, true)
      "stonecutter" -> sender.openStonecutter(null, true)
      "smithingtable" -> sender.openSmithingTable(null, true)
      "disposal" -> {
        sender.sendMessage("§6廃棄メニューを開いています...")
        sender.openInventory(Bukkit.createInventory(sender, 36, "廃棄"))
      }
      "enderchest" -> openEnderChest(sender, args)
      "hat" -> hat(sender, args)
      "skull" -> skull(sender, args)
    }
    return true
  }

  private fun findPlayer(sender: Player, name: String, selectors: Boolean): Player? {
    if (selectors && name in listOf("@p", "@s")) return sender
    val target =
        try {
          Bukkit.getPlayer(UUID.fromString(name))
        } catch (_: IllegalArgumentException) {
          Bukkit.getPlayerExact(name)
              ?: Bukkit.getPlayer(name)
              ?: Bukkit.getOnlinePlayers().firstOrNull {
                ChatColor.stripColor(it.displayName)?.contains(name, ignoreCase = true) == true
              }
        }
    return target?.takeIf {
      sender.canSee(it) || (selectors && sender.hasPermission("essentials.vanish.interact"))
    }
  }

  private fun openEnderChest(player: Player, args: Array<out String>) {
    val target =
        if (args.isNotEmpty() && player.hasPermission("essentials.enderchest.others")) {
          findPlayer(player, args[0], true)
              ?: run {
                player.sendMessage("§cプレイヤーが見つかりません。")
                return
              }
        } else player
    player.closeInventory()
    player.openInventory(target.enderChest)
    if (target != player) enderViews[player.uniqueId] = target.enderChest
  }

  private fun readOnly(player: Player, top: Inventory): Boolean =
      enderViews[player.uniqueId] == top && !player.hasPermission("essentials.enderchest.modify")

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun onClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    if (readOnly(player, event.view.topInventory)) {
      event.isCancelled = true
      plugin.server.scheduler.runTask(plugin, Runnable { player.updateInventory() })
    }
  }

  @EventHandler(priority = EventPriority.LOWEST, ignoreCancelled = true)
  fun onDrag(event: InventoryDragEvent) {
    val player = event.whoClicked as? Player ?: return
    if (readOnly(player, event.view.topInventory)) event.isCancelled = true
  }

  @EventHandler
  fun onClose(event: InventoryCloseEvent) {
    enderViews.remove(event.player.uniqueId)
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    enderViews.remove(event.player.uniqueId)
  }

  private fun hat(player: Player, args: Array<out String>) {
    val inv = player.inventory
    val head = inv.helmet
    if (!WorkstationRules.removeHat(args.firstOrNull())) {
      val hand = inv.itemInMainHand
      val prefix = "essentials.hat.prevent-type."
      // Match Essentials' exact effective permission lookup, including explicit false exceptions.
      fun exact(node: String) =
          player.effectivePermissions.firstOrNull { it.permission.equals(node, true) }?.value
      if (
          hand.type == Material.AIR ||
              WorkstationRules.preventHat(
                  exact(prefix + "*"),
                  exact(prefix + hand.type.name.lowercase()),
              )
      ) {
        player.sendMessage("§6アイテムをかぶるには、それを手に持つ必要があります。")
        return
      }
      if (hand.type.maxDurability.toInt() != 0) {
        player.sendMessage("§cこのアイテムをかぶることは出来ません。")
        return
      }
      if (binding(player, head)) return
      inv.setHelmet(hand)
      inv.setItemInMainHand(head)
      player.sendMessage("§6帽子をかぶりました。")
    } else {
      if (head == null || head.type == Material.AIR) {
        player.sendMessage("§cあなたは何も被っていません。")
        return
      }
      if (binding(player, head)) return
      inv.setHelmet(null)
      give(player, head)
      player.sendMessage("§6帽子を外しました。")
    }
  }

  private fun binding(player: Player, head: ItemStack?): Boolean {
    if (
        head?.containsEnchantment(Enchantment.BINDING_CURSE) == true &&
            !player.hasPermission("essentials.hat.ignore-binding")
    ) {
      player.sendMessage("§c束縛の呪いで帽子は外せません！")
      return true
    }
    return false
  }

  private fun skull(player: Player, args: Array<out String>) {
    val recipientName = WorkstationRules.skullRecipient(args)
    val recipient =
        if (recipientName != null)
            findPlayer(player, recipientName, false)
                ?: run {
                  player.sendMessage("§cプレイヤーが見つかりません。")
                  return
                }
        else player
    val owner =
        try {
          WorkstationRules.skullOwner(
              args.firstOrNull(),
              player.name,
              recipient.hasPermission("essentials.skull.others"),
          )
        } catch (e: IllegalArgumentException) {
          player.sendMessage("§c${e.message}")
          return
        }
    val inv = player.inventory
    val mainHand = inv.itemInMainHand.type != Material.AIR
    val hand = if (mainHand) inv.itemInMainHand else inv.itemInOffHand
    val modifying =
        recipient == player && hand.type in setOf(Material.PLAYER_HEAD, Material.PLAYER_WALL_HEAD)
    if (
        !modifying &&
            !player.hasPermission(
                if (recipient == player) "essentials.skull.spawn"
                else "essentials.skull.spawn.others"
            )
    ) {
      player.sendMessage("§cプレイヤーの頭を手に持つ必要があります。")
      return
    }
    val original = hand.clone()
    val stack = if (modifying) hand.clone() else ItemStack(Material.PLAYER_HEAD)
    val meta = stack.itemMeta as SkullMeta
    if (meta.hasOwner() && !player.hasPermission("essentials.skull.modify")) {
      player.sendMessage("§cこの頭の所有者を変更する権限がありません。")
      return
    }
    // HTTP profile resolution must never block the server thread.
    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          val shortOwner = if (WorkstationRules.isTexture(owner)) owner.take(7) else owner
          try {
            val profile =
                if (WorkstationRules.isTexture(owner)) {
                  Bukkit.createPlayerProfile(UUID.randomUUID()).also {
                    it.setTextures(
                        it.textures.apply {
                          setSkin(URI("https://textures.minecraft.net/texture/$owner").toURL())
                        }
                    )
                  }
                } else Bukkit.createPlayerProfile(null, owner).update().join()
            meta.setOwnerProfile(profile)
            if (!meta.hasOwner()) meta.setOwner(owner)
          } catch (_: Exception) {
            meta.setOwner(owner)
          }
          meta.setDisplayName("§fSkull of $shortOwner")
          if (!plugin.isEnabled) return@Runnable
          plugin.server.scheduler.runTask(
              plugin,
              Runnable applySkull@{
                if (!recipient.isOnline) {
                  player.sendMessage("§c受取人がオフラインになったため、頭の操作を中止しました。")
                  return@applySkull
                }
                stack.itemMeta = meta
                if (!modifying) {
                  give(recipient, stack)
                  recipient.sendMessage("§6${shortOwner} の頭を受け取りました。")
                  if (recipient != player)
                      player.sendMessage("§6${recipient.name} に ${shortOwner} の頭を渡しました。")
                } else {
                  // Do not overwrite an item moved while the profile request was in flight.
                  val current = if (mainHand) inv.itemInMainHand else inv.itemInOffHand
                  if (current != original) {
                    player.sendMessage("§c手のアイテムが変わったため、頭の変更を中止しました。")
                    return@applySkull
                  }
                  if (mainHand) inv.setItemInMainHand(stack) else inv.setItemInOffHand(stack)
                  player.sendMessage("§6${shortOwner} の頭に変更しました。")
                }
              },
          )
        },
    )
  }

  private fun give(player: Player, stack: ItemStack) {
    player.inventory.addItem(stack).values.forEach {
      player.world.dropItemNaturally(player.location, it)
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (sender !is Player || !sender.hasPermission("essentials.${command.name}") || args.isEmpty())
        return emptyList()
    val players = Bukkit.getOnlinePlayers().filter { sender.canSee(it) }.map { it.name }
    val options =
        when {
          command.name == "hat" && args.size == 1 -> listOf("remove", "wear")
          command.name == "enderchest" &&
              args.size == 1 &&
              sender.hasPermission("essentials.enderchest.others") -> players
          command.name == "skull" && args.size <= 2 ->
              if (sender.hasPermission("essentials.skull.others")) players else listOf(sender.name)
          else -> emptyList()
        }
    return options.filter { it.startsWith(args.last(), ignoreCase = true) }
  }
}
