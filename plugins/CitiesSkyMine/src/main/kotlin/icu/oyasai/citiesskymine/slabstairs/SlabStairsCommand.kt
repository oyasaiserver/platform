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
      args: Array<String>,
  ): Boolean {
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.SLAB_STAIRS)) return true

    when (args.getOrNull(0)?.lowercase()) {
      "help" -> {
        showHelp(sender, label)
        return true
      }
      "undo" -> {
        MessageUtil.info(sender, "SlabStairs の取り消しは FAWE の //undo を使ってください。")
        return true
      }
    }

    build(sender, args)
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args.size == 1) {
      return (listOf("help") + familySuggestions(args[0])).filter {
        it.startsWith(args[0], ignoreCase = true)
      }
    }
    return emptyList()
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
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    if (maxBlocks > 0 && plan.placements.size > maxBlocks) {
      MessageUtil.error(player, "生成ブロック数が上限 ($maxBlocks) を超えています: ${plan.placements.size}")
      return
    }

    val faweUndoRecorded =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
                for (placement in plan.placements) {
                  editSession.setBlock(
                      BlockVector3.at(placement.x, placement.y, placement.z),
                      BukkitAdapter.adapt(placement.data),
                  )
                }
                true
              }
              .undoRecorded
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
        "SlabStairs を生成しました: ${plan.columns} columns / ${plan.placements.size} blocks / slab=${plan.slabBlocks} / stairs=${plan.stairBlocks} / full=${plan.fullBlocks} / material=${materials.familyLabel} / slope=$slopeText",
    )
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
    return RampSelection(pos1, pos2)
  }

  private fun buildPlan(
      world: World,
      selection: RampSelection,
      materials: SlabStairsMaterials,
  ): SlabStairsBuildPlan {
    val dx = selection.pos2.x() - selection.pos1.x()
    val dz = selection.pos2.z() - selection.pos1.z()
    val dy = selection.pos2.y() - selection.pos1.y()
    val horizontalSteps = max(abs(dx), abs(dz))
    require(horizontalSteps > 0) { "ポイント1からポイント2までに水平距離がありません。" }

    val minWorldY = world.minHeight
    val maxWorldY = world.maxHeight
    val placements = LinkedHashMap<BlockKey, Placement>()
    val path = horizontalPath(selection.pos1, dx, dz, horizontalSteps)
    val stairFacing = stairFacing(dx, dz, dy)
    val yStep = signOrOne(dy)
    var slabBlocks = 0
    var stairBlocks = 0
    var fullBlocks = 0

    fun addPlacement(point: HorizontalPoint, y: Int, shape: RampShape) {
      require(y >= minWorldY && y < maxWorldY) { "生成先Yがワールド範囲外です: $y" }
      val data =
          when (shape) {
            RampShape.HALF_BOTTOM -> slabData(materials.slab, Slab.Type.BOTTOM)
            RampShape.HALF_TOP -> slabData(materials.slab, Slab.Type.TOP)
            RampShape.STAIRS -> stairData(materials.stair, stairFacing)
            RampShape.FULL -> materials.full.createBlockData()
          }
      val key = BlockKey(point.x, y, point.z)
      if (placements.put(key, Placement(point.x, y, point.z, data)) == null) {
        when (shape) {
          RampShape.HALF_BOTTOM,
          RampShape.HALF_TOP -> slabBlocks++
          RampShape.STAIRS -> stairBlocks++
          RampShape.FULL -> fullBlocks++
        }
      }
    }

    if (horizontalSteps >= abs(dy)) {
      val segments = symmetricSegments(horizontalSteps + 1, abs(dy) + 1)
      var pathIndex = 0
      var y = selection.pos1.y()
      for ((segmentIndex, length) in segments.withIndex()) {
        for (offset in 0 until length) {
          addPlacement(path[pathIndex], y, horizontalSegmentShape(offset, length, dy))
          if (offset < length - 1) {
            pathIndex += 1
          }
        }
        if (segmentIndex < segments.lastIndex) {
          pathIndex += 1
          y += yStep
        }
      }
    } else {
      val segments = symmetricSegments(abs(dy) + 1, horizontalSteps + 1)
      var pathIndex = 0
      var y = selection.pos1.y()
      val steepColumns = linkedMapOf<HorizontalPoint, MutableList<Int>>()
      for ((segmentIndex, length) in segments.withIndex()) {
        for (offset in 0 until length) {
          steepColumns.getOrPut(path[pathIndex]) { mutableListOf() } += y
          if (offset < length - 1) {
            y += yStep
          }
        }
        if (segmentIndex < segments.lastIndex) {
          y += yStep
          pathIndex += 1
        }
      }
      for ((point, yValues) in steepColumns) {
        val stairY = yValues.max()
        for (supportY in yValues.distinct().sorted()) {
          addPlacement(
              point,
              supportY,
              if (supportY == stairY) RampShape.STAIRS else RampShape.FULL,
          )
        }
      }
    }

    return SlabStairsBuildPlan(
        placements = placements.values.toList(),
        columns = horizontalSteps + 1,
        horizontalSteps = horizontalSteps,
        verticalBlocks = dy,
        slabBlocks = slabBlocks,
        stairBlocks = stairBlocks,
        fullBlocks = fullBlocks,
    )
  }

  private fun symmetricSegments(length: Int, count: Int): List<Int> {
    require(length > 0) { "生成長が不正です: $length" }
    require(count > 0) { "段数が不正です: $count" }
    val segments = mutableListOf<Int>()
    var previous = 0
    for (step in 1 until count) {
      val transition = ((step.toDouble() * length.toDouble()) / count.toDouble()).roundToInt()
      segments += transition - previous
      previous = transition
    }
    segments += length - previous
    return segments
  }

  private fun horizontalPath(
      start: BlockVector3,
      dx: Int,
      dz: Int,
      horizontalSteps: Int,
  ): List<HorizontalPoint> =
      (0..horizontalSteps).map { step ->
        val x =
            start.x() +
                ((dx.toDouble() * step.toDouble()) / horizontalSteps.toDouble()).roundToInt()
        val z =
            start.z() +
                ((dz.toDouble() * step.toDouble()) / horizontalSteps.toDouble()).roundToInt()
        HorizontalPoint(x, z)
      }

  private fun horizontalSegmentShape(index: Int, length: Int, dy: Int): RampShape {
    if (length == 1) return RampShape.STAIRS
    val upward = dy > 0
    return when (index) {
      0 -> if (upward) RampShape.HALF_BOTTOM else RampShape.HALF_TOP
      length - 1 -> if (upward) RampShape.HALF_TOP else RampShape.HALF_BOTTOM
      else -> RampShape.STAIRS
    }
  }

  private fun slabData(material: Material, type: Slab.Type): BlockData {
    val data = material.createBlockData() as Slab
    data.type = type
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

  private fun signOrOne(value: Int): Int =
      when {
        value < 0 -> -1
        else -> 1
      }

  private fun parseMaterials(sender: CommandSender, args: Array<String>): SlabStairsMaterials? {
    val materialArgs = args.filterNot { it.startsWith("-") }
    if (materialArgs.size > 1) {
      MessageUtil.error(sender, "使い方: /.ss [material]")
      return null
    }

    val requested = materialArgs.firstOrNull()
    val requestedMaterials = requested?.let { materialFamilyFromArg(it) }
    if (requested != null && requestedMaterials == null) {
      MessageUtil.error(sender, "slab/stairs の組み合わせを持つ素材を指定してください: $requested")
      return null
    }

    return requestedMaterials
        ?: configuredMaterials()
        ?: SlabStairsMaterials(
            Material.STONE_BRICK_SLAB,
            Material.STONE_BRICK_STAIRS,
            Material.STONE_BRICKS,
            "stone_brick",
        )
  }

  private fun configuredMaterials(): SlabStairsMaterials? {
    plugin.config.getString("slab-stairs.material")?.let { family ->
      materialFamilyFromArg(family)?.let {
        return it
      }
    }
    val slab = materialFromConfig("slab-stairs.slab")?.takeIf { it.createBlockData() is Slab }
    val stair = materialFromConfig("slab-stairs.stair")?.takeIf { it.createBlockData() is Stairs }
    if (slab != null && stair != null) {
      val family = slab.name.removeSuffix("_SLAB")
      val full = fullMaterialForFamily(family) ?: Material.STONE_BRICKS
      return SlabStairsMaterials(slab, stair, full, familyLabel(family))
    }
    return null
  }

  private fun materialFromConfig(configPath: String): Material? =
      plugin.config
          .getString(configPath)
          ?.let { Material.matchMaterial(it) }
          ?.takeIf { it.isBlock && !it.isAir }

  private fun materialFamilyFromArg(raw: String): SlabStairsMaterials? {
    val normalized =
        raw.trim()
            .lowercase()
            .removePrefix("minecraft:")
            .removeSuffix("_slab")
            .removeSuffix("_stairs")
    val candidates =
        listOf(
            normalized,
            if (normalized.endsWith("s")) normalized else "${normalized}s",
            "${normalized}_planks",
            "${normalized}_bricks",
            "${normalized}_block",
        )
    for (base in candidates.distinct()) {
      val slab = Material.matchMaterial("${base}_slab") ?: continue
      val stair = Material.matchMaterial("${base}_stairs") ?: continue
      val full = fullMaterialForFamily(base) ?: continue
      if (slab.createBlockData() is Slab && stair.createBlockData() is Stairs) {
        return SlabStairsMaterials(slab, stair, full, familyLabel(base))
      }
    }
    return null
  }

  private fun fullMaterialForFamily(raw: String): Material? {
    val normalized = raw.lowercase().removePrefix("minecraft:")
    val fullCandidates =
        listOf(
            normalized,
            if (normalized.endsWith("s")) normalized else "${normalized}s",
            "${normalized}_planks",
            "${normalized}_block",
        )
    for (candidate in fullCandidates.distinct()) {
      val material = Material.matchMaterial(candidate) ?: continue
      val data = material.createBlockData()
      if (material.isBlock && !material.isAir && data !is Slab && data !is Stairs) {
        return material
      }
    }
    return null
  }

  private fun familyLabel(raw: String): String = raw.lowercase().removePrefix("minecraft:")

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "SlabStairs")
    MessageUtil.helpEntry(sender, "/$label [material]", "選択した2点間に SlabStairs を生成")
    MessageUtil.helpEntry(sender, "//undo", "直前の SlabStairs 生成を FAWE で取り消し")
    MessageUtil.send(
        sender,
        "<gray>HTML プレビューと同じ対称セグメント方式で、緩い斜面は端を slab・中間を stair、急な斜面は stair で生成します。</gray>",
    )
  }

  private fun familySuggestions(prefix: String): List<String> =
      Material.values()
          .asSequence()
          .filter { it.isBlock && !it.isAir && it.createBlockData() is Slab }
          .map { familyLabel(it.name.removeSuffix("_SLAB")) }
          .filter { it.startsWith(prefix.lowercase()) }
          .take(20)
          .toList()

  private enum class RampShape {
    HALF_BOTTOM,
    HALF_TOP,
    STAIRS,
    FULL,
  }

  private data class RampSelection(
      val pos1: BlockVector3,
      val pos2: BlockVector3,
  )

  private data class SlabStairsMaterials(
      val slab: Material,
      val stair: Material,
      val full: Material,
      val familyLabel: String,
  )

  private data class SlabStairsBuildPlan(
      val placements: List<Placement>,
      val columns: Int,
      val horizontalSteps: Int,
      val verticalBlocks: Int,
      val slabBlocks: Int,
      val stairBlocks: Int,
      val fullBlocks: Int,
  )

  private data class HorizontalPoint(val x: Int, val z: Int)

  private data class Placement(val x: Int, val y: Int, val z: Int, val data: BlockData)

  private data class BlockKey(val x: Int, val y: Int, val z: Int)
}
