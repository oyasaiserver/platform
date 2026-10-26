package com.github.sahyuya.oyasaiMenu.engine

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class PointShopCommandsTest {
  private val commands = listOf("first", "second", "third")

  @Test
  fun stopsAtFirstFailureAndReportsItsIndex() {
    for (failed in commands.indices) {
      val executed = mutableListOf<String>()
      assertEquals(
          failed,
          dispatchPointShopCommands(commands) {
            executed += it
            it != commands[failed]
          },
      )
      assertEquals(commands.take(failed + 1), executed)
    }
  }

  @Test
  fun runsAllCommandsOnSuccess() {
    val executed = mutableListOf<String>()
    assertNull(
        dispatchPointShopCommands(commands) {
          executed += it
          true
        }
    )
    assertEquals(commands, executed)
    assertNull(dispatchPointShopCommands(emptyList()) { error("No command expected") })
  }
}
