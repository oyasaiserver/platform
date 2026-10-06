package io.oyasai.oyasaiAdminTools.staff

import org.bukkit.command.Command
import org.bukkit.command.PluginCommand

/**
 * Bukkit drops colliding aliases from PluginCommand.aliases. Use the approved labels explicitly.
 */
internal class StaffCommandRegistration(
    private val command: PluginCommand,
    private val labels: List<String>,
) {
  private val replaced = linkedMapOf<String, Command?>()

  fun claim(commands: MutableMap<String, Command>) {
    labels.forEach { label ->
      val old = commands[label]
      if (
          old !== command &&
              (old == null || (old is PluginCommand && old.plugin.name == "Essentials"))
      ) {
        if (!replaced.containsKey(label)) replaced[label] = old
        commands[label] = command
      }
    }
  }

  fun restore(commands: MutableMap<String, Command>) {
    replaced.forEach { (label, old) ->
      if (commands[label] === command) {
        if (old == null) commands.remove(label) else commands[label] = old
      }
    }
    replaced.clear()
  }
}
