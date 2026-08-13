package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.model.SongStatus
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.sql.ResultSet
import java.util.UUID

/** メインメニュー「①ランキング」の指標区分。 LIKES/VIEWS/FAVORITESは楽曲単位、FOLLOWERSは作者単位のランキングになる。 */
enum class RankingMetric {
  LIKES,
  VIEWS,
  FAVORITES,
  FOLLOWERS,
}

data class SongRanking(val song: Song, val score: Long)

data class AuthorRanking(val authorUuid: UUID, val score: Long)

/**
 * メインメニュー「①ランキング」用の集計クエリ（UI/UX設計書2章、サヒュヤ氏の指示に基づき更新）。
 *
 * このクラス自体は任意の期間(sinceEpochSec〜untilEpochSec、両方null=全期間)でDB集計を行うだけで、
 * 「日間は毎日0時に前日分を集計してJSONにキャッシュ」「週間は毎週月曜0時に前週分を集計」 「総合は30分ごとに再集計」といったスケジューリング・キャッシュ管理は
 * [RankingCacheService] が担当する。 songs.likes / songs.views は累計カラムのため期間集計には使えず、 song_likes.created_at
 * / view_history.timestamp / favorites.created_at / follows.created_at を 期間で絞り込んだCOUNTを都度計算する。
 */
class RankingRepository(private val db: DatabaseManager) {

  fun topSongsInRange(
      metric: RankingMetric,
      sinceEpochSec: Long?,
      untilEpochSec: Long?,
      limit: Int = 7,
  ): List<SongRanking> {
    require(metric != RankingMetric.FOLLOWERS) { "FOLLOWERSはtopAuthorsInRange()を使用してください" }
    val (table, timeColumn) =
        when (metric) {
          RankingMetric.LIKES -> "song_likes" to "created_at"
          RankingMetric.VIEWS -> "view_history" to "timestamp"
          RankingMetric.FAVORITES -> "favorites" to "created_at"
          RankingMetric.FOLLOWERS -> error("unreachable")
        }
    val conditions = mutableListOf("s.published = 1")
    if (sinceEpochSec != null) conditions += "t.$timeColumn >= ?"
    if (untilEpochSec != null) conditions += "t.$timeColumn < ?"
    val sql =
        """
            SELECT s.*, COUNT(t.song_id) AS score
            FROM $table t JOIN songs s ON s.id = t.song_id
            WHERE ${conditions.joinToString(" AND ")}
            GROUP BY s.id ORDER BY score DESC LIMIT ?
        """
            .trimIndent()
    return db.transaction { conn ->
      conn.prepareStatement(sql).use { ps ->
        var idx = 1
        if (sinceEpochSec != null) ps.setLong(idx++, sinceEpochSec)
        if (untilEpochSec != null) ps.setLong(idx++, untilEpochSec)
        ps.setInt(idx, limit)
        ps.executeQuery().use { rs ->
          val list = mutableListOf<SongRanking>()
          while (rs.next()) list += SongRanking(song = rs.toSongRow(), score = rs.getLong("score"))
          list
        }
      }
    }
  }

  fun topAuthorsInRange(
      sinceEpochSec: Long?,
      untilEpochSec: Long?,
      limit: Int = 7,
  ): List<AuthorRanking> {
    val conditions = mutableListOf<String>()
    if (sinceEpochSec != null) conditions += "created_at >= ?"
    if (untilEpochSec != null) conditions += "created_at < ?"
    val where = if (conditions.isEmpty()) "" else "WHERE ${conditions.joinToString(" AND ")}"
    val sql =
        "SELECT target_uuid, COUNT(*) AS score FROM follows $where GROUP BY target_uuid ORDER BY score DESC LIMIT ?"
    return db.transaction { conn ->
      conn.prepareStatement(sql).use { ps ->
        var idx = 1
        if (sinceEpochSec != null) ps.setLong(idx++, sinceEpochSec)
        if (untilEpochSec != null) ps.setLong(idx++, untilEpochSec)
        ps.setInt(idx, limit)
        ps.executeQuery().use { rs ->
          val list = mutableListOf<AuthorRanking>()
          while (rs.next()) {
            list +=
                AuthorRanking(
                    authorUuid = UuidUtil.fromBytes(rs.getBytes("target_uuid")),
                    score = rs.getLong("score"),
                )
          }
          list
        }
      }
    }
  }

  private fun ResultSet.toSongRow(): Song =
      Song(
          id = getLong("id"),
          authorUuid = UuidUtil.fromBytes(getBytes("author_uuid")),
          title = getString("title"),
          createdAt = getLong("created_at"),
          bpm = getInt("bpm"),
          recordMaterial = getString("record_material"),
          price = getInt("price"),
          referenceUrl = getString("reference_url"),
          status = SongStatus.fromCode(getInt("status")),
          likes = getLong("likes"),
          views = getLong("views"),
          fileName = getString("file_name"),
          supportsPositional = getInt("supports_positional") != 0,
          published = getInt("published") != 0,
          reviewRequestedAt = getLong("review_requested_at").let { if (wasNull()) null else it },
      )
}
