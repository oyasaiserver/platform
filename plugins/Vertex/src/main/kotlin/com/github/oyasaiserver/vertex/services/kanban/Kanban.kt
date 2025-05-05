package com.github.oyasaiserver.vertex.services.kanban

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.util.plus
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.Component.empty
import net.kyori.adventure.text.Component.text
import net.kyori.adventure.text.JoinConfiguration
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.player.PlayerJoinEvent

object Kanban : Service() {
    override fun onEnable() {
        plugin.server.onlinePlayers.forEach { updateKanbanForPlayer(it) }
    }

    @EventHandler(priority = EventPriority.LOWEST)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        updateKanbanForPlayer(event.player)
    }

    private fun updateKanbanForPlayer(player: Player) {
        val footer = createFooterForPlayer(player)
        player.sendPlayerListHeaderAndFooter(header, footer)
    }

    private fun createFooterForPlayer(player: Player): Component {
        val dotJoinConfiguration =
            JoinConfiguration.separator(text(" · ", NamedTextColor.DARK_GRAY))
        return Component.join(
            JoinConfiguration.newlines(),
            listOf(
                empty(),
                Component.join(
                    dotJoinConfiguration,
                    listOf(text("¥") + text(0), text(0) + text("P")),
                ),
                Component.join(
                    dotJoinConfiguration,
                    listOf(text("1") + text(" online"), text(0) + text(" Likes")),
                ),
                empty(),
                text(" ┗━━".padEnd(WIDTH)).decorate(TextDecoration.BOLD),
            ),
        )
    }

    private val header =
        Component
            .join(
                JoinConfiguration.newlines(),
                listOf(
                    text("━━┓ ".padStart(WIDTH)),
                    empty(),
                    text("Oyasai", NamedTextColor.WHITE) + text("Server", NamedTextColor.GRAY),
                    empty(),
                ),
            ).decorate(TextDecoration.BOLD)

    private const val WIDTH = 30
}
