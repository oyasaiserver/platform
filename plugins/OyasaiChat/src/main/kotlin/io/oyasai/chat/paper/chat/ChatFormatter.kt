package io.oyasai.chat.paper.chat

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.papermc.paper.chat.ChatRenderer
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.minimessage.tag.resolver.Placeholder
import net.kyori.adventure.text.minimessage.tag.resolver.TagResolver
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.entity.Player

// チャットやPMの表示用Component変換。
data class ChatPresentationSnapshot(
    val playerName: String,
    val playerDisplayName: Component,
    val chatFormat: String,
    val vaultPrefix: Component,
    val vaultSuffix: Component,
)

/** Discordなどの外部送信者のメタデータ。 */
data class ExternalSender(
    val id: String,
    val username: String,
    val nickname: String?,
    val roleColorHex: String?,
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
    val prefix = mini.deserialize(channel.prefix).clickEvent(ClickEvent.runCommand("/chlist"))
    val name =
        snapshot.playerDisplayName.let { component ->
          val withHover =
              if (config.playerNameHover.isBlank()) component
              else
                  component.hoverEvent(
                      HoverEvent.showText(
                          mini.deserialize(
                              config.playerNameHover.withPlayerName(snapshot.playerName),
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
          if (
              config.playerNameClickCommand.isBlank() ||
                  snapshot.chatFormat.hasClickAroundPlayerName()
          )
              withHover
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
   * Paperは全閲覧者に同じComponentを配信する。
   */
  fun privateRenderer(
      senderName: String,
      targetName: String?,
      senderPresentation: ChatPresentationSnapshot,
  ): ChatRenderer =
      ChatRenderer.viewerUnaware { _, _, message ->
        privateMessage(
            senderName = senderName,
            targetName = targetName ?: "(unresolved)",
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
          format.withPlayerName(playerName.orEmpty()),
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

  /** PMの表示。チャット入力・コマンド・ネットワーク経由のすべてで同じフォーマットを使う。 */
  fun privateMessage(
      senderName: String,
      targetName: String,
      message: Component,
      presentation: ChatPresentationSnapshot?,
  ): Component {
    val resolved =
        presentation
            ?: ChatPresentationSnapshot(
                playerName = senderName,
                playerDisplayName = Component.text(senderName),
                chatFormat = config.chatFormat,
                vaultPrefix = Component.empty(),
                vaultSuffix = Component.empty(),
            )
    return mini.deserialize(
        config.privateMessageFormat.withPlayerName(resolved.playerName),
        TagResolver.resolver(
            Placeholder.component("sender", resolved.playerDisplayName),
            Placeholder.component("sender_name", Component.text(senderName)),
            Placeholder.component("target", Component.text(targetName)),
            Placeholder.component("player_name", Component.text(resolved.playerName)),
            Placeholder.component("vault_prefix", resolved.vaultPrefix),
            Placeholder.component("vault_suffix", resolved.vaultSuffix),
            Placeholder.component("message", message),
        ),
    )
  }

  /** Discordなどの外部発メッセージの表示。 */
  fun externalChat(
      channel: ChannelDefinition,
      senderName: String,
      message: String,
      sender: ExternalSender?,
  ): Component {
    val resolved =
        sender
            ?: ExternalSender(id = "", username = senderName, nickname = null, roleColorHex = null)
    val displayName = resolved.nickname ?: resolved.username
    val displayComponent =
        resolved.roleColorHex
            ?.let(TextColor::fromHexString)
            ?.let { color -> Component.text(displayName, color) }
            ?: Component.text(displayName)
    return mini.deserialize(
        config.externalChatFormat,
        TagResolver.resolver(
            Placeholder.component("channel", mini.deserialize(channel.prefix)),
            Placeholder.component("displayname_colored", displayComponent),
            Placeholder.unparsed("name", senderName),
            Placeholder.unparsed("username", resolved.username),
            Placeholder.unparsed("displayname", displayName),
            Placeholder.unparsed("user_id", resolved.id),
            Placeholder.unparsed("message", message),
        ),
    )
  }

  fun parse(value: String): Component = mini.deserialize(value)

  fun info(value: String): Component = Component.text(value)

  fun error(value: String): Component = Component.text(value)

  fun plain(component: Component): String = plain.serialize(component)

  private fun String.withPlayerName(playerName: String): String = replace("\$name", playerName)

  private fun String.hasClickAroundPlayerName(): Boolean {
    val playerNameIndex =
        sequenceOf(indexOf("<name>"), indexOf("<displayname>")).filter { it >= 0 }.minOrNull()
            ?: return false
    var clickStart = indexOf("<click:")
    while (clickStart >= 0 && clickStart < playerNameIndex) {
      if (indexOf("</click>", clickStart) > playerNameIndex) return true
      clickStart = indexOf("<click:", clickStart + 1)
    }
    return false
  }
}
