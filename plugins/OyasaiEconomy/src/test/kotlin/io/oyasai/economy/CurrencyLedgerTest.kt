package io.oyasai.economy

import java.nio.file.Files
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.ValueSource

internal fun testPolicies(): List<CurrencyPolicy> {
  val config = YamlConfiguration()
  CurrencyLedgerTest::class.java.getResourceAsStream("/config.yml")!!.reader().use {
    config.load(it)
  }
  config.createSection(
      "currencies.gem",
      config.getConfigurationSection("currencies.token")!!.getValues(true),
  )
  config.set("currencies.gem.root", "gem")
  config.set("currencies.gem.display-name", "宝石")
  config.set("currencies.gem.suffix", "個")
  return CurrencyPolicy.load(config)
}

class CurrencyLedgerTest {
  private val a = UUID(0, 1)
  private val b = UUID(0, 2)

  private fun database() =
      EconomyDatabase(Files.createTempFile("economy-test", ".db").toString(), testPolicies())

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun sameArithmeticAndReasons(currency: String) {
    val path = Files.createTempFile("economy-test", ".db").toString()
    EconomyDatabase(path, testPolicies()).use { db ->
      val ledger = db.ledgers.getValue(currency)
      assertTrue(ledger.join(a, "Alice"))
      assertTrue(ledger.join(b, "Bob"))
      assertEquals(ledger.policy.initial, ledger.balance(a))
      assertEquals(100, ledger.change(a, 100, "admin_set")?.newBalance)
      assertEquals(110, ledger.change(a, 10, "api_deposit")?.newBalance)
      assertEquals(100, ledger.change(a, 10, "api_withdraw")?.newBalance)
      assertNull(ledger.change(a, 101, "api_withdraw"))
      assertNull(ledger.change(a, -1, "admin_set"))
      assertEquals(90, ledger.transfer(a, b, 10, notifyReceive = true)?.debit?.newBalance)
      assertNull(ledger.transfer(a, a, 1))
      assertNull(ledger.transfer(a, UUID(9, 9), 1))
      assertTrue(db.drain())
      assertTrue(db.invariant())
      assertEquals(
          2,
          db.queryLong(
              "SELECT COUNT(*) FROM transactions WHERE currency='$currency' AND reason='transfer'"
          ),
      )
      assertEquals(
          1,
          db.queryLong(
              "SELECT COUNT(DISTINCT transfer_id) FROM transactions WHERE currency='$currency' AND reason='transfer'"
          ),
      )
      assertEquals(
          1,
          db.queryLong("SELECT COUNT(*) FROM notification_outbox WHERE currency='$currency'"),
      )
      assertEquals(
          0,
          db.queryLong(
              "SELECT COUNT(*) FROM transactions WHERE reason NOT IN ('initial','admin_set','api_deposit','api_withdraw','transfer')"
          ),
      )
    }
    EconomyDatabase(path, testPolicies()).use { db ->
      assertEquals(90, db.ledgers.getValue(currency).balance(a))
      assertTrue(db.invariant())
    }
  }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun zeroAndUnknownAccountsNeverWrite(currency: String) =
      database().use { db ->
        val ledger = db.ledgers.getValue(currency)
        assertNull(ledger.balance(a))
        assertNull(ledger.change(a, 0, "api_deposit"))
        ledger.join(a, "Alice")
        ledger.join(b, "Bob")
        db.drain()
        val count = db.queryLong("SELECT COUNT(*) FROM transactions")
        for (reason in listOf("api_deposit", "api_withdraw")) {
          val done = CompletableFuture<Boolean>()
          assertEquals(0, ledger.change(a, 0, reason, completion = done)?.delta)
          assertTrue(done.join())
        }
        assertNotNull(ledger.transfer(a, b, 0))
        db.drain()
        assertEquals(count, db.queryLong("SELECT COUNT(*) FROM transactions"))
        assertEquals(0, db.queryLong("SELECT COUNT(*) FROM notification_outbox"))
      }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun boundariesAndCancellationAreAtomic(currency: String) =
      database().use { db ->
        val ledger = db.ledgers.getValue(currency)
        ledger.join(a, "Alice")
        ledger.join(b, "Bob")
        assertEquals(
            ledger.policy.maximum,
            ledger.change(a, ledger.policy.maximum, "admin_set")?.newBalance,
        )
        assertNull(ledger.change(a, 1, "api_deposit"))
        assertNull(ledger.transfer(b, a, 1))
        val before = ledger.snapshot()
        val done = CompletableFuture<Boolean>()
        assertNull(ledger.transfer(a, b, 1, done) { false })
        assertFalse(done.join())
        assertEquals(before, ledger.snapshot())
        assertNull(ledger.change(a, 1, "admin_take", before = { false }))
        assertEquals(before, ledger.snapshot())
        ledger.policy = ledger.policy.copy(enabled = false)
        assertNull(ledger.change(a, 1, "admin_take"))
        assertNull(ledger.transfer(a, b, 1))
        assertTrue(db.drain())
        assertTrue(db.invariant())
      }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun namesAndRenamesUseTheSameRules(currency: String) =
      database().use { db ->
        val ledger = db.ledgers.getValue(currency)
        ledger.join(a, "Alice")
        assertEquals(a, ledger.resolve("aLiCe"))
        ledger.join(b, "ALICE")
        assertNull(ledger.nameOf(a))
        assertEquals(b, ledger.resolve("alice"))
        ledger.replaceAll(mapOf(a to BalanceRecord("Alice", 1), b to BalanceRecord("ALICE", 1)))
        assertFailsWith<IllegalArgumentException> { ledger.resolve("alice") }
        // Publish persisted values again before testing restart invariants.
        ledger.join(a, "Alice")
        assertEquals(a, ledger.resolve("alice"))
        db.drain()
        assertEquals(
            0,
            db.queryLong("SELECT COUNT(*) FROM transactions WHERE reason='name-update'"),
        )
      }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun queueFullRejectsWithoutMemoryChanges(currency: String) {
    val db =
        EconomyDatabase(
            Files.createTempFile("economy-queue", ".db").toString(),
            testPolicies(),
            queueSize = 1,
            startWorker = false,
        )
    try {
      val ledger = db.ledgers.getValue(currency)
      assertTrue(ledger.join(a, "Alice"))
      val before = ledger.snapshot()
      val done = CompletableFuture<Boolean>()
      assertNull(ledger.change(a, 1, "api_deposit", completion = done))
      assertFalse(done.get(1, TimeUnit.SECONDS))
      assertFalse(ledger.join(b, "Bob"))
      assertEquals(before, ledger.snapshot())
      assertEquals(0, db.queryLong("SELECT COUNT(*) FROM accounts"))
      db.start()
    } finally {
      db.close()
    }
  }

