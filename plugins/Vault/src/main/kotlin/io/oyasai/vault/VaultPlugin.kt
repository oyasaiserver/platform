package io.oyasai.vault

import com.mojang.brigadier.tree.RootCommandNode
import io.papermc.paper.command.brigadier.CommandSourceStack
import io.papermc.paper.command.brigadier.bukkit.BukkitCommandNode
import java.io.File
import java.math.BigDecimal
import java.math.RoundingMode
import java.sql.SQLException
import java.util.Locale
import java.util.UUID
import java.util.logging.Level
import net.milkbowl.vault.chat.Chat
import net.milkbowl.vault.economy.Economy
import net.milkbowl.vault.permission.Permission
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.PluginCommand
import org.bukkit.command.SimpleCommandMap
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.craftbukkit.CraftServer
import org.bukkit.craftbukkit.command.VanillaCommandWrapper
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerCommandPreprocessEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.server.RemoteServerCommandEvent
import org.bukkit.event.server.ServerCommandEvent
import org.bukkit.event.server.ServerLoadEvent
import org.bukkit.plugin.RegisteredServiceProvider
import org.bukkit.plugin.ServicePriority
import org.bukkit.plugin.java.JavaPlugin

private val economicCommands =
    listOf(
        "balance",
        "balancetop",
        "pay",
        "eco",
        "paytoggle",
        "payconfirmtoggle",
        "sell",
        "worth",
        "setworth",
    )
private val vaultCommands = listOf("balance", "pay", "balancetop", "eco")

internal fun missingDisabledCommands(disabled: Collection<String>): List<String> {
  val configured = disabled.map { it.lowercase(Locale.ROOT) }.toSet()
  return economicCommands.filterNot { it in configured }
}

open class VaultPlugin : JavaPlugin(), Listener {
  private var ledger: Ledger? = null
  private lateinit var economy: VaultEconomy
  @Volatile private var verified = false
  @Volatile private var dbHealthy = true
  val ready: Boolean
    get() = config.getBoolean("economy-enabled") && ledger != null && dbHealthy && verified

  override fun onEnable() {
    saveDefaultConfig()
    economy = VaultEconomy(this)
    if (config.getBoolean("economy-enabled")) {
      try {
        dataFolder.mkdirs()
        ledger = Ledger(File(dataFolder, "economy.db").absolutePath)
      } catch (e: Exception) {
        dbHealthy = false
        logger.log(Level.SEVERE, "経済 DB の起動確認に失敗しました。取引を停止します", e)
      }
      server.servicesManager.register(Economy::class.java, economy, this, ServicePriority.Highest)
    }
    server.pluginManager.registerEvents(this, this)
    server.scheduler.runTask(this, Runnable { verify() })
  }

  override fun onDisable() {
    verified = false
    server.servicesManager.unregisterAll(this)
    try {
      ledger?.close()
    } catch (e: Exception) {
      logger.log(Level.SEVERE, "DB の終了に失敗しました", e)
    }
  }

