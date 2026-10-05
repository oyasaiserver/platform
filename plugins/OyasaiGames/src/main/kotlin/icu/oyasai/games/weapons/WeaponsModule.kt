package icu.oyasai.games.weapons

import icu.oyasai.games.OyasaiGamesPlugin
import java.util.Locale
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.server.PluginEnableEvent
import org.bukkit.scheduler.BukkitTask

class WeaponsModule(private val plugin: OyasaiGamesPlugin) :
    Listener, CommandExecutor, TabCompleter {
  private val catalog = WeaponCatalog(plugin)
  private val tasks = mutableSetOf<BukkitTask>()
  private var combat: WeaponCombat? = null
  private var effects: WeaponEffects? = null
  private var devices: WeaponDevices? = null

  fun enable() {
    val command = plugin.getCommand("shot") ?: error("shot command is missing")
    command.setExecutor(this)
    command.tabCompleter = this
    plugin.server.pluginManager.registerEvents(this, plugin)
    reload()
  }

  fun reload() {
    HandlerList.unregisterAll(this)
    plugin.server.pluginManager.registerEvents(this, plugin)
    stopRuntime()
    if (!plugin.config.getBoolean("games.weapons.enabled", true)) return
    if (plugin.server.pluginManager.isPluginEnabled("CrackShot")) {
      plugin.logger.warning("CrackShot が有効なため weapons モジュールを起動しません。")
      return
    }
    for (key in
        listOf("projectile-speed-scale", "recoil-scale", "knockback-scale", "spread-scale")) {
      val scale = plugin.config.getDouble("weapons.compatibility.$key", 0.1)
      require(scale.isFinite() && scale >= 0) { "invalid compatibility coefficient" }
    }
    catalog.load()
    plugin.logger.warning("weapons: 弾速・反動・散布の換算と PvPArena の互換性は実機比較が必要です。")
    try {
      val nextEffects = WeaponEffects(plugin, ::schedule)
      effects = nextEffects
      val nextCombat = WeaponCombat(plugin, catalog, nextEffects, ::schedule)
      combat = nextCombat
      val nextDevices = WeaponDevices(plugin, catalog, nextEffects, ::schedule)
      devices = nextDevices
      plugin.server.pluginManager.registerEvents(nextEffects, plugin)
      plugin.server.pluginManager.registerEvents(nextCombat, plugin)
      plugin.server.pluginManager.registerEvents(nextDevices, plugin)
      plugin.logger.info("weapons を有効化しました (${catalog.definitions.size} 定義)。")
    } catch (exception: Exception) {
      stopRuntime()
      throw exception
    }
  }

  private fun schedule(delay: Long, action: () -> Unit) {
    if (delay <= 0) {
      action()
      return
    }
    lateinit var task: BukkitTask
    task =
        plugin.server.scheduler.runTaskLater(
            plugin,
            Runnable {
              tasks.remove(task)
              try {
                action()
              } catch (exception: Exception) {
                plugin.logger.severe(
                    "weapons の処理に失敗したためモジュールを停止しました (${exception.javaClass.simpleName})。"
                )
                stopRuntime()
              }
            },
            delay.coerceAtLeast(1),
        )
    tasks.add(task)
  }

  private fun stopRuntime() {
    tasks.toList().forEach { it.cancel() }
    tasks.clear()
    combat?.let {
      HandlerList.unregisterAll(it)
      runCatching { it.close() }.onFailure { plugin.logger.severe("weapons: 射撃の終了処理に失敗しました。") }
    }
    devices?.let {
      HandlerList.unregisterAll(it)
      runCatching { it.close() }.onFailure { plugin.logger.severe("weapons: デバイス情報の保存に失敗しました。") }
    }
    effects?.let {
      HandlerList.unregisterAll(it)
      runCatching { it.close() }.onFailure { plugin.logger.severe("weapons: 効果の終了処理に失敗しました。") }
    }
    combat = null
    devices = null
    effects = null
  }

  fun disable() {
    stopRuntime()
    HandlerList.unregisterAll(this)
  }

  @EventHandler
  fun externalEnabled(event: PluginEnableEvent) {
    if (event.plugin.name.equals("CrackShot", true) && combat != null) {
      stopRuntime()
      plugin.logger.warning("CrackShot の有効化を検出したため weapons モジュールを停止しました。")
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.hasPermission("oyasaigames.weapons.admin")) {
      sender.sendMessage("このコマンドの権限がありません。")
      return true
    }
    try {
      if (args.size == 2 && args[0].equals("config", true) && args[1].equals("reload", true)) {
        plugin.reloadConfig()
        reload()
        sender.sendMessage(if (combat != null) "武器定義を再読み込みしました。" else "weapons は無効です。")
        return true
      }
      val runtime = combat
      if (runtime == null) {
        sender.sendMessage("weapons は無効です。設定と CrackShot の有効状態を確認してください。")
        return true
      }
      when (args.firstOrNull()?.lowercase(Locale.ROOT)) {
        "list" -> {
          val weapons =
              catalog.definitions.values.filter {
                !it.accessory && !it.b("Item_Information.Hidden_From_List")
              }
          val page = args.getOrNull(1)
          val selected =
              if (page == null || page.equals("all", true)) weapons
              else {
                val number = page.toIntOrNull()?.takeIf { it > 0 } ?: error("ページは正の整数です。")
                weapons
                    .drop(
                        (number.toLong() - 1).times(10).coerceAtMost(Int.MAX_VALUE.toLong()).toInt()
                    )
                    .take(10)
              }
          sender.sendMessage(selected.joinToString(", ") { it.id })
        }
        "get",
        "give" -> {
          val give = args[0].equals("give", true)
          require(args.size in (if (give) 3..4 else 2..3)) { "武器名と数を指定してください。" }
          val recipient = if (give) plugin.server.getPlayerExact(args[1]) else sender as? Player
          require(recipient != null) { "オンラインのプレイヤーを指定してください。" }
          val index = if (give) 2 else 1
          val weapon = catalog.definitions[args[index].lowercase(Locale.ROOT)]
          require(weapon != null && !weapon.accessory) { "その武器はありません。" }
          val amount =
              args.getOrNull(index + 1)?.toIntOrNull()
                  ?: if (args.size == index + 1) 1 else error("数は整数です。")
          require(amount in 1..64) { "数は 1〜64 で指定してください。" }
          recipient.inventory.addItem(catalog.create(weapon, amount)).values.forEach {
            recipient.world.dropItemNaturally(recipient.location, it)
          }
          effects?.sounds(weapon.s("Item_Information.Sounds_Acquired"), recipient.location)
          sender.sendMessage("武器を渡しました。")
        }
        "reload" -> {
          require(args.size == 1 && sender is Player) { "プレイヤーのみ使用できます。" }
          runtime.reload(sender)
        }
        else ->
            sender.sendMessage("/shot list|get <武器> [数]|give <プレイヤー> <武器> [数]|reload|config reload")
      }
    } catch (exception: IllegalArgumentException) {
      sender.sendMessage(exception.message ?: "引数が正しくありません。")
    } catch (exception: IllegalStateException) {
      sender.sendMessage(exception.message ?: "処理できませんでした。")
    } catch (exception: Exception) {
      plugin.logger.warning("weapons コマンドが失敗しました (${exception.javaClass.simpleName})。")
      sender.sendMessage("処理できませんでした。サーバーログを確認してください。")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (!sender.hasPermission("oyasaigames.weapons.admin")) return emptyList()
    val choices =
        when {
          args.size == 1 -> listOf("list", "get", "give", "reload", "config")
          args.size == 2 && args[0].equals("give", true) ->
              plugin.server.onlinePlayers.map { it.name }
          args.size == 2 && args[0].equals("config", true) -> listOf("reload")
          args.size == 2 && args[0].equals("get", true) ||
              args.size == 3 && args[0].equals("give", true) ->
              catalog.definitions.values.filter { !it.accessory }.map { it.id }
          else -> emptyList()
        }
    return choices.filter { it.startsWith(args.lastOrNull().orEmpty(), true) }
  }
}
