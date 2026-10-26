package icu.oyasai.utilities.items

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.io.File
import java.nio.file.Files
import java.util.UUID
import kotlin.test.*

class ItemStoreTest {
  private fun withFile(test: (File) -> Unit) {
    val root = File("build/test-tmp").apply { mkdirs() }
    val temporary = Files.createTempDirectory(root.toPath(), "items-db-").toFile()
    try {
      test(File(temporary, "utilities.db"))
    } finally {
      temporary.deleteRecursively()
    }
  }

  private val creator = UUID.randomUUID()

  private fun entry(id: Int, rule: ClaimRule = ClaimRule.FREE) =
      CatalogEntry(id, "名前$id", "説明", byteArrayOf(1, 2, 3), rule, creator, 1000L, true)

  private fun reopen(file: File, block: (ItemStore) -> Unit) =
      UtilitiesDatabase(file).use { db -> block(ItemStore(db).also { it.load() }) }

  @Test
  fun `entries survive reopening`() = withFile { file ->
    UtilitiesDatabase(file).use { db -> ItemStore(db).put(entry(1, ClaimRule.ONCE)) }
    reopen(file) { store ->
      val loaded = assertNotNull(store.get(1))
      assertEquals("名前1", loaded.name)
      assertEquals(ClaimRule.ONCE, loaded.rule)
      assertContentEquals(byteArrayOf(1, 2, 3), loaded.bytes)
      assertEquals(creator, loaded.creator)
    }
  }

