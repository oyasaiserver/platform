package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.CustomYamlFile
import com.github.srain3.sociallikes.Tools
import java.io.File
import java.io.IOException
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicBoolean
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.scheduler.BukkitTask

object DirtyBuildManager {
  private const val FILE_NAME = "dirty-builds.yml"
  private const val KEY_DIRTY_IDS = "dirty-build-ids"
  private const val BATCH_SIZE = 25
  private const val MAX_MISSING_RETRIES = 3

  private val dirtyBuildIds: MutableSet<Int> = ConcurrentHashMap.newKeySet()
  private val missingDataRetries: MutableMap<Int, Int> = ConcurrentHashMap()
  private val isReconciling = AtomicBoolean(false)
  private val fileLock = Any()
  private var periodicTask: BukkitTask? = null

  /** 起動時にディスク（dirty-builds.yml）からダーティ看板IDを読み込む */
  fun loadFromDisk() {
    val file = getFile()
    if (!file.exists()) return

    synchronized(fileLock) {
      try {
        val yml = CustomYamlFile(file)
        val list = yml.getIntegerList(KEY_DIRTY_IDS)
        if (list.isNotEmpty()) {
          dirtyBuildIds.addAll(list)
          Tools.plugin.logger.warning(
              "[SL3] Loaded ${list.size} dirty build ID(s) from $FILE_NAME: $list"
          )
        }
      } catch (e: Exception) {
        Tools.plugin.logger.log(
            Level.WARNING,
            "[SL3] Failed to load $FILE_NAME: ${e.message}",
            e,
        )
      }
    }
  }

  /** 指定したIDをダーティ集合に追加し、ファイルに永続化する。 新規に追加された場合のみファイルI/Oが発生する。 */
  fun markDirty(id: Int) {
    if (dirtyBuildIds.add(id)) {
      Tools.plugin.logger.warning("[SL3] Marked build ID $id as dirty for SQLite reconciliation.")
      persistDirtyIds()
    }
  }

  /**
   * 指定したIDをダーティ集合から削除し、ファイルに永続化する。 実際にダーティ集合に含まれていた場合のみファイルI/Oが発生する。 （正常系の書き込み成功時は常に set
   * に含まれないためファイルI/Oは発生しない）
   */
  fun markClean(id: Int) {
    missingDataRetries.remove(id)
    if (dirtyBuildIds.remove(id)) {
      Tools.plugin.logger.info("[SL3] Marked build ID $id as clean (removed from dirty set).")
      persistDirtyIds()
    }
  }

  fun isDirty(id: Int): Boolean = dirtyBuildIds.contains(id)

  fun getDirtyIds(): Set<Int> = dirtyBuildIds.toSet()

  fun getDirtyCount(): Int = dirtyBuildIds.size

  /** 負IDマイグレーション時に、ダーティ集合内のIDを新IDへマッピングして永続化する */
  fun remapMigratedIds(idMap: Map<Int, Int>) {
    val file = getFile()
    if (!file.exists()) return

    synchronized(fileLock) {
      try {
        val yml = CustomYamlFile(file)
        val list = yml.getIntegerList(KEY_DIRTY_IDS)
        if (list.isEmpty()) return

        val remapped = list.map { idMap[it] ?: it }.distinct()
        if (remapped != list) {
          dirtyBuildIds.clear()
          dirtyBuildIds.addAll(remapped)
          persistDirtyIds()
          Tools.plugin.logger.info("[SL3] Remapped dirty build IDs with migration map: $remapped")
        }
      } catch (e: Exception) {
        Tools.plugin.logger.log(
            Level.WARNING,
            "[SL3] Failed to remap dirty build IDs: ${e.message}",
            e,
        )
      }
    }
  }

  /** ダーティ集合をファイルに永続化する。 集合が空になった場合はファイルを削除する。 */
  private fun persistDirtyIds() {
    synchronized(fileLock) {
      try {
        val file = getFile()
        if (dirtyBuildIds.isEmpty()) {
          if (file.exists()) {
            file.delete()
          }
          return
        }

        file.parentFile?.mkdirs()
        val yml = YamlConfiguration()
        yml.set(KEY_DIRTY_IDS, dirtyBuildIds.toList().sorted())
        yml.save(file)
      } catch (e: IOException) {
        Tools.plugin.logger.log(
            Level.WARNING,
            "[SL3] Failed to persist dirty build IDs to $FILE_NAME: ${e.message}",
            e,
        )
      }
    }
  }

