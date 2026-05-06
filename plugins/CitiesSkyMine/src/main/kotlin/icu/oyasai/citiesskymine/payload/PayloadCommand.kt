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
import com.sk89q.worldedit.world.block.BlockTypes
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
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
import java.io.ByteArrayInputStream
import java.math.BigInteger
import java.util.Base64
import java.util.LinkedHashMap
import java.util.UUID
import java.util.zip.InflaterInputStream
import kotlin.math.roundToInt

class PayloadCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

    private val base997Alphabet = buildBase997Alphabet()
    private val base997Index = base997Alphabet.withIndex().associate { it.value to it.index }
    private val undoSnapshots = object : LinkedHashMap<String, UndoSnapshot>(8, 0.75f, true) {}
    private var lastUndoKey: String? = null

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<String>): Boolean {
        val sub = args.getOrNull(0)?.lowercase()
        if (sub == null || sub == "help") {
            showHelp(sender)
            return true
        }

        if (sub == "undo") {
            return handleUndo(sender, args)
        }

        if (sub != "load" && sub != "load64") {
            MessageUtil.error(sender, "不明なサブコマンド: $sub")
            return true
        }

        if (args.size < 2) {
            MessageUtil.error(sender, "使い方: /csm payload load <payload>")
            return true
        }

        if (!sender.hasPermission("citiesskymine.payload")) {
            MessageUtil.error(sender, "このコマンドを使用する権限がありません。")
            return true
        }

        val context = placementContext(sender) ?: run {
            MessageUtil.error(sender, "プレイヤーまたはコマンドブロックから実行してください。")
            return true
        }

        val payload = args[1]
        val maxColumns = plugin.config.getInt("limits.max-columns-csm", 100_000)
        val columns = try {
            decodeColumns(payload, forceBase64 = sub == "load64", maxColumns = maxColumns)
        } catch (e: Exception) {
            MessageUtil.error(sender, "payload の復元に失敗しました: ${e.message}")
            return true
        }

        if (maxColumns > 0 && columns.size > maxColumns) {
            MessageUtil.error(sender, "柱数が上限 ($maxColumns) を超えています: ${columns.size}")
            return true
        }

        val blockCount = columns.sumOf { it.height.toLong() + 1L }
        val maxBlocks = plugin.config.getLong("limits.max-blocks-csm", 2_000_000L)
        if (maxBlocks > 0 && blockCount > maxBlocks) {
            MessageUtil.error(sender, "ブロック数が上限 ($maxBlocks) を超えています: $blockCount")
            return true
        }

        val placementOptions = parsePlacementOptions(args, defaultPlacementOptions()) ?: run {
            MessageUtil.error(sender, "配置指定は 0, 1, 2, 3 と L/R を指定してください。例: /csm payload load <payload> 2 R")
            return true
        }
        val turns = (context.turns + placementOptions.extraTurns).floorMod(4)
        val placement = buildPlacement(columns, turns, placementOptions.side)
        val placementBounds = buildPlacementBounds(context, columns, placement)
        val pattern = BlockPattern(BlockTypes.STONE_BRICKS!!.defaultState)
        val undoSnapshot = captureUndoSnapshot(sender, context, columns, placement, blockCount)

        try {
            createEditSession(context.world, context.actor).use { editSession ->
                val weWorld = BukkitAdapter.adapt(context.world)
                for (column in columns) {
                    val (px, pz) = placedColumnPosition(column, placement)
                    val from = context.origin.add(px, column.yMin, pz)
                    val to = context.origin.add(px, column.yMin + column.height, pz)
                    editSession.setBlocks(CuboidRegion(weWorld, from, to) as Region, pattern)
                }
                Operations.complete(editSession.commit())
            }
        } catch (e: Exception) {
            MessageUtil.error(sender, "配置に失敗しました: ${e.message}")
            return true
        }

        val selectionApplied = try {
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
            "CitiesSkyMine payload を配置しました: ${columns.size} columns / $blockCount blocks / rotation $turns / side ${placementOptions.side.code}"
        )
        if (selectionApplied && placementBounds != null) {
            MessageUtil.info(
                sender,
                "配置範囲を選択しました: ${placementBounds.minX},${placementBounds.minY},${placementBounds.minZ} -> ${placementBounds.maxX},${placementBounds.maxY},${placementBounds.maxZ}"
            )
        }
        if (undoSnapshot != null) {
            rememberUndo(undoSnapshot)
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
            1 -> listOf("load", "load64", "undo", "help").filter { it.startsWith(args[0], ignoreCase = true) }
            2 -> if (args[0].equals("undo", ignoreCase = true)) {
                listOf("last").filter { it.startsWith(args[1], ignoreCase = true) }
            } else {
                emptyList()
            }
            3 -> if (args[0].equals("load", ignoreCase = true) || args[0].equals("load64", ignoreCase = true)) {
                listOf("0", "1", "2", "3", "L", "R", "0L", "0R", "1L", "1R", "2L", "2R", "3L", "3R")
                    .filter { it.startsWith(args[2], ignoreCase = true) }
            } else {
                emptyList()
            }
            4 -> if (args[0].equals("load", ignoreCase = true) || args[0].equals("load64", ignoreCase = true)) {
                if (parseExtraTurns(args[2]) != null) {
                    listOf("L", "R").filter { it.startsWith(args[3], ignoreCase = true) }
                } else if (parsePlacementSide(args[2]) != null) {
                    listOf("0", "1", "2", "3").filter { it.startsWith(args[3]) }
                } else {
                    emptyList()
                }
            } else {
                emptyList()
            }
            else -> emptyList()
        }
    }

    private fun showHelp(sender: CommandSender) {
        MessageUtil.header(sender, "CitiesSkyMine")
        MessageUtil.helpEntry(sender, "/csm payload load <payload>", "Base997/Base64 payloadを復元して配置")
        MessageUtil.helpEntry(sender, "/csm payload load64 <payload>", "Base64 payloadを復元して配置")
        MessageUtil.helpEntry(sender, "/csm payload load <payload> [0-3] [L|R]", "追加回転と左右方向を指定。省略時は設定値")
        MessageUtil.helpEntry(sender, "/csm payload undo", "同じ実行元の直前CSM配置を復元")
        MessageUtil.helpEntry(sender, "/csm payload undo last", "最後に保存されたCSM配置を復元")
    }

    private fun handleUndo(sender: CommandSender, args: Array<String>): Boolean {
        if (!sender.hasPermission("citiesskymine.payload")) {
            MessageUtil.error(sender, "このコマンドを使用する権限がありません。")
            return true
        }

        val snapshot = takeUndoSnapshot(sender, args.getOrNull(1)?.equals("last", ignoreCase = true) == true)
        if (snapshot == null) {
            MessageUtil.error(sender, "復元できるCSM配置がありません。")
            return true
        }

        val world = Bukkit.getWorld(snapshot.worldId)
        if (world == null) {
            MessageUtil.error(sender, "復元先ワールドが読み込まれていません: ${snapshot.worldName}")
            putUndoSnapshot(snapshot)
            return true
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
            return true
        }

        MessageUtil.success(sender, "CSM配置を復元しました: ${snapshot.blocks} blocks")
        return true
    }

    private fun placementContext(sender: CommandSender): PlacementContext? {
        return when (sender) {
            is Player -> {
                val loc = sender.location
                PlacementContext(
                    world = sender.world,
                    origin = BlockVector3.at(loc.blockX, loc.blockY, loc.blockZ),
                    turns = yawTurns(loc.yaw),
                    actor = sender
                )
            }
            is BlockCommandSender -> {
                val block = sender.block
                val loc = block.location
                PlacementContext(
                    world = block.world,
                    origin = BlockVector3.at(loc.blockX, loc.blockY + 1, loc.blockZ),
                    turns = blockTurns(block.blockData as? Directional),
                    actor = null
                )
            }
            else -> null
        }
    }

    private fun createEditSession(world: World, actor: Player?) =
        WorldEdit.getInstance().newEditSessionBuilder().apply {
            world(BukkitAdapter.adapt(world))
            if (actor != null) {
                actor(BukkitAdapter.adapt(actor))
            }
        }.build()

    private fun captureUndoSnapshot(
        sender: CommandSender,
        context: PlacementContext,
        columns: List<Column>,
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
            createdAt = System.currentTimeMillis()
        )
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

    private fun defaultPlacementOptions(): PlacementOptions {
        val extraTurns = plugin.config.getInt("csm.default-rotation", 2).floorMod(4)
        val side = parsePlacementSide(plugin.config.getString("csm.default-side")) ?: PlacementSide.RIGHT
        return PlacementOptions(extraTurns, side)
    }

    private fun parsePlacementOptions(args: Array<String>, defaults: PlacementOptions): PlacementOptions? {
        var extraTurns = defaults.extraTurns
        var side = defaults.side
        var hasRotation = false
        var hasSide = false

        if (args.size > 4) {
            return null
        }

        for (i in 2 until args.size) {
            val token = parsePlacementToken(args[i]) ?: return null
            if (token.extraTurns != null) {
                if (hasRotation) return null
                extraTurns = token.extraTurns
                hasRotation = true
            }
            if (token.side != null) {
                if (hasSide) return null
                side = token.side
                hasSide = true
            }
        }

        return PlacementOptions(extraTurns.floorMod(4), side)
    }

    private fun parsePlacementToken(raw: String?): PlacementToken? {
        if (raw == null) {
            return PlacementToken(null, null)
        }

        val token = raw.trim().uppercase()
        if (token.isEmpty()) {
            return null
        }

        val extraTurns = parseExtraTurns(token)
        if (extraTurns != null) {
            return PlacementToken(extraTurns, null)
        }

        val side = parsePlacementSide(token)
        if (side != null) {
            return PlacementToken(null, side)
        }

        if (token.length == 2) {
            val firstTurns = parseExtraTurns(token.substring(0, 1))
            val firstSide = parsePlacementSide(token.substring(0, 1))
            val secondTurns = parseExtraTurns(token.substring(1, 2))
            val secondSide = parsePlacementSide(token.substring(1, 2))
            if (firstTurns != null && secondSide != null) {
                return PlacementToken(firstTurns, secondSide)
            }
            if (firstSide != null && secondTurns != null) {
                return PlacementToken(secondTurns, firstSide)
            }
        }

        return null
    }

    private fun parseExtraTurns(raw: String?): Int? {
        if (raw == null) {
            return null
        }
        return when (raw) {
            "0", "1", "2", "3" -> raw.toInt()
            else -> null
        }
    }

    private fun parsePlacementSide(raw: String?): PlacementSide? {
        return when (raw?.trim()?.uppercase()) {
            "L", "LEFT" -> PlacementSide.LEFT
            "R", "RIGHT" -> PlacementSide.RIGHT
            else -> null
        }
    }

    private fun buildPlacement(columns: List<Column>, turns: Int, side: PlacementSide): PlacementPlan {
        val (frontX, frontZ) = rotate(0, 1, turns)
        val leftX = frontZ
        val leftZ = -frontX
        var maxFront: Int? = null
        var maxLeft: Int? = null
        var minLeft: Int? = null

        for (column in columns) {
            val (rx, rz) = rotate(column.x, column.z, turns)
            val front = rx * frontX + rz * frontZ
            val left = rx * leftX + rz * leftZ
            if (maxFront == null || front > maxFront) {
                maxFront = front
            }
            if (maxLeft == null || left > maxLeft) {
                maxLeft = left
            }
            if (minLeft == null || left < minLeft) {
                minLeft = left
            }
        }

        val anchorFront = (maxFront ?: 0) + 1
        val anchorLeft = when (side) {
            PlacementSide.LEFT -> minLeft ?: 0
            PlacementSide.RIGHT -> maxLeft ?: 0
        }
        return PlacementPlan(
            turns = turns.floorMod(4),
            anchorX = frontX * anchorFront + leftX * anchorLeft,
            anchorZ = frontZ * anchorFront + leftZ * anchorLeft
        )
    }

    private fun placedColumnPosition(column: Column, placement: PlacementPlan): Pair<Int, Int> {
        val (rx, rz) = rotate(column.x, column.z, placement.turns)
        return (rx - placement.anchorX) to (rz - placement.anchorZ)
    }

    private fun buildPlacementBounds(
        context: PlacementContext,
        columns: List<Column>,
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
        columns.sortWith(compareBy<Column> { it.x }.thenBy { it.z }.thenBy { it.yMin }.thenBy { it.height })
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

        val expectedLength = body.substring(0, sep).toIntOrNull()
            ?: throw IllegalArgumentException("Base997 length が無効です")
        if (expectedLength < 0) {
            throw IllegalArgumentException("Base997 length が負数です")
        }

        val digits = body.substring(sep + 1)
        var value = BigInteger.ZERO
        val base = BigInteger.valueOf(base997Alphabet.length.toLong())
        for (ch in digits) {
            val idx = base997Index[ch]
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
        val ranges = listOf(
            0x0021..0x007E,
            0x00A1..0x02FF,
            0x0370..0x03FF,
            0x1E00..0x1EFF
        )
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
        val turns: Int,
        val actor: Player?
    )

    private data class Column(
        val x: Int,
        val z: Int,
        val yMin: Int,
        val height: Int
    )

    private data class PlacementPlan(
        val turns: Int,
        val anchorX: Int,
        val anchorZ: Int
    )

    private data class PlacementBounds(
        val minX: Int,
        val minY: Int,
        val minZ: Int,
        val maxX: Int,
        val maxY: Int,
        val maxZ: Int
    )

    private data class PlacementOptions(
        val extraTurns: Int,
        val side: PlacementSide
    )

    private data class PlacementToken(
        val extraTurns: Int?,
        val side: PlacementSide?
    )

    private enum class PlacementSide(val code: String) {
        LEFT("L"),
        RIGHT("R")
    }

    private data class UndoSnapshot(
        val key: String,
        val worldId: UUID,
        val worldName: String,
        val columns: List<UndoColumn>,
        val blocks: Long,
        val createdAt: Long
    )

    private data class UndoColumn(
        val x: Int,
        val z: Int,
        val runs: List<UndoRun>
    )

    private data class UndoRun(
        val yMin: Int,
        val length: Int,
        val block: BaseBlock
    )

    private class ByteReader(private val data: ByteArray) {
        private var pos = 0

        fun readMagic(): String {
            if (data.size < 4 ||
                data[0] != 'C'.code.toByte() ||
                data[1] != 'M'.code.toByte() ||
                data[3] != 1.toByte()
            ) {
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
