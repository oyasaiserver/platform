// Minepacks 撤去後に削除する。本番移行とバックアップ復元後の dry-run で移行対象・保留・失敗・衝突が 0 になることが終了条件。
package icu.oyasai.utilities.backpack

import at.pcgamingfreaks.Minepacks.Bukkit.API.Backpack
import at.pcgamingfreaks.Minepacks.Bukkit.API.Callback
import at.pcgamingfreaks.Minepacks.Bukkit.API.MinepacksPlugin
import icu.oyasai.utilities.Main
import java.nio.charset.StandardCharsets
import java.nio.file.Files
import java.nio.file.StandardOpenOption
import java.util.UUID
import java.util.concurrent.ExecutorService
import java.util.concurrent.atomic.AtomicBoolean
import java.util.logging.Level
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.command.CommandSender
import org.bukkit.inventory.ItemStack

internal enum class MinepacksMigrationDisposition {
  EMPTY,
  TOO_LARGE,
  CONFLICT,
  MIGRATE,
}

internal fun classifyMinepacksBackpack(
    slotCount: Int,
    hasItems: Boolean,
    targetExists: Boolean,
): MinepacksMigrationDisposition =
    when {
      slotCount > MAX_MIGRATION_SLOTS -> MinepacksMigrationDisposition.TOO_LARGE
      !hasItems -> MinepacksMigrationDisposition.EMPTY
      targetExists -> MinepacksMigrationDisposition.CONFLICT
      else -> MinepacksMigrationDisposition.MIGRATE
    }

