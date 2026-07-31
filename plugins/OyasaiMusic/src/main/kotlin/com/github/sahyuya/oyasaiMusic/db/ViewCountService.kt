package com.github.sahyuya.oyasaiMusic.db

import com.github.sahyuya.oyasaiMusic.model.Song
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/**
 * 視聴回数カウントと視聴ポイント付与のロジック（データ・システム設計書 1-3章、
 * UI/UX設計書 7章）を担当するサービス。
 *
 * 視聴1回としてカウントする条件（design doc 7章）:
 *   1. AFK状態ではない（PlaceholderAPI経由で %essentials_afk% を参照。無い場合は常にfalse扱い）
 *   2. 楽曲の総演奏時間の80%以上を聴き終えている（呼び出し側=[com.github.sahyuya.oyasaiMusic.audio.PlaybackEngine]
 *      の onListenThresholdReached コールバックで既に判定済み）
 *   3. 同一プレイヤー・同一楽曲の再生が「1時間3回・1日10回」の制限内である
 *   4. ジュークボックス（環境音）再生ではない（isAmbientPlaybackで呼び出し側が除外）
 *
 * 視聴ポイント（10回ごとに作者へ+1pt）は「収益化条件（参考URL登録 or 審査通過）」を
 * 満たす楽曲のみ付与する（UI/UX設計書 7章）。総視聴回数(songs.views)自体は
 * 収益化条件を問わず加算する。
 *
 * GUIフェーズで追加: [onRegistered] コールバック。視聴回数が実際にDBへ記録できた場合のみ
 * メインスレッドで呼ばれる。「再生を2回行っても再生回数の反映が画面に表示されない」という
 * 報告への対応で、呼び出し側(GUI画面)がこれを使って現在の画面を再描画できるようにするため
 * 追加した（DBの記録自体は元々正しく行われていたが、GUI側が更新後の値を再取得・再描画していなかった）。
 */
class ViewCountService(
    private val plugin: Plugin,
    private val socialRepository: SocialRepository,
    private val hourLimit: Int,
    private val dayLimit: Int,
    private val viewsPerPoint: Int,
) {

    /**
     * 視聴条件を満たした際に呼び出す。内部でDBアクセスを非同期化するため、
     * 呼び出し元のスレッド（メインスレッド想定）をブロックしない。
     *
     * @param onRegistered 視聴回数が実際に加算できた場合のみメインスレッドで呼ばれる
     *        （AFK・上限到達等でスキップされた場合は呼ばれない）
     */
    fun registerView(player: Player, song: Song, isAmbientPlayback: Boolean, onRegistered: (() -> Unit)? = null) {
        if (isAmbientPlayback) return
        val songId = song.id ?: return
        if (isAfk(player)) return

        Bukkit.getScheduler().runTaskAsynchronously(
            plugin,
            Runnable {
                val nowSeconds = System.currentTimeMillis() / 1000
                if (!socialRepository.registerQualifiedView(
                        listenerUuid = player.uniqueId,
                        authorUuid = song.authorUuid,
                        songId = songId,
                        timestamp = nowSeconds,
                        hourLimit = hourLimit,
                        dayLimit = dayLimit,
                        monetizationEligible = song.isMonetizationEligible(),
                        viewsPerPoint = viewsPerPoint,
                    )
                ) return@Runnable

                if (onRegistered != null) {
                    Bukkit.getScheduler().runTask(plugin, Runnable { onRegistered() })
                }
            },
        )
    }

    private fun isAfk(player: Player): Boolean {
        val papi = Bukkit.getPluginManager().getPlugin("PlaceholderAPI") ?: return false
        if (!papi.isEnabled) return false
        return try {
            me.clip.placeholderapi.PlaceholderAPI.setPlaceholders(player, "%essentials_afk%")
                .equals("true", ignoreCase = true)
        } catch (_: Throwable) {
            false
        }
    }
}
