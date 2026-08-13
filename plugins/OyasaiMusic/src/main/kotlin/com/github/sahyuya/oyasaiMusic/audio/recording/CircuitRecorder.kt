package com.github.sahyuya.oyasaiMusic.audio

import com.github.sahyuya.oyasaiMusic.model.NoteEvent
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.math.BlockVector3
import java.util.PriorityQueue
import kotlin.math.roundToInt
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Directional
import org.bukkit.block.data.FaceAttachable
import org.bukkit.block.data.type.NoteBlock as BukkitNoteBlock
import org.bukkit.block.data.type.RedstoneWire
import org.bukkit.block.data.type.Repeater

/**
 * FAWEクリップボード内のレッドストーン回路を、実際に通電させずに時刻順でシミュレーションする録音器。
 *
 * ダストはBlockDataの接続面に従って同一tick内で伝播し、リピーターだけが設定値ごとに 2 redstone tick (100ms)
 * の遅延を加える。ボタン・レバーは本体と設置先の両方を電源として扱い、 ダストは直下の導体を弱く通電させる。一方で導体同士を連鎖させないため、床全体を誤って
 * 回路と判定せず、実際のレッドストーンに近い「部品を介した」信号伝播になる。
 */
object CircuitRecorder {

  /** `/record we inspect` が表示する、FAWEクリップボードの読取結果。 */
  data class ClipboardInspection(
      val dimensions: BlockVector3,
      val origin: BlockVector3,
      val minimum: BlockVector3,
      val maximum: BlockVector3,
      val noteBlocks: Int,
      val wires: Int,
      val wiresWithoutConnectionInfo: Int,
      val repeaters: Int,
      val powerSources: Int,
  )

  /**
   * [isStrong] は「この位置の不透過ブロックが強動力を受けている」ことを表す。 強動力は周囲のダストを起動でき、ダストによる弱動力はブロックを起動しても
   * そこから周囲のダストへ再伝播しない。
   */
  private data class Signal(
      val pos: BlockVector3,
      val timeMs: Int,
      val power: Int,
      val isStrong: Boolean = false,
  ) : Comparable<Signal> {
    override fun compareTo(other: Signal): Int =
        compareValuesBy(
            this,
            other,
            Signal::timeMs,
            { -it.power },
            { if (it.isStrong) 0 else 1 },
        )
  }

  /** リピーター本体の出力時処理と、正面の強動力出力を同じ時刻へ予約する。 */
  private data class RepeaterOutput(
      val repeaterPos: BlockVector3,
      val output: BlockVector3,
      val delayMs: Int,
  )

  private data class RawNote(
      val timeMs: Double,
      val instrument: Int,
      val pitch: Byte,
      val volume: Int,
      val pan: Int,
      val customSound: String?,
      val customSoundSeed: Long?,
  )

  private const val QUARTER_NOTE_MS = 500.0
  private const val MAX_SIGNAL_TIME_MS = 10 * 60 * 1000
  private const val MAX_REDSTONE_POWER = 15
  private const val MAX_STRUCTURAL_SIGNALS = 100_000

  private val HORIZONTAL_FACES =
      listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
  private val ADJACENT_6 =
      listOf(
          Triple(1, 0, 0),
          Triple(-1, 0, 0),
          Triple(0, 1, 0),
          Triple(0, -1, 0),
          Triple(0, 0, 1),
          Triple(0, 0, -1),
      )

  /** FAWEが保持しているブロック種別・接続状態を、録音せずに確認する。 */
  fun inspect(clipboard: Clipboard): ClipboardInspection {
    var noteBlocks = 0
    var wires = 0
    var wiresWithoutConnectionInfo = 0
    var repeaters = 0
    var powerSources = 0
    val region = clipboard.region
    val min = region.minimumPoint
    val max = region.maximumPoint
    for (x in min.x()..max.x()) for (y in min.y()..max.y()) for (z in min.z()..max.z()) {
      val data = blockDataAt(clipboard, BlockVector3.at(x, y, z)) ?: continue
      when (data) {
        is BukkitNoteBlock -> noteBlocks++
        is RedstoneWire -> {
          wires++
          if (!hasConnectionInfo(data)) wiresWithoutConnectionInfo++
        }
        is Repeater -> repeaters++
      }
      if (isPowerSource(data)) powerSources++
    }
    return ClipboardInspection(
        dimensions = clipboard.dimensions,
        origin = clipboard.origin,
        minimum = min,
        maximum = max,
        noteBlocks = noteBlocks,
        wires = wires,
        wiresWithoutConnectionInfo = wiresWithoutConnectionInfo,
        repeaters = repeaters,
        powerSources = powerSources,
    )
  }

