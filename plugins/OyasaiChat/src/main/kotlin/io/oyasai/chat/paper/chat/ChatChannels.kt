package io.oyasai.chat.paper.chat

import io.oyasai.chat.common.model.ChannelDefinition
import io.oyasai.chat.paper.state.PlayerChatState
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

// チャンネル参加・退出・一覧表示などの操作。
fun ChatService.initialize(player: Player) = states.initialize(player)

fun ChatService.join(sender: CommandSender, player: Player, input: String): Boolean {
  val channel = resolveChannel(sender, input) ?: return false
  if (!canUse(player, channel)) {
    sender.sendMessage(formatter.error("You do not have permission to use ${channel.displayName}."))
    return false
  }
  val state = states.initialize(player)
  state.joinedChannels += channel.id
  state.activeChannel = channel.id
  states.save(player)
  sender.sendMessage(formatter.info("Joined ${channel.displayName}."))
  return true
}

fun ChatService.leave(sender: CommandSender, player: Player, input: String): Boolean {
  val channel = resolveChannel(sender, input) ?: return false
  val state = states.initialize(player)
  if (channel.id !in state.joinedChannels) {
    sender.sendMessage(
        formatter.info("You were not listening to ${channel.displayName}; no change was needed.")
    )
    return true
  }
  if (state.joinedChannels.size == 1) {
    sender.sendMessage(formatter.error("You must keep at least one usable channel joined."))
    return false
  }
  state.joinedChannels -= channel.id
  if (state.activeChannel == channel.id) state.activeChannel = state.joinedChannels.first()
  states.save(player)
  sender.sendMessage(
      formatter.info(
          "Left ${channel.displayName}. Active channel: ${config.channels.find(state.activeChannel)?.displayName ?: state.activeChannel}."
      )
  )
  return true
}

fun ChatService.list(sender: CommandSender, player: Player?) {
  val lines =
      config.channels.channels
          .filter { player == null || canUse(player, it) }
          .joinToString("<gray>, </gray>") { channel ->
            val active = player?.let { state(it).activeChannel == channel.id } == true
            if (active) "<green>${channel.displayName}*</green>" else channel.displayName
          }
  sender.sendMessage(formatter.parse("<gray>Channels: </gray>$lines"))
}

fun ChatService.who(sender: CommandSender, player: Player?, input: String): Boolean {
  val channel = resolveChannel(sender, input) ?: return false
  if (player != null && !canUse(player, channel)) {
    sender.sendMessage(
        formatter.error("You do not have permission to view ${channel.displayName}.")
    )
    return false
  }
  val members =
      plugin.server.onlinePlayers
          .filter { online ->
            canUse(online, channel) && channel.id in state(online).joinedChannels
          }
          .map { it.name }
          .sorted()
  sender.sendMessage(
      formatter.parse(
          "<gray>${channel.displayName} members (${members.size}): </gray><white>${members.joinToString(", ").ifBlank { "none" }}"
      )
  )
  return true
}

fun ChatService.active(player: Player): ChannelDefinition? =
    config.channels.find(state(player).activeChannel)

fun ChatService.canUse(player: Player, channel: ChannelDefinition): Boolean {
  val permission = channel.permission
  return permission == null || player.hasPermission(permission)
}

fun ChatService.state(player: Player): PlayerChatState = states.initialize(player)

private fun ChatService.resolveChannel(
    sender: CommandSender,
    input: String,
): ChannelDefinition? =
    config.channels.find(input)
        ?: run {
          sender.sendMessage(formatter.error("Unknown channel '$input'. Use /chlist."))
          null
        }
