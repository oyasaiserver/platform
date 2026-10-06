package io.oyasai.oyasaiAdminTools.playerhistory

import io.oyasai.oyasaiAdminTools.seen.recordedTime
import io.oyasai.oyasaiAdminTools.staff.ToggleStore
import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.io.File
import java.nio.file.Path
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class PlayerHistoryTest {
  @TempDir lateinit var temp: Path
  private val uuid = UUID.randomUUID()

  private fun db() =
      AdminDb(File(temp.toFile(), "admin.db"), Logger.getLogger("history-test")).apply { open() }

  private fun legacy(body: String) {
    File(temp.toFile(), "$uuid.yml").writeText(body)
  }

  @Test
  fun userdataIsImportedOnceAcrossRestartsAndSharesHistory() {
    legacy(
        """
        timestamps:
          login: 123
          logout: 456
        logoutlocation:
          world: 11111111-1111-1111-1111-111111111111
          world-name: oldworld
          x: 1.5
          y: 70
          z: -2.25
          yaw: 90
          pitch: -10
        socialspy: true
        """
            .trimIndent()
    )
    db().use { db ->
      val history = PlayerHistoryStore(db, temp.toFile())
      val p = history.get(uuid, "oldname")
      assertEquals(123L, p.login)
      assertEquals(456L, p.logout)
      assertEquals(1.5, p.location!!.x)
      assertEquals("oldworld", p.location.worldName)
      val spy = ToggleStore(db, "socialspy")
      assertTrue(spy.load(uuid) { readUserdata(temp.toFile(), uuid).getBoolean("socialspy") })
      spy.save(uuid, false)
    }
    legacy("timestamps: {login: 999, logout: 999}\nsocialspy: true")
    db().use { db ->
      assertEquals(456L, PlayerHistoryStore(db, temp.toFile()).get(uuid, "oldname").logout)
      assertFalse(ToggleStore(db, "socialspy").load(uuid) { error("Must not reimport") })
    }
  }

  @Test
  fun missingUserdataIsMarkedAndCorruptYamlCanBeRetried() {
    db().use { db ->
      val history = PlayerHistoryStore(db, temp.toFile())
      assertNull(history.get(uuid, "name").location)
      legacy("timestamps: {logout: 999}\nsocialspy: true")
      assertEquals(0L, history.get(uuid, "name").logout)
      val absent = UUID.randomUUID()
      val spy = ToggleStore(db, "socialspy")
      assertFalse(spy.load(absent) { readUserdata(temp.toFile(), absent).getBoolean("socialspy") })
      File(temp.toFile(), "$absent.yml").writeText("socialspy: true")
      assertFalse(spy.load(absent) { error("Must not retry absent file") })
      val broken = UUID.randomUUID()
      File(temp.toFile(), "$broken.yml").writeText("timestamps: [")
      assertFailsWith<Exception> { history.get(broken, "broken") }
      File(temp.toFile(), "$broken.yml").writeText("timestamps: {logout: 99}")
      assertEquals(99L, history.get(broken, "broken").logout)
    }
  }

  @Test
  fun seenRecordsJoinQuitAndPreservesLastLogoutOnNextJoin() {
    val logout = LastLocation("world", null, 4.0, 65.0, -9.0, 45f, 10f)
    db().use { db ->
      val history = PlayerHistoryStore(db, temp.toFile())
      history.joined(uuid, "first", 1000, "127.0.0.1")
      assertEquals(1000L, history.get(uuid, "first").login)
      history.quit(uuid, "first", 2000, logout)
      history.joined(uuid, "renamed", 3000, "127.0.0.2")
      val p = history.get(uuid, "renamed")
      assertEquals(3000L, p.login)
      assertEquals(2000L, p.logout)
      assertEquals("renamed", p.name)
      assertEquals(logout, p.location)
      assertEquals("127.0.0.2", p.ip)
    }
    db().use { db ->
      assertEquals(logout, PlayerHistoryStore(db, temp.toFile()).get(uuid, "renamed").location)
    }
    assertEquals("記録なし", recordedTime(0))
    assertFalse(recordedTime(3000).contains("記録なし"))
  }

  @Test
  fun vanishPersistsIndependentlyAndFeatureFailureDoesNotBreakOthers() {
    db().use { db ->
      ToggleStore(db, "vanish").save(uuid, true)
      assertFailsWith<Exception> {
        db.ensureFeature("vanish", 2, listOf("CREATE TABLE vanish_players(uuid TEXT)"))
      }
      assertEquals(0L, PlayerHistoryStore(db, temp.toFile()).get(uuid, "name").logout)
      ToggleStore(db, "socialspy").save(uuid, false)
    }
    db().use { db -> assertTrue(ToggleStore(db, "vanish").load(uuid)) }
  }
}
