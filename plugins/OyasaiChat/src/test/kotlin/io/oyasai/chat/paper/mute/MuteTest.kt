package io.oyasai.chat.paper.mute

import io.oyasai.chat.paper.storage.ChatDatabase
import java.io.File
import java.nio.file.Files
import java.util.Calendar
import java.util.GregorianCalendar
import java.util.UUID
import kotlin.test.*

class MuteTest {
  @Test
  fun `bare command toggles and arguments update existing mute`() {
    val initial = MuteRules.change(MuteState(), emptyList(), 1000)
    assertTrue(initial.active(1000))
    assertFalse(MuteRules.change(initial, emptyList(), 1000).muted)
    val timed = MuteRules.change(initial, listOf("10m", "spam", "again"), 1000)
    assertEquals(601000, timed.expiresAt)
    assertEquals("spam again", timed.reason)
    assertTrue(timed.active(600999))
    assertFalse(timed.active(601000))
    assertTrue(timed.expired(601000))
    assertTrue(MuteRules.change(timed, emptyList(), 601000).active(601000))
    assertEquals("spam", MuteRules.change(initial, listOf("spam"), 1000).reason)
  }

  @Test
  fun `Essentials date parsing accepts seconds compound dates and calendar months`() {
    assertEquals(31000, MuteRules.duration("30", 1000))
    assertEquals(5401000, MuteRules.duration("1h30m", 1000))
    assertEquals(1000, MuteRules.duration("0s", 1000))
    assertFailsWith<IllegalArgumentException> { MuteRules.duration("spam", 1000) }
    val calendar =
        GregorianCalendar(2026, Calendar.JANUARY, 31, 12, 0, 0).apply {
          set(Calendar.MILLISECOND, 0)
        }
    val start = calendar.timeInMillis
    calendar.add(Calendar.MONTH, 1)
    assertEquals(calendar.timeInMillis, MuteRules.duration("1mo", start))
    calendar.timeInMillis = start
    calendar.add(Calendar.YEAR, 10)
    assertEquals(calendar.timeInMillis, MuteRules.duration("100y", start))
  }

  @Test
  fun `mute rejects PM aliases namespaces configured roots and wildcard`() {
    listOf("msg", "tell", "message", "pm", "r", "reply", "emsg", "me").forEach {
      assertTrue(MuteRules.blocksCommand("/$it Player text", emptySet()))
      assertTrue(MuteRules.blocksCommand("/essentials:$it Player text", emptySet()))
    }
    assertTrue(MuteRules.blocksCommand("/mail send Player text", emptySet()))
    assertTrue(MuteRules.blocksCommand("/essentials:email send Player text", emptySet()))
    assertFalse(MuteRules.blocksCommand("/mail read", emptySet()))
    assertTrue(MuteRules.blocksCommand("/mail read", setOf("mail")))
    assertTrue(MuteRules.blocksCommand("/F chat text", setOf("f")))
    assertFalse(MuteRules.blocksCommand("/fly", setOf("f")))
    assertTrue(MuteRules.blocksCommand("/fly", setOf("*")))
    assertFalse(MuteRules.blocksCommand("/mute Player", emptySet()))
    assertFalse(MuteState(muted = false, expiresAt = 5000).active(1000))
    assertTrue(MuteState(muted = true).active(Long.MAX_VALUE))
  }

  private fun directories(test: (File, File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val directory = Files.createTempDirectory(root.toPath(), "mute-").toFile()
    try {
      test(File(directory, "chat.db"), File(directory, "userdata").apply { mkdirs() })
    } finally {
      directory.deleteRecursively()
    }
  }

  @Test
  fun `import once survives unload restart unmute and interrupted cleanup`() =
      directories { dbFile, legacy ->
        val id = UUID.randomUUID()
        val file = File(legacy, "$id.yml")
        file.writeText("muted: true\nmute-reason: spam\ntimestamps:\n  mute: 601000\n")
        ChatDatabase(dbFile).use { database ->
          val store = MuteStore(database, legacy)
          assertEquals(MuteState(true, 601000, "spam", true), store.get(id))
          store.unload(id)
          assertTrue(store.get(id).essentialsCleanupPending)
          store.put(id, MuteState(essentialsCleanupPending = true))
        }
        file.writeText("muted: true\nmute-timeout: 999999\nmute-reason: changed\n")
        ChatDatabase(dbFile).use { database ->
          val store = MuteStore(database, legacy)
          assertEquals(MuteState(essentialsCleanupPending = true), store.get(id))
          store.put(id, MuteState())
          database.read { connection ->
            connection.createStatement().use { stmt ->
              stmt.executeQuery("SELECT essentials_imported FROM mute_players").use {
                assertTrue(it.next())
                assertEquals(1, it.getInt(1))
                assertFalse(it.next())
              }
            }
          }
        }
        ChatDatabase(dbFile).use { assertEquals(MuteState(), MuteStore(it, legacy).get(id)) }
      }

  @Test
  fun `missing legacy is marked and corrupt legacy is never replaced with defaults`() =
      directories { dbFile, legacy ->
        val missing = UUID.randomUUID()
        val corrupt = UUID.randomUUID()
        val fallback = UUID.randomUUID()
        ChatDatabase(dbFile).use { database ->
          val store = MuteStore(database, legacy)
          assertEquals(MuteState(), store.get(missing))
          File(legacy, "$missing.yml").writeText("muted: true\n")
          store.unload(missing)
          assertEquals(MuteState(), store.get(missing))
          val file = File(legacy, "$corrupt.yml")
          file.writeText("muted: [broken\n")
          assertFails { store.get(corrupt) }
          file.writeText("muted: true\nmute-timeout: 5000\n")
          assertEquals(MuteState(true, 5000, null, true), store.get(corrupt))
          File(legacy, "$fallback.yml")
              .writeText("muted: true\nmute-timeout: 50\ntimestamps:\n  mute: 100\n")
          assertEquals(100, store.get(fallback).expiresAt)
        }
      }

  @Test
  fun `future schema is refused and failed migration rolls back`() = directories { dbFile, _ ->
    ChatDatabase(dbFile).use { database ->
      assertFails {
        database.migrate(
            "mute",
            listOf({ c ->
              c.createStatement().use { it.execute("CREATE TABLE mute_test (id INTEGER)") }
              error("fail")
            }),
        )
      }
      database.read { c ->
        c.createStatement().use { s ->
          s.executeQuery("SELECT count(*) FROM sqlite_master WHERE name='mute_test'").use {
            assertTrue(it.next())
            assertEquals(0, it.getInt(1))
          }
        }
      }
      database.migrate("mute", listOf({ _ -> }, { _ -> }))
      assertFails { database.migrate("mute", listOf({ _ -> })) }
    }
  }
}
