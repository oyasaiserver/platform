package com.github.srain3.sociallikes.datas

import com.github.srain3.sociallikes.Events
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import java.util.ArrayDeque
import java.util.concurrent.atomic.AtomicBoolean
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.block.Sign
import org.bukkit.command.CommandSender
import org.bukkit.scheduler.BukkitRunnable

/** Rewrites only the chunks listed by active build records; it never scans a whole world. */
object SignPdcMigration {
  private const val MAX_CHUNK_LOADS_PER_TICK = 8
  private const val MAX_IN_FLIGHT_CHUNKS = 24
  private const val PROGRESS_INTERVAL = 500
  private val running = AtomicBoolean(false)

  private data class ChunkTargets(
      val worldName: String,
      val chunkX: Int,
      val chunkZ: Int,
      val targets: List<SLDatabase.SignPdcTarget>,
  )

  private data class Summary(
      val targetCount: Int,
      var rewritten: Int = 0,
      var alreadyCurrent: Int = 0,
      var orphaned: Int = 0,
      var worldUnloaded: Int = 0,
      var errors: Int = 0,
  ) {
    val completed: Int
      get() = rewritten + alreadyCurrent + orphaned + worldUnloaded + errors

    fun message(): String =
        "対象=$targetCount 書換=$rewritten 既に新ID=$alreadyCurrent 看板なし=$orphaned " +
            "ワールド未ロード=$worldUnloaded エラー=$errors"
  }

  fun start(sender: CommandSender) {
    if (!running.compareAndSet(false, true)) {
      sender.sendMessage(Tools.socialLikesLOGO + " &e看板PDC書換は既に実行中です。".color())
      return
    }

    sender.sendMessage(Tools.socialLikesLOGO + " &e看板PDC書換の対象をSQLiteから読込中です。".color())
    SLDatabase.loadSignPdcMigrationInputAsync(
        onSuccess = { input ->
          Bukkit.getScheduler().runTask(Tools.plugin, Runnable { beginOnMainThread(sender, input) })
        },
        onFailure = { error ->
          Bukkit.getScheduler()
              .runTask(
                  Tools.plugin,
                  Runnable {
                    running.set(false)
                    val message =
                        "看板PDC書換の対象読込に失敗しました: ${error.message ?: error.javaClass.simpleName}"
                    Tools.plugin.logger.severe("[SL3] $message")
                    sender.sendMessage(Tools.socialLikesLOGO + " &c$message".color())
                  },
              )
        },
    )
  }

  private fun beginOnMainThread(sender: CommandSender, input: SLDatabase.SignPdcMigrationInput) {
    val chunks =
        input.targets
            .groupBy { Triple(it.worldName, it.chunkX, it.chunkZ) }
            .map { (key, targets) -> ChunkTargets(key.first, key.second, key.third, targets) }
    val summary = Summary(targetCount = input.targets.size)
    val pending = ArrayDeque(chunks)
    val runner = Runner(sender, pending, input.idMigrationMap, summary)
    Tools.plugin.logger.info(
        "[SL3] Sign PDC rewrite started: targets=${summary.targetCount}, chunks=${chunks.size}"
    )
    sender.sendMessage(
        Tools.socialLikesLOGO +
            " &e看板PDC書換を開始しました: 対象=${summary.targetCount}, チャンク=${chunks.size}".color()
    )
    runner.runTaskTimer(Tools.plugin, 1L, 1L)
  }

  private class Runner(
      private val sender: CommandSender,
      private val pending: ArrayDeque<ChunkTargets>,
      private val migrationMap: Map<Int, Int>,
      private val summary: Summary,
  ) : BukkitRunnable() {
    private var inFlight = 0
    private var lastProgress = 0

    override fun run() {
      var launched = 0
      while (
          launched < MAX_CHUNK_LOADS_PER_TICK &&
              inFlight < MAX_IN_FLIGHT_CHUNKS &&
              pending.isNotEmpty()
      ) {
        val chunkTargets = pending.removeFirst()
        val world = Bukkit.getWorld(chunkTargets.worldName)
        if (world == null) {
          summary.worldUnloaded += chunkTargets.targets.size
          launched++
          continue
        }
        inFlight++
        launched++
        world.getChunkAtAsync(chunkTargets.chunkX, chunkTargets.chunkZ, true).whenComplete {
            _,
            error ->
          Bukkit.getScheduler()
              .runTask(
                  Tools.plugin,
                  Runnable {
                    try {
                      if (error != null) {
                        summary.errors += chunkTargets.targets.size
                        Tools.plugin.logger.warning(
                            "[SL3] Sign PDC rewrite chunk load failed: ${chunkTargets.worldName} ${chunkTargets.chunkX},${chunkTargets.chunkZ}: ${error.message}"
                        )
                      } else {
                        rewriteChunk(world, chunkTargets)
                      }
                    } catch (e: Exception) {
                      summary.errors += chunkTargets.targets.size
                      Tools.plugin.logger.warning(
                          "[SL3] Sign PDC rewrite chunk processing failed: ${chunkTargets.worldName} ${chunkTargets.chunkX},${chunkTargets.chunkZ}: ${e.message}"
                      )
                    } finally {
                      inFlight--
                      reportProgressIfNeeded()
                      finishIfDone()
                    }
                  },
              )
        }
      }
      reportProgressIfNeeded()
      finishIfDone()
    }

    private fun rewriteChunk(world: World, chunkTargets: ChunkTargets) {
      chunkTargets.targets.forEach { target ->
        try {
          val sign = world.getBlockAt(target.blockX, target.blockY, target.blockZ).state as? Sign
          if (sign == null) {
            summary.orphaned++
            return@forEach
          }
          val rawId =
              sign.persistentDataContainer.get(
                  Events.idKey,
                  org.bukkit.persistence.PersistentDataType.INTEGER,
              )
          if (rawId == null) {
            summary.orphaned++
            return@forEach
          }
          when {
            rawId == target.id -> {
              Events.markSignIdGeneration2(sign, target.id)
              summary.alreadyCurrent++
            }
            migrationMap[rawId] == target.id -> {
              Events.markSignIdGeneration2(sign, target.id)
              summary.rewritten++
            }
            else -> {
              summary.errors++
              Tools.plugin.logger.warning(
                  "[SL3] Sign PDC rewrite ID mismatch for target ID:${target.id} at " +
                      "${target.worldName} ${target.blockX},${target.blockY},${target.blockZ}: PDC=$rawId"
              )
            }
          }
        } catch (e: Exception) {
          summary.errors++
          Tools.plugin.logger.warning(
              "[SL3] Sign PDC rewrite failed for ID:${target.id} at ${target.worldName} ${target.blockX},${target.blockY},${target.blockZ}: ${e.message}"
          )
        }
      }
    }

    private fun reportProgressIfNeeded() {
      if (
          summary.completed - lastProgress < PROGRESS_INTERVAL &&
              !(pending.isEmpty() && inFlight == 0)
      )
          return
      lastProgress = summary.completed
      Tools.plugin.logger.info("[SL3] Sign PDC rewrite progress: ${summary.message()}")
    }

    private fun finishIfDone() {
      if (pending.isNotEmpty() || inFlight != 0) return
      cancel()
      running.set(false)
      val message = "看板PDC書換完了: ${summary.message()}"
      Tools.plugin.logger.info("[SL3] $message")
      sender.sendMessage(Tools.socialLikesLOGO + " &a$message".color())
    }
  }
}
