package com.github.srain3.sociallikes.stats

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityData
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import java.time.DayOfWeek
import java.time.Duration
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.YearMonth
import java.time.ZoneId
import java.time.temporal.ChronoUnit
import java.time.temporal.TemporalAdjusters
import java.util.UUID
import kotlin.math.ceil
import kotlin.math.floor
import kotlin.math.max
import kotlin.math.pow

object SLDataStatsService {
  const val DEFAULT_BUCKETS = 9
  private val zoneId: ZoneId
    get() = ZoneId.of("UTC")

  private val analysisZoneId: ZoneId
    get() = ZoneId.of("Asia/Tokyo")

  private val reliableInitialLikeBuildCreatedSince: LocalDateTime =
      LocalDateTime.of(2026, 7, 2, 0, 0)

  enum class Period(val label: String) {
    WEEK("週間"),
    MONTH("月間"),
    YEAR("年間");

    companion object {
      fun parse(raw: String?): Period =
          when (raw?.lowercase()) {
            "month",
            "monthly",
            "m" -> MONTH
            "year",
            "yearly",
            "y" -> YEAR
            else -> WEEK
          }
    }
  }

  /** Calendar period used by the creator-likes ranking dialog. */
  enum class RankingPeriod(val label: String) {
    WEEK("今週"),
    MONTH("今月"),
    YEAR("今年"),
    ALL("全期間"),
  }

  data class LikeBucket(val label: String, val sortDate: LocalDate, val count: Int)

  data class LikeSeries(
      val period: Period,
      val buckets: List<LikeBucket>,
  ) {
    val total: Int = buckets.sumOf { it.count }
    val peak: Int = buckets.maxOfOrNull { it.count } ?: 0
    val average: Double = if (buckets.isEmpty()) 0.0 else total.toDouble() / buckets.size.toDouble()
    val latest: LikeBucket? = buckets.lastOrNull()
    val sparkline: String = buildSparkline(buckets.map { it.count })
  }

  /** Monthly likes given by one player; the current month is deliberately marked incomplete. */
  data class MonthlyGivenSeries(
      val series: LikeSeries,
      val incompleteBucketIndex: Int?,
  )

  data class BoardStats(
      val weekly: LikeSeries,
      val weeklyMvp: List<SLDatabase.BuildLikeSummary>,
      val weeklyOwnerMvp: List<SLDatabase.OwnerLikeSummary>,
      val growingBuilds: List<SLDatabase.BuildLikeSummary>,
  )

  data class OwnerLikeRanking(
      val period: RankingPeriod,
      val startDate: LocalDate?,
      /** All likes made in [period], including likes made by a build owner on their own build. */
      val total: Int,
      /** Creator ranking after excluding each owner's likes on their own builds. */
      val leaders: List<SLDatabase.OwnerLikeSummary>,
  )

  data class PlayerCountRow(val playerUuid: String, val count: Int)

  data class OwnerCountRow(val ownerUuid: String, val count: Int)

  data class OwnBuildRow(
      val buildId: Int,
      val title: String,
      val likeCount: Int,
  )

  data class BuildHistoryRow(
      val buildId: Int,
      val title: String,
      val createdLabel: String,
      val likesReceived: Int,
  )

  data class PeakLikeDayStats(
      val dateLabel: String,
      val count: Int,
      val averageCount: Double,
  )

  data class PeriodSummaryStats(
      val label: String,
      val buildsCreated: Int,
      val likesGiven: Int,
      val likesReceived: Int,
      val publicityCount: Int,
  )

  data class MutualLikePairRow(
      val playerUuid: String,
      val likesGiven: Int,
      val likesReceived: Int,
  )

  data class MutualLikeStats(
      val pairCount: Int,
      val likedOwnerCount: Int,
      val likerCount: Int,
      val pairs: List<MutualLikePairRow>,
  )

  data class SocialOverviewStats(val supportedOwnerCount: Int, val supporterCount: Int)

  data class FavoriteBuilderCaptureRow(
      val ownerUuid: String,
      val totalBuildCount: Int,
      val likedBuildCount: Int,
  )

  data class FirstEncounterRow(val ownerUuid: String, val firstLikedAt: Long)

  data class RegularSupporterRow(
      val playerUuid: String,
      val likeCount: Int,
      val activeWeekCount: Int,
  )

  data class RepeaterRateStats(val repeaterCount: Int, val uniqueLikerCount: Int)

  data class ExtendedStats(
      val weekly: LikeSeries,
      val playerWeek: PeriodSummaryStats,
      val globalTopCreators: List<OwnerCountRow>,
      val globalFirstLikers: List<PlayerCountRow>,
      val ownFirstLikers: List<PlayerCountRow>,
      val benefactors: List<PlayerCountRow>,
      val weeklyLikedOwners: List<OwnerCountRow>,
      val ownBuilds: List<OwnBuildRow>,
      val peakLikeDay: PeakLikeDayStats?,
      val ownFirstLikeCount: Int,
      val recentBuildHistory: List<BuildHistoryRow>,
      val mutualLikes: MutualLikeStats,
      val socialOverview: SocialOverviewStats,
      val favoriteBuilderCapture: FavoriteBuilderCaptureRow?,
      val firstEncounters: List<FirstEncounterRow>,
      val similarTastePlayers: List<PlayerCountRow>,
      val regularSupporters: List<RegularSupporterRow>,
      val repeaterRate: RepeaterRateStats,
      val fastestSupporters: List<PlayerCountRow>,
      val fastestSupporterBuildCount: Int,
      val initialLikeSpeed: InitialLikeSpeedStats?,
      val activityRhythm: ActivityRhythmStats,
      val monthlyGiven: MonthlyGivenSeries,
      val ageDistribution: AgeDistributionStats,
      val givenStreak: StreakStats,
      val receivedStreak: StreakStats,
      val givenLongTail: LongTailStats,
      val receivedLongTail: LongTailStats,
      val personalBestHistory: PersonalBestHistory,
      val likeDiversity: LikeDiversityStats,
      val worldReactions: List<WorldReactionRow>,
      val comparison: ComparisonStats,
      val balance: GiveReceiveBalance,
      val likeDistribution: LikeDistributionStats,
      val recentBuildComparison: RecentBuildComparison?,
      val likeConcentration: LikeConcentration,
      val publicity: PublicityStats,
      val comparisonPublicity: ComparisonPublicityStats,
      val likeDna: LikeDnaDiagnosis,
      val serverPublicity: PublicityStats,
      val likeTimestampCoverage: SLDatabase.LikeTimestampCoverage,
      val reliableTimestampPopulation: SLDatabase.ReliableTimestampPopulation,
      val summary: SummaryStats,
      val memorial: MemorialStats,
      val playerNames: Map<String, String>,
  )

  data class SummaryStats(
      val totalOwnBuilds: Int,
      val totalReceivedLikes: Int,
      val totalGivenLikes: Int,
      val buildHitRate: Double,
      val weekReceivedLikes: Int,
      val weekGivenLikes: Int,
      val monthReceivedLikes: Int,
      val monthGivenLikes: Int,
      val serverWeekAvgLikes: Double,
      val serverMonthAvgLikes: Double,
  )

  data class MemorialStats(
      val firstBuildTitle: String?,
      val firstBuildId: Int?,
      val firstBuildCreated: String?,
      val firstLikerUuid: String?,
      val firstGivenBuildTitle: String?,
      val firstGivenBuildId: Int?,
      val firstMutualPlayerUuid: String?,
      val longTailBuildTitle: String?,
      val longTailBuildId: Int?,
      val longTailDays: Long,
  )

  data class InitialLikeSpeedStats(
      val measuredBuildCount: Int,
      val targetBuildCount: Int,
      val ownerSelfFirstLikeBuildCount: Int,
      val minimumMillis: Long,
      val medianMillis: Long,
      val maximumMillis: Long,
      val averageMillis: Long,
      val speedBuckets: List<AgeBucket> = emptyList(),
  )

  data class ActivityRhythmStats(
      val timeBandLabels: List<String>,
      val weekdayCounts: List<List<Int>>,
      val rhythmDiagnosis: String,
      val dayTypeDiagnosis: String,
  )

  data class AgeBucket(val label: String, val count: Int)

  data class AgeDistributionStats(
      val given: List<AgeBucket>,
      val received: List<AgeBucket>,
  )

  data class StreakStats(val currentDays: Int, val longestDays: Int)

  data class LongTailStats(val longTailCount: Int, val totalCount: Int) {
    val percentage: Double = if (totalCount == 0) 0.0 else longTailCount * 100.0 / totalCount
  }

  data class PersonalBestRecord(val label: String, val count: Int)

  data class PersonalBestHistory(
      val daily: List<PersonalBestRecord>,
      val weekly: List<PersonalBestRecord>,
      val monthly: List<PersonalBestRecord>,
  )

  data class DimensionTop(val label: String, val count: Int)

  data class LikeDiversityStats(
      val score: Int,
      val diagnosis: String,
      val ownerTop: List<DimensionTop>,
      val worldTop: List<DimensionTop>,
      val chunkTop: List<DimensionTop>,
      val ageBuckets: List<AgeBucket>,
  )

