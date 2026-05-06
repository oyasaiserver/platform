package icu.oyasai.citiesskymine.window

import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.util.MessageUtil
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.BlockState
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.TrapDoor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player
import java.util.LinkedHashMap
import java.util.UUID
import kotlin.math.roundToInt

class WindowCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

    private val undoSnapshots = object : LinkedHashMap<UUID, WindowUndoSnapshot>(8, 0.75f, true) {}
    private var lastUndoKey: UUID? = null

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<String>): Boolean {
        if (sender !is Player) {
            MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
            return true
        }
        if (!sender.hasPermission("citiesskymine.window")) {
            MessageUtil.error(sender, "このコマンドを使用する権限がありません。")
            return true
        }

        if (args.getOrNull(0)?.equals("undo", ignoreCase = true) == true) {
            return handleUndo(sender, args.getOrNull(1)?.equals("last", ignoreCase = true) == true)
        }

        val defaults = windowDefaults(sender)
        val parsed = parseArgs(sender, args, defaults) ?: return true
        val width = parsed.width
        val height = parsed.height

        if (width < 1 || height < 1) {
            MessageUtil.error(sender, "幅と高さは1以上で指定してください。")
            return true
        }
        if (width > 16 || height > 16) {
            MessageUtil.error(sender, "幅と高さは16以下で指定してください。")
            return true
        }

        val maxBlocks = plugin.config.getInt("limits.max-blocks-window", 512)
        val operationBlocks = width * height * 3
        if (maxBlocks > 0 && operationBlocks > maxBlocks) {
            MessageUtil.error(sender, "生成ブロック数が上限 ($maxBlocks) を超えています: $operationBlocks")
            return true
        }

        val materials = parsed.materials
        saveWindowDefaults(sender, width, height, materials)

        val facing = yawFace(sender.location.yaw)
        val lateralPositive = lateralPositiveFace(facing)
        val base = sender.location.block.getRelative(facing)
        val leftOffset = -(width / 2)
        val rightOffset = leftOffset + width - 1
        val targets = targetBlocks(base, lateralPositive, facing, leftOffset, rightOffset, height)
        rememberUndo(sender.uniqueId, WindowUndoSnapshot(sender.uniqueId, targets.map { it.state }))

        for (y in 0 until height) {
            for (offset in leftOffset..rightOffset) {
                val frameFace = trapdoorFace(offset, leftOffset, rightOffset, facing, lateralPositive)
                placeFrame(blockAt(base, lateralPositive, offset, facing, 0, y), materials.frame, frameFace)
                blockAt(base, lateralPositive, offset, facing, 1, y).setType(materials.glass, false)
                blockAt(base, lateralPositive, offset, facing, 2, y).setType(materials.backing, false)
            }
        }

        MessageUtil.success(
            sender,
            "窓を生成しました: ${width}x$height / frame=${materials.frame.key.key} / glass=${materials.glass.key.key} / backing=${materials.backing.key.key} / /csm window undo で復元できます"
        )
        return true
    }

    override fun onTabComplete(
        sender: CommandSender,
        command: Command,
        alias: String,
        args: Array<String>
    ): List<String> {
        if (args.getOrNull(0)?.equals("undo", ignoreCase = true) == true) {
            return when (args.size) {
                2 -> listOf("last").filter { it.startsWith(args[1], ignoreCase = true) }
                else -> emptyList()
            }
        }

        val materialSuggestions = listOf(
            "IRON_TRAPDOOR",
            "OAK_TRAPDOOR",
            "DARK_OAK_TRAPDOOR",
            "WHITE_STAINED_GLASS",
            "GLASS",
            "DRIED_KELP_BLOCK",
            "BLACK_CONCRETE",
            "SMOOTH_QUARTZ"
        )

        return when (args.size) {
            1 -> (listOf("undo", "2", "3", "4", "5", "6") + materialSuggestions)
                .filter { it.startsWith(args[0], ignoreCase = true) }
            2 -> if (args[0].toIntOrNull() != null) {
                listOf("3", "4", "5", "6", "8").filter { it.startsWith(args[1]) }
            } else {
                materialSuggestions.filter { it.startsWith(args[1], ignoreCase = true) }
            }
            3, 4, 5 -> materialSuggestions.filter { it.startsWith(args.last(), ignoreCase = true) }
            else -> emptyList()
        }
    }

    private fun parseArgs(sender: CommandSender, args: Array<String>, defaults: WindowDefaults): ParsedWindowArgs? {
        var index = 0
        val width = args.getOrNull(index)?.toIntOrNull()?.also { index++ } ?: defaults.width
        val height = args.getOrNull(index)?.toIntOrNull()?.also { index++ } ?: defaults.height

        val frameRaw = args.getOrNull(index++)
        val glassRaw = args.getOrNull(index++)
        val backingRaw = args.getOrNull(index++)

        val frame = materialFromArg(frameRaw, defaults.frame) ?: return materialError(sender, frameRaw)
        val glass = materialFromArg(glassRaw, defaults.glass) ?: return materialError(sender, glassRaw)
        val backing = materialFromArg(backingRaw, defaults.backing) ?: return materialError(sender, backingRaw)

        if (index < args.size) {
            MessageUtil.error(sender, "使い方: /csm window [width] [height] [frame] [glass] [backing]")
            return null
        }
        return ParsedWindowArgs(width, height, WindowMaterials(frame, glass, backing))
    }

    private fun materialError(sender: CommandSender, raw: String?): ParsedWindowArgs? {
        MessageUtil.error(sender, "ブロック素材が無効です: ${raw ?: "(未指定)"}")
        return null
    }

    private fun materialFromArg(raw: String?, fallback: Material): Material? {
        val material = if (raw != null) {
            Material.matchMaterial(raw) ?: return null
        } else {
            fallback
        }
        return if (material.isBlock) {
            material
        } else {
            null
        }
    }

    private fun materialFromConfig(path: String, fallback: Material): Material {
        val configured = plugin.config.getString(path)
        return configured?.let { Material.matchMaterial(it) } ?: fallback
    }

    private fun windowDefaults(player: Player): WindowDefaults {
        val store = plugin.playerDataStore
        return WindowDefaults(
            width = store.getInt(player, "window.width") ?: plugin.config.getInt("window.default-width", 2),
            height = store.getInt(player, "window.height") ?: plugin.config.getInt("window.default-height", 3),
            frame = materialFromPlayerData(player, "window.frame")
                ?: materialFromConfig("window.frame", Material.IRON_TRAPDOOR),
            glass = materialFromPlayerData(player, "window.glass")
                ?: materialFromConfig("window.glass", Material.WHITE_STAINED_GLASS),
            backing = materialFromPlayerData(player, "window.backing")
                ?: materialFromConfig("window.backing", Material.DRIED_KELP_BLOCK)
        )
    }

    private fun saveWindowDefaults(player: Player, width: Int, height: Int, materials: WindowMaterials) {
        plugin.playerDataStore.setMany(
            player,
            mapOf(
                "window.width" to width,
                "window.height" to height,
                "window.frame" to materials.frame.name,
                "window.glass" to materials.glass.name,
                "window.backing" to materials.backing.name
            )
        )
    }

    private fun materialFromPlayerData(player: Player, path: String): Material? =
        plugin.playerDataStore.getString(player, path)?.let { Material.matchMaterial(it) }?.takeIf { it.isBlock }

    private fun placeFrame(block: Block, material: Material, facing: BlockFace) {
        block.setType(material, false)
        val data = material.createBlockData()
        if (data is TrapDoor) {
            data.facing = facing
            data.isOpen = true
            data.half = Bisected.Half.BOTTOM
            block.setBlockData(data, false)
        }
    }

    private fun targetBlocks(
        base: Block,
        lateralPositive: BlockFace,
        front: BlockFace,
        leftOffset: Int,
        rightOffset: Int,
        height: Int
    ): List<Block> {
        val byLocation = LinkedHashMap<String, Block>()
        for (y in 0 until height) {
            for (offset in leftOffset..rightOffset) {
                for (depth in 0..2) {
                    val block = blockAt(base, lateralPositive, offset, front, depth, y)
                    val key = "${block.world.uid}:${block.x}:${block.y}:${block.z}"
                    byLocation[key] = block
                }
            }
        }
        return byLocation.values.toList()
    }

    private fun handleUndo(player: Player, useLast: Boolean): Boolean {
        val snapshot = takeUndo(if (useLast) lastUndoKey else player.uniqueId)
        if (snapshot == null) {
            MessageUtil.error(player, "復元できる窓生成履歴がありません。")
            return true
        }

        for (state in snapshot.states) {
            state.update(true, false)
        }
        MessageUtil.success(player, "窓生成を復元しました: ${snapshot.states.size} blocks")
        return true
    }

    private fun rememberUndo(key: UUID, snapshot: WindowUndoSnapshot) {
        synchronized(undoSnapshots) {
            undoSnapshots[key] = snapshot
            lastUndoKey = key
            trimUndoSnapshots()
        }
    }

    private fun takeUndo(key: UUID?): WindowUndoSnapshot? {
        synchronized(undoSnapshots) {
            val snapshot = key?.let { undoSnapshots.remove(it) } ?: return null
            if (lastUndoKey == key) {
                lastUndoKey = undoSnapshots.entries.lastOrNull()?.key
            }
            return snapshot
        }
    }

    private fun trimUndoSnapshots() {
        val maxSnapshots = plugin.config.getInt("limits.max-undo-snapshots-window", 8)
        if (maxSnapshots <= 0) {
            return
        }
        while (undoSnapshots.size > maxSnapshots) {
            val first = undoSnapshots.entries.firstOrNull()?.key ?: break
            undoSnapshots.remove(first)
            if (lastUndoKey == first) {
                lastUndoKey = undoSnapshots.entries.lastOrNull()?.key
            }
        }
    }

    private fun blockAt(
        base: Block,
        lateralPositive: BlockFace,
        lateralOffset: Int,
        front: BlockFace,
        depth: Int,
        y: Int
    ): Block {
        var block = base.getRelative(BlockFace.UP, y).getRelative(front, depth)
        val steps = kotlin.math.abs(lateralOffset)
        if (steps > 0) {
            val lateralFace = if (lateralOffset >= 0) lateralPositive else lateralPositive.oppositeFace
            block = block.getRelative(lateralFace, steps)
        }
        return block
    }

    private fun trapdoorFace(
        offset: Int,
        leftOffset: Int,
        rightOffset: Int,
        front: BlockFace,
        lateralPositive: BlockFace
    ): BlockFace {
        if (leftOffset == rightOffset) {
            return front
        }
        val midpoint = (leftOffset + rightOffset) / 2.0
        return if (offset <= midpoint) lateralPositive else lateralPositive.oppositeFace
    }

    private fun yawFace(yaw: Float): BlockFace {
        return when (yawToQuadrant(yaw)) {
            1 -> BlockFace.WEST
            2 -> BlockFace.NORTH
            3 -> BlockFace.EAST
            else -> BlockFace.SOUTH
        }
    }

    private fun yawToQuadrant(yaw: Float): Int {
        return Math.floorMod((yaw / 90.0f).roundToInt(), 4)
    }

    private fun lateralPositiveFace(face: BlockFace): BlockFace {
        return when (face) {
            BlockFace.NORTH -> BlockFace.WEST
            BlockFace.EAST -> BlockFace.NORTH
            BlockFace.SOUTH -> BlockFace.EAST
            BlockFace.WEST -> BlockFace.SOUTH
            else -> BlockFace.EAST
        }
    }

    private data class ParsedWindowArgs(
        val width: Int,
        val height: Int,
        val materials: WindowMaterials
    )

    private data class WindowMaterials(
        val frame: Material,
        val glass: Material,
        val backing: Material
    )

    private data class WindowDefaults(
        val width: Int,
        val height: Int,
        val frame: Material,
        val glass: Material,
        val backing: Material
    )

    private data class WindowUndoSnapshot(
        val playerId: UUID,
        val states: List<BlockState>
    )
}
