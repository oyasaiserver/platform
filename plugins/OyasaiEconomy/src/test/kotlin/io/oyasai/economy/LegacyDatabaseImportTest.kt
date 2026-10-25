package io.oyasai.economy

import java.io.File
import java.math.BigInteger
import java.nio.file.Files
import java.security.MessageDigest
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.util.UUID
import java.util.concurrent.TimeUnit
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class LegacyDatabaseImportTest {
  private val alice = UUID.randomUUID().toString()
  private val bob = UUID.randomUUID().toString()

  @Test
  fun absentSourcesLeaveDestinationEmpty() = fixture { folder, target ->
    assertTrue(importLegacyDatabases(target.connection, folder).isEmpty())
    assertEquals(0, scalar(target.connection, "SELECT count(*) FROM schema_meta"))
  }

  @Test
  fun tokenOnlyPreservesWalOutboxIdsNamesAndMetadata() = fixture { folder, target ->
    tokenSource(folder).use { source ->
      execute(source, "PRAGMA journal_mode=WAL")
      execute(source, "PRAGMA wal_autocheckpoint=0")
      seedToken(source)
      val files =
          listOf("tokens.db", "tokens.db-wal", "tokens.db-shm").map {
            File(folder, "OyasaiToken/$it")
          }
      assertTrue(files[1].length() > 0)
      val before = files.map(::hash)
      val report = importLegacyDatabases(target.connection, folder).single()
      assertEquals(MigrationReport("token", 1, 2, 1, 1, BigInteger.valueOf(30)), report)
      assertEquals(before, files.map(::hash))
      assertEquals(
          30,
          scalar(target.connection, "SELECT balance FROM accounts WHERE currency='token'"),
      )
      assertEquals("Alice", text(target.connection, "SELECT name FROM accounts"))
      assertEquals(71, scalar(target.connection, "SELECT id FROM notification_outbox"))
      assertEquals(
          3,
          scalar(target.connection, "SELECT transaction_id FROM notification_outbox"),
      )
      assertEquals(
          2,
          scalar(
              target.connection,
              "SELECT count(*) FROM transactions WHERE reason IN ('default','add')",
          ),
      )
      assertEquals(
          "600",
          text(
              target.connection,
              "SELECT value FROM schema_meta WHERE key='tokenmanager_data_yml_imported_at'",
          ),
      )
      assertEquals(
          "99",
          text(
              target.connection,
              "SELECT value FROM schema_meta WHERE key='legacy.token.last_applied_tx_id'",
          ),
      )
      assertEquals(
          0,
          scalar(
              target.connection,
              "SELECT count(*) FROM sqlite_master WHERE name='token_legacy_ids'",
          ),
      )
      assertEquals("token", text(target.connection, "SELECT currency FROM notification_outbox"))
      assertTrue(target.invariant())
      assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
    }
  }

  @Test
  fun negativeAccountsReportCountAndUuidAndRollback() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    yenSource(folder).use { source -> seedYen(source, -40) }
    val failure =
        assertFailsWith<IllegalArgumentException> {
          importLegacyDatabases(target.connection, folder)
        }
    assertTrue(failure.message!!.contains("1 件"))
    assertTrue(failure.message!!.contains(alice))
    assertEquals(0, scalar(target.connection, "SELECT COUNT(*) FROM accounts"))
  }

  @Test
  fun bothCurrenciesKeepSameUuidSeparateAndVerifyCountsAndTotals() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    yenSource(folder).use { seedYen(it, 123) }
    val reports = importLegacyDatabases(target.connection, folder)
    assertEquals(listOf("token", "yen"), reports.map { it.currency })
    assertEquals(
        listOf(BigInteger.valueOf(30), BigInteger.valueOf(123)),
        reports.map { it.balanceTotal },
    )
    assertEquals(2, scalar(target.connection, "SELECT count(*) FROM accounts WHERE uuid='$alice'"))
    assertEquals(5, scalar(target.connection, "SELECT count(*) FROM transactions"))
    assertTrue(target.invariant())
  }

  @Test
  fun essentialsExportAndTokenFallbackImportTogetherOnlyOnFirstStartup() =
      startupFixture { folder, destination ->
        val yenIds = essentialsExport(folder)
        tokenSource(folder, "TokenManager/tokens.db").use(::seedToken)
        val marker =
            EconomyDatabase(
                    destination.path,
                    legacyDefaultPolicies(),
                    legacyPlugins = folder,
                    startWorker = false,
                )
                .use { target ->
                  assertEquals(listOf("token", "yen"), target.migrationReports.map { it.currency })
                  val yen = target.migrationReports.single { it.currency == "yen" }
                  assertEquals(5, yen.accounts)
                  assertEquals(5, yen.transactions)
                  assertEquals(0, yen.reconciliationTransactions)
                  val expected = listOf(1000L, 124L, 10240L, 2L, 0L)
                  for ((id, balance) in yenIds.zip(expected)) {
                    assertEquals(
                        balance,
                        scalar(
                            target.connection,
                            "SELECT balance FROM accounts WHERE currency='yen' AND uuid='$id'",
                        ),
                    )
                    assertEquals(
                        1,
                        scalar(
                            target.connection,
                            "SELECT count(*) FROM transactions WHERE currency='yen' AND uuid='$id' AND delta=$balance AND balance_after=$balance AND reason='migrate'",
                        ),
                    )
                  }
                  assertEquals(10, scalar(target.connection, "SELECT count(*) FROM accounts"))
                  assertEquals(12, scalar(target.connection, "SELECT count(*) FROM transactions"))
                  assertEquals(
                      "(missing: 10240)",
                      text(
                          target.connection,
                          "SELECT note FROM transactions WHERE currency='yen' AND uuid='${yenIds[2]}'",
                      ),
                  )
                  assertEquals(
                      1,
                      scalar(
                          target.connection,
                          "SELECT count(*) FROM schema_meta WHERE key='$LEGACY_DATABASE_IMPORT_KEY'",
                      ),
                  )
                  assertTrue(target.invariant())
                  requireNotNull(target.meta(LEGACY_DATABASE_IMPORT_KEY))
                }
        // If the second startup read the legacy source again, this corruption would fail import.
        DriverManager.getConnection("jdbc:sqlite:${File(folder, "Vault/economy.db").path}").use {
          execute(it, "UPDATE accounts SET balance=balance+1")
        }
        EconomyDatabase(
                destination.path,
                legacyDefaultPolicies(),
                legacyPlugins = folder,
                startWorker = false,
            )
            .use {
              assertTrue(it.migrationReports.isEmpty())
              assertEquals(marker, it.meta(LEGACY_DATABASE_IMPORT_KEY))
              assertEquals(10, scalar(it.connection, "SELECT count(*) FROM accounts"))
              assertEquals(12, scalar(it.connection, "SELECT count(*) FROM transactions"))
              assertEquals(
                  1,
                  scalar(
                      it.connection,
                      "SELECT count(*) FROM schema_meta WHERE key='$LEGACY_DATABASE_IMPORT_KEY'",
                  ),
              )
              assertTrue(it.invariant())
            }
      }

  @Test
  fun essentialsExportMissingColumnRollsBackTokenAndYenOnStartup() =
      startupFixture { folder, destination ->
        essentialsExport(folder)
        tokenSource(folder, "TokenManager/tokens.db").use(::seedToken)
        DriverManager.getConnection("jdbc:sqlite:${File(folder, "Vault/economy.db").path}").use {
          execute(it, "ALTER TABLE transactions RENAME COLUMN note TO missing_note")
        }
        assertFailsWith<SQLException> {
          EconomyDatabase(
              destination.path,
              legacyDefaultPolicies(),
              legacyPlugins = folder,
              startWorker = false,
          )
        }
        assertEmptyStartupDestination(destination)
      }

  @Test
  fun essentialsExportHistoryMismatchRollsBackTokenAndYenOnStartup() =
      startupFixture { folder, destination ->
        essentialsExport(folder)
        tokenSource(folder, "TokenManager/tokens.db").use(::seedToken)
        DriverManager.getConnection("jdbc:sqlite:${File(folder, "Vault/economy.db").path}").use {
          execute(it, "UPDATE transactions SET balance_after=balance_after+1")
        }
        assertFailsWith<IllegalArgumentException> {
          EconomyDatabase(
              destination.path,
              legacyDefaultPolicies(),
              legacyPlugins = folder,
              startWorker = false,
          )
        }
        assertEmptyStartupDestination(destination)
      }

  @Test
  fun invalidSecondLedgerRollsBackBothCurrenciesAndMarker() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    yenSource(folder).use {
      seedYen(it, 123)
      execute(it, "UPDATE accounts SET balance=124")
    }
    assertFailsWith<IllegalArgumentException> { importLegacyDatabases(target.connection, folder) }
    for (table in
        listOf(
            "accounts",
            "transactions",
            "notification_outbox",
            "schema_meta",
        )) {
      assertEquals(0, scalar(target.connection, "SELECT count(*) FROM $table"))
    }
    assertTrue(target.connection.autoCommit)
  }

  @Test
  fun destinationTriggerCorruptionIsVerifiedAndRolledBack() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    execute(
        target.connection,
        "CREATE TRIGGER corrupt_import AFTER INSERT ON accounts BEGIN UPDATE accounts SET balance=balance+1 WHERE currency=NEW.currency AND uuid=NEW.uuid; END",
    )
    assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
    assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
    assertEquals(0, scalar(target.connection, "SELECT count(*) FROM schema_meta"))
  }

  @Test
  fun markerAndExistingRowsRefuseReimport() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    execute(target.connection, "INSERT INTO schema_meta VALUES ('$LEGACY_DATABASE_IMPORT_KEY','1')")
    assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
    assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
    execute(target.connection, "DELETE FROM schema_meta")
    execute(target.connection, "INSERT INTO accounts VALUES ('token','$bob','Bob','bob',0,1,1)")
    assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
    assertEquals(1, scalar(target.connection, "SELECT count(*) FROM accounts"))
  }

  @Test
  fun knownDataYmlSnapshotsPreserveRowsAndReconcileEachReset() = fixture { folder, target ->
    tokenSource(folder).use { source ->
      seedToken(source)
      execute(
          source,
          "INSERT INTO token_transactions VALUES (110,'$alice',0,500,'migration:data.yml',NULL,700)",
      )
      execute(
          source,
          "INSERT INTO token_transactions VALUES (111,'$alice',-10,490,'remove',NULL,701)",
      )
      execute(source, "UPDATE token_balances SET balance=490,updated_at=701")
    }
    val report = importLegacyDatabases(target.connection, folder).single()
    assertEquals(4, report.transactions)
    assertEquals(2, report.reconciliationTransactions)
    assertEquals(BigInteger.valueOf(490), report.balanceTotal)
    assertEquals(
        0,
        scalar(
            target.connection,
            "SELECT delta FROM transactions WHERE reason='migration:data.yml'",
        ),
    )
    assertTrue(target.invariant())
  }

  @Test
  fun mariadbExporterWithoutHistoryAndOverflowingAggregateIsSupported() =
      fixture { folder, target ->
        tokenSource(folder).use { source ->
          execute(source, "INSERT INTO token_balances VALUES ('$alice',NULL,${Long.MAX_VALUE},1,1)")
          execute(source, "INSERT INTO token_balances VALUES ('$bob',NULL,${Long.MAX_VALUE},1,1)")
          execute(
              source,
              "INSERT INTO schema_meta VALUES ('migration_source','mariadb:token.tokenmanager')",
          )
        }
        val report = importLegacyDatabases(target.connection, folder).single()
        assertEquals(0, report.transactions)
        assertEquals(2, report.reconciliationTransactions)
        assertEquals(BigInteger.valueOf(Long.MAX_VALUE) * BigInteger.TWO, report.balanceTotal)
        assertTrue(target.invariant())
      }

  @Test
  fun unknownMissingHistoryOrBadOutboxOrHistoryIsRejected() {
    val alterations =
        listOf(
            "DELETE FROM token_transactions",
            "UPDATE token_transactions SET balance_after=31 WHERE id=99",
            "UPDATE token_notification_outbox SET transaction_id=12345",
            "UPDATE token_notification_outbox SET delta=6",
            "UPDATE token_balances SET balance=-1",
        )
    for (alteration in alterations) fixture { folder, target ->
      tokenSource(folder).use { source ->
        seedToken(source)
        execute(source, alteration)
      }
      assertFailsWith<IllegalArgumentException> { importLegacyDatabases(target.connection, folder) }
      assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
    }
  }

  @Test
  fun configuredNestedPathAndTokenManagerFallbackAreSupported() {
    fixture { folder, target ->
      tokenSource(folder, "OyasaiToken/database/old.db").use(::seedToken)
      File(folder, "OyasaiToken/config.yml").writeText("database:\n  file: database/old.db\n")
      assertEquals(1, importLegacyDatabases(target.connection, folder).size)
    }
    fixture { folder, target ->
      tokenSource(folder, "TokenManager/tokens.db").use(::seedToken)
      assertEquals(1, importLegacyDatabases(target.connection, folder).size)
    }
  }

  @Test
  fun missingConfiguredDatabaseMustNotSilentlyIgnoreExistingDefaultDatabase() =
      fixture { folder, target ->
        tokenSource(folder).use(::seedToken)
        tokenSource(folder, "TokenManager/tokens.db").use(::seedToken)
        File(folder, "OyasaiToken/config.yml").writeText("database:\n  file: database/missing.db\n")
        assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
        assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
      }

  @Test
  fun legacyMetadataAloneCountsAsPopulatedDestination() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    execute(target.connection, "INSERT INTO schema_meta VALUES ('migration_source','unknown')")
    assertFailsWith<IllegalStateException> { importLegacyDatabases(target.connection, folder) }
    assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
  }

  @Test
  fun malformedSecondSourceRollsBackFirstImportAndLeavesSourcesUnchanged() =
      fixture { folder, target ->
        tokenSource(folder).use(::seedToken)
        val yen =
            File(folder, "Vault/economy.db").apply {
              parentFile.mkdirs()
              writeText("not a sqlite database")
            }
        val token = File(folder, "OyasaiToken/tokens.db")
        val before = listOf(hash(token), hash(yen))
        assertFailsWith<java.sql.SQLException> { importLegacyDatabases(target.connection, folder) }
        assertEquals(before, listOf(hash(token), hash(yen)))
        assertEquals(0, scalar(target.connection, "SELECT count(*) FROM accounts"))
        assertEquals(0, scalar(target.connection, "SELECT count(*) FROM transactions"))
        assertEquals(0, scalar(target.connection, "SELECT count(*) FROM schema_meta"))
      }

  @Test
  fun missingInitialTokenBalancePreservesOriginalAddAndFinalBalance() = fixture { folder, target ->
    openingAddSource(folder, 25)
    val report = importLegacyDatabases(target.connection, folder).single()
    assertEquals(1, report.transactions)
    assertEquals(1, report.reconciliationTransactions)
    assertEquals(BigInteger.valueOf(27), report.balanceTotal)
    assertEquals(2, scalar(target.connection, "SELECT delta FROM transactions WHERE reason='add'"))
    assertEquals(
        27,
        scalar(target.connection, "SELECT balance_after FROM transactions WHERE reason='add'"),
    )
    assertEquals(
        25,
        scalar(
            target.connection,
            "SELECT balance_after FROM transactions WHERE reason='legacy_opening_reconciliation'",
        ),
    )
    assertEquals(
        "旧履歴に初期残高が無かったため補正（元の行 id: 1）",
        text(
            target.connection,
            "SELECT note FROM transactions WHERE reason='legacy_opening_reconciliation'",
        ),
    )
    assertTrue(target.invariant())
  }

  @Test
  fun initialDifference26RollsBackEverything() = fixture { folder, target ->
    openingAddSource(folder, 26)
    assertImportRollback(folder, target)
  }

  @Test
  fun secondDifference25RollsBackEverything() = fixture { folder, target ->
    openingAddSource(folder, 25, secondDifference = 25)
    assertImportRollback(folder, target)
  }

  @Test
  fun initialTokenRuleDoesNotApplyToYen() = fixture { folder, target ->
    yenSource(folder).use { source ->
      seedYen(source, 123)
      execute(source, "UPDATE transactions SET delta=10215 WHERE id=1")
    }
    assertImportRollback(folder, target)
  }

  @Test
  fun exclusionsFilterAccountsHistoryOutboxAndExpectedTotals() = fixture { folder, target ->
    tokenSource(folder).use { source ->
      seedToken(source)
      execute(source, "INSERT INTO token_balances VALUES ('$bob','Bob',7,1,1)")
      execute(source, "INSERT INTO token_transactions VALUES (120,'$bob',7,7,'add',NULL,1)")
    }
    var excludedCount = -1
    var excludedTotal = BigInteger.ZERO
    val options = policy(folder, "{\"exclude\":[{\"name\":\"Alice\"}]}")
    val report =
        importLegacyDatabases(target.connection, folder, options) { count, total ->
              excludedCount = count
              excludedTotal = total
            }
            .single()
    assertEquals(1, excludedCount)
    assertEquals(BigInteger.valueOf(30), excludedTotal)
    assertEquals(MigrationReport("token", 1, 1, 0, 0, BigInteger.valueOf(7)), report)
    assertEquals(bob, text(target.connection, "SELECT uuid FROM accounts WHERE currency='token'"))
    assertTrue(target.invariant())
  }

  @Test
  fun ambiguousExcludedNameRollsBack() = fixture { folder, target ->
    tokenSource(folder).use { source ->
      seedToken(source)
      execute(source, "INSERT INTO token_balances VALUES ('$bob','Alice',0,1,1)")
    }
    assertImportRollback(folder, target, policy(folder, "{\"exclude\":[{\"name\":\"Alice\"}]}"))
  }

  @Test
  fun absentOrWrongCaseExcludedNameRollsBack() {
    for (name in listOf("Missing", "alice")) fixture { folder, target ->
      tokenSource(folder).use(::seedToken)
      assertImportRollback(folder, target, policy(folder, "{\"exclude\":[{\"name\":\"$name\"}]}"))
    }
  }

  @Test
  fun explicitCorrectionPreservesOriginalAndRecordsReason() = fixture { folder, target ->
    openingAddSource(folder, 5)
    val options = correctionPolicy(folder, 5)
    val report = importLegacyDatabases(target.connection, folder, options).single()
    assertEquals(1, report.reconciliationTransactions)
    assertEquals(BigInteger.valueOf(7), report.balanceTotal)
    assertEquals(
        "Approved synthetic discrepancy",
        text(
            target.connection,
            "SELECT note FROM transactions WHERE reason='legacy_opening_reconciliation'",
        ),
    )
    assertEquals(
        1,
        scalar(target.connection, "SELECT count(*) FROM transactions WHERE reason='add'"),
    )
    assertTrue(target.invariant())
  }

  @Test
  fun explicitCorrectionMismatchRollsBack() = fixture { folder, target ->
    openingAddSource(folder, 5)
    assertImportRollback(folder, target, correctionPolicy(folder, 6))
  }

  @Test
  fun unspecifiedUnknownDifferenceRollsBack() = fixture { folder, target ->
    openingAddSource(folder, 5)
    assertImportRollback(folder, target)
  }

  @Test
  fun unusedOrRepeatedExplicitCorrectionRollsBack() {
    fixture { folder, target ->
      openingAddSource(folder, 0)
      assertImportRollback(folder, target, correctionPolicy(folder, 5))
    }
    fixture { folder, target ->
      openingAddSource(folder, 5, secondDifference = 5)
      assertImportRollback(folder, target, correctionPolicy(folder, 5))
    }
  }

  @Test
  fun policyFilesRejectDuplicateEntriesAndInvalidAmounts() = fixture { folder, _ ->
    assertFailsWith<IllegalArgumentException> {
      policy(folder, "{\"exclude\":[{\"name\":\"Alice\"},{\"name\":\"Alice\"}]}")
    }
    for (amount in listOf("true", "5.5", "0", "9223372036854775808")) {
      val file = File(folder, "corrections.json")
      file.writeText(
          "{\"corrections\":[{\"uuid\":\"$alice\",\"amount\":$amount,\"reason\":\"Synthetic\"}]}"
      )
      assertFailsWith<IllegalArgumentException> {
        LegacyImportOptions.fromFiles(corrections = file)
      }
    }
  }

  @Test
  fun startupAcceptsPolicyFilePaths() {
    val folder = Files.createTempDirectory("economy-startup-test").toFile()
    try {
      openingAddSource(folder, 5)
      EconomyDatabase(
              File(folder, "new.db").path,
              legacyDefaultPolicies(),
              legacyPlugins = folder,
              startWorker = false,
              legacyImportOptions = correctionPolicy(folder, 5),
          )
          .use {
            assertEquals(1, it.migrationReports.single().accounts)
            assertTrue(it.invariant())
          }
    } finally {
      folder.deleteRecursively()
    }
  }

  @Test
  fun missingCurrencyAccountsGetInitialHistory() = fixture { folder, target ->
    tokenSource(folder).use(::seedToken)
    importLegacyDatabases(target.connection, folder)
    assertEquals(2, scalar(target.connection, "SELECT COUNT(*) FROM accounts WHERE uuid='$alice'"))
    assertEquals(
        10240,
        scalar(
            target.connection,
            "SELECT balance FROM accounts WHERE currency='yen' AND uuid='$alice'",
        ),
    )
    assertEquals(
        1,
        scalar(
            target.connection,
            "SELECT COUNT(*) FROM transactions WHERE currency='yen' AND reason='initial'",
        ),
    )
    assertTrue(target.invariant())
  }

  private fun policy(folder: File, json: String): LegacyImportOptions {
    val file = File(folder, "exclude.json").apply { writeText(json) }
    return LegacyImportOptions.fromFiles(exclusions = file)
  }

  private fun correctionPolicy(folder: File, amount: Int): LegacyImportOptions {
    val file =
        File(folder, "corrections.json").apply {
          writeText(
              "{\"corrections\":[{\"uuid\":\"$alice\",\"amount\":$amount,\"reason\":\"Approved synthetic discrepancy\"}]}"
          )
        }
    return LegacyImportOptions.fromFiles(corrections = file)
  }

  private fun openingAddSource(folder: File, difference: Int, secondDifference: Int? = null) {
    tokenSource(folder).use { source ->
      val firstAfter = 2 + difference
      val finalAfter =
          if (secondDifference == null) firstAfter else firstAfter + 1 + secondDifference
      execute(source, "INSERT INTO token_balances VALUES ('$alice','Alice',$finalAfter,1,2)")
      execute(
          source,
          "INSERT INTO token_transactions VALUES (1,'$alice',2,$firstAfter,'add',NULL,1)",
      )
      if (secondDifference != null)
          execute(
              source,
              "INSERT INTO token_transactions VALUES (2,'$alice',1,$finalAfter,'add',NULL,2)",
          )
    }
  }

  private fun assertImportRollback(
      folder: File,
      target: EconomyDatabase,
      options: LegacyImportOptions = LegacyImportOptions(),
  ) {
    assertFailsWith<IllegalArgumentException> {
      importLegacyDatabases(target.connection, folder, options)
    }
    for (table in listOf("accounts", "transactions", "notification_outbox", "schema_meta")) {
      assertEquals(0, scalar(target.connection, "SELECT count(*) FROM $table"))
    }
    assertTrue(target.connection.autoCommit)
  }

  private fun fixture(block: (File, EconomyDatabase) -> Unit) {
    val folder = Files.createTempDirectory("economy-migration-test").toFile()
    try {
      EconomyDatabase(File(folder, "new-economy.db").path, legacyDefaultPolicies()).use {
        block(folder, it)
      }
    } finally {
      folder.deleteRecursively()
    }
  }

  private fun startupFixture(block: (File, File) -> Unit) {
    val folder = Files.createTempDirectory("economy-essentials-startup-test").toFile()
    try {
      block(folder, File(folder, "new-economy.db"))
    } finally {
      assertTrue(folder.deleteRecursively())
    }
  }

  private fun essentialsExport(folder: File): List<String> {
    val userdata = File(folder, "userdata").apply { mkdirs() }
    val money = listOf("1E+3", "123.5", null, "1.5", "0")
    val ids = money.indices.map { if (it == 0) alice else UUID.randomUUID().toString() }
    ids.zip(money).forEachIndexed { index, (id, value) ->
      File(userdata, "$id.yml")
          .writeText("last-account-name: Fixture$index\n" + (value?.let { "money: '$it'\n" } ?: ""))
    }
    val output = File(folder, "Vault/economy.db").apply { parentFile.mkdirs() }
    val log = File(folder, "export.log")
    val process =
        ProcessBuilder(
                "python3",
                File("tools/migrate_essentials_to_sqlite.py").absolutePath,
                "--input",
                userdata.path,
                "--output",
                output.path,
                "--format",
                "legacy-vault",
            )
            .redirectErrorStream(true)
            .redirectOutput(log)
            .start()
    if (!process.waitFor(30, TimeUnit.SECONDS)) {
      process.destroyForcibly().waitFor()
      error("Synthetic Essentials export timed out")
    }
    assertEquals(0, process.exitValue(), log.readText())
    assertTrue(output.isFile)
    return ids
  }

  private fun assertEmptyStartupDestination(destination: File) {
    DriverManager.getConnection("jdbc:sqlite:${destination.path}").use { connection ->
      for (table in listOf("accounts", "transactions", "notification_outbox", "schema_meta")) {
        assertEquals(0, scalar(connection, "SELECT count(*) FROM $table"))
      }
    }
  }

  private fun tokenSource(folder: File, path: String = "OyasaiToken/tokens.db"): Connection {
    val file = File(folder, path).apply { parentFile.mkdirs() }
    return DriverManager.getConnection("jdbc:sqlite:${file.path}").apply {
      execute(
          this,
          "CREATE TABLE token_balances(uuid TEXT PRIMARY KEY,name TEXT,balance INTEGER,created_at INTEGER,updated_at INTEGER)",
      )
      execute(
          this,
          "CREATE TABLE token_transactions(id INTEGER PRIMARY KEY,uuid TEXT,delta INTEGER,balance_after INTEGER,reason TEXT,actor_uuid TEXT,created_at INTEGER)",
      )
      execute(
          this,
          "CREATE TABLE token_notification_outbox(id INTEGER PRIMARY KEY,transaction_id INTEGER,target_uuid TEXT,notification_type TEXT,delta INTEGER,balance_after INTEGER,created_at INTEGER,delivered_at INTEGER)",
      )
      execute(
          this,
          "CREATE TABLE token_legacy_ids(source TEXT,identifier_type TEXT,identifier TEXT,uuid TEXT,migrated_at INTEGER)",
      )
      execute(this, "CREATE TABLE schema_meta(key TEXT PRIMARY KEY,value TEXT)")
    }
  }

  private fun seedToken(source: Connection) {
    execute(source, "INSERT INTO token_balances VALUES ('$alice','Alice',30,100,200)")
    execute(source, "INSERT INTO token_transactions VALUES (98,'$alice',0,25,'default',NULL,100)")
    execute(source, "INSERT INTO token_transactions VALUES (99,'$alice',5,30,'add',NULL,200)")
    execute(
        source,
        "INSERT INTO token_notification_outbox VALUES (71,99,'$alice','ADD',5,30,200,NULL)",
    )
    execute(source, "INSERT INTO token_legacy_ids VALUES ('data.yml','name','Alice','$alice',500)")
    execute(source, "INSERT INTO schema_meta VALUES ('last_applied_tx_id','99')")
    execute(source, "INSERT INTO schema_meta VALUES ('tokenmanager_data_yml_imported_at','600')")
  }

  private fun yenSource(folder: File): Connection {
    val file = File(folder, "Vault/economy.db").apply { parentFile.mkdirs() }
    return DriverManager.getConnection("jdbc:sqlite:${file.path}").apply {
      execute(
          this,
          "CREATE TABLE accounts(uuid TEXT PRIMARY KEY,name TEXT,name_lower TEXT,balance INTEGER,created_at INTEGER,updated_at INTEGER)",
      )
      execute(
          this,
          "CREATE TABLE transactions(id INTEGER PRIMARY KEY,created_at INTEGER,uuid TEXT,delta INTEGER,balance_after INTEGER,reason TEXT,source TEXT,actor_uuid TEXT,transfer_id INTEGER,note TEXT)",
      )
      execute(this, "CREATE TABLE schema_meta(key TEXT PRIMARY KEY,value TEXT)")
    }
  }

  private fun seedYen(source: Connection, balance: Long) {
    execute(source, "INSERT INTO accounts VALUES ('$alice','Alice','alice',$balance,100,200)")
    execute(
        source,
        "INSERT INTO transactions VALUES (1,100,'$alice',10240,10240,'initial',NULL,NULL,NULL,NULL)",
    )
    execute(
        source,
        "INSERT INTO transactions VALUES (2,200,'$alice',${balance - 10240},$balance,'withdraw','vault_command','$bob',55,'LOAN')",
    )
  }

  private fun execute(connection: Connection, sql: String) =
      connection.createStatement().use { it.execute(sql) }

  private fun scalar(connection: Connection, sql: String): Long =
      connection.createStatement().use { statement ->
        statement.executeQuery(sql).use {
          assertTrue(it.next())
          it.getLong(1)
        }
      }

  private fun text(connection: Connection, sql: String): String =
      connection.createStatement().use { statement ->
        statement.executeQuery(sql).use {
          assertTrue(it.next())
          it.getString(1)
        }
      }

  private fun hash(file: File): List<Byte>? =
      if (file.isFile) MessageDigest.getInstance("SHA-256").digest(file.readBytes()).toList()
      else null
}
