package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

class ResourcePackPreferenceRepository(private val db: DatabaseManager) {
  data class AllowedEntry(val playerId: UUID, val updatedAtMillis: Long)
  data class AllowedPage(val total: Int, val entries: List<AllowedEntry>)

  fun get(player: UUID): ResourcePackPreference = db.transaction { conn ->
    conn.prepareStatement("SELECT allowed FROM resource_pack_preferences WHERE player_uuid = ?").use { statement ->
      statement.setBytes(1, UuidUtil.toBytes(player)); statement.executeQuery().use { rows ->
      if (rows.next() && rows.getInt(1) == 1) ResourcePackPreference.ALLOW else ResourcePackPreference.DENY
    }
    }
  }
  fun set(player: UUID, preference: ResourcePackPreference) = db.transaction { conn ->
    conn.prepareStatement("INSERT INTO resource_pack_preferences(player_uuid,allowed,updated_at) VALUES(?,?,?) ON CONFLICT(player_uuid) DO UPDATE SET allowed=excluded.allowed,updated_at=excluded.updated_at").use { statement ->
      statement.setBytes(1, UuidUtil.toBytes(player)); statement.setInt(2, if (preference == ResourcePackPreference.ALLOW) 1 else 0); statement.setLong(3, System.currentTimeMillis()); statement.executeUpdate()
    }
  }

  /** Returns one bounded, deterministic page without performing any player-profile lookup. */
  fun listAllowed(offset: Int, limit: Int): AllowedPage {
    require(offset in 0..1_000_000) { "offset out of range" }
    require(limit in 1..100) { "limit out of range" }
    return db.transaction { conn ->
      val total =
        conn.prepareStatement("SELECT COUNT(*) FROM resource_pack_preferences WHERE allowed = 1")
          .use { statement ->
            statement.executeQuery().use { rows -> if (rows.next()) rows.getInt(1) else 0 }
          }
      val entries = mutableListOf<AllowedEntry>()
      conn.prepareStatement(
        "SELECT player_uuid, updated_at FROM resource_pack_preferences " +
          "WHERE allowed = 1 ORDER BY updated_at DESC, hex(player_uuid) ASC LIMIT ? OFFSET ?",
      )
        .use { statement ->
          statement.setInt(1, limit)
          statement.setInt(2, offset)
          statement.executeQuery().use { rows ->
            while (rows.next()) {
              entries += AllowedEntry(UuidUtil.fromBytes(rows.getBytes(1)), rows.getLong(2))
            }
          }
        }
      AllowedPage(total, entries)
    }
  }
}
