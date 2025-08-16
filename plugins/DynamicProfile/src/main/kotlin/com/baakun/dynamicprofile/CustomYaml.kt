package com.baakun.dynamicprofile

import java.io.File
import java.io.IOException
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin

/**
 * Yaml形式のConfigを使いやすくしたクラス。 [fileName]以外はオプション
 *
 * @param fileName ファイル名(拡張子ymlまで入れてください)
 * @param [firstCreation] ファイルがない場合、自動作成を行うか(デフォ:true)
 * @param [fromJar] resourcesの同名ファイルからペーストするか(デフォ:false)
 * @param [plugin] ファイルのデータフォルダ取得用、基本無視OK
 * @author Srain3
 */
open class CustomYaml(
  private val fileName: String,
  private val firstCreation: Boolean = true,
  private val fromJar: Boolean = false,
  private val plugin: JavaPlugin = Tools.plugin,
) : YamlConfiguration() {
  private val file = File(plugin.dataFolder, fileName)

  init {
    if (firstCreation) {
      saveDefault()
    }
    reload()
  }

  /** ファイルが存在しない場合ファイルを作成し保存する */
  fun saveDefault() {
    val dataFolder = plugin.dataFolder
    if (!dataFolder.exists() || !dataFolder.isDirectory) {
      dataFolder.mkdir()
    }
    if (!file.exists()) {
      if (fromJar) {
        plugin.saveResource(fileName, false)
      } else {
        save()
      }
    }
  }

  /** ファイルへ保存する */
  fun save() {
    try {
      this.save(file)
    } catch (ex: IOException) {
      Bukkit.getLogger().log(Level.SEVERE, "Could not save config", ex)
    }
  }

  /** ファイルを再読込する */
  fun reload() {
    this.load(file)
  }

  /** ファイルを消去する */
  fun delete() {
    if (file.exists()) { // 存在するファイルの場合
      file.delete()
    }
  }
}
