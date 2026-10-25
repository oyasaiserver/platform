package io.oyasai.economy

import io.oyasai.economy.api.*
import java.io.File
import java.util.UUID
import java.util.concurrent.CompletableFuture
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.permissions.Permission
import org.bukkit.permissions.PermissionDefault
import org.bukkit.plugin.ServicePriority
import org.bukkit.plugin.java.JavaPlugin

class OyasaiEconomyPlugin : JavaPlugin(), OyasaiEconomyApi, Listener {
  internal lateinit var database: EconomyDatabase
  private var adminNotifications = false
  private val commands = mutableListOf<Command>()
  private val permissions = mutableListOf<Permission>()
  private val delivering = mutableSetOf<Long>()
  private var tab: TabPlaceholderIntegration? = null
  private var firingEvent = false

  override fun onEnable() {
    try {
      saveDefaultConfig()
      val policies = CurrencyPolicy.load(config)
      adminNotifications = config.getBoolean("admin-notifications", false)
      fun policyFile(key: String) =
          config
              .getString("legacy-import.$key")
              ?.takeIf { it.isNotBlank() }
              ?.let { File(dataFolder, it) }
      database =
          EconomyDatabase(
              File(dataFolder, "economy.db").path,
              policies,
              legacyPlugins = dataFolder.parentFile,
              legacyImportOptions =
                  LegacyImportOptions.fromFiles(
                      policyFile("exclusions"),
                      policyFile("corrections"),
                  ),
              onFailure = { logger.severe("経済データの保存に失敗しました。操作を停止します: ${it.message}") },
              onNotifications = { pending ->
                if (isEnabled)
                    server.scheduler.runTask(this, Runnable { pending.forEach(::deliver) })
              },
          )
      database.migrationReports.forEach { logger.info("旧DB取り込み: $it") }
      if (database.migrationReports.isNotEmpty())
          database.ledgers.forEach { (id, ledger) ->
            logger.info(
                "補完後 $id: ${ledger.size()} 口座、合計 ${ledger.snapshot().values.fold(java.math.BigInteger.ZERO) { sum, r -> sum + r.balance.toBigInteger() }}"
            )
          }
      registerCommandsAndPermissions()
      server.servicesManager.register(
          OyasaiEconomyApi::class.java,
          this,
          this,
          ServicePriority.Normal,
      )
      server.pluginManager.registerEvents(this, this)
      server.onlinePlayers.forEach(::join)
      if (server.pluginManager.isPluginEnabled("TAB"))
          tab = TabPlaceholderIntegration(this).also { it.enable() }
    } catch (error: Exception) {
      logger.log(java.util.logging.Level.SEVERE, "OyasaiEconomy を起動できません", error)
      server.pluginManager.disablePlugin(this)
    }
  }

  override fun onDisable() {
    server.servicesManager.unregisterAll(this)
    try {
      tab?.disable()
      unregisterCommands()
    } finally {
      if (::database.isInitialized) database.close()
    }
  }

  @EventHandler fun onJoin(event: PlayerJoinEvent) = join(event.player)

  private fun join(player: Player) {
    if (!database.ledgers.values.all { it.join(player.uniqueId, player.name) })
        logger.severe("口座を作成できません: ${player.uniqueId}")
    fetchNotifications(player.uniqueId)
  }

  internal fun resolve(ledger: CurrencyLedger, name: String): UUID? {
    server.onlinePlayers
        .firstOrNull { it.name == name && ledger.contains(it.uniqueId) }
        ?.let {
          return it.uniqueId
        }
    return ledger.resolve(name)
  }

  override fun currencies(): Set<String> =
      synchronized(database.memoryLock) {
        database.ledgers.filterValues { it.policy.enabled }.keys.toSet()
      }

  override fun balance(currency: String, uuid: UUID): Long? =
      synchronized(database.memoryLock) {
        database.ledgers[currency]?.takeIf { it.policy.enabled && database.healthy }?.balance(uuid)
      }

  override fun format(currency: String, amount: Long): String =
      synchronized(database.memoryLock) {
        requireNotNull(database.ledgers[currency]) { "通貨が見つかりません: $currency" }.policy.format(amount)
      }

  override fun deposit(currency: String, uuid: UUID, amount: Long, notify: Boolean) =
      change(currency, uuid, amount, "api_deposit", notify)

  override fun withdraw(currency: String, uuid: UUID, amount: Long, notify: Boolean) =
      change(currency, uuid, amount, "api_withdraw", notify)