  @ParameterizedTest
  @ValueSource(strings = ["yen", "token", "gem"])
  fun inputAndFormatting(currency: String) {
    val p = testPolicies().single { it.id == currency }
    assertEquals(1234, p.parse(p.format(1234)))
    for (input in
        listOf("1.5", "1e3", "1,23", "-1", "NaN", "9223372036854775808", "", "+1")) assertNull(
        p.parse(input),
        input,
    )
    assertEquals(1234, p.parse("1,234"))
    assertEquals(1, p.parse("1"))
    assertEquals(0, p.parse("0"))
  }

  @Test
  fun shutdownDrainsAndStartupRejectsTamperedHistory() {
    val path = Files.createTempFile("economy-drain", ".db").toString()
    val db = EconomyDatabase(path, testPolicies())
    val ledger = db.ledgers.values.first()
    ledger.join(a, "Alice")
    val done = CompletableFuture<Boolean>()
    ledger.change(a, 1, "api_deposit", completion = done)
    db.close()
    assertTrue(done.join())
    EconomyDatabase(path, testPolicies()).use { reopened ->
      assertTrue(reopened.invariant())
      reopened.connection.createStatement().use {
        it.execute("UPDATE transactions SET delta=delta+1 WHERE id=1")
      }
    }
    assertFailsWith<IllegalStateException> { EconomyDatabase(path, testPolicies()) }
  }

  @Test
  fun databaseConstraintsAreCurrencyIndependent() =
      database().use { db ->
        val account = "INSERT INTO accounts VALUES ('custom','$a','Alice','alice',%s,1,1)"
        for (invalid in listOf("-1", "1.5", "'invalid'")) assertFailsWith<java.sql.SQLException> {
          db.connection.createStatement().use { it.execute(account.format(invalid)) }
        }
      }
}
