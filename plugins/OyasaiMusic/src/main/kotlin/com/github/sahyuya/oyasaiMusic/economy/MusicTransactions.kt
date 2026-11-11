package com.github.sahyuya.oyasaiMusic.economy

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.db.EconomyJournal
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import java.io.StringReader
import java.io.StringWriter
import java.util.Properties
import java.util.UUID
import java.util.concurrent.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player

/** The journal owns retry admission. A lost completion is never permission to retry payment. */
class MusicTransactions(private val plugin: OyasaiMusic) {
  val journal = EconomyJournal(plugin.databaseManager)
  private val worker =
      ThreadPoolExecutor(
          1,
          1,
          0,
          TimeUnit.MILLISECONDS,
          ArrayBlockingQueue<Runnable>(64),
          ThreadFactory { Thread(it, "OyasaiMusic-Transactions").apply { isDaemon = true } },
          ThreadPoolExecutor.AbortPolicy(),
      )
  @Volatile private var closed = false

  fun initialize() = journal.initialize()

  fun close(): Boolean {
    closed = true
    worker.shutdown()
    // Only the database worker drains here. External completion and game-thread effects are
    // asynchronous and can be reconciled from their persisted phase after restart.
    return try {
      worker.awaitTermination(1, TimeUnit.SECONDS)
    } catch (_: InterruptedException) {
      Thread.currentThread().interrupt()
      false
    }
  }

  fun <T> async(action: () -> T): CompletableFuture<T> {
    if (closed) return CompletableFuture.failedFuture(IllegalStateException("Plugin stopped"))
    return try {
      CompletableFuture.supplyAsync(action, worker)
    } catch (e: RejectedExecutionException) {
      CompletableFuture.failedFuture(e)
    }
  }