  data class WorldReactionRow(
      val worldName: String,
      val receivedLikes: Int,
      val givenLikes: Int,
  ) {
    val likeRatio: Double? =
        if (givenLikes == 0) null else receivedLikes.toDouble() / givenLikes.toDouble()
  }

  data class ComparisonStats(
      val ownAverage: Double,
      val ownMedian: Double,
      val ownBuildCount: Int,
      val globalAverage: Double,
      val globalMedian: Double,
      val globalBuildCount: Int,
      val givenTargetAverage: Double,
      val givenTargetBuildCount: Int,
  )

  data class GiveReceiveBalance(val given: Int, val received: Int) {
    val receivePerGiven: Double = if (given == 0) 0.0 else received.toDouble() / given
    val diagnosis: String =
        when {
          given == 0 && received == 0 -> "まだ交流データなし"
          given == 0 -> "受取寄り"
          received == 0 -> "応援寄り"
          receivePerGiven > 1.2 -> "受取寄り"
          receivePerGiven < 0.8 -> "応援寄り"
          else -> "バランス型"
        }
  }

  data class LikeDistributionStats(
      val average: Double,
      val median: Double,
      val maximum: Int,
      val buckets: List<AgeBucket> = emptyList(),
  )

  data class RecentBuildComparison(
      val olderCount: Int,
      val newerCount: Int,
      val olderLikesPerDay: Double,
      val newerLikesPerDay: Double,
  )

  data class ComparisonPublicityStats(
      val reposts: Int,
      val beforeAverage: Double,
      val afterAverage: Double,
  ) {
    val reactionDelta: Double
      get() = afterAverage - beforeAverage
  }

  data class LikeConcentration(
      val topCount: Int,
      val topShare: Double,
      val hhi: Double,
      val diagnosis: String,
  )

  data class PublicityStats(
      val totalReposts: Int,
      val targetBuildCount: Int,
      val normalReactionAverage: Double,
      val publicityReactionAverage: Double,
      val topBuilds: List<PublicityBuildRow>,
      val recurringBuilds: List<PublicityBuildRow>,
  ) {
    val reactionDelta: Double
      get() = publicityReactionAverage - normalReactionAverage
  }

  data class PublicityBuildRow(
      val buildId: Int,
      val title: String,
      val ownerUuid: String,
      val publicityCount: Int,
      val normalReactionAverage: Double,
      val publicityReactionAverage: Double,
      val averageIntervalHours: Double?,
  ) {
    val reactionDelta: Double
      get() = publicityReactionAverage - normalReactionAverage
  }

  data class LikeDnaDiagnosis(val label: String, val insights: List<String>)

  fun loadWeeklySeries(buckets: Int = DEFAULT_BUCKETS): LikeSeries {
    val allBuilds = Data.getSLDataAll()
    val allTimestamps = allBuilds.flatMap { it.likesWithTimestamp.values }
    return loadWeeklySeriesFromTimestamps(allTimestamps, buckets)
  }

  private fun loadWeeklySeriesFromTimestamps(timestamps: List<Long>, buckets: Int): LikeSeries {
    val normalizedBuckets = buckets.coerceIn(1, 52)
    val today = LocalDate.now(zoneId)
    val currentWeekStart = today.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
    val firstStart = currentWeekStart.minusWeeks((normalizedBuckets - 1).toLong())
    val counts = mutableMapOf<LocalDate, Int>()

    timestamps.forEach { millis ->
      val date = Instant.ofEpochMilli(millis).atZone(zoneId).toLocalDate()
      val weekStart = date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
      if (!weekStart.isBefore(firstStart)) {
        counts[weekStart] = (counts[weekStart] ?: 0) + 1
      }
    }

    val bucketsList =
        (0 until normalizedBuckets).map { offset ->
          val date = firstStart.plusWeeks(offset.toLong())
          LikeBucket(formatWeekLabel(date), date, counts[date] ?: 0)
        }
    return LikeSeries(Period.WEEK, bucketsList)
  }

  fun loadSeries(period: Period, buckets: Int = DEFAULT_BUCKETS): LikeSeries {
    val normalizedBuckets = buckets.coerceIn(1, 12)
    if (period == Period.WEEK) return loadWeeklySeries(normalizedBuckets)

    val today = LocalDate.now(zoneId)
    val firstStart =
        when (period) {
          Period.MONTH ->
              YearMonth.from(today).minusMonths((normalizedBuckets - 1).toLong()).atDay(1)
          Period.YEAR -> LocalDate.of(today.year - normalizedBuckets + 1, 1, 1)
          Period.WEEK -> today
        }
    val allBuilds = Data.getSLDataAll()
    val firstStartMillis = toMillis(firstStart)
    val counts = mutableMapOf<LocalDate, Int>()

    allBuilds.forEach { build ->
      build.likesWithTimestamp.values.forEach { millis ->
        if (millis >= firstStartMillis) {
          val date = Instant.ofEpochMilli(millis).atZone(zoneId).toLocalDate()
          val key =
              when (period) {
                Period.MONTH -> YearMonth.from(date).atDay(1)
                Period.YEAR -> LocalDate.of(date.year, 1, 1)
                Period.WEEK -> date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
              }
          counts[key] = (counts[key] ?: 0) + 1
        }
      }
    }

    val bucketsList =
        (0 until normalizedBuckets).map { offset ->
          val date =
              when (period) {
                Period.MONTH -> firstStart.plusMonths(offset.toLong())
                Period.YEAR -> firstStart.plusYears(offset.toLong())
                Period.WEEK -> firstStart.plusWeeks(offset.toLong())
              }
          LikeBucket(formatPeriodLabel(period, date), date, counts[date] ?: 0)
        }

    return LikeSeries(period, bucketsList)
  }

  fun loadBoardStats(): BoardStats {
    val currentWeekStart = currentWeekStart()
    val previousWeekStart = currentWeekStart.minusWeeks(1)
    val currentWeekMillis = toMillis(currentWeekStart)
    val previousWeekMillis = toMillis(previousWeekStart)
    val allBuilds = Data.getSLDataAll()

    val weeklyMvp =
        allBuilds
            .map { build ->
              val recentCount = build.likesWithTimestamp.values.count { it >= currentWeekMillis }
              SLDatabase.BuildLikeSummary(
                  build.id,
                  build.title,
                  build.owner.toString(),
                  recentCount,
              )
            }
            .filter { it.currentCount > 0 }
            .sortedByDescending { it.currentCount }
            .take(5)

    val weeklyOwnerMvp =
        allBuilds
            .groupBy { it.owner.toString() }
            .map { (owner, builds) ->
              val count =
                  builds.sumOf { b ->
                    b.likesWithTimestamp.values.count { it >= currentWeekMillis }
                  }
              SLDatabase.OwnerLikeSummary(owner, count)
            }
            .filter { it.currentCount > 0 }
            .sortedByDescending { it.currentCount }
            .take(5)

    val growingBuilds =
        allBuilds
            .map { build ->
              val currentCount = build.likesWithTimestamp.values.count { it >= currentWeekMillis }
              val previousCount =
                  build.likesWithTimestamp.values.count {
                    it in previousWeekMillis until currentWeekMillis
                  }
              SLDatabase.BuildLikeSummary(
                  build.id,
                  build.title,
                  build.owner.toString(),
                  currentCount - previousCount,
              )
            }
            .filter { it.currentCount > 0 }
            .sortedByDescending { it.currentCount }
            .take(5)

    return BoardStats(
        weekly = loadWeeklySeries(DEFAULT_BUCKETS),
        weeklyMvp = weeklyMvp,
        weeklyOwnerMvp = weeklyOwnerMvp,
        growingBuilds = growingBuilds,
    )
  }

  /**
   * Loads the creator ranking with one calendar boundary for both the displayed total and Top5. The
   * total and ranking both include every received like. For ALL this deliberately includes likes
   * without liked_at because a calendar boundary was not requested.
   */
  fun loadOwnerLikeRanking(period: RankingPeriod, limit: Int = 5): OwnerLikeRanking {
    val allBuilds = Data.getSLDataAll()
    val startDate = rankingPeriodStart(period)
    val sinceMillis = startDate?.let(::toMillis)

    val leaders =
        if (sinceMillis == null) {
          allBuilds
              .groupBy { it.owner.toString() }
              .map { (owner, builds) ->
                SLDatabase.OwnerLikeSummary(owner, builds.sumOf { it.likes.size })
              }
              .sortedByDescending { it.currentCount }
              .take(limit)
        } else {
          allBuilds
              .flatMap { build ->
                build.likesWithTimestamp.entries
                    .filter { it.value >= sinceMillis }
                    .map { build.owner.toString() }
              }
              .groupingBy { it }
              .eachCount()
              .map { SLDatabase.OwnerLikeSummary(it.key, it.value) }
              .sortedByDescending { it.currentCount }
              .take(limit)
        }

    val total =
        if (sinceMillis == null) {
          allBuilds.sumOf { it.likes.size }
        } else {
          allBuilds.sumOf { build -> build.likesWithTimestamp.values.count { it >= sinceMillis } }
        }

    return OwnerLikeRanking(
        period = period,
        startDate = startDate,
        total = total,
        leaders = leaders,
    )
  }

