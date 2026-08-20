package com.github.srain3.sociallikes.datas

import java.io.File
import java.util.logging.Level
import java.util.logging.Logger
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin

object NegativeIdMigrator {

  data class MigrationResultSummary(
      val targetNegativeCount: Int,
      val newIdStart: Int?,
      val newIdEnd: Int?,
      val sqliteMigratedCount: Int,
      val yamlMigratedCount: Int,
      val yamlMissingCount: Int,
      val failedYamlIds: List<Int>,
      val publicityHistoryUpdatedCount: Int,
      val isDryRun: Boolean,
      val isSuccess: Boolean = true,
      val errorMessage: String? = null,
  )

  /**
   * 起動時に config.yml のフラグを確認し、有効な場合に負IDの移行を実行する。 Data.loadFileToDataCache()
   * によるデータロードよりも前にメインスレッドから同期的に呼び出される必要がある。
   */
  fun runIfConfigured(plugin: JavaPlugin) {
    val enabled = plugin.config.getBoolean("migrateNegativeIdsOnStartup", false)
    if (!enabled) return

    val dryRun = plugin.config.getBoolean("migrateNegativeIdsDryRun", false)
    executeMigration(plugin, dryRun)
  }

  fun executeMigration(plugin: JavaPlugin, dryRun: Boolean): MigrationResultSummary {
    val logger = plugin.logger
    val tag = if (dryRun) "[DRY-RUN]" else "[EXECUTING]"

    logger.info("================================================================================")
    logger.info("[SL3] Starting negative ID migration $tag...")

    // 1. SQLite側の移行処理を実行
    val sqliteResult = SLDatabase.migrateNegativeIds(dryRun)
    val idMap =
        when (sqliteResult) {
          is SLDatabase.MigrationResult.NoTarget -> {
            logger.info(
                "[SL3] Negative ID Migration: No negative IDs found in database (count: 0)."
            )
            logger.info("[SL3] Please set 'migrateNegativeIdsOnStartup: false' in config.yml.")
            logger.info(
                "================================================================================"
            )
            return MigrationResultSummary(
                targetNegativeCount = 0,
                newIdStart = null,
                newIdEnd = null,
                sqliteMigratedCount = 0,
                yamlMigratedCount = 0,
                yamlMissingCount = 0,
                failedYamlIds = emptyList(),
                publicityHistoryUpdatedCount = 0,
                isDryRun = dryRun,
                isSuccess = true,
            )
          }
          is SLDatabase.MigrationResult.Failure -> {
            val message = sqliteResult.cause.message ?: sqliteResult.cause.javaClass.simpleName
            logger.log(
                Level.SEVERE,
                "[SL3] Negative ID Migration FAILED during SQLite migration: $message",
                sqliteResult.cause,
            )
            logger.severe(
                "[SL3] SQLite migration aborted and rolled back. YAML migration will NOT be executed."
            )
            logger.info(
                "================================================================================"
            )
            return MigrationResultSummary(
                targetNegativeCount = 0,
                newIdStart = null,
                newIdEnd = null,
                sqliteMigratedCount = 0,
                yamlMigratedCount = 0,
                yamlMissingCount = 0,
                failedYamlIds = emptyList(),
                publicityHistoryUpdatedCount = 0,
                isDryRun = dryRun,
                isSuccess = false,
                errorMessage = message,
            )
          }
          is SLDatabase.MigrationResult.Success -> sqliteResult.idMap
        }

    val newIds = idMap.values.sorted()
    val startId = newIds.firstOrNull()
    val endId = newIds.lastOrNull()

    // 2. YAML側の看板ファイルを移行
    val dataDir = File(plugin.dataFolder, "data")
    val (yamlMigratedCount, yamlMissingCount, failedYamlIds) =
        migrateYamlFiles(dataDir, idMap, dryRun, logger)

    // 3. PublicityHistory.yml の SLID を一括置換
    val pubFile = File(plugin.dataFolder, "PublicityHistory.yml")
    val pubUpdatedCount = migratePublicityHistory(pubFile, idMap, dryRun, logger)

    // 4. dirty-builds.yml の ID を置換（存在する場合）
    if (!dryRun) {
      DirtyBuildManager.remapMigratedIds(idMap)
    }

    // 5. 結果ログ出力
    val idRangeStr =
        if (startId != null && endId != null) "$startId .. $endId (start: $startId, end: $endId)"
        else "N/A"

    logger.info("--------------------------------------------------------------------------------")
    if (dryRun) {
      logger.info("[SL3] Negative ID Migration: DRY-RUN PREVIEW SUMMARY")
      logger.info("[SL3] - Target negative IDs found: ${idMap.size}")
      logger.info("[SL3] - Proposed new positive ID range: $idRangeStr")
      logger.info("[SL3] - SQLite entries that would be migrated: ${idMap.size}")
      logger.info(
          "[SL3] - YAML files that would be migrated: $yamlMigratedCount (missing: $yamlMissingCount)"
      )
      logger.info("[SL3] - PublicityHistory entries that would be updated: $pubUpdatedCount")
      logger.info("[SL3] [DRY-RUN] No actual changes were saved to SQLite or YAML files.")
      logger.info(
          "[SL3] To perform the actual migration, set 'migrateNegativeIdsDryRun: false' and keep 'migrateNegativeIdsOnStartup: true', then restart."
      )
    } else {
      logger.info("[SL3] Negative ID Migration: EXECUTION SUMMARY")
      logger.info("[SL3] - Target negative IDs found: ${idMap.size}")
      logger.info("[SL3] - New positive ID range: $idRangeStr")
      logger.info("[SL3] - SQLite migrated count: ${idMap.size}")
      logger.info(
          "[SL3] - YAML files migrated count: $yamlMigratedCount (missing: $yamlMissingCount)"
      )
      logger.info(
          "[SL3] - Failed count: ${failedYamlIds.size}" +
              if (failedYamlIds.isNotEmpty()) " (Failed IDs: $failedYamlIds)" else ""
      )
      logger.info("[SL3] - PublicityHistory entries updated: $pubUpdatedCount")
      if (failedYamlIds.isEmpty()) {
        logger.info("[SL3] Negative ID Migration COMPLETED SUCCESSFULLY.")
      } else {
        logger.warning(
            "[SL3] Negative ID Migration COMPLETED WITH ${failedYamlIds.size} YAML FAILURES. Check severe logs above."
        )
      }
      logger.info(
          "[SL3] IMPORTANT: Please set 'migrateNegativeIdsOnStartup: false' in config.yml before the next server restart."
      )
    }
    logger.info("================================================================================")

    return MigrationResultSummary(
        targetNegativeCount = idMap.size,
        newIdStart = startId,
        newIdEnd = endId,
        sqliteMigratedCount = idMap.size,
        yamlMigratedCount = yamlMigratedCount,
        yamlMissingCount = yamlMissingCount,
        failedYamlIds = failedYamlIds,
        publicityHistoryUpdatedCount = pubUpdatedCount,
        isDryRun = dryRun,
        isSuccess = failedYamlIds.isEmpty(),
    )
  }

