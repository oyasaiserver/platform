package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import java.io.File
import java.util.UUID

/**
 * AnnouncementManager
 *
 * 変更点:
 *   - pendingBookEditors を MutableMap<UUID, Int> に変更し、渡した本のスロットを保存
 *   - removeBook: スロット指定で直接削除し、delay を 3L に延長して確実性を向上
 */
class AnnouncementManager(private val plugin: OyasaiMenu) : Listener {

    data class Announcement(val title: String, val body: List<String>)

    private var currentTitle: String             = "&f✦ ようこそ！"
    private var currentBody: MutableList<String> = mutableListOf()

    /** UUID → 渡した本のスロット番号 */
    private val pendingBookEditors: MutableMap<UUID, Int> = mutableMapOf()
    private val plainText = PlainTextComponentSerializer.plainText()

    // ============================
    // ロード / リロード
    // ============================

    fun loadAll() {
        val file = resolveFile() ?: run {
            plugin.logger.warning("announcements.yml が見つからず生成にも失敗しました。")
            return
        }
        runCatching { parseFile(file) }
            .onFailure { e -> plugin.logger.warning("AnnouncementManager: YAML 解析エラー — ${e.message}") }
        plugin.logger.info("お知らせ: ロード完了 title='$currentTitle' / ${currentBody.size}行")
    }

    fun reload() = loadAll()

    fun getAnnouncements(): List<Announcement> =
        listOf(Announcement(currentTitle, currentBody.toList()))

    // ============================
    // コマンド編集 API
    // ============================

    fun setTitle(text: String) { currentTitle = text; saveToFile(); broadcastRefresh() }

    fun setLine(index: Int, text: String) {
        while (currentBody.size <= index) currentBody.add("")
        currentBody[index] = text; saveToFile(); broadcastRefresh()
    }

    fun removeLine(index: Int): String? {
        if (index !in currentBody.indices)
            return "${index + 1} 行目は存在しません (現在 ${currentBody.size} 行)。"
        currentBody.removeAt(index); saveToFile(); broadcastRefresh(); return null
    }

    // ============================
    // 本エディタ
    // ============================

    fun openBookEditor(player: Player) {
        val book = ItemStack(Material.WRITABLE_BOOK)
        val meta = book.itemMeta as BookMeta
        if (currentBody.isEmpty()) {
            meta.addPages(Component.text(
                "ここにお知らせの内容を書いてください。\n" +
                    "改行ごとに Lore の1行になります。\n\n" +
                    "Done のみ → Lore を更新 (本は消えます)\n" +
                    "署名して確定 → 署名名がタイトルになります (本は消えます)"
            ))
        } else {
            splitIntoPages(currentBody.joinToString("\n"), 254).forEach { meta.addPages(Component.text(it)) }
        }
        book.itemMeta = meta

        val slot = player.inventory.firstEmpty().takeIf { it >= 0 } ?: 8
        player.inventory.setItem(slot, book)
        player.inventory.heldItemSlot = slot
        // スロット番号を保存して確実に本を削除できるようにする
        pendingBookEditors[player.uniqueId] = slot

        player.sendMessage(c("&b=== お知らせ本エディタ ==="))
        player.sendMessage(c("&7各行 → Lore 1行  Done か署名で確定 (本は消えます)"))
        player.sendMessage(c("&7現在のタイトル: &f${currentTitle.replace('&', '\u00A7')}"))
    }

    // ============================
    // PlayerEditBookEvent
    // ============================

