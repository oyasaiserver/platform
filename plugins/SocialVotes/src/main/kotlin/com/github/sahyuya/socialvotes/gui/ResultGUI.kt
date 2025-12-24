package com.github.sahyuya.socialvotes.gui

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVSign
import com.github.sahyuya.socialvotes.util.SignDisplayUtil.SVLOGOSHORT
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.*

object ResultGUI {

    private val viewMap: MutableMap<UUID, Int> = mutableMapOf()
    private val sortModeMap: MutableMap<UUID, SortMode> = mutableMapOf()

    enum class SortMode {
        REGISTER,
        VOTES_DESC,
        NAME,
        ID
    }

    private fun item(material: Material, name: String, lore: List<String> = listOf()): ItemStack {
        val it = ItemStack(material)
        val meta = it.itemMeta!!
        meta.setDisplayName(name)
        meta.lore = lore
        it.itemMeta = meta
        return it
    }

    fun open(p: Player, sign: SVSign) {
        viewMap[p.uniqueId] = sign.id
        sortModeMap.putIfAbsent(p.uniqueId, SortMode.REGISTER)

        val inv: Inventory = Bukkit.createInventory(p, 54, SVLOGOSHORT+"投票結果")

        val dm = SocialVotes.dataManager
        val groupName = sign.group
        val group = groupName?.let { dm.groupByName[it] }

        if (group != null) {

            val signs = group.signIds
                .mapNotNull { dm.signById[it] }
                .let { sort(it, sortModeMap[p.uniqueId]!!) }
                .take(45)

            for ((index, s) in signs.withIndex()) {
                inv.setItem(
                    index,
                    item(
                        Material.OAK_SIGN,
                        "§a${s.name}",
                        listOf(
                            "§7ID: §f${s.id}",
                            "§7得票数: §e${s.votes}",
                            "§7公開: ${if (s.showVotes) "§a公開" else "§c非公開"}",
                            "",
                            "§eクリックで投票者一覧"
                        )
                    )
                )
            }
        }

        // ---- 下段装飾（45～53） ----
        val gray = item(Material.GRAY_STAINED_GLASS_PANE, " ")

        for (i in 45..53) {
            inv.setItem(i, gray)
        }

        // ソート切替
        inv.setItem(
            45,
            ItemStack(Material.HOPPER).apply {
                itemMeta = itemMeta!!.apply {
                    val sort = sortModeMap[p.uniqueId] ?: SortMode.REGISTER
                    setDisplayName(
                        when (sort) {
                            SortMode.REGISTER -> "§e登録順"
                            SortMode.VOTES_DESC -> "§e投票数降順"
                            SortMode.NAME -> "§eSV看板名順"
                            SortMode.ID -> "§eID名順"
                        }
                    )
                }
            }
        )

        // 戻る
        inv.setItem(53, item(Material.BARRIER, "§c戻る"))

        p.openInventory(inv)
    }

    private fun sort(list: List<SVSign>, mode: SortMode): List<SVSign> {
        return when (mode) {
            SortMode.REGISTER -> list
            SortMode.VOTES_DESC -> list.sortedByDescending { it.votes }
            SortMode.NAME -> list.sortedBy { it.name }
            SortMode.ID -> list.sortedBy { it.id }
        }
    }

    fun getViewingSign(p: Player): SVSign? {
        val id = viewMap[p.uniqueId] ?: return null
        return SocialVotes.dataManager.signById[id]
    }

    fun onClick(p: Player, slot: Int) {
        val sign = getViewingSign(p) ?: return
        val dm = SocialVotes.dataManager
        val group = sign.group?.let { dm.groupByName[it] } ?: return

        when (slot) {

            // ---- ソート切替 ----
            45 -> {
                val next = when (sortModeMap[p.uniqueId]) {
                    SortMode.REGISTER -> SortMode.VOTES_DESC
                    SortMode.VOTES_DESC -> SortMode.NAME
                    SortMode.NAME -> SortMode.ID
                    SortMode.ID -> SortMode.REGISTER
                    else -> SortMode.REGISTER
                }
                sortModeMap[p.uniqueId] = next
                open(p, sign)
            }

            // ---- 戻る ----
            53 -> {
                DetailGUI.open(p, sign)
            }

            // ---- 看板クリック（0～44） ----
            in 0..44 -> {
                val signs = group.signIds.mapNotNull { dm.signById[it] }
                val sorted = sort(signs, sortModeMap[p.uniqueId]!!)
                val clicked = sorted.getOrNull(slot) ?: return

                // GUI④へ
                VoterListGUI.open(p, clicked)
            }
        }
    }
}
