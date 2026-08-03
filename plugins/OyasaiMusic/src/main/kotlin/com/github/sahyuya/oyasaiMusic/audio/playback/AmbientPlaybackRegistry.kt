package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.AmbientRange
import com.github.sahyuya.oyasaiMusic.item.AmbientTrigger
import com.github.sahyuya.oyasaiMusic.model.Song
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.Location
import org.bukkit.entity.Player

/**
 * 環境BGM用レコード（UI/UX設計書9章）が設置されたジュークボックスの再生状態を管理する。
 *
 * このアイテムはバニラの音楽レコードではなく独自形式の楽曲のため、ジュークボックスへの 挿入時にバニラの再生を抑止し、このレジストリが座標をキーに独自の再生セッションを管理する。
 * - トリガー=ジュークボックス: 設置と同時に再生開始
 * - トリガー=RS信号: 設置場所への通電/断電で再生開始/停止
 * - トリガー=接近: 範囲内にプレイヤーが入った時点で自動的に再生開始、居なくなったら停止 範囲内のプレイヤーは [tick] で追従させ、動いて範囲外に出た
 *   プレイヤーへは音を止め、新たに入ってきたプレイヤーには鳴らし始める。
 */
class AmbientPlaybackRegistry(private val plugin: OyasaiMusic) {

  data class AmbientEntry(
      val location: Location,
      val song: Song,
      val range: AmbientRange,
      val trigger: AmbientTrigger,
      val loop: Boolean,
      var session: PlaybackSession? = null,
      /** 音源読み込み中の二重起動を防ぐ。状態変更はメインスレッド上で行う。 */
      var loading: Boolean = false,
      /** 現在トリガーが再生を許可しているか。 */
      var enabled: Boolean = trigger == AmbientTrigger.JUKEBOX,
      /** 非ループ曲が最後まで鳴り終えたか。トリガー再投入まで再生し直さない。 */
      var completed: Boolean = false,
      /** RS入力の立ち上がりだけを検知するための直前状態。 */
      var redstonePowered: Boolean = false,
  )

  private val entries = ConcurrentHashMap<String, AmbientEntry>()

  private fun key(location: Location): String =
      "${location.world?.uid}:${location.blockX}:${location.blockY}:${location.blockZ}"

  fun entryAt(location: Location): AmbientEntry? = entries[key(location)]

  /** 現在鳴っている環境レコードのジュークボックス位置。聴取者への演出には使用しない。 */
  fun activePlaybackLocations(): List<Location> =
      entries.values.mapNotNull { entry ->
        entry.session?.takeIf { !it.isCancelled && !it.isPaused }?.let { entry.location.clone() }
      }

  fun register(
      location: Location,
      song: Song,
      range: AmbientRange,
      trigger: AmbientTrigger,
      loop: Boolean,
  ) {
    val k = key(location)
    // 既に何か設置されていた場合、その再生セッションを確実に止めてから上書きする
    // （そうしないと古いセッションが止まらず二重に音が鳴り続けるバグになる）。
    entries[k]?.session?.let { plugin.playbackEngine.stop(it) }
    entries[k] = AmbientEntry(location.clone(), song, range, trigger, loop)
    if (trigger == AmbientTrigger.JUKEBOX) startPlayback(k)
  }

  fun unregister(location: Location) {
    val k = key(location)
    stopPlayback(k)
    entries.remove(k)
  }

  fun onRedstoneChange(location: Location, powered: Boolean) {
    val k = key(location)
    val entry = entries[k] ?: return
    if (entry.trigger != AmbientTrigger.REDSTONE) return
    // ボタン等の短い入力を「再生/停止」トグルとして扱う。ONのまま保持しても止めず、
    // 次の立ち上がり入力が来た時だけ、再生中なら停止・停止中なら最初から再生する。
    val risingEdge = powered && !entry.redstonePowered
    entry.redstonePowered = powered
    if (!risingEdge) return

    if (entry.session != null || entry.loading || (entry.enabled && !entry.completed)) {
      entry.enabled = false
      entry.completed = false
      stopPlayback(k)
    } else {
      entry.enabled = true
      entry.completed = false
      startPlayback(k)
    }
  }

