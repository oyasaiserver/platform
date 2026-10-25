package io.oyasai.economy

import java.io.File
import java.math.BigInteger
import java.nio.file.Files
import java.security.MessageDigest
import java.sql.Connection
import java.sql.DriverManager
import java.util.Locale
import java.util.UUID
import org.yaml.snakeyaml.Yaml

internal const val LEGACY_DATABASE_IMPORT_KEY = "legacy_databases_imported_at"

internal data class MigrationReport(
    val currency: String,
    val accounts: Int,
    val transactions: Int,
    val reconciliationTransactions: Int,
    val outbox: Int,
    val balanceTotal: BigInteger,
)

/** Imports both old ledgers in one transaction. Only private snapshots are opened by SQLite. */
internal fun importLegacyDatabases(
    connection: Connection,
    pluginsFolder: File,
    options: LegacyImportOptions = LegacyImportOptions(),
    policies: List<CurrencyPolicy> = legacyDefaultPolicies(),
    onExcluded: (Int, BigInteger) -> Unit = { count, total -> println("除外: $count 件、残高合計 $total") },
): List<MigrationReport> {
  check(connection.autoCommit) { "Legacy import requires its own transaction" }
  val sources = legacySources(pluginsFolder)
  if (sources.isEmpty()) {
    require(options.excludedNames.isEmpty() && options.corrections.isEmpty()) {
      "Migration policy has no token source"
    }
    return emptyList()
  }
  require(
      sources.any { it.first == "token" } ||
          (options.excludedNames.isEmpty() && options.corrections.isEmpty())
  ) {
    "Migration policy has no token source"
  }
  connection.autoCommit = false
  try {
    for (table in
        listOf(
            "accounts",
            "transactions",
            "notification_outbox",
            "schema_meta",
        )) {
      check(queryRows(connection, "SELECT 1 FROM $table LIMIT 1").isEmpty()) {
        "Legacy import refuses a populated destination"
      }
    }
    check(
        queryRows(connection, "SELECT 1 FROM schema_meta WHERE key=?", LEGACY_DATABASE_IMPORT_KEY)
            .isEmpty()
    ) {
      "Legacy databases have already been imported"
    }
    val reports =
        sources.map { (currency, file) ->
          withReadOnlySnapshot(file) { source ->
            importCurrency(
                connection,
                source,
                currency,
                options,
                policies.single { it.id == currency },
                onExcluded,
            )
          }
        }
    val ids = queryRows(connection, "SELECT uuid,MAX(name) FROM accounts GROUP BY uuid")
    val now = System.currentTimeMillis()
    for (policy in policies) for (row in ids) {
      if (
          queryRows(
                  connection,
                  "SELECT 1 FROM accounts WHERE currency=? AND uuid=?",
                  policy.id,
                  row[0],
              )
              .isNotEmpty()
      )
          continue
      insert(
          connection,
          "accounts",
          listOf("currency", "uuid", "name", "name_lower", "balance", "created_at", "updated_at"),
          listOf(
              policy.id,
              row[0],
              row[1],
              (row[1] as? String)?.lowercase(Locale.ROOT),
              policy.initial,
              now,
              now,
          ),
      )
      insert(
          connection,
          "transactions",
          listOf("currency", "created_at", "uuid", "delta", "balance_after", "reason"),
          listOf(policy.id, now, row[0], policy.initial, policy.initial, "initial"),
      )
    }
    val importedAt = System.currentTimeMillis().toString()
    putMeta(connection, LEGACY_DATABASE_IMPORT_KEY, importedAt)
    check(
        queryRows(
                connection,
                "SELECT value FROM schema_meta WHERE key=?",
                LEGACY_DATABASE_IMPORT_KEY,
            )
            .single()
            .single() == importedAt
    ) {
      "Legacy import marker verification failed"
    }
    connection.commit()
    return reports
  } catch (error: Exception) {
    runCatching { connection.rollback() }.onFailure { error.addSuppressed(it) }
    throw error
  } finally {
    connection.autoCommit = true
  }
}

