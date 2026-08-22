package io.oyasai.chat.paper.state

import io.oyasai.chat.common.model.ChatConfig

// 読み込み済みプレイヤー状態の現在設定への適用。
data class NormalizedPlayerState(
    val activeChannel: String,
    val joinedChannels: Set<String>,
    val privateMessagesEnabled: Boolean,
)

object PlayerStateNormalization {
  fun initial(
      config: ChatConfig,
      canUse: (String?) -> Boolean,
  ): NormalizedPlayerState {
    val default = config.channels.defaultChannel()?.takeIf { canUse(it.permission) }
    val joined =
        config.channels
            .autoJoinChannels()
            .filter { canUse(it.permission) }
            .mapTo(linkedSetOf()) { it.id }
    default?.let { joined += it.id }
    val active = default?.id ?: joined.firstOrNull().orEmpty()
    return NormalizedPlayerState(active, joined, config.pmEnabledByDefault)
  }

  fun normalize(
      state: PlayerChatState,
      config: ChatConfig,
      canUse: (String?) -> Boolean,
  ): NormalizedPlayerState {
    val joined =
        state.joinedChannels
            .mapNotNull { config.channels.find(it) }
            .filter { canUse(it.permission) }
            .map { it.id }
            .toSet()
            .toMutableSet()
    config.channels.autoJoinChannels().filter { canUse(it.permission) }.forEach { joined += it.id }
    val default = config.channels.defaultChannel()?.takeIf { canUse(it.permission) }
    if (joined.isEmpty() && default != null) joined += default.id
    val active =
        config.channels.find(state.activeChannel)?.id?.takeIf { it in joined }
            ?: joined.firstOrNull()
            ?: default?.id.orEmpty()
    return NormalizedPlayerState(active, joined, state.privateMessagesEnabled)
  }
}
