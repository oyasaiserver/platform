package io.oyasai.chat.common.model

// ネットワークとチャンネル設定の整合性確認。
// Validation処理はAI生成
object ConfigValidator {
  fun validate(network: NetworkSettings, registry: ChannelRegistry): List<String> {
    val errors = mutableListOf<String>()
    if (network.backendId.isBlank()) errors += "network.backend-id must not be blank"
    if (network.remoteMessagePrefix.length > 256)
        errors += "network.remote-message-prefix exceeds 256 characters"
    if (network.remoteMessageSuffix.length > 256)
        errors += "network.remote-message-suffix exceeds 256 characters"
    if (network.groups.keys.any { it.isBlank() })
        errors += "network.groups contains a blank group name"
    network.groups.forEach { (group, backends) ->
      if (backends.isEmpty()) errors += "network group '$group' must contain at least one backend"
      if (backends.any { it.isBlank() })
          errors += "network group '$group' contains a blank backend id"
    }
    if (registry.channels.isEmpty()) errors += "at least one channel must be configured"
    val defaults = registry.channels.count { it.defaultChannel }
    if (defaults != 1) errors += "exactly one channel must have default: true (found $defaults)"
    val ids = mutableSetOf<String>()
    val names = mutableMapOf<String, String>()
    val shortcuts = mutableMapOf<String, String>()
    val shortcutPattern = Regex("[a-z0-9_.-]+")
    registry.channels.forEach { channel ->
      if (channel.id.isBlank()) errors += "channel id must not be blank"
      if (!ids.add(channel.id.lowercase())) errors += "duplicate channel id '${channel.id}'"
      sequenceOf(channel.id, *channel.aliases.toTypedArray()).forEach { name ->
        val previous = names.put(name.lowercase(), channel.id)
        if (previous != null && previous != channel.id)
            errors += "channel name '$name' is used by both '$previous' and '${channel.id}'"
      }
      channel.shortcutCommands.forEach { shortcut ->
        if (!shortcut.matches(shortcutPattern)) {
          errors +=
              "channel '${channel.id}' shortcut-command '$shortcut' must contain only lowercase letters, digits, _, . or -"
        }
        val previous = shortcuts.put(shortcut.lowercase(), channel.id)
        if (previous != null && previous != channel.id) {
          errors += "shortcut-command '$shortcut' is used by both '$previous' and '${channel.id}'"
        }
      }
      if (channel.networkGroup != null && !network.groups.containsKey(channel.networkGroup)) {
        errors +=
            "channel '${channel.id}' references missing network group '${channel.networkGroup}'"
      }
    }
    return errors.distinct()
  }
}
