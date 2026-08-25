package com.github.sahyuya.oyasaiMusic.interop

import java.io.ByteArrayInputStream
import java.io.DataInputStream
import java.security.SecureRandom
import java.util.Base64
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.plugin.Plugin
import org.bukkit.scheduler.BukkitTask

/** Connection-generation registry for packet-only buffered playback capability. */
class OmmtPlaybackClientRegistry(private val plugin: Plugin) : Listener {
  private enum class Presence {
    MOD_PRESENT,
    VANILLA_ONLY,
  }

  private data class Pending(
      val nonce: String,
      val generation: Long,
      val expiresAtNanos: Long,
      var callback: (Boolean) -> Unit,
      var timeoutTask: BukkitTask? = null,
  )

  private data class Expected(val hash: String, val generation: Long, val expiresAt: Long)

  private val random = SecureRandom()
  private val pending = ConcurrentHashMap<UUID, Pending>()
  private val presence = ConcurrentHashMap<UUID, Presence>()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val ready = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, String>>()
  private val expected = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Expected>>()

  fun handlePacket(player: Player, message: PlaybackWireCodec.Message) {
    when (message.type) {
      PlaybackBuffer.TYPE_PROBE_RESPONSE -> {
        if (message.id != UUID(0L, 0L)) return
        val nonce =
            runCatching {
                  DataInputStream(ByteArrayInputStream(message.body)).use { input ->
                    input.readUTF().also { require(input.available() == 0) }
                  }
                }
                .getOrNull() ?: return
        acceptProbe(player, nonce)
      }
      PlaybackBuffer.TYPE_READY -> {
        if (message.body.size != 32 || !isCapable(player.uniqueId)) return
        acceptReady(
            player,
            message.id,
            Base64.getUrlEncoder().withoutPadding().encodeToString(message.body),
        )
      }
    }
  }

  fun resolveForPlayback(player: Player, callback: (Boolean) -> Unit) {
    check(plugin.server.isPrimaryThread)
    when (presence[player.uniqueId]) {
      Presence.MOD_PRESENT -> return callback(true)
      Presence.VANILLA_ONLY -> return callback(false)
      null -> Unit
    }
    pending[player.uniqueId]?.let {
      it.callback = callback
      return
    }
    val generation = System.nanoTime()
    val nonce =
        Base64.getUrlEncoder()
            .withoutPadding()
            .encodeToString(ByteArray(16).also(random::nextBytes))
    val active = Pending(nonce, generation, System.nanoTime() + PROBE_TIMEOUT_NANOS, callback)
    generations[player.uniqueId] = generation
    pending[player.uniqueId] = active
    ready.remove(player.uniqueId)
    expected.remove(player.uniqueId)
    player.sendPluginMessage(
        plugin,
        PlaybackBuffer.CHANNEL,
        PlaybackBuffer.envelope(PlaybackBuffer.TYPE_PROBE, UUID(0L, 0L)) { writeUTF(nonce) },
    )
    active.timeoutTask =
        plugin.server.scheduler.runTaskTimer(
            plugin,
            Runnable {
              if (
                  pending[player.uniqueId] !== active ||
                      generations[player.uniqueId] != generation ||
                      !player.isOnline
              ) {
                active.timeoutTask?.cancel()
                return@Runnable
              }
              if (System.nanoTime() < active.expiresAtNanos) return@Runnable
              if (pending.remove(player.uniqueId, active)) {
                presence[player.uniqueId] = Presence.VANILLA_ONLY
                active.callback(false)
              }
              active.timeoutTask?.cancel()
            },
            1L,
            1L,
        )
  }

  private fun acceptProbe(player: Player, nonce: String) {
    if (!nonce.matches(Regex("[A-Za-z0-9_-]{22}"))) return
    val active = pending[player.uniqueId] ?: return
    if (
        active.nonce != nonce ||
            active.expiresAtNanos < System.nanoTime() ||
            active.generation != generations[player.uniqueId] ||
            !pending.remove(player.uniqueId, active)
    )
        return
    active.timeoutTask?.cancel()
    presence[player.uniqueId] = Presence.MOD_PRESENT
    active.callback(true)
  }

  fun isCapable(playerId: UUID): Boolean =
      presence[playerId] == Presence.MOD_PRESENT && generations[playerId] != null

  fun expectReady(playerId: UUID, session: UUID, hash: ByteArray, deadlineMillis: Long) {
    sweep()
    val generation = generations[playerId] ?: return
    if (
        expected.values.sumOf { it.size } >= 256 && expected[playerId]?.containsKey(session) != true
    )
        return
    val values = expected.computeIfAbsent(playerId) { ConcurrentHashMap() }
    if (values.size < 8 || values.containsKey(session))
        values[session] =
            Expected(
                Base64.getUrlEncoder().withoutPadding().encodeToString(hash),
                generation,
                deadlineMillis,
            )
  }

  private fun acceptReady(player: Player, session: UUID, hash: String) {
    val wanted = expected[player.uniqueId]?.get(session) ?: return
    if (
        wanted.expiresAt >= System.currentTimeMillis() &&
            wanted.generation == generations[player.uniqueId]
    )
        ready.computeIfAbsent(player.uniqueId) { ConcurrentHashMap() }[session] = hash
  }

  fun isReady(playerId: UUID, session: UUID, hash: ByteArray): Boolean {
    val wanted = expected[playerId]?.remove(session) ?: return false
    if (
        wanted.expiresAt < System.currentTimeMillis() ||
            wanted.generation != generations[playerId] ||
            !isCapable(playerId)
    )
        return false
    return ready[playerId]?.remove(session) ==
        Base64.getUrlEncoder().withoutPadding().encodeToString(hash)
  }

  fun removeExpected(playerId: UUID, session: UUID) {
    expected[playerId]?.remove(session)
    ready[playerId]?.remove(session)
  }

  fun removeExpected(session: UUID) {
    expected.keys.forEach { removeExpected(it, session) }
  }

  fun invalidateCapabilities() {
    check(plugin.server.isPrimaryThread)
    val fallbacks = pending.values.toList()
    fallbacks.forEach { it.timeoutTask?.cancel() }
    pending.clear()
    presence.clear()
    generations.clear()
    ready.clear()
    expected.clear()
    // Runtime reload invalidates the probe generation, but an already requested playback must not
    // disappear with it. Resolve each pending start exactly once through the ordinary Paper route.
    fallbacks.forEach { it.callback(false) }
  }

  fun clear() {
    pending.values.forEach { it.timeoutTask?.cancel() }
    pending.clear()
    presence.clear()
    generations.clear()
    ready.clear()
    expected.clear()
  }

  private fun sweep() {
    val now = System.currentTimeMillis()
    expected.entries.removeIf { (_, values) ->
      values.entries.removeIf { it.value.expiresAt < now }
      values.isEmpty()
    }
  }

  @EventHandler
  fun quit(event: PlayerQuitEvent) {
    val id = event.player.uniqueId
    pending.remove(id)?.timeoutTask?.cancel()
    presence.remove(id)
    generations.remove(id)
    ready.remove(id)
    expected.remove(id)
  }

  private companion object {
    const val PROBE_TIMEOUT_NANOS = 3_000_000_000L
  }
}
