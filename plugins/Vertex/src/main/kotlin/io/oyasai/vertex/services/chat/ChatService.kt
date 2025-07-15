package io.oyasai.vertex.services.chat

import io.oyasai.lib.Client
import io.oyasai.lib.minecraft.Service
import io.oyasai.lib.minecraft.asPlainText
import io.oyasai.proto.v1.ChatServiceClient
import io.oyasai.proto.v1.transliterateRequest
import io.papermc.paper.event.player.AsyncChatEvent
import kotlinx.coroutines.runBlocking
import net.kyori.adventure.text.Component
import org.bukkit.event.EventHandler

object ChatService : Service() {
    private val client by lazy { ChatServiceClient(Client.protocol) }

    @EventHandler
    fun onAsyncChat(event: AsyncChatEvent) {
        runBlocking {
            client
                .transliterate(transliterateRequest { romaji = event.message().asPlainText() })
                .success { event.message(Component.text(it.message.transliterated)) }
        }
    }
}
