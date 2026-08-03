package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

/** 管理操作を集約した `/oyasaimusic` コマンド。 */
class OyasaiMusicCommand(private val plugin: OyasaiMusic) : CommandExecutor, TabCompleter {
    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (!sender.hasPermission("oyasaimusic.admin")) {
            sender.sendMessage("§cこのコマンドを実行する権限がありません。")
            return true
        }
        when (args.firstOrNull()?.lowercase()) {
            "reload" -> {
                plugin.reloadRuntimeConfiguration()
                plugin.rankingCacheService.reloadCache()
                sender.sendMessage("§aOyasaiMusicの設定とランキングキャッシュを再読み込みしました。")
            }
            "update" -> {
                plugin.rankingCacheService.refreshPeriodRankings()
                sender.sendMessage("§a日間・週間ランキングの更新を開始しました。")
            }
            else -> sender.sendMessage("§e/oyasaimusic <reload|update>")
        }
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> =
        if (args.size == 1) listOf("reload", "update").filter { it.startsWith(args[0], true) } else emptyList()
}