  override fun set(currency: String, uuid: UUID, amount: Long, notify: Boolean) =
      change(currency, uuid, amount, "admin_set", notify)

  override fun reset(currency: String, uuid: UUID, notify: Boolean) =
      change(
          currency,
          uuid,
          database.ledgers[currency]?.policy?.initial ?: -1,
          "admin_reset",
          notify,
      )

  internal fun change(
      currency: String,
      uuid: UUID,
      amount: Long,
      reason: String,
      notify: Boolean,
      actor: UUID? = null,
  ): EconomyOperation =
      synchronized(database.memoryLock) {
        val ledger = database.ledgers[currency] ?: return@synchronized rejected("通貨が見つかりません")
        if (!ledger.policy.enabled || !database.healthy || firingEvent)
            return@synchronized rejected("現在この通貨は利用できません")
        val old = ledger.balance(uuid) ?: return@synchronized rejected("口座が見つかりません")
        val done = CompletableFuture<Boolean>()
        val type =
            when (reason) {
              "api_deposit",
              "admin_give" -> NotificationType.ADD
              "api_withdraw",
              "admin_take" -> NotificationType.REMOVE
              else -> NotificationType.SET
            }
        val change =
            ledger.change(
                uuid,
                amount,
                reason,
                MutationContext(actor, type.takeIf { notify }),
                done,
            ) {
              fireChange(currency, it)
            }
        if (change == null && amount > old && reason in setOf("api_withdraw", "admin_take"))
            return@synchronized EconomyOperation(
                false,
                CompletableFuture.completedFuture(EconomyResult.InsufficientFunds(old, amount)),
            )
        operation(change, done)
      }

  override fun transfer(
      currency: String,
      from: UUID,
      to: UUID,
      amount: Long,
      notify: Boolean,
  ): EconomyOperation =
      synchronized(database.memoryLock) {
        val ledger = database.ledgers[currency] ?: return@synchronized rejected("通貨が見つかりません")
        if (!ledger.policy.enabled || !database.healthy || firingEvent)
            return@synchronized rejected("現在この通貨は利用できません")
        val done = CompletableFuture<Boolean>()
        val moved =
            ledger.transfer(from, to, amount, done, from, notify) { movement ->
              val event = EconomyTransferEvent(currency, from, to, amount)
              fire { server.pluginManager.callEvent(event) }
              !event.isCancelled &&
                  fireChange(currency, movement.debit) &&
                  fireChange(currency, movement.credit)
            }
        operation(moved?.debit, done)
      }

  private fun fireChange(currency: String, change: BalanceChange): Boolean {
    val event =
        EconomyBalanceChangeEvent(
            currency,
            change.uuid,
            change.oldBalance,
            change.newBalance,
            change.reason,
        )
    fire { server.pluginManager.callEvent(event) }
    return !event.isCancelled
  }

  private fun fire(action: () -> Unit) {
    firingEvent = true
    try {
      action()
    } finally {
      firingEvent = false
    }
  }

  private fun operation(change: BalanceChange?, done: CompletableFuture<Boolean>) =
      EconomyOperation(
          change != null,
          done.thenApply { saved ->
            if (saved && change != null) EconomyResult.Success(change.newBalance, change.delta)
            else EconomyResult.Failed("操作を受け付けなかったか、保存に失敗しました")
          },
      )

