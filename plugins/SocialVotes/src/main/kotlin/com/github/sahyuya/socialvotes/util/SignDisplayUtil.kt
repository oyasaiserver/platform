package com.github.sahyuya.socialvotes.util

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVGroup
import com.github.sahyuya.socialvotes.data.SVSign
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.block.Sign

object SignDisplayUtil {

    /* ==============================
     * 表示内容の構築（純ロジック）
     * ============================== */
    private fun buildLines(sv: SVSign): List<Component> {

        val title =
            Component.text(SVLOGO)

        val creatorLine = when {
            sv.creatorDisplayName != null ->
                Component.text(sv.creatorDisplayName!!, NamedTextColor.WHITE)
            sv.creators.size == 1 -> {
                val uuid = sv.creators.first()
                val name = Bukkit.getOfflinePlayer(uuid).name ?: "unknown"
                Component.text(name, NamedTextColor.WHITE)
            }
            else ->
                Component.text("制作者多数", NamedTextColor.WHITE)
        }

        val isVisible = sv.showVotes

        val votesLine =
            if (isVisible)
                Component.text("Votes: ", NamedTextColor.GRAY)
                    .append(Component.text("${sv.votes}", NamedTextColor.GOLD))
            else
                Component.text("Votes: 非公開", NamedTextColor.RED)

        return listOf(
            title,
            Component.text(sv.name, NamedTextColor.GREEN),
            creatorLine,
            votesLine
        )
    }

    /* ==============================
     * Bukkit Sign への反映
     * ============================== */
    fun applyFormat(sign: Sign, sv: SVSign) {
        val lines = buildLines(sv)
        for (i in 0..3) {
            sign.line(i, lines[i])
        }
    }

    /* ==============================
     * World 解決 + 更新
     * ============================== */
    fun updateSingle(sv: SVSign) {
        val world = Bukkit.getWorld(sv.world) ?: return
        val block = world.getBlockAt(sv.x, sv.y, sv.z)
        val state = block.state as? Sign ?: return

        applyFormat(state, sv)
        state.update(true)
    }

    fun updateGroup(group: SVGroup) {
        val dm = SocialVotes.dataManager
        for (sid in group.signIds) {
            dm.signById[sid]?.let { updateSingle(it) }
        }
    }
    /* ==============================
     * SocialVotes LOGO
     * ============================== */
    const val SVLOGO = "§8(§bSocial§7Votes§8)§f"
    const val SVLOGOSHORT = "§8(§bS§7V§8)"
}
