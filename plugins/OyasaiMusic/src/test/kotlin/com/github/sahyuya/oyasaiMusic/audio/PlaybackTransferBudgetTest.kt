package com.github.sahyuya.oyasaiMusic.audio

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class PlaybackTransferBudgetTest {
  @Test
  fun `fifty saturated players share the quota across overlapping transfers`() {
    val players = List(50) { UUID(0L, it.toLong()) }
    val routes = players + players
    var rotation = 0
    val reached = mutableSetOf<UUID>()
    repeat(4) {
      val budget = PlaybackTransferBudget(routes.size, rotation)
      val sent = mutableMapOf<UUID, Int>()
      for (offset in routes.indices) {
        val index = budget.index(offset)
        val player = routes[index]
        repeat(2) { if (budget.take(player, index)) sent[player] = (sent[player] ?: 0) + 1 }
      }
      assertEquals(32, sent.values.sum())
      assertTrue(sent.values.all { it <= 2 })
      reached += sent.keys
      rotation = budget.nextRotation()
    }
    assertEquals(players.toSet(), reached)
  }
}
