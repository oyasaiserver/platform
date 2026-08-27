package io.oyasai.chat.paper.transform

import io.oyasai.chat.api.ChatTextSender
import io.oyasai.chat.api.ChatTextSurface
import io.oyasai.chat.api.RecipientTextTransformRequest
import io.oyasai.chat.api.RecipientTextTransformResult
import io.oyasai.chat.paper.OyasaiChatPlugin
import java.util.UUID
import java.util.concurrent.CompletableFuture
import net.kyori.adventure.text.Component
import org.bukkit.entity.Player

class RecipientTextDispatcher
internal constructor(
    private val plugin: OyasaiChatPlugin,
    private val transformers: RecipientTextTransformerRegistry,
    private val ordered: OrderedRecipientDelivery = OrderedRecipientDelivery(),
) : AutoCloseable {
  @Volatile private var closed = false

  fun dispatch(
      messageId: UUID,
      surface: ChatTextSurface,
      sender: ChatTextSender,
      originalText: String,
      recipients: Collection<Player>,
      render: (Player, Component) -> Component,
      afterDelivery: (Player) -> Unit = {},
  ) {
    check(plugin.server.isPrimaryThread) { "Text dispatch must start on the server thread" }
    if (closed) return
    val original = Component.text(originalText)
    recipients.distinctBy(Player::getUniqueId).forEach { player ->
      val resolved =
          resolve(
              messageId,
              surface,
              sender,
              player,
              originalText,
              original,
              player.uniqueId == sender.playerId,
          )
      ordered.enqueue(player.uniqueId, resolved) { component ->
        sendWhenReady(player, component, render, afterDelivery)
      }
    }
  }

  fun hasTransformer(surface: ChatTextSurface): Boolean = transformers.hasTransformer(surface)

  fun clear(playerId: UUID) {
    ordered.clear(playerId)
  }

  fun canReloadSafely(): Boolean = ordered.pendingRecipients() == 0

  private fun resolve(
      messageId: UUID,
      surface: ChatTextSurface,
      sender: ChatTextSender,
      recipient: Player,
      originalText: String,
      original: Component,
      isSender: Boolean,
  ): CompletableFuture<Component> {
    val claimed =
        transformers.transform(
            RecipientTextTransformRequest(
                messageId,
                surface,
                sender,
                recipient,
                originalText,
            ),
            isSender,
        ) ?: return CompletableFuture.completedFuture(original)
    return claimed.handle { result, error ->
      if (error != null) {
        plugin.logger.warning(
            "Text transformer failed for ${recipient.uniqueId}; using original text: ${error.message}"
        )
      }
      when (result) {
        is RecipientTextTransformResult.Replace -> result.component
        RecipientTextTransformResult.PassThrough,
        null -> original
      }
    }.toCompletableFuture()
  }

  private fun sendWhenReady(
      expectedPlayer: Player,
      component: Component,
      render: (Player, Component) -> Component,
      afterDelivery: (Player) -> Unit,
  ): CompletableFuture<Void> {
    val completed = CompletableFuture<Void>()
    if (closed) {
      completed.complete(null)
      return completed
    }
    runCatching {
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                val current = plugin.server.getPlayer(expectedPlayer.uniqueId)
                if (closed || current !== expectedPlayer || !expectedPlayer.isOnline) {
                  completed.complete(null)
                  return@Runnable
                }
                runCatching {
                      expectedPlayer.sendMessage(render(expectedPlayer, component))
                      afterDelivery(expectedPlayer)
                    }
                    .onFailure {
                      plugin.logger.warning(
                          "Unable to deliver transformed text to ${expectedPlayer.uniqueId}: ${it.message}"
                      )
                    }
                completed.complete(null)
              },
          )
        }
        .onFailure { completed.complete(null) }
    return completed
  }

  override fun close() {
    closed = true
    ordered.clearAll()
  }
}