internal class MinepacksMigration
private constructor(
    private val plugin: Main,
    private val store: BackpackStore,
    private val ioExecutor: ExecutorService,
    private val sender: CommandSender,
    private val confirm: Boolean,
    private val targetBusy: (UUID) -> Boolean,
) {
  private val players = Bukkit.getOfflinePlayers()
  private val stats = Stats()
  private val collisions = mutableListOf<UUID>()
  private val failures = mutableListOf<String>()
  private val deferred = mutableListOf<UUID>()
  private var nextPlayer = 0
  private var remaining = players.size
  private var finishing = false

  private fun begin() {
    sender.sendMessage(
        "Minepacks 移行を開始します: mode=${if (confirm) "CONFIRM" else "DRY-RUN"}, 走査人数=${players.size}"
    )
    if (players.isEmpty()) finish() else scheduleBatch(0L)
  }

  private fun scheduleBatch(delay: Long) {
    plugin.server.scheduler.runTaskLater(plugin, Runnable(::scanBatch), delay)
  }

  private fun scanBatch() {
    repeat(BATCH_SIZE) {
      if (nextPlayer >= players.size) return@repeat
      val player = players[nextPlayer++]
      stats.scanned++
      request(player)
    }
    if (nextPlayer < players.size) scheduleBatch(1L) else finishIfComplete()
  }

  private fun request(player: OfflinePlayer) {
    val completed = AtomicBoolean(false)
    try {
      checkNotNull(MinepacksPlugin.getInstance()) { "Minepacks API is unavailable" }
          .getBackpack(
              player,
              object : Callback<Backpack> {
                override fun onResult(backpack: Backpack) {
                  onceOnMain(completed) { handleBackpack(player.uniqueId, backpack) }
                }

                override fun onFail() {
                  onceOnMain(completed, ::completePlayer)
                }
              },
              false,
          )
    } catch (failure: Exception) {
      onceOnMain(completed) { fail(player.uniqueId, "Minepacks read failed", failure) }
    }
  }

  private fun onceOnMain(completed: AtomicBoolean, action: () -> Unit) {
    if (!completed.compareAndSet(false, true)) return
    if (Bukkit.isPrimaryThread()) action()
    else plugin.server.scheduler.runTask(plugin, Runnable(action))
  }

  private fun handleBackpack(playerUuid: UUID, backpack: Backpack) {
    stats.withMinepacksData++
    val isOpen =
        try {
          backpack.isOpen
        } catch (failure: Exception) {
          fail(playerUuid, "Minepacks open state could not be read", failure)
          return
        }
    if (isOpen) {
      stats.deferred++
      deferred += playerUuid
      plugin.logger.warning("Minepacks migration deferred while backpack is open: $playerUuid")
      completePlayer()
      return
    }
    if (targetBusy(playerUuid)) {
      conflict(playerUuid)
      return
    }
    val contents =
        try {
          backpack.inventory.contents
        } catch (failure: Exception) {
          fail(playerUuid, "Minepacks contents could not be read", failure)
          return
        }
    when (
        classifyMinepacksBackpack(
            slotCount = contents.size,
            hasItems = contents.any { it != null && !it.type.isAir },
            targetExists = false,
        )
    ) {
      MinepacksMigrationDisposition.EMPTY -> {
        stats.empty++
        completePlayer()
      }
      MinepacksMigrationDisposition.TOO_LARGE ->
          fail(playerUuid, "Minepacks backpack has ${contents.size} slots")
      MinepacksMigrationDisposition.MIGRATE -> prepareTarget(playerUuid, contents)
      MinepacksMigrationDisposition.CONFLICT -> error("target was not checked yet")
    }
  }

  private fun prepareTarget(playerUuid: UUID, contents: Array<ItemStack?>) {
    val serialized =
        try {
          ItemStack.serializeItemsAsBytes(contents)
        } catch (failure: Exception) {
          fail(playerUuid, "Minepacks contents could not be serialized", failure)
          return
        }

    if (!confirm) {
      submitIo(playerUuid, { store.load(playerUuid) != null }) { targetExists ->
        when (
            classifyMinepacksBackpack(
                contents.size,
                hasItems = true,
                targetExists = targetExists,
            )
        ) {
          MinepacksMigrationDisposition.CONFLICT -> conflict(playerUuid)
          MinepacksMigrationDisposition.MIGRATE -> migrated()
          else -> error("backpack changed after serialization")
        }
      }
      return
    }

    submitIo(
        playerUuid,
        action = {
          if (!store.insertIfAbsent(playerUuid, serialized)) DatabaseResult.Conflict
          else {
            try {
              DatabaseResult.Inserted(checkNotNull(store.load(playerUuid)))
            } catch (failure: Exception) {
              runCatching { store.delete(playerUuid) }
              throw failure
            }
          }
        },
    ) { result ->
      when (result) {
        DatabaseResult.Conflict -> conflict(playerUuid)
        is DatabaseResult.Inserted -> verify(playerUuid, contents, result.contents)
      }
    }
  }

  private fun verify(playerUuid: UUID, expected: Array<ItemStack?>, stored: ByteArray) {
    val failure =
        runCatching {
              val actual = ItemStack.deserializeItemsFromBytes(stored)
              check(expected.contentEquals(actual)) { "round-trip contents differ" }
            }
            .exceptionOrNull()
    if (failure == null) {
      migrated()
      return
    }
    submitIo(playerUuid, { store.delete(playerUuid) }) {
      fail(playerUuid, "Saved row failed verification and was deleted", failure)
    }
  }

  private fun migrated() {
    stats.migrated++
    completePlayer()
  }

  private fun conflict(playerUuid: UUID) {
    stats.conflicts++
    collisions += playerUuid
    plugin.logger.warning("Minepacks migration conflict: $playerUuid")
    completePlayer()
  }

  private fun fail(playerUuid: UUID, message: String, failure: Throwable? = null) {
    stats.failures++
    val detail = "$playerUuid $message${failure?.message?.let { ": $it" } ?: ""}"
    failures += detail
    if (failure == null) plugin.logger.severe("Minepacks migration failed: $detail")
    else plugin.logger.log(Level.SEVERE, "Minepacks migration failed: $detail", failure)
    completePlayer()
  }

  private fun completePlayer() {
    remaining--
    finishIfComplete()
  }

  private fun finishIfComplete() {
    if (nextPlayer == players.size && remaining == 0) finish()
  }

  private fun finish() {
    if (finishing) return
    finishing = true
    try {
      ioExecutor.execute {
        val reportFailure = runCatching { writeReports() }.exceptionOrNull()
        plugin.server.scheduler.runTask(
            plugin,
            Runnable {
              reportFailure?.let {
                plugin.logger.log(Level.SEVERE, "Failed to write Minepacks migration reports.", it)
              }
              val migratedLabel = if (confirm) "移行成功" else "移行対象(dry-run)"
              val summary =
                  "Minepacks 移行完了: 走査人数=${stats.scanned}, Minepacksデータあり=${stats.withMinepacksData}, $migratedLabel=${stats.migrated}, 空=${stats.empty}, 衝突=${stats.conflicts}, 開いていたため保留=${stats.deferred}, 失敗=${stats.failures}"
              running.set(false)
              plugin.logger.info(summary)
              sender.sendMessage(summary)
            },
        )
      }
    } catch (failure: Exception) {
      plugin.logger.log(Level.SEVERE, "Failed to finish Minepacks migration.", failure)
      running.set(false)
    }
  }

  private fun writeReports() {
    plugin.dataFolder.mkdirs()
    writeReport("minepacks-migration-collisions.txt", collisions.map(UUID::toString))
    writeReport("minepacks-migration-failures.txt", failures)
    writeReport("minepacks-migration-deferred.txt", deferred.map(UUID::toString))
  }

  private fun writeReport(name: String, lines: List<String>) {
    val text = if (lines.isEmpty()) "" else lines.joinToString(separator = "\n", postfix = "\n")
    Files.writeString(
        plugin.dataFolder.toPath().resolve(name),
        text,
        StandardCharsets.UTF_8,
        StandardOpenOption.CREATE,
        StandardOpenOption.TRUNCATE_EXISTING,
    )
  }

  private fun <T> submitIo(
      playerUuid: UUID,
      action: () -> T,
      onSuccess: (T) -> Unit,
  ) {
    try {
      ioExecutor.execute {
        val result = runCatching(action)
        plugin.server.scheduler.runTask(
            plugin,
            Runnable {
              result.fold(
                  onSuccess = onSuccess,
                  onFailure = { fail(playerUuid, "Oyasai backpack database operation failed", it) },
              )
            },
        )
      }
    } catch (failure: Exception) {
      fail(playerUuid, "Oyasai backpack database operation could not be queued", failure)
    }
  }

  private data class Stats(
      var scanned: Int = 0,
      var withMinepacksData: Int = 0,
      var migrated: Int = 0,
      var empty: Int = 0,
      var conflicts: Int = 0,
      var deferred: Int = 0,
      var failures: Int = 0,
  )

  private sealed interface DatabaseResult {
    data object Conflict : DatabaseResult

    data class Inserted(val contents: ByteArray) : DatabaseResult
  }

  companion object {
    private const val BATCH_SIZE = 25
    private val running = AtomicBoolean(false)

    fun start(
        plugin: Main,
        store: BackpackStore,
        ioExecutor: ExecutorService,
        sender: CommandSender,
        confirm: Boolean,
        targetBusy: (UUID) -> Boolean,
    ): Boolean {
      if (!running.compareAndSet(false, true)) return false
      MinepacksMigration(plugin, store, ioExecutor, sender, confirm, targetBusy).begin()
      return true
    }
  }
}

private const val MAX_MIGRATION_SLOTS = 54