private fun legacySources(pluginsFolder: File): List<Pair<String, File>> {
  val tokenFolder = File(pluginsFolder, "OyasaiToken")
  val config = File(tokenFolder, "config.yml")
  val database =
      if (config.isFile) {
        val root = config.reader().use { Yaml().load<Any?>(it) } as? Map<*, *>
        ((root?.get("database") as? Map<*, *>)?.get("file") as? String) ?: "tokens.db"
      } else "tokens.db"
  require(database.isNotBlank()) { "Old token database filename is empty" }
  val token = File(database).takeIf(File::isAbsolute) ?: File(tokenFolder, database)
  check(token.isFile || !File(tokenFolder, "tokens.db").isFile) {
    "Configured legacy token database is missing but a different tokens.db exists; review the old configuration"
  }
  val fallback = File(pluginsFolder, "TokenManager/tokens.db")
  val yen = File(pluginsFolder, "Vault/economy.db")
  return buildList {
    (token.takeIf(File::isFile) ?: fallback.takeIf(File::isFile))?.let { add("token" to it) }
    yen.takeIf(File::isFile)?.let { add("yen" to it) }
  }
}

/** Copy WAL and SHM too: copying just the main file silently loses committed WAL transactions. */
private fun <T> withReadOnlySnapshot(file: File, block: (Connection) -> T): T {
  val folder = Files.createTempDirectory("economy-legacy-snapshot").toFile()
  val files = listOf(file, File(file.path + "-wal"), File(file.path + "-shm"))
  fun fingerprints() =
      files.map { source ->
        if (!source.exists()) null
        else
            source.inputStream().use { input ->
              val digest = MessageDigest.getInstance("SHA-256")
              val buffer = ByteArray(64 * 1024)
              var read = input.read(buffer)
              while (read >= 0) {
                digest.update(buffer, 0, read)
                read = input.read(buffer)
              }
              digest.digest().toList()
            }
      }
  try {
    val before = fingerprints()
    files.forEach { source -> if (source.exists()) source.copyTo(File(folder, source.name)) }
    check(before == fingerprints()) {
      "Legacy database changed while making its snapshot; stop the old server"
    }
    val snapshot = File(folder, file.name)
    return DriverManager.getConnection("jdbc:sqlite:${snapshot.toURI()}?mode=ro").use { source ->
      source.createStatement().use { it.execute("PRAGMA query_only=ON") }
      val result = block(source)
      check(before == fingerprints()) {
        "Legacy database changed during import; stop the old server"
      }
      result
    }
  } finally {
    check(folder.deleteRecursively()) { "Could not remove legacy database snapshot" }
  }
}