  /** 定期的なリコンシリエーションタスクを開始する */
  fun startPeriodicReconciliation(plugin: JavaPlugin) {
    periodicTask?.cancel()
    val intervalMinutes = plugin.config.getLong("reconcileIntervalMinutes", 10L).coerceAtLeast(1L)
    val intervalTicks = intervalMinutes * 60L * 20L

    periodicTask =
        Bukkit.getScheduler()
            .runTaskTimerAsynchronously(
                plugin,
                Runnable { reconcile(preferYaml = false) },
                intervalTicks,
                intervalTicks,
            )
  }

  fun stopPeriodicReconciliation() {
    periodicTask?.cancel()
    periodicTask = null
    isReconciling.set(false)
  }

  /**
   * ダーティ集合にある看板データを SQLite へ書き直す。 メインスレッド上でデータ取得・キャッシュ反映・スナップショット化を行い、SQLite への非同期書き込みキューへタスクを積む。
   * 大量のダーティデータがある場合でもメインスレッドを長時間ブロックしないよう、バッチ処理 (1tick あたり [BATCH_SIZE] 件) で実行する。
   *
   * @param preferYaml true の場合は起動時リコンシリエーションとして YAML を正とし、false の場合は稼働中定期リコンシリエーションとしてメモリを正とする。
   */
  fun reconcile(preferYaml: Boolean = false) {
    val plugin = Tools.plugin
    if (!plugin.isEnabled) return

    if (!isReconciling.compareAndSet(false, true)) {
      Tools.plugin.logger.info("[SL3] Reconciliation is already in progress. Skipping this run.")
      return
    }

    val currentDirty = getDirtyIds().toList()
    if (currentDirty.isEmpty()) {
      isReconciling.set(false)
      return
    }

    Tools.plugin.logger.info(
        "[SL3] Starting reconciliation for ${currentDirty.size} dirty build(s) (preferYaml=$preferYaml): $currentDirty"
    )

    val chunks = currentDirty.chunked(BATCH_SIZE)
    var chunkIndex = 0

    object : BukkitRunnable() {
          override fun run() {
            if (chunkIndex >= chunks.size) {
              isReconciling.set(false)
              cancel()
              return
            }

            val batch = chunks[chunkIndex++]
            for (id in batch) {
              try {
                processReconcileItem(id, preferYaml)
              } catch (e: Exception) {
                Tools.plugin.logger.log(
                    Level.WARNING,
                    "[SL3] Error reconciling build ID $id: ${e.message}",
                    e,
                )
              }
            }

            if (chunkIndex >= chunks.size) {
              isReconciling.set(false)
              cancel()
            }
          }
        }
        .runTaskTimer(plugin, 0L, 1L)
  }

  /** 単一IDのリコンシリエーション処理 (メインスレッド上で実行)。 */
  private fun processReconcileItem(id: Int, preferYaml: Boolean) {
    val data = Data.getLatestSLData(id, preferYaml = preferYaml)
    if (data == null) {
      val attempts = missingDataRetries.compute(id) { _, v -> (v ?: 0) + 1 } ?: 1
      if (attempts >= MAX_MISSING_RETRIES) {
        Tools.plugin.logger.severe(
            "[SL3] Reconciliation: build ID $id not found in memory or YAML after $attempts attempts. Giving up and removing from dirty set."
        )
        missingDataRetries.remove(id)
        markClean(id)
      } else {
        Tools.plugin.logger.severe(
            "[SL3] Reconciliation: build ID $id not found in memory or YAML (attempt $attempts/$MAX_MISSING_RETRIES). Keeping in dirty set for retry."
        )
      }
      return
    }

    missingDataRetries.remove(id)
    Data.applyReconciledData(data)

    SLDatabase.saveBuild(
        data,
        onFinalFailure = { ex ->
          Tools.plugin.logger.warning(
              "[SL3] Reconciliation write failed for build ID $id: ${ex.message}"
          )
          markDirty(id)
        },
    )
  }

  private fun getFile(): File = File(Tools.plugin.dataFolder, FILE_NAME)
}
