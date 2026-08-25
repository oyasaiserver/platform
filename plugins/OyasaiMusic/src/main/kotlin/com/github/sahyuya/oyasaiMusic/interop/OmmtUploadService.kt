package com.github.sahyuya.oyasaiMusic.interop

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import java.io.ByteArrayOutputStream
import java.nio.ByteBuffer
import java.security.MessageDigest
import java.util.Base64
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.Semaphore
import java.util.zip.DataFormatException
import java.util.zip.Inflater
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

/** Paper-authoritative, packet-only OMMT import service. */
class OmmtUploadService(private val plugin: OyasaiMusic) : Listener {
  private data class Metadata(
      val chunks: Int,
      val compressed: Int,
      val oymi: Int,
      val notes: Int,
      val hash: String,
  )

  private data class Active(
      val id: UUID,
      val metadata: Metadata,
      val generation: Long,
      val createdAt: Long,
      val bytes: ByteArrayOutputStream = ByteArrayOutputStream(),
      var next: Int = 0,
      var previous: ByteArray? = null,
      var processing: Boolean = false,
      val lifecycle: Any = Any(),
      var cancelled: Boolean = false,
      var importerEntered: Boolean = false,
  )

  private data class Authorization(val id: UUID, val expiresAt: Long)

  private data class Completed(val metadata: Metadata, val detail: String, val expiresAt: Long)

  private val active = ConcurrentHashMap<UUID, Active>()
  private val authorized = ConcurrentHashMap<UUID, Authorization>()
  private val completed = ConcurrentHashMap<UUID, MutableMap<UUID, Completed>>()
  private val lastRequest = ConcurrentHashMap<UUID, Long>()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val slots = Semaphore(2)
  private val asyncMonitor = Object()
  private var activeImports = 0
  @Volatile private var accepting = true
  @Volatile private var sender: ((Player, ByteArray) -> Unit)? = null

  fun bindPacketSender(value: ((Player, ByteArray) -> Unit)?) {
    sender = value
  }

  fun handlePacket(player: Player, message: UploadPacketCodec.ClientMessage) {
    if (!accepting || !player.isOnline) return
    try {
      when (message) {
        is UploadPacketCodec.Request -> request(player, message.id)
        is UploadPacketCodec.Begin -> begin(player, message)
        is UploadPacketCodec.Chunk -> chunk(player, message)
        is UploadPacketCodec.Finish -> finish(player, message)
        is UploadPacketCodec.Abort -> cancel(player, message.id)
      }
    } catch (error: Protocol) {
      respond(player, message.id, UploadPacketCodec.STATUS_ERROR, error.code)
    }
  }

  private fun request(player: Player, id: UUID) {
    requirePermission(player)
    if (active[player.uniqueId] != null) throw Protocol("BUSY")
    val now = System.currentTimeMillis()
    // Duplicate REQUEST may be retried by transport; resend the same authorization safely.
    authorized[player.uniqueId]
        ?.takeIf { it.id == id && it.expiresAt > now }
        ?.let {
          respondReady(player, id)
          return
        }
    if ((lastRequest[player.uniqueId] ?: 0L) + 500L > now) throw Protocol("RATE_LIMITED")
    lastRequest[player.uniqueId] = now
    authorized[player.uniqueId] = Authorization(id, now + 10_000L)
    respondReady(player, id)
  }

  private fun begin(player: Player, message: UploadPacketCodec.Begin) {
    requirePermission(player)
    if (
        message.transportBytes != message.compressedBytes ||
            message.compressedBytes !in 1..UploadPacketCodec.MAX_COMPRESSED_BYTES ||
            message.oymiBytes !in 20..UploadPacketCodec.MAX_OYMI_BYTES ||
            message.notes !in 1..UploadPacketCodec.MAX_NOTES ||
            message.canonicalHash.size != 32
    )
        throw Protocol("OVERSIZED")
    val expected =
        (message.compressedBytes + UploadPacketCodec.CHUNK_BYTES - 1) /
            UploadPacketCodec.CHUNK_BYTES
    if (message.chunks !in 1..UploadPacketCodec.MAX_CHUNKS || message.chunks != expected)
        throw Protocol("OVERSIZED")
    val metadata =
        Metadata(
            message.chunks,
            message.compressedBytes,
            message.oymiBytes,
            message.notes,
            Base64.getUrlEncoder().withoutPadding().encodeToString(message.canonicalHash),
        )
    val now = System.currentTimeMillis()
    completed[player.uniqueId]
        ?.get(message.id)
        ?.takeIf { it.expiresAt > now }
        ?.let { done ->
          if (done.metadata != metadata) throw Protocol("MALFORMED")
          respond(player, message.id, UploadPacketCodec.STATUS_DONE, done.detail)
          return
        }
    val previous = active[player.uniqueId]
    if (previous != null) {
      if (previous.id == message.id && previous.metadata == metadata) return
      if (previous.id == message.id) throw Protocol("MALFORMED")
      throw Protocol("BUSY")
    }
    val auth = authorized[player.uniqueId] ?: throw Protocol("NOT_READY")
    if (auth.id != message.id || auth.expiresAt < now) {
      authorized.remove(player.uniqueId, auth)
      throw Protocol("NOT_READY")
    }
    if (active.size >= 32) throw Protocol("BUSY")
    authorized.remove(player.uniqueId, auth)
    val generation = System.nanoTime()
    generations[player.uniqueId] = generation
    active[player.uniqueId] = Active(message.id, metadata, generation, System.currentTimeMillis())
  }