    @EventHandler
    fun onPlayerEditBook(event: PlayerEditBookEvent) {
        val uuid = event.player.uniqueId
        val slot = pendingBookEditors.remove(uuid) ?: return

        val meta    = event.newBookMeta
        val newBody = meta.pages()
            .joinToString("\n") { plainText.serialize(it) }
            .split("\n").map { it.trim() }.filter { it.isNotEmpty() }
        currentBody = newBody.toMutableList()

        if (event.isSigning) {
            val bookTitle = meta.title()?.let { plainText.serialize(it) }?.trim()
            if (!bookTitle.isNullOrEmpty()) {
                currentTitle = bookTitle
                event.player.sendMessage(c("&aタイトル更新: &f${currentTitle.replace('&', '\u00A7')}"))
            }
            event.isCancelled = true
        }

        saveToFile(); broadcastRefresh()
        event.player.sendMessage(c("&aお知らせを更新しました。Lore &f${currentBody.size}&a行"))

        // スロット指定で確実に本を削除。delay を 3L に延ばして Paper の処理完了後に実行
        removeBook(event.player, slot)
    }

    /**
     * 指定スロットの本をインベントリから確実に削除する。
     * Paper の書籍イベント処理完了を待つため 3 tick 後に実行。
     */
    private fun removeBook(player: Player, slot: Int) {
        plugin.server.scheduler.runTaskLater(plugin, Runnable {
            val atSlot = player.inventory.getItem(slot)
            if (atSlot != null && (atSlot.type == Material.WRITABLE_BOOK || atSlot.type == Material.WRITTEN_BOOK)) {
                player.inventory.setItem(slot, null)
                return@Runnable
            }
            // フォールバック: インベントリ全体をスキャン
            for (i in 0 until player.inventory.size) {
                val item = player.inventory.getItem(i) ?: continue
                if (item.type == Material.WRITABLE_BOOK || item.type == Material.WRITTEN_BOOK) {
                    player.inventory.setItem(i, null); break
                }
            }
        }, 3L)
    }

    // ============================
    // YAML 保存
    // ============================

    private fun saveToFile() {
        val file = File(plugin.dataFolder, "announcements.yml")
        file.parentFile?.mkdirs()
        val yaml = YamlConfiguration()
        yaml.set("announcements", listOf(
            linkedMapOf("title" to currentTitle, "body" to currentBody.toList())
        ))
        runCatching { yaml.save(file) }
            .onFailure { e -> plugin.logger.warning("announcements.yml 保存失敗: ${e.message}") }
    }

    private fun broadcastRefresh() {
        plugin.server.onlinePlayers.forEach { p ->
            if (plugin.menuEngine.getPlayerState(p)?.menuId == "root") plugin.menuEngine.openMenu(p, "root")
        }
    }

    // ============================
    // ファイル解決
    // ============================

    private fun resolveFile(): File? {
        plugin.dataFolder.also { if (!it.exists()) it.mkdirs() }
        val file = File(plugin.dataFolder, "announcements.yml")
        if (file.exists()) return file
        runCatching { plugin.saveResource("announcements.yml", false) }
            .onFailure { plugin.logger.warning("announcements.yml のリソース展開失敗: ${it.message}") }
        return if (file.exists()) file else null
    }

    @Suppress("UNCHECKED_CAST")
    private fun parseFile(file: File) {
        val yaml    = YamlConfiguration.loadConfiguration(file)
        val rawList = yaml.getList("announcements")
        if (rawList.isNullOrEmpty()) { plugin.logger.info("announcements.yml: 0 件"); return }
        val first = rawList.firstOrNull() as? Map<*, *> ?: return
        currentTitle = first["title"]?.toString() ?: "&fお知らせ"
        currentBody  = ((first["body"] as? List<*>)?.mapNotNull { it?.toString() } ?: emptyList()).toMutableList()
    }

    // ============================
    // ユーティリティ
    // ============================

    private fun splitIntoPages(text: String, maxChars: Int): List<String> {
        if (text.length <= maxChars) return listOf(text)
        val pages = mutableListOf<String>()
        var remaining = text
        while (remaining.isNotEmpty()) {
            if (remaining.length <= maxChars) { pages.add(remaining); break }
            val cutAt = remaining.lastIndexOf('\n', maxChars - 1).takeIf { it > 0 } ?: maxChars
            pages.add(remaining.substring(0, cutAt))
            remaining = remaining.substring(cutAt).trimStart('\n')
        }
        return pages
    }
}
