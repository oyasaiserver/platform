package com.github.sahyuya.oyasaiMusic.command

import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.Base64
import java.security.SecureRandom
import com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.plugin.Plugin
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

/** Command-side capability state. S2C registration is intentionally separate from this trust gate. */
class OyasaiClientCommand(private val plugin: Plugin) : CommandExecutor, Listener {
  companion object {
    private const val MAX_EXPECTED_PER_PLAYER=8
    private const val MAX_EXPECTED_GLOBAL=256
    private const val PROBE_TIMEOUT_TICKS=60L
    private const val PROBE_TIMEOUT_MILLIS=3_000L
  }
  private enum class Presence { MOD_PRESENT, VANILLA_ONLY }
  private data class PendingProbe(
      val nonce: String,
      val generation: Long,
      val expiresAt: Long,
      var callback: (Boolean) -> Unit,
  )
  private val random = SecureRandom()
  private val pending = ConcurrentHashMap<UUID, PendingProbe>()
  private val presence = ConcurrentHashMap<UUID, Presence>()
  private val capable = ConcurrentHashMap<UUID, Long>()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val ready = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, String>>()
  private data class ExpectedReady(val hash: String, val generation: Long, val expiresAt: Long)
  private val expected = ConcurrentHashMap<UUID, ConcurrentHashMap<UUID, ExpectedReady>>()
  init { plugin.server.messenger.registerOutgoingPluginChannel(plugin, PlaybackBuffer.CHANNEL) }
  override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
    val player = sender as? Player ?: return true
    if (args.getOrNull(1) != "1") return true
    when (args[0]) {
      "a" -> if (args.size == 3) acceptProbeAnswer(player, args[2])
      "r" -> if (args.size == 4 && isCapable(player.uniqueId)) {
        val session=runCatching { UUID.fromString(args[2]) }.getOrNull()
        val wanted=session?.let { expected[player.uniqueId]?.get(it) }
        if (session != null && wanted != null && wanted.expiresAt >= System.currentTimeMillis() && wanted.generation == generations[player.uniqueId] && args[3] == wanted.hash)
          ready.computeIfAbsent(player.uniqueId){ConcurrentHashMap()}[session]=args[3]
      }
    }
    return true
  }
  /**
   * Resolve this connection once, on its first eligible personal playback. While the probe is
   * pending, a newer playback request replaces the callback so repeated clicks cannot start two
   * songs after the same answer. The MOD/no-MOD decision is retained until quit or reload.
   */
  fun resolveForPlayback(player: Player, callback: (Boolean) -> Unit) {
    check(plugin.server.isPrimaryThread) { "Playback capability must be resolved on the server thread" }
    when (presence[player.uniqueId]) {
      Presence.MOD_PRESENT -> { callback(true); return }
      Presence.VANILLA_ONLY -> { callback(false); return }
      null -> Unit
    }
    pending[player.uniqueId]?.let { active ->
      active.callback = callback
      return
    }
    val generation = System.nanoTime()
    val nonce = Base64.getUrlEncoder().withoutPadding().encodeToString(ByteArray(16).also(random::nextBytes))
    val probe = PendingProbe(nonce, generation, System.currentTimeMillis() + PROBE_TIMEOUT_MILLIS, callback)
    generations[player.uniqueId] = generation
    capable.remove(player.uniqueId)
    ready.remove(player.uniqueId)
    expected.remove(player.uniqueId)
    pending[player.uniqueId] = probe
    player.sendPluginMessage(plugin, PlaybackBuffer.CHANNEL, PlaybackBuffer.envelope(PlaybackBuffer.TYPE_PROBE, UUID(0, 0)) { writeUTF(nonce) })
    plugin.server.scheduler.runTaskLater(plugin, Runnable {
      val active = pending[player.uniqueId]
      if (active !== probe || active.generation != generations[player.uniqueId]) return@Runnable
      pending.remove(player.uniqueId, active)
      presence[player.uniqueId] = Presence.VANILLA_ONLY
      active.callback(false)
    }, PROBE_TIMEOUT_TICKS)
  }
  private fun acceptProbeAnswer(player: Player, nonce: String) {
    if (!nonce.matches(Regex("[A-Za-z0-9_-]{22}"))) return
    val active = pending[player.uniqueId] ?: return
    if (active.nonce != nonce || active.expiresAt < System.currentTimeMillis() || active.generation != generations[player.uniqueId]) return
    if (!pending.remove(player.uniqueId, active)) return
    presence[player.uniqueId] = Presence.MOD_PRESENT
    capable[player.uniqueId] = active.generation
    active.callback(true)
  }
  fun isCapable(playerId: UUID): Boolean = presence[playerId] == Presence.MOD_PRESENT && capable[playerId] != null && capable[playerId] == generations[playerId]
  fun expectReady(playerId: UUID, session: UUID, hash: ByteArray, deadlineMillis: Long) {
    sweepExpected()
    if (expected.values.sumOf { it.size } >= MAX_EXPECTED_GLOBAL) return
    val generation = generations[playerId] ?: return
    val values=expected.computeIfAbsent(playerId) { ConcurrentHashMap() }
    if (values.size < MAX_EXPECTED_PER_PLAYER || values.containsKey(session)) values[session] = ExpectedReady(Base64.getUrlEncoder().withoutPadding().encodeToString(hash), generation, deadlineMillis)
  }
  fun removeExpected(playerId: UUID, session: UUID) { expected[playerId]?.remove(session); ready[playerId]?.remove(session) }
  fun removeExpected(session: UUID) { expected.keys.forEach { removeExpected(it, session) } }
  private fun sweepExpected() { val now=System.currentTimeMillis(); expected.entries.removeIf { (_, values) -> values.entries.removeIf { it.value.expiresAt < now }; values.isEmpty() } }
  fun isReady(playerId: UUID, session: UUID, hash: ByteArray): Boolean {
    val expectedReady = expected[playerId]?.get(session) ?: return false
    if (expectedReady.expiresAt < System.currentTimeMillis() || expectedReady.generation != generations[playerId] || !isCapable(playerId)) {
      expected[playerId]?.remove(session); return false
    }
    val actual = ready[playerId]?.remove(session) ?: return false
    expected[playerId]?.remove(session)
    return actual == Base64.getUrlEncoder().withoutPadding().encodeToString(hash)
  }
  /** Reload invalidates every connection generation but leaves the registered channel available. */
  fun invalidateCapabilities() { pending.clear(); presence.clear(); capable.clear(); generations.clear(); ready.clear(); expected.clear() }
  fun clear() { invalidateCapabilities(); plugin.server.messenger.unregisterOutgoingPluginChannel(plugin, PlaybackBuffer.CHANNEL) }
  @EventHandler fun quit(event: PlayerQuitEvent) { pending.remove(event.player.uniqueId); presence.remove(event.player.uniqueId); capable.remove(event.player.uniqueId); generations.remove(event.player.uniqueId); ready.remove(event.player.uniqueId); expected.remove(event.player.uniqueId) }
}

