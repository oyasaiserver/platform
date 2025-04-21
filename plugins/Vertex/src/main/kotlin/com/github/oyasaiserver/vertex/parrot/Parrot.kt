package com.github.oyasaiserver.vertex.parrot

import com.github.oyasaiserver.vertex.Vertex.Companion.plugin
import com.github.oyasaiserver.vertex.util.Language.romanToHiragana
import com.github.oyasaiserver.vertex.util.Language.transliterateWithGoogleApi
import com.github.oyasaiserver.vertex.util.asPlainText
import io.papermc.paper.event.player.AsyncChatEvent
import kotlinx.coroutines.runBlocking
import net.kyori.adventure.text.Component
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import java.util.logging.Level

object Parrot : Listener {
    @EventHandler
    fun onAsyncChatEvent(event: AsyncChatEvent) =
        runBlocking {
            event
                .message()
                .asPlainText()
                .let { romanToHiragana(it) }
                .let { transliterateWithGoogleApi(it) }
                .fold(
                    { plugin.logger.log(Level.SEVERE, it.message) },
                    { event.message(Component.text(it)) },
                )
        }
}
