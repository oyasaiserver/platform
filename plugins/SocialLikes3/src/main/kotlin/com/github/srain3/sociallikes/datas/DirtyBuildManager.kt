package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.CustomYamlFile
import com.github.srain3.sociallikes.Tools
import java.io.File
import java.io.IOException
import java.util.concurrent.ConcurrentHashMap
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.plugin.java.JavaPlugin
import org.bukkit.scheduler.BukkitTask

object DirtyBuildManager {
  private const val FILE_NAME = "dirty-builds.yml"
  private const val KEY_DIRTY_IDS = "dirty-build-ids"

  private val dirtyBuildIds: MutableSet<Int> = ConcurrentHashMap.newKeySet()
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
    if (dirtyBuildIds.remove(id)) {
      Tools.plugin.logger.info("[SL3] Marked build ID $id as clean (removed from dirty set).")
      persistDirtyIds()
    }
  }

  fun isDirty(id: Int): Boolean = dirtyBuildIds.contains(id)

  fun getDirtyIds(): Set<Int> = dirtyBuildIds.toSet()

  fun getDirtyCount(): Int = dirtyBuildIds.size

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
                Runnable { reconcile() },
                intervalTicks,
                intervalTicks,
            )
  }

  fun stopPeriodicReconciliation() {
    periodicTask?.cancel()
    periodicTask = null
  }

  /** ダーティ集合にある看板データを SQLite へ書き直す。 メインスレッドをブロックせず、非同期書き込みキューへタスクを積む。 */
  fun reconcile() {
    val currentDirty = getDirtyIds()
    if (currentDirty.isEmpty()) return

    Tools.plugin.logger.info(
        "[SL3] Starting reconciliation for ${currentDirty.size} dirty build(s): $currentDirty"
    )

    for (id in currentDirty) {
      val data = Data.getLatestSLData(id)
      if (data == null) {
        Tools.plugin.logger.warning(
            "[SL3] Reconciliation: build ID $id not found in memory or YAML. Removing from dirty set."
        )
        markClean(id)
        continue
      }

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
  }

  private fun getFile(): File = File(Tools.plugin.dataFolder, FILE_NAME)
}
