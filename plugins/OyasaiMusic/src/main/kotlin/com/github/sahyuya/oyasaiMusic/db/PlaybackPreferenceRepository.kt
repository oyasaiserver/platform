package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.audio.PlaybackMode
import com.github.sahyuya.oyasaiMusic.util.UuidUtil
import java.util.UUID

/**
 * playback_preferences テーブルへのアクセスを担当するリポジトリ。
 *
 * 追加項目.txt: 「立体音響再生は楽曲詳細GUIを開いた際に、個々のリスナーがその音楽を通常
 * (デフォルト)再生か立体音響再生かを選べて、その再生方法の選択を保存する。」に対応する。
 */
class PlaybackPreferenceRepository(private val db: DatabaseManager) {

    /** 保存済みの選択を取得する。未設定の場合はnull（呼び出し側でデフォルトにフォールバックする）。 */
    fun getMode(userUuid: UUID, songId: Long): PlaybackMode? = db.transaction { conn ->
        conn.prepareStatement(
            "SELECT mode FROM playback_preferences WHERE user_uuid = ? AND song_id = ?"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.setLong(2, songId)
            ps.executeQuery().use { rs ->
                if (!rs.next()) return@use null
                if (rs.getInt("mode") == 1) PlaybackMode.POSITIONAL else PlaybackMode.DEFAULT
            }
        }
    }

    fun setMode(userUuid: UUID, songId: Long, mode: PlaybackMode) = db.transaction { conn ->
        conn.prepareStatement(
            "INSERT INTO playback_preferences (user_uuid, song_id, mode) VALUES (?, ?, ?) " +
                    "ON CONFLICT(user_uuid, song_id) DO UPDATE SET mode = excluded.mode"
        ).use { ps ->
            ps.setBytes(1, UuidUtil.toBytes(userUuid))
            ps.setLong(2, songId)
            ps.setInt(3, if (mode == PlaybackMode.POSITIONAL) 1 else 0)
            ps.executeUpdate()
        }
    }
}
