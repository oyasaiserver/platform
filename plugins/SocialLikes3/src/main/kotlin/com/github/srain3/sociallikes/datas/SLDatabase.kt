package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.Tools
import java.io.File
import java.sql.Connection
import java.sql.Statement
import java.sql.Types
import java.time.DayOfWeek
import java.time.Instant
import java.time.LocalDate
import java.time.LocalDateTime
import java.time.ZoneId
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
import java.util.concurrent.atomic.AtomicBoolean
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
import org.sqlite.SQLiteErrorCode
import org.sqlite.SQLiteException

object SLDatabase {
  private const val MAX_WRITE_RETRIES = 5
  private const val INITIAL_BACKOFF_MS = 100L
  private const val BLOCKING_TIMEOUT_SECONDS = 30L
  private const val SLOW_WRITE_THRESHOLD_MS = 50L
  private const val SQLITE_PRIMARY_READY_KEY = "sqlite_primary_id_migration_complete"

  @Volatile private var database: Database? = null
  @Volatile private var initializationFailure: Throwable? = null
  private var initLatch = CountDownLatch(1)
  private var writeExecutor: ExecutorService? = null
  private var readExecutor: ExecutorService? = null
  private lateinit var dbFile: File
  private lateinit var plugin: JavaPlugin

  private val idMigrationCache = ConcurrentHashMap<Int, Int>()
  private val writeFailureRetries = ConcurrentHashMap<String, Int>()

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

  private object Players : Table("players") {
    val id = integer("id")
    val uuid = varchar("uuid", 36).uniqueIndex()
    val lastKnownName = text("last_known_name").nullable()
    val lastSeenAt = long("last_seen_at").nullable()

    override val primaryKey = PrimaryKey(id)
  }

  private object BuildLikes : Table("build_likes") {
    val buildId = integer("build_id").references(Builds.id, onDelete = ReferenceOption.CASCADE)
    val playerId = integer("player_id").references(Players.id)
    val likedAt = long("liked_at").nullable()

    override val primaryKey = PrimaryKey(buildId, playerId)
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

  private object Guidebooks : Table("guidebooks") {
    val id = integer("id").autoIncrement()
    val type = varchar("type", 16)
    val creatorUuid = varchar("creator_uuid", 36)
    val title = text("title")
    val description = text("description").default("")
    val published = bool("published")
    val createdAt = long("created_at")
    val announced = bool("announced").default(false)
    val editedSinceAnnounce = integer("edited_since_announce").default(0)

    override val primaryKey = PrimaryKey(id)
  }

  private object GuidebookEntries : Table("guidebook_entries") {
    val guidebookId =
        integer("guidebook_id").references(Guidebooks.id, onDelete = ReferenceOption.CASCADE)
    val buildId = integer("build_id").references(Builds.id, onDelete = ReferenceOption.CASCADE)
    val position = integer("position")

    override val primaryKey = PrimaryKey(guidebookId, buildId)
  }

  private object GuidebookCompletions : Table("guidebook_completions") {
    val guidebookId =
        integer("guidebook_id").references(Guidebooks.id, onDelete = ReferenceOption.CASCADE)
    val playerUuid = varchar("player_uuid", 36)
    val completedAt = long("completed_at")

    override val primaryKey = PrimaryKey(guidebookId, playerUuid)
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

  fun init(plugin: JavaPlugin) {
    this.plugin = plugin
    dbFile = File(plugin.dataFolder, "SocialLikesShadow.db")
    plugin.dataFolder.mkdirs()

    initLatch = CountDownLatch(1)
    initializationFailure = null

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
              PublicityHistoryRows,
              SlEventLog,
              IdMigrationMap,
              MigrationState,
              Guidebooks,
              GuidebookEntries,
              GuidebookCompletions,
          )
        }

        transaction(database) {
          rawConnection()?.let { conn ->
            migrateBuildsColumns(conn)
            migrateGuidebookColumns(conn)
            createPlayersAndBuildLikesSchema(conn)
          }
        }

        transaction(database) { rawConnection()?.let { conn -> createViews(conn) } }

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
        initializationFailure = e
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

  /** Blocks plugin enable until SQLite is initialized. */
  fun requireReady() {
    check(awaitInit()) { "Timed out while initializing the SocialLikes3 SQLite database" }
    initializationFailure?.let { failure ->
      throw IllegalStateException(
          "SocialLikes3 SQLite initialization failed: ${failure.message ?: failure.javaClass.simpleName}",
          failure,
      )
    }
    check(database != null) { "SocialLikes3 SQLite database is unavailable" }
  }

