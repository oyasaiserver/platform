package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.AmbientPlaybackRange
import com.github.sahyuya.oyasaiMusic.item.AmbientTrigger
import com.github.sahyuya.oyasaiMusic.model.Song
import java.io.File
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.GameMode
import org.bukkit.Location
import org.bukkit.entity.Player

internal data class StoredAmbientRecord(
    val songId: Long,
    val range: AmbientPlaybackRange,
    val trigger: AmbientTrigger,
    val loop: Boolean,
    val mode: GameMode,
    val recordIdentity: String? = null,
) {
  fun encode() =
      if (recordIdentity == null)
          "1;$songId;${range.blocks ?: -1};${trigger.name};${if (loop) 1 else 0};${mode.name}"
      else
          "2;$songId;${range.blocks ?: -1};${trigger.name};${if (loop) 1 else 0};${mode.name};$recordIdentity"

  companion object {
    fun decode(encoded: String): StoredAmbientRecord {
      require(encoded.length <= 160)
      val fields = encoded.split(';')
      require(
          (fields.size == 6 && fields[0] == "1" || fields.size == 7 && fields[0] == "2") &&
              fields[4] in setOf("0", "1")
      )
      return StoredAmbientRecord(
          fields[1].toLong().also { require(it > 0) },
          AmbientPlaybackRange(fields[2].toInt().let { if (it == -1) null else it }),
          AmbientTrigger.valueOf(fields[3]),
          fields[4] == "1",
          GameMode.valueOf(fields[5]),
          if (fields[0] == "2")
              fields[6].also { require(java.util.UUID.fromString(it).toString() == it) }
          else null,
      )
    }
  }
}

/**
 * 環境BGM用レコード（UI/UX設計書9章）が設置されたジュークボックスの再生状態を管理する。
 *
 * このアイテムはバニラの音楽レコードではなく独自形式の楽曲のため、ジュークボックスへの 挿入時にバニラの再生を抑止し、このレジストリが座標をキーに独自の再生セッションを管理する。
 * - トリガー=ジュークボックス: 設置と同時に再生開始
 * - トリガー=RS信号: 設置場所への通電/断電で再生開始/停止
 * - トリガー=接近: 範囲内にプレイヤーが入った時点で自動的に再生開始、居なくなったら停止 範囲内のプレイヤーは [tick] で追従させ、動いて範囲外に出た
 *   プレイヤーへは音を止め、新たに入ってきたプレイヤーには鳴らし始める。
 */
class AmbientPlaybackRegistry(private val plugin: OyasaiMusic) : org.bukkit.event.Listener {
  private val storageKey = org.bukkit.NamespacedKey(plugin, "ambient_record_v1")
  private val restoring = mutableSetOf<String>()

  fun initialize() {
    Bukkit.getPluginManager().registerEvents(this, plugin)
    Bukkit.getWorlds().forEach { world -> world.loadedChunks.forEach(::restoreChunk) }
  }

  fun awaitingRestore(location: Location): Boolean {
    if (entryAt(location) != null) return false
    val block = location.block.state as? org.bukkit.block.Jukebox ?: return false
    val stored =
        block.persistentDataContainer.has(
            storageKey,
            org.bukkit.persistence.PersistentDataType.STRING,
        )
    if (stored) restoreChunk(location.chunk)
    return stored
  }

  @org.bukkit.event.EventHandler
  fun onChunkLoad(event: org.bukkit.event.world.ChunkLoadEvent) = restoreChunk(event.chunk)

  @org.bukkit.event.EventHandler(
      ignoreCancelled = true,
      priority = org.bukkit.event.EventPriority.MONITOR,
  )
  fun onChunkUnload(event: org.bukkit.event.world.ChunkUnloadEvent) {
    entries.values
        .filter {
          it.location.world == event.world &&
              it.location.blockX shr 4 == event.chunk.x &&
              it.location.blockZ shr 4 == event.chunk.z
        }
        .forEach {
          stopPlayback(key(it.location))
          entries.remove(key(it.location))
        }
  }

