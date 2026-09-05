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
  private enum class Presence { MOD_PRESENT, VANILLA_ONLY }
  private data class Pending(
      val nonce: String,
      val generation: Long,
      val expiresAtNanos: Long,
      var callback: (Boolean) -> Unit,
      var timeoutTask: BukkitTask? = null,
  )
  private data class Expected(val hash: String, val generation: Long, @Volatile var expiresAt: Long)
  data class Started(val firstNoteMs: Int, val generation: Long)
  private data class Failed(val positionMs: Int, val generation: Long)
  private val random = SecureRandom()
  private val pending = ConcurrentHashMap<UUID, Pending>()
  private val presence = ConcurrentHashMap<UUID, Presence>()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val ready = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, String>>()
  private val expected = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Expected>>()
  private val clientCapabilities = ConcurrentHashMap<UUID, Int>()
  private val acceptedNonces = ConcurrentHashMap<UUID, Pair<Long, String>>()
  private val started = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Started>>()
  private val failed = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Failed>>()
  /** Confirmed local sessions remain tracked after their first-note handshake is released. */
  private val confirmed = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, Long>>()
  @Volatile private var failureHandler: ((UUID, UUID) -> Unit)? = null

  fun bindFailureHandler(handler: ((UUID, UUID) -> Unit)?) {
    failureHandler = handler
  }

  fun handlePacket(player: Player, message: PlaybackWireCodec.Message) {
    when (message.type) {
      PlaybackBuffer.TYPE_PROBE_RESPONSE -> {
        if (message.id != UUID(0L, 0L)) return
        val nonce = runCatching {
          DataInputStream(ByteArrayInputStream(message.body)).use { input -> input.readUTF().also { require(input.available() == 0) } }
        }.getOrNull() ?: return
        acceptProbe(player, nonce)
      }
      PlaybackBuffer.TYPE_READY -> {
        if (message.body.size != 32 || !isCapable(player.uniqueId)) return
        acceptReady(player, message.id, Base64.getUrlEncoder().withoutPadding().encodeToString(message.body))
      }
      PlaybackBuffer.TYPE_CLIENT_CAPABILITIES -> {
        if (message.id != UUID(0L, 0L)) return
        val parsed = runCatching { DataInputStream(ByteArrayInputStream(message.body)).use { input ->
          val nonce = input.readUTF(); val bits = input.readInt(); require(input.available() == 0); nonce to bits
        } }.getOrNull() ?: return
        if (parsed.first.matches(Regex("[A-Za-z0-9_-]{22}"))) acceptCapabilities(player, parsed.first, parsed.second)
      }
      PlaybackBuffer.TYPE_STARTED_ACK -> {
        val value = runCatching { DataInputStream(ByteArrayInputStream(message.body)).use { input ->
          val hash = input.readNBytes(32); val first = input.readInt(); require(hash.size == 32 && first >= 0 && input.available() == 0); hash to first
        } }.getOrNull() ?: return
        acceptStarted(player, message.id, value.first, value.second)
      }
      PlaybackBuffer.TYPE_CLIENT_PLAYBACK_FAILED -> {
        val value = runCatching { DataInputStream(ByteArrayInputStream(message.body)).use { input ->
          val reason = input.readUnsignedByte(); val pos = input.readInt(); require(reason in 1..6 && pos >= 0 && input.available() == 0); pos
        } }.getOrNull() ?: return
        val generation = generations[player.uniqueId] ?: return
        val acceptedGeneration =
            expected[player.uniqueId]?.get(message.id)?.generation
                ?: confirmed[player.uniqueId]?.get(message.id)
                ?: return
        if (acceptedGeneration == generation) {
          failed.computeIfAbsent(player.uniqueId) { ConcurrentHashMap() }[message.id] =
              Failed(value, generation)
          // Plugin messages are dispatched on the Paper primary thread by OyasaiPluginMessaging.
          // The engine independently verifies that the session/player is still active.
          failureHandler?.invoke(player.uniqueId, message.id)
        }
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
    player.sendPluginMessage(
        plugin,
        PlaybackBuffer.CHANNEL,
        PlaybackBuffer.serverCapabilitiesEnvelope(plugin.server.minecraftVersion),
    )
    pending[player.uniqueId]?.let { it.callback = callback; return }
    val generation = System.nanoTime()
    val nonce = Base64.getUrlEncoder().withoutPadding().encodeToString(ByteArray(16).also(random::nextBytes))
    val active = Pending(nonce, generation, System.nanoTime() + PROBE_TIMEOUT_NANOS, callback)
    generations[player.uniqueId] = generation; pending[player.uniqueId] = active
    ready.remove(player.uniqueId); expected.remove(player.uniqueId)
    player.sendPluginMessage(plugin, PlaybackBuffer.CHANNEL, PlaybackBuffer.envelope(PlaybackBuffer.TYPE_PROBE, UUID(0L, 0L)) { writeUTF(nonce) })
    active.timeoutTask = plugin.server.scheduler.runTaskTimer(plugin, Runnable {
      if (pending[player.uniqueId] !== active || generations[player.uniqueId] != generation || !player.isOnline) {
        active.timeoutTask?.cancel()
        return@Runnable
      }
      if (System.nanoTime() < active.expiresAtNanos) return@Runnable
      if (pending.remove(player.uniqueId, active)) {
        presence[player.uniqueId] = Presence.VANILLA_ONLY
        active.callback(false)
      }
      active.timeoutTask?.cancel()
    }, 1L, 1L)
  }

  private fun acceptProbe(player: Player, nonce: String) {
    if (!nonce.matches(Regex("[A-Za-z0-9_-]{22}"))) return
    val active = pending[player.uniqueId] ?: return
    if (active.nonce != nonce || active.expiresAtNanos < System.nanoTime() || active.generation != generations[player.uniqueId] || !pending.remove(player.uniqueId, active)) return
    active.timeoutTask?.cancel()
    presence[player.uniqueId] = Presence.MOD_PRESENT
    acceptedNonces[player.uniqueId] = active.generation to active.nonce
    active.callback(true)
  }
  private fun acceptCapabilities(player: Player, nonce: String, bits: Int) {
    val active = pending[player.uniqueId]
    val accepted = acceptedNonces[player.uniqueId]
    val generation = generations[player.uniqueId]
    if (
        (active != null && active.nonce == nonce && active.generation == generation && active.expiresAtNanos >= System.nanoTime()) ||
            (accepted != null && accepted.first == generation && accepted.second == nonce)
    ) {
      clientCapabilities[player.uniqueId] = bits
    }
  }

  fun isUnknown(playerId: UUID): Boolean = presence[playerId] == null && pending[playerId] == null
  fun isVanillaOnly(playerId: UUID): Boolean = presence[playerId] == Presence.VANILLA_ONLY
  fun isCapable(playerId: UUID): Boolean = presence[playerId] == Presence.MOD_PRESENT && generations[playerId] != null
  fun supportsV2(playerId: UUID): Boolean = isCapable(playerId) && (clientCapabilities[playerId] ?: 0) and (PlaybackBuffer.CLIENT_CAP_OYPB_V2 or PlaybackBuffer.CLIENT_CAP_STARTED_ACK or PlaybackBuffer.CLIENT_CAP_FIXED_CUSTOM_PATTERN or PlaybackBuffer.CLIENT_CAP_POSITIONAL_PAN) == (PlaybackBuffer.CLIENT_CAP_OYPB_V2 or PlaybackBuffer.CLIENT_CAP_STARTED_ACK or PlaybackBuffer.CLIENT_CAP_FIXED_CUSTOM_PATTERN or PlaybackBuffer.CLIENT_CAP_POSITIONAL_PAN)
  fun supportsBankManifest(playerId: UUID): Boolean =
      supportsV2(playerId) &&
          (clientCapabilities[playerId] ?: 0) and PlaybackBuffer.CLIENT_CAP_BANK_MANIFEST_V1 != 0

  /** Eager probe for join-time bank decision: sends SERVER_CAPABILITIES + PROBE without needing a playback. */
  fun probeForBankDecision(player: Player) {
    check(plugin.server.isPrimaryThread)
    if (presence[player.uniqueId] != null || pending[player.uniqueId] != null) return
    // Reuse resolveForPlayback logic but with a no-op callback that just sets presence
    resolveForPlayback(player) { }
  }
  fun expectReady(playerId: UUID, session: UUID, hash: ByteArray, deadlineMillis: Long) {
    sweep()
    val generation = generations[playerId] ?: return
    if (expected.values.sumOf { it.size } >= 256 && expected[playerId]?.containsKey(session) != true) return
    val values = expected.computeIfAbsent(playerId) { ConcurrentHashMap() }
    if (values.size < 8 || values.containsKey(session)) values[session] = Expected(Base64.getUrlEncoder().withoutPadding().encodeToString(hash), generation, deadlineMillis)
  }
  private fun acceptReady(player: Player, session: UUID, hash: String) {
    val wanted = expected[player.uniqueId]?.get(session) ?: return
    if (wanted.expiresAt >= System.currentTimeMillis() && wanted.generation == generations[player.uniqueId]) ready.computeIfAbsent(player.uniqueId) { ConcurrentHashMap() }[session] = hash
  }
  fun isReady(playerId: UUID, session: UUID, hash: ByteArray): Boolean {
    val wanted = expected[playerId]?.get(session) ?: return false
    if (wanted.expiresAt < System.currentTimeMillis() || wanted.generation != generations[playerId] || !isCapable(playerId)) return false
    return ready[playerId]?.remove(session) == Base64.getUrlEncoder().withoutPadding().encodeToString(hash)
  }
  fun markAckPending(playerId: UUID, session: UUID, hash: ByteArray, deadlineMillis: Long): Boolean {
    val wanted = expected[playerId]?.get(session) ?: return false
    if (
        wanted.generation != generations[playerId] ||
            wanted.hash != Base64.getUrlEncoder().withoutPadding().encodeToString(hash) ||
            !isCapable(playerId)
    ) return false
    wanted.expiresAt = deadlineMillis
    return true
  }
  fun consumeStarted(playerId: UUID, session: UUID, hash: ByteArray): Started? {
    val expectedValue = expected[playerId]?.get(session) ?: return null
    val value = started[playerId]?.remove(session) ?: return null
    return value.takeIf { it.generation == generations[playerId] && expectedValue.generation == value.generation && expectedValue.hash == Base64.getUrlEncoder().withoutPadding().encodeToString(hash) }
  }
  fun markLocalConfirmed(playerId: UUID, session: UUID): Boolean {
    val wanted = expected[playerId]?.get(session) ?: return false
    val generation = generations[playerId] ?: return false
    if (wanted.generation != generation || !isCapable(playerId)) return false
    confirmed.computeIfAbsent(playerId) { ConcurrentHashMap() }[session] = generation
    return true
  }
  fun consumeFailure(playerId: UUID, session: UUID): Int? {
    val wanted = expected[playerId]?.get(session) ?: return null
    val value = failed[playerId]?.remove(session) ?: return null
    return value.positionMs.takeIf {
      value.generation == generations[playerId] && wanted.generation == value.generation
    }
  }
  private fun acceptStarted(player: Player, session: UUID, hash: ByteArray, first: Int) {
    val wanted = expected[player.uniqueId]?.get(session) ?: return
    if (wanted.expiresAt >= System.currentTimeMillis() && wanted.generation == generations[player.uniqueId] && wanted.hash == Base64.getUrlEncoder().withoutPadding().encodeToString(hash)) started.computeIfAbsent(player.uniqueId) { ConcurrentHashMap() }[session] = Started(first, wanted.generation)
  }
  fun removeExpected(playerId: UUID, session: UUID) { expected[playerId]?.remove(session); ready[playerId]?.remove(session); started[playerId]?.remove(session); failed[playerId]?.remove(session) }
  fun releasePlayback(playerId: UUID, session: UUID) {
    removeExpected(playerId, session)
    confirmed[playerId]?.remove(session)
  }
  fun removeExpected(session: UUID) {
    (expected.keys + confirmed.keys).forEach { releasePlayback(it, session) }
  }
  fun refreshClientCapabilities(playerId: UUID) {
    check(plugin.server.isPrimaryThread)
    // Pack activation or client manifest reload may change BANK_MANIFEST_V1 support.
    // Clear presence so the next playback re-probes and receives updated client bits.
    pending.remove(playerId)?.timeoutTask?.cancel()
    presence.remove(playerId)
    generations.remove(playerId)
    clientCapabilities.remove(playerId)
    acceptedNonces.remove(playerId)
  }
  fun invalidateCapabilities() {
    check(plugin.server.isPrimaryThread)
    val fallbacks = pending.values.toList()
    fallbacks.forEach { it.timeoutTask?.cancel() }
    pending.clear(); presence.clear(); generations.clear(); ready.clear(); expected.clear(); clientCapabilities.clear(); acceptedNonces.clear(); started.clear(); failed.clear(); confirmed.clear()
    // Runtime reload invalidates the probe generation, but an already requested playback must not
    // disappear with it. Resolve each pending start exactly once through the ordinary Paper route.
    fallbacks.forEach { it.callback(false) }
  }
  fun clear() {
    pending.values.forEach { it.timeoutTask?.cancel() }
    pending.clear(); presence.clear(); generations.clear(); ready.clear(); expected.clear(); clientCapabilities.clear(); acceptedNonces.clear(); started.clear(); failed.clear(); confirmed.clear()
  }
  private fun sweep() { val now = System.currentTimeMillis(); expected.entries.removeIf { (_, values) -> values.entries.removeIf { it.value.expiresAt < now }; values.isEmpty() } }
  @EventHandler fun quit(event: PlayerQuitEvent) {
    val id = event.player.uniqueId
    pending.remove(id)?.timeoutTask?.cancel()
    presence.remove(id); generations.remove(id); ready.remove(id); expected.remove(id); clientCapabilities.remove(id); acceptedNonces.remove(id); started.remove(id); failed.remove(id); confirmed.remove(id)
  }

  private companion object {
    const val PROBE_TIMEOUT_NANOS = 3_000_000_000L
  }
}