  fun createGuidebookBlocking(
      type: GuidebookType,
      creatorUuid: UUID,
      title: String,
  ): Int? =
      submitWriteBlocking("createGuidebook") {
        val connection = rawConnection() ?: return@submitWriteBlocking null
        connection
            .prepareStatement(
                "INSERT INTO guidebooks (type, creator_uuid, title, published, created_at) VALUES (?, ?, ?, 0, ?)",
                Statement.RETURN_GENERATED_KEYS,
            )
            .use { statement ->
              statement.setString(1, type.name)
              statement.setString(2, creatorUuid.toString())
              statement.setString(3, title)
              statement.setLong(4, System.currentTimeMillis())
              statement.executeUpdate()
              statement.generatedKeys.use { keys -> if (keys.next()) keys.getInt(1) else null }
            }
      }

  fun loadGuidebookBlocking(id: Int): GuidebookData? =
      submitBlocking("loadGuidebook") {
        rawConnection()?.let { connection ->
          connection
              .prepareStatement(
                  "SELECT id, type, creator_uuid, title, description, published, created_at FROM guidebooks WHERE id = ?"
              )
              .use { statement ->
                statement.setInt(1, id)
                statement.executeQuery().use { rows ->
                  if (rows.next()) rows.toGuidebookData() else null
                }
              }
        }
      }

  fun loadPublishedGuidebooksBlocking(): List<GuidebookData> =
      loadGuidebooksBlocking(
          "loadPublishedGuidebooks",
          """
          SELECT id, type, creator_uuid, title, description, published, created_at
          FROM guidebooks
          WHERE published = 1
          ORDER BY CASE type WHEN 'OFFICIAL' THEN 0 ELSE 1 END, created_at DESC, id DESC
          """
              .trimIndent(),
      )

  fun loadEditableGuidebooksBlocking(
      creatorUuid: UUID,
      canEditOfficial: Boolean,
      canEditAll: Boolean,
  ): List<GuidebookData> =
      loadGuidebooksBlocking(
          "loadEditableGuidebooks",
          """
          SELECT id, type, creator_uuid, title, description, published, created_at
          FROM guidebooks
          WHERE ? = 1 OR creator_uuid = ? OR (? = 1 AND type = 'OFFICIAL')
          ORDER BY CASE type WHEN 'OFFICIAL' THEN 0 ELSE 1 END, created_at DESC, id DESC
          """
              .trimIndent(),
      ) { statement ->
        statement.setInt(1, if (canEditAll) 1 else 0)
        statement.setString(2, creatorUuid.toString())
        statement.setInt(3, if (canEditOfficial) 1 else 0)
      }

  fun countPersonalGuidebooksBlocking(creatorUuid: UUID): Int =
      submitBlocking("countPersonalGuidebooks") {
        countQuery(
            "SELECT COUNT(*) AS count FROM guidebooks WHERE creator_uuid = ? AND type = 'PERSONAL'"
        ) {
          it.setString(1, creatorUuid.toString())
        }
      } ?: 0

  fun loadGuidebookEntriesBlocking(guidebookId: Int): List<Int> =
      submitBlocking("loadGuidebookEntries") {
            val ids = mutableListOf<Int>()
            rawConnection()
                ?.prepareStatement(
                    "SELECT build_id FROM guidebook_entries WHERE guidebook_id = ? ORDER BY position, build_id"
                )
                ?.use { statement ->
                  statement.setInt(1, guidebookId)
                  statement.executeQuery().use { rows ->
                    while (rows.next()) ids += rows.getInt("build_id")
                  }
                }
            ids
          }
          .orEmpty()

  fun addGuidebookEntryBlocking(guidebookId: Int, buildId: Int, limit: Int): Boolean =
      submitWriteBlocking("addGuidebookEntry") {
        val connection = rawConnection() ?: return@submitWriteBlocking false
        val entries = loadGuidebookEntryIds(connection, guidebookId)
        if (!GuidebookRules.canAddEntry(entries.size, limit, buildId in entries)) {
          return@submitWriteBlocking false
        }
        connection
            .prepareStatement(
                "INSERT INTO guidebook_entries (guidebook_id, build_id, position) VALUES (?, ?, ?)"
            )
            .use { statement ->
              statement.setInt(1, guidebookId)
              statement.setInt(2, buildId)
              statement.setInt(3, entries.size)
              statement.executeUpdate() == 1
            }
      } ?: false

