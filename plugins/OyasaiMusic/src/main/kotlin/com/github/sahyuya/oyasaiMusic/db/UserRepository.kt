package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.UserRewardData
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

/**
 * users テーブル（個人ステータス・未受取報酬）へのアクセスを担当するリポジトリ。 データ・システム設計書 1-2章: オンライン・オフライン問わず加算され、
 * メインメニューからの一括受取アクションでリセットされる。
 */
class UserRepository(private val db: DatabaseManager) {

  fun get(uuid: UUID): UserRewardData =
      db.transaction { conn ->
        conn.prepareStatement("SELECT * FROM users WHERE uuid = ?").use { ps ->
          ps.setBytes(1, UuidUtil.toBytes(uuid))
          ps.executeQuery().use { rs ->
            if (rs.next()) {
              UserRewardData(
                  uuid = uuid,
                  pendingMoney = rs.getLong("pending_money"),
                  pendingPoints = rs.getLong("pending_points"),
                  totalMoney = rs.getLong("total_money"),
                  totalPoints = rs.getLong("total_points"),
              )
            } else {
              UserRewardData(uuid = uuid)
            }
          }
        }
      }

  private fun ensureRow(conn: java.sql.Connection, uuid: UUID) {
    conn
        .prepareStatement(
            "INSERT INTO users (uuid, pending_money, pending_points) VALUES (?, 0, 0) " +
                "ON CONFLICT(uuid) DO NOTHING"
        )
        .use { ps ->
          ps.setBytes(1, UuidUtil.toBytes(uuid))
          ps.executeUpdate()
        }
  }

  /** いいね送信報酬・視聴ポイント等、未受取残高への加算。金額とポイントは同時または個別に指定可能。 */
  fun addPending(uuid: UUID, money: Long = 0, points: Long = 0) =
      db.transaction { conn ->
        ensureRow(conn, uuid)
        conn
            .prepareStatement(
                "UPDATE users SET pending_money = pending_money + ?, pending_points = pending_points + ? WHERE uuid = ?"
            )
            .use { ps ->
              ps.setLong(1, money)
              ps.setLong(2, points)
              ps.setBytes(3, UuidUtil.toBytes(uuid))
              ps.executeUpdate()
            }
      }

  /** 外部経済への送金成功後に、送金済み分だけ残高から差し引く。 送金処理中に新しい報酬が加算されても、その新規分は残る。 */
  fun consumePending(uuid: UUID, money: Long = 0, points: Long = 0) =
      db.transaction { conn ->
        ensureRow(conn, uuid)
        conn
            .prepareStatement(
                "UPDATE users SET pending_money = MAX(0, pending_money - ?), " +
                    "pending_points = MAX(0, pending_points - ?), " +
                    "total_money = total_money + ?, total_points = total_points + ? WHERE uuid = ?"
            )
            .use { ps ->
              ps.setLong(1, money.coerceAtLeast(0))
              ps.setLong(2, points.coerceAtLeast(0))
              ps.setLong(3, money.coerceAtLeast(0))
              ps.setLong(4, points.coerceAtLeast(0))
              ps.setBytes(5, UuidUtil.toBytes(uuid))
              ps.executeUpdate()
            }
      }
}
