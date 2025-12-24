package com.github.sahyuya.socialvotes.commands

import com.github.sahyuya.socialvotes.SocialVotes
import com.github.sahyuya.socialvotes.data.SVGroup
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class SvTabCompleter : TabCompleter {

    private val baseCommands = listOf(
        "setgroup", "add", "list", "help"
    )

    private val ownerCommands = listOf(
        "remove", "startvote", "stopvote"
    )

    private val opCommands = listOf(
        "allclear", "delhere"
    )

    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        alias: String,
        args: Array<out String>
    ): MutableList<String> {

        val dm = SocialVotes.dataManager

        // -------------------------
        // /sv <tab>
        // -------------------------
        if (args.size == 1) {

            val list = mutableListOf<String>()
            list += baseCommands

            if (sender is Player) {
                list += ownerCommands
                if (sender.isOp) list += opCommands
            }

            val input = args[0].lowercase()
            return list.filter { it.startsWith(input) }.sorted().toMutableList()
        }

        // -------------------------
        // /sv <cmd> <group>
        // -------------------------
        if (args.size == 2 && sender is Player) {

            val input = args[1].lowercase()

            val allowedGroups =
                GroupPermissionUtil.ownedGroups(sender, dm.groupByName.values)

            return when (args[0].lowercase()) {

                "add", "startvote", "stopvote", "list" ->
                    allowedGroups.map { it.name }
                        .filter { it.startsWith(input) }
                        .toMutableList()

                "allclear" ->
                    if (sender.isOp)
                        dm.groupByName.keys.filter { it.startsWith(input) }.toMutableList()
                    else mutableListOf()

                else -> mutableListOf()
            }
        }

        return mutableListOf()
    }
}

object GroupPermissionUtil {
    fun ownedGroups(player: Player, groups: Collection<SVGroup>): List<SVGroup> {
        if (player.isOp) return groups.toList()
        return groups.filter { it.owner == player.uniqueId }
    }
}
