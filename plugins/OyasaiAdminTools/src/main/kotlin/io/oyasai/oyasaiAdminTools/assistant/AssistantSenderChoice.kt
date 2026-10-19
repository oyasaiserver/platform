package io.oyasai.oyasaiAdminTools.assistant

import java.util.function.Predicate
import org.bukkit.command.Command
import org.bukkit.command.PluginCommand
import org.bukkit.command.TabCompleter

/** Which sender a command runs with. Decided before anything is executed. */
internal sealed interface SenderChoice {
  val reason: String

  /** The AI-only sender runs the command and its output goes to the AI. */
  data class Assistant(override val reason: String) : SenderChoice

  /** Only a player can use this command, so the operator runs it with `performCommand`. */
  data class Operator(override val reason: String) : SenderChoice
}

/**
 * Decides the sender of an assistant-run command without running anything.
 *
 * "This command needs a player" cannot be asked at runtime: some commands demand a player only when
 * executing, and others would half-run before failing. The decision therefore uses what Paper
 * already records for the registered command:
 * - Vanilla commands built with `Players.checkCanInteract` (Paper's version of vanilla
 *   `source.isPlayer()`), such as `/gamemode <mode>` without a target. Paper's
 *   `VanillaCommandWrapper` compiles a player requirement into the tab completer "predicate that
 *   always answers false" (`(sender, command) -> false`). A completer built exactly for the player
 *   requirement therefore means the command cannot run without a player.
 *
 * That check is the whole decision. Everything else, including unsure cases, runs with the AI
 * sender: it is not a player, so a command that needs one refuses when it examines the sender
 * instead of running on the operator's screen. The AI reports that refusal. The confirmation text
 * says beforehand that the operator can run the command as themselves instead (the output then
 * appears on the operator's screen), because a refusal is only visible after pressing the button.
 */
internal object AssistantSenderChoice {
  fun choose(registered: Command): SenderChoice {
    val completer = (registered as? PluginCommand)?.tabCompleter
    if (isPlayerRequirementCompleter(completer)) {
      return SenderChoice.Operator("the command requires a player (declared in its command tree)")
    }
    return SenderChoice.Assistant(
        "no player requirement is declared, so the command runs with the Assistant sender"
    )
  }

  /**
   * Paper's translation of a player requirement: `TabCompleter` is a `Predicate`, so `(sender,
   * command) -> false` is a raw `Predicate`. A raw predicate is only produced that way; a plugin
   * lambda typed as `TabCompleter` is a `TabCompleter`, not a `Predicate`.
   */
  internal fun isPlayerRequirementCompleter(completer: TabCompleter?): Boolean =
      completer is Predicate<*>
}
