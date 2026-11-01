package io.oyasai.oyasaiAdminTools.assistant

import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.util.UUID

internal class AssistantAllowStore(private val db: AdminDb, private val rules: AssistantRules) {
  init {
    db.ensureFeature(
        "assistant",
        1,
        listOf(
            "CREATE TABLE assistant_allow(id INTEGER PRIMARY KEY AUTOINCREMENT, scope TEXT NOT NULL UNIQUE, added_by TEXT NOT NULL, added_uuid TEXT NOT NULL, added_at INTEGER NOT NULL)"
        ),
    )
    db.writeFeature { connection ->
      val seeded =
          connection.createStatement().use { st ->
            st.executeQuery("SELECT value FROM assistant_meta WHERE key='defaults_seeded'").use {
              it.next()
            }
          }
      if (!seeded) {
        for (name in listOf("iscandidate", "getrank", "seerequirements")) {
          val scope = "dynamicprofile:syokaku $name"
          if (!rules.isBlacklisted(scope))
              connection
                  .prepareStatement(
                      "INSERT INTO assistant_allow(scope,added_by,added_uuid,added_at) VALUES (?,?,?,?)"
                  )
                  .use {
                    it.setString(1, scope)
                    it.setString(2, "初期値")
                    it.setString(3, UUID(0, 0).toString())
                    it.setLong(4, System.currentTimeMillis())
                    it.executeUpdate()
                  }
        }
        connection.createStatement().use {
          it.executeUpdate("INSERT INTO assistant_meta VALUES ('defaults_seeded','1')")
        }
      }
    }
  }

  fun list(): List<Entry> =
      db.readFeature { connection ->
        connection.createStatement().use { statement ->
          statement
              .executeQuery(
                  "SELECT id,scope,added_by,added_uuid,added_at FROM assistant_allow ORDER BY id"
              )
              .use { rows ->
                buildList {
                  while (rows.next()) add(
                      Entry(
                          rows.getLong(1),
                          rows.getString(2),
                          rows.getString(3),
                          rows.getString(4),
                          rows.getLong(5),
                      )
                  )
                }
              }
        }
      }

  fun allows(command: String): Boolean = rules.isAllowed(command, list().map { it.scope })

  fun add(command: String, name: String, uuid: UUID): Boolean {
    require(!rules.isBlacklisted(command)) { "Blacklisted commands cannot be remembered" }
    val scope = AssistantRules.scope(command) ?: return false
    return db.writeFeature { connection ->
      connection
          .prepareStatement(
              "INSERT OR IGNORE INTO assistant_allow(scope,added_by,added_uuid,added_at) VALUES (?,?,?,?)"
          )
          .use {
            it.setString(1, scope)
            it.setString(2, name)
            it.setString(3, uuid.toString())
            it.setLong(4, System.currentTimeMillis())
            it.executeUpdate() > 0
          }
    }
  }

  fun remove(id: Long): Entry? =
      db.writeFeature { connection ->
        val entry =
            connection
                .prepareStatement(
                    "SELECT id,scope,added_by,added_uuid,added_at FROM assistant_allow WHERE id=?"
                )
                .use {
                  it.setLong(1, id)
                  it.executeQuery().use { rows ->
                    if (rows.next())
                        Entry(
                            rows.getLong(1),
                            rows.getString(2),
                            rows.getString(3),
                            rows.getString(4),
                            rows.getLong(5),
                        )
                    else null
                  }
                }
        if (entry != null)
            connection.prepareStatement("DELETE FROM assistant_allow WHERE id=?").use {
              it.setLong(1, id)
              it.executeUpdate()
            }
        entry
      }

  data class Entry(
      val id: Long,
      val scope: String,
      val name: String,
      val uuid: String,
      val addedAt: Long,
  )
}
