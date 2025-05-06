package com.github.oyasaiserver.vertex.services.kanban

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import com.github.oyasaiserver.vertex.database.CacheManager.recievedLikesCache
import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.services.sentinel.Sentinel.getOrInitializeVault
import com.github.oyasaiserver.vertex.util.format
import com.github.oyasaiserver.vertex.util.launchAsync
import com.github.oyasaiserver.vertex.util.noShadow
import com.github.oyasaiserver.vertex.util.plus
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.Component.empty
import net.kyori.adventure.text.Component.text
import net.kyori.adventure.text.JoinConfiguration
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.ShadowColor.shadowColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.player.PlayerJoinEvent
import kotlin.uuid.toKotlinUuid

object Kanban : Service() {
    @EventHandler(priority = EventPriority.HIGHEST)
    fun onPlayerJoin(event: PlayerJoinEvent) {
        event.player.uniqueId
            .toKotlinUuid()
            .launchAsync { updateKanbanForPlayer(event.player) }
    }

    private fun updateKanbanForPlayer(player: Player) {
        val footer = createFooterForPlayer(player)
        player.sendPlayerListHeaderAndFooter(header, footer)
    }

    private fun createFooterForPlayer(player: Player): Component {
        val vault = getOrInitializeVault(player.uniqueId.toKotlinUuid())
        val onlinePlayers = plugin.server.onlinePlayers.size
        val likes = recievedLikesCache[player.uniqueId.toKotlinUuid()]
        return Component.join(
            JoinConfiguration.newlines(),
            listOf(
                empty(),
                Component.join(
                    dotJoinConfiguration,
                    listOf(
                        text("¥", NamedTextColor.GRAY, TextDecoration.ITALIC) +
                            text(vault.money.format(), NamedTextColor.WHITE)
                                .shadowColor(shadowColor(NamedTextColor.BLUE, 128))
                                .decoration(TextDecoration.ITALIC, false),
                        text(vault.points.format())
                            .shadowColor(shadowColor(NamedTextColor.AQUA, 128)) +
                            text("P", NamedTextColor.GRAY, TextDecoration.ITALIC)
                                .shadowColor(noShadow()),
                    ),
                ),
                empty(),
                Component.join(
                    dotJoinConfiguration,
                    listOf(
                        text(onlinePlayers).shadowColor(shadowColor(NamedTextColor.GREEN, 128)) +
                            text(" Online", NamedTextColor.GRAY).shadowColor(noShadow()),
                        text(likes.format()).shadowColor(shadowColor(NamedTextColor.GOLD, 128)) +
                            text(" Likes", NamedTextColor.GRAY).shadowColor(noShadow()),
                    ),
                ),
                empty(),
            ),
        )
    }

    private val dotJoinConfiguration =
        JoinConfiguration.separator(text(" · ", NamedTextColor.DARK_GRAY))

    private val header =
        Component
            .join(
                JoinConfiguration.newlines(),
                listOf(
                    text(" ".repeat(WIDTH)),
                    text("Oyasai", NamedTextColor.WHITE)
                        .shadowColor(shadowColor(NamedTextColor.AQUA, 128)),
                    text("Server", NamedTextColor.GRAY).shadowColor(noShadow()),
                    empty(),
                ),
            ).decorate(TextDecoration.BOLD)

    private const val WIDTH = 35
}
