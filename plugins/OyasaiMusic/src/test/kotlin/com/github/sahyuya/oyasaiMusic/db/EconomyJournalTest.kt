package com.github.sahyuya.oyasaiMusic.db

import java.nio.file.Path
import java.sql.DriverManager
import java.sql.SQLException
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertIs
import kotlin.test.assertNotNull
import org.junit.jupiter.api.io.TempDir

class EconomyJournalTest {
  @TempDir lateinit var directory: Path

  @Test
  fun `pre-publication database preserves legacy song and balances across startup`() {
    val author = UUID.randomUUID()
    val path = directory.resolve("music.db")
    Class.forName("org.sqlite.JDBC")
    DriverManager.getConnection("jdbc:sqlite:$path").use { connection ->
      connection.createStatement().use { statement ->
        statement.executeUpdate(
            "CREATE TABLE songs(id INTEGER PRIMARY KEY, author_uuid BLOB NOT NULL, title TEXT NOT NULL, " +
                "created_at INTEGER NOT NULL, bpm INTEGER NOT NULL, record_material TEXT NOT NULL, " +
                "price INTEGER NOT NULL, reference_url TEXT, status INTEGER NOT NULL, " +
                "likes INTEGER NOT NULL, views INTEGER NOT NULL, file_name TEXT NOT NULL)"
        )
        statement.executeUpdate(
            "CREATE TABLE users(uuid BLOB PRIMARY KEY, pending_money INTEGER NOT NULL, pending_points INTEGER NOT NULL)"
        )
      }
      val authorBytes = com.github.sahyuya.oyasaiMusic.util.UuidUtil.toBytes(author)
      connection
          .prepareStatement(
              "INSERT INTO songs VALUES(73, ?, 'Legacy track', 100, 120, 'MUSIC_DISC_13', 20, NULL, 0, 5, 42, 'legacy.bin')"
          )
          .use {
            it.setBytes(1, authorBytes)
            it.executeUpdate()
          }
      connection.prepareStatement("INSERT INTO users VALUES(?, 65, 4)").use {
        it.setBytes(1, authorBytes)
        it.executeUpdate()
      }
    }
    var identity = ""
    database { db ->
      EconomyJournal(db).initialize()
      val song = assertNotNull(SongRepository(db).findById(73))
      identity = song.recordIdentity
      UUID.fromString(identity)
      assertEquals(author, song.authorUuid)
      assertEquals("legacy.bin", song.fileName)
      assertEquals(5L, song.likes)
      assertEquals(42L, song.views)
      assertEquals(false, song.released)
      assertEquals(65L, UserRepository(db).get(author).pendingMoney)
      assertEquals(4L, UserRepository(db).get(author).pendingPoints)
    }
    database { db ->
      EconomyJournal(db).initialize()
      assertEquals(identity, SongRepository(db).findById(73)?.recordIdentity)
    }
  }

