package io.oyasai.chat.common.model

// チャンネル定義と検索。
data class ChannelDefinition(
    val id: String,
    val displayName: String,
    val aliases: Set<String> = emptySet(),
    val shortcutCommands: Set<String> = emptySet(),
    val prefix: String = displayName,
    val permission: String? = null,
    val autoJoin: Boolean = false,
    val defaultChannel: Boolean = false,
    val networkGroup: String? = null,
)

class ChannelRegistry(definitions: Collection<ChannelDefinition>) {
  val channels: List<ChannelDefinition> = definitions.toList()
  private val lookup: Map<String, ChannelDefinition> = buildMap {
    channels.forEach { channel ->
      put(channel.id.lowercase(), channel)
      channel.aliases.forEach { put(it.lowercase(), channel) }
    }
  }
  private val shortcutLookup: Map<String, ChannelDefinition> = buildMap {
    channels.forEach { channel ->
      channel.shortcutCommands.forEach { put(it.lowercase(), channel) }
    }
  }

  fun find(input: String): ChannelDefinition? = lookup[input.trim().lowercase()]

  fun findShortcut(input: String): ChannelDefinition? = shortcutLookup[input.trim().lowercase()]

  fun defaultChannel(): ChannelDefinition? = channels.firstOrNull { it.defaultChannel }

  fun autoJoinChannels(): List<ChannelDefinition> = channels.filter { it.autoJoin }
}

data class NetworkSettings(
    val backendId: String,
    val groups: Map<String, Set<String>>,
    val remoteMessagePrefix: String = "",
    val remoteMessageSuffix: String = "",
) {
  fun resolve(group: String?): Set<String>? = group?.let { groups[it] }

  fun knownBackends(): Set<String> = groups.values.flatten().toSet()
}

data class ChatConfig(
    val network: NetworkSettings,
    val channels: ChannelRegistry,
    val chatFormat: String,
    val privateMessageFormat: String,
    val playerNameHover: String,
    val playerNameClickCommand: String,
    val pmEnabledByDefault: Boolean,
    val privateMessageReceiveSound: PrivateMessageSoundSettings,
    val discord: DiscordSettings,
)

data class PrivateMessageSoundSettings(
    val enabled: Boolean,
    val sound: String,
    val volume: Float,
    val pitch: Float,
)

data class DiscordSettings(
    val enabled: Boolean,
)
