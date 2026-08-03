package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.Tools
import java.io.File
import java.time.LocalDateTime
import java.util.UUID
import java.util.concurrent.Callable
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.plugin.java.JavaPlugin
import org.jetbrains.exposed.v1.core.ReferenceOption
import org.jetbrains.exposed.v1.core.Table
import org.jetbrains.exposed.v1.core.eq
import org.jetbrains.exposed.v1.core.notInList
import org.jetbrains.exposed.v1.jdbc.Database
import org.jetbrains.exposed.v1.jdbc.SchemaUtils
import org.jetbrains.exposed.v1.jdbc.deleteAll
import org.jetbrains.exposed.v1.jdbc.deleteWhere
import org.jetbrains.exposed.v1.jdbc.insert
import org.jetbrains.exposed.v1.jdbc.selectAll
import org.jetbrains.exposed.v1.jdbc.transactions.TransactionManager
import org.jetbrains.exposed.v1.jdbc.transactions.transaction
import org.jetbrains.exposed.v1.jdbc.upsert

object SLDatabase {
  private var database: Database? = null
  private var executor: ExecutorService? = null
  private lateinit var dbFile: File
  private lateinit var plugin: JavaPlugin

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

    override val primaryKey = PrimaryKey(id)
  }

  private object BuildLikes : Table("build_likes") {
    val buildId = integer("build_id").references(Builds.id, onDelete = ReferenceOption.CASCADE)
    val playerUuid = varchar("player_uuid", 36)
    val likedAt = long("liked_at").nullable()

    override val primaryKey = PrimaryKey(buildId, playerUuid)
  }

  private object PublicityHistoryRows : Table("publicity_history") {
    val id = integer("id").autoIncrement()
    val timestamp = varchar("timestamp", 64)
    val userUuid = varchar("user_uuid", 36)
    val slId = integer("sl_id")

    override val primaryKey = PrimaryKey(id)
  }

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

    executor =
        Executors.newSingleThreadExecutor { runnable ->
          Thread(runnable, "SL3-SQLite-Shadow").apply { isDaemon = true }
        }

    executor?.submit {
      try {
        val dbUrl =
            "jdbc:sqlite:${dbFile.absolutePath}" +
                "?journal_mode=WAL" +
                "&busy_timeout=5000" +
                "&foreign_keys=ON" +
                "&synchronous=NORMAL"

        database = Database.connect(dbUrl, driver = "org.sqlite.JDBC")

        transaction(database) { SchemaUtils.create(Builds, BuildLikes, PublicityHistoryRows) }
      } catch (e: Exception) {
        loggerWarning("init", e)
      }
    }
  }

  fun close() {
    val service = executor ?: return
    val db = database

    try {
      service
          .submit {
            try {
              db?.let { TransactionManager.closeAndUnregister(it) }
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
      database = null
    }
  }

  fun saveBuild(data: SLData) {
    val snapshot = data.toBuildSnapshot()
    submit("saveBuild") { upsertBuild(snapshot) }
  }

  fun deleteBuild(id: Int) {
    submit("deleteBuild") { Builds.deleteWhere { Builds.id eq id } }
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

          Builds.selectAll().orderBy(Builds.id).map { row ->
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
                    likes = likesByBuildId[row[Builds.id]].orEmpty(),
                )
                .toSLData()
          }
        }
        .orEmpty()
  }

  fun savePublicityHistory(data: PublicityData) {
    val snapshot = data.toPublicityHistorySnapshot()
    submit("savePublicityHistory") { upsertPublicityHistory(snapshot) }
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
      future.get()
    } catch (e: Exception) {
      loggerWarning(taskName, e)
      null
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
        id,
        Location(world, locX, locY, locZ),
        LocalDateTime.parse(createdAt),
        UUID.fromString(ownerUuid),
        title,
        likeUuids,
        likesWithTimestamp,
        checked,
        comment,
        worldName,
        discordTextId,
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
