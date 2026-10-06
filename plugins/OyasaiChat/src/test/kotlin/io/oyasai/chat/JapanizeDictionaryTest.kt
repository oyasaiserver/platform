package io.oyasai.chat

import io.oyasai.chat.common.japanize.JapanizeSettings
import io.oyasai.chat.common.japanize.Japanizer
import io.oyasai.chat.paper.japanize.JapanizeDictionaryStore
import io.oyasai.chat.paper.japanize.LunaImport
import java.io.File
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicInteger
import kotlin.test.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class JapanizeDictionaryTest {
  @TempDir lateinit var directory: File
  private val file
    get() = File(directory, "japanize-dictionary.yml")

  @Test
  fun additionsOverwritesRemovalsAndReloadPreserveLiteralKeys() {
    JapanizeDictionaryStore(file, emptyMap()).use { store ->
      val added = store.add("KAKEZUMOU", "賭け 相撲")
      assertEquals("kakezumou", added.key)
      assertNull(added.oldValue)
      assertEquals("賭け 相撲", added.newValue)
      added.saved.get(3, TimeUnit.SECONDS)
      val overwrite = store.add("kakezumou", "賭け相撲")
      assertEquals("賭け 相撲", overwrite.oldValue)
      overwrite.saved.get(3, TimeUnit.SECONDS)
      store.add("./SPAWN", "/spawn").saved.get(3, TimeUnit.SECONDS)
      val removed = store.remove("KAKEZUMOU")!!
      assertEquals("賭け相撲", removed.oldValue)
      assertNull(removed.newValue)
      removed.saved.get(3, TimeUnit.SECONDS)
      assertNull(store.remove("missing"))
      assertEquals(mapOf("./spawn" to "/spawn"), LunaImport.dictionary(file))
    }
    JapanizeDictionaryStore(file, emptyMap()).use { reloaded ->
      assertEquals(mapOf("./spawn" to "/spawn"), reloaded.fileEntries())
      assertTrue(reloaded.canReloadSafely())
    }
    assertEquals(listOf("japanize-dictionary.yml"), directory.list()!!.toList())
  }

  @Test
  fun invalidInputCannotMutateOrScheduleWrites() {
    val writes = AtomicInteger()
    JapanizeDictionaryStore(
            file,
            emptyMap(),
            save = { _, _ -> writes.incrementAndGet() },
        )
        .use { store ->
          listOf("", " ", "two words", "a\tb", "a\nb", "a\u0000b", "a".repeat(65)).forEach { key ->
            assertFailsWith<IllegalArgumentException> { store.add(key, "value") }
            assertFailsWith<IllegalArgumentException> { store.remove(key) }
          }
          assertFailsWith<IllegalArgumentException> { store.add("key", "値".repeat(257)) }
          assertTrue(store.fileEntries().isEmpty())
          assertEquals(0, writes.get())
          store.add("A".repeat(64), "値".repeat(256)).saved.get(3, TimeUnit.SECONDS)
          assertEquals(1, writes.get())
        }
  }

  @Test
  fun newEntryAffectsExistingEngineBeforeDiskSaveCompletes() {
    val release = CountDownLatch(1)
    val started = CountDownLatch(1)
    val caller = Thread.currentThread()
    val engine =
        Japanizer(JapanizeSettings(enabled = true)) { error("Protected key must not reach Google") }
    JapanizeDictionaryStore(
            file,
            emptyMap(),
            save = { target, entries ->
              assertNotSame(caller, Thread.currentThread())
              started.countDown()
              check(release.await(3, TimeUnit.SECONDS))
              LunaImport.saveDictionary(target, entries)
            },
        )
        .use { store ->
          try {
            val added = store.add("kakezumou", "賭け相撲")
            assertTrue(started.await(3, TimeUnit.SECONDS))
            assertFalse(added.saved.isDone)
            assertFalse(store.canReloadSafely())
            assertEquals(
                "賭け相撲",
                engine.prepare("kakezumou", true, emptyList(), store.effective()).getNow(null).text,
            )
            release.countDown()
            added.saved.get(3, TimeUnit.SECONDS)
            assertTrue(store.canReloadSafely())
          } finally {
            release.countDown()
          }
        }
  }

  @Test
  fun configWinsAndRemovingFileEntryCannotRemoveConfig() {
    JapanizeDictionaryStore(file, mapOf("SPAWN" to "CONFIG"), mapOf("spawn" to "file")).use { store
      ->
      store.add("SPAWN", "edited").saved.get(3, TimeUnit.SECONDS)
      assertEquals("edited", store.fileEntries()["spawn"])
      assertEquals("CONFIG", store.effective()["spawn"])
      assertEquals("CONFIG", store.override("SPAWN"))
      val engine = Japanizer(JapanizeSettings(enabled = true)) { error("Protected word") }
      assertEquals(
          "CONFIG",
          engine.prepare("spawn", true, emptyList(), store.effective()).join().text,
      )
      store.remove("spawn")!!.saved.get(3, TimeUnit.SECONDS)
      assertTrue(store.fileEntries().isEmpty())
      assertEquals("CONFIG", store.effective()["spawn"])
    }
  }

  @Test
  fun pagesAreSortedCountedAndBounded() {
    JapanizeDictionaryStore(file, emptyMap(), (1..11).associate { "key%02d".format(it) to "$it" })
        .use { store ->
          assertEquals(11, store.page(1).count)
          assertEquals(2, store.page(1).pages)
          assertEquals(10, store.page(1).entries.size)
          assertEquals(listOf("key11" to "11"), store.page(2).entries)
          assertFailsWith<IllegalArgumentException> { store.page(0) }
          assertFailsWith<IllegalArgumentException> { store.page(3) }
        }
  }

  @Test
  fun queuedSavesAndLegacyImportCannotOverwriteLaterEdits() {
    val release = CountDownLatch(1)
    val writes = AtomicInteger()
    JapanizeDictionaryStore(
            file,
            emptyMap(),
            save = { target, entries ->
              if (writes.getAndIncrement() == 0) check(release.await(3, TimeUnit.SECONDS))
              LunaImport.saveDictionary(target, entries)
            },
        )
        .use { store ->
          try {
            store.add("first", "1")
            store.mergeImport(mapOf("spawn" to "imported"))
            val latest = store.add("SPAWN", "edited")
            release.countDown()
            latest.saved.get(3, TimeUnit.SECONDS)
            assertEquals(mapOf("first" to "1", "spawn" to "edited"), LunaImport.dictionary(file))
            assertEquals(3, writes.get())
          } finally {
            release.countDown()
          }
        }
  }

  @Test
  fun failedSaveIsReportedAndRetryPersistsActiveSnapshot() {
    val writes = AtomicInteger()
    JapanizeDictionaryStore(
            file,
            emptyMap(),
            save = { target, entries ->
              if (writes.getAndIncrement() == 0) error("fixture disk failure")
              LunaImport.saveDictionary(target, entries)
            },
        )
        .use { store ->
          assertFails { store.add("first", "1").saved.get(3, TimeUnit.SECONDS) }
          assertEquals("1", store.effective()["first"])
          store.add("second", "2").saved.get(3, TimeUnit.SECONDS)
          assertEquals(mapOf("first" to "1", "second" to "2"), LunaImport.dictionary(file))
        }
  }
}
