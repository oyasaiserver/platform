package icu.oyasai.games.slot

import java.nio.file.Path
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class SlotPaymentTest {
  @TempDir lateinit var directory: Path

  private fun file() = directory.resolve("payment.yml").toFile()

  @Test
  fun `charge refunds exactly once and permits a new completed play`() {
    val payment = SlotPayment(file())
    var withdrawals = 0
    var deposits = 0
    assertTrue(
        payment.charge(25.0) {
          withdrawals++
          true
        }
    )
    assertFailsWith<IllegalStateException> {
      payment.charge(25.0) {
        withdrawals++
        true
      }
    }
    assertTrue(
        payment.refund {
          deposits++
          true
        }
    )
    assertFalse(
        payment.refund {
          deposits++
          true
        }
    )
    assertEquals(1, withdrawals)
    assertEquals(1, deposits)
    assertFalse(SlotPayment(file()).blocked)
    assertTrue(payment.charge(25.0) { true })
    payment.delivering()
    payment.complete()
    assertFalse(
        payment.refund {
          deposits++
          true
        }
    )
    assertEquals(1, deposits)
  }

  @Test
  fun `declined charge and free spins never move money`() {
    val payment = SlotPayment(file())
    assertFalse(payment.charge(25.0) { false })
    assertFalse(payment.blocked)
    assertFalse(payment.refund { error("refund must not run") })
    assertTrue(payment.charge(0.0) { error("withdraw must not run") })
    assertTrue(payment.refund { error("deposit must not run") })
  }

  @Test
  fun `ambiguous withdraw deposit and reward phases survive restart and cannot repeat`() {
    val payment = SlotPayment(file())
    assertFailsWith<IllegalStateException> { payment.charge(25.0) { error("provider threw") } }
    val loaded = SlotPayment(file())
    assertEquals("CHARGING", loaded.phase)
    assertTrue(loaded.blocked)
    assertFalse(loaded.refund { error("unknown charge cannot auto refund") })
    assertFailsWith<IllegalStateException> { loaded.charge(25.0) { true } }
  }

  @Test
  fun `refund failure remains retryable but exception is ambiguous`() {
    val payment = SlotPayment(file())
    payment.charge(25.0) { true }
    assertFalse(payment.refund { false })
    assertEquals("REFUND_FAILED", SlotPayment(file()).phase)
    assertFailsWith<IllegalStateException> { payment.refund { error("provider threw") } }
    val loaded = SlotPayment(file())
    assertEquals("REFUNDING", loaded.phase)
    assertFalse(loaded.refund { error("must not repeat") })
  }

  @Test
  fun `paid and delivering phases survive restart and cannot charge again`() {
    val payment = SlotPayment(file())
    payment.charge(25.0) { true }
    assertEquals("PAID", SlotPayment(file()).phase)
    payment.delivering()
    val loaded = SlotPayment(file())
    assertEquals("DELIVERING", loaded.phase)
    assertTrue(loaded.blocked)
    assertFailsWith<IllegalStateException> { loaded.delivering() }
  }

  @Test
  fun `file failure happens before withdrawal`() {
    file().mkdirs()
    val paymentFile = directory.resolve("blocked/record.yml").toFile()
    paymentFile.parentFile.writeText("not a directory")
    val payment = SlotPayment(paymentFile)
    assertFails { payment.charge(25.0) { error("withdraw must not run") } }
  }
}
