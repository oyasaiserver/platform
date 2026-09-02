@file:Suppress("DEPRECATION")

package io.oyasai.oyasaitoken

import io.oyasai.oyasaitoken.api.OyasaiTokenApi
import io.oyasai.oyasaitoken.internal.BalanceChange
import io.oyasai.oyasaitoken.internal.BalanceRecord
import io.oyasai.oyasaitoken.internal.BalanceWrite
import io.oyasai.oyasaitoken.internal.TokenLedger
import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet
import java.util.OptionalLong
import java.util.UUID
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.RejectedExecutionException
import java.util.concurrent.ThreadPoolExecutor
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicLong
import java.util.concurrent.atomic.AtomicReference
import java.util.logging.Level
import me.realized.tokenmanager.TokenManagerPlugin
import me.realized.tokenmanager.api.TokenManager
import me.realized.tokenmanager.api.event.TMTokenBalanceChangeEvent
import me.realized.tokenmanager.api.event.TMTokenSendEvent
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.plugin.ServicePriority
import org.yaml.snakeyaml.Yaml

class OyasaiTokenPlugin :
    TokenManagerPlugin(), OyasaiTokenApi, CommandExecutor, TabCompleter, Listener {
  /**
   * Serializes migration state transitions with every ledger operation that can enqueue
   * persistence. Never perform YAML, SQLite import, or event dispatch while holding this gate.
   */
  private val mutationGate = Any()
  private val dbLock = Any()
  private val migrationInProgress = AtomicBoolean(false)
  private val nextTransactionId = AtomicLong(1L)
  private lateinit var connection: Connection
  private lateinit var databaseFile: File
  private lateinit var persistenceExecutor: ThreadPoolExecutor
  private lateinit var ledger: TokenLedger

  override fun onEnable() {
    registerCompatInstance()
    saveDefaultConfig()
    dataFolder.mkdirs()

    Class.forName("org.sqlite.JDBC")
    databaseFile = File(dataFolder, config.getString("database.file", "tokens.db") ?: "tokens.db")
    databaseFile.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${databaseFile.absolutePath}")

    configureConnection()
    ensureSchema()
    ledger =
        TokenLedger(
            defaultBalance = { config.getLong("default-balance", 25L).coerceAtLeast(0) },
            persist = ::enqueuePersistence,
        )
    ledger.replaceAll(loadBalances())
    initializeTransactionCounter()
    importTokenManagerDataYml(force = false)
    startPersistenceWorker()

    server.servicesManager.register(
        OyasaiTokenApi::class.java,
        this,
        this,
        ServicePriority.Normal,
    )
    server.servicesManager.register(
        TokenManager::class.java,
        this,
        this,
        ServicePriority.Normal,
    )
    server.pluginManager.registerEvents(this, this)
    getCommand("token")?.setExecutor(this)
    getCommand("token")?.tabCompleter = this
    getCommand("tm")?.setExecutor(this)
    getCommand("tm")?.tabCompleter = this

    logger.info("OyasaiToken SQLite backend enabled. Loaded ${ledger.size()} balances.")
  }

  override fun onDisable() {
    var persistenceTerminated = true
    if (::persistenceExecutor.isInitialized) {
      persistenceExecutor.shutdown()
      val timeoutSeconds =
          config.getLong("persistence.shutdown-await-seconds", 10L).coerceAtLeast(1L)
      try {
        if (!persistenceExecutor.awaitTermination(timeoutSeconds, TimeUnit.SECONDS)) {
          persistenceTerminated = false
          logger.warning(
              "Timed out waiting ${timeoutSeconds}s for token persistence queue to drain. Remaining jobs: ${persistenceExecutor.queue.size}"
          )
        }
      } catch (interrupted: InterruptedException) {
        persistenceTerminated = false
        Thread.currentThread().interrupt()
        logger.warning("Interrupted while waiting for token persistence queue to drain.")
      }
    }
    if (::connection.isInitialized) {
      if (
          !::persistenceExecutor.isInitialized ||
              persistenceTerminated ||
              persistenceExecutor.isTerminated
      ) {
        runCatching { connection.close() }
      } else {
        logger.warning(
            "Leaving token SQLite connection open because the persistence worker is still running."
        )
        closeConnectionWhenPersistenceStops()
      }
    }
    server.servicesManager.unregisterAll(this)
    unregisterCompatInstance()
  }

  @EventHandler
  fun onJoin(event: PlayerJoinEvent) {
    readOrInitializeBalance(event.player.uniqueId, event.player.name)
  }

  override fun getBalance(uuid: UUID): Long {
    return readOrInitializeBalance(uuid, null)
  }

  override fun setTokens(uuid: UUID, amount: Long) {
    require(amount >= 0) { "amount must be non-negative" }
    if (!setTokensInternal(uuid, null, amount)) logRejectedSetTokens(uuid)
  }

  override fun addTokens(uuid: UUID, amount: Long): Boolean {
    return addTokensInternal(uuid, null, amount)
  }

  override fun removeTokens(uuid: UUID, amount: Long): Boolean {
    return removeTokensInternal(uuid, null, amount)
  }

  override fun getTokens(player: Player): OptionalLong {
    return OptionalLong.of(readOrInitializeBalance(player.uniqueId, player.name))
  }

  override fun setTokens(player: Player, tokens: Long) {
    require(tokens >= 0) { "tokens must be non-negative" }
    if (!setTokensInternal(player.uniqueId, player.name, tokens))
        logRejectedSetTokens(player.uniqueId)
  }

  override fun addTokens(player: Player, tokens: Long): Boolean {
    return addTokensInternal(player.uniqueId, player.name, tokens)
  }

  override fun removeTokens(player: Player, tokens: Long): Boolean {
    return removeTokensInternal(player.uniqueId, player.name, tokens)
  }

  override fun setTokens(playerName: String, tokens: Long) {
    val target = resolveTarget(playerName)
    if (!setTokensInternal(target.uuid, target.name, tokens.coerceAtLeast(0))) {
      logRejectedSetTokens(target.uuid)
    }
  }

  override fun addTokens(playerName: String, tokens: Long, silent: Boolean) {
    val target = resolveTarget(playerName)
    addTokensInternal(target.uuid, target.name, tokens)
  }

  override fun addTokens(playerName: String, tokens: Long) {
    addTokens(playerName, tokens, false)
  }

  override fun removeTokens(playerName: String, tokens: Long, silent: Boolean) {
    val target = resolveTarget(playerName)
    removeTokensInternal(target.uuid, target.name, tokens)
  }

  override fun removeTokens(playerName: String, tokens: Long) {
    removeTokens(playerName, tokens, false)
  }

  override fun reload(): Boolean {
    reloadConfig()
    return true
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    return when (command.name.lowercase()) {
      "token" -> handleToken(sender, args)
      "tm" -> handleAdmin(sender, args)
      else -> false
    }
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> {
    val subcommands =
        if (command.name.equals("tm", ignoreCase = true)) {
          listOf("add", "remove", "set", "balance", "top", "transfer", "reload")
        } else {
          listOf("balance", "send", "top")
        }
    if (args.size == 1) {
      return subcommands.filter { it.startsWith(args[0], ignoreCase = true) }.toMutableList()
    }
    if (args.size == 2 && args[0].equals("send", ignoreCase = true)) {
      return Bukkit.getOnlinePlayers()
          .map { it.name }
          .filter { it.startsWith(args[1], true) }
          .toMutableList()
    }
    if (
        args.size == 2 &&
            command.name.equals("tm", ignoreCase = true) &&
            args[0].equals("transfer", ignoreCase = true)
    ) {
      return listOf("confirm").filter { it.startsWith(args[1], ignoreCase = true) }.toMutableList()
    }
    return mutableListOf()
  }

  private fun handleToken(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty() || args[0].equals("balance", ignoreCase = true)) {
      val target =
          if (args.size >= 2) {
            resolveTarget(args[1])
          } else {
            val player =
                sender as? Player
                    ?: run {
                      sender.sendMessage("Usage: /token balance <player>")
                      return true
                    }
            Target(player.uniqueId, player.name)
          }
      sender.sendMessage("${target.name ?: target.uuid}: ${getBalance(target.uuid)} tokens")
      return true
    }

    if (args[0].equals("send", ignoreCase = true)) {
      val player =
          sender as? Player
              ?: run {
                sender.sendMessage("This command is player-only.")
                return true
              }
      if (!sender.hasPermission("tokenmanager.use.send")) {
        sender.sendMessage("You do not have permission.")
        return true
      }
      if (args.size != 3) {
        sender.sendMessage("Usage: /token send <player> <amount>")
        return true
      }
      val amount = parseAmount(args[2]) ?: return sender.error("Amount must be positive.")
      if (!isSendAmountAllowed(amount)) return sender.error("Amount is outside the send limit.")
      val target = resolveTarget(args[1])
      val targetPlayer = Bukkit.getPlayer(target.uuid)
      if (targetPlayer != null) {
        val sendEvent = TMTokenSendEvent(player, targetPlayer, amount)
        server.pluginManager.callEvent(sendEvent)
        if (sendEvent.isCancelled) return sender.error("Token send was cancelled.")
      }
      val transfer = transferTokens(player, target, amount)
      if (transfer == null) {
        return sender.error("Not enough tokens.")
      }
      dispatchBalanceChange(transfer.debit)
      dispatchBalanceChange(transfer.credit)
      sender.sendMessage("Sent $amount tokens to ${target.name ?: target.uuid}.")
      Bukkit.getPlayer(target.uuid)?.sendMessage("${player.name} sent you $amount tokens.")
      return true
    }

    if (args[0].equals("top", ignoreCase = true)) {
      sendTop(sender, args.getOrNull(1)?.toIntOrNull() ?: 10)
      return true
    }

    sender.sendMessage("Usage: /token [balance|send|top]")
    return true
  }

  private fun handleAdmin(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("Usage: /tm <add|remove|set|balance|top|transfer|reload>")
      return true
    }

    if (!sender.hasPermission("tokenmanager.admin")) {
      sender.sendMessage("You do not have permission.")
      return true
    }

    when (args[0].lowercase()) {
      "add",
      "remove",
      "set" -> {
        if (args.size != 3) return sender.error("Usage: /tm ${args[0]} <player> <amount>")
        val target = resolveTarget(args[1])
        val action = args[0].lowercase()
        val amount =
            if (action == "set") {
              parseNonNegativeAmount(args[2]) ?: return sender.error("Amount must be non-negative.")
            } else {
              parseAmount(args[2]) ?: return sender.error("Amount must be positive.")
            }
        when (action) {
          "add" -> {
            if (!addTokensInternal(target.uuid, target.name, amount)) {
              return sender.error("Token persistence queue is full.")
            }
          }
          "remove" -> {
            if (!removeTokensInternal(target.uuid, target.name, amount)) {
              return sender.error("Not enough tokens or token persistence queue is full.")
            }
          }
          "set" -> {
            if (!setTokensInternal(target.uuid, target.name, amount)) {
              return sender.error("Token persistence queue is full.")
            }
          }
        }
        sender.sendMessage("${target.name ?: target.uuid}: ${getBalance(target.uuid)} tokens")
      }
      "balance" -> {
        if (args.size != 2) return sender.error("Usage: /tm balance <player>")
        val target = resolveTarget(args[1])
        sender.sendMessage("${target.name ?: target.uuid}: ${getBalance(target.uuid)} tokens")
      }
      "top" -> sendTop(sender, args.getOrNull(1)?.toIntOrNull() ?: 10)
      "transfer" -> {
        val force = args.getOrNull(1).equals("confirm", ignoreCase = true)
        if (!force) {
          sender.sendMessage(
              "Usage: /tm transfer confirm - imports data.yml into SQLite and overwrites matching balances."
          )
          return true
        }
        if (!beginMigration()) {
          return sender.error("TokenManager data.yml import is already running.")
        }
        val rawPreparation = AtomicReference<RawMigrationPreparation?>(null)
        val completion = AtomicReference<MigrationImportCompletion?>(null)
        val importStarted = AtomicBoolean(false)
        val dataFile = File(dataFolder, "data.yml")
        val completionTask = AtomicReference<org.bukkit.scheduler.BukkitTask?>(null)
        completionTask.set(
            Bukkit.getScheduler()
                .runTaskTimer(
                    this,
                    Runnable {
                      val completed = completion.getAndSet(null)
                      if (completed != null) {
                        synchronized(mutationGate) {
                          completed.loadedBalances?.let(ledger::replaceAll)
                          migrationInProgress.set(false)
                        }
                        sender.sendMessage(completed.result.message)
                        completionTask.get()?.cancel()
                        return@Runnable
                      }

                      if (importStarted.get()) return@Runnable
                      val raw = rawPreparation.getAndSet(null) ?: return@Runnable
                      // Phase (b): only this main-thread phase may resolve Bukkit player
                      // identities.
                      val preparation =
                          runCatching { prepareTokenManagerDataYmlImport(force = true, raw) }
                              .getOrElse { throwable ->
                                logger.severe(
                                    "TokenManager data.yml identity resolution failed: ${throwable.message}"
                                )
                                completion.set(
                                    MigrationImportCompletion(
                                        ImportResult(
                                            0,
                                            "TokenManager data.yml import failed: ${throwable.message}",
                                        )
                                    )
                                )
                                return@Runnable
                              }
                      if (preparation is MigrationPreparation.Skipped) {
                        completion.set(MigrationImportCompletion(preparation.result))
                        return@Runnable
                      }
                      if (!importStarted.compareAndSet(false, true)) return@Runnable
                      // Phase (c): the worker receives immutable entries and does SQLite work only.
                      Bukkit.getScheduler()
                          .runTaskAsynchronously(
                              this,
                              Runnable {
                                val imported =
                                    runCatching {
                                          executePreparedTokenManagerDataYmlImport(
                                              preparation,
                                              awaitPendingWrites = true,
                                          )
                                        }
                                        .getOrElse { throwable ->
                                          logger.severe(
                                              "TokenManager data.yml import failed: ${throwable.message}"
                                          )
                                          MigrationImportCompletion(
                                              ImportResult(
                                                  0,
                                                  "TokenManager data.yml import failed: ${throwable.message}",
                                              )
                                          )
                                        }
                                completion.set(imported)
                              },
                          )
                    },
                    1L,
                    1L,
                )
        )
        sender.sendMessage(
            "Started TokenManager data.yml import. Token writes will fail fast until it completes."
        )
        Bukkit.getScheduler()
            .runTaskAsynchronously(
                this,
                Runnable {
                  // Phase (a): filesystem/YAML parsing only; it must not call Bukkit APIs.
                  rawPreparation.set(
                      runCatching { parseTokenManagerDataYml(dataFile) }
                          .getOrElse { throwable ->
                            logger.severe(
                                "TokenManager data.yml parse failed: ${throwable.message}"
                            )
                            RawMigrationPreparation.Skipped(
                                ImportResult(
                                    0,
                                    "TokenManager data.yml import failed: ${throwable.message}",
                                )
                            )
                          }
                  )
                },
            )
      }
      "reload" -> {
        reload()
        sender.sendMessage("OyasaiToken config reloaded.")
      }
      else -> sender.sendMessage("Usage: /tm <add|remove|set|balance|top|transfer|reload>")
    }
    return true
  }

  private fun sendTop(sender: CommandSender, limit: Int) {
    val top =
        ledger.top(limit).mapIndexed { index, entry ->
          "${index + 1}. ${entry.record.name ?: entry.uuid}: ${entry.record.balance}"
        }
    if (top.isEmpty()) {
      sender.sendMessage("No token balances.")
    } else {
      top.forEach(sender::sendMessage)
    }
  }

  private fun logRejectedSetTokens(uuid: UUID) {
    logger.warning(
        "Rejected setTokens for $uuid because token persistence is unavailable or migration is running."
    )
  }

  private fun configureConnection() {
    connection.createStatement().use { statement ->
      statement.execute("PRAGMA journal_mode=WAL")
      statement.execute("PRAGMA foreign_keys=ON")
      statement.execute("PRAGMA busy_timeout=${config.getLong("database.busy-timeout-ms", 5000)}")
    }
  }

  private fun ensureSchema() {
    connection.createStatement().use { statement ->
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS token_balances (
            uuid TEXT PRIMARY KEY,
            name TEXT,
            balance INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
            created_at INTEGER NOT NULL,
            updated_at INTEGER NOT NULL
          )
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE INDEX IF NOT EXISTS idx_token_balances_top
          ON token_balances(balance DESC, updated_at DESC)
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS token_transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL,
            delta INTEGER NOT NULL,
            balance_after INTEGER NOT NULL,
            reason TEXT,
            actor_uuid TEXT,
            created_at INTEGER NOT NULL
          )
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS token_legacy_ids (
            source TEXT NOT NULL,
            identifier_type TEXT NOT NULL,
            identifier TEXT NOT NULL,
            uuid TEXT NOT NULL,
            migrated_at INTEGER NOT NULL,
            PRIMARY KEY (source, identifier_type, identifier)
          )
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS schema_meta (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
          )
          """
              .trimIndent()
      )
    }
  }

  private fun loadBalances(): Map<UUID, BalanceRecord> {
    val loaded = mutableMapOf<UUID, BalanceRecord>()
    synchronized(dbLock) {
      connection.prepareStatement("SELECT uuid, name, balance FROM token_balances").use { statement
        ->
        statement.executeQuery().use { result ->
          while (result.next()) {
            loaded[UUID.fromString(result.getString("uuid"))] =
                BalanceRecord(result.getStringOrNull("name"), result.getLong("balance"))
          }
        }
      }
    }
    return loaded
  }

  private fun readOrInitializeBalance(uuid: UUID, name: String?): Long {
    return synchronized(mutationGate) {
      ledger.balance(uuid, name, persistIfMissing = !migrationInProgress.get())
    }
  }

  private fun setTokensInternal(uuid: UUID, name: String?, amount: Long): Boolean {
    require(amount >= 0) { "amount must be non-negative" }
    val change =
        synchronized(mutationGate) {
          if (migrationInProgress.get()) null else ledger.set(uuid, name, amount)
        }
    change?.let { dispatchBalanceChange(it) }
    return change != null
  }

  private fun addTokensInternal(uuid: UUID, name: String?, amount: Long): Boolean {
    val change =
        synchronized(mutationGate) {
          if (migrationInProgress.get()) null else ledger.add(uuid, name, amount)
        }
    change?.let { dispatchBalanceChange(it) }
    return change != null
  }

  private fun removeTokensInternal(uuid: UUID, name: String?, amount: Long): Boolean {
    val change =
        synchronized(mutationGate) {
          if (migrationInProgress.get()) null else ledger.remove(uuid, name, amount)
        }
    change?.let { dispatchBalanceChange(it) }
    return change != null
  }

  private fun transferTokens(player: Player, target: Target, amount: Long) =
      synchronized(mutationGate) {
        if (migrationInProgress.get()) {
          null
        } else {
          ledger.transfer(player.uniqueId, player.name, target.uuid, target.name, amount)
        }
      }

  private fun beginMigration(): Boolean =
      synchronized(mutationGate) { migrationInProgress.compareAndSet(false, true) }

  private fun writeBalanceRows(entry: PersistedBalance) {
    val write = entry.write
    val now = System.currentTimeMillis()
    connection
        .prepareStatement(
            """
            INSERT INTO token_balances (uuid, name, balance, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(uuid) DO UPDATE SET
              name = COALESCE(excluded.name, token_balances.name),
              balance = excluded.balance,
              updated_at = excluded.updated_at
            """
                .trimIndent()
        )
        .use { statement ->
          statement.setString(1, write.uuid.toString())
          statement.setString(2, write.name)
          statement.setLong(3, write.balance)
          statement.setLong(4, now)
          statement.setLong(5, now)
          statement.executeUpdate()
        }
    connection
        .prepareStatement(
            """
            INSERT INTO token_transactions
              (id, uuid, delta, balance_after, reason, actor_uuid, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """
                .trimIndent()
        )
        .use { statement ->
          statement.setLong(1, entry.txId)
          statement.setString(2, write.uuid.toString())
          statement.setLong(3, write.delta)
          statement.setLong(4, write.balance)
          statement.setString(5, write.reason)
          statement.setString(6, write.actorUuid?.toString())
          statement.setLong(7, now)
          statement.executeUpdate()
        }
  }

  private fun startPersistenceWorker() {
    val queueSize = config.getInt("persistence.queue-size", 4096).coerceAtLeast(1)
    persistenceExecutor =
        ThreadPoolExecutor(
            1,
            1,
            0L,
            TimeUnit.MILLISECONDS,
            ArrayBlockingQueue<Runnable>(queueSize),
            { runnable -> Thread(runnable, "OyasaiToken-DB-Writer").apply { isDaemon = false } },
            ThreadPoolExecutor.AbortPolicy(),
        )
  }

  /**
   * Enqueues one logical ledger operation. A transfer therefore cannot be interleaved with other
   * jobs.
   */
  private fun enqueuePersistence(writes: List<BalanceWrite>): Boolean {
    if (writes.isEmpty() || !::persistenceExecutor.isInitialized) return false
    val job =
        PersistenceJob(
            writes.map { write -> PersistedBalance(nextTransactionId.getAndIncrement(), write) }
        )
    return try {
      persistenceExecutor.execute { persistBalanceJob(job) }
      true
    } catch (rejected: RejectedExecutionException) {
      val first = job.entries.first()
      logger.warning(
          "Token persistence queue is full; rejected tx ${first.txId} (${first.write.reason}) for ${first.write.uuid}."
      )
      false
    }
  }

  private fun closeConnectionWhenPersistenceStops() {
    Thread(
            {
              runCatching {
                    persistenceExecutor.awaitTermination(60L, TimeUnit.SECONDS)
                    if (persistenceExecutor.isTerminated) {
                      connection.close()
                    } else {
                      logger.warning(
                          "Token persistence worker is still running; SQLite connection remains open."
                      )
                    }
                  }
                  .onFailure { throwable ->
                    logger.warning(
                        "Failed to close token SQLite connection later: ${throwable.message}"
                    )
                  }
            },
            "OyasaiToken-DB-Closer",
        )
        .apply {
          isDaemon = true
          start()
        }
  }

  private fun persistBalanceJob(job: PersistenceJob) {
    runCatching {
          withTransaction {
            val existing = job.entries.filter { transactionExists(it.txId) }
            if (existing.size == job.entries.size) {
              logger.warning(
                  "Skipping duplicate token persistence job ${job.entries.first().txId}-${job.entries.last().txId}."
              )
              return@withTransaction
            }
            check(existing.isEmpty()) {
              "Refusing partially duplicated token persistence job ${job.entries.first().txId}-${job.entries.last().txId}."
            }
            job.entries.forEach(::writeBalanceRows)
            setMetaRows(LAST_APPLIED_TX_ID_KEY, job.entries.maxOf { it.txId }.toString())
          }
        }
        .onFailure { throwable ->
          logger.severe(
              "Failed to persist token job ${job.entries.first().txId}-${job.entries.last().txId}: ${throwable.message}"
          )
        }
  }

  private fun transactionExists(txId: Long): Boolean {
    synchronized(dbLock) {
      return connection.prepareStatement("SELECT 1 FROM token_transactions WHERE id = ?").use {
          statement ->
        statement.setLong(1, txId)
        statement.executeQuery().use { result -> result.next() }
      }
    }
  }

  private fun initializeTransactionCounter() {
    val checkpoint = getMeta(LAST_APPLIED_TX_ID_KEY)?.toLongOrNull() ?: 0L
    val maxTransactionId =
        synchronized(dbLock) {
          connection
              .prepareStatement("SELECT COALESCE(MAX(id), 0) AS max_id FROM token_transactions")
              .use { statement ->
                statement.executeQuery().use { result ->
                  if (result.next()) result.getLong("max_id") else 0L
                }
              }
        }
    nextTransactionId.set(maxOf(checkpoint, maxTransactionId) + 1L)
    logger.info(
        "Token persistence checkpoint loaded: last_applied_tx_id=$checkpoint, max_transaction_id=$maxTransactionId."
    )
  }

  private fun dispatchBalanceChange(change: BalanceChange) {
    val event =
        TMTokenBalanceChangeEvent(
            change.uuid,
            change.name,
            change.oldBalance,
            change.newBalance,
            change.delta,
            change.reason,
        )
    val fire = Runnable {
      runCatching { server.pluginManager.callEvent(event) }
          .onFailure { throwable ->
            logger.log(
                Level.WARNING,
                "Token balance change listener failed for ${change.uuid}",
                throwable,
            )
          }
    }
    if (Bukkit.isPrimaryThread()) {
      fire.run()
    } else {
      Bukkit.getScheduler().runTask(this, fire)
    }
  }

  private fun importTokenManagerDataYml(force: Boolean): ImportResult {
    migrationImportPreflight(force)?.let {
      return it
    }
    val imported =
        executePreparedTokenManagerDataYmlImport(
            prepareTokenManagerDataYmlImport(
                force,
                parseTokenManagerDataYml(File(dataFolder, "data.yml")),
            ),
            awaitPendingWrites = force,
        )
    imported.loadedBalances?.let(ledger::replaceAll)
    return imported.result
  }

  /**
   * Phase (b): resolves Bukkit identities while the caller is on the primary thread. The returned
   * values are immutable and are safe to pass to the SQLite import worker.
   */
  private fun prepareTokenManagerDataYmlImport(
      force: Boolean,
      raw: RawMigrationPreparation,
  ): MigrationPreparation {
    check(Bukkit.isPrimaryThread()) {
      "TokenManager data.yml identities must be resolved on the Bukkit primary thread."
    }
    migrationImportPreflight(force)?.let {
      return MigrationPreparation.Skipped(it)
    }
    if (raw is RawMigrationPreparation.Skipped) {
      return MigrationPreparation.Skipped(raw.result)
    }
    val entries =
        (raw as RawMigrationPreparation.Ready).entries.map { entry ->
          val target = resolveLegacyIdentifier(entry.identifier)
          MigrationEntry(
              entry.identifier,
              entry.identifierType,
              target,
              entry.amount,
          )
        }
    return MigrationPreparation.Ready(entries.toList(), migrationExecutionOptions())
  }

  private fun migrationImportPreflight(force: Boolean): ImportResult? {
    if (force) return null
    if (!config.getBoolean("migration.import-tokenmanager-data-yml", true)) {
      return ImportResult(0, "TokenManager data.yml import is disabled in config.yml.")
    }
    val alreadyImportedAt = getMeta("tokenmanager_data_yml_imported_at")
    if (alreadyImportedAt != null) {
      return ImportResult(
          0,
          "TokenManager data.yml was already imported at $alreadyImportedAt. Use /tm transfer confirm to re-import.",
      )
    }
    if (ledger.isNotEmpty()) {
      return ImportResult(
          0,
          "Skipped automatic data.yml import because tokens.db already contains balances. Use /tm transfer confirm after reviewing local backups.",
      )
    }
    return null
  }

  private fun migrationExecutionOptions(): MigrationExecutionOptions =
      MigrationExecutionOptions(
          config.getLong("persistence.shutdown-await-seconds", 10L).coerceAtLeast(1L) * 1000L,
          config.getBoolean("migration.backup-before-import", true),
          File(
              dataFolder,
              config.getString("migration.backup-directory", "migration-backups")
                  ?: "migration-backups",
          ),
      )

  /** Phase (a): parses only local YAML and must not call Bukkit APIs. */
  private fun parseTokenManagerDataYml(dataFile: File): RawMigrationPreparation {
    if (!dataFile.isFile) {
      return RawMigrationPreparation.Skipped(
          ImportResult(0, "TokenManager data.yml was not found.")
      )
    }
    val root =
        Files.newBufferedReader(dataFile.toPath()).use { reader -> Yaml().load<Any?>(reader) }
    val players =
        (root as? Map<*, *>)?.get("Players") as? Map<*, *>
            ?: return RawMigrationPreparation.Skipped(
                ImportResult(0, "TokenManager data.yml has no Players section.")
            )
    val entries =
        players.entries.map { (key, value) ->
          val identifier = key.toString()
          RawMigrationEntry(
              identifier,
              if (identifier.toUuidOrNull() != null) "uuid" else "name",
              value.toLongOrZero().coerceAtLeast(0),
          )
        }
    if (entries.isEmpty()) {
      return RawMigrationPreparation.Skipped(
          ImportResult(0, "TokenManager data.yml has no player entries.")
      )
    }
    return RawMigrationPreparation.Ready(entries.toList())
  }

  /** Phase (c): performs only queue draining and SQLite I/O. */
  private fun executePreparedTokenManagerDataYmlImport(
      preparation: MigrationPreparation,
      awaitPendingWrites: Boolean,
  ): MigrationImportCompletion {
    if (preparation is MigrationPreparation.Skipped) {
      return MigrationImportCompletion(preparation.result)
    }
    val ready = preparation as MigrationPreparation.Ready
    if (
        awaitPendingWrites &&
            ::persistenceExecutor.isInitialized &&
            !awaitPersistenceIdle(ready.options.shutdownAwaitMillis)
    ) {
      return MigrationImportCompletion(
          ImportResult(
              0,
              "Timed out waiting for pending token writes. Try /tm transfer confirm again after the queue drains.",
          )
      )
    }
    val entries = ready.entries
    val backup = backupDatabaseBeforeImport(ready.options)
    val now = System.currentTimeMillis()
    withTransaction {
      var lastAppliedTxId: Long? = null
      entries.forEach { entry ->
        val persisted =
            PersistedBalance(
                nextTransactionId.getAndIncrement(),
                BalanceWrite(
                    entry.target.uuid,
                    entry.target.name,
                    entry.amount,
                    0,
                    "migration:data.yml",
                ),
            )
        if (!transactionExists(persisted.txId)) {
          writeBalanceRows(persisted)
          lastAppliedTxId = persisted.txId
        }
        connection
            .prepareStatement(
                """
                INSERT OR REPLACE INTO token_legacy_ids
                  (source, identifier_type, identifier, uuid, migrated_at)
                VALUES ('data.yml', ?, ?, ?, ?)
                """
                    .trimIndent()
            )
            .use { statement ->
              statement.setString(1, entry.identifierType)
              statement.setString(2, entry.identifier)
              statement.setString(3, entry.target.uuid.toString())
              statement.setLong(4, now)
              statement.executeUpdate()
            }
      }
      lastAppliedTxId?.let { setMetaRows(LAST_APPLIED_TX_ID_KEY, it.toString()) }
      setMetaRows("tokenmanager_data_yml_imported_at", now.toString())
    }
    val loadedBalances = loadBalances()
    logger.info("Imported ${entries.size} TokenManager data.yml balances into SQLite.")
    val suffix =
        if (backup != null) {
          " Backup: ${backup.name}."
        } else {
          ""
        }
    return MigrationImportCompletion(
        ImportResult(
            entries.size,
            "Imported ${entries.size} entries from TokenManager data.yml.$suffix",
        ),
        loadedBalances,
    )
  }

  private fun awaitPersistenceIdle(timeoutMillis: Long): Boolean {
    val deadline = System.currentTimeMillis() + timeoutMillis
    while (persistenceExecutor.queue.isNotEmpty() || persistenceExecutor.activeCount > 0) {
      if (System.currentTimeMillis() >= deadline) return false
      try {
        Thread.sleep(25L)
      } catch (interrupted: InterruptedException) {
        Thread.currentThread().interrupt()
        return false
      }
    }
    return true
  }

  private fun getMeta(key: String): String? {
    synchronized(dbLock) {
      return connection.prepareStatement("SELECT value FROM schema_meta WHERE key = ?").use {
          statement ->
        statement.setString(1, key)
        statement.executeQuery().use { result ->
          if (result.next()) result.getString("value") else null
        }
      }
    }
  }

  private fun setMetaRows(key: String, value: String) {
    synchronized(dbLock) {
      connection
          .prepareStatement(
              """
              INSERT INTO schema_meta (key, value) VALUES (?, ?)
              ON CONFLICT(key) DO UPDATE SET value = excluded.value
              """
                  .trimIndent()
          )
          .use { statement ->
            statement.setString(1, key)
            statement.setString(2, value)
            statement.executeUpdate()
          }
    }
  }

  private fun <T> withTransaction(action: () -> T): T {
    synchronized(dbLock) {
      val previous = connection.autoCommit
      connection.autoCommit = false
      return try {
        val result = action()
        connection.commit()
        result
      } catch (throwable: Throwable) {
        connection.rollback()
        throw throwable
      } finally {
        connection.autoCommit = previous
      }
    }
  }

  private fun backupDatabaseBeforeImport(options: MigrationExecutionOptions): File? {
    if (!options.backupBeforeImport) return null
    if (!::databaseFile.isInitialized || !databaseFile.isFile) return null

    synchronized(dbLock) {
      connection.createStatement().use { statement ->
        statement.execute("PRAGMA wal_checkpoint(FULL)")
      }
    }

    val backupDir = options.backupDirectory
    backupDir.mkdirs()
    val timestamp = System.currentTimeMillis()
    val backup = File(backupDir, "${databaseFile.name}.$timestamp.bak")
    Files.copy(databaseFile.toPath(), backup.toPath(), StandardCopyOption.REPLACE_EXISTING)

    listOf("-wal", "-shm").forEach { suffix ->
      val sidecar = File(databaseFile.parentFile, databaseFile.name + suffix)
      if (sidecar.isFile) {
        Files.copy(
            sidecar.toPath(),
            File(backupDir, "${sidecar.name}.$timestamp.bak").toPath(),
            StandardCopyOption.REPLACE_EXISTING,
        )
      }
    }
    return backup
  }

  private fun resolveTarget(identifier: String): Target {
    identifier.toUuidOrNull()?.let { uuid ->
      val name = Bukkit.getPlayer(uuid)?.name ?: ledger.nameOf(uuid)
      return Target(uuid, name)
    }
    val player = Bukkit.getPlayerExact(identifier)
    if (player != null) return Target(player.uniqueId, player.name)
    val offline = Bukkit.getOfflinePlayer(identifier)
    return Target(offline.uniqueId, offline.name ?: identifier)
  }

  private fun resolveLegacyIdentifier(identifier: String): Target {
    identifier.toUuidOrNull()?.let { uuid ->
      val name = Bukkit.getOfflinePlayer(uuid).name
      return Target(uuid, name)
    }
    return resolveTarget(identifier)
  }

  private fun parseAmount(raw: String): Long? {
    val amount = raw.toLongOrNull() ?: return null
    return amount.takeIf { it > 0 }
  }

  private fun parseNonNegativeAmount(raw: String): Long? {
    val amount = raw.toLongOrNull() ?: return null
    return amount.takeIf { it >= 0 }
  }

  private fun isSendAmountAllowed(amount: Long): Boolean {
    val min = config.getLong("send-amount-limit.min", 1)
    val max = config.getLong("send-amount-limit.max", -1)
    return amount >= min && (max < 0 || amount <= max)
  }

  private fun CommandSender.error(message: String): Boolean {
    sendMessage(message)
    return true
  }

  private fun String.toUuidOrNull(): UUID? {
    return runCatching { UUID.fromString(this) }.getOrNull()
  }

  private fun Any?.toLongOrZero(): Long =
      when (this) {
        is Number -> toLong()
        else -> toString().toLongOrNull() ?: 0L
      }

  private fun ResultSet.getStringOrNull(column: String): String? {
    val value = getString(column)
    return if (wasNull()) null else value
  }

  private data class PersistenceJob(val entries: List<PersistedBalance>) {
    init {
      require(entries.isNotEmpty()) { "persistence jobs require at least one balance write" }
    }
  }

  private data class PersistedBalance(val txId: Long, val write: BalanceWrite)

  private data class ImportResult(val imported: Int, val message: String)

  private data class MigrationImportCompletion(
      val result: ImportResult,
      val loadedBalances: Map<UUID, BalanceRecord>? = null,
  )

  private sealed class RawMigrationPreparation {
    data class Ready(val entries: List<RawMigrationEntry>) : RawMigrationPreparation()

    data class Skipped(val result: ImportResult) : RawMigrationPreparation()
  }

  private data class RawMigrationEntry(
      val identifier: String,
      val identifierType: String,
      val amount: Long,
  )

  private data class MigrationExecutionOptions(
      val shutdownAwaitMillis: Long,
      val backupBeforeImport: Boolean,
      val backupDirectory: File,
  )

  private sealed class MigrationPreparation {
    data class Ready(
        val entries: List<MigrationEntry>,
        val options: MigrationExecutionOptions,
    ) : MigrationPreparation()

    data class Skipped(val result: ImportResult) : MigrationPreparation()
  }

  private data class MigrationEntry(
      val identifier: String,
      val identifierType: String,
      val target: Target,
      val amount: Long,
  )

  private data class Target(val uuid: UUID, val name: String?)

  companion object {
    /*
     * This checkpoint is used for duplicate detection and quick recovery after restart.
     * It is not a no-loss guarantee for jobs that were accepted in memory but never
     * reached SQLite before a hard crash.
     */
    private const val LAST_APPLIED_TX_ID_KEY = "last_applied_tx_id"
  }
}
