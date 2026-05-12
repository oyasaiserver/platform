package icu.oyasai.citiesskymine.payload

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.function.operation.Operations
import com.sk89q.worldedit.function.pattern.BlockPattern
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import com.sk89q.worldedit.regions.Region
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import com.sk89q.worldedit.world.block.BaseBlock
import com.sk89q.worldedit.world.block.BlockState
import com.sk89q.worldedit.world.block.BlockTypes
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.undo.CsmUndoManager
import icu.oyasai.citiesskymine.util.MessageUtil
import java.io.ByteArrayInputStream
import java.math.BigInteger
import java.util.Base64
import java.util.LinkedHashMap
import java.util.UUID
import java.util.zip.InflaterInputStream
import kotlin.math.roundToInt
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Directional
import org.bukkit.command.BlockCommandSender
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class PayloadCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  private val base997Alphabet = buildBase997Alphabet()
  private val base997Index = base997Alphabet.withIndex().associate { it.value to it.index }
  private val undoSnapshots = object : LinkedHashMap<String, UndoSnapshot>(8, 0.75f, true) {}
  private var lastUndoKey: String? = null

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    val sub = args.getOrNull(0)?.lowercase()
    if (sub == null || sub == "help") {
      showHelp(sender)
      return true
    }

    if (sub == "undo") {
      undo(sender, args.getOrNull(1)?.equals("last", ignoreCase = true) == true)
      return true
    }

    if (sub != "load" && sub != "load64") {
      MessageUtil.error(sender, "不明なサブコマンド: $sub")
      return true
    }

    if (args.size < 2) {
      MessageUtil.error(sender, "使い方: /csm payload load <payload>")
      return true
    }

    val commandKey = if (sub == "load64") CommandKey.LOAD64 else CommandKey.LOAD
    if (!plugin.access.require(sender, commandKey)) return true

    val context =
        placementContext(sender)
            ?: run {
              MessageUtil.error(sender, "プレイヤーまたはコマンドブロックから実行してください。")
              return true
            }

    val payload = args[1]
    val maxColumns = plugin.config.getInt("limits.max-columns-csm", 100_000)
    val decodedColumns =
        try {
          decodeColumns(payload, forceBase64 = sub == "load64", maxColumns = maxColumns)
        } catch (e: Exception) {
          MessageUtil.error(sender, "payload の復元に失敗しました: ${e.message}")
          return true
        }

    if (maxColumns > 0 && decodedColumns.size > maxColumns) {
      MessageUtil.error(sender, "柱数が上限 ($maxColumns) を超えています: ${decodedColumns.size}")
      return true
    }

    val sourceBlockCount = countSourceBlocks(decodedColumns)
    val maxSourceBlocks =
        plugin.config.getLong(
            "limits.max-source-blocks-csm",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L))
    if (maxSourceBlocks > 0 && sourceBlockCount > maxSourceBlocks) {
      MessageUtil.error(sender, "復元元ブロック数が上限 ($maxSourceBlocks) を超えています: $sourceBlockCount")
      return true
    }

    val placementOptions =
        parsePlacementOptions(args, defaultPlacementOptions())
            ?: run {
              MessageUtil.error(
                  sender,
                  "配置指定は 0, 1, 2, 3 と L/R と hollow/solid を指定してください。例: /csm payload load <payload> 1 L hollow")
              return true
            }
    val placementColumns =
        if (placementOptions.hollow) {
          hollowPlacementColumns(decodedColumns)
        } else {
          decodedColumns.map { PlacementColumn(it.x, it.z, it.yMin, it.height, PayloadBlock.WALL) }
        }
    val blockCount = countPlacementBlocks(placementColumns)
    val maxBlocks = plugin.config.getLong("limits.max-blocks-csm", 2_000_000L)
    if (maxBlocks > 0 && blockCount > maxBlocks) {
      MessageUtil.error(sender, "ブロック数が上限 ($maxBlocks) を超えています: $blockCount")
      return true
    }

    val buildingTurns = placementOptions.buildingTurns.floorMod(4)
    val placement =
        buildPlacement(placementColumns, buildingTurns, context.viewTurns, placementOptions.side)
    val placementBounds = buildPlacementBounds(context, placementColumns, placement)
    val undoSnapshot = captureUndoSnapshot(sender, context, placementColumns, placement, blockCount)

    try {
      createEditSession(context.world, context.actor).use { editSession ->
        val weWorld = BukkitAdapter.adapt(context.world)
        val patterns = HashMap<PayloadBlock, BlockPattern>()
        for (column in placementColumns) {
          val (px, pz) = placedColumnPosition(column, placement)
          val from = context.origin.add(px, column.yMin, pz)
          val to = context.origin.add(px, column.yMin + column.height, pz)
          val pattern = patterns.getOrPut(column.block) { BlockPattern(blockState(column.block)) }
          editSession.setBlocks(CuboidRegion(weWorld, from, to) as Region, pattern)
        }
        Operations.complete(editSession.commit())
      }
    } catch (e: Exception) {
      MessageUtil.error(sender, "配置に失敗しました: ${e.message}")
      return true
    }

    val selectionApplied =
        try {
          if (plugin.config.getBoolean("csm.select-after-load", true)) {
            selectPlacedRegion(context.actor, context.world, placementBounds)
          } else {
            false
          }
        } catch (e: Exception) {
          MessageUtil.warn(sender, "配置範囲の選択に失敗しました: ${e.message}")
          false
        }

    MessageUtil.success(
        sender,
        "CitiesSkyMine payload を配置しました: ${placementColumns.size} columns / $blockCount blocks / rotation $buildingTurns / side ${placementOptions.side.code} / ${if (placementOptions.hollow) "hollow" else "solid"}")
    if (placementOptions.hollow) {
      MessageUtil.info(sender, "hollow: $sourceBlockCount -> $blockCount blocks")
    }
    if (selectionApplied && placementBounds != null) {
      MessageUtil.info(
          sender,
          "配置範囲を選択しました: ${placementBounds.minX},${placementBounds.minY},${placementBounds.minZ} -> ${placementBounds.maxX},${placementBounds.maxY},${placementBounds.maxZ}")
    }
    if (undoSnapshot != null) {
      rememberUndo(undoSnapshot)
      plugin.undoManager.record(sender, CsmUndoManager.Source.PAYLOAD)
      MessageUtil.info(sender, "/csm payload undo でこの配置を復元できます。")
    } else {
      MessageUtil.warn(sender, "この配置は undo 保存上限を超えたため、/csm payload undo 対象外です。")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    return when (args.size) {
      1 ->
          listOf("load", "load64", "undo", "help").filter {
            it.startsWith(args[0], ignoreCase = true)
          }
      2 ->
          if (args[0].equals("undo", ignoreCase = true)) {
            listOf("last").filter { it.startsWith(args[1], ignoreCase = true) }
          } else {
            emptyList()
          }
      3 ->
          if (args[0].equals("load", ignoreCase = true) ||
              args[0].equals("load64", ignoreCase = true)) {
            placementSuggestions(args)
          } else {
            emptyList()
          }
      4,
      5 ->
          if (args[0].equals("load", ignoreCase = true) ||
              args[0].equals("load64", ignoreCase = true)) {
            placementSuggestions(args)
          } else {
            emptyList()
          }
      else -> emptyList()
    }
  }

  private fun placementSuggestions(args: Array<String>): List<String> {
    var hasRotation = false
    var hasSide = false
    var hasHollow = false
    for (raw in args.drop(2).dropLast(1)) {
      val token = parsePlacementToken(raw) ?: continue
      hasRotation = hasRotation || token.buildingTurns != null
      hasSide = hasSide || token.side != null
      hasHollow = hasHollow || token.hollow != null
    }

    val suggestions = ArrayList<String>()
    if (!hasRotation) suggestions.addAll(listOf("0", "1", "2", "3"))
    if (!hasSide) suggestions.addAll(listOf("L", "R"))
    if (!hasRotation && !hasSide) {
      suggestions.addAll(
          listOf(
              "0L",
              "0R",
              "1L",
              "1R",
              "2L",
              "2R",
              "3L",
              "3R",
              "L0",
              "R0",
              "L1",
              "R1",
              "L2",
              "R2",
              "L3",
              "R3"))
    }
    if (!hasHollow) suggestions.addAll(listOf("hollow", "solid"))
    return suggestions.filter { it.startsWith(args.last(), ignoreCase = true) }
  }

  private fun showHelp(sender: CommandSender) {
    MessageUtil.header(sender, "CitiesSkyMine")
    MessageUtil.helpEntry(sender, "/csm payload load <payload>", "Base997/Base64 payloadを復元して配置")
    MessageUtil.helpEntry(sender, "/csm payload load64 <payload>", "Base64 payloadを復元して配置")
    MessageUtil.helpEntry(
        sender,
        "/csm payload load <payload> [0-3] [L|R] [hollow|solid]",
        "建物回転、プレイヤー基準の左右、hollowを指定")
    MessageUtil.helpEntry(sender, "/csm payload undo", "同じ実行元の直前CSM配置を復元")
    MessageUtil.helpEntry(sender, "/csm payload undo last", "最後に保存されたCSM配置を復元")
  }

  fun undo(sender: CommandSender, useLast: Boolean): Boolean {
    if (!plugin.access.require(sender, CommandKey.PAYLOAD)) return false

    val snapshot = takeUndoSnapshot(sender, useLast)
    if (snapshot == null) {
      MessageUtil.error(sender, "復元できるCSM配置がありません。")
      return false
    }

    val world = Bukkit.getWorld(snapshot.worldId)
    if (world == null) {
      MessageUtil.error(sender, "復元先ワールドが読み込まれていません: ${snapshot.worldName}")
      putUndoSnapshot(snapshot)
      return false
    }

    val actor = sender as? Player
    try {
      createEditSession(world, actor).use { editSession ->
        val weWorld = BukkitAdapter.adapt(world)
        for (column in snapshot.columns) {
          for (run in column.runs) {
            val from = BlockVector3.at(column.x, run.yMin, column.z)
            val to = BlockVector3.at(column.x, run.yMin + run.length - 1, column.z)
            editSession.setBlocks(CuboidRegion(weWorld, from, to) as Region, run.block)
          }
        }
        Operations.complete(editSession.commit())
      }
    } catch (e: Exception) {
      putUndoSnapshot(snapshot)
      MessageUtil.error(sender, "undo に失敗しました: ${e.message}")
      return false
    }

    MessageUtil.success(sender, "CSM配置を復元しました: ${snapshot.blocks} blocks")
    plugin.undoManager.takeLatest(sender, CsmUndoManager.Source.PAYLOAD)
    return true
  }

  private fun placementContext(sender: CommandSender): PlacementContext? {
    return when (sender) {
      is Player -> {
        val loc = sender.location
        PlacementContext(
            world = sender.world,
            origin = BlockVector3.at(loc.blockX, loc.blockY, loc.blockZ),
            viewTurns = yawTurns(loc.yaw),
            actor = sender)
      }
      is BlockCommandSender -> {
        val block = sender.block
        val loc = block.location
        PlacementContext(
            world = block.world,
            origin = BlockVector3.at(loc.blockX, loc.blockY + 1, loc.blockZ),
            viewTurns = blockTurns(block.blockData as? Directional),
            actor = null)
      }
      else -> null
    }
  }

  private fun createEditSession(world: World, actor: Player?) =
      WorldEdit.getInstance()
          .newEditSessionBuilder()
          .apply {
            world(BukkitAdapter.adapt(world))
            if (actor != null) {
              actor(BukkitAdapter.adapt(actor))
            }
          }
          .build()

  private fun captureUndoSnapshot(
      sender: CommandSender,
      context: PlacementContext,
      columns: List<PlacementColumn>,
      placement: PlacementPlan,
      blockCount: Long
  ): UndoSnapshot? {
    val maxUndoBlocks = plugin.config.getLong("limits.max-undo-blocks-csm", 2_000_000L)
    if (maxUndoBlocks > 0 && blockCount > maxUndoBlocks) {
      return null
    }

    val key = undoKey(sender) ?: return null
    val undoColumns = ArrayList<UndoColumn>(columns.size)
    createEditSession(context.world, null).use { editSession ->
      for (column in columns) {
        val (px, pz) = placedColumnPosition(column, placement)
        val worldX = context.origin.x() + px
        val worldZ = context.origin.z() + pz
        val yMin = context.origin.y() + column.yMin
        val yMax = yMin + column.height
        val runs = captureColumnRuns(editSession, worldX, worldZ, yMin, yMax)
        undoColumns.add(UndoColumn(worldX, worldZ, runs))
      }
    }

    return UndoSnapshot(
        key = key,
        worldId = context.world.uid,
        worldName = context.world.name,
        columns = undoColumns,
        blocks = blockCount,
        createdAt = System.currentTimeMillis())
  }

  private fun captureColumnRuns(
      editSession: com.sk89q.worldedit.EditSession,
      x: Int,
      z: Int,
      yMin: Int,
      yMax: Int
  ): List<UndoRun> {
    val runs = ArrayList<UndoRun>()
    var runStart = yMin
    var current = editSession.getFullBlock(x, yMin, z)
    for (y in (yMin + 1)..yMax) {
      val block = editSession.getFullBlock(x, y, z)
      if (block == current) {
        continue
      }
      runs.add(UndoRun(runStart, y - runStart, current))
      runStart = y
      current = block
    }
    runs.add(UndoRun(runStart, yMax - runStart + 1, current))
    return runs
  }

  private fun rememberUndo(snapshot: UndoSnapshot) {
    synchronized(undoSnapshots) {
      undoSnapshots[snapshot.key] = snapshot
      lastUndoKey = snapshot.key
      trimUndoSnapshots()
    }
  }

  private fun takeUndoSnapshot(sender: CommandSender, useLast: Boolean): UndoSnapshot? {
    synchronized(undoSnapshots) {
      val key = if (useLast) lastUndoKey else undoKey(sender)
      val snapshot = key?.let { undoSnapshots.remove(it) } ?: return null
      if (lastUndoKey == key) {
        lastUndoKey = undoSnapshots.entries.lastOrNull()?.key
      }
      return snapshot
    }
  }

  private fun putUndoSnapshot(snapshot: UndoSnapshot) {
    synchronized(undoSnapshots) {
      undoSnapshots[snapshot.key] = snapshot
      lastUndoKey = snapshot.key
      trimUndoSnapshots()
    }
  }

  private fun trimUndoSnapshots() {
    val maxSnapshots = plugin.config.getInt("limits.max-undo-snapshots-csm", 4)
    if (maxSnapshots <= 0) {
      return
    }
    while (undoSnapshots.size > maxSnapshots) {
      val firstKey = undoSnapshots.entries.firstOrNull()?.key ?: break
      undoSnapshots.remove(firstKey)
      if (lastUndoKey == firstKey) {
        lastUndoKey = undoSnapshots.entries.lastOrNull()?.key
      }
    }
  }

  private fun undoKey(sender: CommandSender): String? {
    return when (sender) {
      is Player -> "player:${sender.uniqueId}"
      is BlockCommandSender -> {
        val loc = sender.block.location
        "block:${sender.block.world.uid}:${loc.blockX}:${loc.blockY}:${loc.blockZ}"
      }
      else -> null
    }
  }

  private fun countSourceBlocks(columns: List<Column>): Long =
      columns.sumOf { it.height.toLong() + 1L }

  private fun countPlacementBlocks(columns: List<PlacementColumn>): Long =
      columns.sumOf { it.height.toLong() + 1L }

  private fun hollowPlacementColumns(columns: List<Column>): List<PlacementColumn> {
    if (columns.isEmpty()) return emptyList()

    val index = buildColumnIndex(columns)
    val roofLowering = buildRoofLoweringPlan(columns, index)
    val shape = VirtualShape(index, roofLowering.removedBlocks, roofLowering.roofFloors)
    val blocks = HashMap<BlockPos, PayloadBlock>()
    for (column in columns) {
      val yMax = column.yMin + column.height
      for (y in column.yMin..yMax) {
        val pos = BlockPos(column.x, y, column.z)
        if (pos in roofLowering.removedBlocks) continue

        if (pos in roofLowering.roofFloors) {
          blocks[pos] = PayloadBlock.ROOF_FLOOR
          continue
        }
        if (!isSurfaceBlock(shape, column.x, y, column.z)) continue

        val horizontalInterior = hasHorizontalNeighbors(shape, column.x, y, column.z)
        val hasBelow = containsBlock(shape, column.x, y - 1, column.z)
        when {
          !hasBelow && horizontalInterior -> {
            // 床の内側は貼らない。外周だけを床枠として残す。
          }
          else -> {
            blocks.putIfAbsent(pos, PayloadBlock.WALL)
          }
        }
      }
    }
    for (pos in roofLowering.roofFloors) {
      blocks[pos] = PayloadBlock.ROOF_FLOOR
    }

    return compressPlacementBlocks(blocks)
  }

  private fun buildRoofLoweringPlan(
      columns: List<Column>,
      index: Map<Long, List<YRange>>
  ): RoofLoweringPlan {
    val removedBlocks = HashSet<BlockPos>()
    val roofFloors = HashSet<BlockPos>()
    for (column in columns) {
      val yMax = column.yMin + column.height
      for (y in column.yMin..yMax) {
        if (!isSurfaceBlock(index, column.x, y, column.z)) continue
        if (containsBlock(index, column.x, y + 1, column.z)) continue
        if (!containsBlock(index, column.x, y - 1, column.z)) continue
        if (!hasHorizontalNeighbors(index, column.x, y, column.z)) continue

        val loweredY = y - 1
        if (isFloorInterior(index, column.x, loweredY, column.z)) continue

        removedBlocks.add(BlockPos(column.x, y, column.z))
        roofFloors.add(BlockPos(column.x, loweredY, column.z))
      }
    }
    return RoofLoweringPlan(removedBlocks, roofFloors)
  }

  private fun compressPlacementBlocks(blocks: Map<BlockPos, PayloadBlock>): List<PlacementColumn> {
    val grouped = HashMap<Long, MutableList<BlockRunSource>>()
    for ((pos, block) in blocks) {
      grouped.getOrPut(xzKey(pos.x, pos.z)) { ArrayList() }.add(BlockRunSource(pos.y, block))
    }

    val result = ArrayList<PlacementColumn>()
    for ((key, entries) in grouped) {
      entries.sortWith(compareBy<BlockRunSource> { it.y }.thenBy { it.block.ordinal })
      val x = xFromKey(key)
      val z = zFromKey(key)
      var start = entries[0].y
      var previous = entries[0].y
      var block = entries[0].block
      for (i in 1 until entries.size) {
        val entry = entries[i]
        if (entry.y == previous && entry.block == block) continue
        if (entry.y == previous + 1 && entry.block == block) {
          previous = entry.y
          continue
        }
        result.add(PlacementColumn(x, z, start, previous - start, block))
        start = entry.y
        previous = entry.y
        block = entry.block
      }
      result.add(PlacementColumn(x, z, start, previous - start, block))
    }
    result.sortWith(
        compareBy<PlacementColumn> { it.x }
            .thenBy { it.z }
            .thenBy { it.yMin }
            .thenBy { it.height }
            .thenBy { it.block.ordinal })
    return result
  }

  private fun buildColumnIndex(columns: List<Column>): Map<Long, List<YRange>> {
    val raw = HashMap<Long, MutableList<YRange>>()
    for (column in columns) {
      raw.getOrPut(xzKey(column.x, column.z)) { ArrayList() }
          .add(YRange(column.yMin, column.yMin + column.height))
    }

    val merged = HashMap<Long, List<YRange>>(raw.size)
    for ((key, ranges) in raw) {
      ranges.sortBy { it.min }
      val compact = ArrayList<YRange>()
      var current = ranges[0]
      for (i in 1 until ranges.size) {
        val next = ranges[i]
        if (next.min <= current.max + 1) {
          current = YRange(current.min, maxOf(current.max, next.max))
        } else {
          compact.add(current)
          current = next
        }
      }
      compact.add(current)
      merged[key] = compact
    }
    return merged
  }

  private fun isSurfaceBlock(index: Map<Long, List<YRange>>, x: Int, y: Int, z: Int): Boolean =
      !containsBlock(index, x + 1, y, z) ||
          !containsBlock(index, x - 1, y, z) ||
          !containsBlock(index, x, y, z + 1) ||
          !containsBlock(index, x, y, z - 1) ||
          !containsBlock(index, x, y + 1, z) ||
          !containsBlock(index, x, y - 1, z)

  private fun isSurfaceBlock(shape: VirtualShape, x: Int, y: Int, z: Int): Boolean =
      !containsBlock(shape, x + 1, y, z) ||
          !containsBlock(shape, x - 1, y, z) ||
          !containsBlock(shape, x, y, z + 1) ||
          !containsBlock(shape, x, y, z - 1) ||
          !containsBlock(shape, x, y + 1, z) ||
          !containsBlock(shape, x, y - 1, z)

  private fun isFloorInterior(index: Map<Long, List<YRange>>, x: Int, y: Int, z: Int): Boolean =
      containsBlock(index, x, y, z) &&
          !containsBlock(index, x, y - 1, z) &&
          hasHorizontalNeighbors(index, x, y, z)

  private fun hasHorizontalNeighbors(
      index: Map<Long, List<YRange>>,
      x: Int,
      y: Int,
      z: Int
  ): Boolean =
      containsBlock(index, x + 1, y, z) &&
          containsBlock(index, x - 1, y, z) &&
          containsBlock(index, x, y, z + 1) &&
          containsBlock(index, x, y, z - 1)

  private fun hasHorizontalNeighbors(shape: VirtualShape, x: Int, y: Int, z: Int): Boolean =
      containsBlock(shape, x + 1, y, z) &&
          containsBlock(shape, x - 1, y, z) &&
          containsBlock(shape, x, y, z + 1) &&
          containsBlock(shape, x, y, z - 1)

  private fun containsBlock(index: Map<Long, List<YRange>>, x: Int, y: Int, z: Int): Boolean {
    val ranges = index[xzKey(x, z)] ?: return false
    var low = 0
    var high = ranges.lastIndex
    while (low <= high) {
      val mid = (low + high).ushr(1)
      val range = ranges[mid]
      when {
        y < range.min -> high = mid - 1
        y > range.max -> low = mid + 1
        else -> return true
      }
    }
    return false
  }

  private fun containsBlock(shape: VirtualShape, x: Int, y: Int, z: Int): Boolean {
    val pos = BlockPos(x, y, z)
    if (pos in shape.roofFloors) return true
    return pos !in shape.removedBlocks && containsBlock(shape.index, x, y, z)
  }

  private fun xzKey(x: Int, z: Int): Long = (x.toLong() shl 32) xor (z.toLong() and 0xffffffffL)

  private fun xFromKey(key: Long): Int = (key shr 32).toInt()

  private fun zFromKey(key: Long): Int = key.toInt()

  private fun blockState(block: PayloadBlock): BlockState =
      when (block) {
        PayloadBlock.WALL -> BlockTypes.STONE_BRICKS!!.defaultState
        PayloadBlock.ROOF_FLOOR -> BlockTypes.SMOOTH_STONE!!.defaultState
      }

  private fun defaultPlacementOptions(): PlacementOptions {
    val buildingTurns = plugin.config.getInt("csm.default-rotation", 0).floorMod(4)
    val side =
        parsePlacementSide(plugin.config.getString("csm.default-side")) ?: PlacementSide.RIGHT
    val hollow = plugin.config.getBoolean("csm.hollow-on-load", true)
    return PlacementOptions(buildingTurns, side, hollow)
  }

  private fun parsePlacementOptions(
      args: Array<String>,
      defaults: PlacementOptions
  ): PlacementOptions? {
    var buildingTurns = defaults.buildingTurns
    var side = defaults.side
    var hollow = defaults.hollow
    var hasRotation = false
    var hasSide = false
    var hasHollow = false

    if (args.size > 5) {
      return null
    }

    for (i in 2 until args.size) {
      val token = parsePlacementToken(args[i]) ?: return null
      if (token.buildingTurns != null) {
        if (hasRotation) return null
        buildingTurns = token.buildingTurns
        hasRotation = true
      }
      if (token.side != null) {
        if (hasSide) return null
        side = token.side
        hasSide = true
      }
      if (token.hollow != null) {
        if (hasHollow) return null
        hollow = token.hollow
        hasHollow = true
      }
    }

    return PlacementOptions(buildingTurns.floorMod(4), side, hollow)
  }

  private fun parsePlacementToken(raw: String?): PlacementToken? {
    if (raw == null) {
      return PlacementToken(null, null, null)
    }

    val token = raw.trim().uppercase()
    if (token.isEmpty()) {
      return null
    }

    val extraTurns = parseExtraTurns(token)
    if (extraTurns != null) {
      return PlacementToken(extraTurns, null, null)
    }

    val side = parsePlacementSide(token)
    if (side != null) {
      return PlacementToken(null, side, null)
    }

    val hollow = parseHollowMode(token)
    if (hollow != null) {
      return PlacementToken(null, null, hollow)
    }

    if (token.length == 2) {
      val firstTurns = parseExtraTurns(token.substring(0, 1))
      val firstSide = parsePlacementSide(token.substring(0, 1))
      val secondTurns = parseExtraTurns(token.substring(1, 2))
      val secondSide = parsePlacementSide(token.substring(1, 2))
      if (firstTurns != null && secondSide != null) {
        return PlacementToken(firstTurns, secondSide, null)
      }
      if (firstSide != null && secondTurns != null) {
        return PlacementToken(secondTurns, firstSide, null)
      }
    }

    return null
  }

  private fun parseExtraTurns(raw: String?): Int? {
    if (raw == null) {
      return null
    }
    return when (raw) {
      "0",
      "1",
      "2",
      "3" -> raw.toInt()
      else -> null
    }
  }

  private fun parsePlacementSide(raw: String?): PlacementSide? {
    return when (raw?.trim()?.uppercase()) {
      "L",
      "LEFT" -> PlacementSide.LEFT
      "R",
      "RIGHT" -> PlacementSide.RIGHT
      else -> null
    }
  }

  private fun parseHollowMode(raw: String?): Boolean? {
    return when (raw?.trim()?.uppercase()) {
      "H",
      "HOLLOW" -> true
      "S",
      "SOLID" -> false
      else -> null
    }
  }

  private fun buildPlacement(
      columns: List<PlacementColumn>,
      buildingTurns: Int,
      viewTurns: Int,
      side: PlacementSide
  ): PlacementPlan {
    val (frontX, frontZ) = rotate(0, 1, viewTurns)
    val rightX = -frontZ
    val rightZ = frontX
    var minFront: Int? = null
    var maxRight: Int? = null
    var minRight: Int? = null

    for (column in columns) {
      val (rx, rz) = rotate(column.x, column.z, buildingTurns)
      val front = rx * frontX + rz * frontZ
      val right = rx * rightX + rz * rightZ
      if (minFront == null || front < minFront) {
        minFront = front
      }
      if (maxRight == null || right > maxRight) {
        maxRight = right
      }
      if (minRight == null || right < minRight) {
        minRight = right
      }
    }

    val anchorFront = (minFront ?: 0) - 1
    val anchorRight =
        when (side) {
          PlacementSide.LEFT -> minRight ?: 0
          PlacementSide.RIGHT -> maxRight ?: 0
        }
    return PlacementPlan(
        buildingTurns = buildingTurns.floorMod(4),
        anchorX = frontX * anchorFront + rightX * anchorRight,
        anchorZ = frontZ * anchorFront + rightZ * anchorRight)
  }

  private fun placedColumnPosition(
      column: PlacementColumn,
      placement: PlacementPlan
  ): Pair<Int, Int> {
    val (rx, rz) = rotate(column.x, column.z, placement.buildingTurns)
    return (rx - placement.anchorX) to (rz - placement.anchorZ)
  }

  private fun buildPlacementBounds(
      context: PlacementContext,
      columns: List<PlacementColumn>,
      placement: PlacementPlan
  ): PlacementBounds? {
    if (columns.isEmpty()) {
      return null
    }

    var minX = Int.MAX_VALUE
    var minY = Int.MAX_VALUE
    var minZ = Int.MAX_VALUE
    var maxX = Int.MIN_VALUE
    var maxY = Int.MIN_VALUE
    var maxZ = Int.MIN_VALUE

    for (column in columns) {
      val (px, pz) = placedColumnPosition(column, placement)
      val x = context.origin.x() + px
      val z = context.origin.z() + pz
      val yMin = context.origin.y() + column.yMin
      val yMax = yMin + column.height

      minX = minOf(minX, x)
      minY = minOf(minY, yMin)
      minZ = minOf(minZ, z)
      maxX = maxOf(maxX, x)
      maxY = maxOf(maxY, yMax)
      maxZ = maxOf(maxZ, z)
    }

    return PlacementBounds(minX, minY, minZ, maxX, maxY, maxZ)
  }

  private fun selectPlacedRegion(player: Player?, world: World, bounds: PlacementBounds?): Boolean {
    if (player == null || bounds == null) {
      return false
    }

    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(world)
    val min = BlockVector3.at(bounds.minX, bounds.minY, bounds.minZ)
    val max = BlockVector3.at(bounds.maxX, bounds.maxY, bounds.maxZ)
    val selector = CuboidRegionSelector(weWorld, min, max)
    val session = WorldEdit.getInstance().sessionManager.get(actor)
    session.setRegionSelector(weWorld, selector)
    session.dispatchCUISelection(actor)
    return true
  }

  private fun yawTurns(yaw: Float): Int {
    return (yaw / 90.0f).roundToInt().floorMod(4)
  }

  private fun blockTurns(data: Directional?): Int {
    return when (data?.facing) {
      BlockFace.WEST -> 1
      BlockFace.NORTH -> 2
      BlockFace.EAST -> 3
      else -> 0
    }
  }

  private fun rotate(x: Int, z: Int, turns: Int): Pair<Int, Int> {
    return when (turns.floorMod(4)) {
      1 -> -z to x
      2 -> -x to -z
      3 -> z to -x
      else -> x to z
    }
  }

  private fun decodeColumns(payload: String, forceBase64: Boolean, maxColumns: Int): List<Column> {
    val compressed = decodePayload(payload, forceBase64)
    val data = InflaterInputStream(ByteArrayInputStream(compressed)).use { it.readBytes() }
    val reader = ByteReader(data)
    return when (val magic = reader.readMagic()) {
      "CMC" -> decodeCmcColumns(reader, maxColumns)
      "CMB" -> decodeCmbBoxes(reader, maxColumns)
      else -> throw IllegalArgumentException("$magic v1 payload には対応していません")
    }
  }

  private fun decodeCmcColumns(reader: ByteReader, maxColumns: Int): List<Column> {
    reader.readVarInt() // scale x1000. 現状は配置時に使わない。

    val count = reader.readVarInt().toIntChecked("column count")
    if (maxColumns > 0 && count > maxColumns) {
      throw IllegalArgumentException("柱数が上限 ($maxColumns) を超えています: $count")
    }
    val columns = ArrayList<Column>(count)
    var x = 0
    var z = 0
    var y = 0
    repeat(count) {
      x += reader.readZigZagInt()
      z += reader.readZigZagInt()
      y += reader.readZigZagInt()
      val height = reader.readVarInt().toIntChecked("height")
      columns.add(Column(x, z, y, height))
    }
    reader.expectEnd()
    return columns
  }

  private fun decodeCmbBoxes(reader: ByteReader, maxColumns: Int): List<Column> {
    reader.readVarInt() // scale x1000. 現状は配置時に使わない。

    val boxCount = reader.readVarInt().toIntChecked("box count")
    val columns = ArrayList<Column>()
    var x = 0
    var z = 0
    var y = 0
    repeat(boxCount) {
      x += reader.readZigZagInt()
      z += reader.readZigZagInt()
      y += reader.readZigZagInt()
      val width = reader.readVarInt().toIntChecked("box width")
      val depth = reader.readVarInt().toIntChecked("box depth")
      val height = reader.readVarInt().toIntChecked("box height")
      if (width <= 0 || depth <= 0) {
        throw IllegalArgumentException("box width/depth が0以下です")
      }

      val nextSize = columns.size.toLong() + width.toLong() * depth.toLong()
      if (maxColumns > 0 && nextSize > maxColumns.toLong()) {
        throw IllegalArgumentException("CMB展開後の柱数が上限 ($maxColumns) を超えています: $nextSize")
      }

      for (dx in 0 until width) {
        for (dz in 0 until depth) {
          columns.add(Column(x + dx, z + dz, y, height))
        }
      }
    }
    reader.expectEnd()
    columns.sortWith(
        compareBy<Column> { it.x }.thenBy { it.z }.thenBy { it.yMin }.thenBy { it.height })
    return columns
  }

  private fun decodePayload(payload: String, forceBase64: Boolean): ByteArray {
    return if (!forceBase64 && payload.startsWith("$")) {
      decodeBase997(payload)
    } else {
      Base64.getUrlDecoder().decode(payload.padEnd(payload.length + padding(payload), '='))
    }
  }

  private fun decodeBase997(payload: String): ByteArray {
    val body = payload.substring(1)
    val sep = body.indexOf('~')
    if (sep <= 0) {
      throw IllegalArgumentException("Base997 length separator がありません")
    }

    val expectedLength =
        body.substring(0, sep).toIntOrNull()
            ?: throw IllegalArgumentException("Base997 length が無効です")
    if (expectedLength < 0) {
      throw IllegalArgumentException("Base997 length が負数です")
    }

    val digits = body.substring(sep + 1)
    var value = BigInteger.ZERO
    val base = BigInteger.valueOf(base997Alphabet.length.toLong())
    for (ch in digits) {
      val idx =
          base997Index[ch]
              ?: throw IllegalArgumentException("Base997 alphabet外の文字です: U+${ch.code.toString(16)}")
      value = value.multiply(base).add(BigInteger.valueOf(idx.toLong()))
    }

    val raw = if (value == BigInteger.ZERO) ByteArray(0) else value.toByteArray()
    val unsigned = if (raw.size > 1 && raw[0] == 0.toByte()) raw.copyOfRange(1, raw.size) else raw
    if (unsigned.size > expectedLength) {
      throw IllegalArgumentException("Base997 payload が指定長を超えています")
    }

    return ByteArray(expectedLength - unsigned.size) + unsigned
  }

  private fun padding(payload: String): Int = (4 - payload.length % 4) % 4

  private fun buildBase997Alphabet(): String {
    val excluded = setOf(' ', '"', '\'', '\\', '/', '$', '~', '\u00AD', '\u00A7')
    val ranges = listOf(0x0021..0x007E, 0x00A1..0x02FF, 0x0370..0x03FF, 0x1E00..0x1EFF)
    val chars = StringBuilder(997)
    for (range in ranges) {
      for (cp in range) {
        if (excluded.contains(cp.toChar())) continue
        if (cp in 0xD800..0xDFFF) continue
        if ((cp and 0xFFFF) == 0xFFFE || (cp and 0xFFFF) == 0xFFFF) continue
        chars.append(cp.toChar())
        if (chars.length == 997) return chars.toString()
      }
    }
    throw IllegalStateException("Base997 alphabet を生成できません")
  }

  private fun Int.floorMod(mod: Int): Int = Math.floorMod(this, mod)

  private fun Long.toIntChecked(name: String): Int {
    if (this < 0L || this > Int.MAX_VALUE.toLong()) {
      throw IllegalArgumentException("$name が範囲外です")
    }
    return toInt()
  }

  private data class PlacementContext(
      val world: World,
      val origin: BlockVector3,
      val viewTurns: Int,
      val actor: Player?
  )

  private data class Column(val x: Int, val z: Int, val yMin: Int, val height: Int)

  private data class PlacementColumn(
      val x: Int,
      val z: Int,
      val yMin: Int,
      val height: Int,
      val block: PayloadBlock
  )

  private data class BlockPos(val x: Int, val y: Int, val z: Int)

  private data class BlockRunSource(val y: Int, val block: PayloadBlock)

  private data class YRange(val min: Int, val max: Int)

  private data class RoofLoweringPlan(
      val removedBlocks: Set<BlockPos>,
      val roofFloors: Set<BlockPos>
  )

  private data class VirtualShape(
      val index: Map<Long, List<YRange>>,
      val removedBlocks: Set<BlockPos>,
      val roofFloors: Set<BlockPos>
  )

  private data class PlacementPlan(val buildingTurns: Int, val anchorX: Int, val anchorZ: Int)

  private data class PlacementBounds(
      val minX: Int,
      val minY: Int,
      val minZ: Int,
      val maxX: Int,
      val maxY: Int,
      val maxZ: Int
  )

  private data class PlacementOptions(
      val buildingTurns: Int,
      val side: PlacementSide,
      val hollow: Boolean
  )

  private data class PlacementToken(
      val buildingTurns: Int?,
      val side: PlacementSide?,
      val hollow: Boolean?
  )

  private enum class PlacementSide(val code: String) {
    LEFT("L"),
    RIGHT("R")
  }

  private enum class PayloadBlock {
    WALL,
    ROOF_FLOOR
  }

  private data class UndoSnapshot(
      val key: String,
      val worldId: UUID,
      val worldName: String,
      val columns: List<UndoColumn>,
      val blocks: Long,
      val createdAt: Long
  )

  private data class UndoColumn(val x: Int, val z: Int, val runs: List<UndoRun>)

  private data class UndoRun(val yMin: Int, val length: Int, val block: BaseBlock)

  private class ByteReader(private val data: ByteArray) {
    private var pos = 0

    fun readMagic(): String {
      if (data.size < 4 ||
          data[0] != 'C'.code.toByte() ||
          data[1] != 'M'.code.toByte() ||
          data[3] != 1.toByte()) {
        throw IllegalArgumentException("CM* v1 payload ではありません")
      }
      pos = 4
      return "CM${data[2].toInt().toChar()}"
    }

    fun readVarInt(): Long {
      var shift = 0
      var result = 0L
      while (true) {
        if (pos >= data.size) {
          throw IllegalArgumentException("payload が途中で終わっています")
        }
        if (shift > 63) {
          throw IllegalArgumentException("varint が大きすぎます")
        }
        val b = data[pos++].toInt() and 0xFF
        result = result or ((b and 0x7F).toLong() shl shift)
        if ((b and 0x80) == 0) {
          return result
        }
        shift += 7
      }
    }

    fun readZigZagInt(): Int {
      val raw = readVarInt()
      val value = (raw ushr 1) xor -(raw and 1L)
      if (value < Int.MIN_VALUE.toLong() || value > Int.MAX_VALUE.toLong()) {
        throw IllegalArgumentException("座標が範囲外です")
      }
      return value.toInt()
    }

    fun expectEnd() {
      if (pos != data.size) {
        throw IllegalArgumentException("payload 末尾に余分なデータがあります")
      }
    }
  }
}
