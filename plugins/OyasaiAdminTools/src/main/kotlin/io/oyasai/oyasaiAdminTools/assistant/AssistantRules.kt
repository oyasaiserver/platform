package io.oyasai.oyasaiAdminTools.assistant

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
    val CORE_BLACKLIST =
        listOf(
                "^minecraft:stop\\b",
                "^(bukkit|minecraft):reload\\b",
                "^(spigot|paper|purpur|bukkit):restart\\b",
                "^(spigot|paper|purpur):(spigot|paper|purpur) reload\\b",
                "^plugmanx:(plugman|plm)\\b(?! (list|info|usage|lookup|help)( |$))",
                "^minecraft:(op|deop)\\b",
                "^luckperms:luckperms\\b(?! (?:info|listgroups|listtracks)(?: |$)| user \\S+ (?:info|permission (?:info|check)|parent info|meta info)(?: |$)| group \\S+ info(?: |$))",
                "^dynamicprofile:syokaku (promote|demote) \\S+ good",
                "^minecraft:execute\\b",
                "^oyasaiadmintools:sudo\\b",
                "^minecraft:(function|schedule|return)\\b",
                "^fastasyncworldedit:(/?cs|/?\\.s|/?macro)\\b",
                "^oyasaiadmintools:socialspy\\b",
                "@[aer]\\b",
                "^oyasaitoken:token addall\\b",
                "^minecraft:whitelist (on|off|reload)\\b",
                "^minecraft:save-off\\b",
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
      val name = command.name.lowercase(Locale.ROOT)
      val owner =
          if (command is PluginIdentifiableCommand) command.plugin.name.lowercase(Locale.ROOT)
          else {
            val owners =
                commands.knownCommands.entries
                    .filter { it.value === command && it.key.endsWith(":$name") }
                    .map { it.key.substringBefore(':') }
                    .distinct()
            // Unidentified or ambiguous ownership must not create a reusable permission.
            owners.singleOrNull() ?: return null
          }
      val label = "$owner:$name"
      if (commands.getCommand(label) !== command) return null
      val normalized = (listOf(label) + words.drop(1)).joinToString(" ")
      if (normalized.length > 256) return null
      return NormalizedCommand(normalized, command)
    }
  }
}

internal data class NormalizedCommand(val text: String, val registered: Command)
