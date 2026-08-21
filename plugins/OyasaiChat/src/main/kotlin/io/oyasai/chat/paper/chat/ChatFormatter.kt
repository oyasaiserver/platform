package io.oyasai.chat.paper.chat

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.papermc.paper.chat.ChatRenderer
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.minimessage.tag.resolver.Placeholder
import net.kyori.adventure.text.minimessage.tag.resolver.TagResolver
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.entity.Player

// チャットやPMの表示用Component変換。
data class ChatPresentationSnapshot(
    val playerName: String,
    val playerDisplayName: Component,
    val chatFormat: String,
    val vaultPrefix: Component,
    val vaultSuffix: Component,
)

class ChatFormatter(
    private val plugin: OyasaiChatPlugin,
    private val config: ChatConfig,
) {
  private val mini = MiniMessage.miniMessage()
  private val plain = PlainTextComponentSerializer.plainText()
  private val placeholderSupport = ChatPlaceholderSupport(plugin)

  /** 任意プロバイダがBukkit APIを使うため、サーバースレッド上で呼び出す。 */
  fun snapshot(player: Player): ChatPresentationSnapshot =
      ChatPresentationSnapshot(
          playerName = player.name,
          playerDisplayName = player.displayName(),
          chatFormat = placeholderSupport.expand(player, config.chatFormat),
          vaultPrefix = placeholderSupport.prefix(player),
          vaultSuffix = placeholderSupport.suffix(player),
      )

  fun chat(channel: ChannelDefinition, sender: Player, message: String): Component {
    return chat(channel, snapshot(sender), Component.text(message))
  }

  fun chat(
      channel: ChannelDefinition,
      snapshot: ChatPresentationSnapshot,
      message: Component,
  ): Component {
    val prefix = Component.text(channel.prefix).clickEvent(ClickEvent.runCommand("/chlist"))
    val name =
        snapshot.playerDisplayName.let { component ->
          val withHover =
              if (config.playerNameHover.isBlank()) component
              else
                  component.hoverEvent(
                      HoverEvent.showText(
                          mini.deserialize(
                              config.playerNameHover.withPlayerNamePlaceholder(),
                              TagResolver.resolver(
                                  Placeholder.component("name", snapshot.playerDisplayName),
                                  Placeholder.component("displayname", snapshot.playerDisplayName),
                                  Placeholder.component(
                                      "player_name",
                                      Component.text(snapshot.playerName),
                                  ),
                              ),
                          )
                      )
                  )
          if (config.playerNameClickCommand.isBlank()) withHover
          else
              withHover.clickEvent(
                  ClickEvent.suggestCommand(
                      config.playerNameClickCommand
                          .replace("<name>", snapshot.playerName)
                          .replace("\$name", snapshot.playerName)
                  )
              )
        }
    return render(
        snapshot.chatFormat,
        prefix,
        name,
        snapshot.vaultPrefix,
        snapshot.vaultSuffix,
        message,
        snapshot.playerName,
    )
  }

  fun renderer(channel: ChannelDefinition, snapshot: ChatPresentationSnapshot): ChatRenderer =
      ChatRenderer.viewerUnaware { _, _, message -> chat(channel, snapshot, message) }

  /**
   * AsyncChatEventから届いたPMモード入力用のRenderer。
   *
   * Paperはプレイヤーとコンソールに同じComponentを使うため、閲覧者を区別しない。
   * 閲覧者ごとに変えるRendererでは、受信者によってメッセージが変わり、Paper標準のサーバーログに 正しく反映されない可能性あり。
   */
  fun privateRenderer(
      senderName: String,
      targetName: String?,
      senderPresentation: ChatPresentationSnapshot,
  ): ChatRenderer =
      ChatRenderer.viewerUnaware { _, _, message ->
        privateChatComponent(
            sender = senderName,
            target = targetName ?: "(unresolved)",
            message = message,
            presentation = senderPresentation,
        )
      }

  private fun render(
      format: String,
      prefix: Component,
      name: Component,
      vaultPrefix: Component,
      vaultSuffix: Component,
      message: Component,
      playerName: String? = null,
  ): Component =
      mini.deserialize(
          format.withPlayerNamePlaceholder(),
          TagResolver.resolver(
              Placeholder.component("channel", prefix),
              Placeholder.component("name", name),
              Placeholder.component("displayname", name),
              Placeholder.component("player_name", Component.text(playerName.orEmpty())),
              Placeholder.component("vault_prefix", vaultPrefix),
              Placeholder.component("vault_suffix", vaultSuffix),
              Placeholder.component("message", message),
          ),
      )

  private fun render(
      format: String,
      player: Player?,
      prefix: Component,
      name: Component,
      message: String,
  ): Component {
    val snapshot = player?.let(::snapshot)
    return render(
        format = if (player != null) placeholderSupport.expand(player, format) else format,
        prefix = prefix,
        name = name,
        vaultPrefix = snapshot?.vaultPrefix ?: Component.empty(),
        vaultSuffix = snapshot?.vaultSuffix ?: Component.empty(),
        message = Component.text(message),
        playerName = snapshot?.playerName,
    )
  }

  fun privateMessage(
      sender: String,
      target: String,
      message: String,
      outgoing: Boolean,
  ): Component {
    val format = if (outgoing) config.privateMessageFormat else config.privateMessageReceiveFormat
    val fake = Bukkit.getPlayerExact(sender)
    val displayPlayer = Bukkit.getPlayerExact(if (outgoing) target else sender)
    val name = displayPlayer?.displayName() ?: Component.text(if (outgoing) target else sender)
    return render(format, fake, Component.text("PM"), name, message)
  }

  private fun privateChatComponent(
      sender: String,
      target: String,
      message: Component,
      presentation: ChatPresentationSnapshot,
  ): Component =
      mini.deserialize(
          config.privateMessageChatFormat.withPlayerNamePlaceholder(),
          TagResolver.resolver(
              Placeholder.component("sender", presentation.playerDisplayName),
              Placeholder.component("sender_name", Component.text(sender)),
              Placeholder.component("target", Component.text(target)),
              Placeholder.component("player_name", Component.text(presentation.playerName)),
              Placeholder.component("vault_prefix", presentation.vaultPrefix),
              Placeholder.component("vault_suffix", presentation.vaultSuffix),
              Placeholder.component("message", message),
          ),
      )

  fun parse(value: String): Component = mini.deserialize(value)

  fun info(value: String): Component = Component.text(value)

  fun error(value: String): Component = Component.text(value)

  fun plain(component: Component): String = plain.serialize(component)

  private fun String.withPlayerNamePlaceholder(): String = replace("\$name", "<player_name>")
}
