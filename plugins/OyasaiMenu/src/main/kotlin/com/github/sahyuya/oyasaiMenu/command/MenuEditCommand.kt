package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import net.kyori.adventure.text.serializer.gson.GsonComponentSerializer
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class MenuEditCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {
    private val plain = PlainTextComponentSerializer.plainText()

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        val player = sender as? Player
            ?: run { sender.sendMessage("§cゲーム内から実行してください。"); return true }
        if (!player.hasPermission("oyasaimenu.admin")) { player.sendMessage(c("&c編集権限がありません。")); return true }
        when (args.getOrNull(0)?.lowercase()) {
            "announce"  -> handleAnnounce(player, args.drop(1).toTypedArray())
            "shop"      -> handleShop(player, args.drop(1).toTypedArray())
            "whitelist" -> handleWhitelist(player, args.drop(1).toTypedArray())
            else        -> sendHelp(player)
        }
        return true
    }

    private fun handleAnnounce(player: Player, args: Array<String>) {
        when (args.getOrNull(0)?.lowercase()) {
            "title" -> {
                if (args.size < 2) { player.sendMessage(c("&c使い方: /menuedit announce title <テキスト|JSON>")); return }
                plugin.announcementManager.setTitle(parseTextInput(args.drop(1).joinToString(" ")))
                player.sendMessage(c("&aタイトルを更新しました。"))
            }
            "line" -> {
                if (args.size < 3) { player.sendMessage(c("&c使い方: /menuedit announce line <番号> <テキスト|JSON>")); return }
                val lineNum = args[1].toIntOrNull()?.minus(1)
                if (lineNum == null || lineNum < 0) { player.sendMessage(c("&c番号は 1 以上の整数で指定してください。")); return }
                plugin.announcementManager.setLine(lineNum, parseTextInput(args.drop(2).joinToString(" ")))
                player.sendMessage(c("&a${lineNum + 1} 行目を更新しました。"))
            }
            "remove-line" -> {
                val lineNum = args.getOrNull(1)?.toIntOrNull()?.minus(1)
                if (lineNum == null || lineNum < 0) { player.sendMessage(c("&c使い方: /menuedit announce remove-line <番号>")); return }
                val err = plugin.announcementManager.removeLine(lineNum)
                if (err != null) player.sendMessage(c("&c$err")) else player.sendMessage(c("&a${lineNum + 1} 行目を削除しました。"))
            }
            "book" -> {
                player.closeInventory()
                Bukkit.getScheduler().runTaskLater(plugin, Runnable { plugin.announcementManager.openBookEditor(player) }, 1L)
            }
            "show" -> {
                val ann = plugin.announcementManager.getAnnouncements().firstOrNull()
                if (ann == null) { player.sendMessage(c("&7お知らせが設定されていません。")); return }
                player.sendMessage(c("&b=== 現在のお知らせ ==="))
                player.sendMessage(c("&7タイトル: ${ann.title}"))
                ann.body.forEachIndexed { i, line -> player.sendMessage(c("&7${i+1}行目: $line")) }
            }
            else -> {
                player.sendMessage(c("&b--- /menuedit announce ---"))
                player.sendMessage(c("&f/menuedit announce title &7<テキスト/JSON>"))
                player.sendMessage(c("&f/menuedit announce line &7<番号> <テキスト/JSON>"))
                player.sendMessage(c("&f/menuedit announce remove-line &7<番号>"))
                player.sendMessage(c("&f/menuedit announce book"))
                player.sendMessage(c("&f/menuedit announce show"))
            }
        }
    }

    private fun handleShop(player: Player, args: Array<String>) {
        val categoryId = args.getOrNull(0)?.lowercase()
        if (categoryId == null) {
            player.sendMessage(c("&b--- /menuedit shop ---"))
            player.sendMessage(c("&f/menuedit shop &7<category> list"))
            player.sendMessage(c("&f/menuedit shop &7<category> add <material> <buy> <sell>"))
            player.sendMessage(c("&f/menuedit shop &7<category> remove <index>"))
            player.sendMessage(c("&7カテゴリ: ${plugin.shopLoader.getAllCategories().keys.joinToString(", ")}"))
            return
        }
        val category = plugin.shopLoader.getCategory(categoryId)
        when (args.getOrNull(1)?.lowercase()) {
            "list" -> {
                if (category == null) { player.sendMessage(c("&cカテゴリ '$categoryId' が見つかりません。")); return }
                player.sendMessage(c("&b--- ショップ: $categoryId (${category.items.size}種) ---"))
                category.items.forEachIndexed { i, item ->
                    player.sendMessage(c("&7${i+1}. &f${item.customName ?: item.materialId} &7buy:&a${item.buyPrice} &7sell:&b${item.sellPrice}"))
                }
            }
            "add" -> {
                if (args.size < 5) { player.sendMessage(c("&c使い方: /menuedit shop <category> add <material> <buy> <sell>")); return }
                val matName   = args[2].uppercase()
                val buyPrice  = args[3].toDoubleOrNull() ?: run { player.sendMessage(c("&c買値が不正です。")); return }
                val sellPrice = args[4].toDoubleOrNull() ?: run { player.sendMessage(c("&c売値が不正です。")); return }
                runCatching { org.bukkit.Material.valueOf(matName) }.getOrElse { player.sendMessage(c("&c不明なマテリアル: $matName")); return }
                if (plugin.shopLoader.addItem(categoryId, matName.lowercase(), buyPrice, sellPrice) != null) {
                    plugin.shopLoader.reload()
                    player.sendMessage(c("&a'$categoryId' に ${matName.lowercase()} を追加しました。"))
                } else player.sendMessage(c("&cカテゴリ '$categoryId' が見つかりません。"))
            }
            "remove" -> {
                if (category == null) { player.sendMessage(c("&cカテゴリ '$categoryId' が見つかりません。")); return }
                val index = args.getOrNull(2)?.toIntOrNull()?.minus(1)
                if (index == null || index < 0 || index >= category.items.size) {
                    player.sendMessage(c("&c番号は 1〜${category.items.size} で指定してください。")); return
                }
                val removed = plugin.shopLoader.removeItem(categoryId, index)
                if (removed != null) { plugin.shopLoader.reload(); player.sendMessage(c("&a${index+1}番目 ($removed) を削除しました。")) }
                else player.sendMessage(c("&c削除に失敗しました。"))
            }
            else -> player.sendMessage(c("&c使い方: /menuedit shop <category> [list/add/remove]"))
        }
    }

    private fun handleWhitelist(player: Player, args: Array<String>) {
        when (args.getOrNull(0)?.lowercase()) {
            "list" -> {
                val entries = plugin.sellWhitelistManager.getEntries()
                if (entries.isEmpty()) { player.sendMessage(c("&7売却ホワイトリストは空です。")); return }
                player.sendMessage(c("&b--- 売却ホワイトリスト (${entries.size}件) ---"))
                entries.forEachIndexed { i, e ->
                    player.sendMessage(c("&7${i+1}. &f${e.displayName} &7(${e.materialName.lowercase()}) &a売値: ${e.sellPrice}"))
                }
            }
            "add" -> {
                val target = args.getOrNull(1)?.lowercase()
                if (target != "hand") { player.sendMessage(c("&c使い方: /menuedit whitelist add hand <売値>")); return }
                val sellPrice = args.getOrNull(2)?.toDoubleOrNull()
                if (sellPrice == null || sellPrice <= 0) { player.sendMessage(c("&c売値に正の数値を指定してください。")); return }
                val item = player.inventory.itemInMainHand
                if (item.type.isAir) { player.sendMessage(c("&c手にアイテムを持ってください。")); return }
                val hasCustomName = item.itemMeta?.hasDisplayName() == true
                if (!hasCustomName) player.sendMessage(c("&e注意: カスタム名のないアイテムです。バニラ名アイテムはショップ登録だけで売れます。"))
                val err = plugin.sellWhitelistManager.addEntry(item, sellPrice)
                if (err != null) {
                    player.sendMessage(c("&c追加失敗: $err"))
                } else {
                    val dispName = if (hasCustomName && item.itemMeta?.hasDisplayName() == true)
                        plain.serialize(item.itemMeta!!.displayName()!!) else item.type.name.lowercase()
                    player.sendMessage(c("&aホワイトリストに追加しました: &f$dispName &a売値: &f${sellPrice}"))
                    player.sendMessage(c("&7マテリアル: &f${item.type.name.lowercase()}  エンチャント: &f${item.itemMeta?.enchants?.size ?: 0}種"))
                }
            }
            "remove" -> {
                val index = args.getOrNull(1)?.toIntOrNull()
                if (index == null || index < 1) { player.sendMessage(c("&c使い方: /menuedit whitelist remove <番号>")); return }
                val removed = plugin.sellWhitelistManager.removeEntry(index)
                if (removed != null) player.sendMessage(c("&aホワイトリストから削除しました: &f$removed"))
                else player.sendMessage(c("&c番号が不正です。1〜${plugin.sellWhitelistManager.getEntries().size} で指定してください。"))
            }
            else -> {
                player.sendMessage(c("&b--- /menuedit whitelist ---"))
                player.sendMessage(c("&f/menuedit whitelist list &7— 一覧"))
                player.sendMessage(c("&f/menuedit whitelist add hand &7<売値> — 手持ちアイテムを追加"))
                player.sendMessage(c("&f/menuedit whitelist remove &7<番号> — 削除"))
            }
        }
    }

    private fun sendHelp(player: Player) {
        player.sendMessage(c("&b&l/menuedit &7— 管理コマンド"))
        player.sendMessage(c("&f/menuedit announce &7— お知らせの編集"))
        player.sendMessage(c("&f/menuedit shop &7— ショップの商品管理"))
        player.sendMessage(c("&f/menuedit whitelist &7— 売却ホワイトリスト管理"))
    }

    private fun parseTextInput(raw: String): String {
        val trimmed = raw.trim()
        if (!trimmed.startsWith("{")) return trimmed
        return runCatching {
            LegacyComponentSerializer.legacyAmpersand().serialize(GsonComponentSerializer.gson().deserialize(trimmed))
        }.getOrElse { trimmed }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String>? {
        if (!sender.hasPermission("oyasaimenu.admin")) return emptyList()
        val prefix = args.lastOrNull() ?: ""
        return when {
            args.size <= 1 ->
                listOf("announce","shop","whitelist").filter { it.startsWith(prefix, ignoreCase = true) }
            args.size == 2 -> when (args[0].lowercase()) {
                "announce"  -> listOf("title","line","remove-line","book","show")
                "shop"      -> plugin.shopLoader.getAllCategories().keys.toList()
                "whitelist" -> listOf("list","add","remove")
                else -> emptyList()
            }.filter { it.startsWith(prefix, ignoreCase = true) }
            args.size == 3 -> when {
                args[0].equals("announce", ignoreCase = true) && args[1].equals("line", ignoreCase = true) -> {
                    val max = (plugin.announcementManager.getAnnouncements().firstOrNull()?.body?.size ?: 0) + 1
                    (1..max).map { it.toString() }
                }
                args[0].equals("announce", ignoreCase = true) && args[1].equals("remove-line", ignoreCase = true) -> {
                    val size = plugin.announcementManager.getAnnouncements().firstOrNull()?.body?.size ?: 0
                    (1..size).map { it.toString() }
                }
                args[0].equals("shop", ignoreCase = true) -> listOf("list","add","remove")
                args[0].equals("whitelist", ignoreCase = true) && args[1].equals("add", ignoreCase = true) -> listOf("hand")
                args[0].equals("whitelist", ignoreCase = true) && args[1].equals("remove", ignoreCase = true) -> {
                    val size = plugin.sellWhitelistManager.getEntries().size
                    (1..size).map { it.toString() }
                }
                else -> emptyList()
            }.filter { it.startsWith(prefix, ignoreCase = true) }
            else -> emptyList()
        }
    }
}