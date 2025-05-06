package com.github.oyasaiserver.vertex.command

import com.github.oyasaiserver.vertex.Vertex.Companion.essentials
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object Vertex : Command("vertex") {
    override fun execute(
        p0: CommandSender,
        p1: String,
        p2: Array<out String>,
    ): Boolean {
        if (p0 is Player) {
            p0.sendMessage("Hello, ${p0.name}!")
            p0.sendMessage(essentials.getUser(p0).displayName)
        }
        return true
    }
}
