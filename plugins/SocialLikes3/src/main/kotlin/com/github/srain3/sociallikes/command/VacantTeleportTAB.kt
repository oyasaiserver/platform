package com.github.srain3.sociallikes.command

import org.bukkit.block.Biome
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

@Suppress("UnstableApiUsage", "removal")
object VacantTeleportTAB: TabCompleter {
    private val biomeList = mutableListOf<String>()
    init {
        Biome.values().forEach {
            biomeList.add(it.name())
        }
    }

    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        label: String,
        args: Array<out String>
    ): MutableList<String>? {
        if (command.name != "vacanttp") return null
        if (sender !is Player) return null

        if (args.isEmpty()) {
            return biomeList
        }
        if (args.size <= 1) {
            val regex = Regex(args[0])
            return biomeList.filter { regex.containsMatchIn(it) }.toMutableList()
        }
        return mutableListOf()
    }
}