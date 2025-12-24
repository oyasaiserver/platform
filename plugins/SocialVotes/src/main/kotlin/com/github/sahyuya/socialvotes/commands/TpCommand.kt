package com.github.sahyuya.socialvotes.commands

import com.github.sahyuya.socialvotes.SocialVotes
import org.bukkit.Location
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class TpCommand : CommandExecutor {
    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("プレイヤーのみ実行可能です。")
            return true
        }

        if (args.isEmpty()) {
            sender.sendMessage("/svtp <id>")
            return true
        }

        val id = args[0].toIntOrNull()
        if (id == null) {
            sender.sendMessage("IDが無効です。")
            return true
        }

        val s = SocialVotes.dataManager.signById[id]
        if (s == null) {
            sender.sendMessage("ID $id の看板は存在しません。")
            return true
        }

        val world = org.bukkit.Bukkit.getWorld(s.world)
            ?: run {
                sender.sendMessage("ワールド ${s.world} が読み込まれていません。")
                return true
            }

        val loc = Location(
            world,
            s.x + 0.5,
            s.y + 0.5,
            s.z + 0.5,
            sender.location.yaw,
            sender.location.pitch
        )


        sender.teleport(loc)
        sender.sendMessage("ID:${s.id} の看板へテレポートしました。")

        return true
    }
}
