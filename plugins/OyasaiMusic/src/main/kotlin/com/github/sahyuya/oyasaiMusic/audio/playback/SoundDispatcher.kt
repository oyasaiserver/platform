package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import net.kyori.adventure.sound.Sound as AdventureSound
import org.bukkit.Location
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import kotlin.math.cos
import kotlin.math.sin

/**
 * 1音符を実際にプレイヤーへ送信する処理（データ・システム設計書 4章）。
 *
 * [PlaybackMode.DEFAULT] (デフォルト再生):
 *   Adventure APIの `Audience#playSound(Sound, Sound.Emitter)` に `Sound.Emitter.self()` を渡すことで、
 *  *   音源をプレイヤー自身のエンティティに紐づけて送信する（内部的には `ClientboundSoundEntityPacket`
 *  *   が使われる）。音源がプレイヤーに追従し続けるため、歩きながら聴いても音響が乱れない。
 *  *   Panという概念自体が存在しないため、定位計算は行わない。
 *
 * [PlaybackMode.POSITIONAL] (立体音響再生):
 *   従来通り `Player#playSound(Location, Sound, SoundCategory, float, float)` を、プレイヤーの
 *   視線（Yaw+Pitchの3次元方向）を基準とした半円弧上の仮想座標に対して呼び出す方式。
 *   Pan=0は正面（上下の視線にも追従）、Pan=±100は水平方向の左右90度に固定する。
 */
object SoundDispatcher {

    /** POSITIONAL方式で、仮想音源をプレイヤーから何ブロック離すか（"単位円"上に配置するため1.0）。 */
    private const val SOURCE_RADIUS_BLOCKS = 1.0

    fun play(
        recipient: Player,
        note: NoteEvent,
        mode: PlaybackMode,
        isBedrock: Boolean,
    ) {
        when (mode) {
            PlaybackMode.DEFAULT -> playDefault(recipient, note)
            // 統合版(Bedrock)は設計書の制約によりPanを常に無効化(=正面固定)する
            PlaybackMode.POSITIONAL -> playPositional(recipient, note, pan = if (isBedrock) 0 else note.pan)
        }
    }

    private fun playDefault(recipient: Player, note: NoteEvent) {
        val pitch = InstrumentMapper.pitchToPlaybackPitch(note.pitch)
        val volume = volumeParam(note.volume)
        val customSound = note.customSound
        if (customSound != null) {
            val seed = note.customSoundSeed
            if (seed != null) {
                recipient.playSound(recipient, customSound, SoundCategory.RECORDS, volume, pitch, seed)
            } else {
                recipient.playSound(recipient, customSound, SoundCategory.RECORDS, volume, pitch)
            }
            return
        }
        val bukkitSound = InstrumentMapper.soundFor(InstrumentMapper.toInstrument(note.instrument))
        val adventureSound = AdventureSound.sound(bukkitSound, AdventureSound.Source.RECORD, volume, pitch)
        recipient.playSound(adventureSound, AdventureSound.Emitter.self())
    }

    private fun playPositional(recipient: Player, note: NoteEvent, pan: Int) {
        val pitch = InstrumentMapper.pitchToPlaybackPitch(note.pitch)
        val volume = volumeParam(note.volume)
        val location = virtualLocation(recipient, pan)
        val customSound = note.customSound
        if (customSound != null) {
            val seed = note.customSoundSeed
            if (seed != null) {
                recipient.playSound(location, customSound, SoundCategory.RECORDS, volume, pitch, seed)
            } else {
                recipient.playSound(location, customSound, SoundCategory.RECORDS, volume, pitch)
            }
        } else {
            val sound = InstrumentMapper.soundFor(InstrumentMapper.toInstrument(note.instrument))
            recipient.playSound(location, sound, SoundCategory.RECORDS, volume, pitch)
        }
    }

    private fun volumeParam(volume0to100: Int): Float = volume0to100.coerceIn(0, 100) / 100f

    /**
     * POSITIONAL方式専用。プレイヤーの視線（Yaw+Pitchの3次元方向）を正面(Pan=0)として、
     * 左右90度ずつに広がる半径1ブロックの半円弧上に仮想音源を配置する。
     * Pan=0は正面（上下の視線にも追従する）、Pan=±100は水平方向の左右90度で固定する
     * （sin(90°)=1, cos(90°)=0 となるため、正面ベクトルのY成分は自動的に打ち消される）。
     */
    private fun virtualLocation(player: Player, pan: Int): Location {
        val eye = player.eyeLocation
        val yawRad = Math.toRadians(player.location.yaw.toDouble())

        // 正面ベクトルはPitchも含めた3次元方向（Bukkit標準のyaw/pitch→方向ベクトル計算式）。
        val forward = player.location.direction
        // 右方向ベクトルは水平のみ（ロールが無いため、上下を向いても左右の基準は水平のまま）。
        val rightX = -cos(yawRad)
        val rightZ = -sin(yawRad)

        val theta = Math.toRadians(pan.coerceIn(-100, 100) / 100.0 * 90.0)
        val cosTheta = cos(theta)
        val sinTheta = sin(theta)
        val dirX = forward.x * cosTheta + rightX * sinTheta
        val dirY = forward.y * cosTheta
        val dirZ = forward.z * cosTheta + rightZ * sinTheta

        return eye.clone().add(dirX * SOURCE_RADIUS_BLOCKS, dirY * SOURCE_RADIUS_BLOCKS, dirZ * SOURCE_RADIUS_BLOCKS)
    }
}
