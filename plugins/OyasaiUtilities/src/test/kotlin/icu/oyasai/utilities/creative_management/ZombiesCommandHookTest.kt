package icu.oyasai.utilities.creative_management

import java.lang.reflect.Proxy
import kotlin.test.*
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabCompleter
import org.bukkit.plugin.Plugin

class ZombiesCommandHookTest {
  private inline fun <reified T> proxy(): T =
      Proxy.newProxyInstance(T::class.java.classLoader, arrayOf(T::class.java)) { _, _, _ -> null }
          as T

  private fun command(): PluginCommand {
    val constructor =
        PluginCommand::class.java.getDeclaredConstructor(String::class.java, Plugin::class.java)
    constructor.isAccessible = true
    return constructor.newInstance("zombies", proxy<Plugin>())
  }

  @Test
  fun `direct GUI dispatch keeps native result and completion with protection around it`() {
    val command = command()
    val calls = mutableListOf<String>()
    val original =
        object : CommandExecutor, TabCompleter {
          override fun onCommand(
              sender: CommandSender,
              cmd: Command,
              label: String,
              args: Array<out String>,
          ): Boolean {
            calls.add("native:$label:${args.joinToString()}")
            return false
          }

          override fun onTabComplete(
              sender: CommandSender,
              cmd: Command,
              label: String,
              args: Array<out String>,
          ) = listOf("join")
        }
    command.setExecutor(original)
    val close =
        interceptZombiesCommand(
            command,
            { _, _ ->
              calls.add("protect")
              true
            },
            { calls.add("settle") },
        )
    assertFalse(
        command.executor.onCommand(proxy<CommandSender>(), command, "z", arrayOf("join", "arena"))
    )
    assertEquals(listOf("protect", "native:z:join, arena", "settle"), calls)
    assertSame(original, command.tabCompleter)
    close()
    assertSame(original, command.executor)
    assertNull(command.tabCompleter)
  }

  @Test
  fun `failed native join still checks recovery and failed protection never enters native game`() {
    val command = command()
    var nativeCalls = 0
    var settled = 0
    command.setExecutor { _, _, _, _ ->
      nativeCalls++
      error("native failure")
    }
    val close = interceptZombiesCommand(command, { _, _ -> true }, { settled++ })
    assertFails { command.executor.onCommand(proxy<CommandSender>(), command, "z", emptyArray()) }
    assertEquals(1, settled)
    close()
    val closeDenied = interceptZombiesCommand(command, { _, _ -> false }, { settled++ })
    assertTrue(command.executor.onCommand(proxy<CommandSender>(), command, "z", emptyArray()))
    assertEquals(1, nativeCalls)
    assertEquals(1, settled)
    val newer = CommandExecutor { _, _, _, _ -> true }
    command.setExecutor(newer)
    closeDenied()
    assertSame(newer, command.executor, "do not overwrite another plugin's later hook")
  }
}
