package io.oyasai.chat.paper

import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.chat.LocalChatPlan
import io.oyasai.chat.paper.chat.initialize
import io.papermc.paper.event.player.AsyncChatEvent
import java.util.UUID
import java.util.concurrent.TimeUnit
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

// Paperのチャット・プレイヤーイベント処理。
private data class ChatCommitSnapshot(
    val playerId: UUID,
    val plan: LocalChatPlan,
    val text: String,
    val accepted: Boolean,
)

internal fun LocalChatPlan.intersectRecipients(viewerIds: Set<UUID>): LocalChatPlan =
    when (this) {
      is LocalChatPlan.Public -> copy(recipientIds = recipientIds.intersect(viewerIds))
      is LocalChatPlan.Private -> copy(recipientIds = recipientIds.intersect(viewerIds))
      is LocalChatPlan.Rejected -> this
    }

class PaperChatEvents(private val plugin: OyasaiChatPlugin) : Listener {
  @EventHandler(priority = EventPriority.MONITOR)
  fun onChat(event: AsyncChatEvent) {
    val playerId = event.player.uniqueId
    val text = PlainTextComponentSerializer.plainText().serialize(event.message())
    val cancelled = event.isCancelled
    val reserved =
        if (cancelled) false
        else {
          synchronized(plugin.chatLifecycleLock) {
            if (plugin.reloadInProgress) false
            else {
              plugin.pendingChatCommits++
              true
            }
          }
        }
    val service = plugin.runtime.chat
    val planned =
        if (cancelled) {
          LocalChatPlan.Rejected("Chat event was cancelled.")
        } else if (!reserved) {
          LocalChatPlan.Rejected("Chat configuration is reloading; please resend your message.")
        } else if (text.length > MAX_PAYLOAD_LENGTH) {
          LocalChatPlan.Rejected("Message is too long.")
        } else {
          planChatOnServerThread(playerId)
        }
    val plan = if (cancelled) planned else intersectWithEventViewers(event, planned)
    if (!cancelled) event.viewers().clear()
    val commit = ChatCommitSnapshot(playerId, plan, text, !cancelled)
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          try {
            if (commit.accepted) {
              service.commitLocalChat(
                  commit.playerId,
                  commit.plan,
                  commit.text,
              )
            }
          } finally {
            if (reserved) synchronized(plugin.chatLifecycleLock) { plugin.pendingChatCommits-- }
          }
        },
    )
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onJoin(event: PlayerJoinEvent) {
    event.joinMessage(null)
    plugin.runtime.chat.initialize(event.player)
    plugin.onBackendPlayerJoin(event.player)
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onQuit(event: PlayerQuitEvent) {
    event.quitMessage(null)
    plugin.runtime.config.network.identity.forget(event.player.uniqueId)
    plugin.runtime.delivery.clear(event.player.uniqueId)
    plugin.runtime.privateMessages.onQuit(event.player)
    plugin.runtime.states.remove(event.player)
  }

  private fun planChatOnServerThread(playerId: UUID): LocalChatPlan =
      runCatching {
            if (plugin.server.isPrimaryThread) plugin.runtime.chat.planLocalChat(playerId)
            else
                plugin.server.scheduler
                    .callSyncMethod(plugin) { plugin.runtime.chat.planLocalChat(playerId) }
                    .get(2, TimeUnit.SECONDS)
          }
          .getOrElse {
            plugin.logger.severe("Unable to plan chat for $playerId: ${it.message}")
            LocalChatPlan.Rejected("Chat processing is temporarily unavailable.")
          }

  private fun intersectWithEventViewers(
      event: AsyncChatEvent,
      plan: LocalChatPlan,
  ): LocalChatPlan {
    val viewerIds =
        event.viewers().asSequence().filterIsInstance<Player>().map(Player::getUniqueId).toSet()
    return plan.intersectRecipients(viewerIds)
  }
}
