package io.oyasai.chat.paper.japanize

import io.oyasai.chat.common.japanize.*
import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.OyasaiChatPlugin
import java.util.UUID
import java.util.concurrent.CompletableFuture
import org.bukkit.entity.Player

/** Owned by one runtime. Paper snapshots and commits are main-thread only; I/O never blocks it. */
class SourceMessageQueue(private val plugin: OyasaiChatPlugin) : AutoCloseable {
  private val ordered = OrderedSourceQueue()
  @Volatile private var closed = false
  private val dictionary = plugin.runtime.dictionary
  private val settings = plugin.runtime.config.japanize
  private val engine =
      LanguageEngine(
          settings,
          translate = GoogleTranslator(settings.timeoutMillis)::translate,
          convert = GoogleTransliterator(settings.timeoutMillis)::convert,
      )

  fun enqueue(player: Player, text: String, deliver: (ChatMessage) -> Unit) {
    check(plugin.server.isPrimaryThread)
    if (closed) return
    if (plugin.importInProgress) {
      player.sendMessage(
          plugin.runtime.formatter.error(
              "Player preferences are being imported; please try again shortly."
          )
      )
      return
    }
    if (text.length > MAX_PAYLOAD_LENGTH || text.isBlank()) {
      player.sendMessage(plugin.runtime.formatter.error("Message must contain 1–4096 characters."))
      return
    }
    val mode = plugin.runtime.states.get(player).languageMode
    val enabled = mode != "off"
    val localNames = plugin.server.onlinePlayers.map { it.name }
    val names =
        if (JapanizePreparation.eligible(text, settings, enabled))
            plugin.runtime.presence.snapshot() + localNames
        else localNames.toSet()
    val accepted =
        ordered.enqueue(player.uniqueId) {
          val done = CompletableFuture<Void>()
          engine.prepare(text, mode, names, dictionary.effective()).whenComplete { message, error ->
            runCatching {
                  val commit = Runnable {
                    try {
                      if (
                          !closed &&
                              player.isOnline &&
                              plugin.server.getPlayer(player.uniqueId) === player
                      ) {
                        val prepared = if (error == null) message else ChatMessage(text)
                        if (!prepared.isBlank()) deliver(prepared.copy(input = text))
                      }
                    } catch (failure: Exception) {
                      plugin.logger.warning("Unable to commit chat message: ${failure.message}")
                    } finally {
                      finishWhenPrivateIdle(player.uniqueId, done)
                    }
                  }
                  if (plugin.server.isPrimaryThread) commit.run()
                  else plugin.server.scheduler.runTask(plugin, commit)
                }
                .onFailure { done.complete(null) }
          }
          done
        }
    if (!accepted)
        player.sendMessage(
            plugin.runtime.formatter.error("Too many pending messages; please wait.")
        )
  }

  // Hold the source slot through remote reply resolution / PM acknowledgement so later sends cannot
  // overtake it.
  private fun finishWhenPrivateIdle(id: UUID, done: CompletableFuture<Void>) {
    if (!closed && plugin.runtime.privateMessages.hasPendingSource(id)) {
      plugin.server.scheduler.runTaskLater(plugin, Runnable { finishWhenPrivateIdle(id, done) }, 1L)
    } else done.complete(null)
  }

  private val speeches = RecentSpeech()

  fun indicator(
      message: ChatMessage,
      recipients: Collection<Player>,
  ): net.kyori.adventure.text.Component =
      speeches.indicator(
          judgmentSource(message),
          recipients.map { it.uniqueId }.toSet(),
      )

  fun check(player: Player, id: Long) {
    val text = speeches.text(id, player.uniqueId)
    if (text == null) {
      player.sendMessage(net.kyori.adventure.text.Component.text("古い発言なので判定できません"))
      return
    }
    if (!speeches.allow(player.uniqueId)) {
      player.sendMessage(net.kyori.adventure.text.Component.text("数秒待ってから判定してください"))
      return
    }
    engine.check(text).whenComplete { result, error ->
      runCatching {
        plugin.server.scheduler.runTask(
            plugin,
            Runnable {
              if (!closed && player.isOnline && plugin.server.getPlayer(player.uniqueId) === player)
                  player.sendMessage(
                      net.kyori.adventure.text.Component.text(
                          if (error == null) result else "[判定] 判定できませんでした"
                      )
                  )
            },
        )
      }
    }
  }

  fun forget(player: Player) {
    speeches.forget(player.uniqueId)
  }

  fun canReloadSafely(): Boolean = ordered.isIdle()

  override fun close() {
    closed = true
    ordered.close()
  }
}
