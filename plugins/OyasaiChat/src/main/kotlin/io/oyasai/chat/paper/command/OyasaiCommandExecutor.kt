package io.oyasai.chat.paper.command

import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.chat.ChatService
import io.oyasai.chat.paper.chat.join
import io.oyasai.chat.paper.chat.leave
import io.oyasai.chat.paper.chat.list
import io.oyasai.chat.paper.chat.who
import io.oyasai.chat.paper.pm.PrivateMessageService
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

// OyasaiChatのコマンドとタブ補完処理。
class OyasaiCommandExecutor(
    private val plugin: OyasaiChatPlugin,
    private val chat: ChatService,
    private val pm: PrivateMessageService,
) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    return when (command.name.lowercase()) {
      "ch",
      "join" -> {
        val player = requirePlayer(sender) ?: return true
        if (args.isEmpty()) chat.list(sender, player)
        else chat.join(sender, player, args[0])
        true
      }
      "leave" -> {
        val player = requirePlayer(sender) ?: return true
        if (args.size != 1) sender.sendMessage(chat.formatter.error("Usage: /leave <channel>"))
        else chat.leave(sender, player, args[0])
        true
      }
      "chwho" -> {
        val player = sender as? Player
        if (args.size != 1) sender.sendMessage(chat.formatter.error("Usage: /chwho <channel>"))
        else chat.who(sender, player, args[0])
        true
      }
      "chlist" -> {
        chat.list(sender, sender as? Player)
        true
      }
      "setchannel" -> setChannel(sender, args)
      "msg",
      "tell",
      "message",
      "pm" -> {
        val player = sender as? Player
        if (args.size == 1 && player != null) pm.startConversation(player, args[0])
        else if (args.size < 2)
            sender.sendMessage(chat.formatter.error("Usage: /msg <player> <message>"))
        else pm.send(sender, args[0], args.drop(1).joinToString(" "))
        true
      }
      "r" -> {
        if (args.isEmpty()) sender.sendMessage(chat.formatter.error("Usage: /r <message>"))
        else pm.reply(sender, args.joinToString(" "))
        true
      }
      "oyasaichat" -> {
        if (args.size != 1 || !args[0].equals("reload", true)) {
          sender.sendMessage(chat.formatter.error("Usage: /oyasaichat reload"))
        } else if (!sender.hasPermission("oyasaichat.admin.reload")) {
          sender.sendMessage(
              chat.formatter.error("You do not have permission to use this command.")
          )
        } else {
          plugin.reloadRuntime(sender)
        }
        true
      }
      else -> false
    }
  }

  private fun setChannel(sender: CommandSender, args: Array<out String>): Boolean {
    if (!sender.isOp && !sender.hasPermission("oyasaichat.admin.setchannel")) {
      sender.sendMessage(chat.formatter.error("You do not have permission to use this command."))
      return true
    }
    if (args.size != 2) {
      sender.sendMessage(chat.formatter.error("Usage: /setchannel <player> <channel>"))
      return true
    }
    val target =
        Bukkit.getPlayerExact(args[0])
            ?: Bukkit.getOnlinePlayers().firstOrNull { it.name.equals(args[0], true) }
    if (target == null) {
      sender.sendMessage(chat.formatter.error("Player '${args[0]}' is offline."))
      return true
    }
    return if (chat.join(sender, target, args[1])) {
      sender.sendMessage(chat.formatter.info("Set ${target.name}'s active channel."))
      true
    } else true
  }

  private fun requirePlayer(sender: CommandSender): Player? =
      sender as? Player
          ?: run {
            sender.sendMessage(chat.formatter.error("This command requires a player."))
            null
          }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      when (command.name.lowercase()) {
        "ch",
        "join",
        "leave",
        "chwho",
        "setchannel" ->
            if (args.size == 1) {
              val partial = args[0].lowercase()
              if (command.name.equals("setchannel", true))
                  Bukkit.getOnlinePlayers().map(Player::getName).filter {
                    it.lowercase().startsWith(partial)
                  }
              else
                  chat.config.channels.channels
                      .flatMap { listOf(it.id, *it.aliases.toTypedArray()) }
                      .filter { it.startsWith(partial) }
            } else emptyList()
        "msg",
        "tell",
        "message",
        "pm" ->
            if (args.size == 1) {
              val partial = args[0]
              (Bukkit.getOnlinePlayers().map(Player::getName) + plugin.runtime.presence.names(partial))
                  .distinct()
                  .filter { it.lowercase().startsWith(partial.lowercase()) }
                  .sorted()
            } else emptyList()
        "oyasaichat" ->
            if (
                args.size == 1 &&
                    sender.hasPermission("oyasaichat.admin.reload") &&
                    "reload".startsWith(args[0], true)
            ) {
              listOf("reload")
            } else emptyList()
        else -> emptyList()
      }
}
