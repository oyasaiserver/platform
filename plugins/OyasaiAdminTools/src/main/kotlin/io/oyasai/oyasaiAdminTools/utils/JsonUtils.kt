package io.oyasai.oyasaiAdminTools.utils

import com.google.gson.GsonBuilder
import com.google.gson.reflect.TypeToken
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import java.io.File

object JsonUtils {
  val gson = GsonBuilder().setPrettyPrinting().disableHtmlEscaping().create()

  inline fun <reified T> toJson(data: T): String = gson.toJson(data)

  inline fun <reified T> fromJson(json: String): T {
    val type = object : TypeToken<T>() {}.type
    return gson.fromJson(json, type)
  }

  inline fun <reified T> readJsonFile(path: String, default: T): T {
    val file = File(plugin?.dataFolder?.path + File.separator + path)
    if (!file.exists() || file.length() == 0L) return default
    return fromJson(file.readText())
  }
}
