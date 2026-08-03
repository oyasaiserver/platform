package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.model.SongStatus
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.sql.Connection
import java.sql.ResultSet
import java.util.UUID

/**
 * songs テーブルへのアクセスを担当するリポジトリ。
 * 呼び出しは必ず非同期スレッドから行うこと（[DatabaseManager.transaction] が同期化する）。
 */
class SongRepository(private val db: DatabaseManager) {

    /**
     * 新規楽曲を下書き(status=DRAFT, published=false)として登録する。
     * 録音システム（グリッド型/回路型/動的録音）は録音完了後に必ずこれを呼び出す。
     *
     * 削除済みのIDがある場合は最も小さい欠番を再利用し、なければ末尾の次のIDを使う。
     * @return 採番された楽曲ID
     */
    fun insertDraft(
        authorUuid: UUID,
        title: String,
        bpm: Int,
        recordMaterial: String,
        price: Int,
        fileName: String,
        supportsPositional: Boolean = false,
    ): Long = db.transaction { conn ->
        val songId = nextAvailableId(conn)
        conn.prepareStatement(
            """
            INSERT INTO songs (id, author_uuid, title, created_at, bpm, record_material, price, status, likes, views, file_name, supports_positional, published)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0, 0, ?, ?, 0)
            """.trimIndent(),
        ).use { ps ->
            ps.setLong(1, songId)
            ps.setBytes(2, UuidUtil.toBytes(authorUuid))
            ps.setString(3, title)
            ps.setLong(4, System.currentTimeMillis() / 1000)
            ps.setInt(5, bpm)
            ps.setString(6, recordMaterial)
            ps.setInt(7, price)
            ps.setInt(8, SongStatus.DRAFT.code)
            ps.setString(9, fileName)
            ps.setInt(10, if (supportsPositional) 1 else 0)
            ps.executeUpdate()
            songId
        }
    }

    /**
     * 楽曲IDは利用者へ表示されるため、削除で生じた欠番を小さい順に再利用する。
     * この検索とINSERTは同一の[DatabaseManager.transaction]内で直列化されるため、
     * 複数の録音完了が同時に発生しても同じIDが割り当てられない。
     */
    private fun nextAvailableId(conn: Connection): Long {
        var candidate = 1L
        conn.prepareStatement("SELECT id FROM songs WHERE id >= 1 ORDER BY id ASC").use { ps ->
            ps.executeQuery().use { ids ->
                while (ids.next()) {
                    val occupied = ids.getLong(1)
                    if (occupied == candidate) {
                        candidate++
                    } else if (occupied > candidate) {
                        return candidate
                    }
                }
            }
        }
        return candidate
    }

    fun findById(id: Long): Song? = db.transaction { conn ->
        conn.prepareStatement("SELECT * FROM songs WHERE id = ?").use { ps ->
            ps.setLong(1, id)
            ps.executeQuery().use { rs -> if (rs.next()) rs.toSong() else null }
        }
    }

