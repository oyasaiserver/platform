package org.bukkit.craftbukkit.command

import com.mojang.brigadier.tree.CommandNode
import org.bukkit.command.Command
import org.bukkit.command.CommandSender

// Model Paper's public wrapper field without adding the server implementation to the test runtime.
class VanillaCommandWrapper(
    name: String,
    @JvmField val vanillaCommand: CommandNode<*>,
    aliases: List<String> = emptyList(),
) : Command(name, "", "", aliases) {
  override fun execute(sender: CommandSender, label: String, args: Array<out String>) =
      error("Must not execute in normalization tests")
}
