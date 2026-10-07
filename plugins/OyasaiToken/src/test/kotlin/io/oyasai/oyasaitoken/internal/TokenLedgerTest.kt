package io.oyasai.oyasaitoken.internal

import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertSame
import kotlin.test.assertTrue

class TokenLedgerTest {
  private val source = UUID(0, 1)
  private val target = UUID(0, 2)
  private val actor = UUID(0, 3)

  private data class Job(
      val writes: List<BalanceWrite>,
      val completion: CompletableFuture<Boolean>?,
  )

  private class Fixture(defaultBalance: Long = 10) {
    var accepts = true
    val jobs = mutableListOf<Job>()
    val ledger =
        TokenLedger({ defaultBalance }) { writes, completion ->
          jobs += Job(writes.toList(), completion)
          accepts
        }

    fun balance(uuid: UUID): Long = ledger.balance(uuid, null, false)
  }

  @Test
  fun `set returns the old name while persisting the supplied name and mutation context`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("old", 10)))
    val context = MutationContext(actor, NotificationType.SET)

    assertEquals(
        BalanceChange(source, "old", 10, 25, 15, "set"),
        f.ledger.set(source, "new", 25, context),
    )
    assertEquals(
        listOf(BalanceWrite(source, "new", 25, 15, "set", actor, NotificationType.SET)),
        f.jobs.single().writes,
    )
    assertEquals(25, f.balance(source))
    assertEquals("new", f.ledger.nameOf(source))
    assertNull(f.jobs.single().completion)
  }

  @Test
  fun `add and remove preserve the existing name and persist their deltas`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("source", 10)))

    assertEquals(
        BalanceChange(source, "source", 10, 15, 5, "add"),
        f.ledger.add(source, null, 5, MutationContext(actor, NotificationType.ADD), null),
    )
    assertEquals(
        BalanceChange(source, "source", 15, 8, -7, "remove"),
        f.ledger.remove(source, null, 7, MutationContext(actor, NotificationType.REMOVE)),
    )
    assertEquals(
        listOf(
            listOf(BalanceWrite(source, "source", 15, 5, "add", actor, NotificationType.ADD)),
            listOf(BalanceWrite(source, "source", 8, -7, "remove", actor, NotificationType.REMOVE)),
        ),
        f.jobs.map { it.writes },
    )
    assertEquals(8, f.balance(source))
  }

  @Test
  fun `transfer persists both changes in one job before updating both balances`() {
    val f = Fixture()
    f.ledger.replaceAll(
        mapOf(source to BalanceRecord("source", 10), target to BalanceRecord("target", 20))
    )

    assertEquals(
        Transfer(
            BalanceChange(source, "source", 10, 6, -4, "remove"),
            BalanceChange(target, "target", 20, 24, 4, "add"),
        ),
        f.ledger.transfer(source, null, target, null, 4),
    )
    assertEquals(
        listOf(
            BalanceWrite(source, "source", 6, -4, "remove"),
            BalanceWrite(target, "target", 24, 4, "add"),
        ),
        f.jobs.single().writes,
    )
    assertEquals(6, f.balance(source))
    assertEquals(24, f.balance(target))
  }

  @Test
  fun `insufficient removal and transfers do not persist or complete the future`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("source", 10)))
    val removal = CompletableFuture<Boolean>()
    val transfer = CompletableFuture<Boolean>()
    val selfTransfer = CompletableFuture<Boolean>()

    assertNull(f.ledger.remove(source, null, 11, completion = removal))
    assertNull(f.ledger.transfer(source, null, target, null, 11, transfer))
    assertNull(f.ledger.transfer(source, null, source, null, 11, selfTransfer))
    assertEquals(10, f.balance(source))
    assertEquals(1, f.ledger.size())
    assertTrue(f.jobs.isEmpty())
    listOf(removal, transfer, selfTransfer).forEach { assertFalse(it.isDone) }
  }

  @Test
  fun `overflow rejects add and transfer without persisting or completing`() {
    val f = Fixture()
    f.ledger.replaceAll(
        mapOf(
            source to BalanceRecord("source", 10),
            target to BalanceRecord("target", Long.MAX_VALUE),
        )
    )
    val addition = CompletableFuture<Boolean>()
    val transfer = CompletableFuture<Boolean>()

    assertNull(f.ledger.addWithCommit(target, null, 1, addition))
    assertNull(f.ledger.transfer(source, null, target, null, 1, transfer))
    assertEquals(10, f.balance(source))
    assertEquals(Long.MAX_VALUE, f.balance(target))
    assertTrue(f.jobs.isEmpty())
    assertFalse(addition.isDone)
    assertFalse(transfer.isDone)
  }

  @Test
  fun `add accepts a balance exactly at the long limit`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("source", Long.MAX_VALUE - 1)))

    assertNotNull(f.ledger.add(source, null, 1, MutationContext.SILENT, null))
    assertEquals(Long.MAX_VALUE, f.balance(source))
    assertEquals(
        listOf(BalanceWrite(source, "source", Long.MAX_VALUE, 1, "add")),
        f.jobs.single().writes,
    )
  }

  @Test
  fun `self transfer records debit then credit and keeps the balance with the target name`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("old", 10)))
    val completion = CompletableFuture<Boolean>()

    assertEquals(
        Transfer(
            BalanceChange(source, "old", 10, 6, -4, "remove"),
            BalanceChange(source, "old", 6, 10, 4, "add"),
        ),
        f.ledger.transfer(source, "sender", source, "receiver", 4, completion),
    )
    assertEquals(
        listOf(
            BalanceWrite(source, "sender", 6, -4, "remove"),
            BalanceWrite(source, "receiver", 10, 4, "add"),
        ),
        f.jobs.single().writes,
    )
    assertEquals(10, f.balance(source))
    assertEquals("receiver", f.ledger.nameOf(source))
    assertSame(completion, f.jobs.single().completion)
    assertFalse(completion.isDone)
  }

  @Test
  fun `rejected persistence leaves all existing balances and names unchanged`() {
    val mutations: List<(TokenLedger, CompletableFuture<Boolean>) -> Any?> =
        listOf(
            { ledger, completion -> ledger.set(source, "new", 30, completion = completion) },
            { ledger, completion -> ledger.addWithCommit(source, "new", 5, completion) },
            { ledger, completion -> ledger.remove(source, "new", 5, completion = completion) },
            { ledger, completion ->
              ledger.transfer(source, "new", target, "new target", 5, completion)
            },
            { ledger, completion ->
              ledger.transfer(source, "new", source, "new target", 5, completion)
            },
        )
    mutations.forEach { mutate ->
      val f = Fixture()
      val initial =
          mapOf(source to BalanceRecord("source", 10), target to BalanceRecord("target", 20))
      f.ledger.replaceAll(initial)
      f.accepts = false
      val completion = CompletableFuture<Boolean>()

      assertNull(mutate(f.ledger, completion))
      assertEquals(initial.size, f.ledger.size())
      initial.forEach { (uuid, record) ->
        assertEquals(record.balance, f.balance(uuid))
        assertEquals(record.name, f.ledger.nameOf(uuid))
      }
      assertSame(completion, f.jobs.single().completion)
      assertFalse(completion.isDone)
    }
  }

  @Test
  fun `unknown reads return the default and only accepted initialization creates an account`() {
    val f = Fixture(17)

    assertEquals(17, f.ledger.balance(source, "source", false))
    assertEquals(0, f.ledger.size())
    assertTrue(f.jobs.isEmpty())
    f.accepts = false
    assertEquals(17, f.ledger.balance(source, "source", true))
    assertEquals(0, f.ledger.size())
    f.accepts = true
    assertEquals(17, f.ledger.balance(source, "source", true))
    assertEquals(1, f.ledger.size())
    assertEquals("source", f.ledger.nameOf(source))
    assertEquals(
        List(2) { Job(listOf(BalanceWrite(source, "source", 17, 0, "default")), null) },
        f.jobs,
    )
  }

  @Test
  fun `unknown mutations put the default write before the mutation in the same job`() {
    val f = Fixture(17)

    assertEquals(
        BalanceChange(source, "source", 17, 20, 3, "set"),
        f.ledger.set(source, "source", 20),
    )
    assertEquals(
        listOf(
            BalanceWrite(source, "source", 17, 0, "default"),
            BalanceWrite(source, "source", 20, 3, "set"),
        ),
        f.jobs.single().writes,
    )
    assertEquals(20, f.balance(source))
  }

  @Test
  fun `unknown transfer initializes both accounts before debit and credit`() {
    val f = Fixture(17)

    assertEquals(
        Transfer(
            BalanceChange(source, "source", 17, 12, -5, "remove"),
            BalanceChange(target, "target", 17, 22, 5, "add"),
        ),
        f.ledger.transfer(source, "source", target, "target", 5),
    )
    assertEquals(
        listOf(
            BalanceWrite(source, "source", 17, 0, "default"),
            BalanceWrite(target, "target", 17, 0, "default"),
            BalanceWrite(source, "source", 12, -5, "remove"),
            BalanceWrite(target, "target", 22, 5, "add"),
        ),
        f.jobs.single().writes,
    )
    assertEquals(2, f.ledger.size())
    assertEquals(12, f.balance(source))
    assertEquals(22, f.balance(target))
  }

  @Test
  fun `rejected or insufficient unknown mutations do not register any accounts`() {
    val f = Fixture(17)
    f.accepts = false

    assertNull(f.ledger.set(source, "source", 20))
    assertNull(f.ledger.add(source, "source", 3, MutationContext.SILENT, null))
    assertNull(f.ledger.remove(source, "source", 3))
    assertNull(f.ledger.transfer(source, "source", target, "target", 3))
    assertNull(f.ledger.transfer(source, "source", source, "source", 3))
    assertEquals(5, f.jobs.size)
    assertEquals(0, f.ledger.size())
    assertEquals(17, f.balance(source))
    assertEquals(17, f.balance(target))
    f.accepts = true
    f.jobs.clear()
    assertNull(f.ledger.remove(source, "source", 18))
    assertNull(f.ledger.transfer(source, "source", target, "target", 18))
    assertEquals(0, f.ledger.size())
    assertTrue(f.jobs.isEmpty())
  }

  @Test
  fun `accepted mutations pass the same completion through without completing it`() {
    val mutations: List<(TokenLedger, CompletableFuture<Boolean>) -> Any?> =
        listOf(
            { ledger, completion -> ledger.set(source, null, 20, completion = completion) },
            { ledger, completion -> ledger.addWithCommit(source, null, 3, completion) },
            { ledger, completion -> ledger.remove(source, null, 3, completion = completion) },
            { ledger, completion -> ledger.transfer(source, null, target, null, 3, completion) },
        )
    mutations.forEach { mutate ->
      val f = Fixture()
      val completion = CompletableFuture<Boolean>()

      assertNotNull(mutate(f.ledger, completion))
      assertSame(completion, f.jobs.single().completion)
      assertFalse(completion.isDone)
      // Completion belongs to the persistence worker, even after memory has been updated.
      f.jobs.single().completion!!.complete(true)
      assertTrue(completion.join())
    }
  }

  @Test
  fun `negative add completes false while negative remove adds and changes notification type`() {
    val f = Fixture()
    val rejected = CompletableFuture<Boolean>()
    val accepted = CompletableFuture<Boolean>()

    assertNull(f.ledger.addWithCommit(source, "source", -3, rejected))
    assertFalse(rejected.join())
    assertTrue(f.jobs.isEmpty())
    assertEquals(0, f.ledger.size())
    assertEquals(
        BalanceChange(source, "source", 10, 13, 3, "add"),
        f.ledger.remove(
            source,
            "source",
            -3,
            MutationContext(actor, NotificationType.REMOVE),
            accepted,
        ),
    )
    assertEquals(
        listOf(
            BalanceWrite(source, "source", 10, 0, "default"),
            BalanceWrite(source, "source", 13, 3, "add", actor, NotificationType.ADD),
        ),
        f.jobs.single().writes,
    )
    assertEquals(13, f.balance(source))
    assertSame(accepted, f.jobs.single().completion)
    assertFalse(accepted.isDone)
  }

  @Test
  fun `minimum long removal returns null without completing or persisting`() {
    val f = Fixture()
    val completion = CompletableFuture<Boolean>()

    assertNull(f.ledger.remove(source, null, Long.MIN_VALUE, completion = completion))
    assertFalse(completion.isDone)
    assertEquals(0, f.ledger.size())
    assertTrue(f.jobs.isEmpty())
  }

  @Test
  fun `invalid set and transfer amounts throw without persisting`() {
    val f = Fixture()

    assertFailsWith<IllegalArgumentException> { f.ledger.set(source, null, -1) }
    listOf(0L, -1L).forEach { amount ->
      assertFailsWith<IllegalArgumentException> {
        f.ledger.transfer(source, null, target, null, amount)
      }
    }
    assertEquals(0, f.ledger.size())
    assertTrue(f.jobs.isEmpty())
  }

  @Test
  fun `unchanged mutations still persist but suppress notifications`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("source", 10)))

    assertNotNull(f.ledger.set(source, null, 10, MutationContext(actor, NotificationType.SET)))
    assertNotNull(f.ledger.add(source, null, 0, MutationContext(actor, NotificationType.ADD), null))
    assertNotNull(f.ledger.remove(source, null, 0, MutationContext(actor, NotificationType.REMOVE)))
    assertEquals(listOf("set", "add", "remove"), f.jobs.map { it.writes.single().reason })
    f.jobs.forEach { job ->
      assertEquals(10, job.writes.single().balance)
      assertEquals(0, job.writes.single().delta)
      assertEquals(actor, job.writes.single().actorUuid)
      assertNull(job.writes.single().notificationType)
    }
    assertEquals(10, f.balance(source))
  }

  @Test
  fun `read side name updates require accepted persistence and a nonblank name`() {
    val f = Fixture()
    f.ledger.replaceAll(mapOf(source to BalanceRecord("old", 10)))
    assertEquals(10, f.ledger.balance(source, "new", false))
    assertEquals(10, f.ledger.balance(source, " ", true))
    assertTrue(f.jobs.isEmpty())
    f.accepts = false
    assertEquals(10, f.ledger.balance(source, "new", true))
    assertEquals("old", f.ledger.nameOf(source))
    f.accepts = true
    assertEquals(10, f.ledger.balance(source, "new", true))
    assertEquals("new", f.ledger.nameOf(source))
    assertEquals(
        List(2) { Job(listOf(BalanceWrite(source, "new", 10, 0, "name-update")), null) },
        f.jobs,
    )
  }
}
