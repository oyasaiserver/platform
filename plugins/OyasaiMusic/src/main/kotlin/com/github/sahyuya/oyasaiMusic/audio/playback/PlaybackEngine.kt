package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.Song
import com.github.sahyuya.oyasaiMusic.resourcepack.OyasaiResourcePackService
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin

/** Find the first note OMMT can acknowledge, without rescanning the played prefix. */
internal fun firstAudibleAtOrAfter(notes: List<Pair<Int, NoteEvent>>, positionMs: Int): Int? {
  var low = 0
  var high = notes.size
  while (low < high) {
    val middle = low + (high - low) / 2
    if (notes[middle].second.timeMs < positionMs) low = middle + 1 else high = middle
  }
  while (low < notes.size) {
    val note = notes[low++].second
    if (note.volume > 0) return note.timeMs
  }
  return null
}

internal fun canFinishPlayback(
    allNotesDispatched: Boolean,
    elapsedMs: Long,
    durationMs: Int,
    awaitingStartAck: Boolean,
): Boolean = allNotesDispatched && elapsedMs >= durationMs.toLong() + 50L && !awaitingStartAck

internal fun hasLocalPlaybackSlot(
    ambient: Boolean,
    ambientCount: Int,
    personalCount: Int,
): Boolean =
    if (ambient) ambientCount < 7 && ambientCount + personalCount < 8
    else personalCount == 0 && ambientCount < 8

