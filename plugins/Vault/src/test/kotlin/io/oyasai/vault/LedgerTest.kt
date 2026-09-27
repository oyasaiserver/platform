package io.oyasai.vault

import java.nio.file.Files
import java.sql.DriverManager
import java.util.UUID
import java.util.concurrent.CountDownLatch
import kotlin.concurrent.thread
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class LedgerTest {
  @Test
  fun moneyRules() {
    assertEquals(0, Money.round(0.0))
    assertNull(Money.round(0.4))
    assertEquals(1, Money.round(0.5))
    assertNull(Money.round(-1.0))
    assertNull(Money.round(Double.NaN))
    assertNull(Money.round(Double.POSITIVE_INFINITY))
  }

  @Test
  fun balancesTransfersAndInvariant() {
    val file = Files.createTempFile("vault-ledger", ".db")
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    Ledger(file.toString()).use { ledger ->
      assertNull(ledger.change(a, 1, "deposit"))
      assertTrue(ledger.join(a, "Alice"))
      assertTrue(ledger.join(b, "Bob"))
      assertEquals(10_240, ledger.balance(a))
      assertTrue(ledger.has(a, 10_240))
      assertFalse(ledger.has(a, 10_241))
      assertNull(ledger.change(a, 10_241, "withdraw"))
      assertEquals(0, ledger.change(a, 10_240, "withdraw"))
      assertNull(ledger.change(a, 1, "withdraw"))
      assertEquals(Money.MAX, ledger.change(a, Money.MAX, "eco_set"))
      assertNull(ledger.change(a, 1, "deposit"))
      assertEquals(10_240, ledger.change(a, 10_240, "eco_set"))
      assertEquals(-100, ledger.change(a, 10_340, "eco_take", loan = true))
      assertFalse(ledger.has(a, 0))
      assertEquals(-99, ledger.change(a, 1, "deposit"))
      assertEquals(Money.MIN, ledger.change(a, Money.MIN, "eco_set"))
      assertNull(ledger.change(a, 1, "withdraw", loan = true))
      assertNull(ledger.change(a, Money.MAX, "eco_take", loan = true))
      assertEquals(10_240, ledger.change(a, 10_240, "eco_set"))
      assertFalse(ledger.pay(a, a, 1, false, a))
      assertFalse(ledger.pay(a, b, 0, false, a))
      assertTrue(ledger.pay(a, b, 1_000, false, a))
      assertEquals(9_240, ledger.balance(a))
      assertEquals(11_240, ledger.balance(b))
      assertTrue(ledger.invariant())
      assertEquals(b, ledger.resolve("bOb"))
      assertTrue(ledger.join(b, "Alice"))
      assertNull(ledger.resolve("Bob"))
      assertEquals(b, ledger.resolve("alice"))
    }
    DriverManager.getConnection("jdbc:sqlite:$file").use { db ->
      db.createStatement().use { s ->
        s.executeQuery(
                "SELECT delta FROM transactions WHERE uuid='$a' AND reason='eco_set' ORDER BY id DESC LIMIT 1"
            )
            .use {
              assertTrue(it.next())
              assertEquals(Money.START - Money.MIN, it.getLong(1))
            }
        s.executeQuery(
                "SELECT COUNT(DISTINCT transfer_id), COUNT(*) FROM transactions WHERE reason='pay'"
            )
            .use {
              assertTrue(it.next())
              assertEquals(1, it.getInt(1))
              assertEquals(2, it.getInt(2))
            }
      }
    }
    Ledger(file.toString()).use { assertTrue(it.invariant()) }
  }

  @Test
  fun concurrentWithdrawalAndCorruption() {
    val file = Files.createTempFile("vault-concurrent", ".db")
    val a = UUID.randomUUID()
    Ledger(file.toString()).use { ledger ->
      ledger.join(a, "a")
      val start = CountDownLatch(1)
      val results = mutableListOf<Long?>()
      val workers =
          List(2) {
            thread {
              start.await()
              val result = ledger.change(a, 10_240, "withdraw")
              synchronized(results) { results.add(result) }
            }
          }
      start.countDown()
      workers.forEach { it.join() }
      assertEquals(listOf(null, 0L), results.sortedWith(nullsFirst()))
      assertTrue(ledger.invariant())
    }
    DriverManager.getConnection("jdbc:sqlite:$file").use { db ->
      db.createStatement().use { it.executeUpdate("UPDATE accounts SET balance=1 WHERE uuid='$a'") }
    }
    kotlin.test.assertFailsWith<IllegalStateException> { Ledger(file.toString()) }
  }

  @Test
  fun duplicateNameFails() {
    val file = Files.createTempFile("vault-duplicate", ".db")
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    Ledger(file.toString()).use { ledger ->
      ledger.join(a, "Alice")
      ledger.join(b, "Bob")
      DriverManager.getConnection("jdbc:sqlite:$file").use { db ->
        db.createStatement().use {
          it.executeUpdate("UPDATE accounts SET name='ALICE', name_lower='alice' WHERE uuid='$b'")
        }
      }
      kotlin.test.assertFailsWith<IllegalStateException> { ledger.resolve("alice") }
    }
  }
}
