package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.MenuAction
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

class SpecialMenuEngine(private val plugin: OyasaiMenu) : Listener {

  fun open(player: Player, target: String, action: MenuAction? = null) {
    if (!player.isOp) {
      player.sendMessage(c("&c特殊メニューはOP限定です。"))
      return
    }
    when (target.lowercase()) {
      "online_players",
      "online-players",
      "players" -> openOnlinePlayers(player, 0)
      "confirm" -> {
        val command = action?.let { it.getString("command", it.getString("confirm_command")) } ?: ""
        if (command.isBlank()) {
          player.sendMessage(c("&cconfirm 特殊メニューには command が必要です。"))
          return
        }
        openConfirmCommand(player, command, action?.getString("mode", "player") ?: "player")
      }
      else -> player.sendMessage(c("&c未知の特殊メニューです: $target"))
    }
  }

  fun openOnlinePlayers(player: Player, page: Int) {
    if (!player.isOp) {
      player.sendMessage(c("&c特殊メニューはOP限定です。"))
      return
    }
    val players = Bukkit.getOnlinePlayers().sortedBy { it.name.lowercase() }
    val maxPage = ((players.size - 1).coerceAtLeast(0)) / 45
    val safePage = page.coerceIn(0, maxPage)
    val inv =
        Bukkit.createInventory(
            OnlinePlayersHolder(safePage), 54, comp("&8オンラインプレイヤー (${players.size})"))
    fill(inv, Material.GRAY_STAINED_GLASS_PANE)
    players.drop(safePage * 45).take(45).forEachIndexed { index, target ->
      inv.setItem(index, playerHead(target))
    }
    inv.setItem(45, item(Material.ARROW, "&e前のページ", "&7現在: ${safePage + 1} / ${maxPage + 1}"))
    inv.setItem(49, item(Material.ENDER_CHEST, "&aメインメニュー", "&7root を開きます"))
    inv.setItem(53, item(Material.ARROW, "&e次のページ", "&7現在: ${safePage + 1} / ${maxPage + 1}"))
    player.openInventory(inv)
  }

  fun openConfirmCommand(player: Player, command: String, mode: String = "player") {
    if (!player.isOp) {
      player.sendMessage(c("&c確認メニューはOP限定です。"))
      return
    }
    val inv = Bukkit.createInventory(ConfirmCommandHolder(command, mode), 54, comp("&8コマンド実行確認"))
    fill(inv, Material.GRAY_STAINED_GLASS_PANE)
    inv.setItem(
        13, item(Material.COMMAND_BLOCK, "&f実行予定", "&7mode: &f$mode", "&7command: &e$command"))
    inv.setItem(20, item(Material.LIME_CONCRETE, "&a実行する", "&7このコマンドを実行します"))
    inv.setItem(24, item(Material.RED_CONCRETE, "&cキャンセル", "&7何もせず閉じます"))
    player.openInventory(inv)
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    when (val holder = event.inventory.holder) {
      is OnlinePlayersHolder -> handleOnlinePlayersClick(event, player, holder)
      is ConfirmCommandHolder -> handleConfirmClick(event, player, holder)
      else -> return
    }
  }

  private fun handleOnlinePlayersClick(
      event: InventoryClickEvent,
      player: Player,
      holder: OnlinePlayersHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (!player.isOp) {
      player.closeInventory()
      player.sendMessage(c("&c特殊メニューはOP限定です。"))
      return
    }
    when (event.rawSlot) {
      45 -> openOnlinePlayers(player, holder.page - 1)
      49 -> plugin.menuEngine.openMenu(player, "root")
      53 -> openOnlinePlayers(player, holder.page + 1)
      in 0..44 -> {
        val targetId =
            event.currentItem?.itemMeta?.let { meta ->
              (meta as? SkullMeta)?.owningPlayer?.uniqueId
            } ?: return
        val target = Bukkit.getPlayer(targetId) ?: return
        player.closeInventory()
        player.performCommand("tp ${target.name}")
      }
    }
  }

  private fun handleConfirmClick(
      event: InventoryClickEvent,
      player: Player,
      holder: ConfirmCommandHolder
  ) {
    event.isCancelled = true
    if (event.clickedInventory != event.inventory) return
    if (!player.isOp) {
      player.closeInventory()
      player.sendMessage(c("&c確認メニューはOP限定です。"))
      return
    }
    when (event.rawSlot) {
      20 -> {
        player.closeInventory()
        plugin.parameterCommandEngine.executeCommand(player, holder.command, holder.mode)
      }
      24 -> player.closeInventory()
    }
  }

  private fun playerHead(target: Player): ItemStack {
    val item = ItemStack(Material.PLAYER_HEAD)
    val meta = item.itemMeta as? SkullMeta ?: return item
    meta.owningPlayer = target
    meta.displayName(comp("&a${target.name}"))
    meta.lore(listOf(comp("&7左クリックで /tp ${target.name}")))
    item.itemMeta = meta
    return item
  }

  private fun fill(inv: Inventory, mat: Material) {
    val glass = item(mat, " ")
    for (i in 0 until inv.size) inv.setItem(i, glass)
  }

  private fun item(mat: Material, name: String, vararg lore: String): ItemStack {
    val item = ItemStack(mat)
    val meta = item.itemMeta ?: return item
    meta.displayName(comp(name))
    if (lore.isNotEmpty()) meta.lore(lore.map { comp(it) })
    meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES)
    item.itemMeta = meta
    return item
  }

  private class OnlinePlayersHolder(val page: Int) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }

  private class ConfirmCommandHolder(val command: String, val mode: String) : InventoryHolder {
    override fun getInventory(): Inventory = Bukkit.createInventory(this, 54)
  }
}