  fun removeGuidebookEntryBlocking(guidebookId: Int, buildId: Int): Boolean =
      submitWriteBlocking("removeGuidebookEntry") {
        val connection = rawConnection() ?: return@submitWriteBlocking false
        val removed =
            connection
                .prepareStatement(
                    "DELETE FROM guidebook_entries WHERE guidebook_id = ? AND build_id = ?"
                )
                .use { statement ->
                  statement.setInt(1, guidebookId)
                  statement.setInt(2, buildId)
                  statement.executeUpdate() == 1
                }
        if (removed) normalizeGuidebookPositions(connection, guidebookId)
        removed
      } ?: false

  fun moveGuidebookEntryBlocking(
      guidebookId: Int,
      buildId: Int,
      offset: Int,
  ): Boolean =
      submitWriteBlocking("moveGuidebookEntry") {
        val connection = rawConnection() ?: return@submitWriteBlocking false
        val entries = loadGuidebookEntryIds(connection, guidebookId).toMutableList()
        val from = entries.indexOf(buildId)
        val to = from + offset
        if (from < 0 || to !in entries.indices) return@submitWriteBlocking false
        java.util.Collections.swap(entries, from, to)
        writeGuidebookPositions(connection, guidebookId, entries)
        true
      } ?: false

  fun setGuidebookPublishedBlocking(guidebookId: Int, published: Boolean): Boolean =
      submitWriteBlocking("setGuidebookPublished") {
        rawConnection()
            ?.prepareStatement("UPDATE guidebooks SET published = ? WHERE id = ?")
            ?.use { statement ->
              statement.setBoolean(1, published)
              statement.setInt(2, guidebookId)
              statement.executeUpdate() == 1
            } ?: false
      } ?: false

  fun setGuidebookDescriptionBlocking(guidebookId: Int, description: String): Boolean =
      submitWriteBlocking("setGuidebookDescription") {
        rawConnection()
            ?.prepareStatement("UPDATE guidebooks SET description = ? WHERE id = ?")
            ?.use { statement ->
              statement.setString(1, description)
              statement.setInt(2, guidebookId)
              statement.executeUpdate() == 1
            } ?: false
      } ?: false

  fun markGuidebookEditedBlocking(guidebookId: Int): Boolean =
      submitWriteBlocking("markGuidebookEdited") {
        rawConnection()
            ?.prepareStatement("UPDATE guidebooks SET edited_since_announce = 1 WHERE id = ?")
            ?.use { statement ->
              statement.setInt(1, guidebookId)
              statement.executeUpdate() == 1
            } ?: false
      } ?: false

  /** 公開時の告知種別を判定し、告知するなら announced=1, edited_since_announce=0 にする。 */
  fun takeGuidebookAnnouncementBlocking(guidebookId: Int): GuidebookAnnouncement =
      submitWriteBlocking("takeGuidebookAnnouncement") {
        val connection = rawConnection() ?: return@submitWriteBlocking GuidebookAnnouncement.NONE
        val announcement =
            connection
                .prepareStatement(
                    "SELECT announced, edited_since_announce FROM guidebooks WHERE id = ?"
                )
                .use { statement ->
                  statement.setInt(1, guidebookId)
                  statement.executeQuery().use { rows ->
                    if (!rows.next()) GuidebookAnnouncement.NONE
                    else
                        GuidebookRules.announcement(
                            rows.getBoolean("announced"),
                            rows.getInt("edited_since_announce") != 0,
                        )
                  }
                }
        if (announcement != GuidebookAnnouncement.NONE) {
          connection
              .prepareStatement(
                  "UPDATE guidebooks SET announced = 1, edited_since_announce = 0 WHERE id = ?"
              )
              .use { statement ->
                statement.setInt(1, guidebookId)
                statement.executeUpdate()
              }
        }
        announcement
      } ?: GuidebookAnnouncement.NONE

  fun deleteGuidebookBlocking(guidebookId: Int): Boolean =
      submitWriteBlocking("deleteGuidebook") {
        rawConnection()?.prepareStatement("DELETE FROM guidebooks WHERE id = ?")?.use { statement ->
          statement.setInt(1, guidebookId)
          statement.executeUpdate() == 1
        } ?: false
      } ?: false

