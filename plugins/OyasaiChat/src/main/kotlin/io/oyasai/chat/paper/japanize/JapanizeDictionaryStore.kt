package io.oyasai.chat.paper.japanize

import java.io.File
import java.util.Locale
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors
import java.util.concurrent.atomic.AtomicInteger

data class DictionaryChange(
    val key: String,
    val oldValue: String?,
    val newValue: String?,
    val saved: CompletableFuture<Void>,
)

data class DictionaryPage(
    val count: Int,
    val page: Int,
    val pages: Int,
    val entries: List<Pair<String, String>>,
)

/** File entries are editable; config overrides remain separate and always win. */
class JapanizeDictionaryStore(
    private val file: File,
    overrides: Map<String, String>,
    initial: Map<String, String> = LunaImport.dictionary(file),
    private val save: (File, Map<String, String>) -> Unit = LunaImport::saveDictionary,
) : AutoCloseable {
  private val overrides = lowercaseKeys(overrides)
  @Volatile private var entries = lowercaseKeys(initial)
  private val pending = AtomicInteger()
  private val writer =
      Executors.newSingleThreadExecutor { task -> Thread(task, "OyasaiChat-dictionary-writer") }
  private var closed = false

  fun fileEntries(): Map<String, String> = entries.toMap()

  fun effective(): Map<String, String> = entries + overrides

  fun override(key: String): String? = overrides[normalizeKey(key)]

  @Synchronized
  fun add(key: String, value: String): DictionaryChange {
    val normalized = normalizeKey(key)
    require(value.length <= 256) { "Dictionary value must be at most 256 characters." }
    check(!closed) { "Dictionary is closed." }
    val old = entries[normalized]
    entries = entries + (normalized to value)
    return DictionaryChange(normalized, old, value, persist(entries))
  }

  @Synchronized
  fun remove(key: String): DictionaryChange? {
    val normalized = normalizeKey(key)
    check(!closed) { "Dictionary is closed." }
    val old = entries[normalized] ?: return null
    entries = entries - normalized
    return DictionaryChange(normalized, old, null, persist(entries))
  }

  /** Legacy import retains its existing acceptance rules, but shares the serial atomic writer. */
  @Synchronized
  fun mergeImport(imported: Map<String, String>): CompletableFuture<Void> {
    check(!closed) { "Dictionary is closed." }
    entries = entries + lowercaseKeys(imported)
    return persist(entries)
  }

  fun page(page: Int, pageSize: Int = 10): DictionaryPage {
    require(pageSize > 0)
    val snapshot = entries.toSortedMap()
    val pages = ((snapshot.size + pageSize - 1) / pageSize).coerceAtLeast(1)
    require(page in 1..pages) { "Page must be between 1 and $pages." }
    return DictionaryPage(
        snapshot.size,
        page,
        pages,
        snapshot.entries.drop((page - 1) * pageSize).take(pageSize).map { it.key to it.value },
    )
  }

  private fun persist(snapshot: Map<String, String>): CompletableFuture<Void> {
    val done = CompletableFuture<Void>()
    pending.incrementAndGet()
    writer.execute {
      val failure = runCatching { save(file, snapshot) }.exceptionOrNull()
      pending.decrementAndGet()
      if (failure == null) done.complete(null) else done.completeExceptionally(failure)
    }
    return done
  }

  fun canReloadSafely(): Boolean = pending.get() == 0

  @Synchronized
  override fun close() {
    closed = true
    writer.shutdown()
  }

  companion object {
    fun normalizeKey(key: String): String {
      val normalized = key.lowercase(Locale.ROOT)
      require(
          normalized.isNotEmpty() &&
              normalized.length <= 64 &&
              normalized.none { it.isWhitespace() || it.isISOControl() }
      ) {
        "Dictionary key must contain 1–64 characters without whitespace or control characters."
      }
      return normalized
    }

    private fun lowercaseKeys(values: Map<String, String>): Map<String, String> =
        values.mapKeys { it.key.lowercase(Locale.ROOT) }.toMap()
  }
}