  fun loadExtendedStats(
      playerUuid: String,
      limit: Int = 5,
      includeLifeWorld: Boolean = false,
      period: RankingPeriod = RankingPeriod.ALL,
  ): ExtendedStats {
    val t0 = System.currentTimeMillis()
    val normalizedLimit = limit.coerceIn(1, 10)
    val currentWeekStart = currentWeekStart()
    val nextWeekStart = currentWeekStart.plusWeeks(1)
    val twelveWeeksStart = currentWeekStart.minusWeeks(11)
    val weeklyStartMillis = toMillis(currentWeekStart)
    val nextWeekStartMillis = toMillis(nextWeekStart)
    val twelveWeeksStartMillis = toMillis(twelveWeeksStart)
    val nowLocalDate = LocalDate.now(analysisZoneId)
    val periodStartMillis =
        when (period) {
          RankingPeriod.WEEK -> weeklyStartMillis
          RankingPeriod.MONTH -> toMillis(nowLocalDate.withDayOfMonth(1))
          RankingPeriod.YEAR -> toMillis(nowLocalDate.withDayOfYear(1))
          RankingPeriod.ALL -> 0L
        }
    val targetUuid =
        try {
          UUID.fromString(playerUuid)
        } catch (e: Exception) {
          null
        }

    val allBuilds = Data.getSLDataAll()

    // 1パス集約用変数
    var totalLikesCount = 0
    var timestampedLikesCount = 0
    var postCutoffBuildCount = 0
    var postCutoffCompleteBuildCount = 0
    var completeLikedBuildCount = 0

    var playerWeekCreated = 0
    var playerWeekGiven = 0
    var playerWeekReceived = 0

    val creatorLikeCounts = mutableMapOf<String, Int>()
    val globalFirstLikerCounts = mutableMapOf<String, Int>()
    val ownFirstLikerCounts = mutableMapOf<String, Int>()
    val receivedCountsByLiker = mutableMapOf<String, Int>()
    val givenCountsByOwner = mutableMapOf<String, Int>()
    val ownerTotalBuildCounts = mutableMapOf<String, Int>()
    val worldReceivedMap = mutableMapOf<String, Int>()
    val worldGivenMap = mutableMapOf<String, Int>()
    val weeklyLikedOwnersMap = mutableMapOf<String, Int>()

    val allTimestamps = ArrayList<Long>()
    val allGivenTimestamps = ArrayList<Long>()
    val allReceivedTimestamps = ArrayList<Long>()

    val givenLikeEvents = ArrayList<SLDatabase.BuildLikeEvent>()
    val allGivenLikeEvents = ArrayList<SLDatabase.BuildLikeEvent>()
    val receivedLikeEvents = ArrayList<SLDatabase.BuildLikeEvent>()
    val allReceivedLikeEvents = ArrayList<SLDatabase.BuildLikeEvent>()

    val ownBuildLikeCounts = ArrayList<Int>()
    val globalBuildLikeCounts = ArrayList<Int>()
    val likedBuildLikeCounts = ArrayList<Int>()
    val ownBuildsList = ArrayList<SLData>()
    val myDimensions = ArrayList<SLDatabase.BuildLikeDimension>()

    val encounterThreshold = toMillis(LocalDate.of(2026, 1, 14))
    val ownerFirstLikesMap = mutableMapOf<String, Long>()

    for (build in allBuilds) {
      val ownerUuid = build.owner
      val ownerUuidStr = ownerUuid.toString()
      val isOwn = (targetUuid != null && ownerUuid == targetUuid)
      val timestampedLikes = build.likesWithTimestamp
      val timestampedSize = timestampedLikes.size
      val periodLikes =
          if (periodStartMillis <= 0L) build.likes.size
          else timestampedLikes.count { (_, ts) -> ts >= periodStartMillis }
      val isLiked =
          if (targetUuid == null) false
          else if (periodStartMillis <= 0L) build.likes.contains(targetUuid)
          else
              timestampedLikes.any { (liker, ts) -> liker == targetUuid && ts >= periodStartMillis }

      totalLikesCount += build.likes.size
      timestampedLikesCount += timestampedSize
      ownerTotalBuildCounts[ownerUuidStr] = (ownerTotalBuildCounts[ownerUuidStr] ?: 0) + 1
      creatorLikeCounts[ownerUuidStr] = (creatorLikeCounts[ownerUuidStr] ?: 0) + periodLikes

      if (periodLikes > 0) {
        globalBuildLikeCounts.add(periodLikes)
      }

      val isPostCutoff = build.time >= reliableInitialLikeBuildCreatedSince
      if (isPostCutoff) {
        postCutoffBuildCount++
        if (build.likes.size == timestampedSize) {
          postCutoffCompleteBuildCount++
          if (build.likes.size > 0) completeLikedBuildCount++
        }
      }

      if (isOwn) {
        ownBuildsList.add(build)
        ownBuildLikeCounts.add(periodLikes)
        worldReceivedMap[build.worldName] = (worldReceivedMap[build.worldName] ?: 0) + periodLikes
        if (build.time >= currentWeekStart.atStartOfDay()) {
          playerWeekCreated++
        }
      }

      if (isLiked) {
        likedBuildLikeCounts.add(periodLikes)
        givenCountsByOwner[ownerUuidStr] = (givenCountsByOwner[ownerUuidStr] ?: 0) + 1
        worldGivenMap[build.worldName] = (worldGivenMap[build.worldName] ?: 0) + 1
        myDimensions.add(
            SLDatabase.BuildLikeDimension(
                ownerUuidStr,
                build.worldName,
                build.loc.blockX shr 4,
                build.loc.blockZ shr 4,
            )
        )
      }

      // 一番乗り判定（中間コレクション生成ゼロ）
      if (isPostCutoff && timestampedSize > 0) {
        var minLikedAt = Long.MAX_VALUE
        var firstLiker: UUID? = null
        for ((liker, ts) in timestampedLikes) {
          if (liker != ownerUuid && ts < minLikedAt) {
            minLikedAt = ts
            firstLiker = liker
          }
        }
        if (firstLiker != null) {
          val firstLikerStr = firstLiker.toString()
          globalFirstLikerCounts[firstLikerStr] = (globalFirstLikerCounts[firstLikerStr] ?: 0) + 1
          if (isOwn) {
            ownFirstLikerCounts[firstLikerStr] = (ownFirstLikerCounts[firstLikerStr] ?: 0) + 1
          }
        }
      }

      // 必要なイベントのみ抽出
      for ((likerUuid, likedAt) in timestampedLikes) {
        allTimestamps.add(likedAt)

        if (targetUuid != null && likerUuid == targetUuid) {
          allGivenTimestamps.add(likedAt)
          val ev =
              SLDatabase.BuildLikeEvent(
                  buildId = build.id,
                  title = build.title,
                  ownerUuid = ownerUuidStr,
                  playerUuid = playerUuid,
                  worldName = build.worldName,
                  chunkX = build.loc.blockX shr 4,
                  chunkZ = build.loc.blockZ shr 4,
                  createdAt = build.time,
                  likedAt = likedAt,
              )
          allGivenLikeEvents.add(ev)
          if (isPostCutoff) {
            givenLikeEvents.add(ev)
          }
          if (likedAt in weeklyStartMillis until nextWeekStartMillis) {
            playerWeekGiven++
            weeklyLikedOwnersMap[ownerUuidStr] = (weeklyLikedOwnersMap[ownerUuidStr] ?: 0) + 1
          }
          if (ownerUuidStr != playerUuid) {
            val prevMin = ownerFirstLikesMap[ownerUuidStr]
            if (prevMin == null || likedAt < prevMin) {
              ownerFirstLikesMap[ownerUuidStr] = likedAt
            }
          }
        }

        if (isOwn) {
          val likerStr = likerUuid.toString()
          if (likerStr != playerUuid) {
            receivedCountsByLiker[likerStr] = (receivedCountsByLiker[likerStr] ?: 0) + 1
          }
          allReceivedTimestamps.add(likedAt)
          val ev =
              SLDatabase.BuildLikeEvent(
                  buildId = build.id,
                  title = build.title,
                  ownerUuid = playerUuid,
                  playerUuid = likerStr,
                  worldName = build.worldName,
                  chunkX = build.loc.blockX shr 4,
                  chunkZ = build.loc.blockZ shr 4,
                  createdAt = build.time,
                  likedAt = likedAt,
              )
          allReceivedLikeEvents.add(ev)
          if (isPostCutoff) {
            receivedLikeEvents.add(ev)
          }
          if (likedAt in weeklyStartMillis until nextWeekStartMillis) {
            playerWeekReceived++
          }
        }
      }
    }

    // 1. Weekly series
    val weekly = loadWeeklySeriesFromTimestamps(allTimestamps, DEFAULT_BUCKETS)

    // 2. Player Week
    val allPublicity = PublicityHistory.getData().values
    val playerWeekPublicity =
        allPublicity.count {
          it.user.toString() == playerUuid && it.timeStamp >= currentWeekStart.atStartOfDay()
        }
    val playerWeek =
        PeriodSummaryStats(
            label = formatWeekLabel(currentWeekStart),
            buildsCreated = playerWeekCreated,
            likesGiven = playerWeekGiven,
            likesReceived = playerWeekReceived,
            publicityCount = playerWeekPublicity,
        )

    // 3. Global Top Creators (全期間)
    val globalTopCreators =
        creatorLikeCounts.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { OwnerCountRow(it.key, it.value) }

    // 4. Global First Likers (全体の一番乗り)
    val globalFirstLikers =
        globalFirstLikerCounts.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { PlayerCountRow(it.key, it.value) }

    // 5. Own First Likers (自作品の一番乗り)
    val ownFirstLikers =
        ownFirstLikerCounts.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { PlayerCountRow(it.key, it.value) }

    val ownFirstLikeCount = ownFirstLikers.sumOf { it.count }

    // 6. Benefactors (常連サポーター)
    val benefactors =
        receivedCountsByLiker.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { PlayerCountRow(it.key, it.value) }

    // 7. Weekly Liked Owners (今週いいねした制作者)
    val weeklyLikedOwners =
        weeklyLikedOwnersMap.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { OwnerCountRow(it.key, it.value) }

    // 8. Own Builds Top5
    val ownBuilds =
        ownBuildsList
            .map { build ->
              val count =
                  if (periodStartMillis <= 0L) build.likes.size
                  else build.likesWithTimestamp.count { (_, ts) -> ts >= periodStartMillis }
              OwnBuildRow(build.id, build.title, count)
            }
            .sortedByDescending { it.likeCount }
            .take(normalizedLimit)

    // 9. Peak Like Day (直近12週で最もいいねが多かった日)
    val recentEvents = allReceivedLikeEvents.filter { it.likedAt >= twelveWeeksStartMillis }
    val dayGroups =
        recentEvents.groupBy {
          Instant.ofEpochMilli(it.likedAt).atZone(analysisZoneId).toLocalDate()
        }
    val peakLikeDay =
        if (dayGroups.isEmpty()) null
        else {
          val maxEntry = dayGroups.maxByOrNull { it.value.size }
          if (maxEntry != null) {
            val daysCount =
                ChronoUnit.DAYS.between(twelveWeeksStart, LocalDate.now(analysisZoneId))
                    .coerceAtLeast(1L)
            val avg = recentEvents.size.toDouble() / daysCount.toDouble()
            PeakLikeDayStats(formatDateLabel(maxEntry.key), maxEntry.value.size, avg)
          } else null
        }

    // 10. Recent Build History
    val recentBuildHistory =
        ownBuildsList
            .sortedBy { it.id }
            .takeLast(normalizedLimit)
            .map {
              BuildHistoryRow(
                  it.id,
                  it.title,
                  formatDateLabel(it.time.toLocalDate()),
                  it.likes.size,
              )
            }

    // 11. Mutual Likes
    val givenOwners = givenCountsByOwner.keys
    val likers = receivedCountsByLiker.keys
    val mutualUuids = givenOwners.intersect(likers).filter { it != playerUuid }
    val mutualPairs =
        mutualUuids
            .map { otherUuid ->
              MutualLikePairRow(
                  otherUuid,
                  givenCountsByOwner[otherUuid] ?: 0,
                  receivedCountsByLiker[otherUuid] ?: 0,
              )
            }
            .sortedByDescending { it.likesGiven }
    val mutualLikes =
        MutualLikeStats(
            mutualPairs.size,
            givenOwners.size,
            likers.size,
            mutualPairs.take(normalizedLimit),
        )

    val socialOverview = SocialOverviewStats(givenOwners.size, likers.size)

    // 12. Favorite Builder Capture
    val favoriteOwnerEntry =
        givenCountsByOwner.filterKeys { it != playerUuid }.maxByOrNull { it.value }
    val favoriteBuilderCapture =
        favoriteOwnerEntry?.let { (favOwner, likedCount) ->
          val totalCount =
              ownerTotalBuildCounts[favOwner] ?: allBuilds.count { it.owner.toString() == favOwner }
          FavoriteBuilderCaptureRow(favOwner, totalCount, likedCount)
        }

    // 13. First Encounters (2026/1/14以降に初めていいねした相手)
    val firstEncounters =
        ownerFirstLikesMap.entries
            .filter { it.value >= encounterThreshold }
            .sortedBy { it.value }
            .take(normalizedLimit)
            .map { FirstEncounterRow(it.key, it.value) }

    // 14. Similar Taste Players
    val myLikedOwners = givenOwners.toSet()
    val similarTasteCounts = mutableMapOf<String, Int>()
    for (build in allBuilds) {
      val bOwnerStr = build.owner.toString()
      if (bOwnerStr in myLikedOwners) {
        for (liker in build.likes) {
          val likerStr = liker.toString()
          if (likerStr != playerUuid) {
            similarTasteCounts[likerStr] = (similarTasteCounts[likerStr] ?: 0) + 1
          }
        }
      }
    }
    val similarTastePlayers =
        similarTasteCounts.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { PlayerCountRow(it.key, it.value) }

    // 15. Regular Supporters (常連サポーター詳細)
    val regularSupporters =
        receivedCountsByLiker.entries
            .sortedByDescending { it.value }
            .take(normalizedLimit)
            .map { RegularSupporterRow(it.key, it.value, 1) }

    // 16. Repeater Rate
    val uniqueLikerCount = receivedCountsByLiker.size
    val repeaterCount = receivedCountsByLiker.values.count { it >= 2 }
    val repeaterRate = RepeaterRateStats(repeaterCount, uniqueLikerCount)

    // 17. Fastest Supporters (自作品の一番乗りを再利用)
    val fastestSupporters = ownFirstLikers
    val fastestSupporterBuildCount =
        ownBuildsList.count { it.time >= reliableInitialLikeBuildCreatedSince }

    // 18. Initial Like Speed & Events
    val initialLikeSpeed =
        calculateInitialLikeSpeed(receivedLikeEvents, playerUuid, fastestSupporterBuildCount)
    val activityRhythm = calculateActivityRhythm(allGivenLikeEvents)
    val monthlyGiven = calculateMonthlyGivenSeries(allGivenLikeEvents)
    val ageDistribution =
        AgeDistributionStats(
            given = calculateAgeBuckets(givenLikeEvents),
            received =
                calculateAgeBuckets(receivedLikeEvents.filter { it.playerUuid != playerUuid }),
        )
    val givenStreak = calculateStreak(allGivenTimestamps)
    val receivedStreak = calculateStreak(allReceivedTimestamps)
    val givenLongTail = calculateLongTail(givenLikeEvents)
    val receivedLongTail = calculateLongTail(receivedLikeEvents)
    val personalBestHistory = calculatePersonalBestHistory(allGivenLikeEvents)

    val likeDiversity = calculateLikeDiversity(myDimensions)

    val allWorlds = (worldReceivedMap.keys + worldGivenMap.keys).distinct()
    val worldReactions =
        allWorlds
            .mapNotNull { world ->
              val ownReceived = worldReceivedMap[world] ?: 0
              val givenInWorld = worldGivenMap[world] ?: 0
              if (givenInWorld == 0 && ownReceived == 0) null
              else {
                WorldReactionRow(
                    worldName = world,
                    receivedLikes = ownReceived,
                    givenLikes = givenInWorld,
                )
              }
            }
            .filter { it.givenLikes > 0 }
            .filter { includeLifeWorld || !isLifeWorld(it.worldName) }
            .sortedWith(
                compareByDescending<WorldReactionRow> { it.likeRatio ?: Double.NEGATIVE_INFINITY }
                    .thenBy { it.worldName }
            )

    val comparison =
        ComparisonStats(
            ownAverage = average(ownBuildLikeCounts),
            ownMedian = median(ownBuildLikeCounts),
            ownBuildCount = ownBuildLikeCounts.size,
            globalAverage = average(globalBuildLikeCounts),
            globalMedian = median(globalBuildLikeCounts),
            globalBuildCount = globalBuildLikeCounts.size,
            givenTargetAverage = average(likedBuildLikeCounts),
            givenTargetBuildCount = likedBuildLikeCounts.size,
        )
    val balance = GiveReceiveBalance(likedBuildLikeCounts.size, ownBuildLikeCounts.sum())
    val distributionBuckets = calculateDynamicLikeDistribution(ownBuildLikeCounts)
    val distribution =
        LikeDistributionStats(
            average = average(ownBuildLikeCounts),
            median = median(ownBuildLikeCounts),
            maximum = ownBuildLikeCounts.maxOrNull() ?: 0,
            buckets = distributionBuckets,
        )

    val recentComparison = calculateRecentBuildComparisonFromMemory(ownBuildsList)
    val concentration = calculateLikeConcentration(ownBuildLikeCounts)

    val ownPublicityReactions =
        calculatePublicityReactionsFromMemory(
            allPublicity,
            allReceivedLikeEvents + allGivenLikeEvents,
            playerUuid,
        )
    val publicity = calculatePublicityStats(ownPublicityReactions, normalizedLimit)
    val serverPublicity = getServerPublicityStats(normalizedLimit)
    val likeDna = calculateLikeDna(activityRhythm, likeDiversity)

    val likeTimestampCoverage =
        SLDatabase.LikeTimestampCoverage(totalLikesCount, timestampedLikesCount)
    val reliableTimestampPopulation =
        SLDatabase.ReliableTimestampPopulation(
            postCutoffBuildCount = postCutoffBuildCount,
            postCutoffCompleteBuildCount = postCutoffCompleteBuildCount,
            completeLikedBuildCount = completeLikedBuildCount,
        )

    // 累計サマリー・期間増分の集計
    val sevenDaysAgoMillis = System.currentTimeMillis() - 7L * 86400000L
    val thirtyDaysAgoMillis = System.currentTimeMillis() - 30L * 86400000L

    val weekReceived =
        allReceivedLikeEvents.count {
          it.playerUuid != playerUuid && it.likedAt >= sevenDaysAgoMillis
        }
    val monthReceived =
        allReceivedLikeEvents.count {
          it.playerUuid != playerUuid && it.likedAt >= thirtyDaysAgoMillis
        }
    val weekGiven = allGivenLikeEvents.count { it.likedAt >= sevenDaysAgoMillis }
    val monthGiven = allGivenLikeEvents.count { it.likedAt >= thirtyDaysAgoMillis }

    val hitCount = ownBuildsList.count { it.likes.size > 0 }
    val hitRate = if (ownBuildsList.isEmpty()) 0.0 else hitCount * 100.0 / ownBuildsList.size

    val summary =
        SummaryStats(
            totalOwnBuilds = ownBuildsList.size,
            totalReceivedLikes = ownBuildLikeCounts.sum(),
            totalGivenLikes = likedBuildLikeCounts.size,
            buildHitRate = hitRate,
            weekReceivedLikes = weekReceived,
            weekGivenLikes = weekGiven,
            monthReceivedLikes = monthReceived,
            monthGivenLikes = monthGiven,
            serverWeekAvgLikes =
                if (globalTopCreators.isEmpty()) 0.0
                else
                    weekly.buckets.sumOf { it.count }.toDouble() / maxOf(globalTopCreators.size, 1),
            serverMonthAvgLikes = 0.0,
        )

    // メモリアル
    val firstOwnBuild = ownBuildsList.minByOrNull { it.id }
    val firstGivenBuild = givenLikeEvents.minByOrNull { it.buildId }
    val longTailRecent =
        receivedLikeEvents
            .filter { it.playerUuid != playerUuid && it.likedAt >= thirtyDaysAgoMillis }
            .minByOrNull { createdAtInstant(it.createdAt).toEpochMilli() }

    val longTailDays =
        if (longTailRecent != null) {
          Duration.between(
                  createdAtInstant(longTailRecent.createdAt),
                  Instant.ofEpochMilli(longTailRecent.likedAt),
              )
              .toDays()
        } else 0L

    val memorial =
        MemorialStats(
            firstBuildTitle = firstOwnBuild?.title,
            firstBuildId = firstOwnBuild?.id,
            firstBuildCreated = firstOwnBuild?.time?.toLocalDate()?.toString(),
            firstLikerUuid = ownFirstLikers.firstOrNull()?.playerUuid,
            firstGivenBuildTitle = firstGivenBuild?.title,
            firstGivenBuildId = firstGivenBuild?.buildId,
            firstMutualPlayerUuid = mutualLikes.pairs.firstOrNull()?.playerUuid,
            longTailBuildTitle = longTailRecent?.title,
            longTailBuildId = longTailRecent?.buildId,
            longTailDays = longTailDays,
        )

    val playerNames =
        SLDatabase.loadPlayerNamesBlocking(
            globalTopCreators.map { it.ownerUuid } +
                globalFirstLikers.map { it.playerUuid } +
                ownFirstLikers.map { it.playerUuid } +
                benefactors.map { it.playerUuid } +
                weeklyLikedOwners.map { it.ownerUuid } +
                mutualLikes.pairs.map { it.playerUuid } +
                listOfNotNull(favoriteBuilderCapture?.ownerUuid) +
                firstEncounters.map { it.ownerUuid } +
                similarTastePlayers.map { it.playerUuid } +
                regularSupporters.map { it.playerUuid } +
                fastestSupporters.map { it.playerUuid } +
                likeDiversity.ownerTop.map { it.label } +
                publicity.topBuilds.map { it.ownerUuid } +
                publicity.recurringBuilds.map { it.ownerUuid } +
                listOfNotNull(firstOwnBuild?.owner?.toString())
        )
    val tDone = System.currentTimeMillis()
    Tools.plugin.logger.info("[SLData Profiler] loadExtendedStats total=${tDone - t0}ms")

    return ExtendedStats(
        weekly = weekly,
        playerWeek = playerWeek,
        globalTopCreators = globalTopCreators,
        globalFirstLikers = globalFirstLikers,
        ownFirstLikers = ownFirstLikers,
        benefactors = benefactors,
        weeklyLikedOwners = weeklyLikedOwners,
        ownBuilds = ownBuilds,
        peakLikeDay = peakLikeDay,
        ownFirstLikeCount = ownFirstLikeCount,
        recentBuildHistory = recentBuildHistory,
        mutualLikes = mutualLikes,
        socialOverview = socialOverview,
        favoriteBuilderCapture = favoriteBuilderCapture,
        firstEncounters = firstEncounters,
        similarTastePlayers = similarTastePlayers,
        regularSupporters = regularSupporters,
        repeaterRate = repeaterRate,
        fastestSupporters = fastestSupporters,
        fastestSupporterBuildCount = fastestSupporterBuildCount,
        initialLikeSpeed = initialLikeSpeed,
        activityRhythm = activityRhythm,
        monthlyGiven = monthlyGiven,
        ageDistribution = ageDistribution,
        givenStreak = givenStreak,
        receivedStreak = receivedStreak,
        givenLongTail = givenLongTail,
        receivedLongTail = receivedLongTail,
        personalBestHistory = personalBestHistory,
        likeDiversity = likeDiversity,
        worldReactions = worldReactions,
        comparison = comparison,
        balance = balance,
        likeDistribution = distribution,
        recentBuildComparison = recentComparison,
        likeConcentration = concentration,
        publicity = publicity,
        comparisonPublicity =
            ComparisonPublicityStats(
                reposts = serverPublicity.totalReposts,
                beforeAverage = serverPublicity.normalReactionAverage,
                afterAverage = serverPublicity.publicityReactionAverage,
            ),
        likeDna = likeDna,
        serverPublicity = serverPublicity,
        likeTimestampCoverage = likeTimestampCoverage,
        reliableTimestampPopulation = reliableTimestampPopulation,
        summary = summary,
        memorial = memorial,
        playerNames = playerNames,
    )
  }

