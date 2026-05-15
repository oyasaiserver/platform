package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.makeItem
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory

class AdminEngine(private val plugin: OyasaiMenu) : Listener {

    private val activePlayers: MutableSet<String> = mutableSetOf()

    fun openAdminMenu(player: Player) {
        if (!player.hasPermission("oyasaimenu.admin")) { player.sendMessage(c("&c管理者権限がありません。")); return }
        player.openInventory(buildInventory())
        activePlayers.add(player.uniqueId.toString())
    }

    private fun buildInventory(): Inventory {
        val inv = Bukkit.createInventory(null, 54, comp("&b⚙ 管理者メニュー"))
        inv.setItem(10, makeItem(Material.EMERALD, "&aリロード",
            listOf("&7全 YAML を再読み込みします", "", "&eクリックで実行")))
        inv.setItem(12, makeItem(Material.WRITABLE_BOOK, "&bアナウンス編集",
            listOf("&7本と羽ペンでお知らせを編集します", "", "&eクリックで本を受け取る")))
        inv.setItem(14, makeItem(Material.CHEST, "&eショップ商品管理",
            listOf(
                "&7コマンドで商品を追加・削除できます",
                "",
                "&f/menuedit shop &7<category> list",
                "&f/menuedit shop &7<category> add <mat> <buy> <sell>",
                "&f/menuedit shop &7<category> remove <index>",
                "",
                "&eクリックでコマンドガイドを表示"
            )))
        inv.setItem(16, makeItem(Material.LIME_CONCRETE, "&a売却ホワイトリスト管理",
            listOf(
                "&7カスタム名付きアイテムの売却を許可",
                "&7手持ちアイテムのデータコンポーネントで登録",
                "",
                "&f/menuedit whitelist list",
                "&f/menuedit whitelist add hand/h &7<売値>",
                "&f/menuedit whitelist remove &7<番号>",
                "",
                "&eクリックでコマンドガイドを表示"
            )))
        inv.setItem(34, makeItem(Material.OAK_DOOR, "&7閉じる", listOf("&7管理者メニューを閉じます")))
        val glass = makeItem(Material.LIGHT_BLUE_STAINED_GLASS_PANE, " ")
        for (i in 0..53) { if (inv.getItem(i) == null) inv.setItem(i, glass) }
        return inv
    }

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        if (!activePlayers.contains(player.uniqueId.toString())) return
        if (event.clickedInventory == player.inventory) { if (event.isShiftClick) event.isCancelled = true; return }
        event.isCancelled = true
        if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
        when (event.rawSlot) {
            10 -> { plugin.reload(); player.sendMessage(c("&aリロードしました。")) }
            12 -> { player.closeInventory(); Bukkit.getScheduler().runTaskLater(plugin, Runnable { plugin.announcementManager.openBookEditor(player) }, 1L) }
            14 -> {
                player.closeInventory()
                player.sendMessage(c("&b--- ショップ商品管理 ---"))
                player.sendMessage(c("&f/menuedit shop &7<category> list"))
                player.sendMessage(c("&f/menuedit shop &7<category> add <material> <buy> <sell>"))
                player.sendMessage(c("&f/menuedit shop &7<category> remove <index>"))
                player.sendMessage(c("&7カテゴリ: &f${plugin.shopLoader.getAllCategories().keys.joinToString(", ")}"))
            }
            16 -> {
                player.closeInventory()
                player.sendMessage(c("&b--- 売却ホワイトリスト管理 ---"))
                player.sendMessage(c("&f/menuedit whitelist list"))
                player.sendMessage(c("&f/menuedit whitelist add hand/h &7<売値>"))
                player.sendMessage(c("&f/menuedit whitelist remove &7<番号>"))
                player.sendMessage(c("&7現在 &f${plugin.sellWhitelistManager.getEntries().size}&7 件登録済み"))
            }
            34 -> player.closeInventory()
        }
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        activePlayers.remove((event.player as? Player)?.uniqueId?.toString() ?: return)
    }
}