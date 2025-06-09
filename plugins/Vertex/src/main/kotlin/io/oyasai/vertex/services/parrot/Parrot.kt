package io.oyasai.vertex.services.parrot

import io.oyasai.vertex.services.Service
import io.oyasai.vertex.util.Language.japaneseRegex
import io.oyasai.vertex.util.Language.romajiToHiragana
import io.oyasai.vertex.util.Language.transliterateWithGoogleApi
import io.oyasai.vertex.util.asPlainText
import io.papermc.paper.event.player.AsyncChatEvent
import kotlinx.coroutines.runBlocking
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.event.EventHandler

object Parrot : Service() {
    @EventHandler
    fun onAsyncChat(event: AsyncChatEvent) {
        val original =
            event.message().asPlainText().also {
                if (japaneseRegex.containsMatchIn(it)) {
                    return
                }
            }
        runBlocking {
            transliterateWithGoogleApi(romajiToHiragana(original))
                .fold(
                    { logger.severe(it.stackTraceToString()) },
                    {
                        event.message(
                            Component
                                .text(it)
                                .append(Component.text(" "))
                                .append(Component.text(original, NamedTextColor.DARK_GRAY)),
                        )
                    },
                )
        }
    }
}
