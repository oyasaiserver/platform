package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

/**
 * song_likes / favorites / follows / view_history テーブルへのアクセスを担当するリポジトリ。
 * データ・システム設計書 1-3章に準拠。UNIQUE制約により重複登録はDBレベルでブロックされるため、
 * 呼び出し側は `INSERT ... ON CONFLICT DO NOTHING` の戻り値（更新件数）で
 * 「既に登録済みだったかどうか」を判定できる。
 */
class SocialRepository(private val db: DatabaseManager) {

    // ---------- いいね ----------

    /**
     * いいね登録・曲の統計・双方の報酬残高を一括で更新する。
     * UNIQUE制約により重複いいねの場合は、以降の更新を一切行わない。
     */
    fun registerLikeWithRewards(
        likerUuid: UUID,
        authorUuid: UUID,
        songId: Long,
        likerMoneyReward: Long,
        authorPointReward: Long,
    ): Boolean = db.transaction { conn ->
        val added = conn.prepareStatement(
            "INSERT INTO song_likes (user_uuid, song_id, created_at) VALUES (?, ?, ?) " +
                "ON CONFLICT(user_uuid, song_id) DO NOTHING"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(likerUuid))
            ps.setLong(2, songId)
            ps.setLong(3, System.currentTimeMillis() / 1000)
            ps.executeUpdate() > 0
        }
        if (!added) return@transaction false