  fun record(clipboard: Clipboard, world: World): List<NoteEvent> {
    val region = clipboard.region
    val blocks = HashMap<BlockVector3, BlockData>()
    val sources = mutableListOf<BlockVector3>()
    val wires = HashSet<BlockVector3>()
    val repeaters = mutableListOf<Pair<BlockVector3, Repeater>>()

    val min = region.minimumPoint
    val max = region.maximumPoint
    for (x in min.x()..max.x()) for (y in min.y()..max.y()) for (z in min.z()..max.z()) {
      val pos = BlockVector3.at(x, y, z)
      val data = blockDataAt(clipboard, pos) ?: continue
      blocks[pos] = data
      when {
        isPowerSource(data) -> sources += pos
        data.material == Material.REDSTONE_WIRE -> wires += pos
        data is Repeater -> repeaters += pos to data
      }
    }
    if (sources.isEmpty()) return emptyList()

    // リピーターは背面の同じ高さにある入力だけを受け、正面へ設定値ぶん遅れて出力する。
    // ダストが背面にある場合と、背面ブロックが直接通電した場合の両方をこの入力点へ集約する。
    val repeaterInputs = HashMap<BlockVector3, MutableList<RepeaterOutput>>()
    repeaters.forEach { (pos, repeater) ->
      val input = pos.add(-repeater.facing.modX, -repeater.facing.modY, -repeater.facing.modZ)
      val output = pos.add(repeater.facing.modX, repeater.facing.modY, repeater.facing.modZ)
      val edge = RepeaterOutput(pos, output, repeater.delay * 100)
      if (region.contains(input)) repeaterInputs.getOrPut(input) { mutableListOf() } += edge
    }

    val queue = PriorityQueue<Signal>()
    // 同じ座標でもリピーター遅延後に再び通電するため、時刻ごとに最強の信号を保持する。
    val bestSignals = HashMap<Pair<BlockVector3, Int>, Signal>()
    fun enqueue(pos: BlockVector3, timeMs: Int, power: Int, isStrong: Boolean = false) {
      if (!region.contains(pos) || timeMs > MAX_SIGNAL_TIME_MS || power <= 0) return
      val signal = Signal(pos, timeMs, power, isStrong)
      val key = pos to timeMs
      val previous = bestSignals[key]
      if (
          previous != null &&
              (previous.power > power ||
                  previous.power == power && (previous.isStrong || !isStrong))
      )
          return
      bestSignals[key] = signal
      queue += signal
    }

    // ボタン・レバーは部品本体と設置先のブロックを通電する。トーチの支持ブロックは
    // 通電させない（支持ブロックを信号へ含めるとNOT回路等で誤った経路を作るため）。
    sources.forEach { source ->
      val sourceData = blocks[source] ?: return@forEach
      sourcePowerAnchors(source, sourceData).forEach { anchor ->
        enqueue(anchor, 0, MAX_REDSTONE_POWER, isStrong = true)
      }
    }

    val notes = mutableListOf<RawNote>()
    val firedNotes = HashSet<Pair<BlockVector3, Int>>()
    fun recordNote(pos: BlockVector3, data: BukkitNoteBlock, timeMs: Int) {
      if (!firedNotes.add(pos to timeMs)) return
      notes += toRawNote(world, pos, data, timeMs)
    }

    fun enqueueWireOnTopOf(anchor: BlockVector3, timeMs: Int, power: Int) {
      val dust = anchor.add(0, 1, 0)
      if (dust in wires) enqueue(dust, timeMs, power)
    }

    fun enqueueDustNextToSource(source: BlockVector3, timeMs: Int, power: Int) {
      HORIZONTAL_FACES.forEach { face ->
        val dust = source.offset(face)
        if (dust in wires) enqueue(dust, timeMs, power)
      }
    }

    /**
     * リピーターの遅延完了時に、本体と正面の両方を処理する。 正面にある不透過ブロックは強動力となる一方、本体側はノートブロック等を
     * 直接起動するための部品出力として扱う。これにより、FAWEコピー内で リピーターの上・側面に配置された音ブロックも遅延後の時刻で記録できる。
     */
    fun fireRepeaters(input: BlockVector3, inputTimeMs: Int) {
      repeaterInputs[input]?.forEach { edge ->
        val fireTimeMs = inputTimeMs + edge.delayMs
        enqueue(edge.repeaterPos, fireTimeMs, MAX_REDSTONE_POWER)
        enqueue(edge.output, fireTimeMs, MAX_REDSTONE_POWER, isStrong = true)
      }
    }

    while (queue.isNotEmpty()) {
      val signal = queue.poll()
      if (bestSignals[signal.pos to signal.timeMs] != signal) continue
      val data = blocks[signal.pos]

      if (data is RedstoneWire) {
        // ダストは接続面に従うダストだけへ伝播する。直下の導体は弱く通電するが、
        // その導体から別の導体へは伝播させない（ダストそのものを万能な導線にしない）。
        connectedWireNeighbors(signal.pos, data, blocks).forEach { neighbor ->
          enqueue(neighbor, signal.timeMs, signal.power - 1)
        }
        // ダストは直下だけでなく、実際に接続している向きの不透過ブロックにも
        // 弱動力を与える。FAWEで接続面が失われている場合は全方向を候補にする。
        // 弱動力なので、到達先はさらにダストを拡散させない。
        enqueue(signal.pos.add(0, -1, 0), signal.timeMs, signal.power)
        val hasConnectionInfo = hasConnectionInfo(data)
        HORIZONTAL_FACES.forEach { face ->
          if (!hasConnectionInfo || data.getFace(face) != RedstoneWire.Connection.NONE) {
            enqueue(signal.pos.offset(face), signal.timeMs, signal.power)
          }
        }
        recordAdjacentNotes(signal.pos, signal.timeMs, blocks, ::recordNote)
        fireRepeaters(signal.pos, signal.timeMs)
      } else {
        // 通電したブロックは隣接ノートと上面ダストを起動できる。固体ブロック同士へは
        // 伝播しないため、回路に無関係な床・壁を経路に含めない。
        if (data is BukkitNoteBlock) recordNote(signal.pos, data, signal.timeMs)
        recordAdjacentNotes(signal.pos, signal.timeMs, blocks, ::recordNote)
        enqueueWireOnTopOf(signal.pos, signal.timeMs, signal.power)
        fireRepeaters(signal.pos, signal.timeMs)

        // リピーター等の出力で強動力を受けた不透過ブロックは、全方向の隣接ダストを
        // 起動できる。本体がボタン等の非不透過部品である場合はこの規則を適用しない。
        if (signal.isStrong && data?.material?.isOccluding == true) {
          ADJACENT_6.forEach { (x, y, z) ->
            val dust = signal.pos.add(x, y, z)
            if (dust in wires) enqueue(dust, signal.timeMs, signal.power)
          }
        }

        // ボタン・レバー本体は、横に接続されたダストも直接起動できる。
        if (data != null && isDirectDustPowerSource(data)) {
          enqueueDustNextToSource(signal.pos, signal.timeMs, signal.power)
        }
      }
    }

    // FAWEのClipboard実装・変換経路によっては、ワイヤーの接続面がすべてNONEとして
    // 返る場合がある。その場合だけ座標構造を使う保守的なフォールバックを実行する。
    // 正常なBlockDataを取得できたケースでは、上の本家寄りシミュレーション結果を常に優先する。
    val noteBlockCount = blocks.values.count { it is BukkitNoteBlock }
    val rescueNotes =
        if (notes.isEmpty() || notes.size * 2 < noteBlockCount)
            structuralFallback(
                sources = sources,
                blocks = blocks,
                wires = wires,
                repeaters = repeaters,
                repeaterInputs = repeaterInputs,
                world = world,
            )
        else emptyList()
    // 少数（総数の半分未満）しか読めない場合も、FAWEの接続情報が壊れているものとして
    // 構造追跡結果を比較する。より多く読めた方だけを採用し、通常回路はそのままにする。
    val recordedNotes = if (rescueNotes.size > notes.size) rescueNotes else notes

    val firstTime = recordedNotes.minOfOrNull { it.timeMs } ?: return emptyList()
    return recordedNotes
        .sortedBy { it.timeMs }
        .map { note ->
          NoteEvent(
              timeMs = (note.timeMs - firstTime).roundToInt().coerceAtLeast(0),
              instrument = note.instrument,
              pitch = note.pitch,
              volume = note.volume,
              pan = note.pan,
              customSound = note.customSound,
              customSoundSeed = note.customSoundSeed,
          )
        }
  }

