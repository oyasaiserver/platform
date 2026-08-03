package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.model.Song
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import java.io.File
import java.util.UUID

/** プラグイン内通知に使う録音済み効果音の種類。追加時はここへ1行加えるだけでよい。 */
enum class PluginSoundEffect(val fileName: String) {
    NEW_SONG("publish_newsong.bin"),
    REWARD_CLAIM("get_reward.bin"),
    LIKE_RECEIVED("receive_likes.bin"),
}

/**
 * `plugins/OyasaiMusic/soundeffect/` を効果音の拡張ポイントとして扱うサービス。
 * 初回起動では JAR 内の標準音源を展開し、以後はデータフォルダ側のファイルを優先するため、
 * サーバー運営者は同じファイル名の OYMB `.bin` を差し替えるだけで効果音を変更できる。
 */
class SoundEffectService(private val plugin: OyasaiMusic) {

    private val directory: File
        get() = File(plugin.dataFolder, "soundeffect")

    fun initialize() {
        directory.mkdirs()
        PluginSoundEffect.entries.forEach { effect ->
            val target = File(directory, effect.fileName)
            if (!target.exists()) plugin.saveResource("soundeffect/${effect.fileName}", false)
        }
    }

    /** 指定プレイヤーだけへ効果音を再生する。読み込みは非同期、音の送信はメインスレッドで行う。 */
    fun play(effect: PluginSoundEffect, recipients: Collection<Player>) {
        val listeners = recipients.filter(Player::isOnline)
        if (listeners.isEmpty()) return
        val file = File(directory, effect.fileName)
        if (!file.isFile) {
            plugin.logger.warning("効果音ファイルが見つかりません: ${file.absolutePath}")
            return
        }
        Bukkit.getScheduler().runTaskAsynchronously(plugin, Runnable {
            val audio = runCatching { SongAudioFile.read(file) }.getOrElse {
                plugin.logger.warning("効果音の読み込みに失敗しました (${effect.fileName}): ${it.message}")
                return@Runnable
            }
            if (audio.notes.isEmpty()) return@Runnable
            Bukkit.getScheduler().runTask(plugin, Runnable {
                // 効果音はDB上の楽曲ではないため、再生エンジン専用の軽量な匿名Songを使う。
                val effectSong = Song(
                    authorUuid = UUID(0L, 0L),
                    title = "OyasaiMusic effect: ${effect.name}",
                    createdAt = 0L,
                    bpm = 120,
                    recordMaterial = "MUSIC_DISC_13",
                    fileName = "soundeffect/${effect.fileName}",
                )
                plugin.playbackEngine.play(
                    song = effectSong,
                    notes = audio.notes,
                    recipients = listeners.filter(Player::isOnline),
                    playbackBpm = 120,
                )
            })
        })
    }
}