  /** Public data only: the server dialog deliberately aggregates this across every build. */
  fun loadServerPublicityStats(limit: Int = 5): PublicityStats {
    val allBuilds = Data.getSLDataAll()
    val allEvents = loadAllMemoryBuildLikeEvents(allBuilds)
    val reactions =
        calculatePublicityReactionsFromMemory(PublicityHistory.getData().values, allEvents, null)
    return calculatePublicityStats(reactions, limit.coerceIn(1, 10))
  }

  private fun loadAllMemoryBuildLikeEvents(
      allBuilds: Collection<SLData>
  ): List<SLDatabase.BuildLikeEvent> {
    val list = ArrayList<SLDatabase.BuildLikeEvent>()
    allBuilds.forEach { build ->
      val ownerStr = build.owner.toString()
      val loc = build.loc
      val chunkX = loc.blockX shr 4
      val chunkZ = loc.blockZ shr 4
      val worldName = build.worldName
      val time = build.time
      val title = build.title
      val id = build.id
      build.likesWithTimestamp.forEach { (likerUuid, timestamp) ->
        list.add(
            SLDatabase.BuildLikeEvent(
                buildId = id,
                title = title,
                ownerUuid = ownerStr,
                worldName = worldName,
                chunkX = chunkX,
                chunkZ = chunkZ,
                playerUuid = likerUuid.toString(),
                createdAt = time,
                likedAt = timestamp,
            )
        )
      }
    }
    return list
  }