  fun loadPublishedGuidebooksContainingBuildBlocking(buildId: Int): List<GuidebookData> =
      loadGuidebooksBlocking(
          "loadGuidebooksContainingBuild",
          """
          SELECT g.id, g.type, g.creator_uuid, g.title, g.description, g.published, g.created_at
          FROM guidebooks g
          JOIN guidebook_entries e ON e.guidebook_id = g.id
          WHERE g.published = 1 AND e.build_id = ?
          ORDER BY g.id
          """
              .trimIndent(),
      ) {
        it.setInt(1, buildId)
      }

  fun recordGuidebookCompletion(
      guidebookId: Int,
      playerUuid: UUID,
      onRecorded: (Boolean) -> Unit,
  ) {
    val inserted = AtomicBoolean(false)
    submitWrite(
        "recordGuidebookCompletion",
        onSuccess = { onRecorded(inserted.get()) },
    ) {
      inserted.set(
          rawConnection()
              ?.prepareStatement(
                  "INSERT OR IGNORE INTO guidebook_completions (guidebook_id, player_uuid, completed_at) VALUES (?, ?, ?)"
              )
              ?.use { statement ->
                statement.setInt(1, guidebookId)
                statement.setString(2, playerUuid.toString())
                statement.setLong(3, System.currentTimeMillis())
                statement.executeUpdate() == 1
              } ?: false
      )
    }
  }

  private fun loadGuidebooksBlocking(
      taskName: String,
      sql: String,
      bind: (java.sql.PreparedStatement) -> Unit = {},
  ): List<GuidebookData> =
      submitBlocking(taskName) {
            val guidebooks = mutableListOf<GuidebookData>()
            rawConnection()?.prepareStatement(sql)?.use { statement ->
              bind(statement)
              statement.executeQuery().use { rows ->
                while (rows.next()) guidebooks += rows.toGuidebookData()
              }
            }
            guidebooks
          }
          .orEmpty()

  private fun java.sql.ResultSet.toGuidebookData(): GuidebookData =
      GuidebookData(
          id = getInt("id"),
          type = GuidebookType.valueOf(getString("type")),
          creatorUuid = UUID.fromString(getString("creator_uuid")),
          title = getString("title"),
          description = getString("description"),
          published = getBoolean("published"),
          createdAt = getLong("created_at"),
      )

  private fun loadGuidebookEntryIds(connection: Connection, guidebookId: Int): List<Int> {
    val entries = mutableListOf<Int>()
    connection
        .prepareStatement(
            "SELECT build_id FROM guidebook_entries WHERE guidebook_id = ? ORDER BY position, build_id"
        )
        .use { statement ->
          statement.setInt(1, guidebookId)
          statement.executeQuery().use { rows ->
            while (rows.next()) entries += rows.getInt("build_id")
          }
        }
    return entries
  }

  private fun normalizeGuidebookPositions(connection: Connection, guidebookId: Int) {
    writeGuidebookPositions(connection, guidebookId, loadGuidebookEntryIds(connection, guidebookId))
  }

