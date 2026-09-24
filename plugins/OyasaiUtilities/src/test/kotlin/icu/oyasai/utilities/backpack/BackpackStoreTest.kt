package icu.oyasai.utilities.backpack

import java.nio.file.Path
import java.sql.DriverManager
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertNull
import org.junit.jupiter.api.io.TempDir

class BackpackStoreTest {
  @TempDir lateinit var tempDir: Path

  @Test
  fun `stores versioned backpack data in SQLite`() {
    val database = tempDir.resolve("backpacks.db").toFile()
    val playerUuid = UUID.randomUUID()
    val contents = byteArrayOf(1, 2, 3)

    BackpackStore(database).use { store ->
      store.open()
      assertNull(store.load(playerUuid))
      store.save(playerUuid, contents)
      assertContentEquals(contents, store.load(playerUuid))
    }

    DriverManager.getConnection("jdbc:sqlite:${database.absolutePath}").use { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          rows.next()
          assertEquals(BackpackStore.SCHEMA_VERSION, rows.getInt(1))
        }
        statement.executeQuery("SELECT data_version FROM backpacks").use { rows ->
          rows.next()
          assertEquals(BackpackStore.DATA_VERSION, rows.getInt(1))
        }
      }
    }
  }

  @Test
  fun `highest size permission wins`() {
    assertEquals(
        4,
        BackpackFeature.backpackRows {
          it == "backpack.use" || it == "backpack.size.1" || it == "backpack.size.4"
        },
    )
    assertEquals(0, BackpackFeature.backpackRows { false })
    assertEquals(1, BackpackFeature.backpackRows { it == "backpack.use" })
  }
}
