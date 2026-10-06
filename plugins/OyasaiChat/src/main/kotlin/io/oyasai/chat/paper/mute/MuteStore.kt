package io.oyasai.chat.paper.mute

import io.oyasai.chat.paper.storage.ChatDatabase
import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

class MuteStore(private val database: ChatDatabase, private val userdata: File) {
  private val cache = mutableMapOf<UUID, MuteState>()

  init {
    database.migrate(
        "mute",
        listOf({ connection ->
          connection.createStatement().use {
            it.execute(
                """CREATE TABLE mute_players (
          uuid TEXT PRIMARY KEY, muted INTEGER NOT NULL CHECK(muted IN (0,1)),
          expires_at INTEGER NOT NULL, reason TEXT,
          essentials_imported INTEGER NOT NULL CHECK(essentials_imported = 1),
          essentials_cleanup_pending INTEGER NOT NULL CHECK(essentials_cleanup_pending IN (0,1)))"""
            )
          }
        }),
    )
  }

  fun get(uuid: UUID): MuteState =
      cache.getOrPut(uuid) {
        database.read { connection ->
          connection.prepareStatement("SELECT * FROM mute_players WHERE uuid = ?").use {
            it.setString(1, uuid.toString())
            it.executeQuery().use { rows ->
              if (rows.next())
                  MuteState(
                      rows.getBoolean("muted"),
                      rows.getLong("expires_at"),
                      rows.getString("reason"),
                      rows.getBoolean("essentials_cleanup_pending"),
                  )
              else null
            }
          }
        } ?: import(uuid).also { persist(uuid, it) }
      }

  private fun import(uuid: UUID): MuteState {
    val file = File(userdata, "$uuid.yml")
    if (!file.exists()) return MuteState()
    // load(File) throws for malformed YAML, unlike loadConfiguration's silent defaults.
    val yaml = YamlConfiguration().apply { load(file) }
    require(!yaml.contains("muted") || yaml.isBoolean("muted")) { "Invalid muted in $file" }
    val timeoutKey = if (yaml.contains("timestamps.mute")) "timestamps.mute" else "mute-timeout"
    require(!yaml.contains(timeoutKey) || yaml.get(timeoutKey) is Number) {
      "Invalid timeout in $file"
    }
    require(!yaml.contains("mute-reason") || yaml.get("mute-reason") is String) {
      "Invalid reason in $file"
    }
    return MuteState(
        yaml.getBoolean("muted"),
        yaml.getLong(timeoutKey),
        yaml.getString("mute-reason"),
        essentialsCleanupPending = yaml.getBoolean("muted"),
    )
  }

  fun put(uuid: UUID, state: MuteState) {
    persist(uuid, state)
    cache[uuid] = state
  }

  private fun persist(uuid: UUID, state: MuteState) {
    // Wait for the durable commit before changing live state or clearing Essentials.
    database.writeAndWait { connection ->
      connection
          .prepareStatement(
              """INSERT INTO mute_players VALUES (?, ?, ?, ?, 1, ?)
        ON CONFLICT(uuid) DO UPDATE SET muted=excluded.muted, expires_at=excluded.expires_at,
        reason=excluded.reason, essentials_cleanup_pending=excluded.essentials_cleanup_pending"""
          )
          .use {
            it.setString(1, uuid.toString())
            it.setBoolean(2, state.muted)
            it.setLong(3, state.expiresAt)
            it.setString(4, state.reason)
            it.setBoolean(5, state.essentialsCleanupPending)
            it.executeUpdate()
          }
    }
  }

  fun loadedIds(): List<UUID> = cache.keys.toList()

  fun unload(uuid: UUID) {
    cache.remove(uuid)
  }
}
