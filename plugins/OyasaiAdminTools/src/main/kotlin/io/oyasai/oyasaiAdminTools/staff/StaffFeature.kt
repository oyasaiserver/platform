package io.oyasai.oyasaiAdminTools.staff

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.*
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.server.PluginEnableEvent

/** Lifecycle and registration only. Each command lives in its own feature package. */
abstract class StaffFeature(protected val plugin: OyasaiAdminTools, val name: String) :
    CommandExecutor, TabCompleter, Listener {
  private var registration: StaffCommandRegistration? = null

  protected open fun start() {}

  protected open fun stop() {}

  fun enable() {
    try {
      start()
      val command = requireNotNull(plugin.getCommand(name))
      command.setExecutor(this)
      command.tabCompleter = this
      claim()
      plugin.server.pluginManager.registerEvents(this, plugin)
    } catch (failure: Exception) {
      disable()
      throw failure
    }
  }

  private fun claim() {
    if (registration == null) {
      registration =
          StaffCommandRegistration(
              requireNotNull(plugin.getCommand(name)),
              listOf(name) + StaffRules.aliases.getValue(name),
          )
    }
    registration!!.claim(plugin.server.commandMap.knownCommands)
  }

  @EventHandler
  fun pluginEnabled(event: PluginEnableEvent) {
    if (event.plugin.name == "Essentials") claim()
  }

  fun disable() {
    HandlerList.unregisterAll(this)
    try {
      stop()
    } finally {
      registration?.restore(plugin.server.commandMap.knownCommands)
      registration = null
    }
  }

  final override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("essentials.$name")) {
      sender.sendMessage("§c権限がありません。")
      return true
    }
    try {
      execute(sender, args)
    } catch (failure: Exception) {
      plugin.logger.log(java.util.logging.Level.SEVERE, "$name failed", failure)
      sender.sendMessage("§c処理に失敗しました。管理ログを確認してください。")
    }
    return true
  }

  abstract fun execute(sender: CommandSender, args: Array<out String>)

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> =
      if (!sender.hasPermission("essentials.$name") || args.size != 1) emptyList()
      else
          Bukkit.getOnlinePlayers()
              .filter { visible(sender, it) && it.name.startsWith(args[0], true) }
              .map { it.name }

  protected fun online(sender: CommandSender, text: String): Player? {
    val p =
        runCatching { Bukkit.getPlayer(UUID.fromString(text)) }.getOrNull()
            ?: Bukkit.getPlayerExact(text)
            ?: Bukkit.getPlayer(text)
            ?: Bukkit.getOnlinePlayers().firstOrNull {
              org.bukkit.ChatColor.stripColor(it.displayName)?.contains(text, true) == true
            }
    return p?.takeIf { visible(sender, it) }
  }

  protected fun visible(sender: CommandSender, player: Player) =
      sender !is Player ||
          sender.canSee(player) ||
          sender.hasPermission("essentials.vanish.interact")

  protected fun missing(sender: CommandSender) {
    sender.sendMessage("§cプレイヤーが見つかりません。")
  }
}

object StaffRules {
  val aliases =
      linkedMapOf(
          "invsee" to emptyList<String>(),
          "vanish" to listOf("v"),
          "socialspy" to emptyList(),
          "whois" to emptyList(),
          "sudo" to emptyList(),
          "seen" to emptyList(),
          "tpoffline" to emptyList(),
      )

  fun toggle(arg: String?): Boolean? =
      when {
        arg == null -> null
        arg.equals("on", true) || arg.startsWith("ena") || arg == "1" -> true
        arg.equals("off", true) || arg.startsWith("dis") || arg == "0" -> false
        else -> null
      }
}
