package icu.oyasai.utilities

import java.io.File
import java.io.IOException
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration

open class YamlConfig(private val fileName: String, private val fromJar: Boolean = false) :
    YamlConfiguration() {
  private val plugin = OyasaiUtilities.plugin
  private val file = File(plugin.dataFolder, fileName)

  init {
    reload()
  }

  fun saveDefault() {
    val df = plugin.dataFolder
    if (!df.exists() || !df.isDirectory) {
      df.mkdir()
    }
    if (!file.exists()) {
      if (fromJar) {
        plugin.saveResource(fileName, true)
      } else {
        save()
      }
    }
  }

  fun save() {
    try {
      this.save(file)
    } catch (ex: IOException) {
      Bukkit.getLogger().log(Level.SEVERE, "Could not save config", ex)
    }
  }

  fun reload() {
    if (file.exists()) {
      this.load(file)
    }
  }

  fun delete(): Boolean {
    if (file.exists()) { // 存在するファイルの場合
      return file.delete()
    }
    return false
  }
}
