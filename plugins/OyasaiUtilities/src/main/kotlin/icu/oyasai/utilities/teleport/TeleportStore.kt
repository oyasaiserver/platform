package icu.oyasai.utilities.teleport

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.io.File
import java.sql.Connection
import java.sql.ResultSet
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.configuration.file.YamlConfiguration

data class TeleportData(
    val homes: MutableMap<String, SavedLocation> = linkedMapOf(),
    var jailed: Boolean = false,
    var jail: String? = null,
    var jailTimeout: Long = 0,
    var returnLocation: SavedLocation? = null,
    var onlineJailUntilTicks: Long = 0,
) {
  fun snapshot() = copy(homes = LinkedHashMap(homes))
}

class TeleportStore(
    private val database: UtilitiesDatabase,
    private val essentialsDirectory: File,
) {
  private val cache = mutableMapOf<UUID, TeleportData>()
  private val pending = ConcurrentHashMap<UUID, TeleportData>()

  init {
    database.migrate(
        "teleport",
        listOf({ connection ->
          connection.createStatement().use {
            it.execute(
                """CREATE TABLE teleport_players (
          player_uuid TEXT PRIMARY KEY,
          essentials_imported INTEGER NOT NULL CHECK(essentials_imported = 1),
          jailed INTEGER NOT NULL CHECK(jailed IN (0,1)), jail TEXT,
          jail_timeout INTEGER NOT NULL, online_jail_until_ticks INTEGER NOT NULL,
          return_world_uuid TEXT, return_world_name TEXT,
          return_x REAL, return_y REAL, return_z REAL, return_yaw REAL, return_pitch REAL
        )"""
            )
            it.execute(
                """CREATE TABLE teleport_homes (
          player_uuid TEXT NOT NULL, name TEXT NOT NULL,
          world_uuid TEXT, world_name TEXT, x REAL NOT NULL, y REAL NOT NULL, z REAL NOT NULL,
          yaw REAL NOT NULL, pitch REAL NOT NULL,
          PRIMARY KEY(player_uuid, name), CHECK(world_uuid IS NOT NULL OR world_name IS NOT NULL)
        )"""
            )
          }
        }),
    )
  }

  fun get(id: UUID): TeleportData =
      cache.getOrPut(id) {
        pending[id]?.snapshot()
            ?: database.read { load(it, id) }
            ?: importLegacy(id).also { save(id, it) }
      }

  private fun importLegacy(id: UUID): TeleportData {
    val file = File(essentialsDirectory, "$id.yml")
    val yaml = YamlConfiguration().apply { if (file.exists()) load(file) }
    val homes = linkedMapOf<String, SavedLocation>()
    yaml.getConfigurationSection("homes")?.let { section ->
      section.getKeys(false).forEach { name ->
        homes[name] = SavedLocation.read(requireNotNull(section.getConfigurationSection(name)))
      }
    }
    return TeleportData(
        homes,
        yaml.getBoolean("jailed"),
        yaml.getString("jail"),
        yaml.getLong("timestamps.jail", yaml.getLong("jail-timeout")),
        yaml.getConfigurationSection("lastlocation")?.let { SavedLocation.read(it) },
        yaml.getLong("timestamps.onlinejail"),
    )
  }

  private fun load(c: Connection, id: UUID): TeleportData? {
    val state =
        c.prepareStatement("SELECT * FROM teleport_players WHERE player_uuid = ?").use {
          it.setString(1, id.toString())
          it.executeQuery().use { row ->
            if (!row.next()) null
            else {
              check(row.getInt("essentials_imported") == 1)
              TeleportData(
                  jailed = row.getBoolean("jailed"),
                  jail = row.getString("jail"),
                  jailTimeout = row.getLong("jail_timeout"),
                  returnLocation =
                      if (row.getObject("return_x") == null) null else location(row, "return_"),
                  onlineJailUntilTicks = row.getLong("online_jail_until_ticks"),
              )
            }
          }
        }
    // Homes may already exist without a marker (manual recovery): never overwrite local rows.
    val homes =
        c.prepareStatement("SELECT * FROM teleport_homes WHERE player_uuid = ?").use {
          it.setString(1, id.toString())
          it.executeQuery().use { rows ->
            linkedMapOf<String, SavedLocation>().apply {
              while (rows.next()) put(rows.getString("name"), location(rows))
            }
          }
        }
    return (state ?: if (homes.isNotEmpty()) TeleportData() else null)?.also {
      it.homes.putAll(homes)
      // Recovered local homes are authoritative too; persist their marker before source retirement.
      if (state == null) save(id, it)
    }
  }

  private fun location(row: ResultSet, prefix: String = "") =
      SavedLocation(
          row.getString("${prefix}world_uuid"),
          row.getString("${prefix}world_name"),
          row.getDouble("${prefix}x"),
          row.getDouble("${prefix}y"),
          row.getDouble("${prefix}z"),
          row.getFloat("${prefix}yaw"),
          row.getFloat("${prefix}pitch"),
      )

  fun save(id: UUID, state: TeleportData = get(id)) {
    val snapshot = state.snapshot()
    pending[id] = snapshot
    database.write { c ->
      c.autoCommit = false
      try {
        c.prepareStatement(
                """INSERT INTO teleport_players VALUES (?,1,?,?,?,?,?,?,?,?,?,?,?)
            ON CONFLICT(player_uuid) DO UPDATE SET essentials_imported=1,
            jailed=excluded.jailed,jail=excluded.jail,jail_timeout=excluded.jail_timeout,
            online_jail_until_ticks=excluded.online_jail_until_ticks,
            return_world_uuid=excluded.return_world_uuid,return_world_name=excluded.return_world_name,
            return_x=excluded.return_x,return_y=excluded.return_y,return_z=excluded.return_z,
            return_yaw=excluded.return_yaw,return_pitch=excluded.return_pitch"""
            )
            .use {
              it.setString(1, id.toString())
              it.setBoolean(2, snapshot.jailed)
              it.setString(3, snapshot.jail)
              it.setLong(4, snapshot.jailTimeout)
              it.setLong(5, snapshot.onlineJailUntilTicks)
              val location = snapshot.returnLocation
              it.setString(6, location?.worldUuid)
              it.setString(7, location?.worldName)
              it.setObject(8, location?.x)
              it.setObject(9, location?.y)
              it.setObject(10, location?.z)
              it.setObject(11, location?.yaw)
              it.setObject(12, location?.pitch)
              it.executeUpdate()
            }
        c.prepareStatement("DELETE FROM teleport_homes WHERE player_uuid = ?").use {
          it.setString(1, id.toString())
          it.executeUpdate()
        }
        c.prepareStatement("INSERT INTO teleport_homes VALUES (?,?,?,?,?,?,?,?,?)").use { statement
          ->
          snapshot.homes.forEach { (name, location) ->
            statement.setString(1, id.toString())
            statement.setString(2, name)
            statement.setString(3, location.worldUuid)
            statement.setString(4, location.worldName)
            statement.setDouble(5, location.x)
            statement.setDouble(6, location.y)
            statement.setDouble(7, location.z)
            statement.setFloat(8, location.yaw)
            statement.setFloat(9, location.pitch)
            statement.addBatch()
          }
          statement.executeBatch()
        }
        c.commit()
        pending.remove(id, snapshot)
      } catch (failure: Throwable) {
        c.rollback()
        throw failure
      } finally {
        c.autoCommit = true
      }
    }
  }

  fun forget(id: UUID) {
    cache.remove(id)
  }

  fun flush() {
    database.flush()
  }
}
