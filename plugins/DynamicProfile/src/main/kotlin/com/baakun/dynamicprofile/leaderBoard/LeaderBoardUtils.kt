package com.baakun.dynamicprofile.leaderBoard

import com.baakun.dynamicprofile.DynamicProfile.Companion.UUIDMap
import com.baakun.dynamicprofile.Tools
import com.google.gson.GsonBuilder
import com.google.gson.reflect.TypeToken
import java.io.File
import java.io.FileWriter
import java.nio.charset.StandardCharsets
import java.time.LocalDateTime
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import java.util.UUID


object LeaderBoardUtils {
    val latestFile = File(Tools.plugin.dataFolder.absolutePath +"/LeaderBoards/latest.json")
    val gson = GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()
    fun loadWeeklyLB(){
        val lbFile = File(Tools.plugin.dataFolder.absolutePath +"/LeaderBoards/latest.json")
        lbFile.parentFile.mkdir()
        if (lbFile.createNewFile()) lbFile.writeText("{}", StandardCharsets.UTF_8)
        UUIDMap = gson.fromJson(lbFile.readText(),object : TypeToken<MutableMap<UUID, LBStats>>() { }.type)
    }
    fun saveWeeklyLB(){
        val lbWriter = FileWriter(latestFile, StandardCharsets.UTF_8)
        latestFile.parentFile.mkdir()
        latestFile.createNewFile()
        gson.toJson(UUIDMap, lbWriter)
        lbWriter.flush()
        lbWriter.close()
    }
    fun weeklyUpdate(){

        val localDateTime = LocalDateTime.now(ZoneId.systemDefault())
        val format = DateTimeFormatter.ofPattern("yyyy_MM_dd HH;mm;ss.SSS")
        val formatNowDate = format.format(localDateTime) ?: ("ERROR__" + UUID.randomUUID().toString())

        val lbFile = File(Tools.plugin.dataFolder.absolutePath +"/LeaderBoards/$formatNowDate.json")
        lbFile.parentFile.mkdir()
        lbFile.createNewFile()
        lbFile.writeText(latestFile.readText())
        latestFile.writeText("{}")

    }
}