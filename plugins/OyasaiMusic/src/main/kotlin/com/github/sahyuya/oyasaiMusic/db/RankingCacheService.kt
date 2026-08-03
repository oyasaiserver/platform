package com.github.sahyuya.oyasaiMusic.db

import com.google.gson.GsonBuilder
import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import org.bukkit.Bukkit
import java.io.File
import java.time.DayOfWeek
import java.time.LocalDate
import java.time.ZoneId

/**
 * ランキング表示1件分（キャッシュJSONにもそのまま保存される）。
 * @param recordMaterial 楽曲ランキングのみ設定される（バニラのレコード素材名）。
 *        フォロワーランキング(FOLLOWERS)はnull。メインメニューのアイコン表示に使う
 *        （GUIフェーズで追加: 以前は楽曲アイコンが常に汎用ディスクだったため）。
 */
data class RankingEntryDto(
    val rank: Int,
    val songId: Long?,
    val title: String?,
    val authorUuid: String,
    val authorName: String,
    val score: Long,
    val recordMaterial: String? = null,
)

/** ある期間(日間/週間/総合)における、4指標分のランキングスナップショット。 */
data class RankingSnapshot(
    val generatedAtEpochSec: Long,
    /** 表示用の期間ラベル（例: "2026-07-14" や "2026-07-06〜2026-07-12"、総合は"総合"固定）。 */
    val periodLabel: String,
    val entries: Map<RankingMetric, List<RankingEntryDto>>,
)

/** ranking_cache.json の保存形式。境界チェック用に最終集計日を併せて保持する。 */
private data class RankingCacheFile(
    var daily: RankingSnapshot? = null,
    var weekly: RankingSnapshot? = null,
    var total: RankingSnapshot? = null,
    var lastDailyBoundaryEpochDay: Long? = null,
    var lastWeeklyBoundaryEpochDay: Long? = null,
)

/**
 * メインメニュー「①ランキング」の集計スケジューリングとキャッシュ管理（サヒュヤ氏の指示に基づく）。
 *
 *  - 日間: 毎日0時に「前日」分を集計してキャッシュ（表示は常に確定済みの前日結果）。
 *  - 週間: 毎週月曜0時に「前週(月〜日)」分を集計してキャッシュ。
 *  - 総合: 期間の窓なし（全期間累計）。30分ごとに再集計。
 *  - 各ランキングは7位まで。song_likes/view_history/favorites/followsの各テーブルから
 *    いいね数・再生数・お気に入り数(楽曲ごと)・フォロワー数(作者ごと)を集計する。
 *
 * 集計結果は `plugins/OyasaiMusic/ranking_cache.json` へ保存し、GUI表示のたびに再集計しない。
 * サーバー停止中に日付/週の境界を跨いでいた場合は、起動時のチェックで追いついて再集計する。
 *
 * 注意: JSON化には [com.google.gson.Gson]（Paper/Spigotサーバーに同梱されているライブラリ）を
 * そのまま利用しており、build.gradle.ktsへの追加依存は不要な想定。
 * タイムゾーンはサーバーのシステムデフォルト([ZoneId.systemDefault])を使用するため、
 * 実行サーバーの時刻設定が日本時間と異なる場合は要調整。
 */
class RankingCacheService(private val plugin: OyasaiMusic, private val rankingRepository: RankingRepository) {

    private val gson = GsonBuilder().setPrettyPrinting().create()
    private val cacheFile = File(plugin.dataFolder, "ranking_cache.json")
    private var state = RankingCacheFile()

    var dailySnapshot: RankingSnapshot? = null
        private set
    var weeklySnapshot: RankingSnapshot? = null
        private set
    var totalSnapshot: RankingSnapshot? = null
        private set

