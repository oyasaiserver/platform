package com.github.sahyuya.oyasaiMusic.command

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.interop.UploadV2Codec
import java.nio.ByteBuffer
import java.security.MessageDigest
import java.util.Base64
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Semaphore
import java.util.zip.DataFormatException
import java.util.zip.Inflater
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

/** Server-authoritative endpoint for the bounded, command-only OMMT upload1 protocol. */
class OyasaiUploadCommand(private val plugin: OyasaiMusic) : CommandExecutor, Listener {
  companion object {
    private const val VERSION = "1"
    // Bukkit receives the command without '/', while the client API accepts at most 255 chars;
    // the typed slash therefore makes the protocol's visible command length at most 256.
    private const val MAX_COMMAND = 255
    private const val MAX_CHUNKS = 400
    private const val MAX_ENCODED = 80_000
    private const val MAX_COMPRESSED = 60_000
    private const val MAX_OYMI = 1_048_576
    private const val MAX_NOTES = 100_000
    private const val ACTIVE_MS = 10 * 60 * 1000L
    private const val CACHE_MS = 10 * 60 * 1000L
    private const val MUTATION_PACE_MS = 900L
    private const val MAX_ACTIVE = 32
    private val BASE36 = Regex("[0-9a-z]+")
    private val ID = Regex("[A-Za-z0-9_-]{22}")
    private val HASH = Regex("[A-Za-z0-9_-]{43}")
    private val PAYLOAD = Regex("[A-Za-z0-9_-]{1,200}")
  }

  private data class Metadata(
      val chunks: Int,
      val encoded: Int,
      val compressed: Int,
      val oymi: Int,
      val hash: String,
      val version: Int = 1,
      val encoding: String = "a",
      val format: String = "o",
      val transport: Int = 0,
      val notes: Int = 0,
  )

  private data class Active(
      val id: String,
      val metadata: Metadata,
      val startedAt: Long,
      val generation: Long,
      val encoded: StringBuilder = StringBuilder(),
      var next: Int = 0,
      var previous: String? = null,
      var processing: Boolean = false,
      val lifecycle: Any = Any(),
      var cancelled: Boolean = false,
      var importerEntered: Boolean = false,
  )

  /** Cached result is bound to the complete BEGIN metadata, not merely its content hash. */
  private data class Complete(val metadata: Metadata, val answer: String, val expiresAt: Long)

  private val active = ConcurrentHashMap<UUID, Active>()
  private val complete = ConcurrentHashMap<UUID, MutableMap<String, Complete>>()
  private val lastMutation = ConcurrentHashMap<UUID, Long>()
  private val liveGeneration = ConcurrentHashMap<UUID, Long>()
  private val importSlots = Semaphore(2)
  private val asyncMonitor = Object()
  private var activeAsyncImports = 0
  @Volatile private var accepting = true

  /**
   * Stop accepting commands before DB shutdown. Jobs that have not crossed the importer boundary
   * are cancelled under their session lock; an importer already entered must finish so it cannot
   * race DatabaseManager.close(). The wait is deliberately bounded for Paper shutdown safety.
   */
  fun shutdown(): Boolean {
    accepting = false
    active.entries.toList().forEach { (playerId, session) -> invalidateSession(playerId, session) }
    complete.clear()
    lastMutation.clear()
    liveGeneration.clear()
    val deadline = System.currentTimeMillis() + 10_000L
    synchronized(asyncMonitor) {
      while (activeAsyncImports > 0) {
        val remaining = deadline - System.currentTimeMillis()
        if (remaining <= 0L) {
          plugin.logger.warning(
              "Timed out waiting for $activeAsyncImports OMMT upload import(s) before database close"
          )
          return false
        }
        try {
          asyncMonitor.wait(remaining)
        } catch (_: InterruptedException) {
          Thread.currentThread().interrupt()
          plugin.logger.warning(
              "Interrupted while waiting for OMMT upload imports before database close"
          )
          return false
        }
      }
    }
    return true
  }

  /** Reload has no DB close, but invalidates all command generations and unfinished buffers. */
  fun reloadReset() {
    accepting = false
    active.entries.toList().forEach { (playerId, session) -> invalidateSession(playerId, session) }
    complete.clear()
    lastMutation.clear()
    liveGeneration.clear()
    accepting = true
  }

