package com.github.sahyuya.oyasaiMusic.audio

import com.sk89q.worldedit.math.BlockVector3
import org.bukkit.block.Block
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import kotlin.math.roundToInt

/**
 * 録音処理（グリッド型・回路型・動的録音）で共通利用する、
 * 「音ブロックの真上(Y+1)にある看板」から Volume(1行目) / Pan(2行目) / Delay(3行目) / 音源(4行目) を
 * 上書き取得するための処理（データ・システム設計書 3章）。
 *
 * 看板の記述例:
 *   1行目: 80        → Volume 80%
 *   2行目: -50        → Pan -50 (左寄り)
 *   3行目: -1/16     → 四分音符を基準に16分音符ぶん早める
 *   4行目: 4.5.1:2   → entity.axolotl.attack の2番パターンへ音色を上書き
 * 数値として解釈できない・行が空の場合はそのフィールドの上書きを行わない(null)。
 */
object SignOverrideProcessor {

    private val DELAY_PATTERN = Regex("^([+-]?)(\\d+)(?:\\s*/\\s*(\\d+))?$")

    /** テキスト2行から (volume, pan) の上書き値を解析する。解釈できない場合はnull。 */
    fun parseLines(line1: String?, line2: String?): Pair<Int?, Int?> {
        val volume = line1?.trim()?.removeSuffix("%")?.toIntOrNull()?.coerceIn(0, 100)
        val pan = line2?.trim()?.toIntOrNull()?.coerceIn(-100, 100)
        return volume to pan
    }

    /**
     * 3行目の分数をミリ秒へ変換する。`1/8` は八分音符、`-1/16` は負の十六分音符。
     * 分母を省略した `1` は四分音符1個分として扱う。異常値は無視する。
     */
    fun parseDelayMillis(line3: String?, quarterNoteMs: Double): Int? {
        if (quarterNoteMs <= 0.0 || !quarterNoteMs.isFinite()) return null
        val match = DELAY_PATTERN.matchEntire(line3?.trim().orEmpty()) ?: return null
        val numerator = match.groupValues[2].toLongOrNull() ?: return null
        val denominator = match.groupValues[3].ifEmpty { "1" }.toLongOrNull() ?: return null
        if (denominator <= 0 || numerator > 10_000 || denominator > 10_000) return null
        val sign = if (match.groupValues[1] == "-") -1 else 1
        val millis = sign * quarterNoteMs * numerator.toDouble() / denominator.toDouble()
        return if (millis.isFinite() && millis in Int.MIN_VALUE.toDouble()..Int.MAX_VALUE.toDouble()) millis.roundToInt() else null
    }

    /**
     * 実ワールド上のノートブロックを対象に、真上の看板を読み取る。
     * 動的録音(/record start)はこちらを使用する。
     */
    fun extractFromWorld(noteBlock: Block): Pair<Int?, Int?> {
        val above = noteBlock.getRelative(0, 1, 0)
        val state = above.state
        if (state !is Sign) return null to null
        return try {
            val front = state.getSide(Side.FRONT)
            parseLines(front.getLine(0), front.getLine(1))
        } catch (_: Exception) {
            null to null
        }
    }

    /** 実ワールド上の看板3行目から、指定した四分音符長に対する遅延を取得する。 */
    fun extractDelayFromWorld(noteBlock: Block, quarterNoteMs: Double): Int? {
        val state = noteBlock.getRelative(0, 1, 0).state as? Sign ?: return null
        return try {
            parseDelayMillis(state.getSide(Side.FRONT).getLine(2), quarterNoteMs)
        } catch (_: Exception) {
            null
        }
    }

    /** 実ワールド上の看板4行目から、固定パターンのバニラ音源パスを取得する。 */
    fun extractCustomSoundFromWorld(noteBlock: Block): VanillaSoundCatalog.SoundSelection? {
        val state = noteBlock.getRelative(0, 1, 0).state as? Sign ?: return null
        return try {
            VanillaSoundCatalog.resolveSignLine(state.getSide(Side.FRONT).getLine(3))
        } catch (_: Exception) {
            null
        }
    }

    /**
     * グリッド型・回路型録音用のメイン経路。
     *
     * FAWEクリップボードは`//copy`した時点のワールド座標をそのまま保持しているため、
     * クリップボード内のNBTを直接解析するのではなく、同じ座標にある「実ワールド上に
     * まだ残っている元のブロック」から看板を読み取る（[extractFromWorld]と同じ信頼できる
     * Bukkit APIを再利用できるため）。前提として、録音コマンドを実行する時点で
     * コピー元の建築（看板を含む）がワールド上にそのまま残っている必要がある。
     */
    fun extractFromWorldPos(world: org.bukkit.World, noteBlockPos: BlockVector3): Pair<Int?, Int?> {
        return try {
            val block = world.getBlockAt(noteBlockPos.x(), noteBlockPos.y(), noteBlockPos.z())
            extractFromWorld(block)
        } catch (_: Exception) {
            null to null
        }
    }

    fun extractDelayFromWorldPos(world: org.bukkit.World, noteBlockPos: BlockVector3, quarterNoteMs: Double): Int? = try {
        extractDelayFromWorld(world.getBlockAt(noteBlockPos.x(), noteBlockPos.y(), noteBlockPos.z()), quarterNoteMs)
    } catch (_: Exception) {
        null
    }

    fun extractCustomSoundFromWorldPos(world: org.bukkit.World, noteBlockPos: BlockVector3): VanillaSoundCatalog.SoundSelection? = try {
        extractCustomSoundFromWorld(world.getBlockAt(noteBlockPos.x(), noteBlockPos.y(), noteBlockPos.z()))
    } catch (_: Exception) {
        null
    }

}
