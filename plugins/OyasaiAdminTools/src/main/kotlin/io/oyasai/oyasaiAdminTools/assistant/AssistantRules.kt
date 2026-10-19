package io.oyasai.oyasaiAdminTools.assistant

import com.mojang.brigadier.tree.CommandNode
import java.util.Locale
import org.bukkit.command.Command
import org.bukkit.command.CommandMap
import org.bukkit.command.FormattedCommandAlias
import org.bukkit.command.PluginIdentifiableCommand

internal class AssistantRules(additional: List<String> = emptyList()) {
  private val blacklist = CORE_BLACKLIST + additional.map(::Regex)

  fun isBlacklisted(command: String): Boolean = blacklist.any { it.containsMatchIn(command) }

  fun isAllowed(command: String, scopes: Collection<String>): Boolean =
      !isBlacklisted(command) && scopes.any { command == it || command.startsWith("$it ") }

  companion object {
    private val SERVER_OWNERS = listOf("minecraft", "bukkit", "paper", "spigot", "purpur")
    private val SERVER_OWNER = SERVER_OWNERS.joinToString("|", "(?:", ")")
    private val vanillaField by lazy {
      runCatching {
            Class.forName(
                    "org.bukkit.craftbukkit.command.VanillaCommandWrapper",
                    false,
                    Command::class.java.classLoader,
                )
                .getField("vanillaCommand")
          }
          .getOrNull()
    }
    private val shadowHandle by lazy {
      runCatching {
            Class.forName(
                    "io.papermc.paper.command.brigadier.ShadowBrigNode",
                    false,
                    Command::class.java.classLoader,
                )
                .getMethod("getHandle")
          }
          .getOrNull()
    }

    val CORE_BLACKLIST =
        listOf(
                "^$SERVER_OWNER:stop\\b",
                "^$SERVER_OWNER:reload\\b",
                "^$SERVER_OWNER:restart\\b",
                "^$SERVER_OWNER:(spigot|paper|purpur) reload\\b",
                "^plugmanx:(plugman|plm)\\b(?! (list|info|usage|lookup|help)( |$))",
                "^$SERVER_OWNER:(op|deop)\\b",
                "^luckperms:luckperms\\b(?! (?:info|listgroups|listtracks)(?: |$)| user \\S+ (?:info|permission (?:info|check)|parent info|meta info)(?: |$)| group \\S+ info(?: |$))",
                "^dynamicprofile:syokaku (promote|demote) \\S+ good",
                "^$SERVER_OWNER:execute\\b",
                "^oyasaiadmintools:sudo\\b",
                "^$SERVER_OWNER:(function|schedule|return)\\b",
                "^fastasyncworldedit:(/?cs|/?\\.s|/?macro)\\b",
                "^oyasaiadmintools:socialspy\\b",
                "@[aer]\\b",
                "^oyasaitoken:token addall\\b",
                "^$SERVER_OWNER:whitelist (on|off|reload)\\b",
                "^$SERVER_OWNER:save-off\\b",
                "^coreprotect:(co|core|coreprotect) purge\\b",
                "^coreprotect:(co|core|coreprotect) (rollback|rb|ro|restore|rs|re)\\b(?!.*(?:^| )u:\\S+)",
                "^fastasyncworldedit:/?delchunks\\b",
                "^fastasyncworldedit:/?(schematic|schem) (delete|d)\\b",
                "^oyasaiadmintools:assistant\\b",
            )
            .map(::Regex)

    fun scope(command: String): String {
      val words = command.split(' ')
      return words
          .take(if (words.getOrNull(1)?.matches(Regex("[a-z]+")) == true) 2 else 1)
          .joinToString(" ")
    }

    fun normalize(text: String, commands: CommandMap): NormalizedCommand? {
      if (
          text.length > 256 ||
              text.any {
                (it.isISOControl() && it != '\t') || it == '§' || it == '\u2028' || it == '\u2029'
              }
      )
          return null
      val words = text.trim().removePrefix("/").trim().lowercase(Locale.ROOT).split(Regex("\\s+"))
      val command = commands.getCommand(words.first()) ?: return null
      if (command is FormattedCommandAlias) return null
      val node = vanillaNode(command)
      if (node?.redirect != null || node?.redirectModifier != null || node?.isFork == true)
          return null
      val registrations =
          if (node == null && command is PluginIdentifiableCommand) emptyList()
          else
              commands.knownCommands.entries.filter { entry ->
                if (node == null) entry.value === command
                else {
                  val other = vanillaNode(entry.value)
                  other != null &&
                      sameNodeCommand(node, other) &&
                      (entry.value as? PluginIdentifiableCommand)?.plugin ===
                          (command as? PluginIdentifiableCommand)?.plugin
                }
              }
      val name =
          if (node == null) command.name.lowercase(Locale.ROOT)
          else {
            val aliases =
                registrations.flatMap { it.value.aliases }.map { it.substringAfter(':') }.toSet()
            registrations
                .map { it.key.substringAfter(':') }
                .filter { it !in aliases }
                .distinct()
                .singleOrNull() ?: return null
          }
      val owner =
          if (command is PluginIdentifiableCommand) command.plugin.name.lowercase(Locale.ROOT)
          else {
            val owners =
                registrations
                    .filter { it.key.endsWith(":$name") }
                    .map { it.key.substringBefore(':') }
                    .distinct()
            // Prefer a known server namespace; unrelated namespace ambiguity remains invalid.
            SERVER_OWNERS.firstOrNull { it in owners } ?: owners.singleOrNull() ?: return null
          }
      val label = "$owner:$name"
      val canonical = commands.getCommand(label) ?: return null
      if (node == null) {
        if (canonical !== command) return null
      } else if (vanillaNode(canonical)?.let { sameNodeCommand(node, it) } != true) return null
      val normalized = (listOf(label) + words.drop(1)).joinToString(" ")
      if (normalized.length > 256) return null
      return NormalizedCommand(normalized, canonical, vanillaNode(canonical) ?: canonical)
    }

    private fun vanillaNode(command: Command): CommandNode<*>? {
      val field = vanillaField ?: return null
      if (!field.declaringClass.isInstance(command)) return null
      val node = field.get(command) as? CommandNode<*> ?: return null
      val handle = shadowHandle
      // Paper's API mirror hides vanilla children; compare the underlying registered node.
      return if (handle != null && handle.declaringClass.isInstance(node)) {
        runCatching { handle.invoke(node) as? CommandNode<*> }.getOrNull()
      } else node
    }

    // Paper recreates wrappers and copies root literals; execution, permission and argument nodes
    // must agree.
    private fun sameNodeCommand(first: CommandNode<*>, second: CommandNode<*>): Boolean =
        try {
          first === second ||
              (first.command === second.command &&
                  first.requirement === second.requirement &&
                  first.redirect === second.redirect &&
                  first.redirectModifier === second.redirectModifier &&
                  first.isFork == second.isFork &&
                  first.children.size == second.children.size &&
                  first.children.zip(second.children).all { (a, b) -> a === b })
        } catch (_: UnsupportedOperationException) {
          false
        }
  }
}

internal data class NormalizedCommand(
    val text: String,
    val registered: Command,
    val registration: Any = registered,
)
