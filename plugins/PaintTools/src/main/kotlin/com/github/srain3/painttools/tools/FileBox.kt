package com.github.srain3.painttools.tools

import java.io.File
import java.io.IOException
import java.util.logging.Level
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.configuration.file.YamlConfiguration

/** (コンフィグ)ファイルの読み書き */
object FileBox {
  /**
   * カスタムConfigファイルを(無ければ空で)渡してくれる
   *
   * @param filename /plugins/PluginName/[filename:[String]]
   * @return [FileConfiguration]
   */
  fun getCfg(filename: String): FileConfiguration {
    val file = File(ToolBox.pl.dataFolder, filename)
    return YamlConfiguration.loadConfiguration(file)
  }

  /**
   * ファイルの存在を確認する
   *
   * @param filename /plugins/PluginName/[filename:[String]]
   * @return ファイルが有れば:true 無ければ:false
   */
  fun checkFile(filename: String): Boolean {
    val file = File(ToolBox.pl.dataFolder, filename)
    if (file.exists()) {
      return file.isFile
    }
    return false
  }

  /**
   * カスタムConfigファイルを保存してくれる
   *
   * @param filename /plugins/PluginName/[filename:[String]]
   * @param config 保存したい[FileConfiguration]を渡す
   */
  fun saveFile(filename: String, config: FileConfiguration) {
    try {
      config.save(File(ToolBox.pl.dataFolder, filename))
    } catch (ex: IOException) {
      ToolBox.pl.logger.log(Level.SEVERE, "Could not save config to $filename", ex)
    }
    return
  }

  /**
   * カスタムConfigファイルを消去してくれる
   *
   * @param filename /plugins/PluginName/[filename:[String]]
   * @return 消去した場合:true 出来なかった場合:false
   */
  fun removeFile(filename: String): Boolean {
    if (filename == "config.yml") {
      return false
    }
    val file = File(ToolBox.pl.dataFolder, filename)
    if (file.exists()) { // 存在するファイルの場合
      file.delete()
      return true
    }
    return false
  }

  /**
   * jarのresourceフォルダからファイルをペーストする。 replaceをtrueにすると上書き保存する
   *
   * @param path src/resource/[path:[String]]
   * @param replace true=上書き許可 false=上書き禁止
   */
  fun pasteResources(path: String, replace: Boolean) {
    ToolBox.pl.saveResource(path, replace)
  }
}
