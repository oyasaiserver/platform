package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.CustomYamlFile
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.SLRankUp
import com.github.srain3.sociallikes.gui.UserBuild
import com.google.gson.Gson
import java.io.File
import java.lang.Exception
import java.time.LocalDateTime
import java.util.*
import kotlin.math.floor
import kotlin.math.max
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.block.Biome
import org.bukkit.block.BlockFace
import org.bukkit.configuration.ConfigurationSection
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object Data {

  private val gson = Gson()

  /** [SLData]をSQLite(正データ)へ保存し、Yamlへ非同期バックアップを行いつつCacheに反映する */
  fun save(data: SLData) {
    // 1. SQLite へ同期保存 (正データ)
    val saved = SLDatabase.saveBuildBlocking(data)
    if (!saved) {
      Tools.plugin.logger.severe("[SL3] Failed to save build ID:${data.id} to SQLite shadow DB!")
    }

    // 2. YAML へ非同期・ベストエフォート保存
    saveYamlAsync(data)

    // 3. ソフトデリート済みの場合は現役キャッシュから除外
    if (data.deletedAt != null) {
      removeFromCache(data)
      return
    }

    // 4. Cacheへ保存する
    addToCacheInMemory(data)

    SLRankUp.plusBuildTask(data.owner)
  }

  /** IDから[SLData]を取得する、ない場合nullを返す (負IDはマイグレーションマップ経由で解決) */
  fun getSLData(id: Int): SLData? {
    val resolvedId = if (id < 0) SLDatabase.resolveMigratedId(id) else id
    val dirName = getDirName(resolvedId)
    val list = dataMap[dirName] ?: return null
    return list.firstOrNull { it.id == resolvedId && it.deletedAt == null }
  }

  /** [SLData]を元にデータをソフトデリートする */
  fun delID(slData: SLData, deletedBy: UUID? = null) {
    val beforeJson =
        gson.toJson(
            mapOf(
                "id" to slData.id,
                "title" to slData.title,
                "world" to slData.worldName,
                "x" to slData.loc.x,
                "y" to slData.loc.y,
                "z" to slData.loc.z,
            )
        )

    val now = LocalDateTime.now()
    slData.deletedAt = now
    slData.deletedBy = deletedBy

    AllBuild.deleteSLSignData(slData)
    UserBuild.deleteSLSignData(slData)

    removeFromCache(slData)

    // SQLite側をソフトデリート
    SLDatabase.softDeleteBuildBlocking(slData.id, deletedBy, now)

    // イベントログを記録
    val afterJson =
        gson.toJson(
            mapOf(
                "deleted_at" to now.toString(),
                "deleted_by" to deletedBy?.toString(),
            )
        )
    SLDatabase.recordEvent(slData.id, "deleted", deletedBy, beforeJson, afterJson, now)

    // YAMLへ非同期反映 (削除フラグを立てて保存)
    saveYamlAsync(slData)

    SLRankUp.minusBuildTask(slData.owner)
  }

  /** [SLData]を50区切り別のフォルダ名と紐付けて保存しているCache */
  private val dataMap = mutableMapOf<String, MutableList<SLData>>()

  /** SLDataをすべて返す (現役のみ) */
  fun getSLDataAll(): MutableSet<SLData> {
    val set = mutableSetOf<SLData>()
    dataMap.forEach { (_, list) -> set.addAll(list.filter { it.deletedAt == null }) }
    return set
  }

  /** SLDataをすべて返す (ソフトデリート済みを含む) */
  fun getSLDataAllIncludingDeleted(): MutableSet<SLData> {
    val set = mutableSetOf<SLData>()
    dataMap.forEach { (_, list) -> set.addAll(list) }
    return set
  }

  /** データを元に制作者ごとのLike数を保存 */
  val userLikesInt = mutableMapOf<UUID, Int>()

  /** userLikes数を変更する */
  fun changeUserLikesInt(owner: UUID, changeInt: Int) {
    userLikesInt[owner] = (userLikesInt[owner] ?: 0) + changeInt
  }

  /** 建築総数を返す */
  fun getBuildingInt(): Int {
    var i = 0
    dataMap.values.forEach { list -> i += list.count { it.deletedAt == null } }
    return i
  }

  /** ファイルで存在する一番大きいID */
  var lastID = 0

  /** 次の新規IDを発行する (ID再利用は廃止、常に最大ID+1) */
  fun getNextID(): Int {
    synchronized(this) {
      lastID += 1
      return lastID
    }
  }

  /** ファイルのロードが終わっていたらtrue */
  var loading = true

  /** ファイルからCacheを作成する(別スレッドにして鯖のロードを止めないようにしてる) */
  fun loadFileToDataCache() {
    dataMap.clear()
    userLikesInt.clear()
    lastID = 0
    slNearData.clear()
    // SocialLikes3/data/ココのディレクトリ全てのlist
    val readSource = getReadSource()
    val dir = if (readSource == ReadSource.YAML) Tools.getFolderToFolder("data") ?: return else null
    Bukkit.getLogger().info("[SL3] ${readSource.logName} Loading...")
    Thread(
            {
              val ids = mutableSetOf<Int>()
              loading = false
              when (readSource) {
                ReadSource.YAML -> {
                  dir?.forEach dir@{
                    // SocialLikes3/data/???-???(dir)/ココのファイル全てのlist
                    val files = Tools.getFolderToFile(it) ?: return@dir
                    files.forEach file@{ file ->
                      // ID.ymlを読み込む
                      val yml = CustomYamlFile(file)
                      // ファイルから値を取り出す
                      val id = yml.getInt("id", -1)
                      val worldStr = yml.getString("loc.world") ?: return@file
                      val x = yml.getDouble("loc.x")
                      val y = yml.getDouble("loc.y")
                      val z = yml.getDouble("loc.z")
                      val time = LocalDateTime.parse(yml.getString("time"))
                      val owner = UUID.fromString(yml.getString("owner"))
                      val title = yml.getString("title") ?: return@file
                      val likesStr = yml.getStringList("likes")
                      val check = yml.getBoolean("check", false)
                      val comment = yml.getString("comment") ?: "No comment"
                      val textID = yml.getLong("DiscordTextID", 0)

                      val deleted = yml.getBoolean("deleted", false)
                      val deletedAtStr = yml.getString("deleted_at")
                      val deletedAt =
                          deletedAtStr?.let { s ->
                            try {
                              LocalDateTime.parse(s)
                            } catch (_: Exception) {
                              null
                            }
                          } ?: if (deleted) time else null
                      val deletedByStr = yml.getString("deleted_by")
                      val deletedBy =
                          deletedByStr?.let { s ->
                            try {
                              UUID.fromString(s)
                            } catch (_: Exception) {
                              null
                            }
                          }
                      val signMaterial = yml.getString("sign_material")

                      if (id > 0) {
                        lastID = max(lastID, id)
                        ids.add(id)
                      }

                      // locationへ変換
                      val world =
                          Bukkit.getServer().getWorld(worldStr)
                              ?: run {
                                Tools.plugin.logger.warning(
                                    "ID:$id world $worldStr does not exist!"
                                )
                                null
                              }
                      val loc = Location(world, x, y, z)

                      // likesのStringListからUUIDListへ変換
                      val likes: MutableList<UUID> = mutableListOf()
                      likesStr.forEach { uuidStr -> likes.add(UUID.fromString(uuidStr)) }

                      // likesWithTimestampのロード
                      val likesWithTimestamp = loadLikesWithTimestamp(yml)

                      addToCache(
                          SLData(
                              id = id,
                              loc = loc,
                              time = time,
                              owner = owner,
                              title = title,
                              likes = likes,
                              likesWithTimestamp = likesWithTimestamp,
                              check = check,
                              comment = comment,
                              worldName = worldStr,
                              discordTextID = textID,
                              deletedAt = deletedAt,
                              deletedBy = deletedBy,
                              signMaterial = signMaterial,
                          ),
                          it.name,
                          ids,
                      )
                    }
                  }
                }
                ReadSource.SQLITE -> {
                  SLDatabase.loadBuildsBlocking().forEach { slData ->
                    addToCache(slData, getDirName(slData.id), ids)
                  }
                  SLDatabase.getMaxBuildIdBlocking()?.let { maxId -> lastID = max(lastID, maxId) }
                }
              }

              try {
                AllBuild.createItem(dataMap.toMap())
              } catch (_: Exception) {
                Tools.plugin.logger.severe("AllBuild.createItemにエラー")
              }

              if (lastID < 0) {
                lastID = 0
              }

              try {
                slNearLoadTask()
              } catch (e: Exception) {
                Tools.plugin.logger.severe("slNearLoadTaskにエラー: ${e.toString()}")
              }

              try {
                SLRankUp.createDataTask()
              } catch (e: Exception) {
                Tools.plugin.logger.severe("SLRankUp.createDataTaskにエラー: ${e.toString()}")
              }

              if (readSource == ReadSource.YAML) {
                try {
                  SLDatabase.syncBuilds(getSLDataAllIncludingDeleted())
                } catch (e: Exception) {
                  Tools.plugin.logger.warning("[SL3] SQLite shadow syncBuilds failed: ${e.message}")
                }
              }

              loading = true
              Bukkit.getLogger()
                  .info(
                      "[SL3] Load completion! source=${readSource.configValue}, builds=${getBuildingInt()}"
                  )
            },
            "SL3-loadFileToDataCache",
        )
        .start()
  }

  fun saveYamlAsync(data: SLData) {
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            Tools.plugin,
            Runnable {
              try {
                val dirName = getDirName(data.id)
                val yml = CustomYaml("data/" + dirName + "/${data.id}.yml")
                val likesStr = data.likes.map { it.toString() }
                val likesWithTimestampStr = mutableMapOf<String, Long>()
                data.likesWithTimestamp.forEach { (uuid, ts) ->
                  likesWithTimestampStr[uuid.toString()] = ts
                }

                yml.apply {
                  set("id", data.id)
                  set("loc.world", data.loc.world?.name ?: data.worldName)
                  set("loc.x", data.loc.x)
                  set("loc.y", data.loc.y)
                  set("loc.z", data.loc.z)
                  set("time", data.time.toString())
                  set("owner", data.owner.toString())
                  set("title", data.title)
                  set("likes", likesStr)
                  set("likesWithTimestamp", likesWithTimestampStr)
                  set("check", data.check)
                  set("comment", data.comment)
                  set("DiscordTextID", data.discordTextID)
                  set("deleted", data.deletedAt != null)
                  set("deleted_at", data.deletedAt?.toString())
                  set("deleted_by", data.deletedBy?.toString())
                  set("sign_material", data.signMaterial)
                }
                yml.save()
              } catch (e: Exception) {
                Tools.plugin.logger.warning(
                    "[SL3] YAML fallback save failed for ID ${data.id}: ${e.message}"
                )
              }
            },
        )
  }

  fun removeFromCache(data: SLData) {
    val dirName = getDirName(data.id)
    dataMap[dirName]?.removeIf { it.id == data.id }

    val dW = slNearData[data.worldName]
    dW?.get(data.loc.blockX shr 4)?.get(data.loc.blockZ shr 4)?.removeIf { it.id == data.id }
  }

  private fun addToCacheInMemory(data: SLData) {
    val dirName = getDirName(data.id)
    val list = dataMap.getOrPut(dirName) { mutableListOf() }
    val existingIndex = list.indexOfFirst { it.id == data.id }
    if (existingIndex >= 0) {
      list[existingIndex] = data
    } else {
      list.add(data)
    }

    // slNearData を更新: 既存位置にあれば削除し、新位置に追加
    slNearData.values.forEach { wMap ->
      wMap.values.forEach { cMap ->
        cMap.values.forEach { cList -> cList.removeIf { it.id == data.id } }
      }
    }
    val nWorld = slNearData.getOrPut(data.loc.world?.name ?: data.worldName) { mutableMapOf() }
    val nChunkX = nWorld.getOrPut(data.loc.blockX shr 4) { mutableMapOf() }
    val nChunkZ = nChunkX.getOrPut(data.loc.blockZ shr 4) { mutableListOf() }
    nChunkZ.add(data)
  }

  private enum class ReadSource(val configValue: String, val logName: String) {
    YAML("yaml", "File"),
    SQLITE("sqlite", "SQLite"),
  }

  private fun getReadSource(): ReadSource {
    val value = Tools.plugin.config.getString("readSource", ReadSource.YAML.configValue)
    return ReadSource.values().firstOrNull { it.configValue == value?.lowercase(Locale.ROOT) }
        ?: run {
          Tools.plugin.logger.warning("[SL3] Unknown readSource '$value'. Falling back to yaml.")
          ReadSource.YAML
        }
  }

  private fun getDirName(id: Int): String {
    val fPage = (id / 50.0).toInt()
    return if (id in -49..-1) {
      "-1--49"
    } else if (fPage < 0) {
      "${fPage*50}-${(fPage-1)*50+1}"
    } else {
      "${fPage*50}-${(fPage+1)*50-1}"
    }
  }

  private fun addToCache(slData: SLData, dirName: String, ids: MutableSet<Int>) {
    lastID = max(lastID, slData.id)
    ids.add(slData.id)

    val list = dataMap[dirName] ?: mutableListOf()
    list.add(slData)
    dataMap[dirName] = list

    if (slData.deletedAt == null) {
      userLikesInt[slData.owner] = (userLikesInt[slData.owner] ?: 0) + slData.likes.count()
    }
  }

  private fun loadLikesWithTimestamp(yml: CustomYamlFile): MutableMap<UUID, Long> {
    val likesWithTimestamp: MutableMap<UUID, Long> = mutableMapOf()
    val section = yml.getConfigurationSection("likesWithTimestamp")

    if (section != null) {
      section.getKeys(false).forEach { uuidStr ->
        putLikeTimestamp(likesWithTimestamp, uuidStr, section.get(uuidStr))
      }
      return likesWithTimestamp
    }

    val rawLikesWithTimestamp = yml.get("likesWithTimestamp")
    if (rawLikesWithTimestamp is Map<*, *>) {
      rawLikesWithTimestamp.forEach { (uuid, timestamp) ->
        putLikeTimestamp(likesWithTimestamp, uuid as? String, timestamp)
      }
    } else if (rawLikesWithTimestamp is ConfigurationSection) {
      rawLikesWithTimestamp.getKeys(false).forEach { uuidStr ->
        putLikeTimestamp(likesWithTimestamp, uuidStr, rawLikesWithTimestamp.get(uuidStr))
      }
    }

    return likesWithTimestamp
  }

  private fun putLikeTimestamp(
      likesWithTimestamp: MutableMap<UUID, Long>,
      uuidStr: String?,
      timestamp: Any?,
  ) {
    try {
      val uuid = UUID.fromString(uuidStr ?: return)
      val ts = (timestamp as? Number)?.toLong() ?: timestamp?.toString()?.toLongOrNull() ?: return
      likesWithTimestamp[uuid] = ts
    } catch (_: Exception) {}
  }

  /** WorldNameとchunk別のslDataMap */
  private val slNearData =
      mutableMapOf<String, MutableMap<Int, MutableMap<Int, MutableList<SLData>>>>()

  /** locから近いslDataを順に返す(距離付き) */
  fun getSLNearToSLDataMap(loc: Location): List<Pair<Double, SLData>> {
    val locWorld = loc.world.name
    val locCX = loc.chunk.x
    val locCZ = loc.chunk.z
    val locVec = loc.toVector()

    val dataList = mutableSetOf<SLData>()

    val nearWorld = slNearData[locWorld] ?: return listOf()
    for (x in locCX - 12..locCX + 12) {
      for (z in locCZ - 12..locCZ + 12) {
        val slDataSet = nearWorld[x]?.get(z) ?: continue
        dataList.addAll(slDataSet)
      }
    }

    val list = mutableListOf<Pair<Double, SLData>>()

    dataList.forEach { slData ->
      val distance = slData.loc.toVector().distance(locVec)
      if (distance.isNaN()) return@forEach
      list.add(Pair(distance, slData))
    }

    return list.sortedBy { it.first }
  }

  /** load時作成用(slnear用) */
  private fun slNearLoadTask() {
    val list = getSLDataAll()
    list.forEach { data ->
      if (data.loc.world != null) {
        val nWorld =
            slNearData[data.loc.world?.name]
                ?: run {
                  val map = mutableMapOf<Int, MutableMap<Int, MutableList<SLData>>>()
                  slNearData[data.loc.world?.name ?: "null"] = map
                  map
                }
        val x = data.loc.blockX.shr(4)
        val nChunkX =
            nWorld[x]
                ?: run {
                  val map = mutableMapOf<Int, MutableList<SLData>>()
                  nWorld[x] = map
                  map
                }
        val z = data.loc.blockZ.shr(4)
        val nChunkZ =
            nChunkX[z]
                ?: run {
                  val set = mutableListOf<SLData>()
                  nChunkX[z] = set
                  set
                }
        nChunkZ.add(data)
      }
    }
  }

  /** worldborder.yml からボーダー情報を読む */
  private fun getBorderChunkRange(loc: Location): IntArray? {
    val file = File(Tools.plugin.dataFolder, "worldborder.yml")
    if (!file.exists()) return null

    val yml = CustomYamlFile(file)
    val base = loc.world.name

    val cx = yml.getDouble("$base.centerX", Double.NaN)
    val cz = yml.getDouble("$base.centerZ", Double.NaN)
    val rx = yml.getDouble("$base.radiusX", Double.NaN)
    val rz = yml.getDouble("$base.radiusZ", Double.NaN)

    if (cx.isNaN() || cz.isNaN() || rx.isNaN() || rz.isNaN() || rx <= 0.0 || rz <= 0.0) return null

    val minCX = floor((cx - rx) / 16.0).toInt()
    val maxCX = floor((cx + rx) / 16.0).toInt()
    val minCZ = floor((cz - rz) / 16.0).toInt()
    val maxCZ = floor((cz + rz) / 16.0).toInt()

    return intArrayOf(minCX, maxCX, minCZ, maxCZ)
  }

  @Suppress("UnstableApiUsage", "removal")
  fun vacantTPTask(player: Player, radius: Int, maxCount: Int, biomeStr: String?) {
    val loc = player.location.clone()
    val data = slNearData[loc.world.name]?.toMap() ?: return
    val biome = biomeStr?.let { Biome.valueOf(it) }

    val chunkRange =
        getBorderChunkRange(loc)
            ?: run {
              player.sendMessage(Tools.socialLikesLOGO + "&eコンフィグにWorldBorderが設定されていません。".color())
              return
            }
    val minCX = chunkRange[0]
    val maxCX = chunkRange[1]
    val minCZ = chunkRange[2]
    val maxCZ = chunkRange[3]

    val r = if (radius > 0) radius else 1
    val c = if (maxCount >= 0) maxCount else 0

    player.sendMessage(Tools.socialLikesLOGO + "&f空き地を探しています...".color())

    Thread {
          var switch = true
          var totalCount = 0
          var biomeCount = 0
          while (switch) {
            val randomCX = (minCX..maxCX).random()
            val randomCZ = (minCZ..maxCZ).random()

            if (biome != null) {
              biomeCount++
              val x = randomCX * 16 + 8
              val z = randomCZ * 16 + 8
              val hitBiome = loc.world.getBiome(x, 200, z)
              if (biome.name() != hitBiome.name()) {
                if (biomeCount >= 33) {
                  object : BukkitRunnable() {
                        override fun run() {
                          player.sendMessage(Tools.socialLikesLOGO + "&eバイオームが見つかりませんでした。".color())
                        }
                      }
                      .runTask(Tools.plugin)
                  switch = false
                }
                continue
              }
            }

            var count = 0
            for (x in randomCX - r..randomCX + r) {
              for (z in randomCZ - r..randomCZ + r) {
                val slDataSet = data[x]?.get(z) ?: continue
                count += slDataSet.size
              }
            }

            if (count <= c) {
              val x = randomCX * 16 + 8
              val z = randomCZ * 16 + 8
              object : BukkitRunnable() {
                    override fun run() {
                      var switchY = true
                      val sLoc =
                          Location(loc.world, x.toDouble(), 321.0, z.toDouble(), loc.yaw, loc.pitch)
                      while (switchY) {
                        if (sLoc.block.isPassable) {
                          if (!sLoc.block.getRelative(BlockFace.DOWN).isPassable) {
                            switchY = false
                            continue
                          }
                          if (
                              sLoc.block.getRelative(BlockFace.DOWN).blockData.material ==
                                  Material.WATER
                          ) {
                            switchY = false
                            continue
                          }
                        }
                        sLoc.y -= 1.0
                        if (sLoc.y <= -64.0) {
                          player.sendMessage(
                              Tools.socialLikesLOGO + "&e足場が無いためテレポートできませんでした".color()
                          )
                          return
                        }
                      }
                      Bukkit.dispatchCommand(
                          Bukkit.getConsoleSender(),
                          "tp ${player.name} $x ${sLoc.y} $z",
                      )
                    }
                  }
                  .runTask(Tools.plugin)
              switch = false
            }
            totalCount++
            if (totalCount >= 33) {
              object : BukkitRunnable() {
                    override fun run() {
                      player.sendMessage(Tools.socialLikesLOGO + "&e空き地が見つかりませんでした。".color())
                    }
                  }
                  .runTask(Tools.plugin)
              switch = false
            }
          }
          return@Thread
        }
        .start()
  }
}