  /**
   * 接続面のBlockDataが失われたクリップボード用の救済経路。 同じ水平面または一段差にあるダストを候補にし、リピーターだけは必ず背面入力から
   * 正面出力へ遷移させる。通常経路が0音符のときだけ使うため、正しい接続面を持つ回路の 分岐判定や強弱動力の結果には影響しない。
   */
  private fun structuralFallback(
      sources: Collection<BlockVector3>,
      blocks: Map<BlockVector3, BlockData>,
      wires: Set<BlockVector3>,
      repeaters: List<Pair<BlockVector3, Repeater>>,
      repeaterInputs: Map<BlockVector3, List<RepeaterOutput>>,
      world: World,
  ): List<RawNote> {
    val queue = PriorityQueue<Signal>()
    val bestSignals = HashMap<Pair<BlockVector3, Int>, Signal>()
    fun enqueue(pos: BlockVector3, timeMs: Int, power: Int) {
      if (timeMs > MAX_SIGNAL_TIME_MS || power <= 0) return
      if (pos !in blocks && pos !in repeaterInputs) return
      val signal = Signal(pos, timeMs, power)
      val key = pos to timeMs
      val previous = bestSignals[key]
      if (previous != null && previous.power >= power) return
      bestSignals[key] = signal
      queue += signal
    }

    fun enqueueNearbyWires(pos: BlockVector3, timeMs: Int, power: Int) {
      if (pos in wires) enqueue(pos, timeMs, power)
      HORIZONTAL_FACES.forEach { face ->
        (-1..1).forEach { yOffset ->
          val candidate = pos.offset(face).add(0, yOffset, 0)
          if (candidate in wires) enqueue(candidate, timeMs, power)
        }
      }
      listOf(pos.add(0, 1, 0), pos.add(0, -1, 0)).forEach { candidate ->
        if (candidate in wires) enqueue(candidate, timeMs, power)
      }
    }

    // 方向情報がFAWEで失われたリピーターにも対応するため、構造追跡時だけは
    // 水平に接する入力候補を持たせる。出力先と遅延は元のリピーター設定を維持する。
    val permissiveRepeaterInputs = HashMap<BlockVector3, MutableList<RepeaterOutput>>()
    repeaters.forEach { (repeaterPos, repeater) ->
      val output = repeaterPos.add(repeater.facing.modX, repeater.facing.modY, repeater.facing.modZ)
      val edge = RepeaterOutput(repeaterPos, output, repeater.delay * 100)
      HORIZONTAL_FACES.forEach { face ->
        permissiveRepeaterInputs.getOrPut(repeaterPos.offset(face)) { mutableListOf() } += edge
      }
    }

    fun enqueueStructuralNeighbors(pos: BlockVector3, timeMs: Int, power: Int) {
      HORIZONTAL_FACES.forEach { face ->
        val neighbor = pos.offset(face)
        val data = blocks[neighbor] ?: return@forEach
        if (data !is Repeater && isStructuralConductor(data)) {
          enqueue(neighbor, timeMs, power)
        }
      }
    }

    sources.forEach { source ->
      val sourceData = blocks[source] ?: return@forEach
      sourcePowerAnchors(source, sourceData).forEach { anchor ->
        enqueue(anchor, 0, MAX_REDSTONE_POWER)
        enqueueNearbyWires(anchor, 0, MAX_REDSTONE_POWER)
      }
    }

    val notes = mutableListOf<RawNote>()
    val firedNotes = HashSet<Pair<BlockVector3, Int>>()
    fun record(pos: BlockVector3, data: BukkitNoteBlock, timeMs: Int) {
      if (firedNotes.add(pos to timeMs)) notes += toRawNote(world, pos, data, timeMs)
    }
    fun recordAtAndAdjacent(pos: BlockVector3, timeMs: Int) {
      (blocks[pos] as? BukkitNoteBlock)?.let { record(pos, it, timeMs) }
      recordAdjacentNotes(pos, timeMs, blocks, ::record)
    }

    var processedSignals = 0
    while (queue.isNotEmpty() && processedSignals++ < MAX_STRUCTURAL_SIGNALS) {
      val signal = queue.poll()
      if (bestSignals[signal.pos to signal.timeMs] != signal) continue
      recordAtAndAdjacent(signal.pos, signal.timeMs)

      if (blocks[signal.pos] is RedstoneWire) {
        enqueueNearbyWires(signal.pos, signal.timeMs, signal.power - 1)
        // 接続情報のないFAWEコピーでも、ダストは直下・横のブロックを弱動力で
        // 起動できる。ここで背面の不透過ブロックがキューに入るため、
        // 「不透過ブロック → リピーター → 音ブロック」の直列回路も復元できる。
        enqueue(signal.pos.add(0, -1, 0), signal.timeMs, signal.power)
        HORIZONTAL_FACES.forEach { face ->
          enqueue(signal.pos.offset(face), signal.timeMs, signal.power)
        }
      } else {
        enqueueNearbyWires(signal.pos, signal.timeMs, signal.power)
      }
      enqueueStructuralNeighbors(signal.pos, signal.timeMs, signal.power)
      repeaterInputs[signal.pos]?.forEach { edge ->
        enqueue(edge.repeaterPos, signal.timeMs + edge.delayMs, MAX_REDSTONE_POWER)
        enqueue(edge.output, signal.timeMs + edge.delayMs, MAX_REDSTONE_POWER)
      }
      permissiveRepeaterInputs[signal.pos]?.forEach { edge ->
        enqueue(edge.repeaterPos, signal.timeMs + edge.delayMs, MAX_REDSTONE_POWER)
        enqueue(edge.output, signal.timeMs + edge.delayMs, MAX_REDSTONE_POWER)
      }
    }
    return notes
  }

