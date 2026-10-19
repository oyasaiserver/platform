package io.oyasai.oyasaiAdminTools.assistant

import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import java.util.concurrent.TimeoutException
import java.util.concurrent.atomic.AtomicInteger
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.command.ConsoleCommandSender
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.HandlerList
import org.bukkit.event.Listener
import org.bukkit.event.server.ServerCommandEvent
import org.bukkit.plugin.Plugin

/**
 * Collects the output of one command run with [AssistantCommandSender].
 *
 * Commands may answer asynchronously (for example `/plugins` starts a task), so the collector keeps
 * listening after [AssistantCommandSender.dispatch] returns. It ends after [idleMillis] without a
 * new message, at [maxMillis] in total, or immediately when nothing arrived at all. Output sent
 * synchronously during dispatch is not waited for.
 *
 * [dispatch] blocks the calling (server main) thread, so call it off the main thread.
 */
internal class AssistantOutputCollector(
    private val plugin: Plugin,
    private val sender: AssistantCommandSender,
    private val idleMillis: Long,
    private val maxMillis: Long,
) : Listener {
  private val arrivals = AtomicInteger()
  private val consoleCommands = AtomicInteger()
  private val wake = CompletableFuture<Unit>()
  private val unsubscribe = sender.subscribe { arrivals.incrementAndGet() }

  fun dispatch(command: String): String {
    plugin.server.pluginManager.registerEvents(this, plugin)
    val started = System.nanoTime()
    try {
      sender.dispatch(command)
      var last = arrivals.get()
      while (true) {
        val elapsed = elapsedMillis(started)
        if (elapsed >= maxMillis) return report(timedOut = true)
        if (last == 0 && consoleCommands.get() == 0) return report(timedOut = false)
        try {
          wake.get(minOf(idleMillis, maxMillis - elapsed).coerceAtLeast(1), TimeUnit.MILLISECONDS)
        } catch (_: TimeoutException) {
          return report(timedOut = elapsedMillis(started) >= maxMillis)
        }
        val now = arrivals.get()
        if (now == last) return report(timedOut = elapsedMillis(started) >= maxMillis)
        last = now
      }
    } finally {
      HandlerList.unregisterAll(this)
    }
  }

  fun close() {
    unsubscribe()
    HandlerList.unregisterAll(this)
  }

  private fun elapsedMillis(started: Long) = (System.nanoTime() - started) / 1_000_000

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onServerCommand(event: ServerCommandEvent) {
    // A plugin may start a console command asynchronously from its command handler; give the
    // output one idle window while nothing has arrived yet.
    if (event.sender is ConsoleCommandSender && arrivals.get() == 0) {
      consoleCommands.incrementAndGet()
      wake.complete(Unit)
    }
  }

  private fun report(timedOut: Boolean): String {
    val summary =
        AssistantCommandOutput.Summary(
            lines =
                sender.messages().flatMap { PLAIN.serialize(PLAIN.deserialize(it)).split('\n') },
            dropped = sender.droppedMessages(),
            timedOut = timedOut,
        )
    plugin.logger.fine(
        "Assistant sender output: lines=${summary.lines.size} dropped=${summary.dropped} timedOut=$timedOut"
    )
    return AssistantCommandOutput.text(summary)
  }

  private companion object {
    val PLAIN = PlainTextComponentSerializer.plainText()
  }
}

/** The text handed to the AI for one execution. Pure, so the formatting can be tested. */
internal object AssistantCommandOutput {
  private const val MAX_CHARS = 8_000

  data class Summary(val lines: List<String>, val dropped: Int, val timedOut: Boolean)

  fun text(summary: Summary): String = buildString {
    val lines = summary.lines.filter { it.isNotBlank() }
    if (lines.isEmpty()) {
      append(if (summary.timedOut) "時間内に出力を取得できませんでした。" else "出力はありませんでした。")
    } else {
      append("AI専用の送り主で実行し、出力を取得しました（運営の画面には出していません）。\n")
      var used = 0
      val kept = mutableListOf<String>()
      for (line in lines) {
        val one = if (line.length > MAX_CHARS) line.take(MAX_CHARS) + "…" else line
        if (used + one.length + 1 > MAX_CHARS) {
          kept += "（以降の出力を省略）"
          break
        }
        kept += one
        used += one.length + 1
      }
      append(kept.joinToString("\n"))
      if (summary.timedOut) append("\n（時間内に出力が終わらなかったため、取得できた分まで）")
    }
    if (summary.dropped > 0) append("\n（ほかに${summary.dropped}件の出力が容量超過で省かれました）")
  }

  /** Returned when a player-only command runs through the operator instead. */
  fun playerOnly(): String =
      "このコマンドはプレイヤーでないと使えないため、運営本人の権限で実行しました。" + "結果は運営の画面に表示されます。AIは出力本文を取得していません。成功・条件達成は未確認です。"

  fun assistantCouldNotRun(): String = "AI専用の送り主で実行できませんでした（運営がオフラインか、権限を失っています）。実行していません。"
}
