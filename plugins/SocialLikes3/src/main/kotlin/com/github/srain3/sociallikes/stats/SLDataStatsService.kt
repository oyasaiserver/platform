package com.github.srain3.sociallikes.stats

import com.github.srain3.sociallikes.datas.SLDatabase
import java.time.DayOfWeek
import java.time.Duration
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.YearMonth
import java.time.ZoneId
import java.time.temporal.TemporalAdjusters
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

  data class BoardStats(
      val weekly: LikeSeries,
      val weeklyMvp: List<SLDatabase.BuildLikeSummary>,
      val weeklyOwnerMvp: List<SLDatabase.OwnerLikeSummary>,
      val growingBuilds: List<SLDatabase.BuildLikeSummary>,
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
      val likeDna: LikeDnaDiagnosis,
      val likeTimestampCoverage: SLDatabase.LikeTimestampCoverage,
      val reliableTimestampPopulation: SLDatabase.ReliableTimestampPopulation,
      val playerNames: Map<String, String>,
  )

  data class InitialLikeSpeedStats(
      val measuredBuildCount: Int,
      val targetBuildCount: Int,
      val ownerSelfFirstLikeBuildCount: Int,
      val minimumMillis: Long,
      val medianMillis: Long,
      val maximumMillis: Long,
      val averageMillis: Long,
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
      val receivedShare: Double,
      val givenShare: Double,
      val receivedAverageDelta: Double,
  )

  data class ComparisonStats(
      val ownAverage: Double,
      val globalAverage: Double,
      val globalMedian: Double,
      val givenTargetAverage: Double,
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

  data class LikeDistributionStats(val average: Double, val median: Double, val maximum: Int)

  data class RecentBuildComparison(
      val olderAverage: Double,
      val newerAverage: Double,
      val olderCount: Int,
      val newerCount: Int,
  )

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

  fun loadWeeklySeries(buckets: Int = DEFAULT_BUCKETS): LikeSeries =
      LikeSeries(
          Period.WEEK,
          SLDatabase.loadWeeklyLikeCountsBlocking(buckets.coerceIn(1, 52)).map {
            LikeBucket(formatWeekLabel(it.weekStart), it.weekStart, it.count)
          },
      )

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
    val timestamps = SLDatabase.loadLikeTimestampsSinceBlocking(toMillis(firstStart))
    val counts = mutableMapOf<LocalDate, Int>()

    timestamps.forEach { millis ->
      val date = Instant.ofEpochMilli(millis).atZone(zoneId).toLocalDate()
      val key =
          when (period) {
            Period.MONTH -> YearMonth.from(date).atDay(1)
            Period.YEAR -> LocalDate.of(date.year, 1, 1)
            Period.WEEK -> date.with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
          }
      counts[key] = (counts[key] ?: 0) + 1
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
    return BoardStats(
        weekly = loadWeeklySeries(DEFAULT_BUCKETS),
        weeklyMvp = SLDatabase.loadBuildLikeLeadersSinceBlocking(toMillis(currentWeekStart), 5),
        weeklyOwnerMvp =
            SLDatabase.loadOwnerLikeLeadersSinceBlocking(toMillis(currentWeekStart), 5),
        growingBuilds =
            SLDatabase.loadBuildLikeGrowthBlocking(
                toMillis(currentWeekStart),
                toMillis(previousWeekStart),
                5,
            ),
    )
  }

  fun loadExtendedStats(
      playerUuid: String,
      limit: Int = 5,
      includeLifeWorld: Boolean = false,
  ): ExtendedStats {
    val normalizedLimit = limit.coerceIn(1, 10)
    val currentWeekStart = currentWeekStart()
    val nextWeekStart = currentWeekStart.plusWeeks(1)
    val twelveWeeksStart = currentWeekStart.minusWeeks(11)
    val weeklyStartMillis = toMillis(currentWeekStart)
    val playerWeek =
        SLDatabase.loadPeriodSummaryBlocking(
            playerUuid,
            weeklyStartMillis,
            toMillis(nextWeekStart),
        )
    val ownFirstLikeCount =
        SLDatabase.loadFirstLikeCountBlocking(playerUuid, 1).firstOrNull()?.count ?: 0
    val globalFirstLikers =
        SLDatabase.loadFirstLikerRankingBlocking(null, normalizedLimit).map {
          PlayerCountRow(it.playerUuid, it.count)
        }
    val ownFirstLikers =
        SLDatabase.loadFirstLikerRankingBlocking(playerUuid, normalizedLimit).map {
          PlayerCountRow(it.playerUuid, it.count)
        }
    val benefactors =
        SLDatabase.loadTopLikersForOwnerBlocking(playerUuid, normalizedLimit).map {
          PlayerCountRow(it.playerUuid, it.count)
        }
    val weeklyLikedOwners =
        SLDatabase.loadWeeklyLikedOwnersBlocking(playerUuid, weeklyStartMillis, normalizedLimit)
            .map { OwnerCountRow(it.ownerUuid, it.currentCount) }
    val mutualLikes =
        SLDatabase.loadMutualLikeStatsBlocking(playerUuid, normalizedLimit).let { stats ->
          MutualLikeStats(
              stats.pairCount,
              stats.likedOwnerCount,
              stats.likerCount,
              stats.pairs.map { MutualLikePairRow(it.playerUuid, it.likesGiven, it.likesReceived) },
          )
        }
    val socialOverview =
        SLDatabase.loadSocialOverviewBlocking(playerUuid).let {
          SocialOverviewStats(it.supportedOwnerCount, it.supporterCount)
        }
    val favoriteBuilderCapture =
        SLDatabase.loadFavoriteBuilderCaptureBlocking(playerUuid)?.let {
          FavoriteBuilderCaptureRow(it.ownerUuid, it.totalBuildCount, it.likedBuildCount)
        }
    val firstEncounters =
        SLDatabase.loadFirstEncounterLikesBlocking(
                playerUuid,
                toMillis(LocalDate.of(2026, 1, 14)),
                normalizedLimit,
            )
            .map { FirstEncounterRow(it.ownerUuid, it.firstLikedAt) }
    val similarTastePlayers =
        SLDatabase.loadSimilarTastePlayersBlocking(playerUuid, normalizedLimit).map {
          PlayerCountRow(it.playerUuid, it.count)
        }
    val regularSupporters =
        SLDatabase.loadRegularSupportersBlocking(playerUuid, normalizedLimit).map {
          RegularSupporterRow(it.playerUuid, it.likeCount, it.activeWeekCount)
        }
    val repeaterRate =
        SLDatabase.loadRepeaterRateBlocking(playerUuid).let {
          RepeaterRateStats(it.repeaterCount, it.uniqueLikerCount)
        }
    val fastestSupporters =
        SLDatabase.loadFastestSupportersBlocking(playerUuid, normalizedLimit).map {
          PlayerCountRow(it.playerUuid, it.firstSupportCount)
        }
    val fastestSupporterBuildCount = SLDatabase.loadOwnerCompleteLikedBuildCountBlocking(playerUuid)
    val givenLikeEvents =
        SLDatabase.loadGivenLikeEventsBlocking(playerUuid, reliableInitialLikeBuildCreatedSince)
    val receivedLikeEvents =
        SLDatabase.loadReceivedLikeEventsBlocking(playerUuid, reliableInitialLikeBuildCreatedSince)
    val likeTimestampCoverage = SLDatabase.loadLikeTimestampCoverageBlocking()
    val reliableTimestampPopulation =
        SLDatabase.loadReliableTimestampPopulationBlocking(reliableInitialLikeBuildCreatedSince)
    val initialLikeEvents = receivedLikeEvents
    val initialLikeSpeed =
        calculateInitialLikeSpeed(
            initialLikeEvents,
            playerUuid,
            SLDatabase.loadOwnerBuildCountCreatedSinceBlocking(
                playerUuid,
                reliableInitialLikeBuildCreatedSince,
            ),
        )
    val activityRhythm = calculateActivityRhythm(givenLikeEvents)
    val ageDistribution =
        AgeDistributionStats(
            given = calculateAgeBuckets(givenLikeEvents),
            received =
                calculateAgeBuckets(
                    receivedLikeEvents.filter { it.playerUuid != playerUuid },
                ),
        )
    val givenStreak = calculateStreak(givenLikeEvents.map { it.likedAt })
    val receivedStreak = calculateStreak(receivedLikeEvents.map { it.likedAt })
    val givenLongTail = calculateLongTail(givenLikeEvents)
    val receivedLongTail = calculateLongTail(receivedLikeEvents)
    val personalBestHistory = calculatePersonalBestHistory(givenLikeEvents)
    val likeDiversity =
        calculateLikeDiversity(SLDatabase.loadGivenLikeDimensionsBlocking(playerUuid))
    val ownBuildLikeCounts = SLDatabase.loadBuildLikeCountsBlocking(playerUuid)
    val globalBuildLikeCounts = SLDatabase.loadBuildLikeCountsBlocking()
    val likedBuildLikeCounts = SLDatabase.loadLikedBuildLikeCountsBlocking(playerUuid)
    val worldReactions =
        SLDatabase.loadWorldReactionSummariesBlocking(playerUuid)
            .filter { includeLifeWorld || !isLifeWorld(it.worldName) }
            .let(::calculateWorldReactions)
    val comparison =
        ComparisonStats(
            ownAverage = average(ownBuildLikeCounts),
            globalAverage = average(globalBuildLikeCounts),
            globalMedian = median(globalBuildLikeCounts),
            givenTargetAverage = average(likedBuildLikeCounts),
        )
    val balance = GiveReceiveBalance(likedBuildLikeCounts.size, ownBuildLikeCounts.sum())
    val distribution =
        LikeDistributionStats(
            average = average(ownBuildLikeCounts),
            median = median(ownBuildLikeCounts),
            maximum = ownBuildLikeCounts.maxOrNull() ?: 0,
        )
    val recentComparison =
        calculateRecentBuildComparison(SLDatabase.loadBuildHistoryTimelineBlocking(playerUuid))
    val concentration = calculateLikeConcentration(ownBuildLikeCounts)
    val publicity =
        calculatePublicityStats(
            SLDatabase.loadPublicityReactionsBlocking(playerUuid),
            normalizedLimit,
        )
    val likeDna = calculateLikeDna(activityRhythm, likeDiversity)
    val playerNames =
        SLDatabase.loadPlayerNamesBlocking(
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
                publicity.recurringBuilds.map { it.ownerUuid }
        )

    return ExtendedStats(
        weekly = loadWeeklySeries(DEFAULT_BUCKETS),
        playerWeek =
            PeriodSummaryStats(
                label = formatWeekLabel(currentWeekStart),
                buildsCreated = playerWeek.buildsCreated,
                likesGiven = playerWeek.likesGiven,
                likesReceived = playerWeek.likesReceived,
                publicityCount = playerWeek.publicityCount,
            ),
        globalFirstLikers = globalFirstLikers,
        ownFirstLikers = ownFirstLikers,
        benefactors = benefactors,
        weeklyLikedOwners = weeklyLikedOwners,
        ownBuilds =
            SLDatabase.loadOwnBuildLikeRankingBlocking(playerUuid, normalizedLimit).map {
              OwnBuildRow(it.buildId, it.title, it.likeCount)
            },
        peakLikeDay =
            SLDatabase.loadPeakLikeDayBlocking(toMillis(twelveWeeksStart))?.let {
              PeakLikeDayStats(formatDateLabel(it.date), it.count, it.averageCount)
            },
        ownFirstLikeCount = ownFirstLikeCount,
        recentBuildHistory =
            SLDatabase.loadBuildHistoryTimelineBlocking(playerUuid).takeLast(normalizedLimit).map {
              BuildHistoryRow(
                  it.buildId,
                  it.title,
                  formatDateLabel(it.createdAt.toLocalDate()),
                  it.likesReceived,
              )
            },
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
        likeDna = likeDna,
        likeTimestampCoverage = likeTimestampCoverage,
        reliableTimestampPopulation = reliableTimestampPopulation,
        playerNames = playerNames,
    )
  }

  /** Public data only: the server dialog deliberately aggregates this across every build. */
  fun loadServerPublicityStats(limit: Int = 5): PublicityStats =
      calculatePublicityStats(SLDatabase.loadPublicityReactionsBlocking(), limit.coerceIn(1, 10))

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
    )
  }

  private fun calculateActivityRhythm(
      events: List<SLDatabase.BuildLikeEvent>
  ): ActivityRhythmStats {
    val bandCount = 8
    val counts = List(7) { MutableList(bandCount) { 0 } }
    var nightCount = 0
    var morningCount = 0
    var weekendCount = 0
    var weekdayCount = 0
    events.forEach { event ->
      val local = Instant.ofEpochMilli(event.likedAt).atZone(analysisZoneId)
      val dayIndex = local.dayOfWeek.value - 1
      counts[dayIndex][local.hour / 3]++
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
        timeBandLabels =
            listOf("00-02", "03-05", "06-08", "09-11", "12-14", "15-17", "18-20", "21-23"),
        weekdayCounts = counts.map { it.toList() },
        rhythmDiagnosis = rhythmDiagnosis,
        dayTypeDiagnosis = dayTypeDiagnosis,
    )
  }

  private fun calculateAgeBuckets(events: List<SLDatabase.BuildLikeEvent>): List<AgeBucket> {
    val counts = IntArray(4)
    events.forEach { event ->
      val ageDays =
          Duration.between(
                  createdAtInstant(event.createdAt),
                  Instant.ofEpochMilli(event.likedAt),
              )
              .toDays()
      when {
        ageDays <= 0 -> counts[0]++
        ageDays < 7 -> counts[1]++
        ageDays <= 30 -> counts[2]++
        else -> counts[3]++
      }
    }
    return listOf("当日", "7日以内", "30日以内", "30日超").mapIndexed { index, label ->
      AgeBucket(label, counts[index])
    }
  }

  private fun calculateStreak(timestamps: List<Long>): StreakStats {
    val activeDates =
        timestamps
            .map { Instant.ofEpochMilli(it).atZone(analysisZoneId).toLocalDate() }
            .toSortedSet()
    if (activeDates.isEmpty()) return StreakStats(0, 0)
    var longest = 0
    var running = 0
    var previous: LocalDate? = null
    activeDates.forEach { date ->
      running = if (previous?.plusDays(1) == date) running + 1 else 1
      longest = max(longest, running)
      previous = date
    }
    var current = 0
    var cursor = LocalDate.now(analysisZoneId)
    while (cursor in activeDates) {
      current++
      cursor = cursor.minusDays(1)
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
    val receivedTotal = rows.sumOf { it.ownReceivedLikes }
    val givenTotal = rows.sumOf { it.givenLikes }
    return rows
        .filter { it.ownBuildCount > 0 || it.givenLikes > 0 }
        .map { row ->
          val ownAverage =
              if (row.ownBuildCount == 0) 0.0
              else row.ownReceivedLikes.toDouble() / row.ownBuildCount
          val globalAverage =
              if (row.globalBuildCount == 0) 0.0
              else row.globalReceivedLikes.toDouble() / row.globalBuildCount
          WorldReactionRow(
              worldName = row.worldName,
              receivedShare =
                  if (receivedTotal == 0) 0.0 else row.ownReceivedLikes * 100.0 / receivedTotal,
              givenShare = if (givenTotal == 0) 0.0 else row.givenLikes * 100.0 / givenTotal,
              receivedAverageDelta = ownAverage - globalAverage,
          )
        }
        .sortedWith(
            compareByDescending<WorldReactionRow> { max(it.receivedShare, it.givenShare) }
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
    return RecentBuildComparison(
        olderAverage = older.map { it.likesReceived }.average(),
        newerAverage = newer.map { it.likesReceived }.average(),
        olderCount = older.size,
        newerCount = newer.size,
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

  fun niceMax(rawMax: Int): Int {
    if (rawMax <= 0) return 4
    val roughStep = rawMax.toDouble() / 4.0
    val magnitude = 10.0.pow(floor(kotlin.math.log10(roughStep.coerceAtLeast(1.0)))).toInt()
    val step =
        listOf(1.0, 2.0, 2.5, 5.0, 10.0)
            .map { (it * magnitude).toInt() }
            .firstOrNull { it >= roughStep } ?: magnitude * 10
    return max(step * 4, rawMax)
  }

  fun axisTicks(axisMax: Int, divisions: Int = 4): List<Int> {
    val normalizedDivisions = divisions.coerceAtLeast(1)
    return (0..normalizedDivisions).map { axisMax * it / normalizedDivisions }
  }

  fun scaleLevel(count: Int, maxCount: Int, levels: Int): Int {
    if (levels <= 0 || maxCount <= 0 || count <= 0) return 0
    return ceil(count.toDouble() / maxCount.toDouble() * levels.toDouble())
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

  private fun toMillis(date: LocalDate): Long = date.atStartOfDay(zoneId).toInstant().toEpochMilli()
}