  private fun rejected(message: String) =
      EconomyOperation(false, CompletableFuture.completedFuture(EconomyResult.Failed(message)))

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (args.toList() != listOf("reload")) {
      sender.sendMessage("使い方: /economy reload")
      return true
    }
    if (!sender.hasPermission("oyasaieconomy.reload")) {
      sender.sendMessage("権限がありません: oyasaieconomy.reload")
      return true
    }
    runCatching {
          val next =
              org.bukkit.configuration.file.YamlConfiguration.loadConfiguration(
                  File(dataFolder, "config.yml")
              )
          val policies = CurrencyPolicy.load(next)
          synchronized(database.memoryLock) {
            require(policies.map { it.id }.containsAll(database.ledgers.keys)) {
              "通貨の削除には再起動とデータの確認が必要です"
            }
            policies.forEach { policy ->
              require(
                  database.ledgers[policy.id]?.snapshot()?.values?.all {
                    it.balance <= policy.maximum
                  } != false
              ) {
                "上限を超える既存口座があります: ${policy.id}"
              }
            }
            policies.forEach { policy ->
              database.ledgers[policy.id]?.let { it.policy = policy }
                  ?: run {
                    database.ledgers[policy.id] =
                        CurrencyLedger(policy, database::enqueue, database.memoryLock)
                  }
            }
            adminNotifications = next.getBoolean("admin-notifications", false)
          }
          unregisterCommands()
          registerCommandsAndPermissions()
          server.onlinePlayers.forEach(::join)
          tab?.disable()
          tab =
              if (server.pluginManager.isPluginEnabled("TAB"))
                  TabPlaceholderIntegration(this).also { it.enable() }
              else null
        }
        .onSuccess { sender.sendMessage("経済設定を再読み込みしました。") }
        .onFailure { sender.sendMessage("再読み込みに失敗しました: ${it.message}") }
    return true
  }

  private fun registerCommandsAndPermissions() {
    database.ledgers.values.forEach { ledger ->
      val policy = ledger.policy
      listOf("balance", "balance.others", "pay", "top", "admin").forEach { action ->
        val name = "oyasaieconomy.${policy.id}.$action"
        if (server.pluginManager.getPermission(name) == null)
            Permission(
                    name,
                    if (action in setOf("balance", "pay", "top")) PermissionDefault.TRUE
                    else PermissionDefault.OP,
                )
                .also {
                  server.pluginManager.addPermission(it)
                  permissions += it
                }
      }
      fun register(name: String, verb: String? = null) {
        val command = EconomyCommand(this, policy.id, name, verb)
        server.commandMap.register("oyasaieconomy", command)
        commands += command
      }
      register(policy.root)
      policy.shortcuts.forEach { (verb, names) -> names.forEach { register(it, verb) } }
    }
  }

  private fun unregisterCommands() {
    // Paperのコマンド表はiterator経由の削除をサポートしない。
    val known = server.commandMap.knownCommands
    known.entries.filter { it.value in commands }.map { it.key }.forEach { known.remove(it) }
    commands.forEach { it.unregister(server.commandMap) }
    commands.clear()
    permissions.forEach { server.pluginManager.removePermission(it) }
    permissions.clear()
  }

  internal fun notifyAdmins(silent: Boolean) = adminNotifications && !silent

  private fun fetchNotifications(uuid: UUID) {
    database.submit {
      val pending = mutableListOf<PendingNotification>()
      database.connection
          .prepareStatement(
              "SELECT transaction_id,notification_type,delta,balance_after,currency,sender_name FROM notification_outbox WHERE target_uuid=? AND delivered_at IS NULL ORDER BY id"
          )
          .use { s ->
            s.setString(1, uuid.toString())
            s.executeQuery().use { r ->
              while (r.next()) pending +=
                  PendingNotification(
                      r.getLong(1),
                      uuid,
                      NotificationType.valueOf(r.getString(2)),
                      r.getLong(3),
                      r.getLong(4),
                      r.getString(5),
                      r.getString(6),
                  )
            }
          }
      if (isEnabled) server.scheduler.runTask(this, Runnable { pending.forEach(::deliver) })
    }
  }

  private fun deliver(n: PendingNotification) {
    val player = server.getPlayer(n.targetUuid) ?: return
    val ledger = database.ledgers[n.currency]?.takeIf { it.policy.enabled } ?: return
    if (!delivering.add(n.transactionId)) return
    val amount = ledger.policy.format(kotlin.math.abs(n.delta))
    val current = ledger.policy.format(ledger.balance(n.targetUuid) ?: n.balanceAfter)
    val message =
        when (n.type) {
          NotificationType.RECEIVE -> "${n.senderName ?: "不明な送金者"}さんから${amount}を受け取りました。"
          NotificationType.ADD -> "${amount}を受け取りました。"
          NotificationType.REMOVE -> "${amount}が差し引かれました。"
          NotificationType.SET -> "残高が変更されました。"
        }
    player.sendMessage("$message 現在の残高は${current}です。")
    if (
        !database.submit {
          database.connection
              .prepareStatement(
                  "UPDATE notification_outbox SET delivered_at=? WHERE transaction_id=?"
              )
              .use { s ->
                s.setLong(1, System.currentTimeMillis())
                s.setLong(2, n.transactionId)
                s.executeUpdate()
              }
          if (isEnabled)
              server.scheduler.runTask(this, Runnable { delivering.remove(n.transactionId) })
        }
    )
        delivering.remove(n.transactionId)
  }
}