  private fun chunk(player: Player, message: UploadPacketCodec.Chunk) {
    requirePermission(player)
    val session = active[player.uniqueId] ?: throw Protocol("TIMEOUT")
    if (session.id != message.id || session.processing) {
      abort(player.uniqueId, session)
      throw Protocol("ORDER")
    }
    if (
        message.sequence == session.next - 1 &&
            session.previous?.contentEquals(message.bytes) == true
    )
        return
    if (
        message.total != session.metadata.chunks ||
            message.sequence != session.next ||
            message.sequence !in 0 until session.metadata.chunks
    ) {
      abort(player.uniqueId, session)
      throw Protocol("ORDER")
    }
    val expectedSize =
        if (message.sequence + 1 == session.metadata.chunks)
            session.metadata.compressed - message.sequence * UploadPacketCodec.CHUNK_BYTES
        else UploadPacketCodec.CHUNK_BYTES
    if (
        message.bytes.size != expectedSize ||
            session.bytes.size() + message.bytes.size > session.metadata.compressed
    ) {
      abort(player.uniqueId, session)
      throw Protocol("OVERSIZED")
    }
    session.bytes.write(message.bytes)
    session.previous = message.bytes.copyOf()
    session.next++
  }

  private fun finish(player: Player, message: UploadPacketCodec.Finish) {
    requirePermission(player)
    completed[player.uniqueId]
        ?.get(message.id)
        ?.takeIf { it.expiresAt > System.currentTimeMillis() }
        ?.let { done ->
          if (
              done.metadata.hash !=
                  Base64.getUrlEncoder().withoutPadding().encodeToString(message.canonicalHash)
          )
              throw Protocol("MALFORMED")
          respond(player, message.id, UploadPacketCodec.STATUS_DONE, done.detail)
          return
        }
    val session = active[player.uniqueId] ?: throw Protocol("TIMEOUT")
    if (
        session.id != message.id ||
            session.metadata.hash !=
                Base64.getUrlEncoder().withoutPadding().encodeToString(message.canonicalHash) ||
            session.next != session.metadata.chunks ||
            session.bytes.size() != session.metadata.compressed
    ) {
      abort(player.uniqueId, session)
      throw Protocol("ORDER")
    }
    import(player, session)
  }

  private fun cancel(player: Player, id: UUID) {
    active[player.uniqueId]?.takeIf { it.id == id }?.let { abort(player.uniqueId, it) }
    authorized[player.uniqueId]
        ?.takeIf { it.id == id }
        ?.let { authorized.remove(player.uniqueId, it) }
  }

