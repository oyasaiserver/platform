package io.oyasai.chat.paper.state

import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.paper.OyasaiChatPlugin
import java.io.File
import java.util.UUID
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import org.bukkit.entity.Player

// プレイヤー状態のメモリ・ファイル管理。
class PlayerChatState(
    var activeChannel: String,
    val joinedChannels: MutableSet<String>,
    var lastPrivateMessagePeer: UUID? = null,
    /** 会話モードの宛先。一時情報のため保存しない。 */
    var privateMessageModePeer: UUID? = null,
    var privateMessageModeName: String? = null,
    var privateMessagesEnabled: Boolean = true,
    japanizeEnabled: Boolean = true,
    var languageMode: String = if (japanizeEnabled) "auto" else "off",
) {
  var japanizeEnabled: Boolean
    get() = languageMode != "off"
    set(value) {
      languageMode = if (value) "auto" else "off"
    }
}

private data class StateSnapshot(
    val uuid: UUID,
    val activeChannel: String,
    val joinedChannels: List<String>,
    val privateMessagesEnabled: Boolean,
    val japanizeEnabled: Boolean,
    val languageMode: String,
)

class PlayerStateStore(
    private val plugin: OyasaiChatPlugin,
    private val config: ChatConfig,
) {
  private val states = mutableMapOf<UUID, PlayerChatState>()
  private val importingPreferences = mutableMapOf<UUID, Boolean>()
  private val directory = File(plugin.dataFolder, "players")
  private val writer =
      Executors.newSingleThreadExecutor { runnable ->
        Thread(runnable, "OyasaiChat-state-writer").apply { isDaemon = true }
      }
  private var acceptingWrites = true

  fun get(player: Player): PlayerChatState =
      states.getOrPut(player.uniqueId) {
        load(player).also { state ->
          importingPreferences[player.uniqueId]?.let { state.japanizeEnabled = it }
        }
      }

  fun initialize(player: Player): PlayerChatState {
    val state = get(player)
    val normalized =
        PlayerStateNormalization.normalize(state, config) { permission ->
          canUse(player, permission)
        }
    val changed =
        state.activeChannel != normalized.activeChannel ||
            state.joinedChannels != normalized.joinedChannels
    if (changed) {
      state.activeChannel = normalized.activeChannel
      state.joinedChannels.clear()
      state.joinedChannels += normalized.joinedChannels
      save(player)
    }
    return state
  }

  /** プレイヤー状態はサーバースレッドで管理し、不変スナップショットを順番に書き込む。 */
  fun save(player: Player) {
    if (!acceptingWrites) return
    val state = states[player.uniqueId] ?: return
    val snapshot = snapshot(player.uniqueId, state)
    writer.execute { writeSnapshot(snapshot) }
  }

  fun remove(player: Player) {
    save(player)
    states.remove(player.uniqueId)
  }

  /** Live state changes on Paper; offline reads and all saves use the existing serial writer. */
  fun importJapanize(preferences: Map<UUID, Boolean>): java.util.concurrent.CompletableFuture<Int> {
    check(plugin.server.isPrimaryThread)
    importingPreferences.putAll(preferences)
    val live =
        preferences
            .mapNotNull { (uuid, enabled) ->
              states[uuid]?.let { current ->
                val changed = current.languageMode != if (enabled) "auto" else "off"
                current.japanizeEnabled = enabled
                uuid to (snapshot(uuid, current) to changed)
              }
            }
            .toMap()
    val completed = java.util.concurrent.CompletableFuture<Int>()
    writer.execute {
      runCatching {
            var changed = 0
            preferences.forEach { (uuid, enabled) ->
              val existing = live[uuid]
              val state =
                  if (existing == null)
                      PlayerStateFileCodec.load(
                          file(uuid),
                          config.pmEnabledByDefault,
                          config.japanize.playerDefault,
                      ) {
                        throw it
                      }
                  else null
              val needsWrite =
                  (existing?.second ?: (state!!.languageMode != if (enabled) "auto" else "off")) ||
                      !PlayerStateFileCodec.hasJapanizeSetting(file(uuid))
              if (needsWrite) {
                val value =
                    existing?.first ?: snapshot(uuid, state!!.apply { japanizeEnabled = enabled })
                PlayerStateFileCodec.saveAtomic(
                    file(uuid),
                    value.activeChannel,
                    value.joinedChannels,
                    value.privateMessagesEnabled,
                    value.japanizeEnabled,
                    value.languageMode,
                )
                changed++
              }
            }
            changed
          }
          .onSuccess(completed::complete)
          .onFailure(completed::completeExceptionally)
    }
    return completed
  }

  fun finishImport() {
    check(plugin.server.isPrimaryThread)
    importingPreferences.clear()
  }

  fun allLoaded(): Map<UUID, PlayerChatState> = states.toMap()

  /** 待機中の書き込みを終え、読み込み済みプレイヤーの最終状態を保存する。 */
  fun flushAndShutdown() {
    if (!acceptingWrites) return
    acceptingWrites = false
    writer.shutdown()
    if (!writer.awaitTermination(5, TimeUnit.SECONDS)) {
      plugin.logger.warning(
          "Player state writer did not finish within 5 seconds; cancelling queued writes before the final flush."
      )
      writer.shutdownNow()
      writer.awaitTermination(1, TimeUnit.SECONDS)
    }
    states.forEach { (uuid, state) -> writeSnapshot(snapshot(uuid, state)) }
  }

  private fun load(player: Player): PlayerChatState {
    val stateFile = file(player.uniqueId)
    if (!stateFile.exists()) {
      val initial =
          PlayerStateNormalization.initial(config) { permission -> canUse(player, permission) }
      return PlayerChatState(
          activeChannel = initial.activeChannel,
          joinedChannels = initial.joinedChannels.toMutableSet(),
          privateMessagesEnabled = initial.privateMessagesEnabled,
          japanizeEnabled = config.japanize.playerDefault,
      )
    }
    return PlayerStateFileCodec.load(
        stateFile,
        config.pmEnabledByDefault,
        config.japanize.playerDefault,
    ) {
      plugin.logger.warning(
          "Unable to load player state for ${player.uniqueId}; using defaults: ${it.message}"
      )
    }
  }

  private fun writeSnapshot(snapshot: StateSnapshot) {
    runCatching {
          PlayerStateFileCodec.saveAtomic(
              file(snapshot.uuid),
              snapshot.activeChannel,
              snapshot.joinedChannels,
              snapshot.privateMessagesEnabled,
              snapshot.japanizeEnabled,
              snapshot.languageMode,
          )
        }
        .onFailure {
          plugin.logger.warning("Unable to save player state for ${snapshot.uuid}: ${it.message}")
        }
  }

  private fun snapshot(uuid: UUID, state: PlayerChatState) =
      StateSnapshot(
          uuid,
          state.activeChannel,
          state.joinedChannels.toList(),
          state.privateMessagesEnabled,
          state.japanizeEnabled,
          state.languageMode,
      )

  private fun file(uuid: UUID): File = File(directory, "$uuid.yml")

  private fun canUse(player: Player, permission: String?): Boolean =
      permission == null || player.hasPermission(permission)
}
