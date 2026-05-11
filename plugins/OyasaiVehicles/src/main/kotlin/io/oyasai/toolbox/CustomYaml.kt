package io.oyasai.toolbox

import java.io.File
import java.io.IOException
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin

open class CustomYaml(fileName: String, plugin: JavaPlugin = requireToolboxPlugin()) :
    YamlConfiguration() {
  private val file: File = File(plugin.dataFolder, fileName)

  init {
    reload()
  }

  open fun save() {
    try {
      save(file)
    } catch (e: IOException) {
      Bukkit.getLogger().log(Level.SEVERE, "Could not save config to $file", e)
    }
  }

  fun reload() {
    if (file.exists()) {
      try {
        load(file)
      } catch (e: Exception) {
        Bukkit.getLogger().log(Level.SEVERE, "Could not load config from $file", e)
      }
    }
  }

  fun delete() {
    if (file.exists()) {
      file.delete()
    }
  }
}
