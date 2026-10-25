package icu.oyasai.utilities.tpswitch

import java.nio.file.Path
import java.sql.DriverManager
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.junit.jupiter.api.io.TempDir

class TpSwitchTest {
  @TempDir lateinit var tempDir: Path

  @Test
  fun `open and close use the appropriate lists and only OP bypasses`() {
    val sender = UUID.randomUUID()
    val state = TpSettings()
    assertFalse(denied(state, sender, false))
    state.blackIds.add(sender)
    assertTrue(denied(state, sender, false))
    assertFalse(denied(state, sender, true))
    state.open = false
    assertTrue(denied(state, sender, false))
    state.whiteIds.add(sender)
    assertFalse(denied(state, sender, false))
    state.whiteIds.clear()
    assertFalse(denied(state, sender, true))
  }

  @Test
  fun `settings survive reopening with the current schema`() {
    val owner = UUID.randomUUID()
    val member = UUID.randomUUID()
    val defaultOwner = UUID.randomUUID()
    val players =
        linkedMapOf(
            owner to
                TpSettings(
                    false,
                    linkedSetOf(member),
                    linkedSetOf(member),
                    linkedSetOf("Alice"),
                    linkedSetOf("Bob"),
                ),
            defaultOwner to TpSettings(whiteNames = linkedSetOf("Carol")),
        )
    val database = tempDir.resolve("tpswitch.db").toFile()
    TpStore(database).use { store ->
      store.open()
      players.forEach { (id, settings) -> store.save(id, settings) }
      assertEquals(players, store.load())
    }
    TpStore(database).use { store ->
      store.open()
      assertEquals(players, store.load())
    }
    DriverManager.getConnection("jdbc:sqlite:${database.absolutePath}").use { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          rows.next()
          assertEquals(1, rows.getInt(1))
        }
      }
    }
  }
}