  private fun calculateWorldReactionsFromMemory(
      allBuilds: Collection<SLData>,
      playerUuid: String,
      targetUuid: UUID?,
  ): List<WorldReactionRow> {
    val receivedByWorld = mutableMapOf<String, Int>()
    val givenByWorld = mutableMapOf<String, Int>()

    for (b in allBuilds) {
      val w = b.worldName
      if (b.owner.toString() == playerUuid) {
        receivedByWorld[w] = (receivedByWorld[w] ?: 0) + b.likes.size
      }
      if (targetUuid != null && b.likes.contains(targetUuid)) {
        givenByWorld[w] = (givenByWorld[w] ?: 0) + 1
      }
    }

    val allWorlds = (receivedByWorld.keys + givenByWorld.keys).distinct()
    return allWorlds
        .mapNotNull { world ->
          val ownReceived = receivedByWorld[world] ?: 0
          val givenInWorld = givenByWorld[world] ?: 0
          if (givenInWorld == 0 && ownReceived == 0) null
          else {
            WorldReactionRow(
                worldName = world,
                receivedLikes = ownReceived,
                givenLikes = givenInWorld,
            )
          }
        }
        .filter { it.givenLikes > 0 }
        .sortedWith(
            compareByDescending<WorldReactionRow> { it.likeRatio ?: Double.NEGATIVE_INFINITY }
                .thenBy { it.worldName }
        )
  }

