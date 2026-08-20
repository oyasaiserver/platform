package io.oyasai.chat.paper

import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.chat.LocalChatPlan
import io.oyasai.chat.paper.chat.initialize
import io.oyasai.chat.paper.chat.join
import io.papermc.paper.event.player.AsyncChatEvent
import java.util.UUID
import java.util.concurrent.TimeUnit
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

// Paperのチャット・プレイヤーイベント処理。
private data class ChatCommitSnapshot(
    val playerId: UUID,
    val plan: LocalChatPlan,
    val text: String,
    val accepted: Boolean,
)

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
    val plan =
        if (cancelled) {
          LocalChatPlan.Rejected("Chat event was cancelled.")
        } else if (!reserved) {
          LocalChatPlan.Rejected("Chat configuration is reloading; please resend your message.")
        } else if (text.length > MAX_PAYLOAD_LENGTH) {
          LocalChatPlan.Rejected("Message is too long.")
        } else {
          planChatOnServerThread(playerId)
        }
    if (!cancelled) configureVanillaDelivery(event, plan)
    val commit = ChatCommitSnapshot(playerId, plan, text, !cancelled)
    plugin.server.scheduler.runTask(
        plugin,
        Runnable {
          try {
            if (commit.accepted) service.commitLocalChat(commit.playerId, commit.plan, commit.text)
          } finally {
            if (reserved) synchronized(plugin.chatLifecycleLock) { plugin.pendingChatCommits-- }
          }
        },
    )
  }

  // `/<チャンネル名>` という形のコマンドを作る。
  @EventHandler(priority = EventPriority.HIGHEST, ignoreCancelled = true)
  fun onChannelShortcut(event: PlayerCommandPreprocessEvent) {
    val commandLine = event.message.removePrefix("/")
    val separator = commandLine.indexOfFirst(Char::isWhitespace)
    val label =
        (if (separator < 0) commandLine else commandLine.substring(0, separator)).lowercase()
    val channel = plugin.runtime.config.channels.findShortcut(label) ?: return

    event.isCancelled = true
    if (plugin.reloadInProgress) {
      event.player.sendMessage(
          plugin.runtime.formatter.error("Chat configuration is reloading; please try again.")
      )
      return
    }

    val message = if (separator < 0) "" else commandLine.substring(separator + 1).trim()
    if (message.isEmpty()) plugin.runtime.chat.join(event.player, event.player, channel.id)
    else plugin.runtime.chat.sendOneShotChannel(event.player, channel, message)
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

  private fun configureVanillaDelivery(event: AsyncChatEvent, plan: LocalChatPlan) {
    when (plan) {
      is LocalChatPlan.Public ->
          configureChatDelivery(
              event,
              plan.recipientIds,
              plugin.runtime.formatter.renderer(plan.channel, plan.presentation),
          )
      is LocalChatPlan.Private ->
          if (plan.pending) event.viewers().clear()
          else
              configureChatDelivery(
                  event,
                  plan.recipientIds,
                  plugin.runtime.formatter.privateRenderer(
                      senderName = plan.senderPresentation.playerName,
                      targetName = plan.targetName,
                      senderPresentation = plan.senderPresentation,
                  ),
              )
      is LocalChatPlan.Rejected -> event.viewers().clear()
    }
  }

  private fun configureChatDelivery(
      event: AsyncChatEvent,
      recipientIds: Set<UUID>,
      renderer: io.papermc.paper.chat.ChatRenderer,
  ) {
    val existingViewers = event.viewers().toList()
    event.viewers().clear()
    existingViewers.filterTo(event.viewers()) { audience ->
      audience is Player && audience.uniqueId in recipientIds
    }
    if (event.player.uniqueId in recipientIds) event.viewers().add(event.player)
    event.viewers().add(plugin.server.consoleSender)
    event.renderer(renderer)
  }
}
