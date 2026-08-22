package io.oyasai.chat.paper.config

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.common.model.ChannelRegistry
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.model.ConfigValidator
import io.oyasai.chat.common.model.DiscordSettings
import io.oyasai.chat.common.model.NetworkSettings
import io.oyasai.chat.common.model.PrivateMessageSoundSettings
import org.bukkit.configuration.file.FileConfiguration

// Paper側設定ファイルのChatConfig変換。
// Validation処理はAI生成
object PaperConfigLoader {
  fun load(
      config: FileConfiguration,
      backendIdOverride: String? = System.getenv("OYASAI_SERVER_ID"),
  ): ChatConfig {
    val groups =
        config.getConfigurationSection("network.groups")?.getKeys(false)?.associateWith { group ->
          config.getStringList("network.groups.$group").toSet()
        } ?: emptyMap()
    val backendId =
        backendIdOverride?.trim()?.takeIf(String::isNotEmpty)
            ?: config.getString("network.backend-id", "").orEmpty()
    val channels =
        config.getConfigurationSection("channels")?.getKeys(false)?.map { id ->
          val path = "channels.$id"
          val aliases = config.getStringList("$path.aliases").map(String::lowercase).toSet()
          val shortcutCommands =
              config.getStringList("$path.shortcut-commands").map { it.trim().lowercase() }.toSet()
          ChannelDefinition(
              id = id,
              displayName = config.getString("$path.display-name", id) ?: id,
              aliases = aliases,
              shortcutCommands = aliases + shortcutCommands,
              prefix = config.getString("$path.prefix", id) ?: id,
              permission = config.getString("$path.permission"),
              autoJoin = config.getBoolean("$path.auto-join"),
              defaultChannel = config.getBoolean("$path.default"),
              networkGroup =
                  config
                      .getString("$path.network-group")
                      ?.trim()
                      ?.takeIf(String::isNotEmpty)
                      ?.let { group ->
                        when {
                          group !in groups -> group
                          backendId in groups.getValue(group) -> group
                          else -> null
                        }
                      },
          )
        } ?: emptyList()
    val network =
        NetworkSettings(
            backendId = backendId,
            groups = groups,
            remoteMessagePrefix = config.getString("network.remote-message-prefix", "") ?: "",
            remoteMessageSuffix = config.getString("network.remote-message-suffix", "") ?: "",
        )
    val registry = ChannelRegistry(channels)
    val errors = ConfigValidator.validate(network, registry)
    require(errors.isEmpty()) { errors.joinToString("; ") }

    val receiveSound =
        PrivateMessageSoundSettings(
            enabled = config.getBoolean("private-messages.receive-sound.enabled", true),
            sound =
                (config.getString("private-messages.receive-sound.sound")
                        ?: "minecraft:entity.experience_orb.pickup")
                    .trim(),
            volume = config.getDouble("private-messages.receive-sound.volume", 1.0).toFloat(),
            pitch = config.getDouble("private-messages.receive-sound.pitch", 1.0).toFloat(),
        )
    require(
        !receiveSound.enabled ||
            receiveSound.sound.matches(Regex("(?:[a-z0-9._-]+:)?[a-z0-9/._-]+"))
    ) {
      "private-messages.receive-sound.sound must be a valid lowercase sound key"
    }
    require(receiveSound.volume.isFinite() && receiveSound.volume in 0.0f..16.0f) {
      "private-messages.receive-sound.volume must be between 0.0 and 16.0"
    }
    require(receiveSound.pitch.isFinite() && receiveSound.pitch in 0.5f..2.0f) {
      "private-messages.receive-sound.pitch must be between 0.5 and 2.0"
    }
    return ChatConfig(
        network = network,
        channels = registry,
        chatFormat = config.getString("formatting.chat") ?: "<channel> <name>: <message>",
        privateMessageFormat =
            config.getString("formatting.private-message-chat")
                ?: "<gray>[<light_purple>PM</light_purple>]</gray> <white><sender></white> <dark_gray>-></dark_gray> <white><target></white><dark_gray>: </dark_gray><message>",
        externalChatFormat =
            config.getString("formatting.external-chat")
                ?: "<channel><white><name></white><dark_gray>: </dark_gray><message>",
        linkDomains =
            if (config.contains("discord.links.allowed-domains"))
                config.getStringList("discord.links.allowed-domains")
                    .map { it.trim().lowercase() }
            else listOf("media.discordapp.net", "cdn.discordapp.com"),
        playerNameHover =
            config.getString("formatting.player-name-hover") ?: "<gray>Player: <white><name>",
        playerNameClickCommand =
            config.getString("formatting.player-name-click-command") ?: "/msg <name> ",
        pmEnabledByDefault = config.getBoolean("private-messages.enabled-by-default", true),
        privateMessageReceiveSound = receiveSound,
        discord = DiscordSettings(config.getBoolean("discord.enabled", true)),
    )
  }
}
