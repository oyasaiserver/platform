package com.github.sahyuya.oyasaiMusic.resourcepack

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.VanillaSoundCatalog
import com.github.sahyuya.oyasaiMusic.db.ResourcePackPreferenceRepository
import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.github.sahyuya.oyasaiMusic.model.ResourcePackPreference
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
  private enum class State { NOT_REQUESTED, REQUESTED, SUCCESS, DECLINED, FAILED, TIMED_OUT }
  private data class Config(
      val id: UUID,
      val url: URI,
      val sha1: String,
      val prompt: String,
      val eventTemplate: String,
      val manifestHash: ByteArray,
  )
  private data class RequestToken(val generation: Long, val id: UUID, val sha1: String)

  data class ExtendedPlayback(val soundEvent: String, val pitch: Float)

  private val generationSequence = AtomicLong()
  private val generations = ConcurrentHashMap<UUID, Long>()
  private val states = ConcurrentHashMap<UUID, State>()
  private val requested = ConcurrentHashMap<UUID, RequestToken>()
  @Volatile private var config: Config? = loadConfig()

  fun reload() {
    val old = config
    config = loadConfig()
    states.clear(); requested.clear()
    Bukkit.getOnlinePlayers().forEach { player ->
      if (old != null && old.id != config?.id) runCatching { player.removeResourcePack(old.id) }
      beginConnection(player)
    }
  }

  fun shutdown() { states.clear(); requested.clear(); generations.clear() }
  fun isLoaded(player: UUID): Boolean = states[player] == State.SUCCESS
  fun manifestHashFor(player: UUID): ByteArray? =
      config?.manifestHash?.takeIf { isLoaded(player) }?.copyOf()
  fun configuredManifestHash(): ByteArray? = config?.manifestHash?.copyOf()

  /** Uses vanilla for 0..24 and the nearest generated F# anchor outside that range. */
  fun extendedPlayback(player: UUID, note: NoteEvent): ExtendedPlayback? {
    val active = config ?: return null
    if (!isLoaded(player)) return null
    if (note.pitchCents in VANILLA_MIN_CENTS..VANILLA_MAX_CENTS) return null
    if (note.pitchCents !in BANK_MIN_CENTS..BANK_MAX_CENTS) return null
    val anchor = BANK_ANCHORS.minWith(compareBy<Int> { kotlin.math.abs(note.pitchCents - it * 100) }.thenBy { it })
    val residualCents = note.pitchCents - anchor * 100
    val event =
        note.customSound?.let { raw ->
          val canonical = raw.lowercase().let { if (':' in it) it else "minecraft:$it" }
          if (!canonical.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+"))) return null
          val pattern = VanillaSoundCatalog.patternForSeed(canonical, note.customSoundSeed ?: return null)
              ?: return null
          val key =
              MessageDigest.getInstance("SHA-256")
                  .digest(canonical.toByteArray(Charsets.UTF_8))
                  .joinToString("") { "%02x".format(it.toInt() and 0xff) }
                  .take(16)
          "oyasaimusic:bank/c/$key/p/$pattern/a/${anchorToken(anchor)}"
        } ?: run {
          if (note.instrument !in 0..19) return null
          active.eventTemplate
              .replace("{instrument}", note.instrument.toString())
              .replace("{anchor}", anchorToken(anchor))
        }
    if (!event.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._-]+"))) return null
    return ExtendedPlayback(event, 2.0.pow(residualCents / 1200.0).toFloat())
  }

  fun allow(player: Player) {
    val active = config ?: run { player.sendMessage("§c拡張音域リソースパックはサーバーで利用できません。"); return }
    val generation = generations.computeIfAbsent(player.uniqueId) { generationSequence.incrementAndGet() }
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      runCatching { preferences.set(player.uniqueId, ResourcePackPreference.ALLOW) }
          .onSuccess { Bukkit.getScheduler().runTask(plugin, Runnable {
            if (player.isOnline && generations[player.uniqueId] == generation) request(player, active, generation)
          }) }
          .onFailure { Bukkit.getScheduler().runTask(plugin, Runnable {
            if (player.isOnline && generations[player.uniqueId] == generation) player.sendMessage("§c設定の保存に失敗したため、許可状態は変更しませんでした。")
          }) }
    })
  }

  fun deny(player: Player) {
    val generation = generations.computeIfAbsent(player.uniqueId) { generationSequence.incrementAndGet() }
    states[player.uniqueId] = State.DECLINED; requested.remove(player.uniqueId)
    config?.let { active -> runCatching { player.removeResourcePack(active.id) } }
    player.sendMessage("§e拡張音域リソースパックをこの接続で停止しました。")
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      runCatching { preferences.set(player.uniqueId, ResourcePackPreference.DENY) }.onFailure {
        Bukkit.getScheduler().runTask(plugin, Runnable {
          if (player.isOnline && generations[player.uniqueId] == generation) player.sendMessage("§c自動読み込みを停止しましたが、次回接続用設定の保存に失敗しました。")
        })
      }
    })
  }

  @EventHandler fun onJoin(event: PlayerJoinEvent) = beginConnection(event.player)
  @EventHandler fun onQuit(event: PlayerQuitEvent) {
    val id = event.player.uniqueId
    states.remove(id); requested.remove(id); generations.remove(id)
  }

  private fun beginConnection(player: Player) {
    val active = config ?: return
    val generation = generationSequence.incrementAndGet()
    generations[player.uniqueId] = generation; states[player.uniqueId] = State.NOT_REQUESTED; requested.remove(player.uniqueId)
    Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
      val preference = runCatching { preferences.get(player.uniqueId) }.getOrDefault(ResourcePackPreference.DENY)
      if (preference == ResourcePackPreference.ALLOW) Bukkit.getScheduler().runTask(plugin, Runnable {
        if (player.isOnline && generations[player.uniqueId] == generation) request(player, active, generation)
      })
    })
  }

  private fun request(player: Player, active: Config, generation: Long) {
    val token = RequestToken(generation, active.id, active.sha1)
    if (requested[player.uniqueId] == token && states[player.uniqueId] in setOf(State.REQUESTED, State.SUCCESS)) {
      player.sendMessage("§7拡張音域リソースパックは既に要求済みです。"); return
    }
    requested[player.uniqueId] = token; states[player.uniqueId] = State.REQUESTED
    val info = ResourcePackInfo.resourcePackInfo(active.id, active.url, active.sha1)
    val request = ResourcePackRequest.resourcePackRequest().packs(info).required(false).replace(false)
        .prompt(Component.text(active.prompt))
        .callback(ResourcePackCallback { packId, status, _ ->
          if (packId != active.id || requested[player.uniqueId] != token || generations[player.uniqueId] != generation || status.intermediate()) return@ResourcePackCallback
          states[player.uniqueId] = if (status == ResourcePackStatus.SUCCESSFULLY_LOADED) State.SUCCESS else State.FAILED
        }).build()
    player.sendResourcePacks(request)
    Bukkit.getScheduler().runTaskLater(plugin, Runnable {
      if (requested[player.uniqueId] == token && generations[player.uniqueId] == generation && states[player.uniqueId] == State.REQUESTED) states[player.uniqueId] = State.TIMED_OUT
    }, 600L)
  }

  private fun loadConfig(): Config? = runCatching {
    if (!plugin.config.getBoolean("resource-pack.enabled", false)) return null
    val id = UUID.fromString(plugin.config.getString("resource-pack.id", "") ?: ""); require(id != UUID(0L, 0L))
    val raw = plugin.config.getString("resource-pack.url", "") ?: ""; require(raw.length <= 2048 && raw.all { it.code in 0..127 })
    val uri = URI(raw); require(uri.scheme == "https" && uri.userInfo == null && !uri.host.isNullOrBlank())
    val sha1 = plugin.config.getString("resource-pack.sha1", "") ?: ""; require(sha1.matches(Regex("[0-9a-f]{40}")))
    val template = plugin.config.getString("resource-pack.instrument-bank-event-template", "") ?: ""
    require(template.length <= 256 && template.contains("{instrument}") && template.contains("{anchor}"))
    require(template.matches(Regex("[a-z0-9_.-]+:[a-z0-9/._{}-]+")))
    val manifestHex = plugin.config.getString("resource-pack.bank-manifest-sha256", "") ?: ""
    require(manifestHex.matches(Regex("[0-9a-f]{64}")))
    Config(
        id,
        uri,
        sha1,
        plugin.config.getString("resource-pack.prompt", "Load the extended-pitch resource pack?")
            ?: "Load the extended-pitch resource pack?",
        template,
        manifestHex.chunked(2).map { it.toInt(16).toByte() }.toByteArray(),
    )
  }.onFailure { error ->
    if (plugin.config.getBoolean("resource-pack.enabled", false)) plugin.logger.warning("拡張音域リソースパック設定を無効化しました: ${error.message}")
  }.getOrNull()

  private fun anchorToken(anchor: Int): String = if (anchor < 0) "m${-anchor}" else "p$anchor"

  private companion object {
    const val VANILLA_MIN_CENTS = 0
    const val VANILLA_MAX_CENTS = 2_400
    const val BANK_MIN_CENTS = -4_800
    const val BANK_MAX_CENTS = 7_200
    val BANK_ANCHORS = intArrayOf(-36, -12, 36, 60)
  }
}