  @Test
  fun `distinct likes persist separate rewards and duplicate likes do not pay again`() {
    val author = UUID.randomUUID()
    val listener = UUID.randomUUID()
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      val songs = SongRepository(db)
      fun song(title: String) =
          songs
              .togglePublication(
                  songs.insertDraft(author, title, 120, "MUSIC_DISC_13", 0, "$title.bin"),
                  limitedClick = false,
              )
              .first
      val first = song("First")
      val second = song("Second")
      val likes = LikeService(db, SocialRepository(db), journal, 100, 2)
      val firstReward =
          assertNotNull(
              assertIs<LikeService.Result.Added>(likes.like(listener, first)).senderReward
          )
      journal.transition(firstReward.id, "PREPARED", "SUBMITTED")
      val secondReward =
          assertNotNull(
              assertIs<LikeService.Result.Added>(likes.like(listener, second)).senderReward
          )
      assertEquals(LikeService.Result.AlreadyAdded, likes.like(listener, first))
      assertEquals(
          setOf(firstReward.id, secondReward.id),
          journal.unresolved().map { it.id }.toSet(),
      )
      assertEquals(4L, UserRepository(db).get(author).pendingPoints)
    }
  }

  @Test
  fun `failed migration rolls back journal tables and preserves a usable backup`() {
    val owner = UUID.randomUUID()
    database { db ->
      val users = UserRepository(db)
      users.addPending(owner, money = 125, points = 11)
      db.transaction { connection ->
        connection.createStatement().use {
          it.executeUpdate(
              "CREATE TRIGGER fail_economy_migration BEFORE INSERT ON music_feature_schema " +
                  "WHEN NEW.feature='economy-journal' BEGIN SELECT RAISE(ABORT,'injected failure'); END"
          )
        }
      }
      val journal = EconomyJournal(db)
      assertFailsWith<SQLException> { journal.initialize() }
      db.transaction { connection ->
        connection.createStatement().use { statement ->
          statement
              .executeQuery(
                  "SELECT count(*) FROM sqlite_master WHERE name IN " +
                      "('music_transactions','music_transaction_audit','music_transaction_effects')"
              )
              .use { rows ->
                rows.next()
                assertEquals(0, rows.getInt(1))
              }
          statement.executeUpdate("DROP TRIGGER fail_economy_migration")
        }
      }
      val backup = directory.toFile().listFiles()!!.single { ".before-economy-journal-" in it.name }
      DriverManager.getConnection("jdbc:sqlite:${backup.absolutePath}").use { connection ->
        connection.createStatement().use { statement ->
          statement.executeQuery("SELECT pending_money,pending_points FROM users").use { rows ->
            rows.next()
            assertEquals(125L, rows.getLong(1))
            assertEquals(11L, rows.getLong(2))
          }
        }
      }
      journal.initialize()
      journal.initialize()
      assertEquals(125L, users.get(owner).pendingMoney)
      assertEquals(11L, users.get(owner).pendingPoints)
      assertEquals(emptyList(), journal.unresolved())
    }
  }

  @Test
  fun `unsupported journal version is rejected before recovery`() {
    val owner = UUID.randomUUID()
    var id = ""
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      id = journal.create(owner, "ADVERTISE", "token", 10, "song").id
      journal.transition(id, "PREPARED", "SUBMITTED")
      db.transaction { connection ->
        connection.createStatement().use {
          it.executeUpdate(
              "UPDATE music_feature_schema SET version=99 WHERE feature='economy-journal'"
          )
        }
      }
    }
    database { db ->
      val journal = EconomyJournal(db)
      assertFailsWith<IllegalStateException> { journal.initialize() }
      assertEquals("SUBMITTED", journal.get(id)?.phase)
    }
  }

  @Test
  fun `purchase sale credit rolls back on failure and is not repeated on resume`() {
    val buyer = UUID.randomUUID()
    val author = UUID.randomUUID()
    var id = ""
    database { db ->
      val journal = EconomyJournal(db)
      val users = UserRepository(db)
      journal.initialize()
      val entry = journal.create(buyer, "PURCHASE", "yen", 80, "record")
      id = entry.id
      journal.transition(id, "PREPARED", "SUBMITTED")
      journal.transition(id, "SUBMITTED", "PAID", "SUCCESS")
      assertFailsWith<IllegalStateException> {
        journal.beginDelivery(entry) {
          users.addPending(author, money = 50)
          error("Simulated failure while saving sale")
        }
      }
      assertEquals("PAID", journal.get(id)?.phase)
      assertEquals(0L, users.get(author).pendingMoney)
      journal.beginDelivery(entry) { users.addPending(author, money = 50) }
      assertEquals("EFFECTING", journal.get(id)?.phase)
    }
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      assertEquals("REVIEW", journal.get(id)?.phase)
      val entry = journal.resolve(id, "paid", "test", "Paid, delivery confirmed unperformed")
      journal.transition(id, "MANUAL_PAID", "PAID")
      journal.beginDelivery(entry) { error("Sale credit would be duplicated") }
      journal.transition(id, "EFFECTING", "DONE")
      assertFailsWith<IllegalStateException> { journal.beginDelivery(entry) {} }
      assertEquals(50L, UserRepository(db).get(author).pendingMoney)
    }
  }

  @Test
  fun `interrupted promotion can be marked delivered only once`() {
    val owner = UUID.randomUUID()
    var id = ""
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      val entry = journal.create(owner, "ADVERTISE", "token", 10, "song")
      id = entry.id
      journal.transition(id, "PREPARED", "SUBMITTED")
      journal.transition(id, "SUBMITTED", "PAID", "SUCCESS")
      journal.beginDelivery(entry) { error("Promotion must not record a sale") }
    }
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      assertEquals("REVIEW", journal.get(id)?.phase)
      assertEquals("DONE", journal.resolve(id, "delivered", "test", "Notification verified").phase)
      assertFailsWith<IllegalStateException> {
        journal.resolve(id, "delivered", "test", "Duplicate resolution")
      }
    }
  }

  private fun database(action: (DatabaseManager) -> Unit) {
    val db = DatabaseManager(directory.resolve("music.db").toFile())
    try {
      db.connect()
      action(db)
    } finally {
      db.close()
    }
  }

  @Test
  fun `interrupted claim holds reservation and can be released only once`() {
    val owner = UUID.randomUUID()
    var id = ""
    database { db ->
      val users = UserRepository(db)
      users.addPending(owner, money = 120)
      val journal = EconomyJournal(db)
      journal.initialize()
      val entry = journal.create(owner, "CLAIM", "yen", 120, "yen", reserve = true)
      id = entry.id
      journal.transition(id, "PREPARED", "SUBMITTED")
    }
    database { db ->
      val journal = EconomyJournal(db)
      val users = UserRepository(db)
      journal.initialize()
      assertEquals("REVIEW", journal.get(id)?.phase)
      assertEquals(0L, users.get(owner).pendingMoney)
      users.addPending(owner, money = 30)
      assertFailsWith<IllegalStateException> {
        journal.create(owner, "CLAIM", "yen", 30, "yen", reserve = true)
      }
      assertEquals(30L, users.get(owner).pendingMoney)
      journal.resolve(id, "failed", "test", "Verified external rejection")
      assertFailsWith<IllegalStateException> {
        journal.resolve(id, "failed", "test", "Duplicate resolution")
      }
      assertEquals(150L, users.get(owner).pendingMoney)
      assertEquals(0L, users.get(owner).totalMoney)
    }
    assertEquals(
        1,
        directory.toFile().listFiles()!!.count { ".before-economy-journal-" in it.name },
    )
  }

  @Test
  fun `known successful claim cannot be reversed after restart or counted twice`() {
    val owner = UUID.randomUUID()
    var id = ""
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      UserRepository(db).addPending(owner, money = 70)
      id = journal.create(owner, "CLAIM", "yen", 70, "yen", reserve = true).id
      journal.transition(id, "PREPARED", "SUBMITTED")
      journal.transition(id, "SUBMITTED", "PAID", "SUCCESS")
    }
    database { db ->
      val journal = EconomyJournal(db)
      journal.initialize()
      assertFailsWith<IllegalStateException> {
        journal.resolve(id, "failed", "test", "Contradicts recorded result")
      }
      val entry = journal.resolve(id, "paid", "test", "Confirmed payment")
      journal.transition(id, "MANUAL_PAID", "PAID")
      journal.completeReward(entry)
      assertFailsWith<IllegalStateException> { journal.completeReward(entry) }
      assertEquals(70L, UserRepository(db).get(owner).totalMoney)
      assertEquals("DONE", journal.get(id)?.phase)
    }
  }
}
