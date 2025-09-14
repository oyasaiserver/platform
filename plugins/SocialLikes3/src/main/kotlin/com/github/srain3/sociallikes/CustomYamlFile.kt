package com.github.srain3.sociallikes

import java.io.File
import java.io.IOException
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration

open class CustomYamlFile(private val file: File) : YamlConfiguration() {

  init {
    reload()
  }

  /*
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
   */

  fun save() {
    try {
      this.save(file)
    } catch (ex: IOException) {
      Bukkit.getLogger().log(Level.SEVERE, "Could not save config", ex)
    }
  }

  fun reload() {
    this.load(file)
  }

  fun delete() {
    if (file.exists()) { // 存在するファイルの場合
      file.delete()
    }
  }
}