  @Test
  fun `removed ids stay reserved but leave the list`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      store.put(entry(1))
      store.put(store.get(1)!!.copy(enabled = false))
    }
    reopen(file) { store ->
      assertNull(store.get(1))
      assertEquals(2, store.nextId())
      assertTrue(store.all().isEmpty())
    }
  }

  @Test
  fun `update keeps creator and date`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      store.put(entry(1))
      store.put(store.get(1)!!.copy(name = "新", bytes = byteArrayOf(9), rule = ClaimRule.STAFF))
    }
    reopen(file) { store ->
      val loaded = assertNotNull(store.get(1))
      assertEquals("新", loaded.name)
      assertEquals(ClaimRule.STAFF, loaded.rule)
      assertEquals(1000L, loaded.createdAt)
    }
  }

  @Test
  fun `claims persist and reset`() = withFile { file ->
    val alice = UUID.randomUUID()
    val bob = UUID.randomUUID()
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      store.put(entry(1))
      store.recordClaim(1, alice, 1L)
      store.recordClaim(1, alice, 2L)
      store.recordClaim(1, bob, 3L)
      assertEquals(2, store.claimCount(1))
    }
    reopen(file) { store ->
      assertTrue(store.hasClaimed(1, alice))
      assertTrue(store.resetClaim(1, alice))
      assertFalse(store.resetClaim(1, alice))
    }
    reopen(file) { store ->
      assertFalse(store.hasClaimed(1, alice))
      assertTrue(store.hasClaimed(1, bob))
    }
  }

  @Test
  fun `numbers follow registration and are not reused after removal`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      assertEquals(1, store.nextId())
      store.put(entry(store.nextId()))
      assertEquals(2, store.nextId())
      store.put(entry(store.nextId()))
      store.put(store.get(2)!!.copy(enabled = false))
      assertEquals(3, store.nextId())
    }
    reopen(file) { store ->
      assertEquals(3, store.nextId())
      store.put(entry(store.nextId()))
      assertEquals(listOf(1, 3), store.all().map { it.id })
    }
  }

  @Test
  fun `version one migrates catalog and claims in creation order with old id tie breaker`() =
      withFile { file ->
        val alice = UUID.randomUUID()
        UtilitiesDatabase(file).use { db ->
          db.migrate(
              "items",
              listOf({ connection ->
                connection.createStatement().use {
                  it.execute(
                      """
                      CREATE TABLE items_catalog (
                        id TEXT PRIMARY KEY,
                        name TEXT NOT NULL,
                        description TEXT NOT NULL,
                        item_bytes BLOB NOT NULL,
                        rule TEXT NOT NULL CHECK(rule IN ('FREE', 'STAFF', 'ONCE')),
                        creator_uuid TEXT NOT NULL,
                        created_at INTEGER NOT NULL,
                        enabled INTEGER NOT NULL CHECK(enabled IN (0, 1))
                      )
                      """
                          .trimIndent()
                  )
                  it.execute(
                      "CREATE TABLE items_log (item_id TEXT NOT NULL, player_uuid TEXT NOT NULL, at INTEGER NOT NULL)"
                  )
                  it.execute("CREATE INDEX items_log_item ON items_log(item_id, player_uuid)")
                }
              }),
          )
          db.write { connection ->
            connection
                .prepareStatement("INSERT INTO items_catalog VALUES (?, ?, ?, ?, ?, ?, ?, ?)")
                .use {
                  for ((id, date, enabled) in
                      listOf(
                          Triple("z-oldest", 10L, 1),
                          Triple("b-tied", 20L, 0),
                          Triple("a-tied", 20L, 1),
                      )) {
                    it.setString(1, id)
                    it.setString(2, "name-$id")
                    it.setString(3, "description-$id")
                    it.setBytes(4, byteArrayOf(4, 5))
                    it.setString(5, "ONCE")
                    it.setString(6, creator.toString())
                    it.setLong(7, date)
                    it.setInt(8, enabled)
                    it.executeUpdate()
                  }
                }
            connection.prepareStatement("INSERT INTO items_log VALUES (?, ?, ?)").use {
              for ((id, at) in
                  listOf(
                      "z-oldest" to 101L,
                      "a-tied" to 102L,
                      "b-tied" to 103L,
                      "a-tied" to 104L,
                  )) {
                it.setString(1, id)
                it.setString(2, alice.toString())
                it.setLong(3, at)
                it.executeUpdate()
              }
            }
          }
        }
        reopen(file) { store ->
          assertEquals(listOf("name-z-oldest", "name-a-tied"), store.all().map { it.name })
          assertNull(store.get(3))
          assertEquals(4, store.nextId())
          for (id in 1..3) assertTrue(store.hasClaimed(id, alice))
          val migrated = assertNotNull(store.get(2))
          assertEquals("description-a-tied", migrated.description)
          assertContentEquals(byteArrayOf(4, 5), migrated.bytes)
          assertEquals(creator, migrated.creator)
          assertEquals(20L, migrated.createdAt)
          assertEquals(ClaimRule.ONCE, migrated.rule)
        }
        UtilitiesDatabase(file).use { db ->
          db.read { connection ->
            connection.createStatement().use { statement ->
              statement
                  .executeQuery("SELECT version FROM schema_versions WHERE feature = 'items'")
                  .use {
                    assertTrue(it.next())
                    assertEquals(2, it.getInt(1))
                  }
              statement.executeQuery("PRAGMA table_info(items_catalog)").use { rows ->
                val columns = mutableMapOf<String, String>()
                while (rows.next()) columns[rows.getString("name")] = rows.getString("type")
                assertEquals("INTEGER", columns["id"])
                assertFalse("legacy_id" in columns)
              }
              statement
                  .executeQuery("SELECT item_id, at, typeof(item_id) FROM items_log ORDER BY at")
                  .use { rows ->
                    for ((id, at) in listOf(1 to 101L, 2 to 102L, 3 to 103L, 2 to 104L)) {
                      assertTrue(rows.next())
                      assertEquals(id, rows.getInt(1))
                      assertEquals(at, rows.getLong(2))
                      assertEquals("integer", rows.getString(3))
                    }
                    assertFalse(rows.next())
                  }
            }
          }
        }
        reopen(file) { store ->
          assertEquals(4, store.nextId())
          assertTrue(store.hasClaimed(2, alice))
        }
      }
}