    /** onEnableから一度だけ呼び出す。ロード→境界チェック→定期タスク登録を行う。 */
    fun start() {
        load()
        dailySnapshot = state.daily
        weeklySnapshot = state.weekly
        totalSnapshot = state.total

        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            checkBoundariesAndRecompute(forceTotal = totalSnapshot == null)
        })

        // 1分ごとに日付/週の境界を跨いだかチェック（サーバーを起動しっぱなしにしていても0時に確実に切り替わるように）。
        Bukkit.getScheduler().runTaskTimerAsynchronously(plugin, Runnable { checkBoundariesAndRecompute(forceTotal = false) }, 20L * 60, 20L * 60)
        // 総合ランキングは30分ごとに再集計。
        Bukkit.getScheduler().runTaskTimerAsynchronously(plugin, Runnable { recomputeTotal() }, 20L * 60 * 30, 20L * 60 * 30)
    }

    /** キャッシュJSONを再読込し、GUIに公開するスナップショットも差し替える。 */
    fun reloadCache() {
        load()
        dailySnapshot = state.daily
        weeklySnapshot = state.weekly
        totalSnapshot = state.total
    }

    /** 管理コマンド用: 日間・週間ランキングを現在時刻基準で即時に再集計する。 */
    fun refreshPeriodRankings() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val zone = ZoneId.systemDefault()
            val today = LocalDate.now(zone)
            recomputeDaily(today, zone)
            val monday = today.with(DayOfWeek.MONDAY)
            recomputeWeekly(monday, zone)
            state.lastDailyBoundaryEpochDay = today.toEpochDay()
            state.lastWeeklyBoundaryEpochDay = monday.toEpochDay()
            save()
        })
    }

    private fun checkBoundariesAndRecompute(forceTotal: Boolean) {
        val zone = ZoneId.systemDefault()
        val today = LocalDate.now(zone)
        val todayEpochDay = today.toEpochDay()

        var changed = false
        if (state.lastDailyBoundaryEpochDay != todayEpochDay) {
            recomputeDaily(today, zone)
            state.lastDailyBoundaryEpochDay = todayEpochDay
            changed = true
        }

        val mondayOfThisWeek = today.with(DayOfWeek.MONDAY)
        val mondayEpochDay = mondayOfThisWeek.toEpochDay()
        if (state.lastWeeklyBoundaryEpochDay != mondayEpochDay) {
            recomputeWeekly(mondayOfThisWeek, zone)
            state.lastWeeklyBoundaryEpochDay = mondayEpochDay
            changed = true
        }

        if (forceTotal || state.total == null) {
            recomputeTotalSync()
            changed = true
        }

        if (changed) save()
    }

    private fun recomputeDaily(today: LocalDate, zone: ZoneId) {
        val yesterday = today.minusDays(1)
        val startOfYesterday = yesterday.atStartOfDay(zone).toEpochSecond()
        val startOfToday = today.atStartOfDay(zone).toEpochSecond()
        val snapshot = buildSnapshot(startOfYesterday, startOfToday, yesterday.toString())
        dailySnapshot = snapshot
        state.daily = snapshot
    }

    private fun recomputeWeekly(mondayOfThisWeek: LocalDate, zone: ZoneId) {
        val mondayOfLastWeek = mondayOfThisWeek.minusWeeks(1)
        val startOfLastWeek = mondayOfLastWeek.atStartOfDay(zone).toEpochSecond()
        val startOfThisWeek = mondayOfThisWeek.atStartOfDay(zone).toEpochSecond()
        val label = "$mondayOfLastWeek〜${mondayOfThisWeek.minusDays(1)}"
        val snapshot = buildSnapshot(startOfLastWeek, startOfThisWeek, label)
        weeklySnapshot = snapshot
        state.weekly = snapshot
    }

    private fun recomputeTotal() {
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            recomputeTotalSync()
            save()
        })
    }

    private fun recomputeTotalSync() {
        val snapshot = buildSnapshot(since = null, until = null, label = "総合")
        totalSnapshot = snapshot
        state.total = snapshot
    }

    private fun buildSnapshot(since: Long?, until: Long?, label: String): RankingSnapshot {
        val entries = mutableMapOf<RankingMetric, List<RankingEntryDto>>()
        for (metric in RankingMetric.entries) {
            entries[metric] = if (metric == RankingMetric.FOLLOWERS) {
                rankingRepository.topAuthorsInRange(since, until, limit = 7).mapIndexed { i, a ->
                    val name = Bukkit.getOfflinePlayer(a.authorUuid).name ?: "unknown"
                    RankingEntryDto(rank = i + 1, songId = null, title = null, authorUuid = a.authorUuid.toString(), authorName = name, score = a.score)
                }
            } else {
                rankingRepository.topSongsInRange(metric, since, until, limit = 7).mapIndexed { i, s ->
                    val name = Bukkit.getOfflinePlayer(s.song.authorUuid).name ?: "unknown"
                    RankingEntryDto(
                        rank = i + 1,
                        songId = s.song.id,
                        title = s.song.title,
                        authorUuid = s.song.authorUuid.toString(),
                        authorName = name,
                        score = s.score,
                        recordMaterial = s.song.recordMaterial,
                    )
                }
            }
        }
        return RankingSnapshot(generatedAtEpochSec = System.currentTimeMillis() / 1000, periodLabel = label, entries = entries)
    }

    private fun load() {
        try {
            if (cacheFile.exists()) {
                state = gson.fromJson(cacheFile.readText(), RankingCacheFile::class.java) ?: RankingCacheFile()
            }
        } catch (e: Exception) {
            plugin.logger.warning("ranking_cache.jsonの読み込みに失敗しました。初期状態から再集計します: ${e.message}")
            state = RankingCacheFile()
        }
    }

    private fun save() {
        try {
            plugin.dataFolder.mkdirs()
            cacheFile.writeText(gson.toJson(state))
        } catch (e: Exception) {
            plugin.logger.warning("ranking_cache.jsonの保存に失敗しました: ${e.message}")
        }
    }
}
