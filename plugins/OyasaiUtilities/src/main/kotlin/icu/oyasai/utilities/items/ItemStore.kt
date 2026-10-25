package icu.oyasai.utilities.items

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.util.UUID

class CatalogEntry(
    val id: String,
    val name: String,
    val description: String,
    val bytes: ByteArray,
    val rule: ClaimRule,
    val creator: UUID,
    val createdAt: Long,
    val enabled: Boolean,
) {
  fun copy(
      name: String = this.name,
      bytes: ByteArray = this.bytes,
      rule: ClaimRule = this.rule,
      enabled: Boolean = this.enabled,
  ) = CatalogEntry(id, name, description, bytes, rule, creator, createdAt, enabled)
}

/** Cache belongs to the server thread; queued writes only see the values copied into them. */
class ItemStore(private val database: UtilitiesDatabase) {
  private val entries = sortedMapOf<String, CatalogEntry>()
  private val claims = mutableMapOf<String, MutableSet<UUID>>()

  init {
    database.migrate(
        "items",
        listOf({ connection ->
          connection.createStatement().use {
            it.execute(
                """
                CREATE TABLE items_catalog (
                  id TEXT PRIMARY KEY,
                  name TEXT NOT NULL,
                  description TEXT NOT NULL,
                  item_bytes BLOB NOT NULL,
                  rule TEXT NOT NULL CHECK(rule IN ('FREE', 'STAFF', 'ONCE')),
                  creator_uuid TEXT NOT NULL,
                  created_at INTEGER NOT NULL,
                  enabled INTEGER NOT NULL CHECK(enabled IN (0, 1))
                )
                """
                    .trimIndent()
            )
            it.execute(
                "CREATE TABLE items_log (item_id TEXT NOT NULL, player_uuid TEXT NOT NULL, at INTEGER NOT NULL)"
            )
            it.execute("CREATE INDEX items_log_item ON items_log(item_id, player_uuid)")
          }
        }),
    )
  }

  fun load() {
    database.read { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("SELECT * FROM items_catalog").use { rows ->
          while (rows.next()) {
            val entry =
                CatalogEntry(
                    rows.getString("id"),
                    rows.getString("name"),
                    rows.getString("description"),
                    rows.getBytes("item_bytes"),
                    ClaimRule.valueOf(rows.getString("rule")),
                    UUID.fromString(rows.getString("creator_uuid")),
                    rows.getLong("created_at"),
                    rows.getInt("enabled") == 1,
                )
            entries[entry.id] = entry
          }
        }
        statement.executeQuery("SELECT DISTINCT item_id, player_uuid FROM items_log").use { rows ->
          while (rows.next()) {
            claims
                .getOrPut(rows.getString("item_id")) { mutableSetOf() }
                .add(UUID.fromString(rows.getString("player_uuid")))
          }
        }
      }
    }
  }

  /** 削除済みも含めて、IDが使われているか。削除済みのIDは再利用しない（取得履歴が残るため）。 */
  fun exists(id: String): Boolean = id in entries

  fun get(id: String): CatalogEntry? = entries[id]?.takeIf { it.enabled }

  fun all(): List<CatalogEntry> = entries.values.filter { it.enabled }

  fun put(entry: CatalogEntry) {
    entries[entry.id] = entry
    database.write { connection ->
      connection
          .prepareStatement(
              """
              INSERT INTO items_catalog
                (id, name, description, item_bytes, rule, creator_uuid, created_at, enabled)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?)
              ON CONFLICT(id) DO UPDATE SET
                name = excluded.name, item_bytes = excluded.item_bytes,
                rule = excluded.rule, enabled = excluded.enabled
              """
                  .trimIndent()
          )
          .use {
            it.setString(1, entry.id)
            it.setString(2, entry.name)
            it.setString(3, entry.description)
            it.setBytes(4, entry.bytes)
            it.setString(5, entry.rule.name)
            it.setString(6, entry.creator.toString())
            it.setLong(7, entry.createdAt)
            it.setInt(8, if (entry.enabled) 1 else 0)
            it.executeUpdate()
          }
    }
  }

  fun hasClaimed(id: String, player: UUID): Boolean = claims[id]?.contains(player) == true

  fun claimCount(id: String): Int = claims[id]?.size ?: 0

  fun recordClaim(id: String, player: UUID, at: Long) {
    claims.getOrPut(id) { mutableSetOf() }.add(player)
    database.write { connection ->
      connection.prepareStatement("INSERT INTO items_log VALUES (?, ?, ?)").use {
        it.setString(1, id)
        it.setString(2, player.toString())
        it.setLong(3, at)
        it.executeUpdate()
      }
    }
  }

  /** 1人1回のアイテムを失くした人のために、取得済みの記録を消す。 */
  fun resetClaim(id: String, player: UUID): Boolean {
    val removed = claims[id]?.remove(player) == true
    if (removed) {
      database.write { connection ->
        connection
            .prepareStatement("DELETE FROM items_log WHERE item_id = ? AND player_uuid = ?")
            .use {
              it.setString(1, id)
              it.setString(2, player.toString())
              it.executeUpdate()
            }
      }
    }
    return removed
  }
}