private fun importCurrency(
    target: Connection,
    source: Connection,
    currency: String,
    options: LegacyImportOptions,
    policy: CurrencyPolicy,
    onExcluded: (Int, BigInteger) -> Unit,
): MigrationReport {
  check(queryRows(source, "PRAGMA integrity_check").single().single() == "ok") {
    "Legacy database integrity check failed"
  }
  val token = currency == "token"
  val balanceTable = if (token) "token_balances" else "accounts"
  val historyTable = if (token) "token_transactions" else "transactions"
  val allAccounts =
      queryRows(
          source,
          "SELECT uuid,name,balance,created_at,updated_at FROM $balanceTable ORDER BY uuid",
      )
  val negative = allAccounts.filter { integer(it[2]) < 0 }.map { it[0] }
  require(negative.isEmpty()) {
    "負残高の口座 ${negative.size} 件 ($currency): ${negative.joinToString()}"
  }
  val excluded =
      if (token)
          options.excludedNames.map { name ->
            val matches = allAccounts.filter { it[1] == name }
            require(matches.size == 1) { "Exclusion name must match exactly one account" }
            matches.single()
          }
      else emptyList()
  val excludedIds = excluded.map { it[0] }.toSet()
  if (token)
      onExcluded(
          excluded.size,
          excluded.fold(BigInteger.ZERO) { sum, row -> sum + BigInteger.valueOf(integer(row[2])) },
      )
  val accounts = allAccounts.filter { it[0] !in excludedIds }
  val sourceHistory =
      if (token) {
        queryRows(
                source,
                "SELECT id,uuid,delta,balance_after,reason,actor_uuid,created_at FROM $historyTable ORDER BY id",
            )
            .map { row ->
              listOf(row[0], row[6], row[1], row[2], row[3], row[4], null, row[5], null, null)
            }
      } else
          queryRows(
              source,
              "SELECT id,created_at,uuid,delta,balance_after,reason,source,actor_uuid,transfer_id,note FROM $historyTable ORDER BY id",
          )
  val includedHistory = sourceHistory.filter { it[2] !in excludedIds }
  val unusedCorrections = if (token) options.corrections.toMutableMap() else mutableMapOf()
  require(unusedCorrections.keys.all { id -> accounts.any { it[0] == id } }) {
    "Correction account is absent or excluded"
  }
  val metadata =
      if (hasTable(source, "schema_meta"))
          queryRows(source, "SELECT key,value FROM schema_meta ORDER BY key")
      else emptyList()
  val balances =
      accounts.associate { row ->
        val uuid = row[0] as String
        require(UUID.fromString(uuid).toString() == uuid) {
          "Legacy account UUID must be canonical"
        }
        val balance = integer(row[2])
        require(balance in 0..policy.maximum) { "Legacy balance violates currency limits" }
        uuid to BigInteger.valueOf(balance)
      }
  val normalizedAccounts =
      accounts.map { row ->
        listOf(
            currency,
            row[0],
            row[1],
            (row[1] as? String)?.lowercase(Locale.ROOT),
            row[2],
            row[3],
            row[4],
        )
      }
  if (!token) {
    // Vault already stores the authoritative normalized name; preserve it exactly.
    val names =
        queryRows(source, "SELECT uuid,name_lower FROM accounts").associate { it[0] to it[1] }
    normalizedAccounts.forEach { row ->
      insert(
          target,
          "accounts",
          listOf("currency", "uuid", "name", "name_lower", "balance", "created_at", "updated_at"),
          row.toMutableList().apply { set(3, names[row[1]]) },
      )
    }
  } else
      normalizedAccounts.forEach {
        insert(
            target,
            "accounts",
            listOf("currency", "uuid", "name", "name_lower", "balance", "created_at", "updated_at"),
            it,
        )
      }

  val running = mutableMapOf<String, BigInteger>()
  val mapping = mutableMapOf<Long, Long>()
  val importedHistory = mutableListOf<List<Any?>>()
  val columns =
      listOf(
          "currency",
          "created_at",
          "uuid",
          "delta",
          "balance_after",
          "reason",
          "source",
          "actor_uuid",
          "transfer_id",
          "note",
      )
  var reconciliations = 0
  val sourceHistoryById = includedHistory.associateBy { integer(it[0]) }
  fun reconcile(
      uuid: String,
      amount: BigInteger,
      at: Any?,
      balanceAfter: BigInteger,
      note: String,
  ) {
    val row =
        listOf(
            currency,
            at,
            uuid,
            amount.longValueExact(),
            balanceAfter.longValueExact(),
            "legacy_opening_reconciliation",
            "legacy-import",
            null,
            null,
            note,
        )
    insert(target, "transactions", columns, row)
    importedHistory += listOf(lastId(target)) + row
    reconciliations++
  }
  includedHistory.forEach { row ->
    val uuid = row[2] as String
    require(uuid in balances) { "Legacy transaction has no account" }
    val previous = running[uuid] ?: BigInteger.ZERO
    val delta = BigInteger.valueOf(integer(row[3]))
    val after = BigInteger.valueOf(integer(row[4]))
    require(integer(row[4]) in 0..policy.maximum) {
      "Legacy history balance violates currency limits"
    }
    val expected = previous + delta
    if (expected != after) {
      val difference = after - expected
      val note =
          when {
            token &&
                uuid !in running &&
                previous == BigInteger.ZERO &&
                difference == BigInteger.valueOf(25L) -> "旧履歴に初期残高が無かったため補正（元の行 id: ${row[0]}）"
            token &&
                delta == BigInteger.ZERO &&
                row[5] in listOf("migration:data.yml", "migration:mysql") ->
                "Legacy ${row[5]} snapshot omitted delta; original transaction ${row[0]} is preserved"
            token && unusedCorrections[uuid] != null -> {
              val correction = unusedCorrections.remove(uuid)!!
              require(difference == BigInteger.valueOf(correction.amount)) {
                "Explicit correction amount mismatch"
              }
              correction.reason
            }
            else ->
                throw IllegalArgumentException(
                    "不明な旧履歴の不一致: 通貨=$currency UUID=$uuid 取引=${row[0]} 期待=$expected 実際=$after 差=$difference"
                )
          }
      require((previous + difference).longValueExact() in 0..policy.maximum) {
        "Correction balance violates currency limits"
      }
      reconcile(uuid, difference, row[1], previous + difference, note)
    }
    running[uuid] = after
    // New transfer IDs are strings; SQLite's TEXT affinity also converts old numeric IDs.
    val values =
        (listOf(currency) + row.drop(1)).toMutableList().apply { set(8, row[8]?.toString()) }
    insert(target, "transactions", columns, values)
    val id = lastId(target)
    require(mapping.put(integer(row[0]), id) == null) { "Duplicate legacy transaction ID" }
    importedHistory += listOf(id) + values
  }
  require(unusedCorrections.isEmpty()) { "Unused explicit correction" }
  val exportedWithoutHistory =
      token && metadata.any { it[0] == "migration_source" && it[1] == "mariadb:token.tokenmanager" }
  accounts.forEach { row ->
    val uuid = row[0] as String
    val balance = balances.getValue(uuid)
    if (uuid !in running && balance != BigInteger.ZERO) {
      require(exportedWithoutHistory) { "Legacy account has no opening history" }
      reconcile(
          uuid,
          balance,
          row[3],
          balance,
          "Legacy MariaDB exporter stored opening account without history",
      )
      running[uuid] = balance
    }
    require((running[uuid] ?: BigInteger.ZERO) == balance) {
      "Legacy account differs from its history"
    }
  }
  val outbox =
      if (token && hasTable(source, "token_notification_outbox")) {
        queryRows(
                source,
                "SELECT id,transaction_id,target_uuid,notification_type,delta,balance_after,created_at,delivered_at FROM token_notification_outbox ORDER BY id",
            )
            .filter { it[2] !in excludedIds }
            .map { row ->
              row.toMutableList().apply {
                val transactionId = integer(row[1])
                set(
                    1,
                    requireNotNull(mapping[transactionId]) {
                      "Legacy outbox references missing transaction"
                    },
                )
                val history = sourceHistoryById.getValue(transactionId)
                require(
                    row[2] == history[2] &&
                        integer(row[4]) == integer(history[3]) &&
                        integer(row[5]) == integer(history[4])
                ) {
                  "Legacy outbox differs from its transaction"
                }
              }
            }
      } else emptyList()
  outbox.forEach {
    insert(
        target,
        "notification_outbox",
        listOf(
            "id",
            "transaction_id",
            "target_uuid",
            "notification_type",
            "delta",
            "balance_after",
            "created_at",
            "delivered_at",
            "currency",
        ),
        it + currency,
    )
  }
  metadata.forEach { putMeta(target, "legacy.$currency.${it[0]}", it[1] as String) }
  metadata.forEach { row ->
    check(
        queryRows(target, "SELECT value FROM schema_meta WHERE key=?", "legacy.$currency.${row[0]}")
            .single()
            .single() == row[1]
    ) {
      "Imported metadata verification failed"
    }
  }
  metadata
      .firstOrNull { token && it[0] == "tokenmanager_data_yml_imported_at" }
      ?.let { putMeta(target, it[0] as String, it[1] as String) }

  val copied =
      queryRows(
          target,
          "SELECT currency,uuid,name,name_lower,balance,created_at,updated_at FROM accounts WHERE currency=? ORDER BY uuid",
          currency,
      )
  val expectedAccounts =
      if (token) normalizedAccounts
      else {
        val names =
            queryRows(source, "SELECT uuid,name_lower FROM accounts").associate { it[0] to it[1] }
        normalizedAccounts.map { it.toMutableList().apply { set(3, names[it[1]]) } }
      }
  check(canonical(copied) == canonical(expectedAccounts)) { "Imported account verification failed" }
  val copiedHistory =
      queryRows(
          target,
          "SELECT id,currency,created_at,uuid,delta,balance_after,reason,source,actor_uuid,transfer_id,note FROM transactions WHERE currency=? ORDER BY id",
          currency,
      )
  check(canonical(copiedHistory) == canonical(importedHistory)) {
    "Imported history verification failed"
  }
  if (token) {
    check(
        canonical(
            queryRows(
                target,
                "SELECT id,transaction_id,target_uuid,notification_type,delta,balance_after,created_at,delivered_at FROM notification_outbox WHERE currency='token' ORDER BY id",
            )
        ) == canonical(outbox)
    ) {
      "Imported outbox verification failed"
    }
  }
  val sum = balances.values.fold(BigInteger.ZERO, BigInteger::add)
  check(
      copied.fold(BigInteger.ZERO) { total, row -> total + BigInteger.valueOf(integer(row[4])) } ==
          sum
  ) {
    "Imported balance total verification failed"
  }
  return MigrationReport(
      currency,
      accounts.size,
      includedHistory.size,
      reconciliations,
      outbox.size,
      sum,
  )
}

