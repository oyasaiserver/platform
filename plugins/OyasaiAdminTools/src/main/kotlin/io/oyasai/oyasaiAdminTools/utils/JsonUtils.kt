package io.oyasai.oyasaiAdminTools.utils

import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.util.JsonUtils
import com.baakun.dynamicprofile.util.Tools
import com.baakun.dynamicprofile.util.Tools.getStats
import com.google.gson.GsonBuilder
import com.google.gson.reflect.TypeToken
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.file.FileAccessManager.submitWriteTask
import io.oyasai.oyasaiAdminTools.file.FileEdit.readFile
import io.oyasai.oyasaiAdminTools.file.FileEdit.writeFile
import java.io.File
import java.util.UUID

object JsonUtils {
  val gson = GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create()

  inline fun <reified T> toJson(data: T): String = gson.toJson(data)

  inline fun <reified T> fromJson(json: String): T {
    val type = object : TypeToken<T>() {}.type
    return gson.fromJson(json, type)
  }

  inline fun <reified T> readJsonFile(path: String, default: T): T {
    val json = readFile(plugin?.dataFolder?.path + File.separator + path)
    if (json.isBlank()) {
      writeJsonFile(path, default)
      return default
    }
    return fromJson(json)
  }

  inline fun <reified T> writeJsonFile(path: String, data: T) {
    submitWriteTask { writeFile(plugin?.dataFolder?.path + File.separator + path, toJson(data)) }
  }

  // メンバが欠けていた場合、デフォルト値で読み込み
  inline fun <reified T> readJsonFileSafe(path: String, default: T): T {
    val file = File(plugin?.dataFolder?.path + File.separator + path)
    if (!file.exists() || file.length() == 0L) {
      writeJsonFile(path, default)
      return default
    }
    return try {
      val json = file.readText()
      val result: T? = gson.fromJson(json, object : TypeToken<T>() {}.type)
      result ?: default
    } catch (e: Exception) {
      plugin.logger.severe("Failed to parse JSON file: $path. Error: ${e.message}")
      plugin.logger.severe(
          "To prevent data loss, the file was NOT overwritten. Please check the syntax."
      )
      default
    }
  }

  fun saveUserJson(uuid: UUID) {
    try {
      val userstats = getStats(uuid)
      val file = File(Tools.plugin.dataFolder, "UserStatsJSON/${uuid}.json")
      JsonUtils.toJsonFile(file, userstats, Stats::class.java)
    } catch (e: Exception) {
      Tools.plugin.logger.warning("Failed to save data for ${uuid}: ${e.message}")
      e.printStackTrace()
    }
  }
}