/** One bounded game-thread cursor per session; buffered clients dispatch their own notes. */
class PlaybackEngine(
    private val plugin: Plugin,
    private val bedrockPrefix: String,
    private val chordLimit: Int,
    private val defaultMode: PlaybackMode = PlaybackMode.DEFAULT,
) {

  /** [pause]/[resume] による再スケジュールに必要な、セッションごとの再生文脈。 */
  private data class PlaybackContext(
      val song: Song,
      val scaledNotes: List<Pair<Int, NoteEvent>>,
      val bedrockSurvivingIndices: Set<Int>,
      val totalDurationMs: Int,
      val mode: PlaybackMode,
      val modeResolver: ((Player) -> PlaybackMode?)?,
      val onListenThresholdReached: ((Player, Song) -> Unit)?,
      val onCompletion: ((PlaybackSession) -> Unit)?,
      val audio: PlaybackPreparation.Audio?,
      var cursor: Int = 0,
      var thresholdDelivered: Boolean = false,
  )

  private val contexts = ConcurrentHashMap<UUID, PlaybackContext>()
  private val liveSessions = ConcurrentHashMap<UUID, PlaybackSession>()

  /**
   * 楽曲を指定リスナー群に対して再生する。
   *
   * @param notes 再生する音符列（[SongAudioFile.read] の結果等）
   * @param recipients 再生対象プレイヤー（個人プレイヤー再生なら1人、環境BGMなら範囲内の複数人）
   * @param playbackBpm 再生速度の基準となるBPM。song.bpmと異なる場合、ノート間隔を比例縮小/拡大する
   * @param onListenThresholdReached 各リスナーが総演奏時間の80%まで聴き終えた時点で呼ばれる
   * @param onCompletion 再生が最後まで完了した時点で呼ばれる（一時停止中は呼ばれない）
   * @param mode [modeResolver] が指定されない場合、または該当リスナーの解決結果が無い場合に使う既定の再生方式
   * @param modeResolver リスナーごとの再生方式を解決する関数（楽曲詳細GUIでの個人設定を反映する想定）。 nullを返した場合は [mode] にフォールバックする。
   */
  fun play(
      song: Song,
      notes: List<NoteEvent>,
      recipients: Collection<Player>,
      playbackBpm: Int = song.bpm,
      onListenThresholdReached: ((Player, Song) -> Unit)? = null,
      onCompletion: ((PlaybackSession) -> Unit)? = null,
      mode: PlaybackMode = defaultMode,
      modeResolver: ((Player) -> PlaybackMode?)? = null,
      prepared: PlaybackBuffer.PreparedV2? = null,
      preparedAudio: PlaybackPreparation.Audio? = null,
      ambient: Boolean = false,
  ): PlaybackSession {
    val session = PlaybackSession(song = song, initialRecipients = recipients)
    if (notes.isEmpty() || recipients.isEmpty()) {
      return session
    }
    session.ambient = ambient
    liveSessions[session.sessionId] = session

    val scale = if (playbackBpm > 0) song.bpm.toDouble() / playbackBpm else 1.0
    val scaledNotes: List<Pair<Int, NoteEvent>> =
        preparedAudio?.takeIf { scale == 1.0 }?.indexed
            ?: notes
                .mapIndexed { index, note ->
                  index to note.copy(timeMs = (note.timeMs * scale).toInt())
                }
                .sortedBy { it.second.timeMs }
    val bedrockSurvivingIndices =
        preparedAudio?.takeIf { scale == 1.0 }?.bedrock
            ?: computeBedrockSurvivingIndices(scaledNotes)
    val totalDurationMs = scaledNotes.lastOrNull()?.second?.timeMs ?: 0

    // The payload carries the resolved default/positional mode. Bedrock clients and dynamic
    // per-recipient mode resolution stay on the server's ordinary path.
    val preparedPayload = prepared
    val buffered =
        if (preparedPayload != null && modeResolver == null && plugin is OyasaiMusic) {
          recipients.filter { player ->
            !BedrockUtil.isBedrock(player, bedrockPrefix) &&
                plugin.ommtPlaybackClientRegistry.supportsV2(player.uniqueId)
          }
        } else {
          emptyList()
        }
    session.start()
    contexts[session.sessionId] =
        PlaybackContext(
            song = song,
            audio = preparedAudio,
            scaledNotes = scaledNotes,
            bedrockSurvivingIndices = bedrockSurvivingIndices,
            totalDurationMs = totalDurationMs,
            mode = mode,
            modeResolver = modeResolver,
            onListenThresholdReached = onListenThresholdReached,
            onCompletion = onCompletion,
        )

    schedulePlayback(session)
    if (buffered.isNotEmpty()) queueBuffered(session, buffered, preparedPayload!!)
    if (ambient) recipients.forEach { offerAmbient(session, it) }
    return session
  }

  /** 一時停止: 未発火のスケジュール済みタスクを全てキャンセルし、経過時間だけを保持する。 */
  fun pause(session: PlaybackSession) {
    if (session.isCancelled || session.isPaused) return
    session.markPaused()
    session.playbackTask?.cancel()
    session.playbackTask = null
    // A not-yet-started buffer has no PAUSE state on the client. Invalidate it so
    // READY arriving during pause cannot launch audio; resume uses ordinary Paper.
    routes.keys.filter { it.first == session.sessionId }.toList().forEach { cancelRoute(it, true) }
    sendControl(session, PlaybackBuffer.TYPE_PAUSE) {
      writeInt(session.elapsedPlaybackMs().coerceAtMost(Int.MAX_VALUE.toLong()).toInt())
    }
  }

  /** 再開: 一時停止した時点の経過時間から、残りの音符・コールバックを再スケジュールする。 */
  fun resume(session: PlaybackSession) {
    if (session.isCancelled || !session.isPaused) return
    session.markResumed()
    val resumedPosition = session.elapsedPlaybackMs().coerceAtMost(Int.MAX_VALUE.toLong()).toInt()
    sendControl(session, PlaybackBuffer.TYPE_RESUME) {
      writeInt(500)
      writeInt(resumedPosition)
    }
    schedulePlayback(session)
  }

  fun stop(session: PlaybackSession) {
    routes.keys.filter { it.first == session.sessionId }.toList().forEach { cancelRoute(it, true) }
    contexts.remove(session.sessionId)
    liveSessions.remove(session.sessionId)
    sendControl(session, PlaybackBuffer.TYPE_STOP)
    (plugin as? OyasaiMusic)?.ommtPlaybackClientRegistry?.let { registry ->
      session.wireIds.forEach { (player, wire) -> registry.releasePlayback(player, wire) }
    }
    session.ackPendingRecipients.clear()
    session.ackDeadlinesMillis.clear()
    session.cancel()
  }

  /**
   * Switches a current-generation local recipient back to Paper after an authenticated
   * CLIENT_PLAYBACK_FAILED message. The client-reported position is intentionally not trusted;
   * already scheduled server groups continue from the server's monotonic session position.
   */
  fun handleClientPlaybackFailure(playerId: UUID, sessionId: UUID) {
    check(Bukkit.isPrimaryThread())
    val session = liveSessions.values.firstOrNull { it.wireIds[playerId] == sessionId } ?: return
    enterPaperFallback(session, playerId, plugin as? OyasaiMusic)
  }

  fun shutdown() {
    routes.keys.toList().forEach { cancelRoute(it, true) }
    transferTask?.cancel()
    transferTask = null
    // STOP is sent before the packet channel is unregistered.
    liveSessions.values.forEach { session ->
      sendControl(session, PlaybackBuffer.TYPE_STOP)
      (plugin as? OyasaiMusic)?.ommtPlaybackClientRegistry?.let { registry ->
        session.wireIds.forEach { (player, wire) -> registry.releasePlayback(player, wire) }
      }
      session.cancel()
    }
    liveSessions.clear()
    contexts.clear()
  }

  /** Constant task count; cursor and once-only threshold survive pause/resume. */
  private fun schedulePlayback(session: PlaybackSession) {
    val ctx = contexts[session.sessionId] ?: return
    session.playbackTask?.cancel()
    session.playbackTask =
        Bukkit.getScheduler()
            .runTaskTimer(
                plugin,
                Runnable {
                  if (
                      session.isCancelled ||
                          session.isPaused ||
                          contexts[session.sessionId] !== ctx ||
                          !session.hasStarted()
                  )
                      return@Runnable
                  val elapsed = session.elapsedPlaybackMs()
                  if (diagnose) {
                    val next = ctx.scaledNotes.getOrNull(ctx.cursor)?.second?.timeMs
                    if (next != null && elapsed >= next) {
                      maxServerCursorDelayMs = maxOf(maxServerCursorDelayMs, elapsed - next)
                    }
                  }
                  var examined = 0
                  while (
                      ctx.cursor < ctx.scaledNotes.size &&
                          ctx.scaledNotes[ctx.cursor].second.timeMs <= elapsed &&
                          examined < 4096
                  ) {
                    val (index, note) = ctx.scaledNotes[ctx.cursor++]
                    examined++
                    if (note.volume > 0)
                        dispatch(
                            note,
                            index in ctx.bedrockSurvivingIndices,
                            session,
                            ctx.mode,
                            ctx.modeResolver,
                            if (ctx.audio != null) ctx.audio.extended[index]
                            else
                                (plugin as? OyasaiMusic)?.resourcePackService?.let { packs ->
                                  packs.playbackTemplate()?.let {
                                    OyasaiResourcePackService.resolveExtendedPlayback(note, it)
                                  }
                                },
                        )
                  }
                  if (!ctx.thresholdDelivered && elapsed >= (ctx.totalDurationMs * 0.8).toLong()) {
                    ctx.thresholdDelivered = true
                    session.recipients.forEach { uuid ->
                      Bukkit.getPlayer(uuid)
                          ?.takeIf { it.isOnline }
                          ?.let { ctx.onListenThresholdReached?.invoke(it, ctx.song) }
                    }
                  }
                  if (session.isCancelled || session.isPaused) return@Runnable
                  // A late handoff may start with the last audible note. Let the transfer pump
                  // consume its ACK or enforce its existing deadline before releasing the session.
                  if (
                      canFinishPlayback(
                          ctx.cursor == ctx.scaledNotes.size,
                          elapsed,
                          ctx.totalDurationMs,
                          session.ackPendingRecipients.isNotEmpty(),
                      )
                  ) {
                    session.playbackTask?.cancel()
                    session.playbackTask = null
                    routes.keys
                        .filter { it.first == session.sessionId }
                        .toList()
                        .forEach { cancelRoute(it, true) }
                    contexts.remove(session.sessionId)
                    liveSessions.remove(session.sessionId)
                    (plugin as? OyasaiMusic)?.ommtPlaybackClientRegistry?.let { registry ->
                      session.wireIds.forEach { (player, wire) ->
                        registry.releasePlayback(player, wire)
                      }
                    }
                    session.outboundTasks.forEach { it.cancel() }
                    session.outboundTasks.clear()
                    ctx.onCompletion?.invoke(session)
                  }
                },
                0L,
                1L,
            )
  }

  private fun dispatch(
      note: NoteEvent,
      bedrock: Boolean,
      session: PlaybackSession,
      fallbackMode: PlaybackMode,
      modeResolver: ((Player) -> PlaybackMode?)?,
      extended: OyasaiResourcePackService.ExtendedPlayback?,
  ) {
    if (session.isCancelled || session.isPaused) return
    for (uuid in session.recipients) {
      val player = Bukkit.getPlayer(uuid) ?: continue
      if (!player.isOnline) continue
      if (
          note.timeMs >= (session.cutovers[uuid] ?: Int.MAX_VALUE) &&
              uuid in session.ackPendingRecipients
      )
          continue
      if (uuid in session.bufferedRecipients) {
        val stillCapable =
            (plugin as? OyasaiMusic)?.ommtPlaybackClientRegistry?.isCapable(uuid) == true
        if (stillCapable && note.timeMs >= (session.cutovers[uuid] ?: 0)) continue
        if (stillCapable) {
          playRecipient(
              player,
              note,
              modeResolver?.invoke(player) ?: fallbackMode,
              BedrockUtil.isBedrock(player, bedrockPrefix),
              true,
              extended,
          )
          continue
        }
        session.bufferedRecipients.remove(uuid)
        session.paperFallbackRecipients += uuid
        (plugin as? OyasaiMusic)
            ?.ommtPlaybackClientRegistry
            ?.releasePlayback(uuid, session.wireIds[uuid] ?: session.sessionId)
      }
      val isBedrockPlayer = BedrockUtil.isBedrock(player, bedrockPrefix)
      if (isBedrockPlayer && !bedrock) continue // 和音間引きでこのプレイヤー種別からは間引かれた音
      val mode = modeResolver?.invoke(player) ?: fallbackMode
      playRecipient(
          player,
          note,
          mode,
          isBedrockPlayer,
          allowExtended = uuid !in session.paperFallbackRecipients,
          extended = extended,
      )
    }
  }

  private fun playRecipient(
      player: Player,
      note: NoteEvent,
      mode: PlaybackMode,
      bedrock: Boolean,
      allowExtended: Boolean,
      extended: OyasaiResourcePackService.ExtendedPlayback?,
  ) {
    val permitted =
        extended != null &&
            allowExtended &&
            (plugin as? OyasaiMusic)?.resourcePackService?.isLoaded(player.uniqueId) == true
    SoundDispatcher.play(
        player,
        note,
        mode,
        isBedrock = bedrock,
        extended = extended.takeIf { permitted },
    )
    if (diagnose) serverDispatches++
  }

  private data class Transfer(
      val session: PlaybackSession,
      val player: UUID,
      val payload: PlaybackBuffer.PreparedV2,
      val wireId: UUID,
      val expires: Long,
      var sequence: Int = 0,
      var first: Int? = null,
  )

  private val routes = linkedMapOf<Pair<UUID, UUID>, Transfer>()
  private var transferTask: org.bukkit.scheduler.BukkitTask? = null
  private var rotation = 0
  private val diagnose =
      (plugin as? OyasaiMusic)?.config?.getBoolean("playback.diagnostics") == true
  private var chunksSent = 0L
  private var chunkBytes = 0L
  private var confirmedStarts = 0L
  private var serverDispatches = 0L
  private var maxServerCursorDelayMs = 0L
  private val fallbackCounts = linkedMapOf<String, Long>()

  private fun countFallback(reason: String) {
    if (diagnose) fallbackCounts[reason] = (fallbackCounts[reason] ?: 0) + 1
  }

  fun diagnostics(): String =
      "sessions=${liveSessions.size} transfers=${routes.size} localStarts=$confirmedStarts " +
          "chunks=$chunksSent chunkBytes=$chunkBytes serverDispatches=$serverDispatches " +
          "maxServerCursorDelayMs=$maxServerCursorDelayMs " +
          "fallback=$fallbackCounts"

  private fun queueBuffered(
      session: PlaybackSession,
      recipients: List<Player>,
      prepared: PlaybackBuffer.PreparedV2,
  ) {
    val server = plugin as? OyasaiMusic ?: return
    recipients.forEach { player ->
      val key = session.sessionId to player.uniqueId
      if (
          routes.containsKey(key) ||
              player.uniqueId in session.bufferedRecipients ||
              routes.size >= 256
      )
          return@forEach
      val active =
          liveSessions.values.filter {
            player.uniqueId in it.bufferedRecipients ||
                player.uniqueId in it.bufferCandidates ||
                player.uniqueId in it.ackPendingRecipients
          }
      val ambientCount = active.count { it.ambient }
      if (!hasLocalPlaybackSlot(session.ambient, ambientCount, active.size - ambientCount)) {
        countFallback("session-limit")
        return@forEach
      }
      val expires = System.currentTimeMillis() + 30_000L
      val wireId = UUID.randomUUID()
      session.wireIds[player.uniqueId] = wireId
      routes[key] = Transfer(session, player.uniqueId, prepared, wireId, expires)
      session.bufferCandidates.add(player.uniqueId)
      server.ommtPlaybackClientRegistry.expectReady(player.uniqueId, wireId, prepared.hash, expires)
      player.sendPluginMessage(
          plugin,
          PlaybackBuffer.CHANNEL,
          PlaybackBuffer.envelope(PlaybackBuffer.TYPE_BEGIN, wireId) {
            writeShort(prepared.chunks.size)
            writeInt(prepared.compressed.size)
            write(prepared.hash)
            writeInt(prepared.durationMs)
            writeByte(1) // BEGIN mode for OYPB v2
            writeInt(30_000)
          },
      )
    }
    if (routes.isNotEmpty() && transferTask == null)
        transferTask =
            Bukkit.getScheduler().runTaskTimer(plugin, Runnable { pumpTransfers() }, 1L, 1L)
  }

  private fun cancelRoute(key: Pair<UUID, UUID>, sendStop: Boolean) {
    val route = routes.remove(key) ?: return
    if (sendStop)
        Bukkit.getPlayer(route.player)
            ?.takeIf { it.isOnline }
            ?.sendPluginMessage(
                plugin,
                PlaybackBuffer.CHANNEL,
                PlaybackBuffer.envelope(PlaybackBuffer.TYPE_STOP, route.wireId) { writeByte(1) },
            )
    route.session.bufferCandidates.remove(route.player)
    route.session.ackPendingRecipients.remove(route.player)
    route.session.cutovers.remove(route.player)
    route.session.ackDeadlinesMillis.remove(route.player)
    route.session.wireIds.remove(route.player)
    (plugin as? OyasaiMusic)
        ?.ommtPlaybackClientRegistry
        ?.releasePlayback(route.player, route.wireId)
  }

  private fun pumpTransfers() {
    val server = plugin as? OyasaiMusic ?: return
    val registry = server.ommtPlaybackClientRegistry
    val keys = routes.keys.toList()
    val budget = PlaybackTransferBudget(keys.size, rotation)
    for (offset in keys.indices) {
      val index = budget.index(offset)
      val key = keys[index]
      val route = routes[key] ?: continue
      val session = route.session
      val player = Bukkit.getPlayer(route.player)
      if (
          session.isCancelled ||
              session.isPaused ||
              player == null ||
              !player.isOnline ||
              route.player !in session.recipients ||
              liveSessions[session.sessionId] !== session ||
              !registry.isCapable(route.player) ||
              (route.first == null && System.currentTimeMillis() > route.expires)
      ) {
        cancelRoute(key, true)
        continue
      }
      if (registry.consumeFailure(route.player, route.wireId) != null) {
        countFallback("client-failed")
        cancelRoute(key, true)
        continue
      }
      repeat(2) {
        if (route.sequence < route.payload.chunks.size && budget.take(route.player, index)) {
          val sequence = route.sequence++
          val chunk = route.payload.chunks[sequence]
          player.sendPluginMessage(
              plugin,
              PlaybackBuffer.CHANNEL,
              PlaybackBuffer.envelope(PlaybackBuffer.TYPE_CHUNK, route.wireId) {
                writeShort(sequence)
                writeShort(route.payload.chunks.size)
                writeShort(chunk.size)
                write(chunk)
              },
          )
          if (diagnose) {
            chunksSent++
            chunkBytes += chunk.size
          }
        }
      }
      if (route.sequence < route.payload.chunks.size) continue
      if (route.first == null && registry.isReady(route.player, route.wireId, route.payload.hash)) {
        val target =
            (session.elapsedPlaybackMs() + 250L).coerceAtMost(Int.MAX_VALUE.toLong()).toInt()
        val first =
            contexts[session.sessionId]?.scaledNotes?.let { firstAudibleAtOrAfter(it, target) }
        if (first == null) {
          cancelRoute(key, true)
          continue
        }
        val deadline = System.currentTimeMillis() + 250L + (first - target) + START_ACK_GRACE_MS
        if (!registry.markAckPending(route.player, route.wireId, route.payload.hash, deadline)) {
          cancelRoute(key, true)
          continue
        }
        route.first = first
        session.bufferCandidates.remove(route.player)
        session.ackPendingRecipients.add(route.player)
        session.cutovers[route.player] = target
        session.ackDeadlinesMillis[route.player] = deadline
        player.sendPluginMessage(
            plugin,
            PlaybackBuffer.CHANNEL,
            PlaybackBuffer.envelope(PlaybackBuffer.TYPE_START, route.wireId) {
              writeInt(250)
              writeInt(target)
            },
        )
      }
      if (route.first != null) {
        val started = registry.consumeStarted(route.player, route.wireId, route.payload.hash)
        if (
            started != null &&
                started.firstNoteMs == route.first &&
                registry.markLocalConfirmed(route.player, route.wireId)
        ) {
          session.ackPendingRecipients.remove(route.player)
          session.ackDeadlinesMillis.remove(route.player)
          session.bufferedRecipients.add(route.player)
          registry.removeExpected(route.player, route.wireId)
          routes.remove(key)
          if (diagnose) confirmedStarts++
        } else if (
            started != null ||
                System.currentTimeMillis() >=
                    (session.ackDeadlinesMillis[route.player] ?: Long.MAX_VALUE)
        ) {
          countFallback(if (started == null) "ack-timeout" else "ack-mismatch")
          cancelRoute(key, true)
        }
      }
    }
    rotation = budget.nextRotation()
    if (routes.isEmpty()) {
      transferTask?.cancel()
      transferTask = null
    }
  }

  fun removeRecipient(session: PlaybackSession, id: UUID) {
    session.membership.remove(id)
    cancelRoute(session.sessionId to id, true)
    if (session.bufferedRecipients.remove(id) || session.ackPendingRecipients.remove(id)) {
      Bukkit.getPlayer(id)
          ?.takeIf { it.isOnline }
          ?.sendPluginMessage(
              plugin,
              PlaybackBuffer.CHANNEL,
              PlaybackBuffer.envelope(
                  PlaybackBuffer.TYPE_STOP,
                  session.wireIds[id] ?: session.sessionId,
              ) {
                writeByte(0)
              },
          )
    }
    session.cutovers.remove(id)
    session.paperFallbackRecipients.remove(id)
    session.recipients.remove(id)
    (plugin as? OyasaiMusic)
        ?.ommtPlaybackClientRegistry
        ?.releasePlayback(id, session.wireIds.remove(id) ?: session.sessionId)
  }

  fun addRecipient(session: PlaybackSession, player: Player) {
    if (session.recipients.add(player.uniqueId)) offerAmbient(session, player)
  }

  private fun offerAmbient(session: PlaybackSession, player: Player) {
    val server = plugin as? OyasaiMusic ?: return
    val ctx = contexts[session.sessionId] ?: return
    val audio = ctx.audio ?: return
    if (!session.ambient || BedrockUtil.isBedrock(player, bedrockPrefix)) return
    val membership = UUID.randomUUID()
    session.membership[player.uniqueId] = membership
    server.ommtPlaybackClientRegistry.resolveForPlayback(player) { capable ->
      if (
          session.membership[player.uniqueId] != membership ||
              !capable ||
              !server.ommtPlaybackClientRegistry.supportsMultiSession(player.uniqueId) ||
              player.uniqueId !in session.recipients ||
              session.isCancelled
      )
          return@resolveForPlayback
      server.resourcePackService.confirmBundledBank(player)
      val manifest =
          if (server.ommtPlaybackClientRegistry.supportsBankManifest(player.uniqueId))
              server.resourcePackService.manifestHashFor(player.uniqueId)
          else null
      server.playbackPreparation.payload(audio, ctx.mode, manifest).whenComplete {
          result,
          error ->
        if (!server.isEnabled) return@whenComplete
        Bukkit.getScheduler()
            .runTask(
                plugin,
                Runnable {
                  if (
                      session.membership[player.uniqueId] == membership &&
                          error == null &&
                          player.isOnline &&
                          player.uniqueId in session.recipients &&
                          liveSessions[session.sessionId] === session &&
                          server.ommtPlaybackClientRegistry.supportsMultiSession(player.uniqueId)
                  )
                      result.payload?.let { queueBuffered(session, listOf(player), it) }
                },
            )
      }
    }
  }

  private fun enterPaperFallback(
      session: PlaybackSession,
      playerId: UUID,
      server: OyasaiMusic?,
  ) {
    cancelRoute(session.sessionId to playerId, true)
    val wasPending = session.ackPendingRecipients.remove(playerId)
    val wasBuffered = session.bufferedRecipients.remove(playerId)
    if (!wasPending && !wasBuffered) return
    session.ackDeadlinesMillis.remove(playerId)
    session.paperFallbackRecipients += playerId
    Bukkit.getPlayer(playerId)
        ?.takeIf { it.isOnline }
        ?.sendPluginMessage(
            plugin,
            PlaybackBuffer.CHANNEL,
            PlaybackBuffer.envelope(
                PlaybackBuffer.TYPE_STOP,
                session.wireIds[playerId] ?: session.sessionId,
            ) {
              writeByte(1)
            },
        )
    server
        ?.ommtPlaybackClientRegistry
        ?.releasePlayback(playerId, session.wireIds.remove(playerId) ?: session.sessionId)
    countFallback("client-failed")
  }

  private fun sendControl(
      session: PlaybackSession,
      type: Int,
      body: java.io.DataOutputStream.() -> Unit = {},
  ) {
    val recipients = session.bufferedRecipients + session.ackPendingRecipients
    if (recipients.isEmpty()) return
    recipients.forEach { playerId ->
      val wireId = session.wireIds[playerId] ?: return@forEach
      val packet =
          PlaybackBuffer.envelope(type, wireId) {
            body()
            if (type == PlaybackBuffer.TYPE_STOP) writeByte(0)
          }
      Bukkit.getPlayer(playerId)
          ?.takeIf { it.isOnline }
          ?.sendPluginMessage(plugin, PlaybackBuffer.CHANNEL, packet)
    }
  }

  /**
   * データ設計書 4-2章のBedrock向け和音間引きルール: 同一ミリ秒・同一楽器の音が [chordLimit] 個以上重なっている場合、
   * 最高音(Pitch最大)と最低音(Pitch最小)の2音のみを残す。
   *
   * @return Bedrockプレイヤーに対して再生してよい音符のインデックス集合
   */
  private fun computeBedrockSurvivingIndices(scaledNotes: List<Pair<Int, NoteEvent>>): Set<Int> {
    val groups = scaledNotes.groupBy { (_, note) -> note.timeMs to note.instrument }
    val surviving = HashSet<Int>()
    for (group in groups.values) {
      if (group.size < chordLimit) {
        group.forEach { (index, _) -> surviving.add(index) }
      } else {
        val minEntry = group.minBy { (_, note) -> note.pitch }
        val maxEntry = group.maxBy { (_, note) -> note.pitch }
        surviving.add(minEntry.first)
        surviving.add(maxEntry.first)
      }
    }
    return surviving
  }

  private companion object {
    const val START_ACK_GRACE_MS = 1_000L
  }
}
