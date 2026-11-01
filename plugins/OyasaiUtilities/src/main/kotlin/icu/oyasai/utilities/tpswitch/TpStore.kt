package icu.oyasai.utilities.tpswitch

import icu.oyasai.utilities.storage.transaction
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

internal data class TpSettings(
    var open: Boolean = true,
    val whiteIds: MutableSet<UUID> = linkedSetOf(),
    val blackIds: MutableSet<UUID> = linkedSetOf(),
    val whiteNames: MutableSet<String> = linkedSetOf(),
    val blackNames: MutableSet<String> = linkedSetOf(),
) {
  fun snapshot() =
      TpSettings(
          open,
          whiteIds.toMutableSet(),
          blackIds.toMutableSet(),
          whiteNames.toMutableSet(),
          blackNames.toMutableSet(),
      )
}

internal fun denied(settings: TpSettings, sender: UUID, op: Boolean): Boolean =
    !op && if (settings.open) sender in settings.blackIds else sender !in settings.whiteIds

internal class TpStore(private val file: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA journal_mode=WAL")
      it.execute("PRAGMA synchronous=FULL")
      it.execute("PRAGMA busy_timeout=5000")
    }
    val version =
        connection.createStatement().use { statement ->
          statement.executeQuery("PRAGMA user_version").use { rows ->
            rows.next()
            rows.getInt(1)
          }
        }
    when (version) {
      0 -> {
        check(
            !tableExists("tp_players") &&
                !tableExists("tp_ids") &&
                !tableExists("tp_names") &&
                !tableExists("tp_meta")
        ) {
          "TPswitch tables exist without a schema version"
        }
        connection.transaction {
          connection.createStatement().use {
            it.execute("CREATE TABLE tp_players (owner TEXT PRIMARY KEY, open INTEGER NOT NULL)")
            it.execute(
                "CREATE TABLE tp_ids (owner TEXT NOT NULL, kind TEXT NOT NULL, member TEXT NOT NULL, PRIMARY KEY(owner, kind, member))"
            )
            it.execute(
                "CREATE TABLE tp_names (owner TEXT NOT NULL, kind TEXT NOT NULL, name TEXT NOT NULL, PRIMARY KEY(owner, kind, name))"
            )
            it.execute("CREATE TABLE tp_meta (key TEXT PRIMARY KEY, value INTEGER NOT NULL)")
            it.execute("PRAGMA user_version = 1")
          }
        }
      }
      1 ->
          check(listOf("tp_players", "tp_ids", "tp_names", "tp_meta").all(::tableExists)) {
            "TPswitch schema is incomplete"
          }
      else -> error("unsupported TPswitch schema version $version")
    }
  }

  fun load(): MutableMap<UUID, TpSettings> {
    val players = linkedMapOf<UUID, TpSettings>()
    connection.createStatement().use { statement ->
      statement.executeQuery("SELECT owner, open FROM tp_players ORDER BY rowid").use { rows ->
        while (rows.next()) players[UUID.fromString(rows.getString(1))] =
            TpSettings(rows.getInt(2) != 0)
      }
      statement.executeQuery("SELECT owner, kind, member FROM tp_ids ORDER BY rowid").use { rows ->
        while (rows.next()) {
          val state = players[UUID.fromString(rows.getString(1))] ?: error("orphan TP id")
          val target = if (rows.getString(2) == "white") state.whiteIds else state.blackIds
          target.add(UUID.fromString(rows.getString(3)))
        }
      }
      statement.executeQuery("SELECT owner, kind, name FROM tp_names ORDER BY rowid").use { rows ->
        while (rows.next()) {
          val state = players[UUID.fromString(rows.getString(1))] ?: error("orphan TP name")
          val target = if (rows.getString(2) == "white") state.whiteNames else state.blackNames
          target.add(rows.getString(3))
        }
      }
    }
    return players
  }

  fun save(owner: UUID, settings: TpSettings) = connection.transaction { saveRows(owner, settings) }

  private fun saveRows(owner: UUID, settings: TpSettings) {
    val id = owner.toString()
    connection
        .prepareStatement(
            "INSERT INTO tp_players(owner, open) VALUES (?, ?) ON CONFLICT(owner) DO UPDATE SET open = excluded.open"
        )
        .use {
          it.setString(1, id)
          it.setInt(2, if (settings.open) 1 else 0)
          it.executeUpdate()
        }
    for (table in listOf("tp_ids", "tp_names")) {
      connection.prepareStatement("DELETE FROM $table WHERE owner = ?").use {
        it.setString(1, id)
        it.executeUpdate()
      }
    }
    connection.prepareStatement("INSERT INTO tp_ids (owner, kind, member) VALUES (?, ?, ?)").use {
        statement ->
      for ((kind, ids) in listOf("white" to settings.whiteIds, "black" to settings.blackIds)) {
        for (member in ids) {
          statement.setString(1, id)
          statement.setString(2, kind)
          statement.setString(3, member.toString())
          statement.addBatch()
        }
      }
      statement.executeBatch()
    }
    connection.prepareStatement("INSERT INTO tp_names (owner, kind, name) VALUES (?, ?, ?)").use {
        statement ->
      for ((kind, names) in
          listOf("white" to settings.whiteNames, "black" to settings.blackNames)) {
        for (name in names) {
          statement.setString(1, id)
          statement.setString(2, kind)
          statement.setString(3, name)
          statement.addBatch()
        }
      }
      statement.executeBatch()
    }
  }

  private fun tableExists(name: String): Boolean =
      connection
          .prepareStatement("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?")
          .use {
            it.setString(1, name)
            it.executeQuery().use { rows -> rows.next() }
          }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }
}
