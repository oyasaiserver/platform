package icu.oyasai.utilities.tpswitch

import icu.oyasai.utilities.Main
import java.io.File
import java.util.UUID
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.logging.Level
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent

class TpSwitchFeature(private val plugin: Main) : Listener, CommandExecutor, TabCompleter {
  private val store = TpStore(File(plugin.dataFolder, "tpswitch.db"))
  private val writer =
      Executors.newSingleThreadExecutor { task ->
        Thread(task, "OyasaiUtilities-TPswitch-IO").apply { isDaemon = true }
      }
  private val settings = mutableMapOf<UUID, TpSettings>()
  private val tpCommand = """/tp|/Tp|/tP|/TP""".toRegex()
  private val playerName = """\.?[a-zA-Z0-9_]*[a-zA-Z0-9_]""".toRegex()
  private var ready = false

  fun enable() {
    try {
      store.open()
      val legacy = File(plugin.dataFolder.parentFile, "TPswitch/config.yml")
      if (legacy.isFile && !store.imported()) {
        val data = readLegacy(legacy)
        store.importLegacy(data)
        plugin.logger.info(
            "TPswitch import: players=${data.counts.players}, WhiteList=${data.counts.whiteIds}, BlackList=${data.counts.blackIds}, WhiteListName=${data.counts.whiteNames}, BlackListName=${data.counts.blackNames}, skipped=${data.counts.skipped}, remaining=${data.counts.skipped}"
        )
      }
      settings.putAll(store.load())
      ready = true
      plugin.server.pluginManager.registerEvents(this, plugin)
      requireNotNull(plugin.getCommand("tpset")) { "tpset is missing from plugin.yml" }
          .apply {
            setExecutor(this@TpSwitchFeature)
            tabCompleter = this@TpSwitchFeature
          }
    } catch (failure: Exception) {
      ready = false
      plugin.logger.log(
          Level.SEVERE,
          "TPswitch failed to start; its commands remain unavailable",
          failure,
      )
      runCatching { store.close() }
    }
  }

  fun disable() {
    ready = false
    writer.execute {
      runCatching { store.close() }
          .onFailure { plugin.logger.log(Level.SEVERE, "Could not close TPswitch database", it) }
    }
    writer.shutdown()
    try {
      if (!writer.awaitTermination(30, TimeUnit.SECONDS))
          plugin.logger.severe("TPswitch writes did not finish before shutdown")
    } catch (_: InterruptedException) {
      Thread.currentThread().interrupt()
      plugin.logger.severe("Interrupted while flushing TPswitch data")
    }
  }

  private fun persist(owner: UUID) {
    val snapshot = settings.getValue(owner).snapshot()
    writer.execute {
      runCatching { store.save(owner, snapshot) }
          .onFailure {
            plugin.logger.log(Level.SEVERE, "Could not save TPswitch settings for $owner", it)
          }
    }
  }

  @EventHandler
  fun onCommandPreprocess(event: PlayerCommandPreprocessEvent) {
    if (!ready) return
    val parts = event.message.split(" ")
    if (parts.size != 2 || !tpCommand.matches(parts[0]) || !playerName.matches(parts[1])) return
    val target = plugin.server.getPlayerExact(parts[1])
    if (target == null) {
      event.isCancelled = true
      return
    }
    val state = settings[target.uniqueId] ?: TpSettings()
    if (denied(state, event.player.uniqueId, event.player.isOp)) {
      event.player.sendMessage("§6TPinfo:§e${parts[1]} §6is in closed mode!")
      event.isCancelled = true
    } else event.isCancelled = false
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String>? {
    if (sender !is Player) return null
    if (command.name != "tpset") return emptyList()
    if (args.size != 1) return null
    val value = args[0]
    if (value.isEmpty())
        return listOf("open", "close", "ok", "ng", "none", "mode", "oklist", "nglist")
    return when {
      "ok".startsWith(value) -> listOf("open", "ok", "oklist")
      "oklist".startsWith(value) -> listOf("oklist")
      "open".startsWith(value) -> listOf("open")
      "close".startsWith(value) -> listOf("close")
      "ng".startsWith(value) -> listOf("none", "ng", "nglist")
      "nglist".startsWith(value) -> listOf("nglist")
      "none".startsWith(value) -> listOf("none")
      "mode".startsWith(value) -> listOf("mode")
      else -> emptyList()
    }
  }

  @Suppress("DEPRECATION")
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!ready || sender !is Player) return false
    val state = settings.getOrPut(sender.uniqueId) { TpSettings() }
    if (args.size == 1) {
      when (args[0]) {
        "open" -> {
          state.open = true
          persist(sender.uniqueId)
          sender.sendMessage("§6TPinfo: You teleport mode §9§lOPEN")
        }
        "close" -> {
          state.open = false
          persist(sender.uniqueId)
          sender.sendMessage("§6TPinfo: You teleport mode §c§lCLOSE")
        }
        "mode" ->
            sender.sendMessage(
                "§6TPinfo: Your mode is ${if (state.open) "§9§lOPEN" else "§c§lCLOSE"}"
            )
        "oklist",
        "nglist" -> {
          val names = if (args[0] == "oklist") state.whiteNames else state.blackNames
          if (names.isEmpty())
              sender.sendMessage(
                  "§6TPinfo: Your not ${if (args[0] == "oklist") "WhiteLists" else "BlackLists"}"
              )
          else
              sender.sendMessage(
                  names.map { "||${if (args[0] == "oklist") "§e" else "§c"}$it§r||" }.toString()
              )
        }
        else -> sender.sendMessage("§6/tpset <open/close/mode/oklist/nglist>")
      }
      return true
    }
    if (args.size == 2) {
      val action = args[0]
      if (action !in setOf("ok", "ng", "none")) {
        sender.sendMessage("§6/tpset <ok/ng/none> (PlayerName)")
        return true
      }
      val name = args[1]
      if (!playerName.matches(name)) {
        sender.sendMessage("§cError: §e$name §6is not supported!")
        return true
      }
      val member = plugin.server.getOfflinePlayer(name).uniqueId
      when (action) {
        "ok" -> {
          state.whiteIds.add(member)
          state.whiteNames.add(name)
          state.blackIds.remove(member)
          state.blackNames.remove(name)
          sender.sendMessage("§6TPinfo: You WhiteList add §e$name\n§6We accept TP from §e$name")
        }
        "ng" -> {
          state.blackIds.add(member)
          state.blackNames.add(name)
          state.whiteIds.remove(member)
          state.whiteNames.remove(name)
          sender.sendMessage(
              "§6TPinfo: You BlackList add §c$name\n§6We do not accept TP from §c$name"
          )
        }
        else -> {
          state.blackIds.remove(member)
          state.blackNames.remove(name)
          state.whiteIds.remove(member)
          state.whiteNames.remove(name)
          sender.sendMessage(
              "§6TPinfo: You have removed §e$name §6from the list\n§e$name §6is affected by your OPEN/CLOSE"
          )
        }
      }
      persist(sender.uniqueId)
      return true
    }
    return false
  }
}