  private fun <T> main(action: () -> T): CompletableFuture<T> {
    val result = CompletableFuture<T>()
    if (closed || !plugin.isEnabled)
        return CompletableFuture.failedFuture(IllegalStateException("Plugin stopped"))
    Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              if (closed || !plugin.isEnabled)
                  result.completeExceptionally(IllegalStateException("Plugin stopped"))
              else
                  try {
                    result.complete(action())
                  } catch (e: Exception) {
                    result.completeExceptionally(e)
                  }
            },
        )
    return result
  }

  private fun encode(values: Map<String, String>): String =
      StringWriter().also { w -> Properties().apply { putAll(values) }.store(w, null) }.toString()

  private fun decode(value: String) = Properties().apply { load(StringReader(value)) }

  fun purchase(player: Player, songId: Long, identity: String): CompletableFuture<String> {
    val owner = player.uniqueId
    val share = plugin.config.getDouble("economy.record-sale-author-share", 0.8).coerceIn(0.0, 1.0)
    return async {
          plugin.databaseManager.transaction {
            val song = requireNotNull(plugin.songRepository.findById(songId)) { "楽曲がありません" }
            check(song.recordIdentity == identity) { "楽曲が変更されました。画面を開き直してください" }
            val cost = requireNotNull(song.purchasePrice(owner)) { "非売品です" }.toLong()
            journal.create(
                owner,
                "PURCHASE",
                "yen",
                cost,
                encode(
                    mapOf(
                        "song" to songId.toString(),
                        "identity" to identity,
                        "title" to song.title,
                        "author" to song.authorUuid.toString(),
                        "material" to song.recordMaterial,
                        "share" to (cost * share).toLong().toString(),
                        "eligible" to song.isMonetizationEligible().toString(),
                    )
                ),
            )
          }
        }
        .thenCompose { execute(it) }
  }

  fun claim(player: Player): CompletableFuture<String> {
    val owner = player.uniqueId
    return async {
          plugin.databaseManager.transaction {
            val pending = plugin.userRepository.get(owner)
            buildList {
              if (pending.pendingMoney > 0)
                  add(journal.create(owner, "CLAIM", "yen", pending.pendingMoney, "yen", true))
              if (pending.pendingPoints > 0)
                  add(journal.create(owner, "CLAIM", "token", pending.pendingPoints, "token", true))
            }
          }
        }
        .thenCompose { entries ->
          if (entries.isEmpty()) CompletableFuture.completedFuture("受け取れる報酬はありません。")
          else {
            val jobs = entries.map { execute(it) }
            CompletableFuture.allOf(*jobs.toTypedArray()).thenApply {
              jobs.joinToString(" / ") { it.join() }
            }
          }
        }
  }

  internal fun payLikeReward(entry: EconomyJournal.Entry): CompletableFuture<String> {
    require(entry.kind == "LIKE")
    return execute(entry)
  }

  fun advertise(player: Player, songId: Long): CompletableFuture<String> =
      async {
            val song = requireNotNull(plugin.songRepository.findById(songId)) { "楽曲がありません" }
            check(song.published && !song.limitedPublication) { "通常公開中の楽曲だけ宣伝できます" }
            journal.create(
                player.uniqueId,
                "ADVERTISE",
                "token",
                10,
                encode(
                    mapOf(
                        "song" to songId.toString(),
                        "identity" to song.recordIdentity,
                        "title" to song.title,
                    )
                ),
            )
          }
          .thenCompose { execute(it) }

  private fun execute(e: EconomyJournal.Entry): CompletableFuture<String> =
      async { journal.transition(e.id, "PREPARED", "SUBMITTED") }
          .thenCompose {
            main {
                  if (Bukkit.getPlayer(e.owner)?.isOnline != true)
                      CompletableFuture.completedFuture<PayoutResult>(
                          PayoutResult.Unavailable("切断したため処理を中止しました")
                      )
                  else
                      plugin.economyService.transfer(
                          e.owner,
                          e.currency,
                          e.amount,
                          e.kind in setOf("PURCHASE", "ADVERTISE"),
                      )
                }
                .thenCompose { it }
          }
          .thenCompose { result ->
            async {
              when (result) {
                PayoutResult.Success -> journal.transition(e.id, "SUBMITTED", "PAID", "SUCCESS")
                is PayoutResult.Unknown ->
                    journal.transition(e.id, "SUBMITTED", "REVIEW", "UNKNOWN", result.reason)
                is PayoutResult.Failed -> journal.fail(e, "SUBMITTED", result.reason)
                is PayoutResult.Unavailable -> journal.fail(e, "SUBMITTED", result.reason)
              }
              result
            }
          }
          .thenCompose { result ->
            when (result) {
              PayoutResult.Success -> effects(e)
              is PayoutResult.Unknown ->
                  CompletableFuture.completedFuture("要照合: ${e.id}（${result.reason}）")
              is PayoutResult.Failed -> CompletableFuture.completedFuture(result.reason)
              is PayoutResult.Unavailable -> CompletableFuture.completedFuture(result.reason)
            }
          }
          .exceptionallyCompose { error -> review(e, error) }

  private fun review(e: EconomyJournal.Entry, error: Throwable): CompletableFuture<String> = async {
    val current = journal.get(e.id)
    if (current != null && current.phase !in setOf("DONE", "FAILED", "REVIEW"))
        journal.transition(
            e.id,
            current.phase,
            "REVIEW",
            note = "Operation interrupted: ${error.javaClass.simpleName}",
        )
    "処理結果の照合が必要です。取引ID: ${e.id}"
  }

  private fun effects(e: EconomyJournal.Entry): CompletableFuture<String> {
    if (e.kind in setOf("CLAIM", "LIKE"))
        return async {
          journal.completeReward(e)
          "${e.amount}${if(e.currency=="yen") "円" else "P"}を受け取りました。"
        }
    val data = decode(e.effect)
    return async {
          journal.beginDelivery(e) {
            plugin.recordSaleRepository.recordSale(
                data.getProperty("song").toLong(),
                e.owner,
                UUID.fromString(data.getProperty("author")),
                e.amount,
                data.getProperty("share").toLong(),
                data.getProperty("eligible").toBoolean(),
            )
          }
        }
        .thenCompose {
          main {
            if (e.kind == "PURCHASE") {
              val player =
                  requireNotNull(Bukkit.getPlayer(e.owner)?.takeIf { it.isOnline }) { "購入者が切断しました" }
              val material =
                  Material.matchMaterial(data.getProperty("material")) ?: Material.MUSIC_DISC_13
              val author =
                  Bukkit.getOfflinePlayer(UUID.fromString(data.getProperty("author"))).name ?: "不明"
              val item =
                  PhysicalRecordItem.create(
                      plugin,
                      material,
                      data.getProperty("song").toLong(),
                      data.getProperty("title"),
                      author,
                      data.getProperty("identity"),
                  )
              player.inventory.addItem(item).values.forEach {
                player.world.dropItemNaturally(player.location, it)
              }
            } else {
              val name = Bukkit.getOfflinePlayer(e.owner).name ?: "プレイヤー"
              val message =
                  Component.text("[OyasaiMusic] $name がリポスト: ", NamedTextColor.GRAY)
                      .append(
                          Component.text(
                                  "「${data.getProperty("title")}」 [クリックで開く]",
                                  NamedTextColor.AQUA,
                              )
                              .clickEvent(
                                  ClickEvent.runCommand("/mm open ${data.getProperty("song")}")
                              )
                      )
              val recipients =
                  Bukkit.getOnlinePlayers().filter { it.hasPermission("oyasaimusic.notify") }
              recipients.forEach { it.sendMessage(message) }
              plugin.soundEffectService.play(PluginSoundEffect.ADVERTISE, recipients)
            }
          }
        }
        .thenCompose {
          async {
            journal.transition(e.id, "EFFECTING", "DONE")
            if (e.kind == "PURCHASE") "レコードを受け取りました。" else "10Pを消費して宣伝しました。"
          }
        }
  }

  /** Explicit operator confirmation of an unperformed effect, not an external payment retry. */
  fun resume(id: String, actor: String, reason: String): CompletableFuture<String> =
      async {
            require(reason.isNotBlank() && reason.length <= 500)
            val e = requireNotNull(journal.get(id))
            check(e.phase == "MANUAL_PAID" && e.external == "SUCCESS") { "支払成功の確認済み取引ではありません" }
            plugin.databaseManager.transaction { c ->
              journal.transition(id, "MANUAL_PAID", "PAID")
              c.prepareStatement(
                      "INSERT INTO music_transaction_audit(transaction_id,actor,action,reason,created_at) VALUES(?,?,'resume-unperformed',?,?)"
                  )
                  .use { p ->
                    p.setString(1, id)
                    p.setString(2, actor)
                    p.setString(3, reason)
                    p.setLong(4, System.currentTimeMillis())
                    p.executeUpdate()
                  }
            }
            e
          }
          .thenCompose { effects(it).exceptionallyCompose { error -> review(it, error) } }
}