private fun canonical(rows: List<List<Any?>>) =
    rows.map { row -> row.map { if (it is Number) it.toLong() else it } }

private fun integer(value: Any?): Long {
  require(value is Byte || value is Short || value is Int || value is Long) {
    "Legacy amount is not an integer"
  }
  return (value as Number).toLong()
}

private fun hasTable(connection: Connection, table: String) =
    queryRows(connection, "SELECT 1 FROM sqlite_master WHERE type='table' AND name=?", table)
        .isNotEmpty()

private fun lastId(connection: Connection) =
    integer(queryRows(connection, "SELECT last_insert_rowid()").single().single())

private fun putMeta(connection: Connection, key: String, value: String) =
    insert(connection, "schema_meta", listOf("key", "value"), listOf(key, value))

private fun insert(
    connection: Connection,
    table: String,
    columns: List<String>,
    values: List<Any?>,
) {
  connection
      .prepareStatement(
          "INSERT INTO $table (${columns.joinToString()}) VALUES (${columns.joinToString { "?" }})"
      )
      .use { statement ->
        values.forEachIndexed { index, value -> statement.setObject(index + 1, value) }
        check(statement.executeUpdate() == 1) { "Legacy row insert failed" }
      }
}

private fun queryRows(connection: Connection, sql: String, vararg values: Any?): List<List<Any?>> =
    connection.prepareStatement(sql).use { statement ->
      values.forEachIndexed { index, value -> statement.setObject(index + 1, value) }
      statement.executeQuery().use { result ->
        buildList {
          while (result.next()) add((1..result.metaData.columnCount).map(result::getObject))
        }
      }
    }

internal fun legacyDefaultPolicies() =
    listOf(
        CurrencyPolicy("yen", "円", "¥", "", 10240, 10000000000000, 1, 10000000000000, "eco"),
        CurrencyPolicy("token", "トークン", "", "トークン", 25, Long.MAX_VALUE, 1, Long.MAX_VALUE, "token"),
    )
