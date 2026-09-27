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
  fun `legacy YAML imports once with defaults and reports bad UUIDs`() {
    val owner = UUID.randomUUID()
    val member = UUID.randomUUID()
    val defaultOwner = UUID.randomUUID()
    val legacy = tempDir.resolve("config.yml").toFile()
    legacy.writeText(
        """
      # legacy config
      $owner:
        switch: false
        WhiteList:
          $member: true
          invalid-uuid: true
        BlackList:
          $member: true
        WhiteListName:
          Alice: true
        BlackListName:
          Bob: true
      $defaultOwner:
        WhiteListName:
          Carol: true
      invalid-owner:
        switch: false
    """
            .trimIndent()
    )
    val parsed = readLegacy(legacy)
    assertEquals(ImportCounts(2, 1, 1, 2, 1, 2), parsed.counts)
    assertFalse(parsed.players.getValue(owner).open)
    assertTrue(parsed.players.getValue(defaultOwner).open)
    val database = tempDir.resolve("tpswitch.db").toFile()
    TpStore(database).use { store ->
      store.open()
      assertFalse(store.imported())
      store.importLegacy(parsed)
      assertTrue(store.imported())
      assertEquals(parsed.players, store.load())
    }
    TpStore(database).use { store ->
      store.open()
      assertTrue(store.imported())
      assertEquals(parsed.players, store.load())
    }
    DriverManager.getConnection("jdbc:sqlite:${database.absolutePath}").use { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          rows.next()
          assertEquals(1, rows.getInt(1))
        }
        statement.executeQuery("SELECT value FROM tp_meta WHERE key = 'legacy_skipped'").use { rows
          ->
          rows.next()
          assertEquals(2, rows.getInt(1))
        }
      }
    }
  }
}
