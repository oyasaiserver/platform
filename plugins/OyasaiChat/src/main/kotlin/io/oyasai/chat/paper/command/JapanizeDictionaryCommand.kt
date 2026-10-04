package io.oyasai.chat.paper.command

import com.google.gson.Gson
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.oyasai.chat.paper.japanize.DictionaryChange
import io.oyasai.chat.paper.japanize.JapanizeDictionaryStore
import org.bukkit.command.CommandSender

internal class JapanizeDictionaryCommand(private val plugin: OyasaiChatPlugin) {
  private val gson = Gson()
  private val usage =
      "Usage: /japanize dict <add <key> <value...>|remove <key>|list [page]|lookup <key>>"

  fun execute(sender: CommandSender, args: Array<out String>): Boolean {
    val formatter = plugin.runtime.formatter
    if (!sender.hasPermission(PERMISSION)) {
      sender.sendMessage(
          formatter.error("You do not have permission to manage the Japanize dictionary.")
      )
      return true
    }
    if (plugin.importInProgress || plugin.reloadInProgress) {
      sender.sendMessage(
          formatter.error("Dictionary is being imported or reloaded; please try again shortly.")
      )
      return true
    }
    val store = plugin.runtime.dictionary
    runCatching {
          when (args.firstOrNull()?.lowercase()) {
            "add" -> {
              require(args.size >= 3) { usage }
              changed(sender, store.add(args[1], args.drop(2).joinToString(" ")))
            }
            "remove" -> {
              require(args.size == 2) { usage }
              val change = store.remove(args[1])
              if (change == null)
                  sender.sendMessage(
                      formatter.info(
                          "File dictionary key is not registered: ${JapanizeDictionaryStore.normalizeKey(args[1])}"
                      )
                  )
              else changed(sender, change)
            }
            "list" -> {
              require(args.size in 1..2) { usage }
              val page =
                  store.page(
                      if (args.size == 1) 1
                      else args[1].toIntOrNull() ?: error("Page must be an integer.")
                  )
              sender.sendMessage(
                  formatter.info(
                      "Japanize dictionary: ${page.count} entries, page ${page.page}/${page.pages}"
                  )
              )
              page.entries.forEach { (key, value) ->
                sender.sendMessage(formatter.info("$key = $value${overrideNote(store, key)}"))
              }
            }
            "lookup" -> {
              require(args.size == 2) { usage }
              val key = JapanizeDictionaryStore.normalizeKey(args[1])
              val value = store.fileEntries()[key]
              sender.sendMessage(
                  formatter.info(
                      if (value == null)
                          "File dictionary key is not registered: $key${overrideNote(store, key)}"
                      else "$key = $value${overrideNote(store, key)}"
                  )
              )
            }
            else -> sender.sendMessage(formatter.error(usage))
          }
        }
        .onFailure {
          sender.sendMessage(formatter.error(it.message ?: "Dictionary command failed."))
        }
    return true
  }

  private fun overrideNote(store: JapanizeDictionaryStore, key: String): String =
      store.override(key)?.let { " (config overrides: $it)" } ?: ""

  private fun changed(sender: CommandSender, change: DictionaryChange) {
    val formatter = plugin.runtime.formatter
    plugin.logger.info(
        "Japanize dictionary actor=${gson.toJson(sender.name)} key=${gson.toJson(change.key)} ${gson.toJson(change.oldValue)} -> ${gson.toJson(change.newValue)}"
    )
    sender.sendMessage(
        formatter.info(
            "${change.key}: ${change.oldValue ?: "(unregistered)"} -> ${change.newValue ?: "(removed)"} (saving)${overrideNote(plugin.runtime.dictionary, change.key)}"
        )
    )
    change.saved.whenComplete { _, failure ->
      if (failure != null)
          plugin.logger.warning("Japanize dictionary save failed: ${failure.message}")
      if (plugin.isEnabled)
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                if (failure == null)
                    sender.sendMessage(
                        plugin.runtime.formatter.info("Dictionary saved: ${change.key}")
                    )
                else
                    sender.sendMessage(
                        plugin.runtime.formatter.error(
                            "Dictionary is active in memory but saving failed. Retry the change: ${failure.message}"
                        )
                    )
              },
          )
    }
  }

  fun complete(sender: CommandSender, args: Array<out String>): List<String> {
    if (!sender.hasPermission(PERMISSION)) return emptyList()
    val candidates =
        when {
          args.size == 1 -> listOf("add", "remove", "list", "lookup")
          args.size == 2 && args[0].equals("remove", true) ->
              plugin.runtime.dictionary.fileEntries().keys.toList()
          args.size == 2 && args[0].equals("lookup", true) ->
              plugin.runtime.dictionary.effective().keys.toList()
          args.size == 2 && args[0].equals("list", true) ->
              (1..plugin.runtime.dictionary.page(1).pages).map(Int::toString)
          else -> emptyList()
        }
    return candidates.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }.sorted()
  }

  companion object {
    const val PERMISSION = "oyasaichat.japanize.dictionary"
  }
}
