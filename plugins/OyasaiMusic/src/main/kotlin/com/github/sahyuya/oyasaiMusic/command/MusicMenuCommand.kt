package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.gui.MainMenuScreen
import com.github.sahyuya.oyasaiMusic.gui.SongDetailScreen
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** `/musicmenu`（エイリアス `/mm`）: トップメニュー(メインメニュー)GUIを開く。 サヒュヤ氏の指示により追加（動作確認をGUIの目視無しでも行えるようにするため）。 */
class MusicMenuCommand(private val plugin: OyasaiMusic) : CommandExecutor, TabCompleter {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    val player = sender as? Player
    if (player == null) {
      sender.sendMessage("§cこのコマンドはプレイヤーのみ実行できます。")
      return true
    }
    when (args.firstOrNull()?.lowercase()) {
      null ->
          plugin.menuManager.open(
              player,
              MainMenuScreen(plugin, plugin.menuManager, player),
              rememberAsPrevious = false,
          )
      "play" ->
          withSong(player, args.getOrNull(1)) { song ->
            plugin.playbackController.play(player, song)
          }
      "open" ->
          withSong(player, args.getOrNull(1)) { song ->
            plugin.menuManager.open(
                player,
                SongDetailScreen(plugin, plugin.menuManager, player, song),
                rememberAsPrevious = false,
            )
            plugin.playbackController.play(player, song)
          }
      "resourcepack",
      "rp" ->
          when (args.getOrNull(1)?.lowercase()) {
            "allow" -> {
              val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
              if (BedrockUtil.isBedrock(player, prefix)) plugin.bedrockTransferService.allow(player)
              else plugin.resourcePackService.allow(player)
            }
            "deny" -> {
              val prefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
              if (BedrockUtil.isBedrock(player, prefix)) plugin.bedrockTransferService.deny(player)
              else plugin.resourcePackService.deny(player)
            }
            else -> player.sendMessage("§e/mm resourcepack|rp <allow|deny>")
          }
      else -> player.sendMessage("§e/mm [play|open|resourcepack] <楽曲ID|allow|deny>")
    }
    return true
  }

  private fun withSong(
      player: Player,
      rawId: String?,
      block: (com.github.sahyuya.oyasaiMusic.model.Song) -> Unit,
  ) {
    val id = rawId?.toLongOrNull()
    if (id == null || id <= 0) {
      player.sendMessage("§c楽曲IDは正の整数で指定してください。")
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val song = plugin.songRepository.findById(id)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (song == null) player.sendMessage("§c楽曲ID $id は見つかりません。")
                        else block(song)
                      },
                  )
            },
        )
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      when (args.size) {
        1 -> listOf("play", "open", "resourcepack", "rp").filter { it.startsWith(args[0], true) }
        2 ->
            if (args[0].equals("resourcepack", true) || args[0].equals("rp", true))
                listOf("allow", "deny").filter { it.startsWith(args[1], true) }
            else emptyList()
        else -> emptyList()
      }
}
