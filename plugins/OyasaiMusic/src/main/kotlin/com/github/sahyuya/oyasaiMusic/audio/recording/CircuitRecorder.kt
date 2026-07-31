package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.math.BlockVector3
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.NoteBlock as BukkitNoteBlock
import org.bukkit.block.data.type.Repeater
import java.util.PriorityQueue

/**
 * レッドストーン回路を静的な「信号グラフ」として解釈する録音器。
 *
 * 旧実装は走査中のブロックの近傍だけをその場で辿っていたため、リピーターの出力先が
 * 次のリピーターの入力点と一致しない構造、段差配線、コピー範囲外にある電源で経路を失っていた。
 * この実装は先に全ブロックを収集し、各リピーターを「背面入力 → 正面出力（delay付き）」という
 * 有向エッジとして索引化してから、到達時刻の早い順に信号を伝播する。
 */
object CircuitRecorder {

    private data class Signal(val pos: BlockVector3, val timeMs: Int) : Comparable<Signal> {
        override fun compareTo(other: Signal): Int = timeMs.compareTo(other.timeMs)
    }

    private data class RepeaterEdge(val output: BlockVector3, val delayMs: Int)
    private data class RawNote(
        val timeMs: Int,
        val instrument: Int,
        val pitch: Byte,
        val volume: Int,
        val pan: Int,
        val customSound: String?,
        val customSoundSeed: Long?,
    )

    private const val QUARTER_NOTE_MS = 500.0
    private const val MAX_SIGNAL_TIME_MS = 10 * 60 * 1000

    /** ダストが接続し得る水平・段差方向。 */
    private val WIRE_OFFSETS = listOf(
        Triple(1, 0, 0), Triple(-1, 0, 0), Triple(0, 0, 1), Triple(0, 0, -1),
        Triple(1, 1, 0), Triple(-1, 1, 0), Triple(0, 1, 1), Triple(0, 1, -1),
        Triple(1, -1, 0), Triple(-1, -1, 0), Triple(0, -1, 1), Triple(0, -1, -1),
        Triple(0, 1, 0), Triple(0, -1, 0),
    )
    private val ADJACENT_6 = listOf(
        Triple(1, 0, 0), Triple(-1, 0, 0), Triple(0, 1, 0),
        Triple(0, -1, 0), Triple(0, 0, 1), Triple(0, 0, -1),
    )