  private fun writeGuidebookPositions(
      connection: Connection,
      guidebookId: Int,
      entries: List<Int>,
  ) {
    connection
        .prepareStatement(
            "UPDATE guidebook_entries SET position = ? WHERE guidebook_id = ? AND build_id = ?"
        )
        .use { statement ->
          entries.forEachIndexed { position, buildId ->
            statement.setInt(1, position)
            statement.setInt(2, guidebookId)
            statement.setInt(3, buildId)
            statement.addBatch()
          }
          statement.executeBatch()
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

  internal fun createPlayersAndBuildLikesSchema(conn: Connection) {
    conn.createStatement().use { statement ->
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS players (
            id INTEGER PRIMARY KEY,
            uuid VARCHAR(36) NOT NULL UNIQUE,
            last_known_name TEXT NULL,
            last_seen_at BIGINT NULL
          )
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS build_likes (
            build_id INT NOT NULL,
            player_id INT NOT NULL REFERENCES players(id),
            liked_at BIGINT NULL,
            PRIMARY KEY(build_id, player_id),
            FOREIGN KEY(build_id) REFERENCES builds(id) ON DELETE CASCADE ON UPDATE RESTRICT
          ) WITHOUT ROWID
          """
              .trimIndent()
      )
      statement.execute(
          "CREATE INDEX IF NOT EXISTS idx_build_likes_player_liked_at ON build_likes(player_id, liked_at)"
      )
      statement.execute(
          "CREATE INDEX IF NOT EXISTS idx_build_likes_liked_at ON build_likes(liked_at) WHERE liked_at IS NOT NULL"
      )
    }
  }

  private fun migrateGuidebookColumns(conn: Connection) {
    val columns = mutableSetOf<String>()
    conn.createStatement().use { stmt ->
      stmt.executeQuery("PRAGMA table_info(guidebooks)").use { rows ->
        while (rows.next()) columns += rows.getString("name").lowercase(Locale.ROOT)
      }
    }
    if ("description" !in columns) {
      conn.createStatement().use {
        it.execute("ALTER TABLE guidebooks ADD COLUMN description TEXT NOT NULL DEFAULT ''")
      }
    }
    if ("announced" !in columns) {
      conn.createStatement().use {
        it.execute("ALTER TABLE guidebooks ADD COLUMN announced BOOLEAN NOT NULL DEFAULT 0")
      }
    }
    if ("edited_since_announce" !in columns) {
      conn.createStatement().use {
        it.execute("ALTER TABLE guidebooks ADD COLUMN edited_since_announce INT NOT NULL DEFAULT 0")
      }
    }
  }

  private fun createViews(conn: Connection) {
    conn.createStatement().use { statement ->
      statement.execute("DROP VIEW IF EXISTS active_builds")
      statement.execute(
          "CREATE VIEW active_builds AS SELECT * FROM builds WHERE deleted_at IS NULL"
      )
      statement.execute("DROP VIEW IF EXISTS build_likes_with_uuid")
      statement.execute(
          """
          CREATE VIEW build_likes_with_uuid AS
          SELECT bl.build_id, bl.player_id, p.uuid AS player_uuid, bl.liked_at
          FROM build_likes bl
          JOIN players p ON p.id = bl.player_id
          """
              .trimIndent()
      )
    }
  }

  private fun createPerformanceIndexes(conn: Connection) {
    val indexes =
        listOf(
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
            "idx_guidebook_entries_build_id" to
                "CREATE INDEX IF NOT EXISTS idx_guidebook_entries_build_id ON guidebook_entries(build_id)",
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
      initializationFailure = null
    }
  }

  /** Records a name observed while the player is online, without blocking the server thread. */
  fun upsertPlayer(uuid: UUID, name: String) {
    upsertPlayerNames("upsertPlayer", listOf(uuid to name))
  }

  private fun upsertPlayerNames(taskName: String, entries: Collection<Pair<UUID, String>>) {
    val normalizedEntries =
        entries.mapNotNull { (uuid, name) ->
          name.trim().takeIf { it.isNotEmpty() }?.let { uuid to it }
        }
    if (normalizedEntries.isEmpty()) return
    normalizedEntries.forEach { (uuid, name) -> playerNameCache[uuid.toString()] = name }
    val seenAt = System.currentTimeMillis()

    submit(taskName) {
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
            normalizedEntries.forEach { (uuid, name) ->
              statement.setString(1, uuid.toString())
              statement.setString(2, name)
              statement.setLong(3, seenAt)
              statement.addBatch()
            }
            statement.executeBatch()
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
    val deletedAtStr = BuildTimestamps.toStored(deletedAt)
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
    softDeleteBuild(id, null, LocalDateTime.now(BuildTimestamps.ZONE_JST))
  }

  internal fun clearBuildWriteFailures(id: Int) {
    writeFailureRetries.remove("saveBuild[$id]")
    writeFailureRetries.remove("softDeleteBuild[$id]")
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
          val likesByBuildId = mutableMapOf<Int, MutableList<LikeSnapshot>>()
          rawConnection()
              ?.prepareStatement(
                  "SELECT build_id, player_uuid, liked_at FROM build_likes_with_uuid"
              )
              ?.use { statement ->
                statement.executeQuery().use { rows ->
                  while (rows.next()) {
                    likesByBuildId
                        .getOrPut(rows.getInt("build_id"), ::mutableListOf)
                        .add(
                            LikeSnapshot(
                                playerUuid = rows.getString("player_uuid"),
                                likedAt =
                                    rows.getLong("liked_at").let {
                                      if (rows.wasNull()) null else it
                                    },
                            )
                        )
                  }
                }
              }

          Builds.selectAll()
              .where { Builds.deletedAt.isNull() }
              .orderBy(Builds.id)
              .mapNotNull { row ->
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
      occurredAt: LocalDateTime = LocalDateTime.now(BuildTimestamps.ZONE_JST),
  ) {
    val occurredAtStr = BuildTimestamps.toStored(occurredAt)
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

  fun getCachedPlayerName(uuid: String): String? = playerNameCache[uuid]

  /**
   * Resolves the supplied UUIDs with one query, then falls back to Bukkit's offline-player cache.
   */
  fun loadPlayerNamesBlocking(
      uuids: List<String>,
      timingName: String? = null,
  ): Map<String, String> {
    val startedAt = System.nanoTime()
    val normalizedUuids = uuids.filter { it.isNotBlank() }.distinct()
    if (normalizedUuids.isEmpty()) {
      if (timingName != null) {
        Tools.plugin.logger.info("[SL3] timing $timingName=0ms uuids=0 cached=0 db=0 bukkit=0")
      }
      return emptyMap()
    }

    val uncached = normalizedUuids.filter { !playerNameCache.containsKey(it) }
    var databaseCount = 0
    var bukkitCount = 0
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
                    if (u != null && !n.isNullOrBlank()) {
                      playerNameCache[u] = n
                      databaseCount++
                    }
                  }
                }
              }
        }
      }

      val resolvedFromOfflineCache =
          uncached.mapNotNull { uuidText ->
            if (playerNameCache.containsKey(uuidText)) return@mapNotNull null
            val uuid =
                runCatching { UUID.fromString(uuidText) }.getOrNull() ?: return@mapNotNull null
            bukkitCount++
            val name =
                runCatching { Bukkit.getPlayer(uuid)?.name ?: Bukkit.getOfflinePlayer(uuid).name }
                    .getOrNull()
                    ?.trim()
                    ?.takeIf { it.isNotEmpty() } ?: return@mapNotNull null
            playerNameCache[uuidText] = name
            uuid to name
          }
      upsertPlayerNames("backfillPlayerNames", resolvedFromOfflineCache)
    }
    val result = normalizedUuids.mapNotNull { u -> playerNameCache[u]?.let { n -> u to n } }.toMap()
    if (timingName != null) {
      val elapsedMs = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedAt)
      Tools.plugin.logger.info(
          "[SL3] timing $timingName=${elapsedMs}ms uuids=${normalizedUuids.size} " +
              "cached=${normalizedUuids.size - uncached.size} db=$databaseCount bukkit=$bukkitCount"
      )
    }
    return result
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

  /** The most established own chunk: build count first, then received likes as a tie-breaker. */
  fun loadHomeGroundBlocking(playerUuid: String): HomeGround? {
    return submitBlocking("loadHomeGround") {
      rawConnection()
          ?.prepareStatement(
              """
              SELECT b.world_name, b.chunk_x, b.chunk_z,
                     COUNT(DISTINCT b.id) AS build_count,
                     COUNT(bl.player_id) AS received_likes
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
                         COUNT(bl.player_id) AS received_likes
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
              LEFT JOIN build_likes_with_uuid mine ON mine.build_id = b.id AND mine.player_uuid = ?
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
    val queuedAt = System.nanoTime()
    val service =
        writeExecutor
            ?: run {
              val ex = IllegalStateException("database is not initialized")
              handleFinalWriteFailure(
                  taskName,
                  ex,
                  "[SL3] SQLite write $taskName skipped: database is not initialized",
                  onFinalFailure,
              )
              return
            }

    service.submit {
      val waitMs = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - queuedAt)
      if (!awaitInit()) {
        val ex = TimeoutException("database initialization timed out")
        handleFinalWriteFailure(
            taskName,
            ex,
            "[SL3] SQLite write $taskName skipped: database initialization timed out",
            onFinalFailure,
        )
        return@submit
      }
      for (attempt in 1..MAX_WRITE_RETRIES) {
        val startedAt = System.nanoTime()
        try {
          val db = database ?: throw IllegalStateException("database is not connected")

          transaction(db) { block() }
          warnIfSlowWrite(taskName, waitMs, startedAt, attempt)
          writeFailureRetries.remove(taskName)
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
          warnIfSlowWrite(taskName, waitMs, startedAt, attempt)
          val isConstraintViolation =
              generateSequence<Throwable>(e) { it.cause }
                  .any { cause ->
                    cause is SQLiteException &&
                        (cause.resultCode.code and 0xFF) == SQLiteErrorCode.SQLITE_CONSTRAINT.code
                  }
          if (isConstraintViolation || attempt == MAX_WRITE_RETRIES) {
            val message = e.message ?: e.javaClass.simpleName
            handleFinalWriteFailure(
                taskName,
                e,
                "[SL3] SQLite write $taskName failed permanently after $attempt attempt(s): $message",
                onFinalFailure,
            )
            return@submit
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
              handleFinalWriteFailure(
                  taskName,
                  ie,
                  "[SL3] SQLite write $taskName interrupted during retry backoff",
                  onFinalFailure,
              )
              return@submit
            }
          }
        }
      }
    }
  }

  private fun handleFinalWriteFailure(
      taskName: String,
      exception: Exception,
      message: String,
      onFinalFailure: ((Exception) -> Unit)?,
  ) {
    val attempts = writeFailureRetries.merge(taskName, 1, Int::plus) ?: 1
    if (shouldLogRepeatedFailure(attempts)) {
      Tools.plugin.logger.log(Level.SEVERE, message, exception)
    }
    try {
      onFinalFailure?.invoke(exception)
    } catch (cbEx: Exception) {
      Tools.plugin.logger.log(
          Level.SEVERE,
          "[SL3] SQLite write $taskName onFinalFailure callback threw exception",
          cbEx,
      )
    }
  }

  private fun warnIfSlowWrite(taskName: String, waitMs: Long, startedAt: Long, attempt: Int) {
    val execMs = TimeUnit.NANOSECONDS.toMillis(System.nanoTime() - startedAt)
    if (waitMs + execMs > SLOW_WRITE_THRESHOLD_MS) {
      Tools.plugin.logger.warning(
          "[SL3] Slow SQLite write: taskName=$taskName wait_ms=$waitMs exec_ms=$execMs attempt=$attempt"
      )
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
    // A Phase 1 mirror sync must not turn a pre-existing legacy value into epoch milliseconds.
    // Creation time is immutable, so preserve the row's stored value when it already exists.
    val toPersist =
        Builds.selectAll()
            .where { Builds.id eq snapshot.id }
            .firstOrNull()
            ?.get(Builds.createdAt)
            ?.let { snapshot.copy(createdAt = it) } ?: snapshot
    Builds.upsert {
      it[id] = toPersist.id
      it[worldName] = toPersist.worldName
      it[locX] = toPersist.locX
      it[locY] = toPersist.locY
      it[locZ] = toPersist.locZ
      it[chunkX] = toPersist.chunkX
      it[chunkZ] = toPersist.chunkZ
      it[createdAt] = toPersist.createdAt
      it[ownerUuid] = toPersist.ownerUuid
      it[title] = toPersist.title
      it[checked] = toPersist.checked
      it[comment] = toPersist.comment
      it[discordTextId] = toPersist.discordTextId
      it[deletedAt] = toPersist.deletedAt
      it[deletedBy] = toPersist.deletedBy
      it[signMaterial] = toPersist.signMaterial
    }

    syncBuildLikes(
        checkNotNull(rawConnection()) { "SQLite connection is unavailable" },
        toPersist.id,
        toPersist.likes.map { it.playerUuid to it.likedAt },
    )
  }

  internal fun syncBuildLikes(
      connection: Connection,
      buildId: Int,
      likes: List<Pair<String, Long?>>,
  ) {
    val desired = likes.distinctBy { it.first }.toMap()
    val existing = mutableMapOf<String, Pair<Int, Long?>>()
    connection
        .prepareStatement(
            "SELECT player_id, player_uuid, liked_at FROM build_likes_with_uuid WHERE build_id = ?"
        )
        .use { statement ->
          statement.setInt(1, buildId)
          statement.executeQuery().use { rows ->
            while (rows.next()) {
              existing[rows.getString("player_uuid")] =
                  rows.getInt("player_id") to
                      rows.getLong("liked_at").let { if (rows.wasNull()) null else it }
            }
          }
        }

    val deletions = existing.filterKeys { it !in desired }
    val additions = desired.filterKeys { it !in existing }
    val updates =
        desired.filter { (uuid, likedAt) -> uuid in existing && existing[uuid]?.second != likedAt }

    connection
        .prepareStatement("DELETE FROM build_likes WHERE build_id = ? AND player_id = ?")
        .use { statement ->
          deletions.values.forEach { (playerId) ->
            statement.setInt(1, buildId)
            statement.setInt(2, playerId)
            statement.addBatch()
          }
          statement.executeBatch()
        }

    connection
        .prepareStatement(
            "UPDATE build_likes SET liked_at = ? WHERE build_id = ? AND player_id = ?"
        )
        .use { statement ->
          updates.forEach { (uuid, likedAt) ->
            statement.setNullableLong(1, likedAt)
            statement.setInt(2, buildId)
            statement.setInt(3, checkNotNull(existing[uuid]).first)
            statement.addBatch()
          }
          statement.executeBatch()
        }

    val playerIds = ensurePlayerIds(connection, additions.keys.toList())
    connection
        .prepareStatement("INSERT INTO build_likes(build_id, player_id, liked_at) VALUES (?, ?, ?)")
        .use { statement ->
          additions.forEach { (uuid, likedAt) ->
            statement.setInt(1, buildId)
            statement.setInt(2, checkNotNull(playerIds[uuid]))
            statement.setNullableLong(3, likedAt)
            statement.addBatch()
          }
          statement.executeBatch()
        }
  }

  private fun java.sql.PreparedStatement.setNullableLong(index: Int, value: Long?) {
    if (value == null) setNull(index, Types.BIGINT) else setLong(index, value)
  }

  private fun ensurePlayerIds(connection: Connection, uuids: List<String>): Map<String, Int> {
    if (uuids.isEmpty()) return emptyMap()
    connection
        .prepareStatement("INSERT INTO players(uuid) VALUES (?) ON CONFLICT(uuid) DO NOTHING")
        .use { statement ->
          uuids.forEach { uuid ->
            statement.setString(1, uuid)
            statement.addBatch()
          }
          statement.executeBatch()
        }

    return buildMap {
      uuids.chunked(900).forEach { chunk ->
        val placeholders = chunk.joinToString(",") { "?" }
        connection
            .prepareStatement("SELECT id, uuid FROM players WHERE uuid IN ($placeholders)")
            .use { statement ->
              chunk.forEachIndexed { index, uuid -> statement.setString(index + 1, uuid) }
              statement.executeQuery().use { rows ->
                while (rows.next()) put(rows.getString("uuid"), rows.getInt("id"))
              }
            }
      }
    }
  }

  private fun upsertPublicityHistory(snapshot: PublicityHistorySnapshot) {
    // As with builds, syncs may update metadata but must not rewrite legacy promotion timestamps.
    val toPersist =
        PublicityHistoryRows.selectAll()
            .where { PublicityHistoryRows.id eq snapshot.id }
            .firstOrNull()
            ?.get(PublicityHistoryRows.timestamp)
            ?.let { snapshot.copy(timestamp = it) } ?: snapshot
    PublicityHistoryRows.upsert {
      it[id] = toPersist.id
      it[timestamp] = toPersist.timestamp
      it[userUuid] = toPersist.userUuid
      it[slId] = toPersist.slId
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
        createdAt = BuildTimestamps.toStored(time),
        ownerUuid = owner.toString(),
        title = title,
        checked = check,
        comment = comment,
        discordTextId = discordTextID,
        deletedAt = deletedAt?.let(BuildTimestamps::toStored),
        deletedBy = deletedBy?.toString(),
        signMaterial = signMaterial,
        likes =
            likes.map { uuid ->
              LikeSnapshot(playerUuid = uuid.toString(), likedAt = likesWithTimestamp[uuid])
            },
    )
  }

  private fun BuildSnapshot.toSLData(): SLData? {
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
        time = BuildTimestamps.parseStored(createdAt) ?: return null,
        owner = UUID.fromString(ownerUuid),
        title = title,
        likes = likeUuids,
        likesWithTimestamp = likesWithTimestamp,
        check = checked,
        comment = comment,
        worldName = worldName,
        discordTextID = discordTextId,
        deletedAt = deletedAt?.let(BuildTimestamps::parseStored),
        deletedBy = deletedBy?.let { UUID.fromString(it) },
        signMaterial = signMaterial,
    )
  }

  private fun PublicityData.toPublicityHistorySnapshot(): PublicityHistorySnapshot {
    return PublicityHistorySnapshot(
        id = dataID,
        timestamp = BuildTimestamps.toStored(timeStamp),
        userUuid = user.toString(),
        slId = slid,
    )
  }

  private fun loggerWarning(taskName: String, e: Exception) {
    val message = e.message ?: e.javaClass.simpleName
    Tools.plugin.logger.warning("[SL3] SQLite shadow $taskName failed: $message")
  }
}
