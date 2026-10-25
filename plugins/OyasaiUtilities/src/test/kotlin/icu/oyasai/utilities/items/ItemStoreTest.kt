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

  private fun entry(id: String, rule: ClaimRule = ClaimRule.FREE) =
      CatalogEntry(id, "名前$id", "説明", byteArrayOf(1, 2, 3), rule, creator, 1000L, true)

  private fun reopen(file: File, block: (ItemStore) -> Unit) =
      UtilitiesDatabase(file).use { db -> block(ItemStore(db).also { it.load() }) }

  @Test
  fun `entries survive reopening`() = withFile { file ->
    UtilitiesDatabase(file).use { db -> ItemStore(db).put(entry("sword", ClaimRule.ONCE)) }
    reopen(file) { store ->
      val loaded = assertNotNull(store.get("sword"))
      assertEquals("名前sword", loaded.name)
      assertEquals(ClaimRule.ONCE, loaded.rule)
      assertContentEquals(byteArrayOf(1, 2, 3), loaded.bytes)
      assertEquals(creator, loaded.creator)
    }
  }

  @Test
  fun `removed ids stay reserved but leave the list`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      store.put(entry("old"))
      store.put(store.get("old")!!.copy(enabled = false))
    }
    reopen(file) { store ->
      assertNull(store.get("old"))
      assertTrue(store.exists("old"))
      assertTrue(store.all().isEmpty())
    }
  }

  @Test
  fun `update keeps creator and date`() = withFile { file ->
    UtilitiesDatabase(file).use { db ->
      val store = ItemStore(db)
      store.put(entry("a"))
      store.put(store.get("a")!!.copy(name = "新", bytes = byteArrayOf(9), rule = ClaimRule.STAFF))
    }
    reopen(file) { store ->
      val loaded = assertNotNull(store.get("a"))
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
      store.put(entry("a"))
      store.recordClaim("a", alice, 1L)
      store.recordClaim("a", alice, 2L)
      store.recordClaim("a", bob, 3L)
      assertEquals(2, store.claimCount("a"))
    }
    reopen(file) { store ->
      assertTrue(store.hasClaimed("a", alice))
      assertTrue(store.resetClaim("a", alice))
      assertFalse(store.resetClaim("a", alice))
    }
    reopen(file) { store ->
      assertFalse(store.hasClaimed("a", alice))
      assertTrue(store.hasClaimed("a", bob))
    }
  }
}
