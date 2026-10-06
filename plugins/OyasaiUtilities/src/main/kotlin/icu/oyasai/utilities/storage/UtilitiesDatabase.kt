package icu.oyasai.utilities.storage

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit

/** One shared database; SQL writes and feature migrations are serialized off the server thread. */
class UtilitiesDatabase(file: File, private val onWriteFailure: (Throwable) -> Unit = {}) :
    AutoCloseable {
  private val writer: Connection
  private val reader: Connection
  private val executor =
      Executors.newSingleThreadExecutor { task -> Thread(task, "OyasaiUtilities-SQLite") }
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
  }

  private fun connect(file: File): Connection {
    val connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    try {
      connection.createStatement().use {
        it.execute("PRAGMA journal_mode=WAL")
        it.execute("PRAGMA synchronous=FULL")
        it.execute("PRAGMA busy_timeout=5000")
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
