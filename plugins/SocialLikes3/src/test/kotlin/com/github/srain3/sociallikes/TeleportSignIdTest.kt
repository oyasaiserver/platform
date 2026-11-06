package com.github.srain3.sociallikes

import kotlin.test.Test
import kotlin.test.assertEquals

class TeleportSignIdTest {
  @Test
  fun `legacy items migrate once while placed commands keep their existing destination`() {
    val migrated = mutableListOf<Int>()
    val migrate: (Int) -> Int = { id ->
      migrated.add(id)
      mapOf(-7 to 7, 7 to 10007, 10007 to 20007)[id] ?: id
    }
    assertEquals(7, resolveTeleportSignId(-7, null, null, migrate))
    assertEquals(10007, resolveTeleportSignId(7, null, null, migrate))
    assertEquals(42, resolveTeleportSignId(42, null, null, migrate))
    assertEquals(10007, resolveTeleportSignId(10007, 2, null, migrate))
    assertEquals(7, resolveTeleportSignId(7, null, "/sltp 7", migrate))
    assertEquals(10007, resolveTeleportSignId(7, null, "/sociallikes3:sltp 10007", migrate))
    assertEquals(listOf(-7, 7, 42, 7, 7), migrated)
  }

  private val buildings = mapOf(7 to ("New build" to "Alice"), 10007 to ("Old build" to "Bob"))

  @Test
  fun `unmarked post migration signs keep raw ID when their text matches`() {
    for (command in listOf(null, "/sltp 10007")) {
      assertEquals(
          7,
          resolveTeleportSignId(
              7,
              null,
              command,
              { 10007 },
              "[New build]",
              "Alice",
              buildings::get,
          ),
      )
    }
    assertEquals(
        7,
        resolveTeleportSignId(7, null, null, { 10007 }, "[Renamed]", "Alice", buildings::get),
    )
  }

  @Test
  fun `unmarked pre migration signs select migrated ID when their text matches`() {
    for (command in listOf(null, "/sltp 7")) {
      assertEquals(
          10007,
          resolveTeleportSignId(7, null, command, { 10007 }, "[Old build]", "Bob", buildings::get),
      )
    }
    assertEquals(
        42,
        resolveTeleportSignId(7, null, "/sltp 42", { 10007 }, "[Command build]", "Carol") { id ->
          if (id == 42) "Command build" to "Carol" else buildings[id]
        },
    )
  }

  @Test
  fun `missing or inconclusive text falls back to the existing rule`() {
    for ((title, owner) in listOf("" to "", "[Missing]" to "Nobody", "[New build]" to "Bob")) {
      for (command in listOf(null, "/sltp 7")) {
        assertEquals(
            if (command == null) 10007 else 7,
            resolveTeleportSignId(7, null, command, { 10007 }, title, owner, buildings::get),
        )
      }
    }
    assertEquals(
        7,
        resolveTeleportSignId(7, null, "/sltp 7", { it }, "[New build]", "Alice", buildings::get),
    )
    assertEquals(
        7,
        resolveTeleportSignId(
            7,
            2,
            null,
            { error("must not migrate") },
            "[Old build]",
            "Bob",
            buildings::get,
        ),
    )
  }
}
