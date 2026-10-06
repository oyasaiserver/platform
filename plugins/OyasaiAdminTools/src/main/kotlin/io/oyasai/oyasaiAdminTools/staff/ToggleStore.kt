package io.oyasai.oyasaiAdminTools.staff

import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.util.UUID

class ToggleStore(private val db: AdminDb, private val feature: String) {
  init {
    require(feature in setOf("vanish", "socialspy"))
    db.ensureFeature(
        feature,
        1,
        listOf("CREATE TABLE ${feature}_players(uuid TEXT PRIMARY KEY, enabled INTEGER NOT NULL)"),
    )
  }

  fun load(uuid: UUID, initial: () -> Boolean = { false }): Boolean {
    val existing =
        db.readFeature { c ->
          c.prepareStatement("SELECT enabled FROM ${feature}_players WHERE uuid=?").use { s ->
            s.setString(1, uuid.toString())
            s.executeQuery().use { r -> if (r.next()) r.getInt(1) != 0 else null }
          }
        }
    if (existing != null) return existing
    val value = initial()
    save(uuid, value) // Even absent userdata/false is a durable one-time import marker.
    return value
  }

  fun save(uuid: UUID, value: Boolean) =
      db.writeFeature { c ->
        c.prepareStatement(
                "INSERT INTO ${feature}_players VALUES (?,?) ON CONFLICT(uuid) DO UPDATE SET enabled=excluded.enabled"
            )
            .use { s ->
              s.setString(1, uuid.toString())
              s.setInt(2, if (value) 1 else 0)
              s.executeUpdate()
              Unit
            }
      }
}