    fun record(clipboard: Clipboard, world: World): List<NoteEvent> {
        val region = clipboard.region
        val blocks = HashMap<BlockVector3, BlockData>()
        val powerSources = mutableListOf<BlockVector3>()
        val wires = mutableListOf<BlockVector3>()
        val repeaters = mutableListOf<Pair<BlockVector3, Repeater>>()

        // 1. クリップボードを一度だけ走査して、回路部品を索引化する。
        val min = region.minimumPoint
        val max = region.maximumPoint
        for (x in min.x()..max.x()) for (y in min.y()..max.y()) for (z in min.z()..max.z()) {
            val pos = BlockVector3.at(x, y, z)
            val data = blockDataAt(clipboard, pos) ?: continue
            blocks[pos] = data
            when {
                isPowerSource(data) -> powerSources += pos
                data.material == Material.REDSTONE_WIRE -> wires += pos
                data is Repeater -> repeaters += pos to data
            }
        }
        if (blocks.isEmpty()) return emptyList()

        // 2. リピーター入力座標をキーに、出力先と遅延の有向エッジを作る。
        val repeaterInputs = HashMap<BlockVector3, MutableList<RepeaterEdge>>()
        repeaters.forEach { (pos, repeater) ->
            val input = pos.add(-repeater.facing.modX, -repeater.facing.modY, -repeater.facing.modZ)
            val output = pos.add(repeater.facing.modX, repeater.facing.modY, repeater.facing.modZ)
            if (region.contains(input) && region.contains(output)) {
                val edge = RepeaterEdge(output, repeater.delay * 100)
                // リピーター背面のブロック、またはその上下の支持ブロックからの通電を受け付ける。
                // ボタンが床の石ブロックに取り付けられたFAWE schematicでも始点を失わない。
                // FAWE schematicではボタン→リピーターの直結が「リピーター本体に通電」として
                // 保存される場合がある。背面だけに限定せず本体も入力候補に含めることで、
                // 実際の回路順（ボタン→リピーター→ノート→…）を最後まで辿る。
                listOf(pos, input, input.add(0, 1, 0), input.add(0, -1, 0)).forEach { inputCandidate ->
                    if (region.contains(inputCandidate)) {
                        repeaterInputs.getOrPut(inputCandidate) { mutableListOf() } += edge
                    }
                }
            }
        }

        val queue = PriorityQueue<Signal>()
        val earliestSignal = HashMap<BlockVector3, Int>()
        fun enqueue(pos: BlockVector3, timeMs: Int) {
            if (!region.contains(pos) || timeMs > MAX_SIGNAL_TIME_MS) return
            val previous = earliestSignal[pos]
            if (previous != null && previous <= timeMs) return
            earliestSignal[pos] = timeMs
            queue += Signal(pos, timeMs)
        }

        // 3. 明示的な電源が無いコピーでも解析できるよう、配線とリピーター入力を補助始点にする。
        //    明示的な電源がある場合は、その電源だけが開始点となる。
        if (powerSources.isNotEmpty()) {
            powerSources.forEach { source ->
                enqueue(source, 0)
                // ボタン/レバーは取り付け先の固体ブロックを強く通電する。ブロック状態の
                // face情報に依存せず、周囲を初回信号として扱えば床/壁/天井の全配置を拾える。
                ADJACENT_6.forEach { (dx, dy, dz) -> enqueue(source.add(dx, dy, dz), 0) }
            }
        } else {
            wires.forEach { enqueue(it, 0) }
            repeaterInputs.keys.forEach { enqueue(it, 0) }
        }
        if (queue.isEmpty()) return emptyList()

        val notes = mutableListOf<RawNote>()
        val firedNotes = HashSet<BlockVector3>()

        fun recordNote(pos: BlockVector3, data: BukkitNoteBlock, timeMs: Int) {
            if (!firedNotes.add(pos)) return
            var volume = 100
            var pan = 0
            val (overrideVolume, overridePan) = SignOverrideProcessor.extractFromWorldPos(world, pos)
            overrideVolume?.let { volume = it }
            overridePan?.let { pan = it }
            val signDelay = SignOverrideProcessor.extractDelayFromWorldPos(world, pos, QUARTER_NOTE_MS) ?: 0
            val customSound = SignOverrideProcessor.extractCustomSoundFromWorldPos(world, pos)
            notes += RawNote(
                timeMs = timeMs + signDelay,
                instrument = InstrumentMapper.toId(data.instrument),
                pitch = data.note.id,
                volume = volume,
                pan = pan,
                customSound = customSound?.eventKey,
                customSoundSeed = customSound?.seed,
            )
        }

        // 4. 信号グラフを時刻順に解く。
        while (queue.isNotEmpty()) {
            val signal = queue.poll()
            if (earliestSignal[signal.pos] != signal.timeMs) continue
            val data = blocks[signal.pos]

            // 信号がノートブロック自身、またはその6方向の隣へ届けば発音させる。
            if (data is BukkitNoteBlock) recordNote(signal.pos, data, signal.timeMs)
            for ((dx, dy, dz) in ADJACENT_6) {
                val neighborPos = signal.pos.add(dx, dy, dz)
                val neighbor = blocks[neighborPos]
                if (neighbor is BukkitNoteBlock) {
                    recordNote(neighborPos, neighbor, signal.timeMs)
                    // ノートブロック自体も固体ブロックとして、次段リピーターの入力を
                    // 駆動し得る。ノート→リピーター直列回路をここで継続させる。
                    enqueue(neighborPos, signal.timeMs)
                }
            }

            // 配線は遅延無しで接続先へ伝播。リピーター出力が固体ブロックに入った場合も、
            // その周辺のダストを拾えるため、段差やノートブロック上のダストへ続けられる。
            for ((dx, dy, dz) in WIRE_OFFSETS) {
                val neighborPos = signal.pos.add(dx, dy, dz)
                if (blocks[neighborPos]?.material == Material.REDSTONE_WIRE) enqueue(neighborPos, signal.timeMs)
            }

            // この座標がいずれかのリピーター背面入力なら、正面へ遅延付きで出力する。
            repeaterInputs[signal.pos]?.forEach { edge -> enqueue(edge.output, signal.timeMs + edge.delayMs) }
        }

        // schematicの向き情報がFAWE側で欠けている場合でも、ボタン→リピーター→ノートの
        // 実際の隣接順を辿れば直列回路は復元できる。通常グラフが1音以下の場合だけ採用し、
        // 正常な分岐回路の解析結果を不用意に上書きしない。
        val selectedNotes = if (notes.size <= 1) {
            val topologyNotes = recordByPhysicalTopology(blocks, powerSources, world)
            if (topologyNotes.size > notes.size) topologyNotes else notes
        } else notes

        val shift = selectedNotes.minOfOrNull { it.timeMs } ?: return emptyList()
        return selectedNotes.sortedBy { it.timeMs }.map { raw ->
            NoteEvent(raw.timeMs - shift, raw.instrument, raw.pitch, raw.volume, raw.pan, raw.customSound, raw.customSoundSeed)
        }
    }

