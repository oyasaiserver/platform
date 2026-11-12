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

  fun initialize() {
    journal.initialize()
    journal.unresolved().forEach {
      plugin.logger.warning(
          "Unresolved music transaction id=${it.id} kind=${it.kind} phase=${it.phase} external=${it.external}: ${it.note}"
      )
    }
  }

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

  fun advertise(player: Player, songId: Long, recordIdentity: String): CompletableFuture<String> =
      async {
            plugin.databaseManager.transaction {
              val song = requireNotNull(plugin.songRepository.findById(songId)) { "楽曲がありません" }
              check(song.recordIdentity == recordIdentity) { "楽曲が変更されました。画面を開き直してください" }
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
          .thenCompose { result -> settlePayment(e, result) }
          .exceptionallyCompose { error -> review(e, error) }

  private fun settlePayment(
      e: EconomyJournal.Entry,
      result: PayoutResult,
  ): CompletableFuture<String> =
      async {
            when (result) {
              PayoutResult.Success -> journal.transition(e.id, "SUBMITTED", "PAID", "SUCCESS")
              is PayoutResult.Unknown ->
                  journal.transition(e.id, "SUBMITTED", "REVIEW", "UNKNOWN", result.reason)
              is PayoutResult.Failed -> journal.fail(e, "SUBMITTED", result.reason)
              is PayoutResult.Unavailable -> journal.fail(e, "SUBMITTED", result.reason)
            }
          }
          .thenCompose {
            when (result) {
              PayoutResult.Success -> effects(e)
              is PayoutResult.Unknown -> {
                plugin.logger.warning("Music transaction ${e.id} (${e.kind}): ${result.reason}")
                CompletableFuture.completedFuture("取引結果を確認できませんでした。")
              }
              is PayoutResult.Failed -> CompletableFuture.completedFuture(result.reason)
              is PayoutResult.Unavailable -> CompletableFuture.completedFuture(result.reason)
            }
          }

  private fun review(e: EconomyJournal.Entry, error: Throwable): CompletableFuture<String> = async {
    val current = journal.get(e.id)
    if (current != null && current.phase !in setOf("DONE", "FAILED", "REVIEW"))
        journal.transition(
            e.id,
            current.phase,
            if (current.phase == "REFUNDING") "REFUND_REVIEW" else "REVIEW",
            note =
                "Operation interrupted: ${(error.cause ?: error).message ?: error.javaClass.simpleName}",
        )
    plugin.logger.warning(
        "Music transaction ${e.id} (${e.kind}, phase=${current?.phase}): ${(error.cause ?: error).message}"
    )
    "取引を完了できませんでした。"
  }

  private fun effects(e: EconomyJournal.Entry): CompletableFuture<String> {
    if (e.kind in setOf("CLAIM", "LIKE"))
        return async {
          journal.completeReward(e)
          "${e.amount}${if(e.currency=="yen") "円" else "P"}を受け取りました。"
        }
    val data = decode(e.effect)
    val songId = data.getProperty("song").toLong()
    val guarded = java.util.concurrent.atomic.AtomicBoolean()
    return async {
          plugin.databaseManager.transaction {
            val song = plugin.songRepository.findById(songId)
            val reason =
                when {
                  song == null -> "Song was deleted"
                  song.recordIdentity != data.getProperty("identity") -> "Song identity changed"
                  e.kind == "ADVERTISE" && (!song.published || song.limitedPublication) ->
                      "Song is no longer publicly listed"
                  else -> null
                }
            if (reason != null) {
              journal.transition(e.id, "PAID", "REFUNDING", note = reason)
              return@transaction reason
            }
            plugin.songRepository.beginDeliveryGuard(songId)
            guarded.set(true)
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
            null
          }
        }
        .thenCompose { reason ->
          if (reason != null) return@thenCompose refund(e, reason)
          main {
                if (e.kind == "PURCHASE") {
                  val player =
                      requireNotNull(Bukkit.getPlayer(e.owner)?.takeIf { it.isOnline }) {
                        "購入者が切断しました"
                      }
                  val material =
                      Material.matchMaterial(data.getProperty("material")) ?: Material.MUSIC_DISC_13
                  val author =
                      Bukkit.getOfflinePlayer(UUID.fromString(data.getProperty("author"))).name
                          ?: "不明"
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
              .thenCompose {
                async {
                  journal.transition(e.id, "EFFECTING", "DONE")
                  if (e.kind == "PURCHASE") "レコードを受け取りました。" else "10Pを消費して宣伝しました。"
                }
              }
        }
        .whenComplete { _, _ -> if (guarded.get()) plugin.songRepository.endDeliveryGuard(songId) }
  }

  private fun refund(e: EconomyJournal.Entry, reason: String): CompletableFuture<String> =
      main { plugin.economyService.transfer(e.owner, e.currency, e.amount, charge = false) }
          .thenCompose { it }
          .thenCompose { result ->
            async {
              if (result == PayoutResult.Success) {
                journal.transition(e.id, "REFUNDING", "DONE", note = "Refunded: $reason")
                plugin.logger.info("Refunded music transaction ${e.id}: $reason")
                "対象曲が変更されたため、支払額を返金しました。"
              } else {
                journal.transition(
                    e.id,
                    "REFUNDING",
                    "REFUND_REVIEW",
                    note = "Refund $result: $reason",
                )
                plugin.logger.warning("Music transaction ${e.id}: refund $result ($reason)")
                "返金の完了を確認できませんでした。"
              }
            }
          }
}
