@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** コマンドマネージャー コマンドのルーティングとディスパッチを管理 */
class CommandManager(
    private val playerCommands: PlayerCommands,
    private val opCommands: OpCommands,
) : CommandExecutor {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED))
      return true
    }

    return when (command.name.lowercase()) {
      "bigwolf" -> handlePlayerCommand(sender, args)
      "bigwolfop" -> handleOpCommand(sender, args)
      else -> true
    }
  }

  private fun handlePlayerCommand(player: Player, args: Array<out String>): Boolean =
      playerCommands.handleCommand(player, args)

  private fun handleOpCommand(player: Player, args: Array<out String>): Boolean {
    if (!player.isOp) {
      player.sendMessage(Component.text("このコマンドはOP専用です。", RED))
      return true
    }

    return opCommands.handleCommand(player, args)
  }
}
