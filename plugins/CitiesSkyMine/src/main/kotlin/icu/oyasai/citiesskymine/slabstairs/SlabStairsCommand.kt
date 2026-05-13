package icu.oyasai.citiesskymine.slabstairs

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.type.Slab
import org.bukkit.block.data.type.Stairs
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class SlabStairsCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.SLAB_STAIRS)) return true

    val sub = args.getOrNull(0)?.lowercase()
    when (sub) {
      "help" -> {
        showHelp(sender, label)
        return true
      }
      "undo" -> {
        MessageUtil.info(sender, "SlabStairs の取り消しは FAWE の //undo を使ってください。")
        return true
      }
    }

    val materialArgs = if (sub == "build") args.drop(1).toTypedArray() else args
    build(sender, materialArgs)
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args.size == 1) {
      return (listOf("build", "help") + slabSuggestions(args[0])).filter {
        it.startsWith(args[0], ignoreCase = true)
      }
    }

    val materialIndex =
        if (args[0].equals("build", ignoreCase = true)) args.size - 2 else args.size - 1
    val prefix = args.last()
    return when (materialIndex) {
      0 -> slabSuggestions(prefix)
      1 -> stairSuggestions(prefix)
      2 -> fullBlockSuggestions(prefix)
      else -> emptyList()
    }
  }

  private fun build(player: Player, args: Array<String>) {
    val materials = parseMaterials(player, args) ?: return
    val selection = selectedRamp(player) ?: return
    val plan =
        try {
          buildPlan(player.world, selection, materials)
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(player, e.message ?: "SlabStairs の生成計算に失敗しました。")
          return
        }

    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-slab-stairs",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L))
    if (maxBlocks > 0 && plan.placements.size > maxBlocks) {
      MessageUtil.error(player, "生成ブロック数が上限 ($maxBlocks) を超えています: ${plan.placements.size}")
      return
    }

    var faweUndoRecorded = false
    try {
      val result =
          CsmEditSession.run(player, plugin.logger) { editSession ->
            for (placement in plan.placements) {
              editSession.setBlock(
                  BlockVector3.at(placement.x, placement.y, placement.z),
                  BukkitAdapter.adapt(placement.data))
            }
            true
          }
      faweUndoRecorded = result.undoRecorded
    } catch (e: Exception) {
      MessageUtil.error(player, "SlabStairs の生成に失敗しました: ${e.message}")
      return
    }

    if (faweUndoRecorded) {
      MessageUtil.info(player, "FAWE の //undo でこの生成を取り消せます。")
    } else {
      MessageUtil.warn(player, "生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }

    val slopeText =
        if (plan.verticalBlocks == 0) {
          "flat"
        } else {
          "1:${"%.2f".format(plan.horizontalSteps.toDouble() / abs(plan.verticalBlocks).toDouble())}"
        }
    MessageUtil.success(
        player,
        "SlabStairs を生成しました: ${plan.columns} columns / ${plan.placements.size} blocks / slab=${plan.slabBlocks} / stairs=${plan.stairBlocks} / full=${plan.fullBlocks} / slope=$slopeText")
    if (plan.steep) {
      MessageUtil.info(player, "45度以上の急勾配として full block の支えを含めました。")
    }
  }

  private fun selectedRamp(player: Player): RampSelection? {
    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(player.world)
    val session = WorldEdit.getInstance().sessionManager.get(actor)
    val selector = session.getRegionSelector(weWorld)
    val region =
        try {
          selector.getRegion()
        } catch (_: IncompleteRegionException) {
          MessageUtil.error(player, "WorldEdit で範囲を2点選択してから実行してください。")
          return null
        }
    val cuboid =
        region as? CuboidRegion
            ?: run {
              MessageUtil.error(player, "SlabStairs は cuboid 選択にだけ対応しています。")
              return null
            }
    val pos1 = cuboid.pos1
    val pos2 = cuboid.pos2
    if (pos1.x() == pos2.x() && pos1.z() == pos2.z()) {
      MessageUtil.error(player, "ポイント1からポイント2までに水平距離がありません。")
      return null
    }
    return RampSelection(pos1, pos2, cuboid.minimumPoint, cuboid.maximumPoint)
  }

  private fun buildPlan(
      world: World,
      selection: RampSelection,
      materials: SlabStairsMaterials
  ): SlabStairsBuildPlan {
    val dx = selection.pos2.x() - selection.pos1.x()
    val dz = selection.pos2.z() - selection.pos1.z()
    val dy = selection.pos2.y() - selection.pos1.y()
    val horizontalSteps = max(abs(dx), abs(dz))
    require(horizontalSteps > 0) { "ポイント1からポイント2までに水平距離がありません。" }

    val halfRise = dy * 2
    val halfAt = IntArray(horizontalSteps + 1)
    for (index in halfAt.indices) {
      halfAt[index] =
          selection.pos1.y() * 2 +
              (halfRise.toDouble() * index.toDouble() / horizontalSteps).roundToInt()
    }

    val minWorldY = world.minHeight
    val maxWorldY = world.maxHeight
    val lowY = minOf(selection.pos1.y(), selection.pos2.y())
    val steep = abs(halfRise) >= horizontalSteps * 2
    val stairFacing = stairFacing(dx, dz, dy)
    val fullData = materials.full.createBlockData()
    val placements = LinkedHashMap<BlockKey, Placement>()
    var slabBlocks = 0
    var stairBlocks = 0
    var fullBlocks = 0
    var columns = 0

    fun addPlacement(x: Int, y: Int, z: Int, data: BlockData, kind: TopKind?) {
      require(y >= minWorldY && y < maxWorldY) { "生成先Yがワールド範囲外です: $y" }
      val key = BlockKey(x, y, z)
      if (placements.put(key, Placement(x, y, z, data)) == null) {
        when (kind) {
          TopKind.SLAB -> slabBlocks++
          TopKind.STAIR -> stairBlocks++
          null -> fullBlocks++
        }
      }
    }

    for (x in selection.min.x()..selection.max.x()) {
      for (z in selection.min.z()..selection.max.z()) {
        columns++
        val index = projectedIndex(selection.pos1, dx, dz, horizontalSteps, x, z)
        val half = halfAt[index]
        val topY = Math.floorDiv(half, 2)
        if (steep) {
          for (supportY in lowY until topY) {
            addPlacement(x, supportY, z, fullData, kind = null)
          }
        }

        val topKind = topKind(index, halfAt)
        val data =
            when (topKind) {
              TopKind.STAIR -> stairData(materials.stair, stairFacing)
              TopKind.SLAB -> slabData(materials.slab, half)
            }
        addPlacement(x, topY, z, data, topKind)
      }
    }

    return SlabStairsBuildPlan(
        placements = placements.values.toList(),
        columns = columns,
        horizontalSteps = horizontalSteps,
        verticalBlocks = dy,
        steep = steep,
        slabBlocks = slabBlocks,
        stairBlocks = stairBlocks,
        fullBlocks = fullBlocks)
  }

  private fun projectedIndex(
      pos1: BlockVector3,
      dx: Int,
      dz: Int,
      horizontalSteps: Int,
      x: Int,
      z: Int
  ): Int {
    val denominator = dx.toDouble() * dx.toDouble() + dz.toDouble() * dz.toDouble()
    val progress =
        ((x - pos1.x()).toDouble() * dx.toDouble() + (z - pos1.z()).toDouble() * dz.toDouble()) /
            denominator
    return (progress.coerceIn(0.0, 1.0) * horizontalSteps.toDouble())
        .roundToInt()
        .coerceIn(0, horizontalSteps)
  }

  private fun topKind(index: Int, halfAt: IntArray): TopKind {
    val forward =
        if (index < halfAt.lastIndex) abs(halfAt[index + 1] - halfAt[index]) else Int.MIN_VALUE
    val backward = if (index > 0) abs(halfAt[index] - halfAt[index - 1]) else Int.MIN_VALUE
    return if (max(forward, backward) >= 2) TopKind.STAIR else TopKind.SLAB
  }

  private fun slabData(material: Material, half: Int): BlockData {
    val data = material.createBlockData() as Slab
    data.type = if (Math.floorMod(half, 2) == 0) Slab.Type.BOTTOM else Slab.Type.TOP
    return data
  }

  private fun stairData(material: Material, facing: BlockFace): BlockData {
    val data = material.createBlockData() as Stairs
    data.facing = facing
    data.half = Bisected.Half.BOTTOM
    return data
  }

  private fun stairFacing(dx: Int, dz: Int, dy: Int): BlockFace {
    val along =
        if (abs(dx) >= abs(dz)) {
          if (dx >= 0) BlockFace.EAST else BlockFace.WEST
        } else {
          if (dz >= 0) BlockFace.SOUTH else BlockFace.NORTH
        }
    return if (dy >= 0) along else along.oppositeFace
  }

  private fun parseMaterials(sender: CommandSender, args: Array<String>): SlabStairsMaterials? {
    if (args.size > 3) {
      MessageUtil.error(sender, "使い方: /csm slabstairs [build] [slab] [stair] [full]")
      return null
    }

    val slab =
        materialFromArg(args.getOrNull(0), "slab-stairs.slab", Material.STONE_BRICK_SLAB)
            ?: return materialError(sender, args.getOrNull(0))
    val stair =
        materialFromArg(args.getOrNull(1), "slab-stairs.stair", Material.STONE_BRICK_STAIRS)
            ?: return materialError(sender, args.getOrNull(1))
    val full =
        materialFromArg(args.getOrNull(2), "slab-stairs.full", Material.STONE_BRICKS)
            ?: return materialError(sender, args.getOrNull(2))

    if (slab.createBlockData() !is Slab) {
      MessageUtil.error(sender, "slab にはハーフブロック素材を指定してください: ${slab.key.key}")
      return null
    }
    if (stair.createBlockData() !is Stairs) {
      MessageUtil.error(sender, "stair には階段ブロック素材を指定してください: ${stair.key.key}")
      return null
    }
    val fullData = full.createBlockData()
    if (!full.isBlock || full.isAir || fullData is Slab || fullData is Stairs) {
      MessageUtil.error(sender, "full には通常のフルブロック素材を指定してください: ${full.key.key}")
      return null
    }

    return SlabStairsMaterials(slab, stair, full)
  }

  private fun materialFromArg(raw: String?, configPath: String, fallback: Material): Material? {
    val configured = plugin.config.getString(configPath)
    val value = raw ?: configured
    return if (value == null) fallback
    else Material.matchMaterial(value)?.takeIf { it.isBlock && !it.isAir }
  }

  private fun materialError(sender: CommandSender, raw: String?): SlabStairsMaterials? {
    MessageUtil.error(sender, "ブロック素材が無効です: ${raw ?: "(未指定)"}")
    return null
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "SlabStairs")
    MessageUtil.helpEntry(sender, "/$label", "WorldEdit 選択範囲に SlabStairs を生成")
    MessageUtil.helpEntry(sender, "/$label build [slab] [stair] [full]", "素材を指定して生成")
    MessageUtil.helpEntry(sender, "//undo", "直前の SlabStairs 生成を FAWE で取り消し")
    MessageUtil.send(
        sender,
        "<gray>ポイント1からポイント2方向に高さを補間し、1:2 は slab、1:1 付近は stairs、45度以上は full block の支えを使います。</gray>")
  }

  private fun slabSuggestions(prefix: String): List<String> =
      materialSuggestions(prefix) { it.createBlockData() is Slab }

  private fun stairSuggestions(prefix: String): List<String> =
      materialSuggestions(prefix) { it.createBlockData() is Stairs }

  private fun fullBlockSuggestions(prefix: String): List<String> =
      materialSuggestions(prefix) {
        val data = it.createBlockData()
        data !is Slab && data !is Stairs
      }

  private fun materialSuggestions(prefix: String, predicate: (Material) -> Boolean): List<String> =
      Material.values()
          .asSequence()
          .filter { it.isBlock && !it.isAir && it.name.startsWith(prefix.uppercase()) }
          .filter(predicate)
          .take(20)
          .map { it.name }
          .toList()

  private enum class TopKind {
    SLAB,
    STAIR
  }

  private data class RampSelection(
      val pos1: BlockVector3,
      val pos2: BlockVector3,
      val min: BlockVector3,
      val max: BlockVector3
  )

  private data class SlabStairsMaterials(
      val slab: Material,
      val stair: Material,
      val full: Material
  )

  private data class SlabStairsBuildPlan(
      val placements: List<Placement>,
      val columns: Int,
      val horizontalSteps: Int,
      val verticalBlocks: Int,
      val steep: Boolean,
      val slabBlocks: Int,
      val stairBlocks: Int,
      val fullBlocks: Int
  )

  private data class Placement(val x: Int, val y: Int, val z: Int, val data: BlockData)

  private data class BlockKey(val x: Int, val y: Int, val z: Int)
}