  private fun restoreChunk(chunk: org.bukkit.Chunk) {
    chunk.tileEntities.filterIsInstance<org.bukkit.block.Jukebox>().forEach { box ->
      val encoded =
          box.persistentDataContainer.get(
              storageKey,
              org.bukkit.persistence.PersistentDataType.STRING,
          ) ?: return@forEach
      val location = box.location
      val k = key(location)
      if (entries.containsKey(k) || !restoring.add(k)) return@forEach
      val data = runCatching { StoredAmbientRecord.decode(encoded) }.getOrNull()
      if (data == null) {
        restoring.remove(k)
        plugin.logger.warning("Invalid stored OyasaiMusic jukebox at $k")
        return@forEach
      }
      Bukkit.getScheduler()
          .runTaskAsynchronously(
              plugin,
              Runnable {
                val song = runCatching { plugin.songRepository.findById(data.songId) }.getOrNull()
                Bukkit.getScheduler()
                    .runTask(
                        plugin,
                        Runnable {
                          restoring.remove(k)
                          if (!chunk.isLoaded || entries.containsKey(k) || song == null)
                              return@Runnable
                          if (
                              data.recordIdentity != null &&
                                  data.recordIdentity != song.recordIdentity
                          )
                              return@Runnable
                          val current =
                              location.block.state as? org.bukkit.block.Jukebox ?: return@Runnable
                          if (
                              current.persistentDataContainer.get(
                                  storageKey,
                                  org.bukkit.persistence.PersistentDataType.STRING,
                              ) != encoded
                          )
                              return@Runnable
                          entries[k] =
                              AmbientEntry(
                                  location,
                                  song,
                                  data.range,
                                  data.trigger,
                                  data.loop,
                                  data.mode,
                              )
                        },
                    )
              },
          )
    }
  }

  data class AmbientEntry(
      val location: Location,
      val song: Song,
      val range: AmbientPlaybackRange,
      val trigger: AmbientTrigger,
      val loop: Boolean,
      /** 装填した時のゲームモード。同じゲームモードでのみ回収できる。 */
      val insertedGameMode: GameMode,
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
      range: AmbientPlaybackRange,
      trigger: AmbientTrigger,
      loop: Boolean,
      insertedGameMode: GameMode,
  ) {
    val k = key(location)
    val box = location.block.state as? org.bukkit.block.Jukebox ?: error("ジュークボックスが見つかりません")
    box.persistentDataContainer.set(
        storageKey,
        org.bukkit.persistence.PersistentDataType.STRING,
        StoredAmbientRecord(
                requireNotNull(song.id),
                range,
                trigger,
                loop,
                insertedGameMode,
                song.recordIdentity,
            )
            .encode(),
    )
    check(box.update(false, false)) { "レコード情報を保存できませんでした" }
    // 既に何か設置されていた場合、その再生セッションを確実に止めてから上書きする
    // （そうしないと古いセッションが止まらず二重に音が鳴り続けるバグになる）。
    entries[k]?.session?.let { plugin.playbackEngine.stop(it) }
    entries[k] = AmbientEntry(location.clone(), song, range, trigger, loop, insertedGameMode)
    if (trigger == AmbientTrigger.JUKEBOX) startPlayback(k)
  }

  fun unregister(location: Location) {
    (location.block.state as? org.bukkit.block.Jukebox)?.let { box ->
      box.persistentDataContainer.remove(storageKey)
      check(box.update(false, false)) { "レコード情報を削除できませんでした" }
    }
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
      val world = entry.location.world ?: return@forEach
      if (!world.isChunkLoaded(entry.location.blockX shr 4, entry.location.blockZ shr 4)) {
        stopPlayback(k)
        return@forEach
      }
      if (entry.location.block.type != org.bukkit.Material.JUKEBOX) {
        stopPlayback(k)
        entries.remove(k)
        return@forEach
      }
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
    val range = entry.range.blocks?.toDouble()
    return world.players.filter { p ->
      range == null || p.location.distanceSquared(entry.location) <= range * range
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
