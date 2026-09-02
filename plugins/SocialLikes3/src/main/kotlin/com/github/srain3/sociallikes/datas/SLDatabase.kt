package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.Tools
import java.io.File
import java.sql.Connection
import java.time.DayOfWeek
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.temporal.ChronoUnit
import java.time.temporal.TemporalAdjusters
import java.util.Locale
import java.util.UUID
import java.util.concurrent.Callable
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.CountDownLatch
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.TimeoutException
import java.util.logging.Level
import kotlin.math.floor
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.plugin.java.JavaPlugin
import org.jetbrains.exposed.v1.core.ReferenceOption
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.core.eq
import org.jetbrains.exposed.v1.core.isNull
import org.jetbrains.exposed.v1.core.notInList
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.SchemaUtils
import org.jetbrains.exposed.v1.jdbc.deleteAll
import org.jetbrains.exposed.v1.jdbc.deleteWhere
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.transactions.TransactionManager
import org.jetbrains.exposed.v1.jdbc.transactions.transaction
import org.jetbrains.exposed.v1.jdbc.update
import org.jetbrains.exposed.v1.jdbc.upsert

object SLDatabase {
  private const val MAX_WRITE_RETRIES = 5
  private const val INITIAL_BACKOFF_MS = 100L
  private const val BLOCKING_TIMEOUT_SECONDS = 30L
  private const val SQLITE_PRIMARY_READY_KEY = "sqlite_primary_id_migration_complete"

  @Volatile private var database: Database? = null
  private var initLatch = CountDownLatch(1)
  private var writeExecutor: ExecutorService? = null
  private var readExecutor: ExecutorService? = null
  private lateinit var dbFile: File
  private lateinit var plugin: JavaPlugin

