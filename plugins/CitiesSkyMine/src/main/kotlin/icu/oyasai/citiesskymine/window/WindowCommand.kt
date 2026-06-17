package icu.oyasai.citiesskymine.window

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import java.util.LinkedHashMap
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.TrapDoor
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class WindowCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.WINDOW)) return true

    if (args.getOrNull(0)?.equals("undo", ignoreCase = true) == true) {
      MessageUtil.info(sender, "窓生成の取り消しは FAWE の //undo を使ってください。")
      return true
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

    val materials = parsed.materials
    saveWindowDefaults(sender, width, height, materials)

    val facing = yawFace(sender.location.yaw)
    val lateralPositive = lateralPositiveFace(facing)
    val base = sender.location.block.getRelative(facing)
    val leftOffset = -(width / 2)
    val rightOffset = leftOffset + width - 1
    val windowTargets = targetBlocks(base, lateralPositive, facing, leftOffset, rightOffset, height)
    val windowTargetKeys = windowTargets.mapTo(HashSet()) { blockKey(it) }
    val fillMaterial = windowFillMaterial()
    val fillTargets =
        if (plugin.config.getBoolean("window.fill-air-around-glass", true)) {
          fillTargets(
              base,
              lateralPositive,
              facing,
              leftOffset,
              rightOffset,
              height,
              windowTargetKeys,
          )
        } else {
          emptyList()
        }

    val operationBlocks = (windowTargets.size + fillTargets.size).toLong()
    val maxBlocks = plugin.config.getLong("limits.max-blocks-window", 512L)
    if (maxBlocks > 0 && operationBlocks > maxBlocks) {
      MessageUtil.error(sender, "生成ブロック数が上限 ($maxBlocks) を超えています: $operationBlocks")
      return true
    }

    val placements = ArrayList<WindowPlacement>()
    for (y in 0 until height) {
      for (offset in leftOffset..rightOffset) {
        val frameFace = trapdoorFace(offset, leftOffset, rightOffset, facing, lateralPositive)
        placements.add(
            WindowPlacement(
                blockAt(base, lateralPositive, offset, facing, 0, y),
                frameData(materials.frame, frameFace),
            )
        )
        placements.add(
            WindowPlacement(
                blockAt(base, lateralPositive, offset, facing, 1, y),
                materials.glass.createBlockData(),
            )
        )
        placements.add(
            WindowPlacement(
                blockAt(base, lateralPositive, offset, facing, 2, y),
                materials.backing.createBlockData(),
            )
        )
      }
    }
    val filledBlocks = ArrayList<Block>()
    for (block in fillTargets) {
      if (!block.type.isAir) continue
      placements.add(WindowPlacement(block, fillMaterial.createBlockData()))
      filledBlocks.add(block)
    }

    var faweUndoRecorded = false
    try {
      val result =
          CsmEditSession.run(sender, plugin.logger) { editSession ->
            for (placement in placements) {
              editSession.setBlock(
                  BlockVector3.at(placement.block.x, placement.block.y, placement.block.z),
                  BukkitAdapter.adapt(placement.data),
              )
            }
            true
          }
      faweUndoRecorded = result.undoRecorded
    } catch (e: Exception) {
      MessageUtil.error(sender, "窓生成に失敗しました: ${e.message}")
      return true
    }

    val selectionApplied =
        if (plugin.config.getBoolean("window.select-after-fill", true)) {
          selectStackRegion(
              sender,
              base,
              lateralPositive,
              facing,
              leftOffset,
              rightOffset,
              height,
              includeBelow = filledBlocks.any { it.y < base.y },
              includeAbove = filledBlocks.any { it.y >= base.y + height },
          )
        } else {
          false
        }

    MessageUtil.success(
        sender,
        "窓を生成しました: ${width}x$height / frame=${materials.frame.key.key} / glass=${materials.glass.key.key} / backing=${materials.backing.key.key} / fill=${filledBlocks.size}",
    )
    if (faweUndoRecorded) {
      MessageUtil.info(sender, "FAWE の //undo でこの窓生成を取り消せます。")
    } else {
      MessageUtil.warn(sender, "窓生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
    if (selectionApplied) {
      MessageUtil.info(sender, "横方向 stack 用に窓範囲を選択しました。")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    val materialSuggestions =
        listOf(
            "IRON_TRAPDOOR",
            "OAK_TRAPDOOR",
            "DARK_OAK_TRAPDOOR",
            "WHITE_STAINED_GLASS",
            "GLASS",
            "DRIED_KELP_BLOCK",
            "BLACK_CONCRETE",
            "SMOOTH_QUARTZ",
        )

    return when (args.size) {
      1 ->
          (listOf("2", "3", "4", "5", "6") + materialSuggestions).filter {
            it.startsWith(args[0], ignoreCase = true)
          }
      2 ->
          if (args[0].toIntOrNull() != null) {
            listOf("3", "4", "5", "6", "8").filter { it.startsWith(args[1]) }
          } else {
            materialSuggestions.filter { it.startsWith(args[1], ignoreCase = true) }
          }
      3,
      4,
      5 -> materialSuggestions.filter { it.startsWith(args.last(), ignoreCase = true) }
      else -> emptyList()
    }
  }

  private fun parseArgs(
      sender: CommandSender,
      args: Array<String>,
      defaults: WindowDefaults,
  ): ParsedWindowArgs? {
    var index = 0
    val width = args.getOrNull(index)?.toIntOrNull()?.also { index++ } ?: defaults.width
    val height = args.getOrNull(index)?.toIntOrNull()?.also { index++ } ?: defaults.height

    val frameRaw = args.getOrNull(index++)
    val glassRaw = args.getOrNull(index++)
    val backingRaw = args.getOrNull(index++)

    val frame = materialFromArg(frameRaw, defaults.frame) ?: return materialError(sender, frameRaw)
    val glass = materialFromArg(glassRaw, defaults.glass) ?: return materialError(sender, glassRaw)
    val backing =
        materialFromArg(backingRaw, defaults.backing) ?: return materialError(sender, backingRaw)

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
    val material =
        if (raw != null) {
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

  private fun windowFillMaterial(): Material =
      materialFromConfig("window.fill", Material.SMOOTH_QUARTZ).takeIf { it.isBlock && !it.isAir }
          ?: Material.SMOOTH_QUARTZ

  private fun windowDefaults(player: Player): WindowDefaults {
    val store = plugin.playerDataStore
    return WindowDefaults(
        width =
            store.getInt(player, "window.width") ?: plugin.config.getInt("window.default-width", 2),
        height =
            store.getInt(player, "window.height")
                ?: plugin.config.getInt("window.default-height", 3),
        frame =
            materialFromPlayerData(player, "window.frame")
                ?: materialFromConfig("window.frame", Material.IRON_TRAPDOOR),
        glass =
            materialFromPlayerData(player, "window.glass")
                ?: materialFromConfig("window.glass", Material.WHITE_STAINED_GLASS),
        backing =
            materialFromPlayerData(player, "window.backing")
                ?: materialFromConfig("window.backing", Material.DRIED_KELP_BLOCK),
    )
  }

  private fun saveWindowDefaults(
      player: Player,
      width: Int,
      height: Int,
      materials: WindowMaterials,
  ) {
    plugin.playerDataStore.setMany(
        player,
        mapOf(
            "window.width" to width,
            "window.height" to height,
            "window.frame" to materials.frame.name,
            "window.glass" to materials.glass.name,
            "window.backing" to materials.backing.name,
        ),
    )
  }

  private fun materialFromPlayerData(player: Player, path: String): Material? =
      plugin.playerDataStore
          .getString(player, path)
          ?.let { Material.matchMaterial(it) }
          ?.takeIf { it.isBlock }

  private fun frameData(material: Material, facing: BlockFace): BlockData {
    val data = material.createBlockData()
    if (data is TrapDoor) {
      data.facing = facing
      data.isOpen = true
      data.half = Bisected.Half.BOTTOM
    }
    return data
  }

  private fun targetBlocks(
      base: Block,
      lateralPositive: BlockFace,
      front: BlockFace,
      leftOffset: Int,
      rightOffset: Int,
      height: Int,
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

  private fun fillTargets(
      base: Block,
      lateralPositive: BlockFace,
      front: BlockFace,
      leftOffset: Int,
      rightOffset: Int,
      height: Int,
      occupied: Set<String>,
  ): List<Block> {
    val byLocation = LinkedHashMap<String, Block>()
    for (y in 0 until height) {
      for (offset in leftOffset..rightOffset) {
        val glassBlock = blockAt(base, lateralPositive, offset, front, 1, y)
        val candidates =
            listOf(
                glassBlock.getRelative(BlockFace.UP),
                glassBlock.getRelative(BlockFace.DOWN),
                glassBlock.getRelative(lateralPositive),
                glassBlock.getRelative(lateralPositive.oppositeFace),
            )
        for (candidate in candidates) {
          val key = blockKey(candidate)
          if (key in occupied || !candidate.type.isAir) continue
          byLocation[key] = candidate
        }
      }
    }
    return byLocation.values.toList()
  }

  private fun selectStackRegion(
      player: Player,
      base: Block,
      lateralPositive: BlockFace,
      front: BlockFace,
      leftOffset: Int,
      rightOffset: Int,
      height: Int,
      includeBelow: Boolean,
      includeAbove: Boolean,
  ): Boolean {
    val startY = if (includeBelow) -1 else 0
    val endY = if (includeAbove) height else height - 1
    val blocks = ArrayList<Block>()
    for (y in startY..endY) {
      for (offset in leftOffset..rightOffset) {
        for (depth in 0..2) {
          blocks.add(blockAt(base, lateralPositive, offset, front, depth, y))
        }
      }
    }
    if (blocks.isEmpty()) return false

    var minX = Int.MAX_VALUE
    var minY = Int.MAX_VALUE
    var minZ = Int.MAX_VALUE
    var maxX = Int.MIN_VALUE
    var maxY = Int.MIN_VALUE
    var maxZ = Int.MIN_VALUE
    for (block in blocks) {
      minX = minOf(minX, block.x)
      minY = minOf(minY, block.y)
      minZ = minOf(minZ, block.z)
      maxX = maxOf(maxX, block.x)
      maxY = maxOf(maxY, block.y)
      maxZ = maxOf(maxZ, block.z)
    }

    return try {
      val actor = BukkitAdapter.adapt(player)
      val world = BukkitAdapter.adapt(player.world)
      val selector =
          CuboidRegionSelector(
              world,
              BlockVector3.at(minX, minY, minZ),
              BlockVector3.at(maxX, maxY, maxZ),
          )
      val session = WorldEdit.getInstance().sessionManager.get(actor)
      session.setRegionSelector(world, selector)
      session.dispatchCUISelection(actor)
      true
    } catch (e: Exception) {
      MessageUtil.warn(player, "窓範囲の選択に失敗しました: ${e.message}")
      false
    }
  }

  private fun blockKey(block: Block): String = "${block.world.uid}:${block.x}:${block.y}:${block.z}"

  private fun blockAt(
      base: Block,
      lateralPositive: BlockFace,
      lateralOffset: Int,
      front: BlockFace,
      depth: Int,
      y: Int,
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
      lateralPositive: BlockFace,
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
      val materials: WindowMaterials,
  )

  private data class WindowMaterials(
      val frame: Material,
      val glass: Material,
      val backing: Material,
  )

  private data class WindowDefaults(
      val width: Int,
      val height: Int,
      val frame: Material,
      val glass: Material,
      val backing: Material,
  )

  private data class WindowPlacement(val block: Block, val data: BlockData)
}
