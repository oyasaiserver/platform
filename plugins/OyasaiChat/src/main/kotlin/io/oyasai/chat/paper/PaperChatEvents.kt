package io.oyasai.chat.paper

import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.chat.LocalChatPlan
import io.oyasai.chat.paper.chat.initialize
import io.oyasai.chat.paper.chat.requiresManualDelivery
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
    val manualDelivery: Boolean,
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
    val manualDelivery = plan.requiresManualDelivery(service::ownsTransformation)
    if (!cancelled) configureVanillaDelivery(event, plan, manualDelivery)
    val commit = ChatCommitSnapshot(playerId, plan, text, !cancelled, manualDelivery)
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          try {
            if (commit.accepted) {
              service.commitLocalChat(
                  commit.playerId,
                  commit.plan,
                  commit.text,
                  commit.manualDelivery,
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
    plugin.runtime.privateMessages.onBackendJoin(event.player)
  }

  @EventHandler(priority = EventPriority.HIGHEST)
  fun onQuit(event: PlayerQuitEvent) {
    event.quitMessage(null)
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

  private fun configureVanillaDelivery(
      event: AsyncChatEvent,
      plan: LocalChatPlan,
      manualDelivery: Boolean,
  ) {
    val (recipientIds, renderer) =
        when (plan) {
          is LocalChatPlan.Public ->
              plan.recipientIds to
                  plugin.runtime.formatter.renderer(plan.channel, plan.presentation)
          is LocalChatPlan.Private ->
              plan.recipientIds to
                  if (plan.pending) null
                  else
                      plugin.runtime.formatter.privateRenderer(
                          senderName = plan.senderPresentation.playerName,
                          targetName = plan.targetName,
                          senderPresentation = plan.senderPresentation,
                      )
          is LocalChatPlan.Rejected -> emptySet<UUID>() to null
        }
    configureChatDelivery(event, recipientIds, renderer, manualDelivery || plan is LocalChatPlan.Rejected)
  }

  private fun intersectWithEventViewers(
      event: AsyncChatEvent,
      plan: LocalChatPlan,
  ): LocalChatPlan {
    val viewerIds =
        event.viewers().asSequence().filterIsInstance<Player>().map(Player::getUniqueId).toSet()
    return plan.intersectRecipients(viewerIds)
  }

  private fun configureChatDelivery(
      event: AsyncChatEvent,
      recipientIds: Set<UUID>,
      renderer: io.papermc.paper.chat.ChatRenderer?,
      manualDelivery: Boolean,
  ) {
    val viewers = event.viewers()
    viewers
        .toList()
        .filterIsInstance<Player>()
        .filter { manualDelivery || it.uniqueId !in recipientIds }
        .forEach(viewers::remove)
    renderer?.let { event.renderer(it) }
  }
}
