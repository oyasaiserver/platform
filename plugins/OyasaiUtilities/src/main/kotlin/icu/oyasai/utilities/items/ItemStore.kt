package icu.oyasai.utilities.items

import icu.oyasai.utilities.storage.UtilitiesDatabase
import java.sql.Connection
import java.util.UUID

class CatalogEntry(
    val id: Int,
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
  private val entries = sortedMapOf<Int, CatalogEntry>()
  private val claims = mutableMapOf<Int, MutableSet<UUID>>()

  init {
    database.migrate(
        "items",
        listOf<(Connection) -> Unit>(
            { connection ->
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
            },
            this::numberById,
        ),
    )
  }

  /** 版2: 文字列のIDを、登録順（作成日時順）の連番に替える。旧IDは残さない。 */
  private fun numberById(connection: Connection) {
    connection.createStatement().use {
      it.execute(
          """
          CREATE TABLE items_catalog_new (
            id INTEGER PRIMARY KEY,
            legacy_id TEXT,
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
          """
          INSERT INTO items_catalog_new
            (legacy_id, name, description, item_bytes, rule, creator_uuid, created_at, enabled)
          SELECT id, name, description, item_bytes, rule, creator_uuid, created_at, enabled
          FROM items_catalog ORDER BY created_at, id
          """
              .trimIndent()
      )
      it.execute(
          "CREATE TABLE items_log_new (item_id INTEGER NOT NULL, player_uuid TEXT NOT NULL, at INTEGER NOT NULL)"
      )
      it.execute(
          """
          INSERT INTO items_log_new
          SELECT n.id, l.player_uuid, l.at FROM items_log l
          JOIN items_catalog_new n ON n.legacy_id = l.item_id
          """
              .trimIndent()
      )
      it.execute("DROP TABLE items_log")
      it.execute("DROP TABLE items_catalog")
      it.execute("ALTER TABLE items_catalog_new DROP COLUMN legacy_id")
      it.execute("ALTER TABLE items_catalog_new RENAME TO items_catalog")
      it.execute("ALTER TABLE items_log_new RENAME TO items_log")
      it.execute("CREATE INDEX items_log_item ON items_log(item_id, player_uuid)")
    }
  }

  fun load() {
    database.read { connection ->
      connection.createStatement().use { statement ->
        statement.executeQuery("SELECT * FROM items_catalog").use { rows ->
          while (rows.next()) {
            val entry =
                CatalogEntry(
                    rows.getInt("id"),
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
                .getOrPut(rows.getInt("item_id")) { mutableSetOf() }
                .add(UUID.fromString(rows.getString("player_uuid")))
          }
        }
      }
    }
  }

  /** 次の番号。削除済みも行として残るので、番号は再利用されない（取得履歴が残るため）。 */
  fun nextId(): Int = (if (entries.isEmpty()) 0 else entries.lastKey()) + 1

  fun get(id: Int): CatalogEntry? = entries[id]?.takeIf { it.enabled }

  fun all(): List<CatalogEntry> = entries.values.filter { it.enabled }

  fun allIncludingRemoved(): List<CatalogEntry> = entries.values.toList()

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
            it.setInt(1, entry.id)
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

  fun hasClaimed(id: Int, player: UUID): Boolean = claims[id]?.contains(player) == true

  fun claimCount(id: Int): Int = claims[id]?.size ?: 0

  fun recordClaim(id: Int, player: UUID, at: Long) {
    claims.getOrPut(id) { mutableSetOf() }.add(player)
    database.write { connection ->
      connection.prepareStatement("INSERT INTO items_log VALUES (?, ?, ?)").use {
        it.setInt(1, id)
        it.setString(2, player.toString())
        it.setLong(3, at)
        it.executeUpdate()
      }
    }
  }

  /** 1人1回のアイテムを失くした人のために、取得済みの記録を消す。 */
  fun resetClaim(id: Int, player: UUID): Boolean {
    val removed = claims[id]?.remove(player) == true
    if (removed) {
      database.write { connection ->
        connection
            .prepareStatement("DELETE FROM items_log WHERE item_id = ? AND player_uuid = ?")
            .use {
              it.setInt(1, id)
              it.setString(2, player.toString())
              it.executeUpdate()
            }
      }
    }
    return removed
  }
}
