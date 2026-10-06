package io.oyasai.oyasaiAdminTools.playerhistory

import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.io.File
import java.util.UUID
import org.bukkit.configuration.file.YamlConfiguration

data class LastLocation(
    val world: String,
    val worldName: String?,
    val x: Double,
    val y: Double,
    val z: Double,
    val yaw: Float,
    val pitch: Float,
)

data class PlayerHistory(
    val uuid: UUID,
    val name: String?,
    val login: Long,
    val logout: Long,
    val location: LastLocation?,
    val ip: String?,
)

class PlayerHistoryStore(private val db: AdminDb, private val userdata: File) {
  init {
    db.ensureFeature(
        "playerhistory",
        1,
        listOf(
            "CREATE TABLE playerhistory_players(uuid TEXT PRIMARY KEY, name TEXT, login INTEGER NOT NULL, logout INTEGER NOT NULL, world TEXT, world_name TEXT, x REAL, y REAL, z REAL, yaw REAL, pitch REAL, ip TEXT)"
        ),
    )
  }

  fun get(uuid: UUID, name: String?): PlayerHistory {
    val existing =
        db.readFeature { c ->
          c.prepareStatement("SELECT * FROM playerhistory_players WHERE uuid=?").use { s ->
            s.setString(1, uuid.toString())
            s.executeQuery().use { r ->
              if (!r.next()) null
              else
                  PlayerHistory(
                      uuid,
                      r.getString("name"),
                      r.getLong("login"),
                      r.getLong("logout"),
                      r.getString("world")?.let {
                        LastLocation(
                            it,
                            r.getString("world_name"),
                            r.getDouble("x"),
                            r.getDouble("y"),
                            r.getDouble("z"),
                            r.getFloat("yaw"),
                            r.getFloat("pitch"),
                        )
                      },
                      r.getString("ip"),
                  )
            }
          }
        }
    if (existing != null) return existing
    val yaml = readUserdata(userdata, uuid)
    val location =
        yaml.getString("logoutlocation.world")?.let { world ->
          LastLocation(
              world,
              yaml.getString("logoutlocation.world-name"),
              yaml.getDouble("logoutlocation.x"),
              yaml.getDouble("logoutlocation.y"),
              yaml.getDouble("logoutlocation.z"),
              yaml.getDouble("logoutlocation.yaw").toFloat(),
              yaml.getDouble("logoutlocation.pitch").toFloat(),
          )
        }
    return PlayerHistory(
            uuid,
            name,
            yaml.getLong("timestamps.login"),
            yaml.getLong("timestamps.logout"),
            location,
            yaml.getString("ipAddress"),
        )
        .also(::save)
  }

  fun joined(uuid: UUID, name: String, now: Long, ip: String?) =
      get(uuid, name).copy(name = name, login = now, ip = ip).also(::save)

  fun quit(uuid: UUID, name: String, now: Long, location: LastLocation) =
      get(uuid, name).copy(name = name, logout = now, location = location).also(::save)

  private fun save(p: PlayerHistory) =
      db.writeFeature { c ->
        c.prepareStatement(
                "INSERT INTO playerhistory_players VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(uuid) DO UPDATE SET name=excluded.name,login=excluded.login,logout=excluded.logout,world=excluded.world,world_name=excluded.world_name,x=excluded.x,y=excluded.y,z=excluded.z,yaw=excluded.yaw,pitch=excluded.pitch,ip=excluded.ip"
            )
            .use { s ->
              s.setString(1, p.uuid.toString())
              s.setString(2, p.name)
              s.setLong(3, p.login)
              s.setLong(4, p.logout)
              s.setString(5, p.location?.world)
              s.setString(6, p.location?.worldName)
              s.setObject(7, p.location?.x)
              s.setObject(8, p.location?.y)
              s.setObject(9, p.location?.z)
              s.setObject(10, p.location?.yaw)
              s.setObject(11, p.location?.pitch)
              s.setString(12, p.ip)
              s.executeUpdate()
              Unit
            }
      }
}

/** load() throws for corrupt YAML; never turn a failed import into a permanent empty record. */
fun readUserdata(folder: File, uuid: UUID): YamlConfiguration =
    YamlConfiguration().apply {
      val file = File(folder, "$uuid.yml")
      if (file.exists()) load(file)
    }
