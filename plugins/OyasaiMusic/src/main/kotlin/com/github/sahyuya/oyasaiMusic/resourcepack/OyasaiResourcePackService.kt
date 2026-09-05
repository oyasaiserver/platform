package com.github.sahyuya.oyasaiMusic.resourcepack

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
import com.github.sahyuya.oyasaiMusic.util.BedrockUtil
import java.net.URI
import java.security.MessageDigest
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.atomic.AtomicLong
import kotlin.math.pow
import net.kyori.adventure.resource.ResourcePackCallback
import net.kyori.adventure.resource.ResourcePackInfo
import net.kyori.adventure.resource.ResourcePackRequest
import net.kyori.adventure.resource.ResourcePackStatus
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent

/** Persisted opt-in pack service with connection-generation-safe asynchronous callbacks. */
class OyasaiResourcePackService(
    private val plugin: OyasaiMusic,
    private val preferences: ResourcePackPreferenceRepository,
) : Listener {
  /**
   * Per-connection state. Persisted ALLOW is deliberately distinct from SUCCESS: only an Adventure
   * load callback or a current-generation OMMT bank capability may establish SUCCESS.
   */
  private enum class State {
    PREFERENCE_PENDING,
    ALLOWED,
    REQUESTED,
    SUCCESS,
    DECLINED,
    FAILED,
    TIMED_OUT,
  }

  private data class Config(
      val id: UUID,
      val url: URI,
      val sha1: String,
      val prompt: String,
      val eventTemplate: String,
      val manifestHash: ByteArray,
  )

  private data class RequestToken(val generation: Long, val id: UUID, val sha1: String)

  /** A playback deferred until an in-flight pack download resolves. Latest wins per player. */
  private data class PendingPlay(
      val song: com.github.sahyuya.oyasaiMusic.model.Song,
      val onCompletion: (() -> Unit)?,
      val remember: Boolean,
      val generation: Long,
  )

  private val pendingPlays = ConcurrentHashMap<UUID, PendingPlay>()

  data class ExtendedPlayback(val soundEvent: String, val pitch: Float)

  private val generationSequence = AtomicLong()
  private val preferenceSequence = AtomicLong()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val preferenceRevisions = ConcurrentHashMap<UUID, Long>()
  private val states = ConcurrentHashMap<UUID, State>()
  private val requested = ConcurrentHashMap<UUID, RequestToken>()
  @Volatile private var config: Config? = loadConfig()

  fun reload() {
    val old = config
    config = loadConfig()
    states.clear()
    requested.clear()
    preferenceRevisions.clear()
    pendingPlays.keys.toList().forEach { id ->
      pendingPlays.remove(id)
      Bukkit.getPlayer(id)
          ?.takeIf { it.isOnline }
          ?.sendMessage("§e再読み込みのため保留中の再生を破棄しました。再度再生してください。")
    }
    Bukkit.getOnlinePlayers().forEach { player ->
      if (old != null && old.id != config?.id) runCatching { player.removeResourcePack(old.id) }
      beginConnection(player)
    }
  }

  fun shutdown() {
    states.clear()
    requested.clear()
    generations.clear()
    preferenceRevisions.clear()
    pendingPlays.clear()
  }

  /**
   * Defers a playback until the in-flight pack download for this connection resolves. Called by
   * PlaybackController when [requestIfNeeded] started a download.
   */
  fun deferPlayback(
      playerId: UUID,
      song: com.github.sahyuya.oyasaiMusic.model.Song,
      onCompletion: (() -> Unit)?,
      remember: Boolean,
  ) {
    val generation = generations[playerId] ?: return
    pendingPlays[playerId] = PendingPlay(song, onCompletion, remember, generation)
  }

  /** Discards a deferred playback (superseded play, quit, reload, shutdown). */
  fun discardPendingPlayback(playerId: UUID) {
    pendingPlays.remove(playerId)
  }

  /** Restarts a deferred playback after the pack resolved, or falls back to vanilla range. */
  private fun resolvePendingPlayback(playerId: UUID, downloaded: Boolean) {
    val pending = pendingPlays.remove(playerId) ?: return
    if (pending.generation != generations[playerId]) return
    val online = Bukkit.getPlayer(playerId)?.takeIf { it.isOnline } ?: return
    if (!downloaded) {
      online.sendMessage("§eパックの読み込みをスキップし通常音域で再生します。")
    }
    plugin.playbackController.play(online, pending.song, pending.onCompletion, pending.remember)
  }

  fun isLoaded(player: UUID): Boolean = states[player] == State.SUCCESS

  /**
   * Bedrock/.mcpack applied externally (Transfer + Geyser injection): treat as loaded without the
   * Java pack flow. No load screen, no download tracking.
   */
  fun markExternalSuccess(playerId: UUID) {
    states[playerId] = State.SUCCESS
    requested.remove(playerId)
    Bukkit.getPlayer(playerId)?.takeIf { it.isOnline }?.let(::sendBankConsent)
  }

  /** Forget per-connection pack state (Bedrock deny path). */
  fun forget(playerId: UUID) {
    states[playerId] = State.DECLINED
    requested.remove(playerId)
    resolvePendingPlayback(playerId, false)
    Bukkit.getPlayer(playerId)?.takeIf { it.isOnline }?.let(::sendBankConsent)
  }

  fun manifestHashFor(player: UUID): ByteArray? =
      config?.manifestHash?.takeIf { isLoaded(player) }?.copyOf()

  fun configuredManifestHash(): ByteArray? = config?.manifestHash?.copyOf()

  private fun sendBankConsent(player: Player) {
    val active = config
    val allowed = active != null && isLoaded(player.uniqueId)
    val hash = if (allowed) requireNotNull(active).manifestHash else ByteArray(32)
    // Use the same channel as playback; client will ignore if not OMMT.
    runCatching {
      player.sendPluginMessage(
          plugin,
          com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer.CHANNEL,
          com.github.sahyuya.oyasaiMusic.interop.PlaybackBuffer.bankConsentEnvelope(allowed, hash),
      )
    }
  }

  /** Uses vanilla for 0..24 and the nearest generated F# anchor outside that range. */
  fun extendedPlayback(player: UUID, note: NoteEvent): ExtendedPlayback? {
    val active = config ?: return null
    if (!isLoaded(player)) return null
    if (note.pitchCents in VANILLA_MIN_CENTS..VANILLA_MAX_CENTS) return null
    if (note.pitchCents !in BANK_MIN_CENTS..BANK_MAX_CENTS) return null
    val anchor =
        BANK_ANCHORS.minWith(
            compareBy<Int> { kotlin.math.abs(note.pitchCents - it * 100) }.thenBy { it }
        )
    val residualCents = note.pitchCents - anchor * 100
    val event =
        note.customSound?.let { raw ->
          val canonical = raw.lowercase().let { if (':' in it) it else "minecraft:$it" }
          if (!canonical.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+"))) return null
          val pattern =
              VanillaSoundCatalog.patternForSeed(canonical, note.customSoundSeed ?: return null)
                  ?: return null
          val key =
              MessageDigest.getInstance("SHA-256")
                  .digest(canonical.toByteArray(Charsets.UTF_8))
                  .joinToString("") { "%02x".format(it.toInt() and 0xff) }
                  .take(16)
          "oyasaimusic:bank/c/$key/p/$pattern/a/${anchorToken(anchor)}"
        }
            ?: run {
              if (note.instrument !in 0..19) return null
              active.eventTemplate
                  .replace("{instrument}", note.instrument.toString())
                  .replace("{anchor}", anchorToken(anchor))
            }
    if (!event.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+"))) return null
    return ExtendedPlayback(event, 2.0.pow(residualCents / 1200.0).toFloat())
  }

  fun allow(player: Player, acknowledge: Boolean = true) {
    config
        ?: run {
          player.sendMessage("§c拡張音域リソースパックはサーバーで利用できません。")
          return
        }
    if (acknowledge) {
      player.sendMessage("§a拡張音域リソースパックの有効化を受け付けました。必要な場合はダウンロード確認が表示されます。")
    }
    val generation =
        generations.computeIfAbsent(player.uniqueId) { generationSequence.incrementAndGet() }
    val preferenceRevision = preferenceSequence.incrementAndGet()
    preferenceRevisions[player.uniqueId] = preferenceRevision
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              runCatching { preferences.set(player.uniqueId, ResourcePackPreference.ALLOW) }
                  .onSuccess {
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable {
                              if (
                                  player.isOnline &&
                                      generations[player.uniqueId] == generation &&
                                      preferenceRevisions[player.uniqueId] == preferenceRevision
                              ) {
                                if (
                                    states[player.uniqueId] !in
                                        setOf(State.REQUESTED, State.SUCCESS)
                                ) {
                                  states[player.uniqueId] = State.ALLOWED
                                }
                                sendBankConsent(player)
                                // /mm rp allow is an explicit, eligible action. Resolve the client
                                // route once,
                                // then either trust a matching OMMT bank or request the external
                                // Java pack.
                                plugin.ommtPlaybackClientRegistry.resolveForPlayback(player) {
                                  if (
                                      !player.isOnline || generations[player.uniqueId] != generation
                                  )
                                      return@resolveForPlayback
                                  requestIfNeeded(player)
                                }
                              }
                            },
                        )
                  }
                  .onFailure {
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable {
                              if (
                                  player.isOnline &&
                                      generations[player.uniqueId] == generation &&
                                      preferenceRevisions[player.uniqueId] == preferenceRevision
                              ) {
                                player.sendMessage("§c設定の保存に失敗したため、許可状態は変更しませんでした。")
                              }
                            },
                        )
                  }
            },
        )
  }

  fun deny(player: Player) {
    val generation =
        generations.computeIfAbsent(player.uniqueId) { generationSequence.incrementAndGet() }
    val preferenceRevision = preferenceSequence.incrementAndGet()
    preferenceRevisions[player.uniqueId] = preferenceRevision
    states[player.uniqueId] = State.DECLINED
    requested.remove(player.uniqueId)
    // A pending download is moot: fall back to vanilla range immediately.
    resolvePendingPlayback(player.uniqueId, false)
    config?.let { active -> runCatching { player.removeResourcePack(active.id) } }
    player.sendMessage("§e拡張音域リソースパックをこの接続で停止しました。")
    // Notify OMMT client to disable bundled bank for preview/playback.
    sendBankConsent(player)
    // Force re-probe so next playback uses vanilla.
    plugin.ommtPlaybackClientRegistry.refreshClientCapabilities(player.uniqueId)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              runCatching { preferences.set(player.uniqueId, ResourcePackPreference.DENY) }
                  .onFailure {
                    Bukkit.getScheduler()
                        .runTask(
                            plugin,
                            Runnable {
                              if (
                                  player.isOnline &&
                                      generations[player.uniqueId] == generation &&
                                      preferenceRevisions[player.uniqueId] == preferenceRevision
                              ) {
                                player.sendMessage("§c自動読み込みを停止しましたが、次回接続用設定の保存に失敗しました。")
                              }
                            },
                        )
                  }
            },
        )
  }

  @EventHandler fun onJoin(event: PlayerJoinEvent) = beginConnection(event.player)

  @EventHandler
  fun onQuit(event: PlayerQuitEvent) {
    val id = event.player.uniqueId
    states.remove(id)
    requested.remove(id)
    generations.remove(id)
    preferenceRevisions.remove(id)
    pendingPlays.remove(id)
  }

  private fun beginConnection(player: Player) {
    config ?: return
    val generation = generationSequence.incrementAndGet()
    val preferenceRevision = preferenceSequence.incrementAndGet()
    generations[player.uniqueId] = generation
    preferenceRevisions[player.uniqueId] = preferenceRevision
    states[player.uniqueId] = State.PREFERENCE_PENDING
    requested.remove(player.uniqueId)
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val preference =
                  runCatching { preferences.get(player.uniqueId) }
                      .getOrDefault(ResourcePackPreference.DENY)
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (
                            !player.isOnline ||
                                generations[player.uniqueId] != generation ||
                                preferenceRevisions[player.uniqueId] != preferenceRevision
                        )
                            return@Runnable
                        // A stored preference is not evidence that the pack is loaded for this
                        // connection.
                        // Keep it ALLOWED until the first eligible playback resolves
                        // OMMT-vs-vanilla.
                        if (preference == ResourcePackPreference.ALLOW) {
                          if (states[player.uniqueId] !in setOf(State.REQUESTED, State.SUCCESS)) {
                            states[player.uniqueId] = State.ALLOWED
                          }
                        } else {
                          states[player.uniqueId] = State.DECLINED
                          requested.remove(player.uniqueId)
                        }
                        sendBankConsent(player)
                        if (pendingPlays.containsKey(player.uniqueId)) {
                          if (preference != ResourcePackPreference.ALLOW) {
                            resolvePendingPlayback(player.uniqueId, false)
                          } else if (!requestIfNeeded(player)) {
                            resolvePendingPlayback(player.uniqueId, isLoaded(player.uniqueId))
                          }
                        }
                      },
                  )
            },
        )
  }

  /**
   * Resolves the persisted ALLOW state for the current playback route.
   *
   * Returns true whenever playback must be deferred: preference I/O, an OMMT probe, or a pack
   * request is still in flight. SUCCESS is reached only from a matching OMMT bank or the
   * ResourcePackCallback for this connection generation.
   */
  fun requestIfNeeded(player: Player): Boolean {
    val active = config ?: return false
    val generation = generations[player.uniqueId] ?: return false
    if (!player.isOnline) return false
    when (states[player.uniqueId]) {
      State.PREFERENCE_PENDING -> return true
      State.REQUESTED -> return true
      State.SUCCESS,
      State.DECLINED,
      State.FAILED,
      State.TIMED_OUT,
      null -> return false
      State.ALLOWED -> Unit
    }

    // Bedrock pack application is owned by BedrockTransferService and its transfer rejoin.
    val bedrockPrefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    if (BedrockUtil.isBedrock(player, bedrockPrefix)) return false

    // A current OMMT client that advertises the exact bank capability needs no Java pack
    // request. The persisted ALLOW still gates this opt-in path.
    if (
        plugin.ommtPlaybackClientRegistry.isCapable(player.uniqueId) &&
            plugin.ommtPlaybackClientRegistry.supportsBankManifest(player.uniqueId)
    ) {
      states[player.uniqueId] = State.SUCCESS
      requested.remove(player.uniqueId)
      sendBankConsent(player)
      return false
    }

    // Route discovery normally completed before this method is called. Keep the edge case
    // safe: wait for the probe rather than treating UNKNOWN as a loaded pack.
    if (plugin.ommtPlaybackClientRegistry.isUnknown(player.uniqueId)) {
      plugin.ommtPlaybackClientRegistry.resolveForPlayback(player) {
        if (!player.isOnline || generations[player.uniqueId] != generation)
            return@resolveForPlayback
        if (!requestIfNeeded(player)) {
          resolvePendingPlayback(player.uniqueId, isLoaded(player.uniqueId))
        }
      }
      return true
    }

    val token = RequestToken(generation, active.id, active.sha1)
    if (requested[player.uniqueId] == token && states[player.uniqueId] == State.REQUESTED)
        return true
    if (plugin.ommtPlaybackClientRegistry.isCapable(player.uniqueId)) {
      player.sendMessage("§eお使いのMOD内蔵音源が現在のサーバーパックと一致しないため、サーバーパックを適用します。")
    }
    request(player, active, generation)
    return states[player.uniqueId] == State.REQUESTED
  }

  private fun request(player: Player, active: Config, generation: Long) {
    // A Java resource-pack request must never be sent to a Bedrock client.
    val bedrockPrefix = plugin.config.getString("bedrock.name-prefix", ".") ?: "."
    if (BedrockUtil.isBedrock(player, bedrockPrefix)) {
      states[player.uniqueId] = State.FAILED
      player.sendMessage("§e統合版へのリソースパック適用は現在準備中です。再生は通常音域になります。")
      sendBankConsent(player)
      return
    }
    val token = RequestToken(generation, active.id, active.sha1)
    if (requested[player.uniqueId] == token && states[player.uniqueId] == State.REQUESTED) return
    requested[player.uniqueId] = token
    states[player.uniqueId] = State.REQUESTED
    val info = ResourcePackInfo.resourcePackInfo(active.id, active.url, active.sha1)
    val request =
        ResourcePackRequest.resourcePackRequest()
            .packs(info)
            .required(false)
            .replace(false)
            .prompt(Component.text(active.prompt))
            .callback(
                ResourcePackCallback { packId, status, _ ->
                  if (
                      packId != active.id ||
                          requested[player.uniqueId] != token ||
                          generations[player.uniqueId] != generation ||
                          status.intermediate()
                  )
                      return@ResourcePackCallback
                  val success = status == ResourcePackStatus.SUCCESSFULLY_LOADED
                  states[player.uniqueId] = if (success) State.SUCCESS else State.FAILED
                  plugin.logger.info(
                      "Resource pack ${status.name} for ${player.name} (${player.uniqueId})"
                  )
                  // Always send consent to inform OMMT's bundled preview.
                  Bukkit.getScheduler()
                      .runTask(
                          plugin,
                          Runnable {
                            sendBankConsent(player)
                            // Re-probe only for OMMT-capable players: vanilla must keep
                            // VANILLA_ONLY, otherwise
                            // every playback would re-probe and re-trigger the pack decision.
                            if (
                                success &&
                                    plugin.ommtPlaybackClientRegistry.isCapable(player.uniqueId)
                            ) {
                              plugin.ommtPlaybackClientRegistry.refreshClientCapabilities(
                                  player.uniqueId
                              )
                            }
                            // A deferred playback starts now that the download resolved: bank range
                            // on
                            // success, vanilla fallback otherwise.
                            resolvePendingPlayback(player.uniqueId, success)
                          },
                      )
                }
            )
            .build()
    player.sendResourcePacks(request)
    plugin.logger.info("Sent resource pack to ${player.name} (${player.uniqueId})")
    Bukkit.getScheduler()
        .runTaskLater(
            plugin,
            Runnable {
              if (
                  requested[player.uniqueId] == token &&
                      generations[player.uniqueId] == generation &&
                      states[player.uniqueId] == State.REQUESTED
              ) {
                states[player.uniqueId] = State.TIMED_OUT
                plugin.logger.info(
                    "Resource pack TIMED_OUT for ${player.name} (${player.uniqueId})"
                )
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          sendBankConsent(player)
                          resolvePendingPlayback(player.uniqueId, false)
                        },
                    )
              }
            },
            600L,
        )
  }

  private fun loadConfig(): Config? =
      runCatching {
            if (!plugin.config.getBoolean("resource-pack.enabled", false)) return null
            val id = UUID.fromString(plugin.config.getString("resource-pack.id", "") ?: "")
            require(id != UUID(0L, 0L))
            val raw = plugin.config.getString("resource-pack.url", "") ?: ""
            require(raw.length <= 2048 && raw.all { it.code in 0..127 })
            val uri = URI(raw)
            require(uri.scheme == "https" && uri.userInfo == null && !uri.host.isNullOrBlank())
            val sha1 = plugin.config.getString("resource-pack.sha1", "") ?: ""
            require(sha1.matches(Regex("[0-9a-f]{40}")))
            val template =
                plugin.config.getString("resource-pack.instrument-bank-event-template", "") ?: ""
            require(
                template.length <= 256 &&
                    template.contains("{instrument}") &&
                    template.contains("{anchor}")
            )
            require(template.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._{}-]+")))
            val manifestHex =
                plugin.config.getString("resource-pack.bank-manifest-sha256", "") ?: ""
            require(manifestHex.matches(Regex("[0-9a-f]{64}")))
            Config(
                id,
                uri,
                sha1,
                plugin.config.getString(
                    "resource-pack.prompt",
                    "Load the extended-pitch resource pack?",
                ) ?: "Load the extended-pitch resource pack?",
                template,
                manifestHex.chunked(2).map { it.toInt(16).toByte() }.toByteArray(),
            )
          }
          .onFailure { error ->
            if (plugin.config.getBoolean("resource-pack.enabled", false))
                plugin.logger.warning("拡張音域リソースパック設定を無効化しました: ${error.message}")
          }
          .getOrNull()

  private fun anchorToken(anchor: Int): String = if (anchor < 0) "m${-anchor}" else "p$anchor"

  private companion object {
    const val VANILLA_MIN_CENTS = 0
    const val VANILLA_MAX_CENTS = 2_400
    const val BANK_MIN_CENTS = -4_800
    const val BANK_MAX_CENTS = 7_200
    val BANK_ANCHORS = intArrayOf(-36, -12, 36, 60)
  }
}
