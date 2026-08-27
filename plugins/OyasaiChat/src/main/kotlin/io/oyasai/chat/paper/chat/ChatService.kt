package io.oyasai.chat.paper.chat

import io.oyasai.chat.api.ChatTextSender
import io.oyasai.chat.api.ChatTextSurface
import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.network.PaperNetworkBridge
import io.oyasai.chat.paper.pm.PrivateMessageService
import io.oyasai.chat.paper.state.PlayerStateStore
import io.oyasai.chat.paper.transform.RecipientTextDispatcher
import java.util.UUID
import net.kyori.adventure.text.Component
import org.bukkit.entity.Player

// チャットの計画・表示・ネットワーク送信管理。
class ChatService(
    val plugin: OyasaiChatPlugin,
    val config: ChatConfig,
    val states: PlayerStateStore,
    val formatter: ChatFormatter,
    val delivery: RecipientTextDispatcher,
) {
  lateinit var bridge: PaperNetworkBridge
  lateinit var privateMessages: PrivateMessageService

  fun ownsTransformation(surface: ChatTextSurface): Boolean = delivery.hasTransformer(surface)

  /** サーバースレッド上でチャットの配信計画を作成。 不変データだけを返し、Paperの非同期イベント処理から安全に利用。 */
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
    val recipientIds = recipients(channel).map(Player::getUniqueId).toSet()
    return LocalChatPlan.Public(channel, recipientIds, formatter.snapshot(player))
  }

  /** Paperが標準チャットの配信を受け入れた後の、ローカル配信以外の処理確定。 */
  fun commitLocalChat(
      playerId: UUID,
      plan: LocalChatPlan,
      message: String,
      manualDelivery: Boolean,
  ) {
    val player =
        plugin.server.getPlayer(playerId)
            ?: run {
              plugin.logger.warning("Dropping post-chat side effects for offline player $playerId.")
              return
            }
    when (plan) {
      is LocalChatPlan.Public -> {
        if (manualDelivery) {
          deliverPublicChat(player, plan, message)
        }
        commitPublicChat(player, plan.channel, message)
      }
      is LocalChatPlan.Private -> {
        privateMessages.commitConversationMessage(
            source = player,
            message = message,
            expectedPeer = plan.targetId,
            expectedName = plan.targetName,
            deliverLocal = manualDelivery,
        )
      }
      is LocalChatPlan.Rejected -> player.sendMessage(formatter.error(plan.reason))
    }
  }

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

    val presentation = formatter.snapshot(player)
    val recipients = recipients(channel)
    if (ownsTransformation(ChatTextSurface.PUBLIC_CHAT)) {
      delivery.dispatch(
          messageId = UUID.randomUUID(),
          surface = ChatTextSurface.PUBLIC_CHAT,
          sender = senderSnapshot(player),
          originalText = message,
          recipients = recipients,
          render = { _, body ->
            formatter.chat(
                channel,
                presentation,
                body,
            )
          },
      )
    } else {
      val component = formatter.chat(channel, presentation, Component.text(message))
      recipients.forEach { it.sendMessage(component) }
    }
    plugin.server.consoleSender.sendMessage(
        formatter.chat(channel, presentation, Component.text(message))
    )
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
                  originBackendPrefix =
                      config.network.remoteMessagePrefix.takeIf { it.isNotBlank() },
                  originBackendSuffix =
                      config.network.remoteMessageSuffix.takeIf { it.isNotBlank() },
                  originPlayerId = player.uniqueId,
                  senderCanSendLinks =
                      player.hasPermission("oyasaichat.links.send") || !config.linkDomainFilter,
                  senderLocale = player.locale().toLanguageTag(),
                  senderName = player.name,
                  content = message,
              ),
          )
      if (!sent) {
        player.sendMessage(
            formatter.error(
                "Network delivery was unavailable; this message was shown only on this backend."
            )
        )
      }
    }
    plugin.runtime.discord.onMinecraftMessage(channel.displayName, player, message)
  }

  fun handleLocalChat(player: Player, message: String) {
    val plan = planLocalChat(player.uniqueId)
    val manualDelivery = plan.requiresManualDelivery(::ownsTransformation)
    commitLocalChat(player.uniqueId, plan, message, manualDelivery)
  }

  fun handleExternalChat(
      channelId: String,
      senderName: String,
      message: String,
      sender: ExternalSender? = null,
      attachments: List<ExternalAttachment> = emptyList(),
  ) {
    if (
        senderName.isBlank() ||
            (message.isBlank() && attachments.isEmpty()) ||
            message.length > MAX_PAYLOAD_LENGTH
    ) {
      plugin.logger.warning("Rejected invalid external chat message for '$channelId'.")
      return
    }
    val channel = config.channels.find(channelId) ?: return
    deliverLocal(
        channel,
        senderName,
        null,
        message,
        externalSender = sender,
        externalAttachments = attachments,
        surface = ChatTextSurface.EXTERNAL_CHAT,
    )
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
                    originBackendPrefix =
                        config.network.remoteMessagePrefix.takeIf { it.isNotBlank() },
                    originBackendSuffix =
                        config.network.remoteMessageSuffix.takeIf { it.isNotBlank() },
                    senderCanSendLinks = true,
                    senderName = senderName,
                    content = message,
                ),
            )
        if (!sent) {
          plugin.logger.warning(
              "External message for '${channel.id}' was shown locally but network delivery failed."
          )
        }
      }
    }
  }

  internal fun deliverLocal(
      channel: ChannelDefinition,
      senderName: String,
      senderId: UUID?,
      message: String,
      messageId: UUID = UUID.randomUUID(),
      originBackendPrefix: String? = null,
      originBackendSuffix: String? = null,
      externalSender: ExternalSender? = null,
      externalAttachments: List<ExternalAttachment> = emptyList(),
      externalAuthorized: Boolean = true,
      senderLocale: String? = null,
      surface: ChatTextSurface = ChatTextSurface.PUBLIC_CHAT,
  ) {
    val prefix =
        originBackendPrefix?.takeIf { it.isNotBlank() }?.let(formatter::parse) ?: Component.empty()
    val suffix =
        originBackendSuffix?.takeIf { it.isNotBlank() }?.let(formatter::parse) ?: Component.empty()
    val prefixText = formatter.plain(prefix)
    val suffixText = formatter.plain(suffix)
    val senderPresentation =
        (senderId?.let(plugin.server::getPlayer) ?: plugin.server.getPlayerExact(senderName))?.let(
            formatter::snapshot
        )
    plugin.logger.info(
        "${consoleSafe(prefixText)}[${channel.displayName}] <$senderName> ${consoleSafe(message)}${consoleSafe(suffixText)}"
    )
    val recipients = recipients(channel)
    val render: (Player, Component) -> Component = { _, body ->
      val component =
          if (senderPresentation != null) {
            formatter.chat(
                channel,
                senderPresentation,
                body,
            )
          } else {
            formatter.externalChat(
                channel,
                senderName,
                body,
                externalSender,
                externalAttachments,
                externalAuthorized,
            )
          }
      prefix.append(component).append(suffix)
    }
    if (ownsTransformation(surface)) {
      delivery.dispatch(
          messageId = messageId,
          surface = surface,
          sender = ChatTextSender(senderId, senderName, senderLocale),
          originalText = message,
          recipients = recipients,
          render = render,
      )
    } else {
      recipients.forEach { it.sendMessage(render(it, Component.text(message))) }
    }
  }

  private fun deliverPublicChat(player: Player, plan: LocalChatPlan.Public, message: String) {
    val recipients = plan.recipientIds.mapNotNull(plugin.server::getPlayer)
    delivery.dispatch(
        messageId = UUID.randomUUID(),
        surface = ChatTextSurface.PUBLIC_CHAT,
        sender = senderSnapshot(player),
        originalText = message,
        recipients = recipients,
        render = { _, body ->
          formatter.chat(
              plan.channel,
              plan.presentation,
              body,
          )
        },
    )
  }

  private fun senderSnapshot(player: Player): ChatTextSender =
      ChatTextSender(player.uniqueId, player.name, player.locale().toLanguageTag())

  private fun recipients(channel: ChannelDefinition): List<Player> =
      plugin.server.onlinePlayers.filter { recipient ->
        val state = state(recipient)
        channel.id in state.joinedChannels && canUse(recipient, channel)
      }

  private fun consoleSafe(value: String): String = value.replace('\r', ' ').replace('\n', ' ')
}
