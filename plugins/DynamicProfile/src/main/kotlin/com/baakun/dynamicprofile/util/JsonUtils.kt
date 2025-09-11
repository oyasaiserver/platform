package com.baakun.dynamicprofile.util

import com.google.gson.Gson
import com.google.gson.GsonBuilder
import java.io.File
import java.io.FileWriter
import java.lang.reflect.Type
import java.nio.charset.StandardCharsets

object JsonUtils {
  val gson: Gson = GsonBuilder().excludeFieldsWithoutExposeAnnotation().setPrettyPrinting().create()

  /** ファイルからJSONを読み込んでオブジェクトに変換 */
  fun <T> fromJsonFile(file: File, type: Type): T {
    if (!file.exists()) {
      file.parentFile?.mkdirs()
      file.createNewFile()
    }
    return gson.fromJson(file.readText(StandardCharsets.UTF_8), type)
  }

  /** オブジェクトをJSONとしてファイルに保存 */
  fun <T> toJsonFile(file: File, obj: T, type: Type? = null) {
    file.parentFile?.mkdirs()
    file.createNewFile()
    FileWriter(file, StandardCharsets.UTF_8).use { writer ->
      if (type != null) gson.toJson(obj, type, writer) else gson.toJson(obj, writer)
    }
  }

  /** オブジェクトをJSON文字列に変換 */
  fun <T> toJsonString(obj: T, type: Type? = null): String {
    return if (type != null) gson.toJson(obj, type) else gson.toJson(obj)
  }
}
