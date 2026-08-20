package io.oyasai.chat.paper.chat

import java.util.UUID
import net.kyori.adventure.text.Component
import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.network.PaperNetworkBridge
import io.oyasai.chat.paper.pm.PrivateMessageService
import io.oyasai.chat.paper.state.PlayerStateStore
import org.bukkit.entity.Player

// チャットの計画・表示・ネットワーク送信管理。
class ChatService(
    val plugin: OyasaiChatPlugin,
    val config: ChatConfig,
    val states: PlayerStateStore,
    val formatter: ChatFormatter,
) {
  lateinit var bridge: PaperNetworkBridge
  lateinit var privateMessages: PrivateMessageService

  /**
   * サーバースレッド上でチャットの配信計画を作成。
   * 不変データだけを返し、Paperの非同期イベント処理から安全に利用。
   */
  fun planLocalChat(playerId: UUID): LocalChatPlan {
    val player =
        plugin.server.getPlayer(playerId)
            ?: return LocalChatPlan.Rejected("Player is no longer online.")
    val state = state(player)
    val pendingConversation = privateMessages.isConversationPending(playerId)
    if (
        pendingConversation ||
            state.privateMessageModePeer != null ||
            state.privateMessageModeName != null
    ) {
      val localTarget = state.privateMessageModePeer?.let(plugin.server::getPlayer)
      val recipientIds = buildSet {
        add(player.uniqueId)
        localTarget?.let { add(it.uniqueId) }
      }
      return LocalChatPlan.Private(
          targetId = state.privateMessageModePeer,
          targetName = state.privateMessageModeName,
          recipientIds = recipientIds,
          senderPresentation = formatter.snapshot(player),
          pending = pendingConversation,
      )
    }

    val channel =
        active(player)
            ?: return LocalChatPlan.Rejected(
                "You have no active channel. Use /chlist and /join <channel>."
            )
    if (!canUse(player, channel)) {
      return LocalChatPlan.Rejected("You no longer have permission to use ${channel.displayName}.")
    }
    if (channel.id !in state.joinedChannels) {
      return LocalChatPlan.Rejected("You are not listening to ${channel.displayName}.")
    }
    val recipientIds =
        plugin.server.onlinePlayers
            .asSequence()
            .filter { recipient ->
              val recipientState = state(recipient)
              channel.id in recipientState.joinedChannels && canUse(recipient, channel)
            }
            .map { it.uniqueId }
            .toSet()
    return LocalChatPlan.Public(channel, recipientIds, formatter.snapshot(player))
  }

  /** Paperが標準チャットの配信を受け入れた後の、ローカル配信以外の処理確定。 */
  fun commitLocalChat(playerId: UUID, plan: LocalChatPlan, message: String) {
    val player =
        plugin.server.getPlayer(playerId)
            ?: run {
              plugin.logger.warning("Dropping post-chat side effects for offline player $playerId.")
              return
            }
    when (plan) {
      is LocalChatPlan.Public -> commitPublicChat(player, plan.channel, message)
      is LocalChatPlan.Private -> {
        privateMessages.commitConversationMessage(
            source = player,
            message = message,
            expectedPeer = plan.targetId,
            expectedName = plan.targetName,
        )
      }
      is LocalChatPlan.Rejected -> player.sendMessage(formatter.error(plan.reason))
    }
  }

  /** 送信者の現在のチャンネルを変更しない、指定チャンネルへの送信。 */
  fun sendOneShotChannel(player: Player, channel: ChannelDefinition, message: String): Boolean {
    if (message.isBlank()) {
      player.sendMessage(formatter.error("Message must not be blank."))
      return false
    }
    if (message.length > MAX_PAYLOAD_LENGTH) {
      player.sendMessage(formatter.error("Message is too long."))
      return false
    }
    if (!canUse(player, channel)) {
      player.sendMessage(
          formatter.error("You do not have permission to use ${channel.displayName}.")
      )
      return false
    }
    val state = state(player)
    if (channel.id !in state.joinedChannels) {
      player.sendMessage(
          formatter.error(
              "You are not listening to ${channel.displayName}. Use /join ${channel.id} first."
          )
      )
      return false
    }

    val component = formatter.chat(channel, player, message)
    plugin.server.onlinePlayers
        .asSequence()
        .filter { recipient ->
            val recipientState = state(recipient)
            channel.id in recipientState.joinedChannels && canUse(recipient, channel)
        }
        .forEach { it.sendMessage(component) }
    plugin.server.consoleSender.sendMessage(component)
    commitPublicChat(player, channel, message)
    return true
  }

  private fun commitPublicChat(player: Player, channel: ChannelDefinition, message: String) {
    val group = channel.networkGroup
    if (group != null) {
      val sent =
          bridge.send(
              player,
              NetworkEnvelope.backend(
                  type = MessageType.CHANNEL_MESSAGE,
                  backendId = config.network.backendId,
                  channelId = channel.id,
                  networkGroup = group,
                  originBackendSuffix =
                      config.network.remoteMessageSuffix.takeIf { it.isNotBlank() },
                  originPlayerId = player.uniqueId,
                  senderName = player.name,
                  content = message,
              ),
          )
      if (!sent)
          player.sendMessage(
              formatter.error(
                  "Network delivery was unavailable; this message was shown only on this backend."
              )
          )
    }
    plugin.runtime.discord.onMinecraftMessage(channel.id, player.name, message)
  }

  /** サーバースレッド上で動く呼び出し元向けの互換入口。 */
  fun handleLocalChat(player: Player, message: String) {
    val plan = planLocalChat(player.uniqueId)
    commitLocalChat(player.uniqueId, plan, message)
  }

  fun handleExternalChat(channelId: String, senderName: String, message: String) {
    if (senderName.isBlank() || message.isBlank() || message.length > MAX_PAYLOAD_LENGTH) {
      plugin.logger.warning("Rejected invalid external chat message for '$channelId'.")
      return
    }
    val channel = config.channels.find(channelId) ?: return
    deliverLocal(channel, senderName, null, message)
    if (channel.networkGroup != null) {
      val transport = plugin.server.onlinePlayers.firstOrNull()
      if (transport == null) {
        plugin.logger.warning(
            "Cannot route external message on '${channel.id}': no player connection is available for plugin messaging."
        )
      } else {
        val sent =
            bridge.send(
                transport,
                NetworkEnvelope.backend(
                    type = MessageType.CHANNEL_MESSAGE,
                    backendId = config.network.backendId,
                    channelId = channel.id,
                    networkGroup = channel.networkGroup,
                    originBackendSuffix =
                        config.network.remoteMessageSuffix.takeIf { it.isNotBlank() },
                    senderName = senderName,
                    content = message,
                ),
            )
        if (!sent)
            plugin.logger.warning(
                "External message for '${channel.id}' was shown locally but network delivery failed."
            )
      }
    }
  }

  internal fun deliverLocal(
      channel: ChannelDefinition,
      senderName: String,
      senderId: UUID?,
      message: String,
      originBackendSuffix: String? = null,
  ) {
    val suffix =
        originBackendSuffix?.takeIf { it.isNotBlank() }?.let(formatter::parse) ?: Component.empty()
    val suffixText = formatter.plain(suffix)
    plugin.logger.info(
        "[${channel.displayName}] <$senderName> ${consoleSafe(message)}${consoleSafe(suffixText)}"
    )
    plugin.server.onlinePlayers
        .filter { recipient ->
          val state = state(recipient)
          channel.id in state.joinedChannels && canUse(recipient, channel)
        }
        .forEach { recipient ->
          val sender =
              senderId?.let(plugin.server::getPlayer) ?: plugin.server.getPlayerExact(senderName)
          val component =
              if (sender != null) formatter.chat(channel, sender, message)
              else
                  formatter.parse(
                      "<dark_gray>[${channel.prefix}]</dark_gray> <white>${escape(senderName)}</white><dark_gray>: </dark_gray>${escape(message)}"
                  )
          recipient.sendMessage(component.append(suffix))
        }
  }

  private fun escape(value: String): String = value.replace("<", "&lt;").replace(">", "&gt;")

  private fun consoleSafe(value: String): String = value.replace('\r', ' ').replace('\n', ' ')
}
