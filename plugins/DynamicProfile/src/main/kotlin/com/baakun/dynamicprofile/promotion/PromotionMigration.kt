package com.baakun.dynamicprofile.promotion

import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

/** 元ファイルを保持し、DP 側の設定を優先する。 */
object PromotionMigration {
  fun copyLegacyFiles(dataFolder: File) {
    dataFolder.mkdirs()
    val legacyFolder = File(dataFolder.parentFile, "OyasaiAdminTools")
    val ranks = File(dataFolder, "ranks.json")
    val legacyRanks = File(legacyFolder, "ranks.json")
    if (!ranks.exists() && legacyRanks.isFile) legacyRanks.copyTo(ranks)

    val configFile = File(dataFolder, "config.yml")
    val config = YamlConfiguration.loadConfiguration(configFile)
    if (!config.contains("webhook-url")) {
      val legacyConfig = YamlConfiguration.loadConfiguration(File(legacyFolder, "config.yml"))
      legacyConfig.getString("webhook-url")?.let {
        config.set("webhook-url", it)
        config.save(configFile)
      }
    }
  }
}
