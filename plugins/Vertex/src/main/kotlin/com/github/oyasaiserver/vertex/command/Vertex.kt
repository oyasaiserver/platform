package com.github.oyasaiserver.vertex.command

import org.bukkit.command.Command
import org.bukkit.command.CommandSender

object Vertex : Command("vertex") {
    override fun execute(
        p0: CommandSender,
        p1: String,
        p2: Array<out String>,
    ): Boolean {
        p0.sendMessage("Vertex command executed")
        return true
    }
}