    /**
     * リピーターの facing 情報だけでは連結できなかったschematic向けの救済解析。
     * 回路部品（ノートブロック/リピーター/ダスト）だけを6方向で接続し、リピーターを
     * 通過する度にそのdelayを加算する。石などの土台は伝播対象にしないため、長い床を
     * 一斉通電させることはない。
     */
    private fun recordByPhysicalTopology(
        blocks: Map<BlockVector3, BlockData>,
        powerSources: List<BlockVector3>,
        world: World,
    ): List<RawNote> {
        val queue = PriorityQueue<Signal>()
        val earliest = HashMap<BlockVector3, Int>()
        fun isComponent(data: BlockData?): Boolean = data is BukkitNoteBlock || data is Repeater || data?.material == Material.REDSTONE_WIRE
        fun enqueue(pos: BlockVector3, timeMs: Int) {
            if (!isComponent(blocks[pos]) || timeMs > MAX_SIGNAL_TIME_MS) return
            val old = earliest[pos]
            if (old != null && old <= timeMs) return
            earliest[pos] = timeMs
            queue += Signal(pos, timeMs)
        }

        powerSources.forEach { source ->
            ADJACENT_6.forEach { (dx, dy, dz) -> enqueue(source.add(dx, dy, dz), 0) }
        }
        if (queue.isEmpty()) {
            // 電源がコピー範囲から漏れている場合は、端にある部品を開始候補とする。
            blocks.entries.firstOrNull { isComponent(it.value) }?.key?.let { enqueue(it, 0) }
        }

        val result = mutableListOf<RawNote>()
        val firedNotes = HashSet<BlockVector3>()
        while (queue.isNotEmpty()) {
            val signal = queue.poll()
            if (earliest[signal.pos] != signal.timeMs) continue
            val data = blocks[signal.pos] ?: continue
            if (data is BukkitNoteBlock && firedNotes.add(signal.pos)) {
                var volume = 100
                var pan = 0
                val (overrideVolume, overridePan) = SignOverrideProcessor.extractFromWorldPos(world, signal.pos)
                overrideVolume?.let { volume = it }
                overridePan?.let { pan = it }
                val delay = SignOverrideProcessor.extractDelayFromWorldPos(world, signal.pos, QUARTER_NOTE_MS) ?: 0
                val customSound = SignOverrideProcessor.extractCustomSoundFromWorldPos(world, signal.pos)
                result += RawNote(
                    timeMs = signal.timeMs + delay,
                    instrument = InstrumentMapper.toId(data.instrument),
                    pitch = data.note.id,
                    volume = volume,
                    pan = pan,
                    customSound = customSound?.eventKey,
                    customSoundSeed = customSound?.seed,
                )
            }
            val nextTime = signal.timeMs + if (data is Repeater) data.delay * 100 else 0
            ADJACENT_6.forEach { (dx, dy, dz) -> enqueue(signal.pos.add(dx, dy, dz), nextTime) }
        }
        return result
    }

    private fun blockDataAt(clipboard: Clipboard, pos: BlockVector3): BlockData? {
        val fullBlock = clipboard.getFullBlock(pos)
        return runCatching { BukkitAdapter.adapt(fullBlock) }.getOrElse {
            // FAWEのPalette表示はBukkit変換できない表記になることがあるため、WorldEditが持つ
            // 正規化済み文字列から再生成する。これにより `note=8,powered=false` 等を落とさない。
            runCatching { org.bukkit.Bukkit.createBlockData(fullBlock.asString) }.getOrNull()
        }
    }

    private fun isPowerSource(data: BlockData): Boolean = when (data.material) {
        Material.REDSTONE_BLOCK, Material.REDSTONE_TORCH, Material.REDSTONE_WALL_TORCH, Material.LEVER -> true
        else -> data.material.name.endsWith("_BUTTON")
    }
}
