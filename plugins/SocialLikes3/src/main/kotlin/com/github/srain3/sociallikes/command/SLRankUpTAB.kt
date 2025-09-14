package com.github.srain3.sociallikes.command

import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object SLRankUpTAB: TabCompleter {
    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        label: String,
        args: Array<out String>
    ): MutableList<String>? {
        if (command.name != "slrankup") return null
        if (!sender.hasPermission("sociallikes3.slrankup")) {
            return null
        }
        if (sender !is Player) return null

        if (args.isEmpty()) {
            return mutableListOf("default","chukyu","jokyu","builder","takumi","blue")
        } else if (args.size <= 1) {
            val list = args[0].split(',')
            if (list.size <= 1) {
                return mutableListOf("default","chukyu","jokyu","builder","takumi","blue")
            } else {
                val rawStr = list.dropLast(1).toString().replace(" ", "").replace("\"", "").replace("[","").replace("]",",")
                val l = mutableListOf("default","chukyu","jokyu","builder","takumi","blue")
                val new = mutableListOf<String>()
                l.forEach { str ->
                    new.add(rawStr+str)
                }
                return new
            }
        } else if (args.size == 2) {
            return mutableListOf("<time(日数)>","説明:最近ログインしてる人に絞る場合は数字を小さめに","説明:過去の人も見たい場合数字を大きめに")
        } else {
            return mutableListOf()
        }
    }
}