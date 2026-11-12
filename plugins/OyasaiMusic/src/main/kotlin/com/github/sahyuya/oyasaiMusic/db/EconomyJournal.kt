package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

/** Persisted admission, external completion and effect boundaries. All callers run off-thread. */
class EconomyJournal(private val db: DatabaseManager) {
  data class Entry(
      val id: String,
      val owner: UUID,
      val kind: String,
      val currency: String,
      val amount: Long,
      val effect: String,
      val reserved: Boolean,
      val phase: String,
      val external: String,
      val note: String,
  )

  fun initialize() {
    db.backupBeforeFeature("economy-journal", 1)
    db.transaction { c ->
      c.createStatement().use { s ->
        s.executeUpdate(
            """CREATE TABLE IF NOT EXISTS music_transactions (
            id TEXT PRIMARY KEY, owner TEXT NOT NULL, kind TEXT NOT NULL,
            currency TEXT NOT NULL, amount INTEGER NOT NULL CHECK(amount >= 0),
            effect TEXT NOT NULL, reserved INTEGER NOT NULL, phase TEXT NOT NULL,
            external_result TEXT NOT NULL DEFAULT '', note TEXT NOT NULL DEFAULT '',
            created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)"""
        )
        s.executeUpdate(
            "CREATE INDEX IF NOT EXISTS idx_music_tx_owner ON music_transactions(owner, phase)"
        )
        s.executeUpdate(
            """CREATE TABLE IF NOT EXISTS music_transaction_audit (
            id INTEGER PRIMARY KEY AUTOINCREMENT, transaction_id TEXT NOT NULL,
            actor TEXT NOT NULL, action TEXT NOT NULL, reason TEXT NOT NULL,
            created_at INTEGER NOT NULL)"""
        )
        s.executeUpdate(
            "CREATE TABLE IF NOT EXISTS music_transaction_effects (transaction_id TEXT PRIMARY KEY)"
        )
        s.executeUpdate(
            "INSERT OR IGNORE INTO music_feature_schema(feature,version) VALUES('economy-journal',1)"
        )
        s.executeUpdate(
            "UPDATE music_transactions SET phase=CASE WHEN phase='REFUNDING' THEN 'REFUND_REVIEW' ELSE 'REVIEW' END, note=CASE WHEN phase='REFUNDING' THEN 'Refund interrupted by restart: ' || note ELSE 'Interrupted by restart (' || phase || ')' END WHERE phase NOT IN ('DONE','FAILED','REVIEW','REFUND_REVIEW')"
        )
      }
    }
  }

  fun create(
      owner: UUID,
      kind: String,
      currency: String,
      amount: Long,
      effect: String,
      reserve: Boolean = false,
  ): Entry =
      db.transaction { c ->
        require(amount >= 0 && currency in setOf("yen", "token"))
        // An uncertain request blocks repeating the same effect, including after reconnect.
        c.prepareStatement(
                "SELECT id FROM music_transactions WHERE owner=? AND kind=? AND currency=? AND phase NOT IN ('DONE','FAILED') AND (kind <> 'LIKE' OR effect=?) LIMIT 1"
            )
            .use { p ->
              p.setString(1, owner.toString())
              p.setString(2, kind)
              p.setString(3, currency)
              p.setString(4, effect)
              p.executeQuery().use { check(!it.next()) { "処理中または要照合の同じ取引があります" } }
            }
        if (reserve) {
          val column = if (currency == "yen") "pending_money" else "pending_points"
          c.prepareStatement("UPDATE users SET $column=$column-? WHERE uuid=? AND $column>=?")
              .use { p ->
                p.setLong(1, amount)
                p.setBytes(2, UuidUtil.toBytes(owner))
                p.setLong(3, amount)
                check(p.executeUpdate() == 1) { "受取可能残高が変わりました" }
              }
        }
        val e =
            Entry(
                UUID.randomUUID().toString(),
                owner,
                kind,
                currency,
                amount,
                effect,
                reserve,
                "PREPARED",
                "",
                "",
            )
        c.prepareStatement(
                "INSERT INTO music_transactions(id,owner,kind,currency,amount,effect,reserved,phase,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?,?,?)"
            )
            .use { p ->
              p.setString(1, e.id)
              p.setString(2, owner.toString())
              p.setString(3, kind)
              p.setString(4, currency)
              p.setLong(5, amount)
              p.setString(6, effect)
              p.setInt(7, if (reserve) 1 else 0)
              p.setString(8, e.phase)
              p.setLong(9, System.currentTimeMillis())
              p.setLong(10, System.currentTimeMillis())
              p.executeUpdate()
            }
        e
      }

