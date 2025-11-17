package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.CustomYamlFile
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.gui.AllBuild
import com.github.srain3.sociallikes.gui.SLRankUp
import com.github.srain3.sociallikes.gui.UserBuild
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
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object Data {

  /** [SLData]からPluginフォルダ内へファイル保存を行いつつCacheに無ければ追加する */
  fun save(data: SLData) {
    // IDから50間隔で区切り、Yamlファイルを作成する
    val fPage = (data.id / 50.0).toInt()
    val dirName =
      if (data.id in -49..-1) {
        "-1--49"
      } else if (fPage < 0) {
        "${fPage*50}-${(fPage-1)*50+1}"
      } else {
        "${fPage*50}-${(fPage+1)*50-1}"
      }
    val yml = CustomYaml("data/" + dirName + "/${data.id}.yml")

    // UUIDListをそのままYamlに保存するといらない情報があるので
    // 一度StringにしたListを作成する
    val likesStr = mutableListOf<String>()
    data.likes.forEach { likesStr.add(it.toString()) }

    // Yamlファイルへ値を入れ、ファイルを保存する
    yml.apply {
      set("id", data.id)
      set("loc.world", data.loc.world?.name)
      set("loc.x", data.loc.x)
      set("loc.y", data.loc.y)
      set("loc.z", data.loc.z)
      set("time", data.time.toString())
      set("owner", data.owner.toString())
      set("title", data.title)
      set("likes", likesStr)
      set("check", data.check)
      set("comment", data.comment)
      set("DiscordTextID", data.discordTextID)
    }
    yml.save()

    // Cacheへ保存する(既にデータが有る場合は追加しない)
    val list = dataMap[dirName] ?: mutableListOf()
    if (list.none { it == data }) {
      list.add(data)
    }
    dataMap[dirName] = list
    // ここにslnear用
    val nWorld =
      slNearData[data.loc.world?.name]
        ?: run {
          val map = mutableMapOf<Int, MutableMap<Int, MutableList<SLData>>>()
          slNearData[data.loc.world?.name ?: "null"] = map
          map
        }
    val nChunkX =
      nWorld[data.loc.chunk.x]
        ?: run {
          val map = mutableMapOf<Int, MutableList<SLData>>()
          nWorld[data.loc.chunk.x] = map
          map
        }
    val nChunkZ =
      nChunkX[data.loc.chunk.z]
        ?: run {
          val set = mutableListOf<SLData>()
          nChunkX[data.loc.chunk.z] = set
          set
        }
    nChunkZ.add(data)

    SLRankUp.plusBuildTask(data.owner)
  }

  /** IDから[SLData]を取得する、ない場合nullを返す */
  fun getSLData(id: Int): SLData? {
    val fPage = (id / 50.0).toInt()
    val dirName =
      if (id in -49..-1) {
        "-1--49"
      } else if (fPage < 0) {
        "${fPage*50}-${(fPage-1)*50+1}"
      } else {
        "${fPage*50}-${(fPage+1)*50-1}"
      }
    val list = dataMap[dirName] ?: return null
    return list.firstOrNull { it.id == id }
  }

  /** [SLData]を元にデータを消去する */
  fun delID(slData: SLData, updateMode: Boolean = false) {
    val fPage = (slData.id / 50.0).toInt()
    val dirName =
      if (slData.id in -49..-1) {
        "-1--49"
      } else if (fPage < 0) {
        "${fPage*50}-${(fPage-1)*50+1}"
      } else {
        "${fPage*50}-${(fPage+1)*50-1}"
      }
    val list = dataMap[dirName] ?: return

    if (!updateMode) {
      AllBuild.deleteSLSignData(slData)
      UserBuild.deleteSLSignData(slData)

      if (lastID == slData.id) {
        lastID -= 1
      } else {
        if (slData.id > 0) {
          emptyIDList.add(slData.id)
        }
      }
    }

    list.remove(slData)
    dataMap[dirName] = list
    // ここにslnear用
    val dW = slNearData[slData.worldName]
    if (dW != null) {
      val dX = dW[slData.loc.chunk.x]
      if (dX != null) {
        val dZ = dX[slData.loc.chunk.z]
        if (dZ != null) {
          dZ.remove(slData)
          dX[slData.loc.chunk.z] = dZ
          dW[slData.loc.chunk.x] = dX
          slNearData[slData.worldName] = dW
        }
      }
    }

    val yml = CustomYaml("data/" + dirName + "/${slData.id}.yml")
    yml.delete()

    SLRankUp.minusBuildTask(slData.owner)
  }

  /** [SLData]を50区切り別のフォルダ名と紐付けて保存しているCache */
  private val dataMap = mutableMapOf<String, MutableList<SLData>>()

  /** SLDataをすべて返す */
  fun getSLDataAll(): MutableSet<SLData> {
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
    dataMap.values.forEach { i += it.size }
    return i
  }

  /** ファイルで存在する一番大きいID */
  var lastID = 0
  /** 空いてるIDリスト */
  val emptyIDList = mutableListOf<Int>()

  /** ファイルのロードが終わっていたらtrue */
  var loading = true

  /** ファイルからCacheを作成する(別スレッドにして鯖のロードを止めないようにしてる) */
  fun loadFileToDataCache() {
    dataMap.clear()
    userLikesInt.clear()
    // SocialLikes3/data/ココのディレクトリ全てのlist
    val dir = Tools.getFolderToFolder("data") ?: return
    Bukkit.getLogger().info("[SL3] File Loading...")
    Thread(
      {
        val ids = mutableSetOf<Int>()
        loading = false
        dir.forEach dir@{
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

            // 比較して大きいIDへ更新する
            lastID = max(lastID, id)
            // 存在するidリストへ保存する
            ids.add(id)

            // locationへ変換
            val world =
              Bukkit.getServer().getWorld(worldStr)
                ?: run {
                  Tools.plugin.logger.warning("ID:$id world $worldStr does not exist!")
                  // return@file
                  null
                }
            val loc = Location(world, x, y, z)

            // likesのStringListからUUIDListへ変換
            val likes: MutableList<UUID> = mutableListOf()
            likesStr.forEach { uuidStr -> likes.add(UUID.fromString(uuidStr)) }

            // Cacheへ入れる
            val slData =
              SLData(id, loc, time, owner, title, likes, check, comment, worldStr, textID)
            val list = dataMap[it.name] ?: mutableListOf()
            list.add(slData)
            dataMap[it.name] = list

            // userLikes数を加算する
            userLikesInt[owner] = (userLikesInt[owner] ?: 0) + likes.count()
          }
        }

        try {
          AllBuild.createItem(dataMap.toMap())
        } catch (_: Exception) {
          Tools.plugin.logger.severe("AllBuild.createItemにエラー")
        }

        if (lastID >= 1) {
          for (i in 1..lastID) {
            if (!ids.contains(i)) {
              emptyIDList.add(i)
            }
          }
        } else if (lastID < 0) {
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

        loading = true
        Bukkit.getLogger().info("[SL3] Load completion!")
      },
      "SL3-loadFileToDataCache",
    )
      .start()
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
                    sLoc.block.getRelative(BlockFace.DOWN).blockData.material == Material.WATER
                  ) {
                    switchY = false
                    continue
                  }
                }
                sLoc.y -= 1.0
                if (sLoc.y <= -64.0) {
                  player.sendMessage(Tools.socialLikesLOGO + "&e足場が無いためテレポートできませんでした".color())
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