  private val idMigrationCache = ConcurrentHashMap<Int, Int>()

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
      val playerUuid: String,
      val ownerUuid: String,
      val worldName: String,
      val chunkX: Int,
      val chunkZ: Int,
      val createdAt: LocalDateTime,
      val likedAt: Long,
  )

  data class BuildLikeDimension(
      val ownerUuid: String,
      val worldName: String,
      val chunkX: Int,
      val chunkZ: Int,
  )

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

  data class LikeTimestampCoverage(val totalLikes: Int, val timestampedLikes: Int)

  data class ReliableTimestampPopulation(
      val postCutoffBuildCount: Int,
      val postCutoffCompleteBuildCount: Int,
      val completeLikedBuildCount: Int,
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

  /** One active build location used to migrate only chunks that can contain an SL sign. */
  data class SignPdcTarget(
      val id: Int,
      val worldName: String,
      val blockX: Int,
      val blockY: Int,
      val blockZ: Int,
      val chunkX: Int,
      val chunkZ: Int,
  )

  data class SignPdcMigrationInput(
      val targets: List<SignPdcTarget>,
      val idMigrationMap: Map<Int, Int>,
  )

  private object Builds : Table("builds") {
    val id = integer("id")
    val worldName = varchar("world_name", 255)
    val locX = double("loc_x")
    val locY = double("loc_y")
    val locZ = double("loc_z")
    val chunkX = integer("chunk_x")
    val chunkZ = integer("chunk_z")
    val createdAt = varchar("created_at", 64)
    val ownerUuid = varchar("owner_uuid", 36)
    val title = text("title")
    val checked = bool("checked")
    val comment = text("comment")
    val discordTextId = long("discord_text_id")
    val deletedAt = varchar("deleted_at", 64).nullable()
    val deletedBy = varchar("deleted_by", 36).nullable()
    val signMaterial = varchar("sign_material", 64).nullable()

    override val primaryKey = PrimaryKey(id)
  }

  private object BuildLikes : Table("build_likes") {
    val buildId = integer("build_id").references(Builds.id, onDelete = ReferenceOption.CASCADE)
    val playerUuid = varchar("player_uuid", 36)
    val likedAt = long("liked_at").nullable()

    override val primaryKey = PrimaryKey(buildId, playerUuid)
  }

  private object Players : Table("players") {
    val uuid = varchar("uuid", 36)
    val lastKnownName = text("last_known_name")
    val lastSeenAt = long("last_seen_at")

    override val primaryKey = PrimaryKey(uuid)
  }

  private object PublicityHistoryRows : Table("publicity_history") {
    val id = integer("id").autoIncrement()
    val timestamp = varchar("timestamp", 64)
    val userUuid = varchar("user_uuid", 36)
    val slId = integer("sl_id")

    override val primaryKey = PrimaryKey(id)
  }

  private object SlEventLog : Table("sl_event_log") {
    val id = integer("id").autoIncrement()
    val buildId = integer("build_id")
    val eventType = varchar("event_type", 32)
    val actorUuid = varchar("actor_uuid", 36).nullable()
    val beforeJson = text("before_json").nullable()
    val afterJson = text("after_json").nullable()
    val occurredAt = varchar("occurred_at", 64)

    override val primaryKey = PrimaryKey(id)
  }

  private object IdMigrationMap : Table("id_migration_map") {
    val oldId = integer("old_id")
    val newId = integer("new_id").uniqueIndex()

    override val primaryKey = PrimaryKey(oldId)
  }

  private object MigrationState : Table("migration_state") {
    val key = varchar("key", 128)
    val value = varchar("value", 128)

    override val primaryKey = PrimaryKey(key)
  }

  data class MigrationReadiness(val sqlitePrimaryReady: Boolean, val negativeBuildCount: Int)

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
      val deletedAt: String?,
      val deletedBy: String?,
      val signMaterial: String?,
      val likes: List<LikeSnapshot>,
  )

  private data class LikeSnapshot(val playerUuid: String, val likedAt: Long?)

  private data class PublicityHistorySnapshot(
      val id: Int,
      val timestamp: String,
      val userUuid: String,
      val slId: Int,
  )

  sealed interface MigrationResult {
    data class Success(val migratedCount: Int, val idMap: Map<Int, Int>) : MigrationResult

    data object NoTarget : MigrationResult

    data class Failure(val cause: Throwable) : MigrationResult
  }

  fun init(plugin: JavaPlugin) {
    this.plugin = plugin
    dbFile = File(plugin.dataFolder, "SocialLikesShadow.db")
    plugin.dataFolder.mkdirs()

    initLatch = CountDownLatch(1)

    writeExecutor =
        Executors.newSingleThreadExecutor { runnable ->
          Thread(runnable, "SL3-SQLite-Write").apply { isDaemon = true }
        }

    readExecutor =
        Executors.newSingleThreadExecutor { runnable ->
          Thread(runnable, "SL3-SQLite-Read").apply { isDaemon = true }
        }

    writeExecutor?.submit {
      try {
        val dbUrl =
            "jdbc:sqlite:${dbFile.absolutePath}" +
                "?journal_mode=WAL" +
                "&busy_timeout=5000" +
                "&foreign_keys=ON" +
                "&synchronous=NORMAL"

        database = Database.connect(dbUrl, driver = "org.sqlite.JDBC")

        transaction(database) {
          SchemaUtils.create(
              Builds,
              BuildLikes,
              PublicityHistoryRows,
              Players,
              SlEventLog,
              IdMigrationMap,
              MigrationState,
          )
        }

        transaction(database) {
          rawConnection()?.let { conn ->
            migrateBuildsColumns(conn)
            migrateIdMigrationMapColumns(conn)
            createViews(conn)
          }
        }

        transaction(database) {
          rawConnection()?.let { conn ->
            createPerformanceIndexes(conn)
            createUniqueLocationIndex(conn)
          }
        }

        transaction(database) {
          rawConnection()?.let { conn ->
            logStartupSummary(plugin, conn)
            loadIdMigrationMapDirect(conn)
          }
        }
      } catch (e: Exception) {
        val message = e.message ?: e.javaClass.simpleName
        Tools.plugin.logger.log(
            Level.SEVERE,
            "[SL3] SQLite shadow database initialization failed permanently: $message",
            e,
        )
      } finally {
        initLatch.countDown()
      }
    }
  }

  private fun migrateBuildsColumns(conn: Connection) {
    val existingColumns = mutableSetOf<String>()
    conn.createStatement().use { stmt ->
      stmt.executeQuery("PRAGMA table_info(builds)").use { rs ->
        while (rs.next()) {
          existingColumns.add(rs.getString("name").lowercase(Locale.ROOT))
        }
      }
    }
    if (!existingColumns.contains("deleted_at")) {
      conn.createStatement().use {
        it.execute("ALTER TABLE builds ADD COLUMN deleted_at VARCHAR(64)")
      }
    }
    if (!existingColumns.contains("deleted_by")) {
      conn.createStatement().use {
        it.execute("ALTER TABLE builds ADD COLUMN deleted_by VARCHAR(36)")
      }
    }
    if (!existingColumns.contains("sign_material")) {
      conn.createStatement().use {
        it.execute("ALTER TABLE builds ADD COLUMN sign_material VARCHAR(64)")
      }
    }
  }

  private fun migrateIdMigrationMapColumns(conn: Connection) {
    val existingColumns = mutableSetOf<String>()
    conn.createStatement().use { stmt ->
      stmt.executeQuery("PRAGMA table_info(id_migration_map)").use { rs ->
        while (rs.next()) {
          existingColumns.add(rs.getString("name").lowercase(Locale.ROOT))
        }
      }
    }
    if (existingColumns.contains("old_negative_id") && !existingColumns.contains("old_id")) {
      conn.createStatement().use { stmt ->
        stmt.execute("ALTER TABLE id_migration_map RENAME COLUMN old_negative_id TO old_id")
      }
    }
    if (existingColumns.contains("new_positive_id") && !existingColumns.contains("new_id")) {
      conn.createStatement().use { stmt ->
        stmt.execute("ALTER TABLE id_migration_map RENAME COLUMN new_positive_id TO new_id")
      }
    }
  }

  private fun createViews(conn: Connection) {
    conn.createStatement().use { statement ->
      statement.execute("DROP VIEW IF EXISTS active_builds")
      statement.execute(
          "CREATE VIEW active_builds AS SELECT * FROM builds WHERE deleted_at IS NULL"
      )
    }
  }

  private fun createPerformanceIndexes(conn: Connection) {
    val indexes =
        listOf(
            "idx_build_likes_player_liked_at" to
                "CREATE INDEX IF NOT EXISTS idx_build_likes_player_liked_at ON build_likes(player_uuid, liked_at)",
            "idx_build_likes_liked_at" to
                "CREATE INDEX IF NOT EXISTS idx_build_likes_liked_at ON build_likes(liked_at)",
            "idx_builds_owner_created_at" to
                "CREATE INDEX IF NOT EXISTS idx_builds_owner_created_at ON builds(owner_uuid, created_at)",
            "idx_publicity_history_sl_id_timestamp" to
                "CREATE INDEX IF NOT EXISTS idx_publicity_history_sl_id_timestamp ON publicity_history(sl_id, timestamp)",
            "idx_sl_event_log_build_id" to
                "CREATE INDEX IF NOT EXISTS idx_sl_event_log_build_id ON sl_event_log(build_id)",
            "idx_sl_event_log_event_type" to
                "CREATE INDEX IF NOT EXISTS idx_sl_event_log_event_type ON sl_event_log(event_type)",
            "idx_builds_deleted_at" to
                "CREATE INDEX IF NOT EXISTS idx_builds_deleted_at ON builds(deleted_at)",
        )

    for ((indexName, sql) in indexes) {
      try {
        conn.createStatement().use { it.execute(sql) }
      } catch (e: Exception) {
        Tools.plugin.logger.warning(
            "[SL3] Failed to create index '$indexName': ${e.message ?: e.javaClass.simpleName}"
        )
      }
    }
  }

  private fun createUniqueLocationIndex(conn: Connection) {
    try {
      conn.createStatement().use { statement ->
        statement.execute(
            "CREATE UNIQUE INDEX IF NOT EXISTS uq_builds_active_loc ON builds(world_name, loc_x, loc_y, loc_z) WHERE deleted_at IS NULL"
        )
      }
    } catch (e: Exception) {
      Tools.plugin.logger.warning(
          "[SL3] Failed to create partial unique index 'uq_builds_active_loc' on active builds: ${e.message ?: e.javaClass.simpleName}"
      )
      logDuplicateActiveBuildLocations(conn)
    }
  }

  private fun logDuplicateActiveBuildLocations(conn: Connection) {
    try {
      val query =
          """
          SELECT world_name, loc_x, loc_y, loc_z, COUNT(*) AS c, GROUP_CONCAT(id) AS ids
          FROM builds
          WHERE deleted_at IS NULL
          GROUP BY world_name, loc_x, loc_y, loc_z
          HAVING c > 1
          """
              .trimIndent()
      conn.prepareStatement(query).use { stmt ->
        stmt.executeQuery().use { rs ->
          var duplicateCount = 0
          while (rs.next()) {
            duplicateCount++
            val world = rs.getString("world_name")
            val x = rs.getDouble("loc_x")
            val y = rs.getDouble("loc_y")
            val z = rs.getDouble("loc_z")
            val count = rs.getInt("c")
            val ids = rs.getString("ids")
            Tools.plugin.logger.warning(
                "[SL3] Duplicate active build location found: world=$world, loc=($x, $y, $z), count=$count, ids=[$ids]"
            )
          }
          if (duplicateCount > 0) {
            Tools.plugin.logger.warning(
                "[SL3] Total duplicate active build location groups: $duplicateCount. Unique index 'uq_builds_active_loc' was skipped."
            )
          }
        }
      }
    } catch (e: Exception) {
      Tools.plugin.logger.warning(
          "[SL3] Failed to query duplicate active build locations: ${e.message ?: e.javaClass.simpleName}"
      )
    }
  }

  fun close() {
    initLatch.countDown()
    val wService = writeExecutor
    val rService = readExecutor
    val db = database

    try {
      wService
          ?.submit {
            try {
              db?.let { TransactionManager.closeAndUnregister(it) }
            } catch (e: Exception) {
              loggerWarning("close", e)
            }
          }
          ?.get(10, TimeUnit.SECONDS)
    } catch (e: Exception) {
      loggerWarning("close", e)
    } finally {
      wService?.shutdown()
      rService?.shutdown()
      writeExecutor = null
      readExecutor = null
      database = null
    }
  }

  /** Records a name observed while the player is online, without blocking the server thread. */
  fun upsertPlayer(uuid: UUID, name: String) {
    val lastKnownName = name.trim()
    if (lastKnownName.isEmpty()) return
    val uuidText = uuid.toString()
    val seenAt = System.currentTimeMillis()

    submit("upsertPlayer") {
      rawConnection()
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

  fun saveBuild(data: SLData, onFinalFailure: ((Exception) -> Unit)? = null) {
    val snapshot = data.toBuildSnapshot()
    submitWrite(
        "saveBuild[${snapshot.id}]",
        onFinalFailure = onFinalFailure,
        onSuccess = { DirtyBuildManager.markClean(snapshot.id) },
    ) {
      upsertBuild(snapshot)
    }
  }

  fun softDeleteBuild(
      id: Int,
      deletedBy: UUID?,
      deletedAt: LocalDateTime,
      onFinalFailure: ((Exception) -> Unit)? = null,
  ) {
    val deletedAtStr = deletedAt.toString()
    val deletedByStr = deletedBy?.toString()
    submitWrite(
        "softDeleteBuild[$id]",
        onFinalFailure = onFinalFailure,
        onSuccess = { DirtyBuildManager.markClean(id) },
    ) {
      Builds.update({ Builds.id eq id }) {
        it[Builds.deletedAt] = deletedAtStr
        it[Builds.deletedBy] = deletedByStr
      }
    }
  }

  fun deleteBuild(id: Int) {
    softDeleteBuild(id, null, LocalDateTime.now())
  }

  fun syncBuilds(dataList: Collection<SLData>) {
    val snapshots = dataList.map { it.toBuildSnapshot() }
    submit("syncBuilds") {
      val ids = snapshots.map { it.id }

      if (ids.isEmpty()) {
        BuildLikes.deleteAll()
        Builds.deleteAll()
      } else {
        BuildLikes.deleteWhere { buildId notInList ids }
        Builds.deleteWhere { id notInList ids }
      }

      snapshots.forEach { upsertBuild(it) }
    }
  }

  fun loadBuildsBlocking(): List<SLData> {
    return submitBlocking("loadBuilds") {
          val likesByBuildId =
              BuildLikes.selectAll()
                  .map { row ->
                    row[BuildLikes.buildId] to
                        LikeSnapshot(
                            playerUuid = row[BuildLikes.playerUuid],
                            likedAt = row[BuildLikes.likedAt],
                        )
                  }
                  .groupBy({ it.first }, { it.second })

          Builds.selectAll()
              .where { Builds.deletedAt.isNull() }
              .orderBy(Builds.id)
              .map { row ->
                BuildSnapshot(
                        id = row[Builds.id],
                        worldName = row[Builds.worldName],
                        locX = row[Builds.locX],
                        locY = row[Builds.locY],
                        locZ = row[Builds.locZ],
                        chunkX = row[Builds.chunkX],
                        chunkZ = row[Builds.chunkZ],
                        createdAt = row[Builds.createdAt],
                        ownerUuid = row[Builds.ownerUuid],
                        title = row[Builds.title],
                        checked = row[Builds.checked],
                        comment = row[Builds.comment],
                        discordTextId = row[Builds.discordTextId],
                        deletedAt = row[Builds.deletedAt],
                        deletedBy = row[Builds.deletedBy],
                        signMaterial = row[Builds.signMaterial],
                        likes = likesByBuildId[row[Builds.id]].orEmpty(),
                    )
                    .toSLData()
              }
        }
        .orEmpty()
  }

  fun recordEvent(
      buildId: Int,
      eventType: String,
      actorUuid: UUID?,
      beforeJson: String?,
      afterJson: String?,
      occurredAt: LocalDateTime = LocalDateTime.now(),
  ) {
    val occurredAtStr = occurredAt.toString()
    val actorStr = actorUuid?.toString()
    submit("recordEvent") {
      SlEventLog.insert {
        it[SlEventLog.buildId] = buildId
        it[SlEventLog.eventType] = eventType
        it[SlEventLog.actorUuid] = actorStr
        it[SlEventLog.beforeJson] = beforeJson
        it[SlEventLog.afterJson] = afterJson
        it[SlEventLog.occurredAt] = occurredAtStr
      }
    }
  }

  private fun loadIdMigrationMapDirect(conn: Connection): Map<Int, Int> {
    migrateIdMigrationMapColumns(conn)
    val map = mutableMapOf<Int, Int>()
    conn.prepareStatement("SELECT old_id, new_id FROM id_migration_map").use { stmt ->
      stmt.executeQuery().use { rs ->
        while (rs.next()) {
          map[rs.getInt("old_id")] = rs.getInt("new_id")
        }
      }
    }
    idMigrationCache.putAll(map)
    return map
  }

  fun loadIdMigrationMapBlocking(): Map<Int, Int> {
    return submitBlocking("loadIdMigrationMap") {
      rawConnection()?.let { loadIdMigrationMapDirect(it) } ?: emptyMap()
    } ?: emptyMap()
  }

  /**
   * The SQLite data is not selected as the startup source until the offline ID migration records
   * this marker. This prevents an upgraded server from accidentally treating an incomplete shadow
   * database as authoritative.
   */
  fun migrationReadiness(): MigrationReadiness {
    return submitBlocking("migrationReadiness") {
      val ready =
          MigrationState.selectAll()
              .where { MigrationState.key eq SQLITE_PRIMARY_READY_KEY }
              .firstOrNull()
              ?.get(MigrationState.value) == "true"
      val negativeCount =
          rawConnection()?.prepareStatement("SELECT COUNT(*) FROM builds WHERE id < 0")?.use {
              statement ->
            statement.executeQuery().use { results -> if (results.next()) results.getInt(1) else 0 }
          } ?: 0
      MigrationReadiness(ready, negativeCount)
    } ?: MigrationReadiness(sqlitePrimaryReady = false, negativeBuildCount = 0)
  }

  fun markSqlitePrimaryReady(): Boolean {
    return submitWriteBlocking("markSqlitePrimaryReady") {
      MigrationState.upsert {
        it[MigrationState.key] = SQLITE_PRIMARY_READY_KEY
        it[MigrationState.value] = "true"
      }
      true
    } ?: false
  }

  /**
   * Reads active sign locations and the ID migration map on the SQLite read executor. The callback
   * is deliberately invoked off the main thread; callers must schedule Bukkit work.
   */
  fun loadSignPdcMigrationInputAsync(
      onSuccess: (SignPdcMigrationInput) -> Unit,
      onFailure: (Exception) -> Unit,
  ) {
    val service =
        readExecutor
            ?: run {
              onFailure(IllegalStateException("database is not initialized"))
              return
            }

    service.submit {
      if (!awaitInit()) {
        onFailure(TimeoutException("database initialization timed out"))
        return@submit
      }
      try {
        val db = database ?: throw IllegalStateException("database is not connected")
        val input =
            transaction(db) {
              val map = rawConnection()?.let { loadIdMigrationMapDirect(it) }.orEmpty()
              val targets = mutableListOf<SignPdcTarget>()
              rawConnection()
                  ?.prepareStatement(
                      """
                      SELECT id, world_name, loc_x, loc_y, loc_z, chunk_x, chunk_z
                      FROM builds
                      WHERE deleted_at IS NULL
                      ORDER BY world_name, chunk_x, chunk_z, id
                      """
                          .trimIndent()
                  )
                  ?.use { statement ->
                    statement.executeQuery().use { results ->
                      while (results.next()) {
                        targets +=
                            SignPdcTarget(
                                id = results.getInt("id"),
                                worldName = results.getString("world_name"),
                                blockX = floor(results.getDouble("loc_x")).toInt(),
                                blockY = floor(results.getDouble("loc_y")).toInt(),
                                blockZ = floor(results.getDouble("loc_z")).toInt(),
                                chunkX = results.getInt("chunk_x"),
                                chunkZ = results.getInt("chunk_z"),
                            )
                      }
                    }
                  }
              SignPdcMigrationInput(targets, map)
            }
        onSuccess(input)
      } catch (e: Exception) {
        loggerWarning("loadSignPdcMigrationInput", e)
        onFailure(e)
      }
    }
  }

  fun resolveMigratedId(id: Int): Int {
    idMigrationCache[id]?.let {
      return it
    }
    val resolved =
        submitBlocking("resolveMigratedId") {
          rawConnection()
              ?.prepareStatement("SELECT new_id FROM id_migration_map WHERE old_id = ?")
              ?.use { stmt ->
                stmt.setInt(1, id)
                stmt.executeQuery().use { rs -> if (rs.next()) rs.getInt("new_id") else null }
              }
        }
    if (resolved != null) {
      idMigrationCache[id] = resolved
      return resolved
    }
    return id
  }

  fun migrateNegativeIds(dryRun: Boolean = false): MigrationResult {
    val service = writeExecutor
    if (service == null) {
      val err = IllegalStateException("Database write executor is not initialized")
      Tools.plugin.logger.log(
          Level.SEVERE,
          "[SL3] SQLite shadow migrateNegativeIds failed: database not initialized",
          err,
      )
      return MigrationResult.Failure(err)
    }

    val future =
        service.submit(
            Callable<MigrationResult> {
              if (!awaitInit()) {
                val err = TimeoutException("Database initialization timed out")
                Tools.plugin.logger.log(
                    Level.SEVERE,
                    "[SL3] SQLite shadow migrateNegativeIds failed: initialization timeout",
                    err,
                )
                return@Callable MigrationResult.Failure(err)
              }

              try {
                if (!::dbFile.isInitialized || !dbFile.exists()) {
                  val err =
                      IllegalStateException(
                          "Database file does not exist: ${if (::dbFile.isInitialized) dbFile.absolutePath else "uninitialized"}"
                      )
                  return@Callable MigrationResult.Failure(err)
                }

                val dbUrl = "jdbc:sqlite:${dbFile.absolutePath}?busy_timeout=10000"
                java.sql.DriverManager.getConnection(dbUrl).use { conn ->
                  val result = migrateNegativeIdsDirect(conn, dryRun)
                  if (result is MigrationResult.Success && !dryRun) {
                    idMigrationCache.putAll(result.idMap)
                  }
                  result
                }
              } catch (e: Exception) {
                Tools.plugin.logger.log(
                    Level.SEVERE,
                    "[SL3] SQLite shadow migrateNegativeIds failed: ${e.message ?: e.javaClass.simpleName}",
                    e,
                )
                MigrationResult.Failure(e)
              }
            }
        )

    return try {
      future.get(BLOCKING_TIMEOUT_SECONDS * 4, TimeUnit.SECONDS)
    } catch (e: TimeoutException) {
      val err =
          TimeoutException(
              "SQLite shadow migrateNegativeIds timed out after ${BLOCKING_TIMEOUT_SECONDS * 4}s"
          )
      Tools.plugin.logger.log(Level.SEVERE, "[SL3] SQLite shadow migrateNegativeIds timed out", err)
      future.cancel(true)
      MigrationResult.Failure(err)
    } catch (e: Exception) {
      Tools.plugin.logger.log(
          Level.SEVERE,
          "[SL3] SQLite shadow migrateNegativeIds execution failed: ${e.message ?: e.javaClass.simpleName}",
          e,
      )
      MigrationResult.Failure(e)
    }
  }

  fun migrateNegativeIdsDirect(conn: Connection, dryRun: Boolean = false): MigrationResult {
    migrateIdMigrationMapColumns(conn)

    val positiveIds = mutableListOf<Int>()
    conn.prepareStatement("SELECT id FROM builds WHERE id > 0 ORDER BY id DESC").use { stmt ->
      stmt.executeQuery().use { rs -> while (rs.next()) positiveIds += rs.getInt("id") }
    }
    val negativeIds = mutableListOf<Int>()
    conn.prepareStatement("SELECT id FROM builds WHERE id < 0 ORDER BY id ASC").use { stmt ->
      stmt.executeQuery().use { rs -> while (rs.next()) negativeIds += rs.getInt("id") }
    }

    if (negativeIds.isEmpty()) {
      return MigrationResult.NoTarget
    }

    val existingMap = mutableMapOf<Int, Int>()
    conn.prepareStatement("SELECT old_id, new_id FROM id_migration_map").use { stmt ->
      stmt.executeQuery().use { rs ->
        while (rs.next()) {
          existingMap[rs.getInt("old_id")] = rs.getInt("new_id")
        }
      }
    }

    // 1〜9,999 のうち、絶対値 < 10000 の負IDによって使用されるスロットを算出
    val usedSlots = mutableSetOf<Int>()
    for (oldId in negativeIds) {
      if (existingMap.containsKey(oldId)) {
        val newId = existingMap[oldId]!!
        if (newId in 1..9999) {
          usedSlots.add(newId)
        }
      } else if (kotlin.math.abs(oldId) < 10000) {
        usedSlots.add(kotlin.math.abs(oldId))
      }
    }

    // 1〜9,999 の空きスロットを昇順でリスト化
    val availableSlots = (1..9999).filter { it !in usedSlots }.toMutableList()

    // 絶対値が 10000 以上の負ID（空きスロット割り当て対象）
    // 決定的な規則として、絶対値の昇順でソート
    val overflowNegativeIds =
        negativeIds
            .filter { !existingMap.containsKey(it) && kotlin.math.abs(it) >= 10000 }
            .sortedBy { kotlin.math.abs(it) }

    // 事前検証 1: 空きスロット数の検証
    if (availableSlots.size < overflowNegativeIds.size) {
      val err =
          IllegalStateException(
              "Insufficient vacant slots in 1..9,999 for negative IDs >= 10,000. " +
                  "Required: ${overflowNegativeIds.size}, Available: ${availableSlots.size}"
          )
      return MigrationResult.Failure(err)
    }

    // 事前検証 2: 正IDの最大値 + 10,000 が INT 範囲に収まるかの検証
    val maxPositiveId = positiveIds.maxOrNull() ?: 0
    if (maxPositiveId.toLong() + 10000 > Int.MAX_VALUE) {
      val err =
          IllegalStateException(
              "Positive ID exceeds integer max value when adding offset 10000: $maxPositiveId"
          )
      return MigrationResult.Failure(err)
    }

    // マッピングテーブルの構築
    val mapToApply = mutableMapOf<Int, Int>()

    // 1. 正ID: 新ID = 旧ID + 10000 (全件)
    for (oldId in positiveIds) {
      val newId = existingMap[oldId] ?: (oldId + 10000)
      mapToApply[oldId] = newId
    }

    // 2. 負ID (絶対値 < 10000): 新ID = 絶対値
    for (oldId in negativeIds) {
      if (existingMap.containsKey(oldId)) {
        mapToApply[oldId] = existingMap[oldId]!!
      } else if (kotlin.math.abs(oldId) < 10000) {
        mapToApply[oldId] = kotlin.math.abs(oldId)
      }
    }

    // 3. 負ID (絶対値 >= 10000): 空きスロットを昇順に割り当て
    for ((index, oldId) in overflowNegativeIds.withIndex()) {
      val slot = availableSlots[index]
      mapToApply[oldId] = slot
    }

    // 事前検証 3: 新IDの割り当てに重複が無いかの検証
    val assignedNewIds = mapToApply.values
    if (assignedNewIds.toSet().size != assignedNewIds.size) {
      val duplicates = assignedNewIds.groupingBy { it }.eachCount().filter { it.value > 1 }.keys
      val err =
          IllegalStateException("Duplicate new IDs detected in migration mapping: $duplicates")
      return MigrationResult.Failure(err)
    }

    if (dryRun) {
      try {
        validateUpdatesInTemporaryDb(conn, positiveIds, negativeIds, mapToApply)
      } catch (e: Exception) {
        return MigrationResult.Failure(e)
      }
      return MigrationResult.Success(mapToApply.size, mapToApply)
    }

    try {
      applyUpdatesToDatabase(conn, positiveIds, negativeIds, mapToApply)
      return MigrationResult.Success(mapToApply.size, mapToApply)
    } catch (e: Exception) {
      return MigrationResult.Failure(e)
    }
  }

  private fun validateUpdatesInTemporaryDb(
      conn: Connection,
      positiveIds: List<Int>,
      negativeIds: List<Int>,
      mapToApply: Map<Int, Int>,
  ) {
    val tempFile = File.createTempFile("sl3_dryrun_validate_", ".db")
    try {
      // 現在のデータベース状態を一時ファイルにバックアップして実UPDATEを検証
      conn.createStatement().use { stmt ->
        stmt.execute("VACUUM INTO '${tempFile.absolutePath.replace("'", "''")}';")
      }
      val tempDbUrl = "jdbc:sqlite:${tempFile.absolutePath}?busy_timeout=5000"
      java.sql.DriverManager.getConnection(tempDbUrl).use { tempConn ->
        applyUpdatesToDatabase(tempConn, positiveIds, negativeIds, mapToApply)
      }
    } finally {
      tempFile.delete()
    }
  }

  private fun applyUpdatesToDatabase(
      conn: Connection,
      positiveIds: List<Int>,
      negativeIds: List<Int>,
      mapToApply: Map<Int, Int>,
  ) {
    // 外部キー制約を確実に無効化するため、トランザクション開始前（autoCommit = true）に PRAGMA を実行
    // SQLite仕様: PRAGMA foreign_keys はトランザクション内（BEGIN下）では no-op のため
    conn.autoCommit = true
    conn.createStatement().use { it.execute("PRAGMA foreign_keys = OFF;") }

    try {
      conn.autoCommit = false
      try {
        // 0. id_migration_map に全マッピングを登録
        conn
            .prepareStatement(
                "INSERT OR REPLACE INTO id_migration_map (old_id, new_id) VALUES (?, ?)"
            )
            .use { stmt ->
              for ((oldId, newId) in mapToApply) {
                stmt.setInt(1, oldId)
                stmt.setInt(2, newId)
                stmt.addBatch()
              }
              stmt.executeBatch()
            }

        // 1. 【更新順序必須】先に正IDを大きい順（降順）に処理する（例: 12,519 -> 22,519, 12,518 -> 22,518, ...）。
        //    降順に更新することで移動先（newId = oldId + 10000）が常に空いており、PK衝突（主キー重複エラー）を完全に回避できる。
        conn.prepareStatement("UPDATE builds SET id = ? WHERE id = ?").use { stmt ->
          for (oldId in positiveIds.sortedDescending()) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

        // 2. 【更新順序必須】その後に負IDを処理する。
        //    正IDが 1〜9,999 から 10,001〜 へすべて退避済みのため、1〜9,999 の移動先領域が完全に空いており衝突しない。
        conn.prepareStatement("UPDATE builds SET id = ? WHERE id = ?").use { stmt ->
          for (oldId in negativeIds) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

        // 3. 関連テーブル（外部キー参照元）の更新
        conn.prepareStatement("UPDATE build_likes SET build_id = ? WHERE build_id = ?").use { stmt
          ->
          for (oldId in positiveIds.sortedDescending()) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          for (oldId in negativeIds) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

        conn.prepareStatement("UPDATE publicity_history SET sl_id = ? WHERE sl_id = ?").use { stmt
          ->
          for (oldId in positiveIds.sortedDescending()) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          for (oldId in negativeIds) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

        conn.prepareStatement("UPDATE sl_event_log SET build_id = ? WHERE build_id = ?").use { stmt
          ->
          for (oldId in positiveIds.sortedDescending()) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          for (oldId in negativeIds) {
            val newId = mapToApply[oldId] ?: continue
            stmt.setInt(1, newId)
            stmt.setInt(2, oldId)
            stmt.addBatch()
          }
          stmt.executeBatch()
        }

        conn.commit()
      } catch (e: Exception) {
        try {
          conn.rollback()
        } catch (rbEx: Exception) {
          // ロールバック失敗時の例外
        }
        throw e
      }
    } finally {
      // 処理の成否にかかわらず、確実に foreign_keys を ON に戻す
      try {
        conn.autoCommit = true
        conn.createStatement().use { it.execute("PRAGMA foreign_keys = ON;") }
      } catch (ignored: Exception) {}
    }
  }

  fun getMaxBuildIdBlocking(): Int? {
    return submitBlocking("getMaxBuildId") {
      rawConnection()?.prepareStatement("SELECT MAX(id) AS max_id FROM builds")?.use { statement ->
        statement.executeQuery().use { results ->
          if (results.next()) {
            val maxId = results.getInt("max_id")
            if (results.wasNull()) null else maxId
          } else {
            null
          }
        }
      }
    }
  }

  fun savePublicityHistory(data: PublicityData) {
    val snapshot = data.toPublicityHistorySnapshot()
    submit("savePublicityHistory") { upsertPublicityHistory(snapshot) }
  }

  fun savePublicityHistoryBlocking(data: PublicityData): Boolean {
    val snapshot = data.toPublicityHistorySnapshot()
    return submitWriteBlocking("savePublicityHistory") {
      upsertPublicityHistory(snapshot)
      true
    } ?: false
  }

  fun deletePublicityHistoryBySLID(slid: Int) {
    submit("deletePublicityHistoryBySLID") {
      PublicityHistoryRows.deleteWhere { PublicityHistoryRows.slId eq slid }
    }
  }

  fun syncPublicityHistory(dataList: Collection<PublicityData>) {
    val snapshots = dataList.map { it.toPublicityHistorySnapshot() }
    submit("syncPublicityHistory") {
      val ids = snapshots.map { it.id }

      if (ids.isEmpty()) {
        PublicityHistoryRows.deleteAll()
      } else {
        PublicityHistoryRows.deleteWhere { id notInList ids }
      }

      snapshots.forEach { upsertPublicityHistory(it) }
    }
  }

  private val playerNameCache = java.util.concurrent.ConcurrentHashMap<String, String>()

  /**
   * Resolves the supplied UUIDs with one query. This is intentionally limited to the /sldata
   * statistics cache; it does not fall back to Bukkit's offline-player lookup.
   */
  fun loadPlayerNamesBlocking(uuids: List<String>): Map<String, String> {
    val normalizedUuids = uuids.filter { it.isNotBlank() }.distinct()
    if (normalizedUuids.isEmpty()) return emptyMap()

    val uncached = normalizedUuids.filter { !playerNameCache.containsKey(it) }
    if (uncached.isNotEmpty()) {
      submitBlocking("loadPlayerNames") {
        uncached.chunked(900).forEach { chunk ->
          val placeholders = chunk.joinToString(",") { "?" }
          rawConnection()
              ?.prepareStatement(
                  "SELECT uuid, last_known_name FROM players WHERE uuid IN ($placeholders)"
              )
              ?.use { statement ->
                chunk.forEachIndexed { index, uuid -> statement.setString(index + 1, uuid) }
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    val u = results.getString("uuid")
                    val n = results.getString("last_known_name")
                    if (u != null && n != null) {
                      playerNameCache[u] = n
                    }
                  }
                }
              }
        }
      }
    }
    return normalizedUuids.mapNotNull { u -> playerNameCache[u]?.let { n -> u to n } }.toMap()
  }

  fun findUuidByNameBlocking(name: String): UUID? {
    var resultUuid: UUID? = null
    submitBlocking("findUuidByName") {
      rawConnection()
          ?.prepareStatement(
              "SELECT uuid FROM players WHERE LOWER(last_known_name) = LOWER(?) LIMIT 1"
          )
          ?.use { stmt ->
            stmt.setString(1, name)
            stmt.executeQuery().use { rs ->
              if (rs.next()) {
                val uStr = rs.getString("uuid")
                if (uStr != null) {
                  try {
                    resultUuid = UUID.fromString(uStr)
                  } catch (e: Exception) {}
                }
              }
            }
          }
    }
    return resultUuid
  }

  /** Returns timestamped likes made by one player with their build dimensions. */
  fun loadGivenLikeEventsBlocking(
      playerUuid: String,
      reliablePublishedSince: LocalDateTime? = null,
  ): List<BuildLikeEvent> =
      loadLikeEventsBlocking(
          "loadGivenLikeEvents",
          "bl.player_uuid = ?",
          playerUuid,
          reliablePublishedSince,
      )

  /** Returns timestamped likes received by one build owner with their build dimensions. */
  fun loadReceivedLikeEventsBlocking(
      ownerUuid: String,
      reliablePublishedSince: LocalDateTime? = null,
  ): List<BuildLikeEvent> =
      loadLikeEventsBlocking(
          "loadReceivedLikeEvents",
          "b.owner_uuid = ?",
          ownerUuid,
          reliablePublishedSince,
      )

  fun loadLikeTimestampCoverageBlocking(): LikeTimestampCoverage =
      submitBlocking("loadLikeTimestampCoverage") {
        LikeTimestampCoverage(
            totalLikes = countQuery("SELECT COUNT(*) AS count FROM build_likes"),
            timestampedLikes =
                countQuery("SELECT COUNT(*) AS count FROM build_likes WHERE liked_at IS NOT NULL"),
        )
      } ?: LikeTimestampCoverage(totalLikes = 0, timestampedLikes = 0)

  fun loadReliableTimestampPopulationBlocking(cutoff: LocalDateTime): ReliableTimestampPopulation =
      submitBlocking("loadReliableTimestampPopulation") {
        val cutoffText = cutoff.toString()
        val postCutoffBuildCount =
            countQuery(
                """
                SELECT COUNT(id) AS count
                FROM active_builds
                WHERE created_at >= ?
                """
                    .trimIndent()
            ) { statement ->
              statement.setString(1, cutoffText)
            }
        val postCutoffCompleteBuildCount =
            countQuery(
                """
                SELECT COUNT(*) AS count
                FROM (
                  SELECT b.id
                  FROM active_builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id
                  WHERE b.created_at >= ?
                  GROUP BY b.id
                  HAVING COUNT(bl.player_uuid) = COUNT(bl.liked_at)
                )
                """
                    .trimIndent()
            ) { statement ->
              statement.setString(1, cutoffText)
            }
        val completeLikedBuildCount =
            countQuery(
                """
                SELECT COUNT(*) AS count
                FROM (
                  SELECT b.id
                  FROM active_builds b
                  JOIN build_likes bl ON bl.build_id = b.id
                  GROUP BY b.id
                  HAVING COUNT(bl.player_uuid) = COUNT(bl.liked_at)
                )
                """
                    .trimIndent()
            )
        ReliableTimestampPopulation(
            postCutoffBuildCount,
            postCutoffCompleteBuildCount,
            completeLikedBuildCount,
        )
      } ?: ReliableTimestampPopulation(0, 0, 0)

  fun loadOwnerBuildCountCreatedSinceBlocking(ownerUuid: String, since: LocalDateTime): Int =
      submitBlocking("loadOwnerBuildCountCreatedSince") {
        countQuery(
            """
            SELECT COUNT(id) AS count
            FROM active_builds
            WHERE owner_uuid = ? AND created_at >= ?
              AND id IN (
                SELECT b2.id
                FROM active_builds b2
                LEFT JOIN build_likes bl2 ON bl2.build_id = b2.id
                GROUP BY b2.id
                HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
              )
            """
                .trimIndent()
        ) { statement ->
          statement.setString(1, ownerUuid)
          statement.setString(2, since.toString())
        }
      } ?: 0

  fun loadOwnerCompleteLikedBuildCountBlocking(ownerUuid: String): Int =
      submitBlocking("loadOwnerCompleteLikedBuildCount") {
        countQuery(
            """
            SELECT COUNT(*) AS count
            FROM (
              SELECT b.id
              FROM active_builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ?
              GROUP BY b.id
              HAVING COUNT(bl.player_uuid) = COUNT(bl.liked_at)
            )
            """
                .trimIndent()
        ) { statement ->
          statement.setString(1, ownerUuid)
        }
      } ?: 0

  fun loadWeeklyLikeCountsBlocking(weeks: Int = 12): List<WeeklyLikeCount> {
    val normalizedWeeks = weeks.coerceIn(1, 52)
    val zoneId = ZoneId.of("UTC")
    val currentWeekStart =
        LocalDate.now(zoneId).with(TemporalAdjusters.previousOrSame(DayOfWeek.MONDAY))
    val firstWeekStart = currentWeekStart.minusWeeks((normalizedWeeks - 1).toLong())
    val firstWeekStartMillis = firstWeekStart.atStartOfDay(zoneId).toInstant().toEpochMilli()

    return submitBlocking("loadWeeklyLikeCounts") {
          loadWeeklyLikeCountsDirect(
              rawConnection(),
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, b.owner_uuid, COUNT(bl.player_uuid) AS likes_count
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
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
      sinceMillis: Long?,
      limit: Int = 5,
      excludeOwnerSelfLikes: Boolean = false,
  ): List<OwnerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    val selfLikeClause = if (excludeOwnerSelfLikes) "AND bl.player_uuid <> b.owner_uuid" else ""
    // An all-time ranking is not a timestamped-time-series query. Historical likes predate
    // liked_at, so do not discard them when no calendar boundary was requested.
    val periodClause =
        if (sinceMillis == null) "" else "AND bl.liked_at IS NOT NULL AND bl.liked_at >= ?"
    return submitBlocking("loadOwnerLikeLeadersSince") {
          val summaries = mutableListOf<OwnerLikeSummary>()
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, COUNT(bl.player_uuid) AS likes_count
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
                  WHERE 1 = 1 $periodClause
                    $selfLikeClause
                  GROUP BY b.owner_uuid
                  ORDER BY likes_count DESC, b.owner_uuid ASC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                if (sinceMillis == null) statement.setInt(1, normalizedLimit)
                else {
                  statement.setLong(1, sinceMillis)
                  statement.setInt(2, normalizedLimit)
                }
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

  /** Counts likes in a ranking period, including owner self-likes. */
  fun loadLikeCountSinceBlocking(sinceMillis: Long?): Int =
      submitBlocking("loadLikeCountSince") {
        // See loadOwnerLikeLeadersSinceBlocking: only bounded periods require liked_at.
        val periodClause =
            if (sinceMillis == null) "" else "AND bl.liked_at IS NOT NULL AND bl.liked_at >= ?"
        countQuery(
            """
            SELECT COUNT(*) AS count
            FROM build_likes bl
            WHERE 1 = 1 $periodClause
            """
                .trimIndent()
        ) { statement ->
          if (sinceMillis != null) statement.setLong(1, sinceMillis)
        }
      } ?: 0

  fun loadWeeklyLikedOwnersBlocking(
      playerUuid: String,
      sinceMillis: Long,
      limit: Int = 5,
  ): List<OwnerLikeSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadWeeklyLikedOwners") {
          val summaries = mutableListOf<OwnerLikeSummary>()
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, COUNT(bl.build_id) AS likes_count
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
                  WHERE bl.player_uuid = ?
                    AND b.owner_uuid <> ?
                    AND bl.liked_at IS NOT NULL
                    AND bl.liked_at >= ?
                  GROUP BY b.owner_uuid
                  ORDER BY likes_count DESC, b.owner_uuid ASC
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT bl.player_uuid, COUNT(bl.build_id) AS likes_count
                  FROM active_builds b
                  JOIN build_likes bl ON bl.build_id = b.id
                  WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
                  GROUP BY bl.player_uuid
                  ORDER BY likes_count DESC, bl.player_uuid ASC
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
          rawConnection()
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
                    JOIN active_builds b ON b.id = bl.build_id
                    JOIN (
                      SELECT b2.id
                      FROM active_builds b2
                      JOIN build_likes bl2 ON bl2.build_id = b2.id
                      GROUP BY b2.id
                      HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                    ) complete_builds ON complete_builds.id = b.id
                    WHERE bl.liked_at IS NOT NULL
                    AND bl.player_uuid <> b.owner_uuid
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
          rawConnection()
              ?.prepareStatement(
                  """
                   SELECT b.id, b.title, COUNT(bl.player_uuid) AS likes_count
                   FROM active_builds b
                   LEFT JOIN build_likes bl ON bl.build_id = b.id
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
              JOIN active_builds b ON b.id = bl.build_id
              WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
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
              FROM active_builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
                 JOIN active_builds b ON b.id = bl.build_id
                 WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
               ), incoming AS (
                 SELECT DISTINCT bl.player_uuid
                 FROM active_builds b
                 JOIN build_likes bl ON bl.build_id = b.id
                 WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
      rawConnection()
          ?.prepareStatement(
              """
              WITH outgoing AS (
                 SELECT b.owner_uuid AS player_uuid, COUNT(bl.build_id) AS likes_given
                 FROM build_likes bl
                 JOIN active_builds b ON b.id = bl.build_id
                 WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
                 GROUP BY b.owner_uuid
               ), incoming AS (
                 SELECT bl.player_uuid, COUNT(bl.build_id) AS likes_received
                 FROM active_builds b
                 JOIN build_likes bl ON bl.build_id = b.id
                 WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
              JOIN active_builds b ON b.id = bl.build_id
              WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
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
              FROM active_builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
      rawConnection()
          ?.prepareStatement(
              """
              WITH favorite_owner AS (
                 SELECT b.owner_uuid, COUNT(bl.build_id) AS liked_build_count
                 FROM build_likes bl
                 JOIN active_builds b ON b.id = bl.build_id
                 WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
                GROUP BY b.owner_uuid
                ORDER BY liked_build_count DESC, b.owner_uuid ASC
                LIMIT 1
              )
              SELECT
                f.owner_uuid,
                COUNT(DISTINCT b.id) AS total_build_count,
                f.liked_build_count
              FROM favorite_owner f
              JOIN active_builds b ON b.owner_uuid = f.owner_uuid
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, MIN(bl.liked_at) AS first_liked_at
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
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
          rawConnection()
              ?.prepareStatement(
                  """
                  WITH liked_owners AS (
                     SELECT DISTINCT b.owner_uuid
                     FROM build_likes bl
                     JOIN active_builds b ON b.id = bl.build_id
                     WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
                   )
                   SELECT bl.player_uuid, COUNT(DISTINCT b.owner_uuid) AS shared_owner_count
                   FROM active_builds b
                   JOIN build_likes bl ON bl.build_id = b.id
                   WHERE b.owner_uuid IN (SELECT owner_uuid FROM liked_owners)
                     AND bl.player_uuid <> ?
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
          rawConnection()
              ?.prepareStatement(
                  """
                   SELECT
                     bl.player_uuid,
                     COUNT(bl.build_id) AS like_count,
                     COUNT(DISTINCT CASE WHEN bl.liked_at IS NOT NULL
                                         THEN strftime('%Y-%W', bl.liked_at / 1000, 'unixepoch')
                                    END) AS active_week_count
                   FROM active_builds b
                   JOIN build_likes bl ON bl.build_id = b.id
                   WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
              FROM active_builds b
              JOIN build_likes bl ON bl.build_id = b.id
              WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
                 FROM active_builds b
                 JOIN build_likes bl ON bl.build_id = b.id
                 WHERE b.owner_uuid = ? AND bl.player_uuid <> ?
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
      createdSince: LocalDateTime? = null,
      limit: Int = 5,
  ): List<FastestSupporterSummary> {
    val normalizedLimit = normalizedStatsLimit(limit)
    return submitBlocking("loadFastestSupporters") {
          val summaries = mutableListOf<FastestSupporterSummary>()
          val createdSinceClause = if (createdSince == null) "" else "AND b.created_at >= ?"
          rawConnection()
              ?.prepareStatement(
                  """
                  WITH first_likes AS (
                    SELECT b.id AS build_id, MIN(bl.liked_at) AS first_liked_at
                    FROM active_builds b
                    JOIN (
                      SELECT b2.id
                      FROM active_builds b2
                      JOIN build_likes bl2 ON bl2.build_id = b2.id
                      GROUP BY b2.id
                      HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                    ) complete_builds ON complete_builds.id = b.id
                    JOIN build_likes bl ON bl.build_id = b.id
                    WHERE b.owner_uuid = ?
                      AND bl.player_uuid <> ?
                      $createdSinceClause
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
                  ORDER BY first_support_count DESC, bl.player_uuid DESC
                  LIMIT ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, ownerUuid)
                statement.setString(2, ownerUuid)
                var parameterIndex = 3
                if (createdSince != null) {
                  statement.setString(parameterIndex, createdSince.toString())
                  parameterIndex++
                }
                statement.setString(parameterIndex, ownerUuid)
                parameterIndex++
                statement.setInt(parameterIndex, normalizedLimit)
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
          rawConnection()
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT
                    b.id,
                    b.title,
                    b.owner_uuid,
                    SUM(CASE WHEN bl.liked_at >= ? THEN 1 ELSE 0 END) AS current_count,
                    SUM(CASE WHEN bl.liked_at >= ? AND bl.liked_at < ? THEN 1 ELSE 0 END) AS previous_count
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
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
                      JOIN active_builds b ON b.id = bl.build_id
                      JOIN (
                        SELECT b2.id
                        FROM active_builds b2
                        JOIN build_likes bl2 ON bl2.build_id = b2.id
                        GROUP BY b2.id
                        HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                      ) complete_builds ON complete_builds.id = b.id
                      WHERE bl.liked_at IS NOT NULL
                        AND bl.player_uuid <> b.owner_uuid
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
            rawConnection()
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
                      JOIN active_builds b ON b.id = bl.build_id
                      JOIN (
                        SELECT b2.id
                        FROM active_builds b2
                        JOIN build_likes bl2 ON bl2.build_id = b2.id
                        GROUP BY b2.id
                        HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                      ) complete_builds ON complete_builds.id = b.id
                      WHERE bl.liked_at IS NOT NULL
                        AND bl.player_uuid <> b.owner_uuid
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
      rawConnection()
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
          rawConnection()
              ?.prepareStatement(
                  """
                   SELECT b.id, b.title, b.created_at, COUNT(bl.player_uuid) AS likes_received
                   FROM active_builds b
                   LEFT JOIN build_likes bl ON bl.build_id = b.id
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
          rawConnection()
              ?.prepareStatement(
                  """
                   SELECT b.world_name,
                          COUNT(DISTINCT CASE WHEN b.owner_uuid = ? THEN b.id END) AS own_build_count,
                          COUNT(DISTINCT CASE WHEN b.owner_uuid = ?
                                              THEN bl.player_uuid || ':' || b.id END) AS own_received_likes,
                          COUNT(DISTINCT b.id) AS global_build_count,
                          COUNT(DISTINCT bl.player_uuid || ':' || b.id) AS global_received_likes,
                          COUNT(DISTINCT CASE WHEN bl.player_uuid = ?
                                              THEN b.id END) AS given_likes
                  FROM active_builds b
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
      rawConnection()
          ?.prepareStatement(
              """
              SELECT b.world_name, b.chunk_x, b.chunk_z,
                     COUNT(DISTINCT b.id) AS build_count,
                     COUNT(bl.player_uuid) AS received_likes
              FROM active_builds b
              LEFT JOIN build_likes bl ON bl.build_id = b.id
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.chunk_x, b.chunk_z, COUNT(DISTINCT b.id) AS build_count,
                         COUNT(bl.player_uuid) AS received_likes
                  FROM active_builds b
                  LEFT JOIN build_likes bl ON bl.build_id = b.id
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
      rawConnection()
          ?.prepareStatement(
              """
              SELECT b.id, b.title, b.owner_uuid, b.world_name, b.loc_x, b.loc_y, b.loc_z
              FROM active_builds b
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
  fun loadBuildLikeCountsBlocking(
      ownerUuid: String? = null,
      onlyWithLikes: Boolean = false,
  ): List<Int> {
    return submitBlocking("loadBuildLikeCounts") {
          val counts = mutableListOf<Int>()
          val sql =
              if (ownerUuid == null) {
                """
                SELECT b.id, COUNT(bl.player_uuid) AS like_count
                FROM active_builds b LEFT JOIN build_likes bl ON bl.build_id = b.id
                GROUP BY b.id
                ${if (onlyWithLikes) "HAVING like_count > 0" else ""}
                """
                    .trimIndent()
              } else {
                """
                SELECT b.id, COUNT(bl.player_uuid) AS like_count
                FROM active_builds b LEFT JOIN build_likes bl ON bl.build_id = b.id
                WHERE b.owner_uuid = ?
                GROUP BY b.id
                ${if (onlyWithLikes) "HAVING like_count > 0" else ""}
                """
                    .trimIndent()
              }
          rawConnection()?.prepareStatement(sql)?.use { statement ->
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.id, COUNT(all_likes.player_uuid) AS like_count
                  FROM build_likes mine
                  JOIN active_builds b ON b.id = mine.build_id
                  LEFT JOIN build_likes all_likes
                    ON all_likes.build_id = b.id
                  WHERE mine.player_uuid = ?
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

  fun loadGivenLikeDimensionsBlocking(playerUuid: String): List<BuildLikeDimension> {
    return submitBlocking("loadGivenLikeDimensions") {
          val dimensions = mutableListOf<BuildLikeDimension>()
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.owner_uuid, b.world_name, b.chunk_x, b.chunk_z
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
                  WHERE bl.player_uuid = ? AND b.owner_uuid <> ?
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                statement.setString(1, playerUuid)
                statement.setString(2, playerUuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    dimensions +=
                        BuildLikeDimension(
                            ownerUuid = results.getString("owner_uuid"),
                            worldName = results.getString("world_name"),
                            chunkX = results.getInt("chunk_x"),
                            chunkZ = results.getInt("chunk_z"),
                        )
                  }
                }
              }
          dimensions
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
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT ph.id AS publicity_id, ph.sl_id, ph.timestamp, b.title, b.owner_uuid, bl.liked_at
                  FROM publicity_history ph
                  JOIN active_builds b ON b.id = ph.sl_id
                  JOIN (
                    SELECT b2.id
                    FROM active_builds b2
                    JOIN build_likes bl2 ON bl2.build_id = b2.id
                    GROUP BY b2.id
                    HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                  ) complete_builds ON complete_builds.id = b.id
                  LEFT JOIN build_likes bl
                    ON bl.build_id = b.id
                   AND bl.liked_at IS NOT NULL
                   AND bl.player_uuid <> b.owner_uuid
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
              FROM active_builds
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
              JOIN active_builds b ON b.id = bl.build_id
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
      reliablePublishedSince: LocalDateTime?,
  ): List<BuildLikeEvent> {
    return submitBlocking(taskName) {
          val events = mutableListOf<BuildLikeEvent>()
          val reliableBuildJoin =
              reliablePublishedSince?.let {
                """
                JOIN (
                  SELECT b2.id
                  FROM active_builds b2
                  JOIN build_likes bl2 ON bl2.build_id = b2.id
                  WHERE b2.created_at >= ?
                  GROUP BY b2.id
                  HAVING COUNT(bl2.player_uuid) = COUNT(bl2.liked_at)
                ) reliable_builds ON reliable_builds.id = b.id
                """
                    .trimIndent()
              } ?: ""
          rawConnection()
              ?.prepareStatement(
                  """
                  SELECT b.id, b.title, bl.player_uuid, b.owner_uuid, b.world_name, b.chunk_x, b.chunk_z, b.created_at, bl.liked_at
                  FROM build_likes bl
                  JOIN active_builds b ON b.id = bl.build_id
                  $reliableBuildJoin
                  WHERE $filterSql AND bl.liked_at IS NOT NULL
                  ORDER BY bl.liked_at ASC, b.id ASC
                  """
                      .trimIndent()
              )
              ?.use { statement ->
                var parameterIndex = 1
                if (reliablePublishedSince != null) {
                  statement.setString(parameterIndex, reliablePublishedSince.toString())
                  parameterIndex++
                }
                statement.setString(parameterIndex, uuid)
                statement.executeQuery().use { results ->
                  while (results.next()) {
                    events +=
                        BuildLikeEvent(
                            buildId = results.getInt("id"),
                            title = results.getString("title"),
                            playerUuid = results.getString("player_uuid"),
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

  private fun awaitInit(timeoutSeconds: Long = BLOCKING_TIMEOUT_SECONDS): Boolean {
    return try {
      initLatch.await(timeoutSeconds, TimeUnit.SECONDS)
    } catch (e: InterruptedException) {
      Thread.currentThread().interrupt()
      false
    }
  }

  private fun submit(taskName: String, block: () -> Unit) {
    val service =
        writeExecutor
            ?: run {
              Tools.plugin.logger.warning(
                  "[SL3] SQLite shadow $taskName skipped: database is not initialized"
              )
              return
            }

    service.submit {
      if (!awaitInit()) {
        Tools.plugin.logger.warning(
            "[SL3] SQLite shadow $taskName skipped: database initialization timed out"
        )
        return@submit
      }
      try {
        val db =
            database
                ?: run {
                  Tools.plugin.logger.warning(
                      "[SL3] SQLite shadow $taskName skipped: database is not connected"
                  )
                  return@submit
                }

        transaction(db) { block() }
      } catch (e: Exception) {
        loggerWarning(taskName, e)
      }
    }
  }

  fun submitWrite(
      taskName: String,
      onFinalFailure: ((Exception) -> Unit)? = null,
      onSuccess: (() -> Unit)? = null,
      block: () -> Unit,
  ) {
    val service =
        writeExecutor
            ?: run {
              val ex = IllegalStateException("database is not initialized")
              Tools.plugin.logger.severe(
                  "[SL3] SQLite write $taskName skipped: database is not initialized"
              )
              try {
                onFinalFailure?.invoke(ex)
              } catch (cbEx: Exception) {
                Tools.plugin.logger.log(
                    Level.SEVERE,
                    "[SL3] SQLite write $taskName onFinalFailure callback threw exception",
                    cbEx,
                )
              }
              return
            }

    service.submit {
      if (!awaitInit()) {
        val ex = TimeoutException("database initialization timed out")
        Tools.plugin.logger.severe(
            "[SL3] SQLite write $taskName skipped: database initialization timed out"
        )
        try {
          onFinalFailure?.invoke(ex)
        } catch (cbEx: Exception) {
          Tools.plugin.logger.log(
              Level.SEVERE,
              "[SL3] SQLite write $taskName onFinalFailure callback threw exception",
              cbEx,
          )
        }
        return@submit
      }
      for (attempt in 1..MAX_WRITE_RETRIES) {
        try {
          val db = database ?: throw IllegalStateException("database is not connected")

          transaction(db) { block() }
          try {
            onSuccess?.invoke()
          } catch (scEx: Exception) {
            Tools.plugin.logger.log(
                Level.WARNING,
                "[SL3] SQLite write $taskName onSuccess callback threw exception",
                scEx,
            )
          }
          return@submit
        } catch (e: Exception) {
          if (attempt == MAX_WRITE_RETRIES) {
            val message = e.message ?: e.javaClass.simpleName
            Tools.plugin.logger.log(
                Level.SEVERE,
                "[SL3] SQLite write $taskName failed permanently after $MAX_WRITE_RETRIES attempts: $message",
                e,
            )
            try {
              onFinalFailure?.invoke(e)
            } catch (cbEx: Exception) {
              Tools.plugin.logger.log(
                  Level.SEVERE,
                  "[SL3] SQLite write $taskName onFinalFailure callback threw exception",
                  cbEx,
              )
            }
          } else {
            val backoffMs = attempt * INITIAL_BACKOFF_MS
            val message = e.message ?: e.javaClass.simpleName
            Tools.plugin.logger.warning(
                "[SL3] SQLite write $taskName failed (attempt $attempt/$MAX_WRITE_RETRIES), retrying in ${backoffMs}ms: $message"
            )
            try {
              Thread.sleep(backoffMs)
            } catch (ie: InterruptedException) {
              Thread.currentThread().interrupt()
              Tools.plugin.logger.warning(
                  "[SL3] SQLite write $taskName interrupted during retry backoff"
              )
              try {
                onFinalFailure?.invoke(ie)
              } catch (cbEx: Exception) {
                Tools.plugin.logger.log(
                    Level.SEVERE,
                    "[SL3] SQLite write $taskName onFinalFailure callback threw exception",
                    cbEx,
                )
              }
              return@submit
            }
          }
        }
      }
    }
  }

  private fun <T> submitBlocking(taskName: String, block: () -> T): T? =
      executeBlocking(readExecutor, taskName, block)

  private fun <T> submitWriteBlocking(taskName: String, block: () -> T): T? =
      executeBlocking(writeExecutor, taskName, block)

  private fun <T> executeBlocking(
      service: ExecutorService?,
      taskName: String,
      block: () -> T,
  ): T? {
    if (service == null) {
      Tools.plugin.logger.warning(
          "[SL3] SQLite shadow $taskName skipped: database is not initialized"
      )
      return null
    }

    val future =
        service.submit(
            Callable<T?> {
              if (!awaitInit()) {
                Tools.plugin.logger.warning(
                    "[SL3] SQLite shadow $taskName skipped: database initialization timed out"
                )
                return@Callable null
              }
              try {
                val db =
                    database
                        ?: run {
                          Tools.plugin.logger.warning(
                              "[SL3] SQLite shadow $taskName skipped: database is not connected"
                          )
                          return@Callable null
                        }

                transaction(db) { block() }
              } catch (e: Exception) {
                loggerWarning(taskName, e)
                null
              }
            }
        )

    return try {
      future.get(BLOCKING_TIMEOUT_SECONDS, TimeUnit.SECONDS)
    } catch (e: TimeoutException) {
      Tools.plugin.logger.warning(
          "[SL3] SQLite shadow $taskName timed out after ${BLOCKING_TIMEOUT_SECONDS}s"
      )
      future.cancel(true)
      null
    } catch (e: Exception) {
      loggerWarning(taskName, e)
      null
    }
  }

  private fun rawConnection(): Connection? =
      TransactionManager.current().connection.connection as? Connection

  private fun countQuery(sql: String, bind: (java.sql.PreparedStatement) -> Unit = {}): Int {
    val db = rawConnection() ?: return 0
    return db.prepareStatement(sql).use { statement ->
      bind(statement)
      statement.executeQuery().use { results -> if (results.next()) results.getInt("count") else 0 }
    }
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
      val buildCount = countRows(db, "active_builds")
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
    Builds.upsert {
      it[id] = snapshot.id
      it[worldName] = snapshot.worldName
      it[locX] = snapshot.locX
      it[locY] = snapshot.locY
      it[locZ] = snapshot.locZ
      it[chunkX] = snapshot.chunkX
      it[chunkZ] = snapshot.chunkZ
      it[createdAt] = snapshot.createdAt
      it[ownerUuid] = snapshot.ownerUuid
      it[title] = snapshot.title
      it[checked] = snapshot.checked
      it[comment] = snapshot.comment
      it[discordTextId] = snapshot.discordTextId
      it[deletedAt] = snapshot.deletedAt
      it[deletedBy] = snapshot.deletedBy
      it[signMaterial] = snapshot.signMaterial
    }

    BuildLikes.deleteWhere { buildId eq snapshot.id }
    snapshot.likes
        .distinctBy { it.playerUuid }
        .forEach { like ->
          BuildLikes.insert {
            it[buildId] = snapshot.id
            it[playerUuid] = like.playerUuid
            it[likedAt] = like.likedAt
          }
        }
  }

  private fun upsertPublicityHistory(snapshot: PublicityHistorySnapshot) {
    PublicityHistoryRows.upsert {
      it[id] = snapshot.id
      it[timestamp] = snapshot.timestamp
      it[userUuid] = snapshot.userUuid
      it[slId] = snapshot.slId
    }
  }

  private fun SLData.toBuildSnapshot(): BuildSnapshot {
    return BuildSnapshot(
        id = id,
        worldName = worldName,
        locX = loc.x,
        locY = loc.y,
        locZ = loc.z,
        chunkX = loc.blockX shr 4,
        chunkZ = loc.blockZ shr 4,
        createdAt = time.toString(),
        ownerUuid = owner.toString(),
        title = title,
        checked = check,
        comment = comment,
        discordTextId = discordTextID,
        deletedAt = deletedAt?.toString(),
        deletedBy = deletedBy?.toString(),
        signMaterial = signMaterial,
        likes =
            likes.map { uuid ->
              LikeSnapshot(playerUuid = uuid.toString(), likedAt = likesWithTimestamp[uuid])
            },
    )
  }

  private fun BuildSnapshot.toSLData(): SLData {
    val world =
        Bukkit.getServer().getWorld(worldName)
            ?: run {
              Tools.plugin.logger.warning("ID:$id world $worldName does not exist!")
              null
            }
    val likeUuids = likes.map { UUID.fromString(it.playerUuid) }.toMutableList()
    val likesWithTimestamp =
        likes
            .mapNotNull { like -> like.likedAt?.let { UUID.fromString(like.playerUuid) to it } }
            .toMap()
            .toMutableMap()

    return SLData(
        id = id,
        loc = Location(world, locX, locY, locZ),
        time = LocalDateTime.parse(createdAt),
        owner = UUID.fromString(ownerUuid),
        title = title,
        likes = likeUuids,
        likesWithTimestamp = likesWithTimestamp,
        check = checked,
        comment = comment,
        worldName = worldName,
        discordTextID = discordTextId,
        deletedAt = deletedAt?.let { LocalDateTime.parse(it) },
        deletedBy = deletedBy?.let { UUID.fromString(it) },
        signMaterial = signMaterial,
    )
  }

  private fun PublicityData.toPublicityHistorySnapshot(): PublicityHistorySnapshot {
    return PublicityHistorySnapshot(
        id = dataID,
        timestamp = timeStamp.toString(),
        userUuid = user.toString(),
        slId = slid,
    )
  }

  private fun loggerWarning(taskName: String, e: Exception) {
    val message = e.message ?: e.javaClass.simpleName
    Tools.plugin.logger.warning("[SL3] SQLite shadow $taskName failed: $message")
  }
}
