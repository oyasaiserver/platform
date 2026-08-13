package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.Tools
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.time.DayOfWeek
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.temporal.ChronoUnit
import java.time.temporal.TemporalAdjusters
import java.util.UUID
import java.util.concurrent.Callable
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import org.bukkit.plugin.java.JavaPlugin

object SLDatabase {
  private var connection: Connection? = null
  private var executor: ExecutorService? = null
  private lateinit var dbFile: File

  data class WeeklyLikeCount(val weekStart: LocalDate, val count: Int)

  data class BuildLikeSummary(
      val buildId: Int,
      val title: String,
      val ownerUuid: String,
      val currentCount: Int,
      val previousCount: Int = 0,
  ) {
    val delta: Int
      get() = currentCount - previousCount
  }

  data class OwnerLikeSummary(
      val ownerUuid: String,
      val currentCount: Int,
      val previousCount: Int = 0,
  ) {
    val delta: Int
      get() = currentCount - previousCount
  }

  data class PlayerLikeSummary(val playerUuid: String, val count: Int)

  data class OwnBuildLikeSummary(val buildId: Int, val title: String, val likeCount: Int)

  data class FirstLikeCount(val playerUuid: String, val count: Int)

  data class PeakLikeDay(val date: LocalDate, val count: Int, val averageCount: Double)

  /** One persisted like together with the build dimensions needed by /sldata analysis. */
  data class BuildLikeEvent(
      val buildId: Int,
      val title: String,
      val ownerUuid: String,
      val worldName: String,
      val chunkX: Int,
      val chunkZ: Int,
      val createdAt: LocalDateTime,
      val likedAt: Long,
  )

  private data class BuildSnapshot(
      val id: Int,
      val worldName: String,
      val locX: Double,
      val locY: Double,
      val locZ: Double,
      val chunkX: Int,
      val chunkZ: Int,
      val createdAt: String,
      val ownerUuid: String,
      val title: String,
      val checked: Boolean,
      val comment: String,
      val discordTextId: Long,
      val likes: List<LikeSnapshot>,
  )

  private data class LikeSnapshot(val playerUuid: String, val likedAt: Long?)

  data class MutualLikePair(
      val playerUuid: String,
      val likesGiven: Int,
      val likesReceived: Int,
  )

  data class MutualLikeStats(
      val pairCount: Int,
      val likedOwnerCount: Int,
      val likerCount: Int,
      val pairs: List<MutualLikePair>,
  )

  data class SocialOverview(val supportedOwnerCount: Int, val supporterCount: Int)

  data class FavoriteBuilderCapture(
      val ownerUuid: String,
      val totalBuildCount: Int,
      val likedBuildCount: Int,
  )

  data class FirstEncounterLike(val ownerUuid: String, val firstLikedAt: Long)

  data class RegularSupporterSummary(
      val playerUuid: String,
      val likeCount: Int,
      val activeWeekCount: Int,
  )

  data class RepeaterRate(val repeaterCount: Int, val uniqueLikerCount: Int)

  data class FastestSupporterSummary(val playerUuid: String, val firstSupportCount: Int)

  data class BuildHistoryEntry(
      val buildId: Int,
      val title: String,
      val createdAt: LocalDateTime,
      val likesReceived: Int,
  )

  data class PeriodSummary(
      val buildsCreated: Int,
      val likesGiven: Int,
      val likesReceived: Int,
      val publicityCount: Int,
  )

  /**
   * A single repost together with the reactions immediately around it (all windows are 24 hours).
   */
  data class PublicityEventReaction(
      val buildId: Int,
      val title: String,
      val ownerUuid: String,
      val promotedAt: Long,
      val likesBefore24Hours: Int,
      val likesAfter24Hours: Int,
      val intervalSincePreviousHours: Long?,
  )