  private fun import(player: Player, session: Active) {
    if (session.processing) return
    if (!slots.tryAcquire()) throw Protocol("BUSY")
    session.processing = true
    val playerId = player.uniqueId
    val playerName = player.name
    val compressed = session.bytes.toByteArray()
    registerImport()
    respond(player, session.id, UploadPacketCodec.STATUS_PROCESSING)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val result = runCatching {
                val compact = inflateBounded(compressed)
                val oymi = UploadV2Codec.reconstructOymi(compact)
                require(oymi.size == session.metadata.oymi)
                require(
                    MessageDigest.isEqual(
                        MessageDigest.getInstance("SHA-256").digest(oymi),
                        Base64.getUrlDecoder().decode(session.metadata.hash),
                    )
                )
                validateOymi(oymi, session.metadata.notes)
                synchronized(session.lifecycle) {
                  require(
                      accepting &&
                          !session.cancelled &&
                          active[playerId] === session &&
                          generations[playerId] == session.generation
                  )
                  session.importerEntered = true
                }
                plugin.oyasaiImportService
                    .importBytesFor(playerId, playerName, oymi)
                    .song
                    .id
                    ?.toString(36) ?: error("IMPORT")
              }
              val terminal =
                  try {
                    if (
                        active[playerId] !== session ||
                            generations[playerId] != session.generation ||
                            !active.remove(playerId, session)
                    ) {
                      null
                    } else {
                      generations.remove(playerId, session.generation)
                      result.fold(
                          onSuccess = { detail ->
                            completed
                                .computeIfAbsent(playerId) { ConcurrentHashMap() }[session.id] =
                                Completed(
                                    session.metadata,
                                    detail,
                                    System.currentTimeMillis() + 600_000L,
                                )
                            UploadPacketCodec.STATUS_DONE to detail
                          },
                          onFailure = { error ->
                            UploadPacketCodec.STATUS_ERROR to errorCode(error)
                          },
                      )
                    }
                  } finally {
                    slots.release()
                    completeImport()
                  }
              if (terminal != null) {
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          if (!accepting) return@Runnable
                          Bukkit.getPlayer(playerId)
                              ?.takeIf { it.isOnline }
                              ?.let { online ->
                                respond(online, session.id, terminal.first, terminal.second)
                              }
                        },
                    )
              }
            },
        )
  }

  fun expire() {
    val now = System.currentTimeMillis()
    active.entries
        .toList()
        .filter { now - it.value.createdAt > 600_000L }
        .forEach { abort(it.key, it.value) }
    authorized.entries.removeIf { it.value.expiresAt <= now }
    lastRequest.entries.removeIf { now - it.value > 600_000L }
    completed.entries.removeIf { (_, values) ->
      values.entries.removeIf { it.value.expiresAt <= now }
      values.isEmpty()
    }
  }

  fun reloadReset() {
    accepting = false
    try {
      // A reload may race the asynchronous validation boundary. abort() retains jobs that already
      // entered authoritative persistence so their DONE tombstones are still published.
      active.entries.toList().forEach { (playerId, session) -> abort(playerId, session) }
      authorized.clear()
      lastRequest.clear()
      // Completed tombstones and retained generations deliberately survive reload.
    } finally {
      accepting = true
    }
  }

  fun shutdown(): Boolean {
    accepting = false
    resetSessions()
    val deadline = System.currentTimeMillis() + 10_000L
    synchronized(asyncMonitor) {
      while (activeImports > 0) {
        val remaining = deadline - System.currentTimeMillis()
        if (remaining <= 0L) return false
        try {
          asyncMonitor.wait(remaining)
        } catch (_: InterruptedException) {
          Thread.currentThread().interrupt()
          return false
        }
      }
    }
    return true
  }

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    active[event.player.uniqueId]?.let { abort(event.player.uniqueId, it) }
    authorized.remove(event.player.uniqueId)
    lastRequest.remove(event.player.uniqueId)
    if (active[event.player.uniqueId] == null) generations.remove(event.player.uniqueId)
    // Completed tombstones and importer-entered work remain bounded by expire() across reconnect.
  }

  private fun resetSessions() {
    active.entries.toList().forEach { abort(it.key, it.value) }
    authorized.clear()
    lastRequest.clear()
  }

  private fun abort(playerId: UUID, session: Active) {
    synchronized(session.lifecycle) {
      if (session.importerEntered) return
      session.cancelled = true
      active.remove(playerId, session)
      generations.remove(playerId, session.generation)
    }
  }

  private fun requirePermission(player: Player) {
    if (!player.hasPermission("oyasaimusic.import")) throw Protocol("NO_PERMISSION")
  }

  private fun respondReady(player: Player, id: UUID) {
    sender?.invoke(player, UploadPacketCodec.ready(id))
  }

  private fun respond(player: Player, id: UUID, status: Int, detail: String = "") {
    sender?.invoke(
        player,
        UploadPacketCodec.status(id, status, detail.take(64).filter { it.code in 0x20..0x7e }),
    )
  }

  private fun registerImport() = synchronized(asyncMonitor) { activeImports++ }

  private fun completeImport() =
      synchronized(asyncMonitor) {
        activeImports = (activeImports - 1).coerceAtLeast(0)
        asyncMonitor.notifyAll()
      }

  private fun errorCode(error: Throwable): String =
      when (error) {
        is Protocol -> error.code
        else -> "IMPORT"
      }

  private fun inflateBounded(compressed: ByteArray): ByteArray {
    val inflater = Inflater()
    inflater.setInput(compressed)
    val output = ByteArrayOutputStream()
    val buffer = ByteArray(4096)
    try {
      while (!inflater.finished()) {
        val count = inflater.inflate(buffer)
        if (count > 0) {
          output.write(buffer, 0, count)
          if (output.size() > UploadPacketCodec.MAX_TRANSPORT_BYTES) throw Protocol("OVERSIZED")
        } else if (inflater.needsInput() || inflater.needsDictionary()) throw Protocol("HASH")
        else throw Protocol("HASH")
      }
      if (inflater.remaining != 0) throw Protocol("HASH")
      return output.toByteArray()
    } catch (_: DataFormatException) {
      throw Protocol("HASH")
    } finally {
      inflater.end()
    }
  }

  private fun validateOymi(bytes: ByteArray, declaredNotes: Int) {
    if (bytes.size !in 20..UploadPacketCodec.MAX_OYMI_BYTES) throw Protocol("MALFORMED")
    val input = ByteBuffer.wrap(bytes)
    if (input.int != 0x4F594D49 || input.short.toInt() !in 1..3 || input.short.toInt() != 0)
        throw Protocol("MALFORMED")
    val metadata = input.int
    val notes = input.int
    input.int
    if (
        metadata !in 2..(bytes.size - 20) ||
            notes !in 1..UploadPacketCodec.MAX_NOTES ||
            notes != declaredNotes ||
            20L + metadata.toLong() + notes.toLong() * 8L != bytes.size.toLong()
    )
        throw Protocol("MALFORMED")
  }

  private class Protocol(val code: String) : IllegalArgumentException(code)
}