  fun migrateYamlFiles(
      dataDir: File,
      idMap: Map<Int, Int>,
      dryRun: Boolean,
      logger: Logger,
  ): Triple<Int, Int, List<Int>> {
    var migratedCount = 0
    var missingCount = 0
    val failedIds = mutableListOf<Int>()

    for ((oldId, newId) in idMap) {
      val oldDirName = Data.getDirName(oldId)
      val newDirName = Data.getDirName(newId)
      val oldFile = File(dataDir, "$oldDirName/$oldId.yml")
      val newFile = File(dataDir, "$newDirName/$newId.yml")

      if (!oldFile.exists() || !oldFile.isFile) {
        logger.warning(
            "[SL3] Migration: YAML file not found for ID $oldId at ${oldFile.path}. " +
                "SQLite was migrated, but YAML file does not exist."
        )
        missingCount++
        continue
      }

      if (dryRun) {
        logger.info(
            "[SL3] [DryRun] YAML: would migrate ${oldFile.path} -> ${newFile.path} (id: $oldId -> $newId)"
        )
        migratedCount++
      } else {
        try {
          val yml = YamlConfiguration.loadConfiguration(oldFile)
          yml.set("id", newId)
          newFile.parentFile?.mkdirs()
          yml.save(newFile)
          if (!oldFile.delete()) {
            oldFile.deleteOnExit()
            logger.warning(
                "[SL3] Migration: Could not immediately delete old YAML file: ${oldFile.path}"
            )
          }
          val oldDir = oldFile.parentFile
          if (oldDir != null && oldDir.exists() && oldDir.isDirectory) {
            val remaining = oldDir.listFiles()
            if (remaining != null && remaining.isEmpty()) {
              oldDir.delete()
            }
          }
          migratedCount++
        } catch (e: Exception) {
          logger.log(
              Level.SEVERE,
              "[SL3] Failed to migrate YAML file for ID $oldId -> $newId (${oldFile.path}): ${e.message}",
              e,
          )
          failedIds.add(oldId)
        }
      }
    }

    return Triple(migratedCount, missingCount, failedIds)
  }

  fun migratePublicityHistory(
      pubFile: File,
      idMap: Map<Int, Int>,
      dryRun: Boolean,
      logger: Logger,
  ): Int {
    if (!pubFile.exists() || !pubFile.isFile) return 0
    var updatedCount = 0
    try {
      val pubYml = YamlConfiguration.loadConfiguration(pubFile)
      for (key in pubYml.getKeys(false)) {
        val currentSlId = pubYml.getInt("$key.SLID", -999999)
        if (idMap.containsKey(currentSlId)) {
          val newSlId = idMap[currentSlId]!!
          if (dryRun) {
            logger.info(
                "[SL3] [DryRun] PublicityHistory.yml: entry '$key' SLID $currentSlId -> $newSlId"
            )
          } else {
            pubYml.set("$key.SLID", newSlId)
          }
          updatedCount++
        }
      }
      if (!dryRun && updatedCount > 0) {
        pubYml.save(pubFile)
        logger.info("[SL3] PublicityHistory.yml: saved $updatedCount updated entries.")
      }
    } catch (e: Exception) {
      logger.log(
          Level.SEVERE,
          "[SL3] Failed to migrate PublicityHistory.yml: ${e.message}",
          e,
      )
    }
    return updatedCount
  }
}
