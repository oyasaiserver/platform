package com.github.sahyuya.oyasaiMusic.gui

import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerEditBookEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta
import org.bukkit.plugin.Plugin
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

/**
 * 「URL入力には本と羽ペン（Book-and-Quill）を使用」という技術方針に基づく入力ヘルパー
 * （楽曲設定画面「参考URL登録」で使用する想定）。
 *
 * Book-and-Quillの編集UIはサーバー側から直接開くAPIが無く、クライアントが手に持った
 * WRITABLE_BOOKを右クリックすることでのみ開かれる。そのため以下のフローを取る:
 *   1. 空いているホットバースロットへ案内文言入りのWRITABLE_BOOKを一時配置し、選択する。
 *   2. プレイヤーがそれを右クリックして編集 → 「完了」を押すと [PlayerEditBookEvent] が
 *      発火するので、1ページ目のテキストをURLとして受け取る。
 *   3. 入力本だけを削除して、元の選択スロットへ戻す。既存の手持ちアイテムは一切置き換えない。
 */
object BookQuillUrlInput {

    private val pending = ConcurrentHashMap<UUID, Pending>()
    private var listenerInstalled = false

    private class Pending(val bookSlot: Int, val previousHeldSlot: Int, val onSubmit: (String) -> Unit)

    fun open(
        plugin: Plugin,
        player: Player,
        guideText: String = "参考URLを1ページ目に入力して「完了」を押してください。",
        onSubmit: (String) -> Unit,
    ) {
        installListenerOnce(plugin)

        if (pending.containsKey(player.uniqueId)) {
            player.sendMessage("§eすでにURL入力用の本を開いています。完了してからもう一度お試しください。")
            return
        }
        val bookSlot = (0..8).firstOrNull { slot ->
            val item = player.inventory.getItem(slot)
            item == null || item.type.isAir
        }
        if (bookSlot == null) {
            player.sendMessage("§cURL入力にはホットバーに空きスロットが1つ必要です。")
            return
        }
        val previousHeldSlot = player.inventory.heldItemSlot
        pending[player.uniqueId] = Pending(bookSlot, previousHeldSlot, onSubmit)

        val book = ItemStack(Material.WRITABLE_BOOK)
        book.editMeta { meta ->
            meta as BookMeta
            meta.addPage(guideText)
        }
        player.inventory.setItem(bookSlot, book)
        player.inventory.heldItemSlot = bookSlot
        player.updateInventory()
        player.sendMessage("§a本を右クリックして開き、URLを入力後「完了」を押してください。")
    }

    private fun installListenerOnce(plugin: Plugin) {
        if (listenerInstalled) return
        listenerInstalled = true
        Bukkit.getPluginManager().registerEvents(object : Listener {
            @EventHandler
            fun onEdit(event: PlayerEditBookEvent) {
                val player = event.player
                val session = pending.remove(player.uniqueId) ?: return
                // 編集済み本を通常アイテムとして確定させず、退避品だけを確実に戻す。
                event.isCancelled = true

                // BookMeta#getPage(int)は1始まりのページ番号を取る旧来API（プレーンな文字列を返す）。
                val text = event.newBookMeta.getPage(1)?.trim().orEmpty()
                Bukkit.getScheduler().runTask(plugin, Runnable {
                    // 追加した一時入力本だけを除去する。元の手持ちスロットは上書きしていないため、
                    // 手に持っていたアイテムが消えることはない。
                    if (player.inventory.getItem(session.bookSlot)?.type == Material.WRITABLE_BOOK) {
                        player.inventory.setItem(session.bookSlot, null)
                    }
                    player.inventory.heldItemSlot = session.previousHeldSlot
                    player.updateInventory()
                    if (text.isNotEmpty()) session.onSubmit(text)
                })
            }
        }, plugin)
    }
}