  private fun toRawNote(
      world: World,
      pos: BlockVector3,
      data: BukkitNoteBlock,
      timeMs: Int,
  ): RawNote {
    val exactDelay =
        SignOverrideProcessor.extractDelayMillisExactFromWorldPos(world, pos, QUARTER_NOTE_MS)
            ?: 0.0
    val customSound = SignOverrideProcessor.extractCustomSoundFromWorldPos(world, pos)
    val (volumeOverride, panOverride) = SignOverrideProcessor.extractFromWorldPos(world, pos)
    return RawNote(
        timeMs = timeMs + exactDelay,
        instrument = InstrumentMapper.toId(data.instrument),
        pitch = data.note.id,
        volume = volumeOverride ?: 100,
        pan = panOverride ?: 0,
        customSound = customSound?.eventKey,
        customSoundSeed = customSound?.seed,
    )
  }

  private fun blockDataAt(clipboard: Clipboard, pos: BlockVector3): BlockData? {
    val fullBlock = clipboard.getFullBlock(pos)
    return runCatching { BukkitAdapter.adapt(fullBlock) }
        .getOrElse { runCatching { Bukkit.createBlockData(fullBlock.asString) }.getOrNull() }
  }

  private fun isPowerSource(data: BlockData): Boolean =
      when (data.material) {
        Material.REDSTONE_BLOCK,
        Material.REDSTONE_TORCH,
        Material.REDSTONE_WALL_TORCH,
        Material.LEVER -> true
        else -> data.material.name.endsWith("_BUTTON")
      }