  /** Event-analysis result for a build advertised at least once. */
  data class PublicityBuildReaction(
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

  /** Per-world view of a player's received and given reactions. */
  data class WorldReactionSummary(
      val worldName: String,
      val ownBuildCount: Int,
      val ownReceivedLikes: Int,
      val globalBuildCount: Int,
      val globalReceivedLikes: Int,
      val givenLikes: Int,
  )

  data class HomeGround(
      val worldName: String,
      val chunkX: Int,
      val chunkZ: Int,
      val buildCount: Int,
      val receivedLikes: Int,
  )

  data class HomeGroundPoint(
      val chunkX: Int,
      val chunkZ: Int,
      val buildCount: Int,
      val receivedLikes: Int,
  )

  data class LuckyBuild(
      val id: Int,
      val title: String,
      val ownerUuid: String,
      val worldName: String,
      val x: Double,
      val y: Double,
      val z: Double,
  )

  fun init(plugin: JavaPlugin) {
    dbFile = File(plugin.dataFolder, "SocialLikesShadow.db")
    plugin.dataFolder.mkdirs()

    executor =
        Executors.newSingleThreadExecutor { runnable ->
          Thread(runnable, "SL3-SQLite-Shadow").apply { isDaemon = true }
        }

    executor?.submit {
      try {
        Class.forName("org.sqlite.JDBC")
        connection =
            DriverManager.getConnection(
                    "jdbc:sqlite:${dbFile.absolutePath}?busy_timeout=5000&journal_mode=WAL"
                )
                .apply {
                  createStatement().use { statement ->
                    statement.execute("PRAGMA foreign_keys=ON")
                    statement.execute("PRAGMA synchronous=NORMAL")
                    statement.execute(
                        """
                        CREATE TABLE IF NOT EXISTS players (
                          uuid TEXT PRIMARY KEY,
                          last_known_name TEXT NOT NULL,
                          last_seen_at INTEGER NOT NULL
                        )
                        """
                            .trimIndent()
                    )
                    statement.execute(
                        """
                        CREATE TABLE IF NOT EXISTS builds (
                          id INTEGER PRIMARY KEY,
                          world_name TEXT NOT NULL,
                          loc_x REAL NOT NULL,
                          loc_y REAL NOT NULL,
                          loc_z REAL NOT NULL,
                          chunk_x INTEGER NOT NULL,
                          chunk_z INTEGER NOT NULL,
                          created_at TEXT NOT NULL,
                          owner_uuid TEXT NOT NULL,
                          title TEXT NOT NULL,
                          checked INTEGER NOT NULL,
                          comment TEXT NOT NULL,
                          discord_text_id INTEGER NOT NULL
                        )
                        """
                            .trimIndent()
                    )
                    statement.execute(
                        """
                        CREATE TABLE IF NOT EXISTS build_likes (
                          build_id INTEGER NOT NULL,
                          player_uuid TEXT NOT NULL,
                          liked_at INTEGER,
                          PRIMARY KEY (build_id, player_uuid),
                          FOREIGN KEY (build_id) REFERENCES builds(id) ON DELETE CASCADE
                        )
                        """
                            .trimIndent()
                    )
                    statement.execute(
                        """
                        CREATE TABLE IF NOT EXISTS publicity_history (
                          id INTEGER PRIMARY KEY,
                          timestamp TEXT NOT NULL,
                          user_uuid TEXT NOT NULL,
                          sl_id INTEGER NOT NULL
                        )
                        """
                            .trimIndent()
                    )
                    statement.execute(
                        "CREATE INDEX IF NOT EXISTS idx_build_likes_player_liked_at ON build_likes(player_uuid, liked_at)"
                    )
                    statement.execute(
                        "CREATE INDEX IF NOT EXISTS idx_build_likes_liked_at ON build_likes(liked_at)"
                    )
                    statement.execute(
                        "CREATE INDEX IF NOT EXISTS idx_builds_owner_created_at ON builds(owner_uuid, created_at)"
                    )
                    statement.execute(
                        "CREATE INDEX IF NOT EXISTS idx_publicity_history_sl_id_timestamp ON publicity_history(sl_id, timestamp)"
                    )
                  }
                }
        connection?.let { db -> logStartupSummary(plugin, db) }
      } catch (e: Exception) {
        loggerWarning("init", e)
      }
    }
  }

  fun close() {
    val service = executor ?: return
    val db = connection

    try {
      service
          .submit {
            try {
              db?.close()
            } catch (e: Exception) {
              loggerWarning("close", e)
            }
          }
          .get(10, TimeUnit.SECONDS)
    } catch (e: Exception) {
      loggerWarning("close", e)
    } finally {
      service.shutdown()
      executor = null
      connection = null
    }
  }

  /** Records a name observed while the player is online, without blocking the server thread. */
  fun upsertPlayer(uuid: UUID, name: String) {
    val lastKnownName = name.trim()
    if (lastKnownName.isEmpty()) return
    val uuidText = uuid.toString()
    val seenAt = System.currentTimeMillis()

    submit("upsertPlayer") {
      connection
          ?.prepareStatement(
              """
              INSERT INTO players (uuid, last_known_name, last_seen_at)
              VALUES (?, ?, ?)
              ON CONFLICT(uuid) DO UPDATE SET
                last_known_name = excluded.last_known_name,
                last_seen_at = excluded.last_seen_at
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setString(1, uuidText)
            statement.setString(2, lastKnownName)
            statement.setLong(3, seenAt)
            statement.executeUpdate()
          }
    }
  }

  /** Mirrors the YAML-backed build cache into the statistics-only SQLite shadow. */
  fun saveBuild(data: SLData) {
    val snapshot = data.toBuildSnapshot()
    submit("saveBuild") { upsertBuild(snapshot) }
  }

  fun deleteBuild(id: Int) {
    submit("deleteBuild") {
      connection?.prepareStatement("DELETE FROM builds WHERE id = ?")?.use { statement ->
        statement.setInt(1, id)
        statement.executeUpdate()
      }
    }
  }

  /** Mirrors a YAML publicity entry. Timestamp text is kept in the legacy local-time format. */
  fun savePublicityHistory(data: PublicityData) {
    submit("savePublicityHistory") {
      connection
          ?.prepareStatement(
              """
              INSERT INTO publicity_history (id, timestamp, user_uuid, sl_id)
              VALUES (?, ?, ?, ?)
              ON CONFLICT(id) DO UPDATE SET
                timestamp = excluded.timestamp,
                user_uuid = excluded.user_uuid,
                sl_id = excluded.sl_id
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setInt(1, data.dataID)
            statement.setString(2, data.timeStamp.toString())
            statement.setString(3, data.user.toString())
            statement.setInt(4, data.slid)
            statement.executeUpdate()
          }
    }
  }

  fun deletePublicityHistoryForBuild(slid: Int) {
    submit("deletePublicityHistoryForBuild") {
      connection?.prepareStatement("DELETE FROM publicity_history WHERE sl_id = ?")?.use { statement
        ->
        statement.setInt(1, slid)
        statement.executeUpdate()
      }
    }
  }

  /** Rebuilds the publicity mirror once the YAML load finishes. */
  fun syncPublicityHistory(entries: Collection<PublicityData>) {
    submit("syncPublicityHistory") {
      val db = connection ?: return@submit
      db.createStatement().use { it.executeUpdate("DELETE FROM publicity_history") }
      db.prepareStatement(
              "INSERT INTO publicity_history (id, timestamp, user_uuid, sl_id) VALUES (?, ?, ?, ?)"
          )
          .use { statement ->
            entries.forEach { data ->
              statement.setInt(1, data.dataID)
              statement.setString(2, data.timeStamp.toString())
              statement.setString(3, data.user.toString())
              statement.setInt(4, data.slid)
              statement.addBatch()
            }
            statement.executeBatch()
          }
    }
  }

  /** Rebuilds the shadow after the asynchronous YAML load completes. */
  fun syncBuilds(dataList: Collection<SLData>) {
    val snapshots = dataList.map { it.toBuildSnapshot() }
    submit("syncBuilds") {
      val db = connection ?: return@submit
      db.createStatement().use { statement ->
        statement.executeUpdate("DELETE FROM build_likes")
        statement.executeUpdate("DELETE FROM builds")
      }
      snapshots.forEach(::upsertBuild)
    }
  }

  /**
   * Resolves the supplied UUIDs with one query. This is intentionally limited to the /sldata
   * statistics cache; it does not fall back to Bukkit's offline-player lookup.
   */
  fun loadPlayerNamesBlocking(uuids: List<String>): Map<String, String> {
    val normalizedUuids = uuids.filter { it.isNotBlank() }.distinct()
    if (normalizedUuids.isEmpty()) return emptyMap()

    return submitBlocking("loadPlayerNames") {
          val names = mutableMapOf<String, String>()
          normalizedUuids.chunked(900).forEach { chunk ->
            val placeholders = chunk.joinToString(",") { "?" }
            connection
                ?.prepareStatement(
                    "SELECT uuid, last_known_name FROM players WHERE uuid IN ($placeholders)"
                )
                ?.use { statement ->
                  chunk.forEachIndexed { index, uuid -> statement.setString(index + 1, uuid) }
                  statement.executeQuery().use { results ->
                    while (results.next()) {
                      names[results.getString("uuid")] = results.getString("last_known_name")
                    }
                  }
                }
          }
          names
        }
        .orEmpty()
  }

  /** Returns all timestamped likes made by one player with their build dimensions. */
  fun loadGivenLikeEventsBlocking(playerUuid: String): List<BuildLikeEvent> =
      loadLikeEventsBlocking("loadGivenLikeEvents", "bl.player_uuid = ?", playerUuid)

  /** Returns all timestamped likes received by one build owner with their build dimensions. */
  fun loadReceivedLikeEventsBlocking(ownerUuid: String): List<BuildLikeEvent> =
      loadLikeEventsBlocking("loadReceivedLikeEvents", "b.owner_uuid = ?", ownerUuid)

  fun loadWeeklyLikeCountsBlocking(weeks: Int = 12): List<WeeklyLikeCount> {
    val normalizedWeeks = weeks.coerceIn(1, 52)
    val zoneId = ZoneId.of("UTC")
    val currentWeekStart =
        LocalDate.now(zoneId).with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
    val firstWeekStart = currentWeekStart.minusWeeks((normalizedWeeks - 1).toLong())
    val firstWeekStartMillis = firstWeekStart.atStartOfDay(zoneId).toInstant().toEpochMilli()

    return submitBlocking("loadWeeklyLikeCounts") {
          loadWeeklyLikeCountsDirect(
              connection,
              normalizedWeeks,
              zoneId,
              firstWeekStart,
              firstWeekStartMillis,
          )
        }
        .orEmpty()
  }

  fun loadBuildLikeLeadersSinceBlocking(
      sinceMillis: Long,
      limit: Int = 5,
  ): List<BuildLikeSummary> {
    val normalizedLimit = limit.coerceIn(1, 20)
    return submitBlocking("loadBuildLikeLeadersSince") {
          val summaries = mutableListOf<BuildLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, b.owner_uuid, COUNT(bl.player_uuid) AS likes_count
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE bl.liked_at IS NOT NULL AND bl.liked_at >= ?
                  GROUP BY b.id, b.title, b.owner_uuid
                  ORDER BY likes_count DESC, b.id ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setLong(1, sinceMillis)
                statement.setInt(2, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        BuildLikeSummary(
                            results.getInt("id"),
                            results.getString("title"),
                            results.getString("owner_uuid"),
                            results.getInt("likes_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadOwnerLikeLeadersSinceBlocking(
      sinceMillis: Long,
      limit: Int = 5,
  ): List<OwnerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadOwnerLikeLeadersSince") {
          val summaries = mutableListOf<OwnerLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, COUNT(bl.player_uuid) AS likes_count
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE bl.liked_at IS NOT NULL AND bl.liked_at >= ?
                  GROUP BY b.owner_uuid
                  ORDER BY likes_count DESC, b.owner_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setLong(1, sinceMillis)
                statement.setInt(2, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        OwnerLikeSummary(
                            results.getString("owner_uuid"),
                            results.getInt("likes_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadWeeklyLikedOwnersBlocking(
      playerUuid: String,
      sinceMillis: Long,
      limit: Int = 5,
  ): List<OwnerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadWeeklyLikedOwners") {
          val summaries = mutableListOf<OwnerLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, COUNT(bl.build_id) AS likes_count
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE bl.player_uuid = ? AND bl.liked_at IS NOT NULL AND bl.liked_at >= ?
                  GROUP BY b.owner_uuid
                  ORDER BY likes_count DESC, b.owner_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setLong(2, sinceMillis)
                statement.setInt(3, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        OwnerLikeSummary(
                            results.getString("owner_uuid"),
                            results.getInt("likes_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadTopLikersForOwnerBlocking(ownerUuid: String, limit: Int = 5): List<PlayerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadTopLikersForOwner") {
          val summaries = mutableListOf<PlayerLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT bl.player_uuid, COUNT(bl.build_id) AS likes_count
                  FROM builds b
                  JOIN build_likes bl ON bl.build_id = b.id
                  WHERE b.owner_uuid = ? AND bl.liked_at IS NOT NULL
                  GROUP BY bl.player_uuid
                  ORDER BY likes_count DESC, bl.player_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.setInt(2, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        PlayerLikeSummary(
                            results.getString("player_uuid"),
                            results.getInt("likes_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadFirstLikerRankingBlocking(
      ownerUuid: String?,
      limit: Int = 5,
  ): List<PlayerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadFirstLikerRanking") {
          val summaries = mutableListOf<PlayerLikeSummary>()
          val ownerFilter = if (ownerUuid == null) "" else "AND b.owner_uuid = ?"
          connection
              ?.prepareStatement(
                  """
                  WITH first_likes AS (
                    SELECT
                      bl.build_id,
                      bl.player_uuid,
                      ROW_NUMBER() OVER (
                        PARTITION BY bl.build_id
                        ORDER BY bl.liked_at ASC, bl.player_uuid ASC
                      ) AS row_number
                    FROM build_likes bl
                    JOIN builds b ON b.id = bl.build_id
                    WHERE bl.liked_at IS NOT NULL
                    $ownerFilter
                  )
                  SELECT player_uuid, COUNT(build_id) AS first_like_count
                  FROM first_likes
                  WHERE row_number = 1
                  GROUP BY player_uuid
                  ORDER BY first_like_count DESC, player_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                var parameterIndex = 1
                if (ownerUuid != null) {
                  statement.setString(parameterIndex, ownerUuid)
                  parameterIndex++
                }
                statement.setInt(parameterIndex, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        PlayerLikeSummary(
                            results.getString("player_uuid"),
                            results.getInt("first_like_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadOwnBuildLikeRankingBlocking(
      ownerUuid: String,
      limit: Int = 5,
  ): List<OwnBuildLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadOwnBuildLikeRanking") {
          val summaries = mutableListOf<OwnBuildLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, COUNT(bl.player_uuid) AS likes_count
                  FROM builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                  WHERE b.owner_uuid = ?
                  GROUP BY b.id, b.title
                  ORDER BY likes_count DESC, b.id ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.setInt(2, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        OwnBuildLikeSummary(
                            results.getInt("id"),
                            results.getString("title"),
                            results.getInt("likes_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadMutualLikeStatsBlocking(playerUuid: String, limit: Int = 5): MutualLikeStats {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadMutualLikeStats") {
      val likedOwnerCount =
          countQuery(
              """
              SELECT COUNT(DISTINCT b.owner_uuid) AS count
              FROM build_likes bl
              JOIN builds b ON b.id = bl.build_id
              WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
          }
      val likerCount =
          countQuery(
              """
              SELECT COUNT(DISTINCT bl.player_uuid) AS count
              FROM builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
          }
      val pairCount =
          countQuery(
              """
              WITH outgoing AS (
                SELECT DISTINCT b.owner_uuid AS player_uuid
                FROM build_likes bl
                JOIN builds b ON b.id = bl.build_id
                WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
              ), incoming AS (
                SELECT DISTINCT bl.player_uuid
                FROM builds b
                JOIN build_likes bl ON bl.build_id = b.id
                WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
              )
              SELECT COUNT(*) AS count
              FROM outgoing o
              JOIN incoming i ON i.player_uuid = o.player_uuid
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
            statement.setString(3, playerUuid)
            statement.setString(4, playerUuid)
          }
      val pairs = mutableListOf<MutualLikePair>()
      connection
          ?.prepareStatement(
              """
              WITH outgoing AS (
                SELECT b.owner_uuid AS player_uuid, COUNT(bl.build_id) AS likes_given
                FROM build_likes bl
                JOIN builds b ON b.id = bl.build_id
                WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
                GROUP BY b.owner_uuid
              ), incoming AS (
                SELECT bl.player_uuid, COUNT(bl.build_id) AS likes_received
                FROM builds b
                JOIN build_likes bl ON bl.build_id = b.id
                WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
                GROUP BY bl.player_uuid
              )
              SELECT o.player_uuid, o.likes_given, i.likes_received
              FROM outgoing o
              JOIN incoming i ON i.player_uuid = o.player_uuid
              ORDER BY (o.likes_given + i.likes_received) DESC, o.player_uuid ASC
              LIMIT ?
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
            statement.setString(3, playerUuid)
            statement.setString(4, playerUuid)
            statement.setInt(5, normalizedLimit)
            statement.executeQuery().use { results ->
              while (results.next()) {
                pairs +=
                    MutualLikePair(
                        results.getString("player_uuid"),
                        results.getInt("likes_given"),
                        results.getInt("likes_received"),
                    )
              }
            }
          }
      MutualLikeStats(pairCount, likedOwnerCount, likerCount, pairs)
    } ?: MutualLikeStats(0, 0, 0, emptyList())
  }

  fun loadSocialOverviewBlocking(playerUuid: String): SocialOverview {
    return submitBlocking("loadSocialOverview") {
      val supportedOwnerCount =
          countQuery(
              """
              SELECT COUNT(DISTINCT b.owner_uuid) AS count
              FROM build_likes bl
              JOIN builds b ON b.id = bl.build_id
              WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
          }
      val supporterCount =
          countQuery(
              """
              SELECT COUNT(DISTINCT bl.player_uuid) AS count
              FROM builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
          }
      SocialOverview(supportedOwnerCount, supporterCount)
    } ?: SocialOverview(0, 0)
  }

  fun loadFavoriteBuilderCaptureBlocking(playerUuid: String): FavoriteBuilderCapture? {
    return submitBlocking("loadFavoriteBuilderCapture") {
      connection
          ?.prepareStatement(
              """
              WITH favorite_owner AS (
                SELECT b.owner_uuid, COUNT(bl.build_id) AS liked_build_count
                FROM build_likes bl
                JOIN builds b ON b.id = bl.build_id
                WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
                GROUP BY b.owner_uuid
                ORDER BY liked_build_count DESC, b.owner_uuid ASC
                LIMIT 1
              )
              SELECT
                f.owner_uuid,
                COUNT(DISTINCT b.id) AS total_build_count,
                f.liked_build_count
              FROM favorite_owner f
              JOIN builds b ON b.owner_uuid = f.owner_uuid
              GROUP BY f.owner_uuid, f.liked_build_count
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
            statement.executeQuery().use { results ->
              if (!results.next()) return@submitBlocking null
              FavoriteBuilderCapture(
                  results.getString("owner_uuid"),
                  results.getInt("total_build_count"),
                  results.getInt("liked_build_count"),
              )
            }
          }
    }
  }

  fun loadFirstEncounterLikesBlocking(
      playerUuid: String,
      sinceMillis: Long,
      limit: Int = 5,
  ): List<FirstEncounterLike> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadFirstEncounterLikes") {
          val encounters = mutableListOf<FirstEncounterLike>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, MIN(bl.liked_at) AS first_liked_at
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
                  GROUP BY b.owner_uuid
                  HAVING first_liked_at >= ?
                  ORDER BY first_liked_at DESC, b.owner_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setString(2, playerUuid)
                statement.setLong(3, sinceMillis)
                statement.setInt(4, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    encounters +=
                        FirstEncounterLike(
                            results.getString("owner_uuid"),
                            results.getLong("first_liked_at"),
                        )
                  }
                }
              }
          encounters
        }
        .orEmpty()
  }

  fun loadSimilarTastePlayersBlocking(playerUuid: String, limit: Int = 5): List<PlayerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadSimilarTastePlayers") {
          val summaries = mutableListOf<PlayerLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  WITH liked_owners AS (
                    SELECT DISTINCT b.owner_uuid
                    FROM build_likes bl
                    JOIN builds b ON b.id = bl.build_id
                    WHERE bl.player_uuid = ? AND b.owner_uuid <> ? AND bl.liked_at IS NOT NULL
                  )
                  SELECT bl.player_uuid, COUNT(DISTINCT b.owner_uuid) AS shared_owner_count
                  FROM builds b
                  JOIN build_likes bl ON bl.build_id = b.id
                  WHERE b.owner_uuid IN (SELECT owner_uuid FROM liked_owners)
                    AND bl.player_uuid <> ?
                    AND bl.liked_at IS NOT NULL
                  GROUP BY bl.player_uuid
                  ORDER BY shared_owner_count DESC, bl.player_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setString(2, playerUuid)
                statement.setString(3, playerUuid)
                statement.setInt(4, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        PlayerLikeSummary(
                            results.getString("player_uuid"),
                            results.getInt("shared_owner_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadRegularSupportersBlocking(
      ownerUuid: String,
      limit: Int = 5,
  ): List<RegularSupporterSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadRegularSupporters") {
          val summaries = mutableListOf<RegularSupporterSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT
                    bl.player_uuid,
                    COUNT(bl.build_id) AS like_count,
                    COUNT(DISTINCT strftime('%Y-%W', bl.liked_at / 1000, 'unixepoch')) AS active_week_count
                  FROM builds b
                  JOIN build_likes bl ON bl.build_id = b.id
                  WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
                  GROUP BY bl.player_uuid
                  ORDER BY like_count DESC, active_week_count DESC, bl.player_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.setString(2, ownerUuid)
                statement.setInt(3, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        RegularSupporterSummary(
                            results.getString("player_uuid"),
                            results.getInt("like_count"),
                            results.getInt("active_week_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadRepeaterRateBlocking(ownerUuid: String): RepeaterRate {
    return submitBlocking("loadRepeaterRate") {
      val uniqueLikerCount =
          countQuery(
              """
              SELECT COUNT(DISTINCT bl.player_uuid) AS count
              FROM builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, ownerUuid)
            statement.setString(2, ownerUuid)
          }
      val repeaterCount =
          countQuery(
              """
              SELECT COUNT(*) AS count
              FROM (
                SELECT bl.player_uuid
                FROM builds b
                JOIN build_likes bl ON bl.build_id = b.id
                WHERE b.owner_uuid = ? AND bl.player_uuid <> ? AND bl.liked_at IS NOT NULL
                GROUP BY bl.player_uuid
                HAVING COUNT(DISTINCT bl.build_id) >= 2
              )
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, ownerUuid)
            statement.setString(2, ownerUuid)
          }
      RepeaterRate(repeaterCount, uniqueLikerCount)
    } ?: RepeaterRate(0, 0)
  }

  fun loadFastestSupportersBlocking(
      ownerUuid: String,
      limit: Int = 5,
  ): List<FastestSupporterSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadFastestSupporters") {
          val summaries = mutableListOf<FastestSupporterSummary>()
          connection
              ?.prepareStatement(
                  """
                  WITH first_likes AS (
                    SELECT b.id AS build_id, MIN(bl.liked_at) AS first_liked_at
                    FROM builds b
                    JOIN build_likes bl ON bl.build_id = b.id
                    WHERE b.owner_uuid = ?
                      AND bl.player_uuid <> ?
                      AND bl.liked_at IS NOT NULL
                      AND bl.liked_at >= CAST(strftime('%s', b.created_at) AS INTEGER) * 1000
                    GROUP BY b.id
                  )
                  SELECT bl.player_uuid, COUNT(DISTINCT first_likes.build_id) AS first_support_count
                  FROM first_likes
                  JOIN build_likes bl
                    ON bl.build_id = first_likes.build_id AND bl.liked_at = first_likes.first_liked_at
                  WHERE bl.player_uuid <> ?
                  GROUP BY bl.player_uuid
                  ORDER BY first_support_count DESC, bl.player_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.setString(2, ownerUuid)
                statement.setString(3, ownerUuid)
                statement.setInt(4, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        FastestSupporterSummary(
                            results.getString("player_uuid"),
                            results.getInt("first_support_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadLikeTimestampsSinceBlocking(sinceMillis: Long): List<Long> {
    return submitBlocking("loadLikeTimestampsSince") {
          val timestamps = mutableListOf<Long>()
          connection
              ?.prepareStatement(
                  "SELECT liked_at FROM build_likes WHERE liked_at IS NOT NULL AND liked_at >= ?"
              )
              ?.use { statement ->
                statement.setLong(1, sinceMillis)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    timestamps += results.getLong("liked_at")
                  }
                }
              }
          timestamps
        }
        .orEmpty()
  }

  fun loadBuildLikeGrowthBlocking(
      currentStartMillis: Long,
      previousStartMillis: Long,
      limit: Int = 5,
  ): List<BuildLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadBuildLikeGrowth") {
          val summaries = mutableListOf<BuildLikeSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT
                    b.id,
                    b.title,
                    b.owner_uuid,
                    SUM(CASE WHEN bl.liked_at >= ? THEN 1 ELSE 0 END) AS current_count,
                    SUM(CASE WHEN bl.liked_at >= ? AND bl.liked_at < ? THEN 1 ELSE 0 END) AS previous_count
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE bl.liked_at IS NOT NULL AND bl.liked_at >= ?
                  GROUP BY b.id, b.title, b.owner_uuid
                  HAVING current_count > 0 OR previous_count > 0
                  ORDER BY (current_count - previous_count) DESC, current_count DESC, b.id ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setLong(1, currentStartMillis)
                statement.setLong(2, previousStartMillis)
                statement.setLong(3, currentStartMillis)
                statement.setLong(4, previousStartMillis)
                statement.setInt(5, normalizedLimit)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    summaries +=
                        BuildLikeSummary(
                            results.getInt("id"),
                            results.getString("title"),
                            results.getString("owner_uuid"),
                            results.getInt("current_count"),
                            results.getInt("previous_count"),
                        )
                  }
                }
              }
          summaries
        }
        .orEmpty()
  }

  fun loadFirstLikeCountBlocking(
      playerUuid: String?,
      limit: Int = 5,
  ): List<FirstLikeCount> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadFirstLikeCount") {
          if (playerUuid != null) {
            val count =
                countQuery(
                    """
                    WITH first_likes AS (
                      SELECT
                        bl.build_id,
                        bl.player_uuid,
                        ROW_NUMBER() OVER (
                          PARTITION BY bl.build_id
                          ORDER BY bl.liked_at ASC, bl.player_uuid ASC
                        ) AS row_number
                      FROM build_likes bl
                      WHERE bl.liked_at IS NOT NULL
                    )
                    SELECT COUNT(build_id) AS count
                    FROM first_likes
                    WHERE row_number = 1 AND player_uuid = ?
                    """
                        .trimIndent()
                ) { statement ->
                  statement.setString(1, playerUuid)
                }
            listOf(FirstLikeCount(playerUuid, count))
          } else {
            val summaries = mutableListOf<FirstLikeCount>()
            connection
                ?.prepareStatement(
                    """
                    WITH first_likes AS (
                      SELECT
                        bl.build_id,
                        bl.player_uuid,
                        ROW_NUMBER() OVER (
                          PARTITION BY bl.build_id
                          ORDER BY bl.liked_at ASC, bl.player_uuid ASC
                        ) AS row_number
                      FROM build_likes bl
                      WHERE bl.liked_at IS NOT NULL
                    )
                    SELECT player_uuid, COUNT(build_id) AS first_like_count
                    FROM first_likes
                    WHERE row_number = 1
                    GROUP BY player_uuid
                    ORDER BY first_like_count DESC, player_uuid ASC
                    LIMIT ?
                    """
                        .trimIndent()
                )
                ?.use { statement ->
                  statement.setInt(1, normalizedLimit)
                  statement.executeQuery().use { results ->
                    while (results.next()) {
                      summaries +=
                          FirstLikeCount(
                              results.getString("player_uuid"),
                              results.getInt("first_like_count"),
                          )
                    }
                  }
                }
            summaries
          }
        }
        .orEmpty()
  }

  fun loadPeakLikeDayBlocking(sinceMillis: Long): PeakLikeDay? {
    val zoneId = ZoneId.of("UTC")
    return submitBlocking("loadPeakLikeDay") {
      val dailyCounts = mutableMapOf<LocalDate, Int>()
      connection
          ?.prepareStatement(
              "SELECT liked_at FROM build_likes WHERE liked_at IS NOT NULL AND liked_at >= ?"
          )
          ?.use { statement ->
            statement.setLong(1, sinceMillis)
            statement.executeQuery().use { results ->
              while (results.next()) {
                val date =
                    Instant.ofEpochMilli(results.getLong("liked_at")).atZone(zoneId).toLocalDate()
                dailyCounts[date] = (dailyCounts[date] ?: 0) + 1
              }
            }
          }

      val peak =
          dailyCounts.entries
              .sortedWith(
                  compareByDescending<Map.Entry<LocalDate, Int>> { it.value }.thenBy { it.key }
              )
              .firstOrNull() ?: return@submitBlocking null
      val sinceDate = Instant.ofEpochMilli(sinceMillis).atZone(zoneId).toLocalDate()
      val today = LocalDate.now(zoneId)
      val days = ChronoUnit.DAYS.between(sinceDate, today).toInt().coerceAtLeast(0) + 1
      val averageCount = dailyCounts.values.sum().toDouble() / days.toDouble()

      PeakLikeDay(peak.key, peak.value, averageCount)
    }
  }

  fun loadBuildHistoryTimelineBlocking(ownerUuid: String): List<BuildHistoryEntry> {
    return submitBlocking("loadBuildHistoryTimeline") {
          val entries = mutableListOf<BuildHistoryEntry>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, b.created_at, COUNT(bl.player_uuid) AS likes_received
                  FROM builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                  WHERE b.owner_uuid = ?
                  GROUP BY b.id, b.title, b.created_at
                  ORDER BY b.created_at ASC, b.id ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    entries +=
                        BuildHistoryEntry(
                            results.getInt("id"),
                            results.getString("title"),
                            LocalDateTime.parse(results.getString("created_at")),
                            results.getInt("likes_received"),
                        )
                  }
                }
              }
          entries
        }
        .orEmpty()
  }

  /**
   * Loads both sides of a player's world-level activity in one GROUP BY query. Counts are kept raw
   * here so the presentation layer can intentionally show shares and average deltas instead of
   * another misleading world-size ranking.
   */
  fun loadWorldReactionSummariesBlocking(playerUuid: String): List<WorldReactionSummary> {
    return submitBlocking("loadWorldReactionSummaries") {
          val rows = mutableListOf<WorldReactionSummary>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.world_name,
                         COUNT(DISTINCT CASE WHEN b.owner_uuid = ? THEN b.id END) AS own_build_count,
                         COUNT(DISTINCT CASE WHEN b.owner_uuid = ? AND bl.liked_at IS NOT NULL
                                             THEN bl.player_uuid || ':' || b.id END) AS own_received_likes,
                         COUNT(DISTINCT b.id) AS global_build_count,
                         COUNT(DISTINCT CASE WHEN bl.liked_at IS NOT NULL
                                             THEN bl.player_uuid || ':' || b.id END) AS global_received_likes,
                         COUNT(DISTINCT CASE WHEN bl.player_uuid = ? AND bl.liked_at IS NOT NULL
                                             THEN b.id END) AS given_likes
                  FROM builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id
                  GROUP BY b.world_name
                  ORDER BY b.world_name COLLATE NOCASE ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setString(2, playerUuid)
                statement.setString(3, playerUuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    rows +=
                        WorldReactionSummary(
                            worldName = results.getString("world_name"),
                            ownBuildCount = results.getInt("own_build_count"),
                            ownReceivedLikes = results.getInt("own_received_likes"),
                            globalBuildCount = results.getInt("global_build_count"),
                            globalReceivedLikes = results.getInt("global_received_likes"),
                            givenLikes = results.getInt("given_likes"),
                        )
                  }
                }
              }
          rows
        }
        .orEmpty()
  }

  /** The most established own chunk: build count first, then received likes as a tie-breaker. */
  fun loadHomeGroundBlocking(playerUuid: String): HomeGround? {
    return submitBlocking("loadHomeGround") {
      connection
          ?.prepareStatement(
              """
              SELECT b.world_name, b.chunk_x, b.chunk_z,
                     COUNT(DISTINCT b.id) AS build_count,
                     COUNT(bl.player_uuid) AS received_likes
              FROM builds b
              LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
              WHERE b.owner_uuid = ?
              GROUP BY b.world_name, b.chunk_x, b.chunk_z
              ORDER BY build_count DESC, received_likes DESC, b.world_name ASC, b.chunk_x ASC, b.chunk_z ASC
              LIMIT 1
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setString(1, playerUuid)
            statement.executeQuery().use { results ->
              if (!results.next()) return@submitBlocking null
              HomeGround(
                  worldName = results.getString("world_name"),
                  chunkX = results.getInt("chunk_x"),
                  chunkZ = results.getInt("chunk_z"),
                  buildCount = results.getInt("build_count"),
                  receivedLikes = results.getInt("received_likes"),
              )
            }
          }
    }
  }

  fun loadHomeGroundPointsBlocking(playerUuid: String, worldName: String): List<HomeGroundPoint> {
    return submitBlocking("loadHomeGroundPoints") {
          val points = mutableListOf<HomeGroundPoint>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.chunk_x, b.chunk_z, COUNT(DISTINCT b.id) AS build_count,
                         COUNT(bl.player_uuid) AS received_likes
                  FROM builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                  WHERE b.owner_uuid = ? AND b.world_name = ?
                  GROUP BY b.chunk_x, b.chunk_z
                  ORDER BY build_count DESC, received_likes DESC, b.chunk_x ASC, b.chunk_z ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setString(2, worldName)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    points +=
                        HomeGroundPoint(
                            chunkX = results.getInt("chunk_x"),
                            chunkZ = results.getInt("chunk_z"),
                            buildCount = results.getInt("build_count"),
                            receivedLikes = results.getInt("received_likes"),
                        )
                  }
                }
              }
          points
        }
        .orEmpty()
  }

  /**
   * One unliked build owned by somebody else. SQLite RANDOM keeps repeat picks pleasantly varied.
   */
  fun loadLuckyUnlikedBuildBlocking(playerUuid: String): LuckyBuild? {
    return submitBlocking("loadLuckyUnlikedBuild") {
      connection
          ?.prepareStatement(
              """
              SELECT b.id, b.title, b.owner_uuid, b.world_name, b.loc_x, b.loc_y, b.loc_z
              FROM builds b
              LEFT JOIN build_likes mine ON mine.build_id = b.id AND mine.player_uuid = ?
              WHERE b.owner_uuid <> ? AND mine.build_id IS NULL
              ORDER BY RANDOM()
              LIMIT 1
              """
                  .trimIndent()
          )
          ?.use { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, playerUuid)
            statement.executeQuery().use { results ->
              if (!results.next()) return@submitBlocking null
              LuckyBuild(
                  id = results.getInt("id"),
                  title = results.getString("title"),
                  ownerUuid = results.getString("owner_uuid"),
                  worldName = results.getString("world_name"),
                  x = results.getDouble("loc_x"),
                  y = results.getDouble("loc_y"),
                  z = results.getDouble("loc_z"),
              )
            }
          }
    }
  }

  /** Like totals for all works, one's own works, and works the player has liked. */
  fun loadBuildLikeCountsBlocking(ownerUuid: String? = null): List<Int> {
    return submitBlocking("loadBuildLikeCounts") {
          val counts = mutableListOf<Int>()
          val sql =
              if (ownerUuid == null) {
                """
                SELECT b.id, COUNT(bl.player_uuid) AS like_count
                FROM builds b LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                GROUP BY b.id
                """
                    .trimIndent()
              } else {
                """
                SELECT b.id, COUNT(bl.player_uuid) AS like_count
                FROM builds b LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                WHERE b.owner_uuid = ?
                GROUP BY b.id
                """
                    .trimIndent()
              }
          connection?.prepareStatement(sql)?.use { statement ->
            ownerUuid?.let { statement.setString(1, it) }
            statement.executeQuery().use { results ->
              while (results.next()) counts += results.getInt("like_count")
            }
          }
          counts
        }
        .orEmpty()
  }

  fun loadLikedBuildLikeCountsBlocking(playerUuid: String): List<Int> {
    return submitBlocking("loadLikedBuildLikeCounts") {
          val counts = mutableListOf<Int>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.id, COUNT(all_likes.player_uuid) AS like_count
                  FROM build_likes mine
                  JOIN builds b ON b.id = mine.build_id
                  LEFT JOIN build_likes all_likes
                    ON all_likes.build_id = b.id AND all_likes.liked_at IS NOT NULL
                  WHERE mine.player_uuid = ? AND mine.liked_at IS NOT NULL
                  GROUP BY b.id
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.executeQuery().use { results ->
                  while (results.next()) counts += results.getInt("like_count")
                }
              }
          counts
        }
        .orEmpty()
  }

  /**
   * Loads repost events and evaluates each event against the preceding and following 24-hour
   * windows. The comparison is intentionally event-based: it does not mistake a build's lifetime
   * total for the effect of a repost.
   */
  fun loadPublicityReactionsBlocking(ownerUuid: String? = null): List<PublicityEventReaction> {
    val zoneId = ZoneId.of("Asia/Tokyo")
    return submitBlocking("loadPublicityReactions") {
          data class RawEvent(
              val buildId: Int,
              val title: String,
              val ownerUuid: String,
              val promotedAt: Long,
              val likedAt: Long?,
          )
          val rows = mutableListOf<RawEvent>()
          val ownerClause = if (ownerUuid == null) "" else "AND b.owner_uuid = ?"
          connection
              ?.prepareStatement(
                  """
                  SELECT ph.id AS publicity_id, ph.sl_id, ph.timestamp, b.title, b.owner_uuid, bl.liked_at
                  FROM publicity_history ph
                  JOIN builds b ON b.id = ph.sl_id
                  LEFT JOIN build_likes bl ON bl.build_id = b.id AND bl.liked_at IS NOT NULL
                  WHERE 1 = 1 $ownerClause
                  ORDER BY ph.sl_id ASC, ph.timestamp ASC, bl.liked_at ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                if (ownerUuid != null) statement.setString(1, ownerUuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    val promotedAt =
                        try {
                          LocalDateTime.parse(results.getString("timestamp"))
                              .atZone(zoneId)
                              .toInstant()
                              .toEpochMilli()
                        } catch (_: Exception) {
                          continue
                        }
                    val likedAt =
                        results.getLong("liked_at").let { if (results.wasNull()) null else it }
                    rows +=
                        RawEvent(
                            results.getInt("sl_id"),
                            results.getString("title"),
                            results.getString("owner_uuid"),
                            promotedAt,
                            likedAt,
                        )
                  }
                }
              }

          rows
              .groupBy { listOf(it.buildId, it.promotedAt) }
              .values
              .map { sameEvent ->
                val event = sameEvent.first()
                event to sameEvent.mapNotNull { it.likedAt }
              }
              .groupBy { it.first.buildId }
              .values
              .flatMap { buildEvents ->
                buildEvents
                    .sortedBy { it.first.promotedAt }
                    .mapIndexed { index, (event, likes) ->
                      val start = event.promotedAt
                      val before = likes.count { it >= start - 86_400_000L && it < start }
                      val after = likes.count { it >= start && it < start + 86_400_000L }
                      val previousAt =
                          buildEvents
                              .sortedBy { it.first.promotedAt }
                              .getOrNull(index - 1)
                              ?.first
                              ?.promotedAt
                      PublicityEventReaction(
                          event.buildId,
                          event.title,
                          event.ownerUuid,
                          start,
                          before,
                          after,
                          previousAt?.let { (start - it) / 3_600_000L },
                      )
                    }
              }
              .sortedWith(
                  compareByDescending<PublicityEventReaction> { it.promotedAt }
                      .thenBy { it.buildId }
              )
        }
        .orEmpty()
  }

  fun loadPeriodSummaryBlocking(
      playerUuid: String,
      sinceMillis: Long,
      untilMillis: Long,
  ): PeriodSummary {
    val zoneId = ZoneId.of("UTC")
    val sinceTimestamp =
        Instant.ofEpochMilli(sinceMillis).atZone(zoneId).toLocalDateTime().toString()
    val untilTimestamp =
        Instant.ofEpochMilli(untilMillis).atZone(zoneId).toLocalDateTime().toString()

    return submitBlocking("loadPeriodSummary") {
      val buildsCreated =
          countQuery(
              """
              SELECT COUNT(id) AS count
              FROM builds
              WHERE owner_uuid = ? AND created_at >= ? AND created_at < ?
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, sinceTimestamp)
            statement.setString(3, untilTimestamp)
          }
      val likesGiven =
          countQuery(
              """
              SELECT COUNT(build_id) AS count
              FROM build_likes
              WHERE player_uuid = ? AND liked_at IS NOT NULL AND liked_at >= ? AND liked_at < ?
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setLong(2, sinceMillis)
            statement.setLong(3, untilMillis)
          }
      val likesReceived =
          countQuery(
              """
              SELECT COUNT(bl.build_id) AS count
              FROM build_likes bl
              JOIN builds b ON b.id = bl.build_id
              WHERE b.owner_uuid = ?
                AND bl.liked_at IS NOT NULL
                AND bl.liked_at >= ?
                AND bl.liked_at < ?
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setLong(2, sinceMillis)
            statement.setLong(3, untilMillis)
          }
      val publicityCount =
          countQuery(
              """
              SELECT COUNT(id) AS count
              FROM publicity_history
              WHERE user_uuid = ? AND timestamp >= ? AND timestamp < ?
              """
                  .trimIndent()
          ) { statement ->
            statement.setString(1, playerUuid)
            statement.setString(2, sinceTimestamp)
            statement.setString(3, untilTimestamp)
          }

      PeriodSummary(buildsCreated, likesGiven, likesReceived, publicityCount)
    } ?: PeriodSummary(buildsCreated = 0, likesGiven = 0, likesReceived = 0, publicityCount = 0)
  }

  private fun normalizedStatsLimit(limit: Int): Int = limit.coerceIn(1, 20)

  private fun loadLikeEventsBlocking(
      taskName: String,
      filterSql: String,
      uuid: String,
  ): List<BuildLikeEvent> {
    return submitBlocking(taskName) {
          val events = mutableListOf<BuildLikeEvent>()
          connection
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, b.owner_uuid, b.world_name, b.chunk_x, b.chunk_z, b.created_at, bl.liked_at
                  FROM build_likes bl
                  JOIN builds b ON b.id = bl.build_id
                  WHERE $filterSql AND bl.liked_at IS NOT NULL
                  ORDER BY bl.liked_at ASC, b.id ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, uuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    events +=
                        BuildLikeEvent(
                            buildId = results.getInt("id"),
                            title = results.getString("title"),
                            ownerUuid = results.getString("owner_uuid"),
                            worldName = results.getString("world_name"),
                            chunkX = results.getInt("chunk_x"),
                            chunkZ = results.getInt("chunk_z"),
                            createdAt = LocalDateTime.parse(results.getString("created_at")),
                            likedAt = results.getLong("liked_at"),
                        )
                  }
                }
              }
          events
        }
        .orEmpty()
  }

  private fun submit(taskName: String, block: () -> Unit) {
    val service =
        executor
            ?: run {
              Tools.plugin.logger.warning(
                  "[SL3] SQLite shadow $taskName skipped: database is not initialized"
              )
              return
            }

    service.submit {
      try {
        val db = connection
        if (db == null || db.isClosed) {
          Tools.plugin.logger.warning(
              "[SL3] SQLite shadow $taskName skipped: database is not connected"
          )
          return@submit
        }
        block()
      } catch (e: Exception) {
        loggerWarning(taskName, e)
      }
    }
  }

  private fun countQuery(sql: String, bind: (java.sql.PreparedStatement) -> Unit = {}): Int {
    val db = connection ?: return 0
    return db.prepareStatement(sql).use { statement ->
      bind(statement)
      statement.executeQuery().use { results -> if (results.next()) results.getInt("count") else 0 }
    }
  }

  private fun <T> submitBlocking(taskName: String, block: () -> T): T? {
    val service =
        executor
            ?: run {
              Tools.plugin.logger.warning(
                  "[SL3] SQLite shadow $taskName skipped: database is not initialized"
              )
              return null
            }

    val future =
        service.submit(
            Callable<T?> {
              try {
                val db =
                    connection
                        ?: run {
                          Tools.plugin.logger.warning(
                              "[SL3] SQLite shadow $taskName skipped: database is not connected"
                          )
                          return@Callable null
                        }

                if (db.isClosed) {
                  Tools.plugin.logger.warning(
                      "[SL3] SQLite shadow $taskName skipped: database is closed"
                  )
                  return@Callable null
                }

                block()
              } catch (e: Exception) {
                loggerWarning(taskName, e)
                null
              }
            }
        )

    return try {
      future.get()
    } catch (e: Exception) {
      loggerWarning(taskName, e)
      null
    }
  }

  private fun loggerWarning(taskName: String, e: Exception) {
    val message = e.message ?: e.javaClass.simpleName
    Tools.plugin.logger.warning("[SL3] SQLite shadow $taskName failed: $message")
  }

  private fun loadWeeklyLikeCountsDirect(
      db: Connection?,
      weeks: Int,
      zoneId: ZoneId,
      firstWeekStart: LocalDate,
      firstWeekStartMillis: Long,
  ): List<WeeklyLikeCount> {
    val counts = mutableMapOf<LocalDate, Int>()

    db?.prepareStatement(
            "SELECT liked_at FROM build_likes WHERE liked_at IS NOT NULL AND liked_at >= ?"
        )
        ?.use { statement ->
          statement.setLong(1, firstWeekStartMillis)
          statement.executeQuery().use { results ->
            while (results.next()) {
              val weekStart =
                  Instant.ofEpochMilli(results.getLong("liked_at"))
                      .atZone(zoneId)
                      .toLocalDate()
                      .with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
              counts[weekStart] = (counts[weekStart] ?: 0) + 1
            }
          }
        }

    return (0 until weeks).map { offset ->
      val weekStart = firstWeekStart.plusWeeks(offset.toLong())
      WeeklyLikeCount(weekStart, counts[weekStart] ?: 0)
    }
  }

  private fun logStartupSummary(plugin: JavaPlugin, db: Connection) {
    try {
      val zoneId = ZoneId.of("UTC")
      val currentWeekStart =
          LocalDate.now(zoneId).with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
      val firstWeekStart = currentWeekStart.minusWeeks(8)
      val weekly =
          loadWeeklyLikeCountsDirect(
              db,
              9,
              zoneId,
              firstWeekStart,
              firstWeekStart.atStartOfDay(zoneId).toInstant().toEpochMilli(),
          )
      val buildCount = countRows(db, "builds")
      val likeCount = countRows(db, "build_likes")
      plugin.logger.info(
          "[SL3] SQLite shadow ready: builds=$buildCount likes=$likeCount recent9WeeklyLikes=" +
              weekly.joinToString(", ") { it.count.toString() }
      )
    } catch (e: Exception) {
      loggerWarning("startupSummary", e)
    }
  }

  private fun countRows(db: Connection, tableName: String): Int =
      db.createStatement().use { statement ->
        statement.executeQuery("SELECT COUNT(*) AS count FROM $tableName").use { results ->
          if (results.next()) results.getInt("count") else 0
        }
      }

  private fun upsertBuild(snapshot: BuildSnapshot) {
    val db = connection ?: return
    db.prepareStatement(
            """
            INSERT INTO builds (
              id, world_name, loc_x, loc_y, loc_z, chunk_x, chunk_z, created_at,
              owner_uuid, title, checked, comment, discord_text_id
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
              world_name = excluded.world_name,
              loc_x = excluded.loc_x,
              loc_y = excluded.loc_y,
              loc_z = excluded.loc_z,
              chunk_x = excluded.chunk_x,
              chunk_z = excluded.chunk_z,
              created_at = excluded.created_at,
              owner_uuid = excluded.owner_uuid,
              title = excluded.title,
              checked = excluded.checked,
              comment = excluded.comment,
              discord_text_id = excluded.discord_text_id
            """
                .trimIndent()
        )
        .use { statement ->
          statement.setInt(1, snapshot.id)
          statement.setString(2, snapshot.worldName)
          statement.setDouble(3, snapshot.locX)
          statement.setDouble(4, snapshot.locY)
          statement.setDouble(5, snapshot.locZ)
          statement.setInt(6, snapshot.chunkX)
          statement.setInt(7, snapshot.chunkZ)
          statement.setString(8, snapshot.createdAt)
          statement.setString(9, snapshot.ownerUuid)
          statement.setString(10, snapshot.title)
          statement.setInt(11, if (snapshot.checked) 1 else 0)
          statement.setString(12, snapshot.comment)
          statement.setLong(13, snapshot.discordTextId)
          statement.executeUpdate()
        }
    db.prepareStatement("DELETE FROM build_likes WHERE build_id = ?").use { statement ->
      statement.setInt(1, snapshot.id)
      statement.executeUpdate()
    }
    db.prepareStatement(
            "INSERT INTO build_likes (build_id, player_uuid, liked_at) VALUES (?, ?, ?)"
        )
        .use { statement ->
          snapshot.likes.forEach { like ->
            statement.setInt(1, snapshot.id)
            statement.setString(2, like.playerUuid)
            if (like.likedAt == null) statement.setNull(3, java.sql.Types.BIGINT)
            else statement.setLong(3, like.likedAt)
            statement.addBatch()
          }
          statement.executeBatch()
        }
  }

  private fun SLData.toBuildSnapshot(): BuildSnapshot {
    val location = loc
    return BuildSnapshot(
        id = id,
        worldName = worldName,
        locX = location.x,
        locY = location.y,
        locZ = location.z,
        chunkX = kotlin.math.floor(location.x / 16.0).toInt(),
        chunkZ = kotlin.math.floor(location.z / 16.0).toInt(),
        createdAt = time.toString(),
        ownerUuid = owner.toString(),
        title = title,
        checked = check,
        comment = comment,
        discordTextId = discordTextID,
        likes = likes.map { liker -> LikeSnapshot(liker.toString(), likesWithTimestamp[liker]) },
    )
  }
}
