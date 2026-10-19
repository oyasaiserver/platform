package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

class AssistantSenderChoiceTest {
  private fun command(name: String): Command =
      object : Command(name) {
        override fun execute(sender: CommandSender, label: String, args: Array<out String>) = true
      }

  private fun pluginCommand(
      name: String,
      completer: TabCompleter?,
  ): org.bukkit.command.PluginCommand {
    val plugin =
        java.lang.reflect.Proxy.newProxyInstance(
            org.bukkit.plugin.Plugin::class.java.classLoader,
            arrayOf(org.bukkit.plugin.Plugin::class.java),
        ) { _, method, _ ->
          if (method.name == "getName") "Owner" else null
        } as org.bukkit.plugin.Plugin
    return org.bukkit.command.PluginCommand::class
        .java
        .getDeclaredConstructor(String::class.java, org.bukkit.plugin.Plugin::class.java)
        .apply { isAccessible = true }
        .newInstance(name, plugin)
        .also { it.tabCompleter = completer }
  }

  /**
   * Paper compiles a vanilla player requirement (`Players.checkCanInteract`, the command tree's
   * version of "the sender must be a player") into one tab completer: a raw `Predicate` that always
   * answers false. That is the only marker the decision uses.
   */
  private val paperPlayerRequirement: TabCompleter = PaperPlayerRequirement.completer()

  @Test
  fun commandsWhoseTreeDeclaresAPlayerRequirementRunThroughTheOperator() {
    assertIs<SenderChoice.Operator>(
        AssistantSenderChoice.choose(pluginCommand("gamemode", paperPlayerRequirement))
    )
  }

  @Test
  fun ordinaryPluginCompletersDoNotMarkACommandAsPlayerOnly() {
    val typedLambda = TabCompleter { sender, _, _, _ ->
      if (sender is org.bukkit.entity.Player) emptyList() else emptyList()
    }
    for (completer in listOf(null, typedLambda)) {
      val plugin = pluginCommand("home", completer)
      val choice = AssistantSenderChoice.choose(plugin)
      assertIs<SenderChoice.Assistant>(choice, "completer=$completer")
      assertTrue(choice.reason.isNotBlank(), "the reason is recorded with the execution")
    }
    // A plugin command registered without a completer keeps the AI sender.
    assertIs<SenderChoice.Assistant>(AssistantSenderChoice.choose(command("plugins")))
  }
}
