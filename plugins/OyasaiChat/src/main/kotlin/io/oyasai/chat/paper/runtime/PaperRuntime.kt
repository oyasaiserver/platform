package io.oyasai.chat.paper.runtime

import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.chat.ChatFormatter
import io.oyasai.chat.paper.chat.ChatService
import io.oyasai.chat.paper.integration.DiscordBridge
import io.oyasai.chat.paper.integration.DiscordIntegration
import io.oyasai.chat.paper.integration.NoopDiscordBridge
import io.oyasai.chat.paper.network.PaperNetworkBridge
import io.oyasai.chat.paper.network.PaperNetworkHandler
import io.oyasai.chat.paper.network.PlayerPresenceCache
import io.oyasai.chat.paper.pm.PrivateMessageService
import io.oyasai.chat.paper.state.PlayerStateStore
import io.oyasai.chat.paper.transform.RecipientTextDispatcher
import io.oyasai.chat.paper.transform.RecipientTextTransformerRegistry

// Paper側機能の組み立てと再読み込み用ランタイム。
internal data class PaperRuntime(
    val config: ChatConfig,
    val states: PlayerStateStore,
    val formatter: ChatFormatter,
    val chat: ChatService,
    val bridge: PaperNetworkBridge,
    val presence: PlayerPresenceCache,
    var discord: DiscordBridge,
    val privateMessages: PrivateMessageService,
    val delivery: RecipientTextDispatcher,
    val dictionary: io.oyasai.chat.paper.japanize.JapanizeDictionaryStore,
)

internal object PaperRuntimeFactory {
  fun create(
      plugin: OyasaiChatPlugin,
      rawModel: ChatConfig,
      transformers: RecipientTextTransformerRegistry,
  ): PaperRuntime {
    rawModel.network.deliveryEnabled = plugin.networkDeliveryEnabled
    val dictionaryFile = java.io.File(plugin.dataFolder, "japanize-dictionary.yml")
    val fileDictionary = io.oyasai.chat.paper.japanize.LunaImport.dictionary(dictionaryFile)
    val model =
        rawModel.copy(
            japanize =
                rawModel.japanize.copy(dictionary = fileDictionary + rawModel.japanize.dictionary)
        )
    validateShortcutCommands(plugin, model)
    val states = PlayerStateStore(plugin, model)
    val formatter = ChatFormatter(plugin, model)
    val delivery = RecipientTextDispatcher(plugin, transformers)
    val chat = ChatService(plugin, model, states, formatter, delivery)
    val bridge = PaperNetworkBridge(plugin, model, PaperNetworkHandler(plugin, chat))
    chat.bridge = bridge
    val presence = PlayerPresenceCache(plugin, chat)
    val privateMessages = PrivateMessageService(plugin, chat)
    chat.privateMessages = privateMessages
    return PaperRuntime(
        model,
        states,
        formatter,
        chat,
        bridge,
        presence,
        createDiscordBridge(plugin, model),
        privateMessages,
        delivery,
        io.oyasai.chat.paper.japanize.JapanizeDictionaryStore(
            dictionaryFile,
            rawModel.japanize.dictionary,
            initial = fileDictionary,
        ),
    )
  }

  internal fun createDiscordBridge(plugin: OyasaiChatPlugin, model: ChatConfig): DiscordBridge =
      when {
        !model.discord.enabled -> {
          plugin.logger.info("Discord integration is disabled by configuration.")
          NoopDiscordBridge(plugin)
        }
        !plugin.server.pluginManager.isPluginEnabled("DiscordSRV") -> {
          plugin.logger.info("DiscordSRV is not installed; Discord integration is disabled safely.")
          NoopDiscordBridge(plugin)
        }
        else ->
            runCatching { DiscordIntegration(plugin, model) }
                .getOrElse {
                  plugin.logger.severe(
                      "DiscordSRV adapter could not be loaded; Discord integration is disabled: ${it.message}"
                  )
                  NoopDiscordBridge(plugin)
                }
      }

  // Validation処理はAI生成
  private fun validateShortcutCommands(plugin: OyasaiChatPlugin, model: ChatConfig) {
    val pluginLabels =
        listOf(
                "ch",
                "join",
                "leave",
                "chwho",
                "chlist",
                "setchannel",
                "msg",
                "r",
                "japanize",
                "oyasaichat",
            )
            .flatMap {
              plugin.getCommand(it)?.let { command -> listOf(command.name) + command.aliases }
                  ?: emptyList()
            }
            .map(String::lowercase)
            .toSet()
    val conflicts =
        model.channels.channels.flatMap { it.shortcutCommands }.filter { it in pluginLabels }
    require(conflicts.isEmpty()) {
      "Channel shortcut commands conflict with OyasaiChat commands: ${conflicts.joinToString(", ")}"
    }
  }
}