  @EventHandler fun onLoad(event: ServerLoadEvent) = verify()

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    if (ready) write { join(event.player.uniqueId, event.player.name) }
  }

  @EventHandler
  fun onPlayerCommand(event: PlayerCommandPreprocessEvent) = checkReload(event.message)

  @EventHandler fun onServerCommand(event: ServerCommandEvent) = checkReload(event.command)

  @EventHandler fun onRemoteCommand(event: RemoteServerCommandEvent) = checkReload(event.command)

  private fun checkReload(raw: String) {
    val parts = raw.trim().removePrefix("/").split(Regex("\\s+"), limit = 3)
    val essentials = server.pluginManager.getPlugin("Essentials") ?: return
    val command = server.commandMap.getCommand(parts[0].lowercase(Locale.ROOT))?.pluginCommand()
    if (
        parts.getOrNull(1)?.equals("reload", ignoreCase = true) == true &&
            command is PluginCommand &&
            command.plugin === essentials &&
            command.name == "essentials"
    ) {
      verified = false
      server.scheduler.runTaskLater(this, Runnable { verify() }, 1L)
    }
  }

  private fun claimCommands(essentials: org.bukkit.plugin.Plugin?) {
    if (essentials == null) return
    val map = server.commandMap as SimpleCommandMap
    val known = map.knownCommands
    val removed =
        known
            .filterValues {
              it.pluginCommand()?.let { c ->
                c.plugin === essentials && c.name in economicCommands
              } == true
            }
            .keys
    removed.forEach { known.remove(it) }

    // ponytail: Bukkit exposes no post-load dispatcher removal; this targets the current Paper
    // server.
    @Suppress("UNCHECKED_CAST")
    val root =
        (server as CraftServer).server.commands.dispatcher.root
            as RootCommandNode<CommandSourceStack>
    removed.forEach { root.removeCommand(it) }
    for (name in vaultCommands) {
      val command = known["vault:$name"] as? PluginCommand
      if (command == null) {
        logger.severe("Vault コマンドがコマンド表にありません: vault:$name")
        continue
      }
      for (label in listOf(name) + command.aliases) {
        known[label] = command
        root.removeCommand(label)
        root.addChild(BukkitCommandNode.of(label, command))
      }
    }
    server.onlinePlayers.forEach { it.updateCommands() }
    if (removed.isNotEmpty())
        logger.info("Essentials 経済コマンドを解除: ${removed.sorted().joinToString(", ")}")
  }

  private fun verify() {
    verified = false
    if (!config.getBoolean("economy-enabled") || ledger == null || !dbHealthy) return
    val essentials = server.pluginManager.getPlugin("Essentials")
    try {
      claimCommands(essentials)
    } catch (e: Exception) {
      logger.log(Level.SEVERE, "経済コマンドの解除・登録に失敗しました。全入出金を停止します", e)
      return
    }
    val registration: RegisteredServiceProvider<Economy>? =
        server.servicesManager.getRegistration(Economy::class.java)
    val known = (server.commandMap as SimpleCommandMap).knownCommands
    val failures = mutableListOf<String>()
    if (registration?.provider !== economy)
        failures += "Economy 提供元=${registration?.provider?.name ?: "なし"}"
    for (name in vaultCommands) {
      val own = known["vault:$name"] as? PluginCommand
      if (own == null || own.plugin !== this) {
        failures += "vault:$name=${own?.plugin?.name ?: "なし"}"
      }
    }
    for ((label, command) in known) {
      if (
          command.pluginCommand()?.let {
            it.plugin === essentials && it.name in economicCommands
          } == true
      )
          failures += "$label=Essentials"
    }
    val root = (server as CraftServer).server.commands.dispatcher.root
    for (name in vaultCommands) {
      val own = known["vault:$name"] as? PluginCommand ?: continue
      for (label in listOf(name) + own.aliases) {
        val command = (root.getChild(label) as? BukkitCommandNode)?.bukkitCommand
        if (command !== own) failures += "Brigadier:$label=${command?.pluginOwner()?.name ?: "なし"}"
      }
    }
    for (node in root.children) {
      val command = (node as? BukkitCommandNode)?.bukkitCommand as? PluginCommand
      if (command != null && command.plugin === essentials && command.name in economicCommands)
          failures += "Brigadier:${node.name}=Essentials"
    }
    if (essentials != null) {
      for ((name, details) in essentials.description.commands) {
        if (name !in economicCommands) continue
        val aliases = (details["aliases"] as? List<*>)?.filterIsInstance<String>().orEmpty()
        for (label in listOf(name) + aliases) {
          val key = "essentials:${label.lowercase(Locale.ROOT)}"
          if (known[key] != null || root.getChild(key) != null) failures += "$key=残存"
        }
      }
    }
    val missing =
        if (essentials == null) emptyList()
        else
            missingDisabledCommands(
                YamlConfiguration.loadConfiguration(File(essentials.dataFolder, "config.yml"))
                    .getStringList("disabled-commands")
            )
    verified = failures.isEmpty() && missing.isEmpty()
    if (failures.isNotEmpty())
        logger.severe("!!! 経済コマンド確認失敗: ${failures.joinToString(", ")}。全入出金を停止します !!!")
    if (missing.isNotEmpty())
        logger.severe(
            "!!! Essentials disabled-commands に不足: ${missing.joinToString(", ")}。全入出金を停止します !!!"
        )
    if (verified) logger.info("経済提供元、コマンド所有者、Essentials disabled-commands を確認しました")
  }

  private fun Command.pluginOwner(): org.bukkit.plugin.Plugin? = pluginCommand()?.plugin

  private fun Command.pluginCommand(): PluginCommand? =
      when (this) {
        is PluginCommand -> this
        is VanillaCommandWrapper ->
            (vanillaCommand as? BukkitCommandNode)?.bukkitCommand as? PluginCommand
        else -> null
      }

  internal fun loan(uuid: UUID): Boolean =
      server.getPlayer(uuid)?.takeIf { it.isOnline }?.hasPermission("essentials.eco.loan") == true

  internal fun <T> read(block: Ledger.() -> T): T? =
      try {
        ledger?.block()
      } catch (e: SQLException) {
        dbHealthy = false
        verified = false
        logger.log(Level.SEVERE, "経済 DB の読み取りに失敗しました。取引を停止します", e)
        null
      } catch (e: Exception) {
        logger.log(Level.SEVERE, "経済 DB の読み取りに失敗しました", e)
        null
      }

  internal fun <T> write(block: Ledger.() -> T): T? {
    if (!ready) return null
    return try {
      ledger?.block()
    } catch (e: Exception) {
      dbHealthy = false
      verified = false
      logger.log(Level.SEVERE, "経済 DB の書き込みに失敗しました。取引を停止します", e)
      null
    }
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name == "vault-info") {
      sender.sendMessage(
          "Vault 経済: ${server.servicesManager.getRegistration(Economy::class.java)?.provider?.name ?: "なし"} (${if (ready) "利用可" else "停止中"})"
      )
      sender.sendMessage(
          "権限: ${server.servicesManager.getRegistration(Permission::class.java)?.provider?.name ?: "なし"} / チャット: ${server.servicesManager.getRegistration(Chat::class.java)?.provider?.name ?: "なし"}"
      )
      return true
    }
    if (!ready) {
      sender.sendMessage("§c経済は現在利用できません。")
      return true
    }
    when (command.name) {
      "balance" -> balanceCommand(sender, args)
      "pay" -> payCommand(sender, args)
      "balancetop" -> topCommand(sender, args)
      "eco" -> ecoCommand(sender, args)
    }
    return true
  }

  private fun target(name: String): UUID? = read { resolve(name) }

  private fun amount(raw: String): Long? = raw.toDoubleOrNull()?.let(Money::round)

  private fun shown(value: Long?) = economy.format((value ?: 0L).toDouble())

  private fun balanceCommand(sender: CommandSender, args: Array<out String>) {
    val uuid =
        if (args.isEmpty()) (sender as? Player)?.uniqueId
        else {
          if (!sender.hasPermission("essentials.balance.others")) {
            sender.sendMessage("§c権限がありません。")
            return
          }
          target(args[0])
        }
    if (uuid == null) {
      sender.sendMessage("§cプレイヤーが見つかりません。")
      return
    }
    sender.sendMessage("§e残高: ${shown(read { balance(uuid) })}")
  }

  private fun payCommand(sender: CommandSender, args: Array<out String>) {
    val payer =
        sender as? Player
            ?: run {
              sender.sendMessage("§cプレイヤー専用です。")
              return
            }
    if (args.size != 2) {
      sender.sendMessage("§c/pay <player> <amount>")
      return
    }
    val recipient =
        target(args[0])
            ?: run {
              sender.sendMessage("§c相手の口座がありません。")
              return
            }
    if (
        !Bukkit.getOnlinePlayers().any { it.uniqueId == recipient } &&
            !sender.hasPermission("essentials.pay.offline")
    ) {
      sender.sendMessage("§cオフラインの相手には送金できません。")
      return
    }
    val cleaned = Money.payInput(args[1])
    if (cleaned?.isEmpty() == true) {
      sender.sendMessage("§c/pay <player> <amount>")
      return
    }
    val yen =
        cleaned?.let(::amount)?.takeIf { it >= 1 }
            ?: run {
              sender.sendMessage("§c金額は 1 円以上にしてください。")
              return
            }
    if (write { pay(payer.uniqueId, recipient, yen, loan(payer.uniqueId), payer.uniqueId) } == true)
        sender.sendMessage("§a${shown(yen)} を送金しました。")
    else sender.sendMessage("§c送金に失敗しました。残高と上限を確認してください。")
  }

  private fun topCommand(sender: CommandSender, args: Array<out String>) {
    val page = args.firstOrNull()?.toIntOrNull() ?: 1
    if (page < 1) {
      sender.sendMessage("§cページは 1 以上にしてください。")
      return
    }
    val rows = read { top(page) } ?: emptyList()
    sender.sendMessage("§e残高ランキング ($page ページ)")
    rows.forEachIndexed { index, (name, balance) ->
      sender.sendMessage("${(page - 1) * 10 + index + 1}. $name: ${shown(balance)}")
    }
  }

  private fun ecoCommand(sender: CommandSender, args: Array<out String>) {
    if (args.size < 2 || args[0].lowercase() !in listOf("give", "take", "set", "reset")) {
      sender.sendMessage("§c/eco give|take|set|reset <player> [amount]")
      return
    }
    val kind = "eco_${args[0].lowercase()}"
    val uuid =
        target(args[1])
            ?: run {
              sender.sendMessage("§c口座がありません。")
              return
            }
    val yen =
        if (kind == "eco_reset") Money.START
        else if (kind == "eco_set") {
          try {
            args.getOrNull(2)?.let {
              BigDecimal(it).setScale(0, RoundingMode.HALF_UP).longValueExact()
            }
          } catch (_: Exception) {
            null
          }
        } else args.getOrNull(2)?.let(::amount)
    if (yen == null) {
      sender.sendMessage("§c金額が無効です。")
      return
    }
    val next = write {
      change(uuid, yen, kind, kind == "eco_take", "eco", (sender as? Player)?.uniqueId)
    }
    sender.sendMessage(if (next == null) "§c変更に失敗しました。" else "§a残高を ${shown(next)} にしました。")
  }
}