    fun findByAuthor(authorUuid: UUID, includeDrafts: Boolean = true): List<Song> = db.transaction { conn ->
        // includeDrafts=false は「他人から見た公開作品一覧」を意味するため、
        // GUIフェーズより審査ステータス(status)ではなく公開フラグ(published)で絞り込む。
        val sql = if (includeDrafts) {
            "SELECT * FROM songs WHERE author_uuid = ? ORDER BY created_at DESC"
        } else {
            "SELECT * FROM songs WHERE author_uuid = ? AND published = 1 ORDER BY created_at DESC"
        }
        conn.prepareStatement(sql).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(authorUuid))
            ps.executeQuery().use { rs -> rs.toSongList() }
        }
    }

    /** 公開済み(published=true)の楽曲を条件付きで検索する。 */
    fun searchPublished(
        titleLike: String? = null,
        sort: SongSort = SongSort.CREATED_AT_DESC,
        limit: Int = 200,
        offset: Int = 0,
    ): List<Song> = db.transaction { conn ->
        val where = StringBuilder("WHERE published = 1")
        if (titleLike != null) where.append(" AND title LIKE ?")
        val sql = "SELECT * FROM songs $where ORDER BY ${sort.orderBy} LIMIT ? OFFSET ?"
        conn.prepareStatement(sql).use { ps ->
            var idx = 1
            if (titleLike != null) ps.setString(idx++, "%$titleLike%")
            ps.setInt(idx++, limit)
            ps.setInt(idx, offset)
            ps.executeQuery().use { rs -> rs.toSongList() }
        }
    }

    /**
     * シャッフル再生用: 公開楽曲からランダムに1曲取得する（GUIフェーズで追加）。
     * 以前は [com.github.sahyuya.oyasaiMusic.gui.SongListMenu] が表示中のページ(最大40件)
     * 内からしかランダム選出できなかった制限に対応し、サーバー全体の公開楽曲を対象にする。
     *
     * @param excludeId 直前に再生していた曲を除外したい場合に指定する（公開楽曲が1曲しか
     *        無い場合など、除外しきれず同じ曲が返ることがある）。
     */
    fun randomPublished(excludeId: Long? = null): Song? = db.transaction { conn ->
        val sql = if (excludeId != null) {
            "SELECT * FROM songs WHERE published = 1 AND id != ? ORDER BY RANDOM() LIMIT 1"
        } else {
            "SELECT * FROM songs WHERE published = 1 ORDER BY RANDOM() LIMIT 1"
        }
        conn.prepareStatement(sql).use { ps ->
            if (excludeId != null) ps.setLong(1, excludeId)
            ps.executeQuery().use { rs -> if (rs.next()) rs.toSong() else null }
        }
    }

    /** GUIフェーズで追加: OP専用「審査・履歴管理GUI」用の全楽曲一覧（公開/非公開を問わず全件対象）。 */
    fun listForReview(sort: ReviewSort, limit: Int, offset: Int): List<Song> = db.transaction { conn ->
        // 審査依頼済み、または既に判定履歴を持つ楽曲だけを対象にする。
        val sql = "SELECT * FROM songs WHERE published = 1 AND (review_requested_at IS NOT NULL OR status != ?) ORDER BY ${sort.orderBy} LIMIT ? OFFSET ?"
        conn.prepareStatement(sql).use { ps ->
            ps.setInt(1, SongStatus.DRAFT.code)
            ps.setInt(2, limit)
            ps.setInt(3, offset)
            ps.executeQuery().use { rs -> rs.toSongList() }
        }
    }

    /**
     * オリジナル審査の依頼を永続化し、提出時点で仮OKへ移す。
     * 仮OKは「作者が申請済み」の暫定状態であり、OP審査画面では許可／未審査／却下へ変更できる。
     */
    /** 公開済みの未申請楽曲だけを審査へ提出する。提出できた場合だけtrueを返す。 */
    fun requestReview(id: Long): Boolean = db.transaction { conn ->
        conn.prepareStatement(
            "UPDATE songs SET status = ?, review_requested_at = ? WHERE id = ? AND published = 1 AND review_requested_at IS NULL"
        ).use { ps ->
            ps.setInt(1, SongStatus.TEMP_OK.code)
            ps.setLong(2, System.currentTimeMillis() / 1000)
            ps.setLong(3, id)
            ps.executeUpdate() == 1
        }
    }

    /** OPが判定する前の申請を取り消し、下書き状態へ戻す。 */
    fun cancelReviewRequest(id: Long): Boolean = db.transaction { conn ->
        conn.prepareStatement(
            "UPDATE songs SET status = ?, review_requested_at = NULL WHERE id = ? AND status = ? AND review_requested_at IS NOT NULL"
        ).use { ps ->
            ps.setInt(1, SongStatus.DRAFT.code)
            ps.setLong(2, id)
            ps.setInt(3, SongStatus.TEMP_OK.code)
            ps.executeUpdate() == 1
        }
    }

    fun updateStatus(id: Long, status: SongStatus) = db.transaction { conn ->
        conn.prepareStatement("UPDATE songs SET status = ? WHERE id = ?").use { ps ->
            ps.setInt(1, status.code)
            ps.setLong(2, id)
            ps.executeUpdate()
        }
    }

    /**
     * 公開状態を更新し、初回公開時だけ true を返す。通知済み状態をDBへ永続化するため、
     * 非公開→再公開やサーバー再起動後にも新曲通知が重複しない。
     */
    fun setPublishedAndClaimFirstAnnouncement(id: Long, published: Boolean): Boolean = db.transaction { conn ->
        if (!published) {
            conn.prepareStatement("UPDATE songs SET published = 0 WHERE id = ?").use { ps ->
                ps.setLong(1, id)
                ps.executeUpdate()
            }
            return@transaction false
        }
        val firstPublish = conn.prepareStatement("SELECT first_published_at FROM songs WHERE id = ?").use { ps ->
            ps.setLong(1, id)
            ps.executeQuery().use { rs -> rs.next() && rs.getObject(1) == null }
        }
        conn.prepareStatement(
            "UPDATE songs SET published = 1, first_published_at = COALESCE(first_published_at, ?) WHERE id = ?"
        ).use { ps ->
            ps.setLong(1, System.currentTimeMillis() / 1000)
            ps.setLong(2, id)
            ps.executeUpdate()
        }
        firstPublish
    }

    fun updateSettings(
        id: Long,
        title: String? = null,
        bpm: Int? = null,
        recordMaterial: String? = null,
        price: Int? = null,
        referenceUrl: String? = null,
    ) = db.transaction { conn ->
        val fields = mutableListOf<String>()
        val values = mutableListOf<Any?>()
        title?.let { fields += "title = ?"; values += it }
        bpm?.let { fields += "bpm = ?"; values += it }
        recordMaterial?.let { fields += "record_material = ?"; values += it }
        price?.let { fields += "price = ?"; values += it }
        referenceUrl?.let { fields += "reference_url = ?"; values += it }
        if (fields.isEmpty()) return@transaction
        val sql = "UPDATE songs SET ${fields.joinToString(", ")} WHERE id = ?"
        conn.prepareStatement(sql).use { ps ->
            values.forEachIndexed { i, v -> ps.setObject(i + 1, v) }
            ps.setLong(values.size + 1, id)
            ps.executeUpdate()
        }
    }

    /** 音源を差し替えた際に、立体音響の可否を録音内容へ合わせる。 */
    fun updateAudioProperties(id: Long, supportsPositional: Boolean) = db.transaction { conn ->
        conn.prepareStatement("UPDATE songs SET supports_positional = ? WHERE id = ?").use { ps ->
            ps.setInt(1, if (supportsPositional) 1 else 0)
            ps.setLong(2, id)
            ps.executeUpdate()
        }
    }

    fun delete(id: Long) = db.transaction { conn ->
        conn.prepareStatement("DELETE FROM songs WHERE id = ?").use { ps ->
            ps.setLong(1, id)
            ps.executeUpdate()
        }
    }

    private fun ResultSet.toSong(): Song = Song(
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

    private fun ResultSet.toSongList(): List<Song> {
        val list = mutableListOf<Song>()
        while (next()) list += toSong()
        return list
    }
}

/** 全楽曲一覧・検索等で使うソート順。UI/UX設計書 4章の「動的ソート順」に対応。 */
enum class SongSort(val orderBy: String) {
    CREATED_AT_DESC("created_at DESC"),
    CREATED_AT_ASC("created_at ASC"),
    TITLE_ASC("title ASC"),
    LIKES_DESC("likes DESC"),
    VIEWS_DESC("views DESC"),
}

/**
 * OP専用：審査・履歴管理GUI用のソート順（UI/UX設計書4章補足）。
 * 「未審査古い順」は審査済(status!=0)を後方に分離、「審査済新着順」は未審査(status=0)を後方に分離する。
 */
enum class ReviewSort(val orderBy: String) {
    NEWEST("created_at DESC"),
    OLDEST("created_at ASC"),
    UNREVIEWED_OLDEST_FIRST("(status != 0) ASC, created_at ASC"),
    REVIEWED_NEWEST_FIRST("(status = 0) ASC, created_at DESC"),
}
