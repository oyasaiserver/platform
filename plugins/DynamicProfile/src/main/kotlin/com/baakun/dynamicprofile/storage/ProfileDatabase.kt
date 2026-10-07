package com.baakun.dynamicprofile.storage

import com.baakun.dynamicprofile.data.PromotionHistory
import com.baakun.dynamicprofile.data.PromotionRecord
import com.baakun.dynamicprofile.data.PromotionType
import com.baakun.dynamicprofile.data.Stats
import com.google.gson.Gson
import com.google.gson.JsonParser
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

/** One shared database; SQL writes and feature migrations are serialized off the server thread. */
class ProfileDatabase(file: File, private val onWriteFailure: (Throwable) -> Unit = {}) :
    AutoCloseable {
  private val writer: Connection
  private val reader: Connection
  private val executor =
      Executors.newSingleThreadExecutor { task -> Thread(task, "DynamicProfile-SQLite") }
  @Volatile private var writeFailure: Throwable? = null

  init {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    writer = connect(file)
    try {
      writer.createStatement().use {
        it.execute(
            "CREATE TABLE IF NOT EXISTS schema_versions (feature TEXT PRIMARY KEY, version INTEGER NOT NULL CHECK(version >= 0))"
        )
      }
      reader = connect(file)
    } catch (failure: Throwable) {
      writer.close()
      executor.shutdown()
      throw failure
    }
    try {
      migrate(
          "profiles",
          listOf { c ->
            c.createStatement().use {
              it.execute("CREATE TABLE profiles (uuid TEXT PRIMARY KEY, stats_json TEXT NOT NULL)")
              it.execute(
                  """CREATE TABLE promotions (
            uuid TEXT NOT NULL REFERENCES profiles(uuid) ON DELETE CASCADE,
            position INTEGER NOT NULL,
            type TEXT NOT NULL, new_rank TEXT NOT NULL, previous_rank TEXT NOT NULL,
            promoted_by TEXT NOT NULL, is_forced INTEGER NOT NULL, date TEXT NOT NULL,
            note TEXT NOT NULL, played_sec INTEGER NOT NULL, last_build_id INTEGER NOT NULL,
            builds INTEGER NOT NULL, last_lv INTEGER NOT NULL, last_exp INTEGER NOT NULL,
            PRIMARY KEY (uuid, position))"""
              )
              it.execute("CREATE INDEX promotions_date ON promotions(date)")
              it.execute("CREATE TABLE legacy_import_failures (filename TEXT PRIMARY KEY)")
            }
          },
      )
    } catch (failure: Throwable) {
      reader.close()
      writer.close()
      executor.shutdown()
      throw failure
    }
  }

  private fun connect(file: File): Connection {
    val connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    try {
      connection.createStatement().use {
        it.execute("PRAGMA journal_mode=WAL")
        it.execute("PRAGMA synchronous=FULL")
        it.execute("PRAGMA busy_timeout=5000")
        it.execute("PRAGMA foreign_keys=ON")
      }
      return connection
    } catch (failure: Throwable) {
      connection.close()
      throw failure
    }
  }

  /** Call during feature enable. Each numbered step and its version commit together. */
  fun migrate(feature: String, migrations: List<(Connection) -> Unit>) {
    require(feature.matches(Regex("[a-z][a-z0-9_]*")))
    executor
        .submit {
          writer.autoCommit = false
          try {
            val version =
                writer
                    .prepareStatement("SELECT version FROM schema_versions WHERE feature = ?")
                    .use {
                      it.setString(1, feature)
                      it.executeQuery().use { rows -> if (rows.next()) rows.getInt(1) else 0 }
                    }
            check(version in 0..migrations.size) { "Unsupported $feature schema version $version" }
            for (index in version until migrations.size) {
              migrations[index](writer)
              writer
                  .prepareStatement(
                      "INSERT INTO schema_versions(feature, version) VALUES (?, ?) ON CONFLICT(feature) DO UPDATE SET version = excluded.version"
                  )
                  .use {
                    it.setString(1, feature)
                    it.setInt(2, index + 1)
                    it.executeUpdate()
                  }
            }
            writer.commit()
          } catch (failure: Throwable) {
            writer.rollback()
            throw failure
          } finally {
            writer.autoCommit = true
          }
        }
        .get()
  }

  @Synchronized fun <T> read(block: (Connection) -> T): T = block(reader)

  fun write(block: (Connection) -> Unit) {
    executor.execute {
      try {
        block(writer)
      } catch (failure: Throwable) {
        writeFailure = failure
        onWriteFailure(failure)
      }
    }
  }

  data class ImportResult(val imported: Boolean, val loaded: Int, val failedFiles: List<String>)

  private val gson = Gson()

  /**
   * Missing legacy fields retain Stats' constructor defaults; explicit invalid values are rejected.
   */
  private fun decode(json: String): Stats {
    val objectJson = JsonParser.parseString(json)
    require(objectJson.isJsonObject) { "Expected a stats object" }
    val stats = requireNotNull(gson.fromJson(objectJson, Stats::class.java))
    requireNotNull(stats.recommends)
    requireNotNull(stats.friends)
    requireNotNull(stats.promotions)
    requireNotNull(stats.promotions.records)
    requireNotNull(stats.lastLogin)
    requireNotNull(stats.introduction)
    requireNotNull(stats.uuid)
    UUID.fromString(stats.uuid)
    stats.promotions.records.forEach { record ->
      requireNotNull(record)
      requireNotNull(record.type)
      requireNotNull(record.newRank)
      requireNotNull(record.previousRank)
      requireNotNull(record.promotedBy)
      requireNotNull(record.date)
      requireNotNull(record.note)
    }
    return stats
  }

  private fun transaction(block: (Connection) -> Unit) {
    writer.autoCommit = false
    try {
      block(writer)
      writer.commit()
    } catch (failure: Throwable) {
      writer.rollback()
      throw failure
    } finally {
      writer.autoCommit = true
    }
  }

  /**
   * Imports once, even if every source file is invalid or no source files exist. No source writes.
   */
  fun importLegacy(directory: File, onUnreadable: (String) -> Unit = {}): ImportResult =
      executor
          .submit<ImportResult> {
            var result = ImportResult(false, 0, emptyList())
            transaction { c ->
              val alreadyImported =
                  c.createStatement().use { s ->
                    s.executeQuery(
                            "SELECT version FROM schema_versions WHERE feature = 'legacy_json_import'"
                        )
                        .use { it.next() }
                  }
              if (!alreadyImported) {
                val empty =
                    c.createStatement().use { s ->
                      s.executeQuery("SELECT COUNT(*) FROM profiles").use {
                        it.next()
                        it.getInt(1) == 0
                      }
                    }
                var loaded = 0
                val failed = mutableListOf<String>()
                if (empty) {
                  val files =
                      if (directory.exists()) checkNotNull(directory.listFiles()) else emptyArray()
                  files
                      .filter { it.isFile && it.extension == "json" }
                      .sortedBy { it.name }
                      .forEach { file ->
                        val entry =
                            try {
                              val uuid = UUID.fromString(file.nameWithoutExtension)
                              val stats = decode(file.readText())
                              // The file name is the storage key, as in the original JSON loader.
                              uuid to stats
                            } catch (_: Exception) {
                              failed.add(file.name)
                              onUnreadable(file.name)
                              c.prepareStatement(
                                      "INSERT INTO legacy_import_failures(filename) VALUES (?)"
                                  )
                                  .use {
                                    it.setString(1, file.name)
                                    it.executeUpdate()
                                  }
                              null
                            }
                        if (entry != null) {
                          persist(
                              c,
                              entry.first,
                              encode(entry.second),
                              entry.second.promotions.records.toList(),
                          )
                          loaded++
                        }
                      }
                }
                c.createStatement().use {
                  it.executeUpdate(
                      "INSERT INTO schema_versions(feature, version) VALUES ('legacy_json_import', 1)"
                  )
                }
                result = ImportResult(true, loaded, failed)
              }
            }
            result
          }
          .get()

  /**
   * Promotions live exclusively in their own table. Gson includes timePlayed as well as @Expose
   * fields.
   */
  private fun encode(stats: Stats): String =
      gson.toJsonTree(stats).asJsonObject.also { it.remove("promotions") }.toString()

  /** Capture mutable data before queueing; the writer never traverses live Stats objects. */
  @Synchronized
  fun save(uuid: UUID, stats: Stats) {
    val json = encode(stats)
    val records = stats.promotions.records.toList()
    write { c -> transaction { persist(c, uuid, json, records) } }
  }

  private fun persist(c: Connection, uuid: UUID, json: String, records: List<PromotionRecord>) {
    c.prepareStatement(
            "INSERT INTO profiles(uuid, stats_json) VALUES (?, ?) ON CONFLICT(uuid) DO UPDATE SET stats_json = excluded.stats_json"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, json)
          it.executeUpdate()
        }
    c.prepareStatement("DELETE FROM promotions WHERE uuid = ?").use {
      it.setString(1, uuid.toString())
      it.executeUpdate()
    }
    c.prepareStatement("INSERT INTO promotions VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)")
        .use { statement ->
          records.forEachIndexed { position, record ->
            statement.setString(1, uuid.toString())
            statement.setInt(2, position)
            statement.setString(3, record.type.name)
            statement.setString(4, record.newRank)
            statement.setString(5, record.previousRank)
            statement.setString(6, record.promotedBy)
            statement.setBoolean(7, record.isForced)
            statement.setString(8, record.date)
            statement.setString(9, record.note)
            statement.setLong(10, record.playedSec)
            statement.setInt(11, record.lastBuildID)
            statement.setInt(12, record.builds)
            statement.setInt(13, record.lastLv)
            statement.setInt(14, record.lastExp)
            statement.addBatch()
          }
          statement.executeBatch()
        }
  }

  fun loadAll(): Map<UUID, Stats> = read { c ->
    val stats = linkedMapOf<UUID, Stats>()
    c.createStatement().use { s ->
      s.executeQuery("SELECT uuid, stats_json FROM profiles ORDER BY uuid").use { rows ->
        while (rows.next()) {
          val uuid = UUID.fromString(rows.getString("uuid"))
          stats[uuid] =
              decode(rows.getString("stats_json")).also { it.promotions = PromotionHistory() }
        }
      }
      s.executeQuery("SELECT * FROM promotions ORDER BY uuid, position").use { rows ->
        while (rows.next()) {
          stats
              .getValue(UUID.fromString(rows.getString("uuid")))
              .promotions
              .records
              .add(
                  PromotionRecord(
                      type = PromotionType.valueOf(rows.getString("type")),
                      newRank = rows.getString("new_rank"),
                      previousRank = rows.getString("previous_rank"),
                      promotedBy = rows.getString("promoted_by"),
                      isForced = rows.getBoolean("is_forced"),
                      date = rows.getString("date"),
                      note = rows.getString("note"),
                      playedSec = rows.getLong("played_sec"),
                      lastBuildID = rows.getInt("last_build_id"),
                      builds = rows.getInt("builds"),
                      lastLv = rows.getInt("last_lv"),
                      lastExp = rows.getInt("last_exp"),
                  )
              )
        }
      }
    }
    stats
  }

  fun failedUsers(): Set<UUID> = read { c ->
    val failed = mutableSetOf<UUID>()
    c.createStatement().use { s ->
      s.executeQuery("SELECT filename FROM legacy_import_failures").use { rows ->
        while (rows.next()) runCatching { UUID.fromString(rows.getString(1).removeSuffix(".json")) }
            .getOrNull()
            ?.let(failed::add)
      }
    }
    failed
  }

  /** Commit every previously queued write before retiring an imported source of truth. */
  fun flush() {
    executor.submit {}.get()
    writeFailure?.let {
      throw IllegalStateException("SQLite writes failed; source data must be retained", it)
    }
  }

  /** All submitted writes finish before either connection closes; failure is reported to caller. */
  override fun close() {
    executor.shutdown()
    var interrupted = false
    try {
      while (true) {
        try {
          if (executor.awaitTermination(1, TimeUnit.SECONDS)) break
        } catch (_: InterruptedException) {
          interrupted = true
        }
      }
      try {
        synchronized(this) { reader.close() }
      } finally {
        writer.close()
      }
      writeFailure?.let {
        throw IllegalStateException("SQLite writes failed; check earlier errors", it)
      }
    } finally {
      if (interrupted) Thread.currentThread().interrupt()
    }
  }
}