  /** ボタン・レバーの設置先を、部品本体と同じ電源として返す。 */
  private fun sourcePowerAnchors(pos: BlockVector3, data: BlockData): Set<BlockVector3> = buildSet {
    add(pos)
    attachedSupport(pos, data)?.let(::add)
  }

  private fun attachedSupport(pos: BlockVector3, data: BlockData): BlockVector3? =
      when {
        data is FaceAttachable && data is Directional ->
            when (data.attachedFace) {
              FaceAttachable.AttachedFace.FLOOR -> pos.add(0, -1, 0)
              FaceAttachable.AttachedFace.CEILING -> pos.add(0, 1, 0)
              FaceAttachable.AttachedFace.WALL -> pos.offset(data.facing.oppositeFace)
            }
        else -> null
      }

  /** 電源部品は横に接続されたダストを直接通電できる。トーチは支持ブロックを通電しない。 */
  private fun isDirectDustPowerSource(data: BlockData): Boolean = isPowerSource(data)

  /** RedstoneWireの接続面をそのまま使い、同じ高さ・上り坂・下り坂のダストだけを返す。 下り坂は低い側のダストがUP接続を持つため、その逆向きの面を確認する。 */
  private fun connectedWireNeighbors(
      pos: BlockVector3,
      wire: RedstoneWire,
      blocks: Map<BlockVector3, BlockData>,
  ): Set<BlockVector3> = buildSet {
    val hasConnectionInfo = hasConnectionInfo(wire)
    HORIZONTAL_FACES.forEach { face ->
      if (hasConnectionInfo) {
        when (wire.getFace(face)) {
          RedstoneWire.Connection.SIDE -> add(pos.offset(face))
          RedstoneWire.Connection.UP -> add(pos.offset(face).add(0, 1, 0))
          RedstoneWire.Connection.NONE -> Unit
        }
      } else {
        // FAWE/WorldEditのコピーでは接続状態が全NONEになることがある。
        // この場合だけ、同じ高さまたは一段上の隣接ダストを接続候補にする。
        val adjacent = pos.offset(face)
        if (blocks[adjacent]?.material == Material.REDSTONE_WIRE) add(adjacent)
        val upper = adjacent.add(0, 1, 0)
        if (blocks[upper]?.material == Material.REDSTONE_WIRE) add(upper)
      }

      val lower = pos.offset(face).add(0, -1, 0)
      val lowerWire = blocks[lower] as? RedstoneWire
      if (
          lowerWire != null &&
              (!hasConnectionInfo ||
                  lowerWire.getFace(face.oppositeFace) == RedstoneWire.Connection.UP)
      ) {
        add(lower)
      }
    }
    removeIf { blocks[it]?.material != Material.REDSTONE_WIRE }
  }