  fun expire() {
    val now = System.currentTimeMillis()
    active.entries.toList().forEach { (playerId, session) ->
      if (now - session.startedAt > ACTIVE_MS) invalidateSession(playerId, session)
    }
    lastMutation.entries.removeIf { now - it.value > ACTIVE_MS }
    complete.entries.removeIf { (_, values) ->
      values.entries.removeIf { it.value.expiresAt <= now }
      values.isEmpty()
    }
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val playerId = event.player.uniqueId
    active[playerId]?.let { invalidateSession(playerId, it) }
    complete.remove(playerId)
    lastMutation.remove(playerId)
    liveGeneration.remove(playerId)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!accepting || sender !is Player || !sender.isOnline) return true
    // Bukkit splits an actual vanilla command already; retain a conservative reconstructed limit.
    val suppliedId = args.getOrNull(2)?.takeIf { ID.matches(it) }
    if ((label.length + args.sumOf { it.length + 1 }) > MAX_COMMAND) {
      respond(sender, "ERROR OVERSIZED", suppliedId)
      return true
    }
    try {
      if (args.size < 3 || args[1] !in setOf(VERSION, "2") || !ID.matches(args[2]))
          throw Protocol("MALFORMED")
      when (args[0]) {
        "h" -> hello(sender, args)
        "b" -> begin(sender, args)
        "c" -> chunk(sender, args)
        "f" -> finish(sender, args)
        "x" -> cancel(sender, args)
        else -> throw Protocol("MALFORMED")
      }
    } catch (failure: Protocol) {
      respond(sender, "ERROR ${failure.code}", suppliedId)
    }
    return true
  }

  private fun hello(player: Player, args: Array<out String>) {
    if (args.size != 3) throw Protocol("MALFORMED")
    if (!player.hasPermission("oyasaimusic.import")) throw Protocol("NO_PERMISSION")
    respond(
        player,
        if (args[1] == "2") "READY u15c1 b64c1 b64o1 cs1 csp1" else "READY",
        args[2],
        args[1].toInt(),
    )
  }

  private fun begin(player: Player, args: Array<out String>) {
    if (args[1] == "2") {
      beginV2(player, args)
      return
    }
    if (args.size != 8) throw Protocol("MALFORMED")
    requirePermission(player)
    val id = args[2]
    val metadata =
        Metadata(number(args[3]), number(args[4]), number(args[5]), number(args[6]), args[7])
    if (
        !HASH.matches(metadata.hash) ||
            metadata.chunks !in 1..MAX_CHUNKS ||
            metadata.encoded !in 1..MAX_ENCODED ||
            metadata.compressed !in 1..MAX_COMPRESSED ||
            metadata.oymi !in 1..MAX_OYMI
    )
        throw Protocol("OVERSIZED")
    val cached = complete[player.uniqueId]?.get(id)
    if (cached != null && cached.expiresAt > System.currentTimeMillis()) {
      if (cached.metadata != metadata) throw Protocol("MALFORMED")
      respond(player, cached.answer, id, cached.metadata.version)
      return
    }
    val previous = active[player.uniqueId]
    if (previous != null) {
      if (previous.id == id && previous.metadata == metadata) return
      throw Protocol("BUSY")
    }
    pace(player, id)
    if (active.size >= MAX_ACTIVE) throw Protocol("BUSY")
    val generation = System.nanoTime()
    liveGeneration[player.uniqueId] = generation
    active[player.uniqueId] = Active(id, metadata, System.currentTimeMillis(), generation)
  }

  private fun beginV2(player: Player, args: Array<out String>) {
    if (
        args.size != 13 ||
            args[3] !in setOf("u", "a") ||
            args[4] !in setOf("c", "o") ||
            (args[3] == "u" && args[4] != "c")
    )
        throw Protocol("MALFORMED")
    requirePermission(player)
    val metadata =
        Metadata(
            number(args[5]),
            number(args[6]),
            number(args[8]),
            number(args[10]),
            args[12],
            2,
            args[3],
            args[4],
            number(args[9]),
            number(args[11]),
        )
    val utf8 = number(args[7])
    if (
        !HASH.matches(metadata.hash) ||
            metadata.chunks !in 1..MAX_CHUNKS ||
            metadata.encoded !in 1..MAX_ENCODED ||
            metadata.compressed !in 1..MAX_OYMI ||
            metadata.transport !in 1..MAX_OYMI ||
            metadata.oymi !in 20..MAX_OYMI ||
            metadata.notes !in 1..MAX_NOTES ||
            (metadata.encoding == "u" &&
                (utf8 != metadata.encoded * 3 ||
                    metadata.encoded != (metadata.compressed * 8 + 14) / 15)) ||
            (metadata.encoding == "a" && utf8 != metadata.encoded)
    )
        throw Protocol("OVERSIZED")
    val id = args[2]
    val cached = complete[player.uniqueId]?.get(id)
    if (cached != null && cached.expiresAt > System.currentTimeMillis()) {
      if (cached.metadata != metadata) throw Protocol("MALFORMED")
      respond(player, cached.answer, id, 2)
      return
    }
    if (active[player.uniqueId] != null) throw Protocol("BUSY")
    pace(player, id)
    if (active.size >= MAX_ACTIVE) throw Protocol("BUSY")
    val generation = System.nanoTime()
    liveGeneration[player.uniqueId] = generation
    active[player.uniqueId] = Active(id, metadata, System.currentTimeMillis(), generation)
  }

  private fun chunk(player: Player, args: Array<out String>) {
    if (
        args.size != 5 || args[4].length !in 1..200 || (args[1] == "1" && !PAYLOAD.matches(args[4]))
    )
        throw Protocol("MALFORMED")
    requirePermission(player)
    val id = args[2]
    val sequence = number(args[3])
    val session = active[player.uniqueId] ?: throw Protocol("TIMEOUT")
    if (
        session.metadata.version != args[1].toInt() ||
            (session.metadata.encoding == "u" && args[4].any { !isUnicode15(it) }) ||
            (session.metadata.encoding == "a" && !PAYLOAD.matches(args[4]))
    )
        throw Protocol("MALFORMED")
    if (session.id != id || session.processing) {
      abort(player)
      throw Protocol("ORDER")
    }
    // Only the immediately preceding, byte-identical command is a safe at-least-once retry.
    if (sequence == session.next - 1 && args[4] == session.previous) return
    pace(player, id)
    if (sequence != session.next || sequence !in 0 until session.metadata.chunks) {
      abort(player)
      throw Protocol("ORDER")
    }
    if (session.encoded.length + args[4].length > session.metadata.encoded) {
      abort(player)
      throw Protocol("OVERSIZED")
    }
    session.encoded.append(args[4])
    session.previous = args[4]
    session.next++
  }

  private fun finish(player: Player, args: Array<out String>) {
    if (args.size != 4 || !HASH.matches(args[3])) throw Protocol("MALFORMED")
    requirePermission(player)
    val id = args[2]
    val cached = complete[player.uniqueId]?.get(id)
    if (cached != null && cached.expiresAt > System.currentTimeMillis()) {
      if (cached.metadata.hash != args[3]) throw Protocol("MALFORMED")
      respond(player, cached.answer, id, cached.metadata.version)
      return
    }
    pace(player, id)
    val session = active[player.uniqueId] ?: throw Protocol("TIMEOUT")
    if (
        session.id != id ||
            session.metadata.hash != args[3] ||
            session.next != session.metadata.chunks ||
            session.encoded.length != session.metadata.encoded
    ) {
      abort(player)
      throw Protocol("ORDER")
    }
    if (session.processing) return
    if (!importSlots.tryAcquire()) {
      abort(player)
      throw Protocol("BUSY")
    }
    session.processing = true
    val playerId = player.uniqueId
    val playerName = player.name
    val encoded = session.encoded.toString()
    val metadata = session.metadata
    registerAsyncImport()
    // This response is emitted only after final validation/order checks and before the importer
    // crosses its asynchronous boundary, so the client can distinguish VERIFYING from IMPORTING.
    respond(player, "PROCESSING", id, metadata.version)
    try {
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                var answer: String? = null
                try {
                  val compressed =
                      if (metadata.encoding == "u")
                          UploadV2Codec.unicode15Decode(encoded, metadata.compressed)
                      else Base64.getUrlDecoder().decode(encoded)
                  if (compressed.size != metadata.compressed) throw Protocol("HASH")
                  val inflated =
                      inflateExactly(
                          compressed,
                          if (metadata.version == 2) metadata.transport else metadata.oymi,
                      )
                  val oymi =
                      if (metadata.version == 2 && metadata.format == "c")
                          UploadV2Codec.reconstructOymi(inflated)
                      else inflated
                  if (oymi.size != metadata.oymi) throw Protocol("HASH")
                  if (
                      !MessageDigest.isEqual(
                          MessageDigest.getInstance("SHA-256").digest(oymi),
                          Base64.getUrlDecoder().decode(metadata.hash),
                      )
                  )
                      throw Protocol("HASH")
                  validateOymi(oymi)
                  if (metadata.version == 2 && ByteBuffer.wrap(oymi).getInt(12) != metadata.notes)
                      throw Protocol("HASH")
                  // This synchronized check is the cancellation boundary. Quit/shutdown either
                  // cancels the
                  // job before this point, or observes importerEntered and drains it before closing
                  // the DB.
                  synchronized(session.lifecycle) {
                    if (
                        !accepting ||
                            session.cancelled ||
                            active[playerId] !== session ||
                            liveGeneration[playerId] != session.generation
                    )
                        return@Runnable
                    session.importerEntered = true
                  }
                  val result = plugin.oyasaiImportService.importBytesFor(playerId, playerName, oymi)
                  answer = "DONE ${(result.song.id ?: throw Protocol("IMPORT")).toString(36)}"
                } catch (error: Protocol) {
                  answer = "ERROR ${error.code}"
                } catch (_: Exception) {
                  answer = "ERROR IMPORT"
                } finally {
                  importSlots.release()
                  completeAsyncImport()
                }
                val completedAnswer = answer ?: return@Runnable
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          // Do not let a late main-thread callback mutate a reconnected/new
                          // generation session.
                          if (
                              !accepting ||
                                  active[playerId] !== session ||
                                  liveGeneration[playerId] != session.generation
                          )
                              return@Runnable
                          if (
                              !active.remove(playerId, session) ||
                                  !accepting ||
                                  liveGeneration[playerId] != session.generation
                          )
                              return@Runnable
                          complete.computeIfAbsent(playerId) { ConcurrentHashMap() }[id] =
                              Complete(
                                  metadata,
                                  completedAnswer,
                                  System.currentTimeMillis() + CACHE_MS,
                              )
                          Bukkit.getPlayer(playerId)
                              ?.takeIf { it.isOnline }
                              ?.let { respond(it, completedAnswer, id, metadata.version) }
                        },
                    )
              },
          )
    } catch (error: Exception) {
      importSlots.release()
      completeAsyncImport()
      invalidateSession(playerId, session)
      throw error
    }
  }

  private fun cancel(player: Player, args: Array<out String>) {
    if (args.size != 3) throw Protocol("MALFORMED")
    active[player.uniqueId]
        ?.takeIf { it.id == args[2] }
        ?.let { invalidateSession(player.uniqueId, it) }
  }

  private fun requirePermission(player: Player) {
    if (!player.hasPermission("oyasaimusic.import")) throw Protocol("NO_PERMISSION")
  }

  private fun abort(player: Player) {
    active[player.uniqueId]?.let { invalidateSession(player.uniqueId, it) }
  }

  private fun invalidateSession(playerId: UUID, session: Active) {
    synchronized(session.lifecycle) { if (!session.importerEntered) session.cancelled = true }
    active.remove(playerId, session)
    liveGeneration.remove(playerId, session.generation)
  }

  private fun registerAsyncImport() = synchronized(asyncMonitor) { activeAsyncImports++ }

  private fun completeAsyncImport() =
      synchronized(asyncMonitor) {
        activeAsyncImports = (activeAsyncImports - 1).coerceAtLeast(0)
        asyncMonitor.notifyAll()
      }

  private fun pace(player: Player, id: String) {
    val now = System.currentTimeMillis()
    val previous = lastMutation.put(player.uniqueId, now)
    if (previous != null && now - previous < MUTATION_PACE_MS) {
      active.remove(player.uniqueId)
      throw Protocol("RATE_LIMITED")
    }
  }

  private fun respond(player: Player, answer: String, id: String? = null, version: Int = 1) {
    // This is deliberately one fixed ASCII line sent only to the command sender. The client also
    // requires its random active id, so ordinary chat cannot authorize queued song data.
    if (id != null) player.sendMessage("OMMT UPLOAD$version $id $answer")
  }

  private fun number(value: String): Int {
    if (!BASE36.matches(value)) throw Protocol("MALFORMED")
    return value.toIntOrNull(36) ?: throw Protocol("OVERSIZED")
  }

  private fun inflateExactly(compressed: ByteArray, expected: Int): ByteArray {
    val inflater = Inflater()
    inflater.setInput(compressed)
    val result = ByteArray(expected)
    try {
      val count = inflater.inflate(result)
      if (!inflater.finished() || count != expected || inflater.remaining != 0)
          throw Protocol("HASH")
    } catch (_: DataFormatException) {
      throw Protocol("HASH")
    } finally {
      inflater.end()
    }
    return result
  }

  private fun validateOymi(bytes: ByteArray) {
    if (bytes.size !in 20..MAX_OYMI) throw Protocol("MALFORMED")
    val input = ByteBuffer.wrap(bytes)
    val version = if (input.int == 0x4F594D49) input.short.toInt() else -1
    if (version !in 1..3 || input.short.toInt() != 0) throw Protocol("MALFORMED")
    val metadata = input.int
    val notes = input.int
    input.int
    if (
        metadata !in 2..(bytes.size - 20) ||
            notes !in 1..MAX_NOTES ||
            bytes.size != 20 + metadata + notes * 8
    )
        throw Protocol("MALFORMED")
  }

  private fun isUnicode15(char: Char): Boolean =
      char.code in 0x3400..0x4dbf || char.code in 0x4e00..0x9fff || char.code in 0xe000..0xf43f

  private class Protocol(val code: String) : IllegalArgumentException(code)
}
