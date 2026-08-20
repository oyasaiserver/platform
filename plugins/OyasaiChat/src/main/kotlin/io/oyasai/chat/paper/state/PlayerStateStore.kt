package io.oyasai.chat.paper.state

import java.io.File
import java.util.UUID
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.paper.OyasaiChatPlugin
import org.bukkit.entity.Player

// プレイヤー状態のメモリ・ファイル管理。
data class PlayerChatState(
    var activeChannel: String,
    val joinedChannels: MutableSet<String>,
    var lastPrivateMessagePeer: UUID? = null,
    /** 会話モードの宛先。一時情報のため保存しない。 */
    var privateMessageModePeer: UUID? = null,
    var privateMessageModeName: String? = null,
    var privateMessagesEnabled: Boolean = true,
)

private data class StateSnapshot(
    val uuid: UUID,
    val activeChannel: String,
    val joinedChannels: List<String>,
    val privateMessagesEnabled: Boolean,
)

class PlayerStateStore(
    private val plugin: OyasaiChatPlugin,
    private val config: ChatConfig,
) {
  private val states = mutableMapOf<UUID, PlayerChatState>()
  private val directory = File(plugin.dataFolder, "players")
  private val writer =
      Executors.newSingleThreadExecutor { runnable ->
        Thread(runnable, "OyasaiChat-state-writer").apply { isDaemon = true }
      }
  private var acceptingWrites = true

  fun get(player: Player): PlayerChatState = states.getOrPut(player.uniqueId) { load(player) }

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
      )
    }
    return PlayerStateFileCodec.load(stateFile, config.pmEnabledByDefault) {
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
      )

  private fun file(uuid: UUID): File = File(directory, "$uuid.yml")

  private fun canUse(player: Player, permission: String?): Boolean =
      permission == null || player.hasPermission(permission)
}
