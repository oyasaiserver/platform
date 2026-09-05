package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

class ResourcePackPreferenceRepository(private val db: DatabaseManager) {
  fun get(player: UUID): ResourcePackPreference =
      db.transaction { conn ->
        conn
            .prepareStatement("SELECT allowed FROM resource_pack_preferences WHERE player_uuid = ?")
            .use { statement ->
              statement.setBytes(1, UuidUtil.toBytes(player))
              statement.executeQuery().use { rows ->
                if (rows.next() && rows.getInt(1) == 1) ResourcePackPreference.ALLOW
                else ResourcePackPreference.DENY
              }
            }
      }

  fun set(player: UUID, preference: ResourcePackPreference) =
      db.transaction { conn ->
        conn
            .prepareStatement(
                "INSERT INTO resource_pack_preferences(player_uuid,allowed,updated_at) VALUES(?,?,?) ON CONFLICT(player_uuid) DO UPDATE SET allowed=excluded.allowed,updated_at=excluded.updated_at"
            )
            .use { statement ->
              statement.setBytes(1, UuidUtil.toBytes(player))
              statement.setInt(2, if (preference == ResourcePackPreference.ALLOW) 1 else 0)
              statement.setLong(3, System.currentTimeMillis())
              statement.executeUpdate()
            }
      }
}
