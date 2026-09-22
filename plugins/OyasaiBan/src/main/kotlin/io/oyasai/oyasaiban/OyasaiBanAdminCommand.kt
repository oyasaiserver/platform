package io.oyasai.oyasaiban

import com.velocitypowered.api.command.SimpleCommand
import com.velocitypowered.api.proxy.ConsoleCommandSource
import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.CompletionException
import net.kyori.adventure.text.Component
import org.slf4j.Logger

class OyasaiBanAdminCommand(
    private val plugin: OyasaiBanPlugin,
    private val logger: Logger,
) : SimpleCommand {
  override fun execute(invocation: SimpleCommand.Invocation) {
    val source = invocation.source()
    if (source !is ConsoleCommandSource) {
      source.sendMessage(Component.text("This command can only be run from the console."))
      return
    }
    val args = invocation.arguments()
    when {
      args.size == 1 && args[0] == "reload" -> reload(source)
      args.size == 3 && args[0] == "import" && args[1] in setOf("dry-run", "run") ->
          import(source, args[1], args[2])
      else ->
          source.sendMessage(
              Component.text("Usage: oyasaiban import <dry-run|run> <directory> | oyasaiban reload")
          )
    }
  }

  override fun hasPermission(invocation: SimpleCommand.Invocation): Boolean =
      invocation.source() is ConsoleCommandSource

  override fun suggest(invocation: SimpleCommand.Invocation): List<String> {
    val args = invocation.arguments()
    return when (args.size) {
      1 -> listOf("import", "reload").filter { it.startsWith(args[0]) }
      2 ->
          if (args[0] == "import") listOf("dry-run", "run").filter { it.startsWith(args[1]) }
          else emptyList()
      else -> emptyList()
    }
  }

  private fun reload(source: ConsoleCommandSource) {
    runCatching { plugin.reloadConfig() }
        .onSuccess { hasWebhook ->
          source.sendMessage(
              Component.text("OYASAIBAN_RELOAD ok webhook=${if (hasWebhook) "set" else "empty"}")
          )
        }
        .onFailure {
          logger.error("OyasaiBan config reload failed", it)
          source.sendMessage(Component.text("OYASAIBAN_RELOAD_ERROR"))
        }
  }

  private fun import(source: ConsoleCommandSource, mode: String, configuredDirectory: String) {
    val directory = plugin.resolveDataPath(configuredDirectory)
    val script = directory.resolve("storage.script")
    if (!Files.isDirectory(directory) || !Files.isRegularFile(script)) {
      source.sendMessage(Component.text("OYASAIBAN_IMPORT_ERROR missing_storage_script"))
      return
    }
    val usercache = plugin.loadUsercache(directory.resolve("usercache.json"))
    val resolvedNames = mutableMapOf<String, UUID?>()
    val resolveName: (String) -> UUID? = { rawName ->
      val name = rawName.lowercase()
      if (resolvedNames.containsKey(name)) resolvedNames[name]
      else
          (usercache[name] ?: plugin.nameResolver.lookupMojangBlocking(name)).also {
            resolvedNames[name] = it
          }
    }
    plugin.database
        .importAdvancedBan(
            script,
            directory.resolve("storage.log").takeIf(Files::isRegularFile),
            apply = mode == "run",
            resolveName,
        )
        .whenComplete { result, error ->
          if (error != null) {
            logger.error("AdvancedBan import failed", error.unwrap())
            source.sendMessage(Component.text("OYASAIBAN_IMPORT_ERROR failed"))
            return@whenComplete
          }
          result.batch.unresolvedNames.forEach {
            logger.warn("AdvancedBan import could not resolve name: {}", it)
          }
          val activeScanned = result.batch.activeCounts.values.sum()
          val historyScanned = result.batch.historyCounts.values.sum()
          source.sendMessage(
              Component.text(
                  "AdvancedBan import $mode: active ${result.activeNew}/$activeScanned new, history ${result.historyNew}/$historyScanned new, unresolved ${result.batch.unresolvedNames.size}."
              )
          )
          source.sendMessage(
              Component.text(
                  "OYASAIBAN_IMPORT mode=$mode active_scanned=$activeScanned active_new=${result.activeNew} history_scanned=$historyScanned history_new=${result.historyNew} unresolved=${result.batch.unresolvedNames.size}"
              )
          )
        }
  }

  private fun Throwable.unwrap(): Throwable = (this as? CompletionException)?.cause ?: this
}
