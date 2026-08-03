package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.item.PhysicalMusicPlayerItem
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/**
 * `/getmusicplayer [player]`（エイリアス `/getmp`）: 物理アイテム「音楽プレイヤー」を取得する。
 * サヒュヤ氏の指示: 引数無し(自分専用)は一般プレイヤーも使用可、プレイヤー指定はOP/コンソール専用
 * （一般プレイヤーは他人を指定できない）。
 */
class GetMusicPlayerCommand : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (args.isEmpty()) {
            val self = sender as? Player
            if (self == null) {
                sender.sendMessage("§cコンソールから実行する場合はプレイヤー名を指定してください。")
                return true
            }
            self.inventory.addItem(PhysicalMusicPlayerItem.create())
            self.sendMessage("§a音楽プレイヤーを取得しました。")
            return true
        }

        // プレイヤー指定はOP(oyasaimusic.admin)またはコンソール/コマンドブロック等の非プレイヤー専用。
        if (sender is Player && !sender.hasPermission("oyasaimusic.admin")) {
            sender.sendMessage("§c一般プレイヤーは自分専用のみ取得できます。引数無しで実行してください: /getmusicplayer")
            return true
        }

        val target = Bukkit.getPlayerExact(args[0])
        if (target == null) {
            sender.sendMessage("§cプレイヤーが見つかりません: ${args[0]}")
            return true
        }
        target.inventory.addItem(PhysicalMusicPlayerItem.create())
        sender.sendMessage("§a${target.name} に音楽プレイヤーを渡しました。")
        if (sender != target) target.sendMessage("§a音楽プレイヤーを受け取りました。")
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> =
        if (args.size == 1 && (sender !is Player || sender.hasPermission("oyasaimusic.admin"))) {
            Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(args[0], ignoreCase = true) }
        } else {
            emptyList()
        }
}
