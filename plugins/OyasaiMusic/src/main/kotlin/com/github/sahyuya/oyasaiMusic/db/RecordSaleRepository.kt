package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.time.Instant
import java.util.UUID

/** レコード販売履歴の記録と、収益化対象作者への未受取報酬加算を同一トランザクションで行う。 */
class RecordSaleRepository(private val db: DatabaseManager) {

  fun recordSale(
      songId: Long,
      buyerUuid: UUID,
      authorUuid: UUID,
      grossAmount: Long,
      authorShare: Long,
      creditAuthor: Boolean,
  ) =
      db.transaction { conn ->
        conn
            .prepareStatement(
                """
                INSERT INTO record_sales
                    (song_id, buyer_uuid, author_uuid, gross_amount, author_share, created_at)
                VALUES (?, ?, ?, ?, ?, ?)
                """
                    .trimIndent()
            )
            .use { ps ->
              ps.setLong(1, songId)
              ps.setBytes(2, UuidUtil.toBytes(buyerUuid))
              ps.setBytes(3, UuidUtil.toBytes(authorUuid))
              ps.setLong(4, grossAmount.coerceAtLeast(0))
              ps.setLong(5, authorShare.coerceAtLeast(0))
              ps.setLong(6, Instant.now().epochSecond)
              ps.executeUpdate()
            }

        if (creditAuthor && authorShare > 0) {
          conn
              .prepareStatement(
                  "INSERT INTO users (uuid, pending_money, pending_points) VALUES (?, 0, 0) " +
                      "ON CONFLICT(uuid) DO NOTHING"
              )
              .use { ps ->
                ps.setBytes(1, UuidUtil.toBytes(authorUuid))
                ps.executeUpdate()
              }
          conn
              .prepareStatement("UPDATE users SET pending_money = pending_money + ? WHERE uuid = ?")
              .use { ps ->
                ps.setLong(1, authorShare)
                ps.setBytes(2, UuidUtil.toBytes(authorUuid))
                ps.executeUpdate()
              }
        }
      }
}