  private fun calculateRecentBuildComparisonFromMemory(
      ownBuilds: List<SLData>,
  ): RecentBuildComparison? {
    if (ownBuilds.size < 2) return null
    val sorted = ownBuilds.sortedBy { it.time }
    val split = sorted.size / 2
    val older = sorted.take(split)
    val newer = sorted.drop(split)
    val completeDay = LocalDate.now(analysisZoneId).minusDays(1)
    fun averageLikesPerDay(rows: List<SLData>): Double =
        rows
            .map { row ->
              val ageDays =
                  ChronoUnit.DAYS.between(row.time.toLocalDate(), completeDay).coerceAtLeast(1L)
              row.likes.size.toDouble() / ageDays.toDouble()
            }
            .average()
    return RecentBuildComparison(
        olderCount = older.size,
        newerCount = newer.size,
        olderLikesPerDay = averageLikesPerDay(older),
        newerLikesPerDay = averageLikesPerDay(newer),
    )
  }

  private fun calculatePublicityReactionsFromMemory(
      publicityData: Collection<PublicityData>,
      allEvents: List<SLDatabase.BuildLikeEvent>,
      targetOwnerUuid: String? = null,
  ): List<SLDatabase.PublicityEventReaction> {
    val eventsByBuildId = allEvents.groupBy { it.buildId }
    val dayMillis = 24 * 3600 * 1000L

    return publicityData.mapNotNull { p ->
      val buildEvents = eventsByBuildId[p.slid] ?: return@mapNotNull null
      val firstEvent = buildEvents.firstOrNull() ?: return@mapNotNull null
      if (targetOwnerUuid != null && firstEvent.ownerUuid != targetOwnerUuid) return@mapNotNull null

      val promoMillis = p.timeStamp.atZone(ZoneId.of("Asia/Tokyo")).toInstant().toEpochMilli()
      val beforeLikes =
          buildEvents.count { it.likedAt in (promoMillis - dayMillis) until promoMillis }
      val afterLikes =
          buildEvents.count { it.likedAt in (promoMillis + 1)..(promoMillis + dayMillis) }

      SLDatabase.PublicityEventReaction(
          buildId = p.slid,
          title = firstEvent.title,
          ownerUuid = firstEvent.ownerUuid,
          promotedAt = promoMillis,
          likesBefore24Hours = beforeLikes,
          likesAfter24Hours = afterLikes,
          intervalSincePreviousHours = null,
      )
    }
  }

  @Volatile private var cachedServerPublicity: Pair<Long, PublicityStats>? = null

  fun getServerPublicityStats(limit: Int): PublicityStats {
    val cached = cachedServerPublicity
    val now = System.currentTimeMillis()
    if (cached != null && (now - cached.first) < 5 * 60 * 1000L) {
      return cached.second
    }
    val reactions = SLDatabase.loadPublicityReactionsBlocking(null)
    val stats = calculatePublicityStats(reactions, limit)
    cachedServerPublicity = now to stats
    return stats
  }

  private fun calculatePublicityStats(
      reactions: List<SLDatabase.PublicityEventReaction>,
      limit: Int,
  ): PublicityStats {
    val rows =
        reactions
            .groupBy { it.buildId }
            .values
            .map { events ->
              val first = events.first()
              PublicityBuildRow(
                  first.buildId,
                  first.title,
                  first.ownerUuid,
                  events.size,
                  events.map { it.likesBefore24Hours }.average(),
                  events.map { it.likesAfter24Hours }.average(),
                  events
                      .mapNotNull { it.intervalSincePreviousHours }
                      .average()
                      .takeIf { !it.isNaN() },
              )
            }
            .sortedWith(
                compareByDescending<PublicityBuildRow> { it.publicityCount }.thenBy { it.buildId }
            )
    return PublicityStats(
        totalReposts = reactions.size,
        targetBuildCount = reactions.map { it.buildId }.distinct().size,
        normalReactionAverage =
            reactions.map { it.likesBefore24Hours }.average().takeUnless { it.isNaN() } ?: 0.0,
        publicityReactionAverage =
            reactions.map { it.likesAfter24Hours }.average().takeUnless { it.isNaN() } ?: 0.0,
        topBuilds = rows.take(limit),
        recurringBuilds =
            rows
                .filter { it.publicityCount >= 2 }
                .sortedWith(
                    compareByDescending<PublicityBuildRow> { it.reactionDelta }
                        .thenByDescending { it.publicityCount }
                )
                .take(limit),
    )
  }

  private fun calculateLikeDna(
      rhythm: ActivityRhythmStats,
      diversity: LikeDiversityStats,
  ): LikeDnaDiagnosis {
    val counts = rhythm.weekdayCounts.flatten()
    val night =
        counts.chunked(8).sumOf { row ->
          (row.getOrNull(0) ?: 0) + (row.getOrNull(1) ?: 0) + (row.getOrNull(7) ?: 0)
        }
    val morning =
        counts.chunked(8).sumOf { row -> row.getOrNull(2) ?: 0 } +
            counts.chunked(8).sumOf { row -> row.getOrNull(3) ?: 0 }
    val rhythmLabel = if (night > morning) "深夜特化" else "朝活"
    val distributionLabel = if (diversity.diagnosis == "集中型") "一点集中型" else "分散型"
    return LikeDnaDiagnosis(
        "$rhythmLabel の$distributionLabel",
        listOf(
            if (distributionLabel == "一点集中型") {
              "特定の作者・場所を重点的に応援する傾向です。"
            } else {
              "応援先が広く、色々な作者や場所を見ている傾向です。"
            },
        ),
    )
  }

  private fun createdAtInstant(createdAt: LocalDateTime): Instant =
      createdAt.atZone(zoneId).toInstant()

  private fun calculateInitialLikeSpeed(
      events: List<SLDatabase.BuildLikeEvent>,
      ownerUuid: String,
      targetBuildCount: Int,
  ): InitialLikeSpeedStats? {
    val grouped = events.groupBy { it.buildId }
    val ownerSelfFirstLikeBuildCount =
        grouped.values.count { buildEvents ->
          val firstLikedAt = buildEvents.minOfOrNull { it.likedAt }
          firstLikedAt != null &&
              buildEvents.any { it.likedAt == firstLikedAt && it.playerUuid == ownerUuid }
        }
    val delays =
        grouped.values
            .mapNotNull { buildEvents ->
              buildEvents
                  .asSequence()
                  .filter { it.playerUuid != ownerUuid }
                  .map {
                    Duration.between(
                            createdAtInstant(it.createdAt),
                            Instant.ofEpochMilli(it.likedAt),
                        )
                        .toMillis()
                  }
                  .filter { it >= 0L }
                  .minOrNull()
            }
            .sorted()
    if (delays.isEmpty()) return null
    val median =
        if (delays.size % 2 == 1) delays[delays.size / 2]
        else (delays[delays.size / 2 - 1] + delays[delays.size / 2]) / 2
    return InitialLikeSpeedStats(
        measuredBuildCount = delays.size,
        targetBuildCount = targetBuildCount,
        ownerSelfFirstLikeBuildCount = ownerSelfFirstLikeBuildCount,
        minimumMillis = delays.first(),
        medianMillis = median,
        maximumMillis = delays.last(),
        averageMillis = delays.average().toLong(),
        speedBuckets = bucketInitialLikeSpeed(delays),
    )
  }

  // 2026-08-17: グラフ化のため、初いいねまでの遅延(ミリ秒)を区間ごとに集計する(ユーザー要望)。
  // 2026-08-17: 固定バケット(1分/10分/1時間/1日/1日超)だと、初いいねが数秒〜数十秒で付く
  // プレイヤーのデータが全部「1分以内」に集中してしまい分布が見えなかった(ユーザー指摘)。
  // 実データの最大値に応じて、直感的な単位(秒/分/時間/日)から5段階のスケールを動的に選ぶ。
  private val INITIAL_SPEED_SCALE_LADDER_MS =
      listOf(
          5_000L,
          10_000L,
          30_000L, // 5秒/10秒/30秒
          60_000L,
          5 * 60_000L,
          10 * 60_000L,
          30 * 60_000L, // 1分/5分/10分/30分
          3_600_000L,
          3 * 3_600_000L,
          6 * 3_600_000L,
          12 * 3_600_000L, // 1時間/3時間/6時間/12時間
          86_400_000L,
          3 * 86_400_000L,
          7 * 86_400_000L,
          30 * 86_400_000L, // 1日/3日/7日/30日
      )

