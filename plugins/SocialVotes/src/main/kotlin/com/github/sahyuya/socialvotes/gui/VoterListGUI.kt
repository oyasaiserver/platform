package com.github.sahyuya.socialvotes.gui

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVSign
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGOSHORT
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import java.util.*

object VoterListGUI {

    private enum class SortMode {
        LATEST, COUNT, NAME
    }

    private val signMap = mutableMapOf<UUID, Int>()
    private val pageMap = mutableMapOf<UUID, Int>()
    private val sortMap = mutableMapOf<UUID, SortMode>()

    private fun gray(): ItemStack =
        ItemStack(Material.GRAY_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta!!.apply { setDisplayName(" ") }
        }

    private fun head(player: OfflinePlayer, count: Int): ItemStack {
        val it = ItemStack(Material.PLAYER_HEAD)
        val meta = it.itemMeta as SkullMeta
        meta.owningPlayer = player
        meta.setDisplayName("§a${player.name ?: "Unknown"}")
        meta.lore = listOf(
            "§7${player.name ?: "unknown"} × §e$count"
        )
        it.itemMeta = meta
        return it
    }

    fun open(p: Player, sign: SVSign, page: Int = 0) {

        signMap[p.uniqueId] = sign.id
        pageMap[p.uniqueId] = page
        sortMap.putIfAbsent(p.uniqueId, SortMode.LATEST)

        val inv: Inventory = Bukkit.createInventory(p, 54, SVLOGOSHORT+"投票者一覧")
        val dm = SocialVotes.dataManager

        // ▼ 0票を除外した投票者マップ
        val rawMap = dm.playerVotesPerSign[sign.id]
            ?.filterValues { it > 0 }
            ?: emptyMap()

        /* ---------- ソート ---------- */

        val sorted = when (sortMap[p.uniqueId]) {
            SortMode.COUNT ->
                rawMap.entries.sortedByDescending { it.value }

            SortMode.NAME ->
                rawMap.entries.sortedBy {
                    Bukkit.getOfflinePlayer(it.key).name ?: ""
                }

            else -> rawMap.entries.toList() // LATEST
        }

        /* ---------- ページ補正 ---------- */

        val maxPage = if (sorted.isEmpty()) 0 else (sorted.size - 1) / 45
        val safePage = page.coerceIn(0, maxPage)
        pageMap[p.uniqueId] = safePage

        val start = safePage * 45
        val end = minOf(start + 45, sorted.size)

        /* ---------- 表示 ---------- */

        if (sorted.isNotEmpty()) {
            for ((slot, entry) in sorted.subList(start, end).withIndex()) {
                val off = Bukkit.getOfflinePlayer(entry.key)
                inv.setItem(slot, head(off, entry.value))
            }
        }

        /* ---------- 下段装飾 ---------- */

        listOf(46, 47, 51, 52).forEach {
            inv.setItem(it, gray())
        }

        /* ---------- 操作（常に表示） ---------- */

        // ソート切替
        inv.setItem(
            45,
            ItemStack(Material.HOPPER).apply {
                itemMeta = itemMeta!!.apply {
                    val sort = sortMap[p.uniqueId] ?: SortMode.LATEST
                    setDisplayName(
                        when (sort) {
                            SortMode.LATEST -> "§e最新投票順"
                            SortMode.COUNT -> "§e投票数降順"
                            SortMode.NAME -> "§eプレイヤー名順"
                        }
                    )
                }
            }
        )

        // 前へ
        inv.setItem(
            48,
            ItemStack(Material.ARROW).apply {
                itemMeta = itemMeta!!.apply { setDisplayName("§a前へ") }
            }
        )

        // ページ表示
        inv.setItem(
            49,
            ItemStack(Material.PAPER).apply {
                itemMeta = itemMeta!!.apply {
                    setDisplayName("§eページ ${safePage + 1}")
                }
            }
        )

        // 次へ
        inv.setItem(
            50,
            ItemStack(Material.ARROW).apply {
                itemMeta = itemMeta!!.apply { setDisplayName("§a次へ") }
            }
        )

        // 戻る
        inv.setItem(
            53,
            ItemStack(Material.BARRIER).apply {
                itemMeta = itemMeta!!.apply { setDisplayName("§c戻る") }
            }
        )

        p.openInventory(inv)
    }

    /* ---------------- CLICK ---------------- */

    fun onClick(p: Player, slot: Int) {

        val signId = signMap[p.uniqueId] ?: return
        val sign = SocialVotes.dataManager.signById[signId] ?: return

        var page = pageMap[p.uniqueId] ?: 0
        var sort = sortMap[p.uniqueId] ?: SortMode.LATEST

        when (slot) {

            // ソート切替
            45 -> {
                sort = when (sort) {
                    SortMode.LATEST -> SortMode.COUNT
                    SortMode.COUNT -> SortMode.NAME
                    SortMode.NAME -> SortMode.LATEST
                }
                sortMap[p.uniqueId] = sort
                open(p, sign, 0)
            }

            // 前
            48 -> {
                if (page > 0) open(p, sign, page - 1)
            }

            // 次
            50 -> {
                val dm = SocialVotes.dataManager
                val size = dm.playerVotesPerSign[sign.id]
                    ?.values
                    ?.count { it > 0 }
                    ?: 0

                val maxPage = if (size == 0) 0 else (size - 1) / 45
                if (page < maxPage) {
                    open(p, sign, page + 1)
                }
            }

            // 戻る
            53 -> {
                if (sign.group == null) {
                    SimpleGUI.open(p, sign)
                } else {
                    ResultGUI.open(p, sign)
                }
            }
        }
    }
}
