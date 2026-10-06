package icu.oyasai.utilities.playerstate

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.io.File
import java.sql.Connection
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.configuration.file.YamlConfiguration

data class SavedPlayerState(
    var nickname: String? = null,
    var flyMode: Boolean = false,
    var flying: Boolean = false,
    var flySpeed: Float = 0.1f,
    var walkSpeed: Float = 0.2f,
    var lastName: String = "",
    var lastHeal: Long = 0,
)

/** Cache belongs to the server thread; queued writes only see immutable snapshots. */
class PlayerStateStore(
    private val database: UtilitiesDatabase,
    private val essentialsDirectory: File,
) {
  private val cache = mutableMapOf<UUID, SavedPlayerState>()
  private val pending = ConcurrentHashMap<UUID, SavedPlayerState>()

  init {
    database.migrate(
        "playerstate",
        listOf({ connection ->
          connection.createStatement().use {
            it.execute(
                """
                CREATE TABLE playerstate_players (
                  player_uuid TEXT PRIMARY KEY,
                  nickname TEXT,
                  flymode INTEGER NOT NULL CHECK(flymode IN (0, 1)),
                  flying INTEGER NOT NULL CHECK(flying IN (0, 1)),
                  fly_speed REAL NOT NULL,
                  walk_speed REAL NOT NULL,
                  last_name TEXT NOT NULL,
                  last_heal INTEGER NOT NULL,
                  essentials_imported INTEGER NOT NULL CHECK(essentials_imported = 1)
                )
                """
                    .trimIndent()
            )
          }
        }),
    )
  }

  fun get(id: UUID): SavedPlayerState =
      cache.getOrPut(id) {
        // Rejoining before the queued quit save commits must use the latest snapshot.
        pending[id]?.copy()
            ?: database.read { connection -> load(connection, id) }
            ?: run {
              val legacy = File(essentialsDirectory, "$id.yml")
              val y = YamlConfiguration().apply { if (legacy.exists()) load(legacy) }
              SavedPlayerState(
                      nickname = y.getString("nickname"),
                      flyMode = y.getBoolean("flymode"),
                      lastHeal = y.getLong("timestamps.lastheal"),
                  )
                  .also { save(id, it) }
            }
      }

  private fun load(connection: Connection, id: UUID): SavedPlayerState? =
      connection.prepareStatement("SELECT * FROM playerstate_players WHERE player_uuid = ?").use {
        it.setString(1, id.toString())
        it.executeQuery().use { rows ->
          if (!rows.next()) null
          else {
            check(rows.getInt("essentials_imported") == 1) { "Missing migration marker: $id" }
            SavedPlayerState(
                rows.getString("nickname"),
                rows.getBoolean("flymode"),
                rows.getBoolean("flying"),
                rows.getFloat("fly_speed"),
                rows.getFloat("walk_speed"),
                rows.getString("last_name"),
                rows.getLong("last_heal"),
            )
          }
        }
      }

  fun save(id: UUID, state: SavedPlayerState = get(id)) {
    val snapshot = state.copy()
    pending[id] = snapshot
    database.write { connection ->
      connection
          .prepareStatement(
              """
              INSERT INTO playerstate_players
                (player_uuid, nickname, flymode, flying, fly_speed, walk_speed, last_name, last_heal, essentials_imported)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1)
              ON CONFLICT(player_uuid) DO UPDATE SET
                nickname = excluded.nickname, flymode = excluded.flymode, flying = excluded.flying,
                fly_speed = excluded.fly_speed, walk_speed = excluded.walk_speed,
                last_name = excluded.last_name, last_heal = excluded.last_heal,
                essentials_imported = excluded.essentials_imported
              """
                  .trimIndent()
          )
          .use {
            it.setString(1, id.toString())
            it.setString(2, snapshot.nickname)
            it.setBoolean(3, snapshot.flyMode)
            it.setBoolean(4, snapshot.flying)
            it.setFloat(5, snapshot.flySpeed)
            it.setFloat(6, snapshot.walkSpeed)
            it.setString(7, snapshot.lastName)
            it.setLong(8, snapshot.lastHeal)
            it.executeUpdate()
          }
      pending.remove(id, snapshot)
    }
  }

  fun forget(id: UUID) {
    cache.remove(id)
  }
}
