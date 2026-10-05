package icu.oyasai.utilities.sit

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull

class PlayerSitRulesTest {
  @Test
  fun `every pair follows the specified rank order`() {
    val groups =
        listOf(
            "white",
            "blue",
            "takumi",
            "builder",
            "jokyu",
            "chukyu",
            "default",
            "mod",
            "admini",
            "admin",
            "dev",
        )
    groups.forEachIndexed { riderIndex, rider ->
      groups.forEachIndexed { targetIndex, target ->
        assertEquals(
            riderIndex < targetIndex,
            PlayerSitRules.canRide(rider, target),
            "$rider -> $target",
        )
      }
    }
  }

  @Test
  fun `unknown groups are lowest and cannot ride one another`() {
    assertEquals(true, PlayerSitRules.canRide("dev", "unknown"))
    assertFalse(PlayerSitRules.canRide("unknown", "dev"))
    assertFalse(PlayerSitRules.canRide("unknown", "another"))
  }

  @Test
  fun `mode parsing accepts command case and rejects invalid values`() {
    assertEquals(PlayerSitMode.RANK, PlayerSitMode.parse("RaNk"))
    assertEquals(PlayerSitMode.ALL, PlayerSitMode.parse("all"))
    assertNull(PlayerSitMode.parse("invalid"))
  }

  @Test
  fun `new rider attaches to the top of an existing stack`() {
    val rider = UUID.randomUUID()
    val bottom = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val graph = mapOf(bottom to listOf(middle), middle to listOf(top), top to emptyList())
    assertEquals(top, PlayerSitRules.top(rider, bottom) { graph[it] })
    assertEquals(top, PlayerSitRules.top(rider, top) { graph[it] })
  }

  @Test
  fun `self riding and cycles including rider are rejected`() {
    val rider = UUID.randomUUID()
    val other = UUID.randomUUID()
    assertNull(PlayerSitRules.top(rider, rider) { emptyList() })
    assertNull(PlayerSitRules.top(rider, other) { listOf(rider) })
    assertNull(PlayerSitRules.top(rider, other) { listOf(other) })
  }

  @Test
  fun `carrier exit releases the entire upper stack top first`() {
    val bottom = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val rides = mutableMapOf(middle to bottom, top to middle)
    assertEquals(listOf(top to middle, middle to bottom), PlayerSitRules.detach(rides, bottom))
    assertEquals(emptyMap(), rides)
    assertEquals(emptyList(), PlayerSitRules.detach(rides, bottom))
  }

  @Test
  fun `middle rider exit preserves their carrier and unrelated stacks`() {
    val bottom = UUID.randomUUID()
    val lower = UUID.randomUUID()
    val middle = UUID.randomUUID()
    val top = UUID.randomUUID()
    val otherRider = UUID.randomUUID()
    val otherCarrier = UUID.randomUUID()
    val rides =
        mutableMapOf(lower to bottom, middle to lower, top to middle, otherRider to otherCarrier)
    assertEquals(listOf(top to middle, middle to lower), PlayerSitRules.detach(rides, middle))
    assertEquals(mapOf(lower to bottom, otherRider to otherCarrier), rides)
  }

  @Test
  fun `unavailable and branching passenger chains are rejected`() {
    val rider = UUID.randomUUID()
    val target = UUID.randomUUID()
    assertNull(PlayerSitRules.top(rider, target) { null })
    assertNull(PlayerSitRules.top(rider, target) { listOf(UUID.randomUUID(), UUID.randomUUID()) })
  }
}
