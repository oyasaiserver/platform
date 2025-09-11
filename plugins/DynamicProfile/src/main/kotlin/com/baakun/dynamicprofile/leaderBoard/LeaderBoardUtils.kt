package com.baakun.dynamicprofile.leaderBoard

import com.baakun.dynamicprofile.DynamicProfile.Companion.UUIDMap
import com.baakun.dynamicprofile.util.JsonUtils
import com.baakun.dynamicprofile.util.Tools
import com.google.gson.reflect.TypeToken
import java.io.File
import java.nio.charset.StandardCharsets
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.UUID

object LeaderBoardUtils {
  val latestFile = File(Tools.plugin.dataFolder.absolutePath + "/LeaderBoards/latest.json")

  fun loadWeeklyLB() {
    val lbFile = File(Tools.plugin.dataFolder.absolutePath + "/LeaderBoards/latest.json")
    lbFile.parentFile.mkdirs()
    if (lbFile.createNewFile()) lbFile.writeText("{}", StandardCharsets.UTF_8)
    UUIDMap =
      JsonUtils.fromJsonFile(lbFile, object : TypeToken<MutableMap<UUID, LBStats>>() {}.type)
  }

  fun saveWeeklyLB() {
    latestFile.parentFile.mkdirs()
    latestFile.createNewFile()
    JsonUtils.toJsonFile(
      latestFile,
      UUIDMap,
      object : TypeToken<MutableMap<UUID, LBStats>>() {}.type,
    )
  }

  fun weeklyUpdate() {

    val localDateTime = LocalDateTime.now(ZoneId.systemDefault())
    val format = DateTimeFormatter.ofPattern("yyyy_MM_dd HH;mm;ss.SSS")
    val formatNowDate = format.format(localDateTime) ?: ("ERROR__" + UUID.randomUUID().toString())

    val lbFile = File(Tools.plugin.dataFolder.absolutePath + "/LeaderBoards/$formatNowDate.json")
    lbFile.parentFile.mkdirs()
    lbFile.createNewFile()
    lbFile.writeText(latestFile.readText())
    latestFile.writeText("{}")
  }
}