  fun get(id: String): Entry? =
      db.transaction { c ->
        c.prepareStatement("SELECT * FROM music_transactions WHERE id=?").use { p ->
          p.setString(1, id)
          p.executeQuery().use { r -> if (r.next()) read(r) else null }
        }
      }

  fun unresolved(): List<Entry> =
      db.transaction { c ->
        c.createStatement().use { s ->
          s.executeQuery(
                  "SELECT * FROM music_transactions WHERE phase NOT IN ('DONE','FAILED') ORDER BY created_at LIMIT 100"
              )
              .use { r -> buildList { while (r.next()) add(read(r)) } }
        }
      }

  private fun read(r: java.sql.ResultSet) =
      Entry(
          r.getString("id"),
          UUID.fromString(r.getString("owner")),
          r.getString("kind"),
          r.getString("currency"),
          r.getLong("amount"),
          r.getString("effect"),
          r.getInt("reserved") != 0,
          r.getString("phase"),
          r.getString("external_result"),
          r.getString("note"),
      )

  fun transition(id: String, from: String, to: String, result: String = "", note: String = "") =
      db.transaction { c ->
        c.prepareStatement(
                "UPDATE music_transactions SET phase=?, external_result=CASE WHEN ?='' THEN external_result ELSE ? END,note=?,updated_at=? WHERE id=? AND phase=?"
            )
            .use { p ->
              p.setString(1, to)
              p.setString(2, result)
              p.setString(3, result)
              p.setString(4, note.take(500))
              p.setLong(5, System.currentTimeMillis())
              p.setString(6, id)
              p.setString(7, from)
              check(p.executeUpdate() == 1) { "取引状態が変わりました: $id" }
            }
      }

  fun fail(e: Entry, from: String, reason: String) =
      db.transaction { _ ->
        transition(e.id, from, "FAILED", "FAILED", reason)
        if (e.reserved || e.kind == "LIKE") creditPending(e)
      }

  private fun creditPending(e: Entry) {
    UserRepository(db)
        .addPending(
            e.owner,
            if (e.currency == "yen") e.amount else 0,
            if (e.currency == "token") e.amount else 0,
        )
  }

  fun completeReward(e: Entry) =
      db.transaction { c ->
        transition(e.id, "PAID", "DONE")
        if (e.reserved) {
          val column = if (e.currency == "yen") "total_money" else "total_points"
          c.prepareStatement("UPDATE users SET $column=$column+? WHERE uuid=?").use { p ->
            p.setLong(1, e.amount)
            p.setBytes(2, UuidUtil.toBytes(e.owner))
            p.executeUpdate()
          }
        }
      }

  /** Commit the sale and its author credit before attempting delivery on the game thread. */
  fun beginDelivery(e: Entry, recordSale: () -> Unit) =
      db.transaction { connection ->
        require(e.kind == "PURCHASE" || e.kind == "ADVERTISE")
        transition(e.id, "PAID", "EFFECTING")
        if (e.kind == "PURCHASE") {
          val firstAttempt =
              connection
                  .prepareStatement(
                      "INSERT OR IGNORE INTO music_transaction_effects(transaction_id) VALUES(?)"
                  )
                  .use { statement ->
                    statement.setString(1, e.id)
                    statement.executeUpdate() == 1
                  }
          if (firstAttempt && e.amount > 0) recordSale()
        }
      }
}
