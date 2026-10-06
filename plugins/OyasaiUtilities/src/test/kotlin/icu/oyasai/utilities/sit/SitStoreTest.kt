package icu.oyasai.utilities.sit

import java.nio.file.Path
import java.sql.DriverManager
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import org.junit.jupiter.api.io.TempDir

class SitStoreTest {
  @TempDir lateinit var tempDir: Path

  @Test
  fun `new database has version two and tables`() {
    val file = tempDir.resolve("sit.db").toFile()
    SitStore(file).use { it.open() }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          rows.next()
          assertEquals(2, rows.getInt(1))
        }
        statement.executeQuery("SELECT uuid FROM click_sit_off").close()
      }
    }
  }

  @Test
  fun `preferences survive reopening`() {
    val file = tempDir.resolve("sit.db").toFile()
    val kept = UUID.randomUUID()
    val removed = UUID.randomUUID()
    SitStore(file).use {
      it.open()
      it.setOff(kept, true)
      it.setOff(removed, true)
      it.setOff(removed, false)
    }
    SitStore(file).use {
      it.open()
      assertEquals(setOf(kept), it.loadOff())
    }
  }

  @Test
  fun `migration database opens without initial WAL`() {
    val file = tempDir.resolve("sit.db").toFile()
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { connection ->
      connection.createStatement().use {
        it.execute("CREATE TABLE click_sit_off (uuid TEXT PRIMARY KEY NOT NULL)")
        it.execute("PRAGMA user_version = 1")
      }
    }
    SitStore(file).use {
      it.open()
      assertEquals(emptySet(), it.loadOff())
      assertEquals(PlayerSitMode.RANK, it.loadPlayerMode())
    }
  }

  @Test
  fun `player mode defaults to rank and survives changes and reopening`() {
    val file = tempDir.resolve("sit.db").toFile()
    SitStore(file).use {
      it.open()
      assertEquals(PlayerSitMode.RANK, it.loadPlayerMode())
      it.setPlayerMode(PlayerSitMode.ALL)
    }
    SitStore(file).use {
      it.open()
      assertEquals(PlayerSitMode.ALL, it.loadPlayerMode())
      it.setPlayerMode(PlayerSitMode.RANK)
    }
    SitStore(file).use {
      it.open()
      assertEquals(PlayerSitMode.RANK, it.loadPlayerMode())
    }
  }

  @Test
  fun `version one migration preserves click preferences`() {
    val file = tempDir.resolve("sit.db").toFile()
    val uuid = UUID.randomUUID()
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { connection ->
      connection.createStatement().use {
        it.execute("CREATE TABLE click_sit_off (uuid TEXT PRIMARY KEY NOT NULL)")
        it.execute("INSERT INTO click_sit_off VALUES ('$uuid')")
        it.execute("PRAGMA user_version = 1")
      }
    }
    SitStore(file).use {
      it.open()
      assertEquals(setOf(uuid), it.loadOff())
      assertEquals(PlayerSitMode.RANK, it.loadPlayerMode())
      it.setPlayerMode(PlayerSitMode.ALL)
    }
    SitStore(file).use {
      it.open()
      assertEquals(setOf(uuid), it.loadOff())
      assertEquals(PlayerSitMode.ALL, it.loadPlayerMode())
    }
  }

  @Test
  fun `future schema is rejected`() {
    val file = tempDir.resolve("sit.db").toFile()
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { connection ->
      connection.createStatement().use { it.execute("PRAGMA user_version = 3") }
    }
    SitStore(file).use { assertFailsWith<IllegalStateException> { it.open() } }
  }
}
