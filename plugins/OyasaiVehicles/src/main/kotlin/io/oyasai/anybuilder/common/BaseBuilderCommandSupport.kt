package io.oyasai.anybuilder.common

import io.oyasai.toolbox.Tools
import java.util.Locale
import org.bukkit.command.CommandExecutor
import org.bukkit.command.TabCompleter
import org.bukkit.event.Listener

// anybuilder common - command routing & tab helpers
// Used by: carbuilder2 (cbmenu), aircraftbuilder (ac), timeattack, milepoint, realvehicle

object BuilderCommandRouter {
  fun routeSubCommand(
      subCommand: String,
      adminCommands: Set<String>,
      managerCommands: Set<String>,
      generalCommands: Set<String>,
      handleAdmin: (String) -> Boolean,
      handleManager: (String) -> Boolean,
      handleGeneral: (String) -> Boolean,
      handleUnknown: () -> Boolean = { false }
  ): Boolean {
    return when {
      subCommand in adminCommands -> handleAdmin(subCommand)
      subCommand in managerCommands -> handleManager(subCommand)
      subCommand in generalCommands -> handleGeneral(subCommand)
      else -> handleUnknown()
    }
  }
}

object BuilderLifecycle {
  fun register(
      commandName: String,
      executor: CommandExecutor,
      tabCompleter: TabCompleter,
      events: Listener,
      reloadCache: () -> Unit = {}
  ) {
    val plugin = Tools.pl ?: return
    plugin.getCommand(commandName)?.apply {
      setExecutor(executor)
      setTabCompleter(tabCompleter)
    }
    plugin.server.pluginManager.registerEvents(events, plugin)
    reloadCache()
  }
}

object BuilderCommandTabSupport {
  private fun filterBy(
      current: String,
      values: Collection<String>,
      predicate: (normalizedValue: String, normalizedCurrent: String) -> Boolean
  ): MutableList<String> {
    val c = current.lowercase(Locale.ROOT)
    return values.filter { value -> predicate(value.lowercase(Locale.ROOT), c) }.toMutableList()
  }

  fun filterStartsWith(current: String, values: Collection<String>): MutableList<String> {
    return filterBy(current, values) { value, c -> value.startsWith(c) }
  }

  fun filterContains(current: String, values: Collection<String>): MutableList<String> {
    return filterBy(current, values) { value, c -> value.contains(c) }
  }
}
