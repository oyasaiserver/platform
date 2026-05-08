package com.github.sahyuya.oyasaiMenu.manager

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
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
 *   - announcements.yml が存在しない場合は saveResource() で JAR リソースから展開する
 *   - Kotlin 文字列によるデフォルト内容の書き込みを廃止
 *   - 署名・Done どちらでも本を削除する
 */
class AnnouncementManager(private val plugin: OyasaiMenu) : Listener {

    data class Announcement(val title: String, val body: List<String>)

    private var currentTitle: String             = "&f✦ ようこそ！"
    private var currentBody: MutableList<String> = mutableListOf()

    private val pendingBookEditors: MutableSet<UUID> = mutableSetOf()
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
            meta.addPage(
                "ここにお知らせの内容を書いてください。\n" +
                "改行ごとに Lore の1行になります。\n\n" +
                "Done のみ → Lore を更新 (本は消えます)\n" +
                "署名して確定 → 署名名がタイトルになります (本は消えます)"
            )
        } else {
            splitIntoPages(currentBody.joinToString("\n"), 254).forEach { meta.addPage(it) }
        }
        book.itemMeta = meta
        val slot = player.inventory.firstEmpty().takeIf { it >= 0 } ?: 8
        player.inventory.setItem(slot, book)
        player.inventory.heldItemSlot = slot
        pendingBookEditors.add(player.uniqueId)
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
        if (!pendingBookEditors.remove(uuid)) return

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

        // 署名・Done どちらでも本を削除する
        plugin.server.scheduler.runTaskLater(plugin, Runnable {
            val inv = event.player.inventory
            for (i in 0 until inv.size) {
                val item = inv.getItem(i) ?: continue
                if (item.type == Material.WRITABLE_BOOK || item.type == Material.WRITTEN_BOOK) {
                    inv.setItem(i, null); break
                }
            }
        }, 1L)
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

    /**
     * announcements.yml を返す。
     * 存在しない場合は JAR リソースから saveResource() で展開する。
     * それでも存在しない場合は null を返す。
     */
    private fun resolveFile(): File? {
        plugin.dataFolder.also { if (!it.exists()) it.mkdirs() }
        val file = File(plugin.dataFolder, "announcements.yml")
        if (file.exists()) return file

        // JAR リソースから展開
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