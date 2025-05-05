package com.github.oyasaiserver.vertex.services.parrot

import com.github.oyasaiserver.vertex.services.Service
import com.github.oyasaiserver.vertex.util.Language.japaneseRegex
import com.github.oyasaiserver.vertex.util.Language.romajiToHiragana
import com.github.oyasaiserver.vertex.util.Language.transliterateWithGoogleApi
import com.github.oyasaiserver.vertex.util.asPlainText
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