        conn.prepareStatement("UPDATE songs SET likes = likes + 1 WHERE id = ?").use { ps ->
            ps.setLong(1, songId)
            ps.executeUpdate()
        }
        ensureUser(conn, likerUuid)
        ensureUser(conn, authorUuid)
        conn.prepareStatement("UPDATE users SET pending_money = pending_money + ? WHERE uuid = ?").use { ps ->
            ps.setLong(1, likerMoneyReward)
            ps.setBytes(2, UuidUtil.toBytes(likerUuid))
            ps.executeUpdate()
        }
        conn.prepareStatement("UPDATE users SET pending_points = pending_points + ? WHERE uuid = ?").use { ps ->
            ps.setLong(1, authorPointReward)
            ps.setBytes(2, UuidUtil.toBytes(authorUuid))
            ps.executeUpdate()
        }
        true
    }

    fun hasLiked(userUuid: UUID, songId: Long): Boolean = db.transaction { conn ->
        conn.prepareStatement("SELECT 1 FROM song_likes WHERE user_uuid = ? AND song_id = ?").use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.setLong(2, songId)
            ps.executeQuery().use { it.next() }
        }
    }

    // ---------- お気に入り ----------

    fun addFavorite(userUuid: UUID, songId: Long): Boolean = db.transaction { conn ->
        conn.prepareStatement(
            "INSERT INTO favorites (user_uuid, song_id, created_at) VALUES (?, ?, ?) " +
                    "ON CONFLICT(user_uuid, song_id) DO NOTHING"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.setLong(2, songId)
            ps.setLong(3, System.currentTimeMillis() / 1000)
            ps.executeUpdate() > 0
        }
    }

    fun removeFavorite(userUuid: UUID, songId: Long) = db.transaction { conn ->
        conn.prepareStatement("DELETE FROM favorites WHERE user_uuid = ? AND song_id = ?").use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.setLong(2, songId)
            ps.executeUpdate()
        }
    }

    fun listFavoriteSongIds(userUuid: UUID): List<Long> = db.transaction { conn ->
        conn.prepareStatement(
            "SELECT song_id FROM favorites WHERE user_uuid = ? ORDER BY created_at DESC"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.executeQuery().use { rs ->
                val list = mutableListOf<Long>()
                while (rs.next()) list += rs.getLong("song_id")
                list
            }
        }
    }

    /**
     * GUIフェーズで追加: 指定した作者の全楽曲に対する、お気に入り登録の合計件数。
     * 左タブ①(自作楽曲一覧タブ)のホバー統計「総お気に入り数」用（[AuthorStatsCache]参照）。
     */
    fun countFavoritesForAuthor(authorUuid: UUID): Long = db.transaction { conn ->
        conn.prepareStatement(
            "SELECT COUNT(*) FROM favorites f JOIN songs s ON s.id = f.song_id WHERE s.author_uuid = ?"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(authorUuid))
            ps.executeQuery().use { rs -> rs.next(); rs.getLong(1) }
        }
    }

    // ---------- フォロー ----------

    fun follow(followerUuid: UUID, targetUuid: UUID): Boolean = db.transaction { conn ->
        conn.prepareStatement(
            "INSERT INTO follows (follower_uuid, target_uuid, created_at) VALUES (?, ?, ?) " +
                    "ON CONFLICT(follower_uuid, target_uuid) DO NOTHING"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(followerUuid))
            ps.setBytes(2, UuidUtil.toBytes(targetUuid))
            ps.setLong(3, System.currentTimeMillis() / 1000)
            ps.executeUpdate() > 0
        }
    }

    fun unfollow(followerUuid: UUID, targetUuid: UUID) = db.transaction { conn ->
        conn.prepareStatement("DELETE FROM follows WHERE follower_uuid = ? AND target_uuid = ?").use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(followerUuid))
            ps.setBytes(2, UuidUtil.toBytes(targetUuid))
            ps.executeUpdate()
        }
    }

    fun listFollowingUuids(followerUuid: UUID): List<UUID> = db.transaction { conn ->
        conn.prepareStatement(
            "SELECT target_uuid FROM follows WHERE follower_uuid = ? ORDER BY created_at DESC"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(followerUuid))
            ps.executeQuery().use { rs ->
                val list = mutableListOf<UUID>()
                while (rs.next()) list += UuidUtil.fromBytes(rs.getBytes("target_uuid"))
                list
            }
        }
    }

    fun countFollowers(targetUuid: UUID): Long = db.transaction { conn ->
        conn.prepareStatement("SELECT COUNT(*) FROM follows WHERE target_uuid = ?").use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(targetUuid))
            ps.executeQuery().use { rs -> rs.next(); rs.getLong(1) }
        }
    }

    // ---------- 視聴履歴（回数制限判定用） ----------

    /**
     * 視聴履歴・総再生数・条件付きポイント報酬を一つのトランザクションで更新する。
     * @return true のときだけ視聴として計上された。
     */
    fun registerQualifiedView(
        listenerUuid: UUID,
        authorUuid: UUID,
        songId: Long,
        timestamp: Long,
        hourLimit: Int,
        dayLimit: Int,
        monetizationEligible: Boolean,
        viewsPerPoint: Int,
    ): Boolean = db.transaction { conn ->
        val uuidBytes = UuidUtil.toBytes(listenerUuid)
        fun countSince(since: Long): Long = conn.prepareStatement(
            "SELECT COUNT(*) FROM view_history WHERE user_uuid = ? AND song_id = ? AND timestamp >= ?"
        ).use { ps ->
            ps.setBytes(1, uuidBytes)
            ps.setLong(2, songId)
            ps.setLong(3, since)
            ps.executeQuery().use { rs -> rs.next(); rs.getLong(1) }
        }
        if (countSince(timestamp - 3600) >= hourLimit || countSince(timestamp - 86_400) >= dayLimit) {
            return@transaction false
        }
        conn.prepareStatement("INSERT INTO view_history (user_uuid, song_id, timestamp) VALUES (?, ?, ?)").use { ps ->
            ps.setBytes(1, uuidBytes)
            ps.setLong(2, songId)
            ps.setLong(3, timestamp)
            ps.executeUpdate()
        }
        val totalViews = conn.prepareStatement("UPDATE songs SET views = views + 1 WHERE id = ? RETURNING views").use { ps ->
            ps.setLong(1, songId)
            ps.executeQuery().use { rs -> if (rs.next()) rs.getLong(1) else return@transaction false }
        }
        if (monetizationEligible && viewsPerPoint > 0 && totalViews % viewsPerPoint == 0L) {
            ensureUser(conn, authorUuid)
            conn.prepareStatement("UPDATE users SET pending_points = pending_points + 1 WHERE uuid = ?").use { ps ->
                ps.setBytes(1, UuidUtil.toBytes(authorUuid))
                ps.executeUpdate()
            }
        }
        true
    }

    private fun ensureUser(conn: java.sql.Connection, uuid: UUID) {
        conn.prepareStatement(
            "INSERT INTO users (uuid, pending_money, pending_points) VALUES (?, 0, 0) ON CONFLICT(uuid) DO NOTHING"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(uuid))
            ps.executeUpdate()
        }
    }

}
