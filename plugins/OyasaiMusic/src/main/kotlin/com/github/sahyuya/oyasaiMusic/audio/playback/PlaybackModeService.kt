package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.db.PlaybackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID

/**
 * リスナーごとの再生方式（デフォルト再生 / 立体音響再生）を解決するサービス（追加項目.txt準拠）。
 *
 * - 楽曲に一度もPanの指定（看板による静的指定、または動的録音の自動算出）が無い場合
 *   ([Song.supportsPositional] が false）は、立体音響再生を選択できず常にデフォルト再生になる。
 * - それ以外は、[PlaybackPreferenceRepository] に保存されたリスナー個人の選択を優先し、
 *   未設定の場合はデフォルト再生にフォールバックする。
 *
 * 呼び出しは非同期スレッドから行うこと（内部のDBアクセスが同期的なため）。
 */
class PlaybackModeService(private val preferenceRepository: PlaybackPreferenceRepository) {

    fun resolve(listenerUuid: UUID, song: Song): PlaybackMode {
        if (!song.supportsPositional) return PlaybackMode.DEFAULT
        val songId = song.id ?: return PlaybackMode.DEFAULT
        return preferenceRepository.getMode(listenerUuid, songId) ?: PlaybackMode.DEFAULT
    }

    /**
     * 楽曲詳細GUIからの選択を保存する。楽曲が立体音響に対応していない場合は保存を拒否する
     * （呼び出し側でボタン自体を非活性にすることを想定しつつ、防御的にもここで弾く）。
     *
     * @return true = 保存できた / false = 楽曲が立体音響に対応していないため拒否した
     */
    fun setPreference(listenerUuid: UUID, song: Song, mode: PlaybackMode): Boolean {
        if (mode == PlaybackMode.POSITIONAL && !song.supportsPositional) return false
        val songId = song.id ?: return false
        preferenceRepository.setMode(listenerUuid, songId, mode)
        return true
    }
}