  private fun hasConnectionInfo(wire: RedstoneWire): Boolean =
      HORIZONTAL_FACES.any { wire.getFace(it) != RedstoneWire.Connection.NONE }

  /** 接続情報が失われた場合に、音楽回路の中継材としてたどれるブロック種別。 */
  private fun isStructuralConductor(data: BlockData): Boolean =
      data is RedstoneWire || data is BukkitNoteBlock || data.material.isOccluding

  private fun recordAdjacentNotes(
      pos: BlockVector3,
      timeMs: Int,
      blocks: Map<BlockVector3, BlockData>,
      record: (BlockVector3, BukkitNoteBlock, Int) -> Unit,
  ) {
    // 通電した不透過ブロック／音ブロックの横に連なる音ブロックは、同じ動力で
    // 同時に鳴る構成として扱う。最初の隣接音ブロックから水平連結だけをたどるため、
    // 上下の別レイヤーまで誤って連鎖させない。
    val noteQueue = ArrayDeque<BlockVector3>()
    val visited = HashSet<BlockVector3>()
    ADJACENT_6.forEach { (x, y, z) ->
      val notePos = pos.add(x, y, z)
      val note = blocks[notePos] as? BukkitNoteBlock ?: return@forEach
      if (!visited.add(notePos)) return@forEach
      record(notePos, note, timeMs)
      noteQueue += notePos
    }
    while (noteQueue.isNotEmpty()) {
      val notePos = noteQueue.removeFirst()
      HORIZONTAL_FACES.forEach { face ->
        val nextPos = notePos.offset(face)
        val nextNote = blocks[nextPos] as? BukkitNoteBlock ?: return@forEach
        if (visited.add(nextPos)) {
          record(nextPos, nextNote, timeMs)
          noteQueue += nextPos
        }
      }
    }
  }

  private fun BlockVector3.offset(face: BlockFace): BlockVector3 =
      add(face.modX, face.modY, face.modZ)
}