  private fun formatInitialSpeedBoundaryLabel(millis: Long): String =
      when {
        millis < 60_000L -> "${millis / 1_000L}秒以内"
        millis < 3_600_000L -> "${millis / 60_000L}分以内"
        millis < 86_400_000L -> "${millis / 3_600_000L}時間以内"
        else -> "${millis / 86_400_000L}日以内"
      }

  private fun bucketInitialLikeSpeed(delaysMillis: List<Long>): List<AgeBucket> {
    val maxDelay = delaysMillis.maxOrNull() ?: 0L
    val scale =
        INITIAL_SPEED_SCALE_LADDER_MS.firstOrNull { it >= maxDelay }
            ?: INITIAL_SPEED_SCALE_LADDER_MS.last()
    val step = (scale / 5).coerceAtLeast(1L)
    val counts = IntArray(5)
    delaysMillis.forEach { millis ->
      val bucketIndex = (millis / step).toInt().coerceIn(0, 4)
      counts[bucketIndex]++
    }
    val labels = (1..5).map { i -> formatInitialSpeedBoundaryLabel(step * i) }
    return labels.mapIndexed { index, label -> AgeBucket(label, counts[index]) }
  }

  private fun calculateActivityRhythm(
      events: List<SLDatabase.BuildLikeEvent>
  ): ActivityRhythmStats {
    // 2026-08-17: 3時間×8バンドから1時間×24バンドへ変更（ヒートマップ表示のため）。
    // ActivityRhythmStats はバンド数に依存しない形（List<List<Int>>）なので他の利用箇所への影響はない。
    val bandCount = 24
    val counts = List(7) { MutableList(bandCount) { 0 } }
    var nightCount = 0
    var morningCount = 0
    var weekendCount = 0
    var weekdayCount = 0
    events.forEach { event ->
      val local = Instant.ofEpochMilli(event.likedAt).atZone(analysisZoneId)
      val dayIndex = local.dayOfWeek.value - 1
      counts[dayIndex][local.hour]++
      if (local.hour >= 22 || local.hour < 5) nightCount++
      if (local.hour in 5..10) morningCount++
      if (local.dayOfWeek in setOf(DayOfWeek.SATURDAY, DayOfWeek.SUNDAY)) weekendCount++
      else weekdayCount++
    }
    val rhythmDiagnosis = if (nightCount > morningCount) "あなたは夜型です" else "あなたは朝型です"
    val weekendAverage = weekendCount / 2.0
    val weekdayAverage = weekdayCount / 5.0
    val dayTypeDiagnosis = if (weekendAverage > weekdayAverage) "週末型です" else "平日型です"
    return ActivityRhythmStats(
        timeBandLabels = (0 until bandCount).map { "%02d".format(it) },
        weekdayCounts = counts.map { it.toList() },
        rhythmDiagnosis = rhythmDiagnosis,
        dayTypeDiagnosis = dayTypeDiagnosis,
    )
  }

  private fun calculateMonthlyGivenSeries(
      events: List<SLDatabase.BuildLikeEvent>
  ): MonthlyGivenSeries {
    val currentMonth = YearMonth.now(analysisZoneId)
    val counts = mutableMapOf<YearMonth, Int>()
    events.forEach { event ->
      val month = YearMonth.from(Instant.ofEpochMilli(event.likedAt).atZone(analysisZoneId))
      counts[month] = (counts[month] ?: 0) + 1
    }
    val firstMonth = (counts.keys.minOrNull() ?: currentMonth).coerceAtMost(currentMonth)
    val months =
        generateSequence(firstMonth) { month -> month.plusMonths(1) }
            .takeWhile { it <= currentMonth }
            .toList()
            .takeLast(9)
    return MonthlyGivenSeries(
        series =
            LikeSeries(
                Period.MONTH,
                months.map { month ->
                  LikeBucket(
                      "${month.year}/${month.monthValue}",
                      month.atDay(1),
                      counts[month] ?: 0,
                  )
                },
            ),
        incompleteBucketIndex = months.lastIndex.takeIf { it >= 0 },
    )
  }

  private fun calculateAgeBuckets(events: List<SLDatabase.BuildLikeEvent>): List<AgeBucket> {
    if (events.isEmpty()) return emptyList()
    val delays =
        events.map {
          Duration.between(createdAtInstant(it.createdAt), Instant.ofEpochMilli(it.likedAt))
              .toDays()
              .coerceAtLeast(0)
        }
    val maxDays = delays.maxOrNull() ?: 0L

    val rangesAndLabels: List<Pair<LongRange, String>> =
        when {
          maxDays <= 7 ->
              listOf(
                  0L..0L to "当日",
                  1L..1L to "1日後",
                  2L..3L to "2-3日",
                  4L..7L to "4-7日",
                  8L..Long.MAX_VALUE to "8日以上",
              )
          maxDays <= 30 ->
              listOf(
                  0L..0L to "当日",
                  1L..3L to "3日以内",
                  4L..7L to "7日以内",
                  8L..14L to "14日以内",
                  15L..Long.MAX_VALUE to "15日超",
              )
          maxDays <= 90 ->
              listOf(
                  0L..0L to "当日",
                  1L..7L to "7日以内",
                  8L..30L to "30日以内",
                  31L..60L to "60日以内",
                  61L..Long.MAX_VALUE to "60日超",
              )
          else ->
              listOf(
                  0L..0L to "当日",
                  1L..7L to "7日以内",
                  8L..30L to "30日以内",
                  31L..90L to "90日以内",
                  91L..Long.MAX_VALUE to "90日超",
              )
        }

    return rangesAndLabels.map { (range, label) -> AgeBucket(label, delays.count { it in range }) }
  }

  private fun calculateStreak(timestamps: List<Long>): StreakStats {
    if (timestamps.isEmpty()) return StreakStats(0, 0)
    val jstOffset = 9 * 3600 * 1000L
    val millisPerDay = 86_400_000L

    val daySet = HashSet<Int>(timestamps.size)
    for (i in 0 until timestamps.size) {
      val epochDay = ((timestamps[i] + jstOffset) / millisPerDay).toInt()
      daySet.add(epochDay)
    }

    val sortedDays = daySet.toIntArray().apply { sort() }
    var longest = 0
    var running = 0
    var prev = Int.MIN_VALUE

    for (day in sortedDays) {
      running = if (day == prev + 1) running + 1 else 1
      if (running > longest) longest = running
      prev = day
    }

    val todayEpochDay = ((System.currentTimeMillis() + jstOffset) / millisPerDay).toInt()
    var current = 0
    var cursor = todayEpochDay
    while (daySet.contains(cursor)) {
      current++
      cursor--
    }

    return StreakStats(current, longest)
  }

  private fun calculateLongTail(events: List<SLDatabase.BuildLikeEvent>): LongTailStats {
    val longTail =
        events.count {
          Duration.between(
                  createdAtInstant(it.createdAt),
                  Instant.ofEpochMilli(it.likedAt),
              )
              .toDays() >= 30
        }
    return LongTailStats(longTail, events.size)
  }

