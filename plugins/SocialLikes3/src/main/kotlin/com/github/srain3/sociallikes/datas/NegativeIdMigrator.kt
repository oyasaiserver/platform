package com.github.srain3.sociallikes.datas

import java.io.File
import java.nio.file.Files
import java.nio.file.StandardCopyOption
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
    val readiness = SLDatabase.migrationReadiness()
    if (readiness.sqlitePrimaryReady) {
      if (!dryRun) {
        plugin.logger.warning(
            "[SL3] ID migration is already marked complete (sqlite_primary_id_migration_complete=true). Skipping startup execution. Please set 'migrateNegativeIdsOnStartup: false' in config.yml."
        )
        return
      }
      plugin.logger.info(
          "[SL3] ID migration is already marked complete (sqlite_primary_id_migration_complete=true). Running dry-run only for verification."
      )
    }

    executeMigration(plugin, dryRun)
  }

  fun executeMigration(plugin: JavaPlugin, dryRun: Boolean): MigrationResultSummary {
    val logger = plugin.logger
    val tag = if (dryRun) "[DRY-RUN]" else "[EXECUTING]"

    logger.info("================================================================================")
    logger.info("[SL3] Starting two-block ID migration $tag...")

    // 1. SQLite側の移行処理を実行
    val sqliteResult = SLDatabase.migrateNegativeIds(dryRun)
    val idMap =
        when (sqliteResult) {
          is SLDatabase.MigrationResult.NoTarget -> {
            logger.info("[SL3] ID Migration: No migration target found in database (count: 0).")
            if (SLDatabase.migrationReadiness().sqlitePrimaryReady) {
              logger.info("[SL3] ID migration completion marker is already recorded.")
              logger.info("[SL3] Please set 'migrateNegativeIdsOnStartup: false' in config.yml.")
            } else {
              logger.info(
                  "[SL3] No negative IDs found. SQLite primary mode remains disabled until a completed migration is recorded."
              )
            }
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
                "[SL3] ID Migration FAILED during SQLite migration: $message",
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
        if (startId != null && endId != null) "$startId .. $endId (min: $startId, max: $endId)"
        else "N/A"

    val negCount = idMap.keys.count { it < 0 }
    val posCount = idMap.keys.count { it > 0 }

    logger.info("--------------------------------------------------------------------------------")
    if (dryRun) {
      logger.info("[SL3] ID Migration: DRY-RUN PREVIEW SUMMARY (Two-Block Scheme)")
      logger.info(
          "[SL3] - Target entries found: ${idMap.size} (Negative/Old: $negCount, Positive/New: $posCount)"
      )
      logger.info("[SL3] - New ID range: $idRangeStr")
      logger.info("[SL3] - SQLite entries that would be migrated: ${idMap.size}")
      logger.info(
          "[SL3] - YAML files that would be migrated: $yamlMigratedCount (missing: $yamlMissingCount)"
      )
      logger.info("[SL3] - PublicityHistory entries that would be updated: $pubUpdatedCount")
      logger.info("[SL3] [DRY-RUN] Verification succeeded in temporary copy database.")
      logger.info(
          "[SL3] [DRY-RUN] No actual changes were saved to production SQLite or YAML files."
      )
      logger.info(
          "[SL3] To perform the actual migration, set 'migrateNegativeIdsDryRun: false' and keep 'migrateNegativeIdsOnStartup: true', then restart."
      )
    } else {
      logger.info("[SL3] ID Migration: EXECUTION SUMMARY (Two-Block Scheme)")
      logger.info(
          "[SL3] - Target entries found: ${idMap.size} (Negative/Old: $negCount, Positive/New: $posCount)"
      )
      logger.info("[SL3] - New ID range: $idRangeStr")
      logger.info("[SL3] - SQLite migrated count: ${idMap.size}")
      logger.info(
          "[SL3] - YAML files migrated count: $yamlMigratedCount (missing: $yamlMissingCount)"
      )
      logger.info(
          "[SL3] - Failed count: ${failedYamlIds.size}" +
              if (failedYamlIds.isNotEmpty()) " (Failed IDs: $failedYamlIds)" else ""
      )
      logger.info("[SL3] - PublicityHistory entries updated: $pubUpdatedCount")
      if (failedYamlIds.isEmpty() && yamlMissingCount == 0 && SLDatabase.markSqlitePrimaryReady()) {
        logger.info("[SL3] Two-Block ID Migration COMPLETED SUCCESSFULLY.")
        logger.info("[SL3] SQLite primary marker recorded. Set readSource: sqlite, then restart.")
      } else {
        logger.warning(
            "[SL3] ID migration did not enable SQLite primary mode: YAML failures=${failedYamlIds.size}, missing YAML=$yamlMissingCount. Check logs and restore or repair before retrying."
        )
      }
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

    if (dryRun) {
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

        logger.info(
            "[SL3] [DryRun] YAML: would migrate ${oldFile.path} -> ${newFile.path} (id: $oldId -> $newId)"
        )
        migratedCount++
      }
      return Triple(migratedCount, missingCount, failedIds)
    }

    // 本実行: ファイル名・ディレクトリの衝突（上書き）を完全に防ぐため、
    // 一時ステージングディレクトリを経由して 2フェーズ（ステージング -> 削除 -> 配置）で実行する
    val stagingDir = File(dataDir, ".migration_staging_${System.currentTimeMillis()}")
    stagingDir.mkdirs()

    data class StagedEntry(
        val oldId: Int,
        val newId: Int,
        val oldFile: File,
        val stagedFile: File,
        val finalFile: File,
    )
    val stagedEntries = mutableListOf<StagedEntry>()

    // Phase 1: 各ファイルを読み込み、IDを書き換えてステージングディレクトリに保存
    for ((oldId, newId) in idMap) {
      val oldDirName = Data.getDirName(oldId)
      val newDirName = Data.getDirName(newId)
      val oldFile = File(dataDir, "$oldDirName/$oldId.yml")
      val finalFile = File(dataDir, "$newDirName/$newId.yml")

      if (!oldFile.exists() || !oldFile.isFile) {
        logger.warning(
            "[SL3] Migration: YAML file not found for ID $oldId at ${oldFile.path}. " +
                "SQLite was migrated, but YAML file does not exist."
        )
        missingCount++
        continue
      }

      try {
        val yml = YamlConfiguration.loadConfiguration(oldFile)
        yml.set("id", newId)
        val stagedFile = File(stagingDir, "$newId.yml")
        yml.save(stagedFile)
        stagedEntries.add(StagedEntry(oldId, newId, oldFile, stagedFile, finalFile))
      } catch (e: Exception) {
        logger.log(
            Level.SEVERE,
            "[SL3] Failed to stage YAML file for ID $oldId -> $newId (${oldFile.path}): ${e.message}",
            e,
        )
        failedIds.add(oldId)
      }
    }

    // Phase 2: 旧ファイルを削除（ステージングに保存済みのため安全）
    for (entry in stagedEntries) {
      try {
        if (!entry.oldFile.delete()) {
          entry.oldFile.deleteOnExit()
          logger.warning(
              "[SL3] Migration: Could not immediately delete old YAML file: ${entry.oldFile.path}"
          )
        }
      } catch (e: Exception) {
        logger.log(
            Level.WARNING,
            "[SL3] Error deleting old YAML file ${entry.oldFile.path}: ${e.message}",
            e,
        )
      }
    }

    // Phase 3: ステージングディレクトリから最終目的地へ配置
    for (entry in stagedEntries) {
      try {
        entry.finalFile.parentFile?.mkdirs()
        Files.move(
            entry.stagedFile.toPath(),
            entry.finalFile.toPath(),
            StandardCopyOption.REPLACE_EXISTING,
        )
        migratedCount++
      } catch (e: Exception) {
        logger.log(
            Level.SEVERE,
            "[SL3] Failed to deploy YAML file for ID ${entry.oldId} -> ${entry.newId} to ${entry.finalFile.path}: ${e.message}",
            e,
        )
        failedIds.add(entry.oldId)
      }
    }

    // Phase 4: 一時ディレクトリおよび空ディレクトリのクリーンアップ
    try {
      stagingDir.deleteRecursively()
      dataDir.listFiles()?.forEach { dir ->
        if (dir.isDirectory && !dir.name.startsWith(".migration_staging")) {
          val remaining = dir.listFiles()
          if (remaining != null && remaining.isEmpty()) {
            dir.delete()
          }
        }
      }
    } catch (e: Exception) {
      logger.log(Level.WARNING, "[SL3] Error during YAML migration cleanup: ${e.message}", e)
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
