package com.github.srain3.sociallikes.datas

import java.nio.file.Files
import java.nio.file.Path
import java.sql.DriverManager
import kotlin.system.exitProcess

/** Standalone entry point used by the stopped-server production release workflow. */
object TimestampMigrationMain {
  @JvmStatic
  fun main(args: Array<String>) {
    try {
      require(args.size in 2..3) {
        "Usage: TimestampMigrationMain <preflight|dry-run|apply|verify> <db-path> [release-id]"
      }
      val command = args[0]
      val dbPath = Path.of(args[1]).toAbsolutePath().normalize()
      val releaseId = args.getOrNull(2) ?: "manual"
      require(Files.isRegularFile(dbPath)) { "SQLite database does not exist: $dbPath" }

      Class.forName("org.sqlite.JDBC")
      DriverManager.getConnection("jdbc:sqlite:$dbPath").use { connection ->
        connection.createStatement().use { statement ->
          statement.execute("PRAGMA busy_timeout = 30000")
          statement.execute("PRAGMA foreign_keys = ON")
        }

        val report =
            when (command) {
              "preflight" -> {
                TimestampEpochMigration.checkpoint(connection)
                TimestampEpochMigration.preflight(connection)
              }
              "dry-run" -> TimestampEpochMigration.migrate(connection, dryRun = true, releaseId)
              "apply" ->
                  TimestampEpochMigration.migrate(connection, dryRun = false, releaseId).also {
                    TimestampEpochMigration.checkpoint(connection)
                  }
              "verify" -> TimestampEpochMigration.verify(connection)
              else -> error("Unknown command: $command")
            }
        println("SL3_TIMESTAMP_MIGRATION status=ok command=$command ${report.summary()}")
      }
    } catch (error: Throwable) {
      System.err.println(
          "SL3_TIMESTAMP_MIGRATION status=error message=${error.message ?: error.javaClass.simpleName}"
      )
      error.printStackTrace(System.err)
      exitProcess(1)
    }
  }
}