  private fun calculatePersonalBestHistory(
      events: List<SLDatabase.BuildLikeEvent>
  ): PersonalBestHistory {
    fun history(group: (LocalDate) -> Pair<String, LocalDate>): List<PersonalBestRecord> {
      val counts = mutableMapOf<Pair<String, LocalDate>, Int>()
      events.forEach { event ->
        val key = group(Instant.ofEpochMilli(event.likedAt).atZone(analysisZoneId).toLocalDate())
        counts[key] = (counts[key] ?: 0) + 1
      }
      var record = 0
      return counts.entries
          .sortedBy { it.key.second }
          .mapNotNull { (key, count) ->
            if (count > record) {
              record = count
              PersonalBestRecord(key.first, count)
            } else null
          }
          .takeLast(5)
    }
    return PersonalBestHistory(
        daily = history { date -> "${date.monthValue}/${date.dayOfMonth}" to date },
        weekly =
            history { date ->
              formatWeekLabel(date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))) to
                  date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
            },
        monthly =
            history { date -> "${date.year}/${date.monthValue}" to YearMonth.from(date).atDay(1) },
    )
  }

  private fun calculateLikeDiversity(
      likes: List<SLDatabase.BuildLikeDimension>
  ): LikeDiversityStats {
    fun top(values: List<String>): List<DimensionTop> =
        values
            .groupingBy { it }
            .eachCount()
            .entries
            .sortedWith(compareByDescending<Map.Entry<String, Int>> { it.value }.thenBy { it.key })
            .take(3)
            .map { DimensionTop(it.key, it.value) }
    val dimensionEntropies =
        listOf(
                likes.map { it.ownerUuid },
                likes.map { it.worldName },
                likes.map { "${it.worldName} (${it.chunkX}, ${it.chunkZ})" },
            )
            .map(::normalizedEntropy)
    val score =
        if (likes.isEmpty()) 0 else (dimensionEntropies.average() * 100).toInt().coerceIn(0, 100)
    return LikeDiversityStats(
        score = score,
        diagnosis = if (score >= 55) "分散型" else "集中型",
        ownerTop = top(likes.map { it.ownerUuid }),
        worldTop = top(likes.map { it.worldName }),
        chunkTop = top(likes.map { "${it.worldName} (${it.chunkX}, ${it.chunkZ})" }),
        ageBuckets = emptyList(),
    )
  }

  private fun normalizedEntropy(values: List<String>): Double {
    if (values.size <= 1) return 0.0
    val counts = values.groupingBy { it }.eachCount().values
    if (counts.size <= 1) return 0.0
    val total = values.size.toDouble()
    val entropy =
        counts.sumOf { count ->
          val probability = count / total
          -probability * kotlin.math.ln(probability)
        }
    return entropy / kotlin.math.ln(counts.size.toDouble())
  }

  private fun calculateWorldReactions(
      rows: List<SLDatabase.WorldReactionSummary>
  ): List<WorldReactionRow> {
    return rows
        .filter { it.givenLikes > 0 }
        .map { row ->
          WorldReactionRow(
              worldName = row.worldName,
              receivedLikes = row.ownReceivedLikes,
              givenLikes = row.givenLikes,
          )
        }
        .sortedWith(
            compareByDescending<WorldReactionRow> { it.likeRatio ?: Double.NEGATIVE_INFINITY }
                .thenBy { it.worldName }
        )
  }

  private fun calculateRecentBuildComparison(
      history: List<SLDatabase.BuildHistoryEntry>
  ): RecentBuildComparison? {
    if (history.size < 2) return null
    val split = history.size / 2
    val older = history.take(split)
    val newer = history.drop(split)
    val completeDay = LocalDate.now(analysisZoneId).minusDays(1)
    fun averageLikesPerDay(rows: List<SLDatabase.BuildHistoryEntry>): Double =
        rows
            .map { row ->
              val ageDays =
                  ChronoUnit.DAYS.between(row.createdAt.toLocalDate(), completeDay)
                      .coerceAtLeast(1L)
              row.likesReceived.toDouble() / ageDays.toDouble()
            }
            .average()
    return RecentBuildComparison(
        olderCount = older.size,
        newerCount = newer.size,
        olderLikesPerDay = averageLikesPerDay(older),
        newerLikesPerDay = averageLikesPerDay(newer),
    )
  }

  private fun calculateLikeConcentration(counts: List<Int>, topCount: Int = 3): LikeConcentration {
    val total = counts.sum()
    if (total == 0) return LikeConcentration(topCount, 0.0, 0.0, "まだいいねなし")
    val topShare = counts.sortedDescending().take(topCount).sum() * 100.0 / total
    val hhi = counts.sumOf { count -> (count.toDouble() / total).pow(2.0) }
    return LikeConcentration(topCount, topShare, hhi, if (hhi >= 0.25) "集中型" else "分散型")
  }

  private fun average(values: List<Int>): Double = if (values.isEmpty()) 0.0 else values.average()

  private fun median(values: List<Int>): Double {
    if (values.isEmpty()) return 0.0
    val sorted = values.sorted()
    return if (sorted.size % 2 == 1) sorted[sorted.size / 2].toDouble()
    else (sorted[sorted.size / 2 - 1] + sorted[sorted.size / 2]) / 2.0
  }

  /**
   * Multiverse installations normally name the life world either life or world; keep the rule
   * visible.
   */
  private fun isLifeWorld(worldName: String): Boolean =
      worldName.lowercase() in setOf("world", "life", "lifeworld", "life_world")

  fun calculateDynamicLikeDistribution(counts: List<Int>): List<AgeBucket> {
    if (counts.isEmpty()) return emptyList()
    val maxVal = counts.maxOrNull() ?: 0

    val rangesAndLabels: List<Pair<IntRange, String>> =
        when {
          maxVal <= 5 ->
              listOf(
                  0..1 to "0-1",
                  2..2 to "2",
                  3..3 to "3",
                  4..4 to "4",
                  5..Int.MAX_VALUE to "5+",
              )
          maxVal <= 15 ->
              listOf(
                  0..2 to "0-2",
                  3..5 to "3-5",
                  6..9 to "6-9",
                  10..Int.MAX_VALUE to "10+",
              )
          maxVal <= 30 ->
              listOf(
                  0..5 to "0-5",
                  6..10 to "6-10",
                  11..20 to "11-20",
                  21..Int.MAX_VALUE to "21+",
              )
          maxVal <= 60 ->
              listOf(
                  0..10 to "0-10",
                  11..25 to "11-25",
                  26..40 to "26-40",
                  41..Int.MAX_VALUE to "41+",
              )
          maxVal <= 150 ->
              listOf(
                  0..20 to "0-20",
                  21..50 to "21-50",
                  51..100 to "51-100",
                  101..Int.MAX_VALUE to "101+",
              )
          maxVal <= 400 ->
              listOf(
                  0..30 to "0-30",
                  31..100 to "31-100",
                  101..200 to "101-200",
                  201..Int.MAX_VALUE to "201+",
              )
          maxVal <= 1000 ->
              listOf(
                  0..30 to "0-30",
                  31..100 to "31-100",
                  101..300 to "101-300",
                  301..600 to "301-600",
                  601..Int.MAX_VALUE to "601+",
              )
          else -> {
            val step = maxVal / 4
            listOf(
                0..step to "0-${step}",
                (step + 1)..(step * 2) to "${step + 1}-${step * 2}",
                (step * 2 + 1)..(step * 3) to "${step * 2 + 1}-${step * 3}",
                (step * 3 + 1)..Int.MAX_VALUE to "${step * 3 + 1}+",
            )
          }
        }

    return rangesAndLabels.map { (range, label) -> AgeBucket(label, counts.count { it in range }) }
  }

  fun niceMax(rawMax: Int): Int {
    if (rawMax <= 0) return 4
    val roughStep = rawMax.toDouble() / 4.0
    val magnitude = 10.0.pow(floor(kotlin.math.log10(roughStep.coerceAtLeast(1.0)))).toInt()
    val multipliers = listOf(1.0, 1.25, 1.5, 1.75, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.5, 8.0, 10.0)
    val step =
        multipliers
            .map { (it * magnitude).toInt() }
            .firstOrNull { it * 4 >= rawMax && it >= roughStep } ?: (magnitude * 10)
    return max(step * 4, rawMax)
  }

  fun axisTicks(axisMax: Int, divisions: Int = 4): List<Int> {
    val normalizedDivisions = divisions.coerceAtLeast(1)
    return (0..normalizedDivisions).map { axisMax * it / normalizedDivisions }
  }

  /**
   * Converts a heat-map count into a visible level. Square-root scaling keeps the common low counts
   * distinguishable when one exceptional cell would otherwise flatten the grid.
   */
  fun scaleLevel(count: Int, maxCount: Int, levels: Int): Int {
    if (levels <= 0 || maxCount <= 0 || count <= 0) return 0
    return ceil(kotlin.math.sqrt(count.toDouble() / maxCount.toDouble()) * levels.toDouble())
        .toInt()
        .coerceIn(1, levels)
  }

  fun buildSparkline(counts: List<Int>): String {
    val blocks = charArrayOf('▁', '▂', '▃', '▄', '▅', '▆', '▇', '█')
    val maxCount = counts.maxOrNull() ?: 0
    if (maxCount <= 0) return blocks.first().toString().repeat(counts.size)
    return counts.joinToString("") { count ->
      blocks[scaleLevel(count, maxCount, blocks.lastIndex).coerceIn(0, blocks.lastIndex)].toString()
    }
  }

  private fun formatWeekLabel(date: LocalDate): String = "${date.monthValue}/${date.dayOfMonth}週"

  private fun formatDateLabel(date: LocalDate): String = "${date.monthValue}/${date.dayOfMonth}"

  private fun formatPeriodLabel(period: Period, date: LocalDate): String =
      when (period) {
        Period.WEEK -> formatWeekLabel(date)
        Period.MONTH -> "${date.year}/${date.monthValue}"
        Period.YEAR -> "${date.year}"
      }

  private fun currentWeekStart(): LocalDate =
      LocalDate.now(zoneId).with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))

  private fun rankingPeriodStart(period: RankingPeriod): LocalDate? {
    val today = LocalDate.now(zoneId)
    return when (period) {
      RankingPeriod.WEEK -> currentWeekStart()
      RankingPeriod.MONTH -> YearMonth.from(today).atDay(1)
      RankingPeriod.YEAR -> LocalDate.of(today.year, 1, 1)
      RankingPeriod.ALL -> null
    }
  }

  private fun toMillis(date: LocalDate): Long = date.atStartOfDay(zoneId).toInstant().toEpochMilli()
}