  /** 接近トリガーの開始判定・範囲内リスナーの追従のため、定期的(1秒毎想定)に呼び出す。 */
  fun tick() {
    entries.forEach { (k, entry) ->
      val nearby = nearbyPlayers(entry)

      // BlockRedstoneEventは周囲のダストだけに発火し、ジュークボックス自身には届かない
      // 場合がある。そのため実際の通電状態を毎秒確認して、RSトリガーを確実に反映する。
      if (entry.trigger == AmbientTrigger.REDSTONE) {
        val powered = entry.location.block.isBlockPowered
        onRedstoneChange(entry.location, powered)
      }

      if (entry.trigger == AmbientTrigger.PROXIMITY) {
        val shouldPlay = nearby.isNotEmpty()
        if (entry.enabled != shouldPlay) {
          entry.enabled = shouldPlay
          entry.completed = false
          if (!shouldPlay) stopPlayback(k)
        }
      }

      if (
          entry.enabled &&
              entry.session == null &&
              !entry.loading &&
              !(entry.completed && !entry.loop)
      ) {
        startPlayback(k)
      }

      val session = entry.session ?: return@forEach
      val nearbyUuids = nearby.map { it.uniqueId }.toSet()
      session.recipients.filter { it !in nearbyUuids }.forEach { session.recipients.remove(it) }
      nearby.forEach { p -> session.recipients.add(p.uniqueId) }
    }
  }

  /** プラグイン無効化時に全セッションを止める。 */
  fun stopAll() {
    entries.values.forEach { it.session?.let { s -> plugin.playbackEngine.stop(s) } }
    entries.clear()
  }

  private fun nearbyPlayers(entry: AmbientEntry): List<Player> {
    val world = entry.location.world ?: return emptyList()
    val range = entry.range.blocks
    return world.players.filter { p ->
      range == null || p.location.distance(entry.location) <= range
    }
  }

  private fun startPlayback(key: String) {
    val entry = entries[key] ?: return
    if (
        !entry.enabled || entry.session != null || entry.loading || (entry.completed && !entry.loop)
    )
        return
    // リスナーがいない状態で空セッションを作ると、再生完了コールバックが発火せず
    // 後から範囲へ入ったプレイヤーに再生できなくなるため、入場を待つ。
    if (nearbyPlayers(entry).isEmpty()) return
    val file = File(plugin.audioDirectory, entry.song.fileName)
    if (!file.exists()) {
      plugin.logger.warning("環境BGMの音源ファイルが見つかりません: ${file.name}")
      entry.completed = true
      return
    }
    entry.loading = true
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val audio = runCatching { SongAudioFile.read(file) }
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        entry.loading = false
                        // 読み込み中に撤去・差し替え・停止された場合は、古い結果を利用しない。
                        if (entries[key] !== entry || !entry.enabled || entry.session != null)
                            return@Runnable
                        val loaded =
                            audio.getOrElse {
                              plugin.logger.warning(
                                  "環境BGMの音源読み込みに失敗しました (${file.name}): ${it.message}"
                              )
                              entry.completed = true
                              return@Runnable
                            }
                        if (loaded.notes.isEmpty()) {
                          entry.completed = true
                          return@Runnable
                        }
                        val session =
                            plugin.playbackEngine.play(
                                song = entry.song,
                                notes = loaded.notes,
                                recipients = nearbyPlayers(entry),
                                onCompletion = {
                                  entry.session = null
                                  entry.completed = !entry.loop
                                  if (entry.loop && entry.enabled) startPlayback(key)
                                },
                            )
                        entry.session = session
                      },
                  )
            },
        )
  }

  private fun stopPlayback(key: String) {
    val entry = entries[key] ?: return
    entry.session?.let { plugin.playbackEngine.stop(it) }
    entry.session = null
  }
}
