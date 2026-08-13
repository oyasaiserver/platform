package icu.oyasai.citiesskymine.crowd

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import kotlin.math.max
import kotlin.math.min
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Rotatable
import org.bukkit.block.data.type.Wall
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class CrowdCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

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
    if (!plugin.access.require(sender, CommandKey.CROWD)) return true

    if (args.isEmpty() || args[0].equals("help", ignoreCase = true)) {
      showHelp(sender, label)
      return true
    }
    if (args[0].equals("undo", ignoreCase = true)) {
      MessageUtil.info(sender, "群衆生成の取り消しは FAWE の //undo を使ってください。")
      return true
    }

    val parsed = parseArgs(sender, label, args) ?: return true
    val region = selectedCuboid(sender) ?: return true
    val bounds = CuboidBounds.from(region)
    val facing = yawFace(sender.location.yaw)
    val depthAxis = horizontalUnit(facing)
    val lateralAxis = leftUnit(depthAxis)
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-crowd",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    val figures = parsed.counts.figureCount()
    val estimatedBlocks =
        if (figures > Long.MAX_VALUE / BLOCKS_PER_FIGURE) {
          Long.MAX_VALUE
        } else {
          figures * BLOCKS_PER_FIGURE
        }
    if (maxBlocks > 0 && estimatedBlocks > maxBlocks) {
      MessageUtil.error(sender, "生成ブロック数が上限 ($maxBlocks) を超えています: $estimatedBlocks")
      return true
    }

    val plan =
        try {
          buildPlan(sender, bounds, lateralAxis, depthAxis, parsed)
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(sender, e.message ?: "群衆配置の計算に失敗しました。")
          return true
        }

    val faweUndoRecorded =
        try {
          CsmEditSession.run(sender, plugin.logger) { editSession ->
                for (placement in plan.placements) {
                  editSession.setBlock(
                      BlockVector3.at(placement.x, placement.y, placement.z),
                      BukkitAdapter.adapt(placement.data),
                  )
                }
                plan.placements.isNotEmpty()
              }
              .undoRecorded
        } catch (e: Exception) {
          MessageUtil.error(sender, "群衆生成に失敗しました: ${e.message}")
          return true
        }

    MessageUtil.success(
        sender,
        "群衆を生成しました: ${plan.figures} people / ${plan.placements.size} blocks / grid=${parsed.counts.label} / gap=${parsed.gap} / wall=${parsed.wallMaterial.key.key} / head=${parsed.headMaterial.key.key}",
    )
    if (faweUndoRecorded) {
      MessageUtil.info(sender, "FAWE の //undo でこの群衆生成を取り消せます。")
    } else {
      MessageUtil.warn(sender, "群衆生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    val suggestions =
        when (args.size) {
          1 ->
              ArgSuggest.positional("count", "1-100 or leftxdepth", listOf("8", "12", "10x3")) +
                  "help"
          2 -> ArgSuggest.positional("gap", "0-10", listOf("1", "2", "3"))
          3 -> wallSuggestions(args[2])
          4 -> headSuggestions(args[3])
          else -> emptyList()
        }
    return ArgSuggest.filterSuggestions(suggestions, args.last())
  }

  private fun parseArgs(
      sender: CommandSender,
      label: String,
      args: Array<String>,
  ): ParsedCrowdArgs? {
    val countRaw = args.getOrNull(0)
    if (countRaw == null || ArgSuggest.isPlaceholder(countRaw)) {
      showUsageError(sender, label)
      return null
    }
    val counts =
        parseCounts(countRaw)
            ?: run {
              MessageUtil.error(sender, "人数指定が無効です: $countRaw")
              MessageUtil.info(sender, "使い方: /$label <人数|左右x奥行> [間隔] [壁材] [頭部材]")
              return null
            }

    var index = 1
    var gap = plugin.config.getInt("crowd.default-gap", 2)
    args.getOrNull(index)?.let { raw ->
      if (ArgSuggest.isPlaceholder(raw)) {
        MessageUtil.error(sender, "無効な引数です。数値を入力してください: $raw")
        return null
      }
      raw.toIntOrNull()?.let {
        gap = it
        index += 1
      }
    }
    if (gap < 0) {
      MessageUtil.error(sender, "間隔は0以上で指定してください。")
      return null
    }

    val wallMaterial =
        args.getOrNull(index)?.let { raw ->
          wallMaterialFromArg(raw)
              ?: run {
                MessageUtil.error(sender, "Wallブロック素材を指定してください: $raw")
                return null
              }
        } ?: configuredWallMaterial() ?: Material.COBBLESTONE_WALL
    index += if (args.getOrNull(index) != null) 1 else 0

    val headMaterial =
        args.getOrNull(index)?.let { raw ->
          headMaterialFromArg(raw)
              ?: run {
                MessageUtil.error(sender, "頭部に使える head/skull ブロックを指定してください: $raw")
                return null
              }
        } ?: configuredHeadMaterial() ?: Material.PLAYER_HEAD
    index += if (args.getOrNull(index) != null) 1 else 0

    if (index < args.size) {
      MessageUtil.error(sender, "不明な引数です: ${args.drop(index).joinToString(" ")}")
      return null
    }

    return ParsedCrowdArgs(counts, gap, wallMaterial, headMaterial)
  }

  private fun showUsageError(sender: CommandSender, label: String) {
    MessageUtil.error(sender, "使い方: /$label <人数|左右x奥行> [間隔] [壁材] [頭部材]")
    MessageUtil.info(sender, "例: /$label 12 2 cobblestone_wall player_head")
    MessageUtil.info(sender, "例: /$label 8x4 1 polished_blackstone_wall player_head")
  }

  private fun selectedCuboid(player: Player): CuboidRegion? {
    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(player.world)
    val session = WorldEdit.getInstance().sessionManager.get(actor)
    val region =
        try {
          session.getRegionSelector(weWorld).getRegion()
        } catch (_: IncompleteRegionException) {
          MessageUtil.error(player, "WorldEdit で範囲を2点選択してから実行してください。")
          return null
        }
    return region as? CuboidRegion
        ?: run {
          MessageUtil.error(player, "群衆生成は cuboid 選択にだけ対応しています。")
          null
        }
  }

  private fun buildPlan(
      player: Player,
      bounds: CuboidBounds,
      lateralAxis: HorizontalUnit,
      depthAxis: HorizontalUnit,
      parsed: ParsedCrowdArgs,
  ): CrowdBuildPlan {
    val bodyY = bounds.minY
    val headY = bodyY + 2
    require(bodyY >= player.world.minHeight && headY < player.world.maxHeight) {
      "生成先Yがワールド範囲外です: body=$bodyY head=$headY"
    }

    val lateralLength = lengthAlong(bounds, lateralAxis)
    val depthLength = lengthAlong(bounds, depthAxis)
    val lateralStarts = centeredStarts(parsed.counts.lateral, parsed.gap, lateralLength, "左右")
    val depthStarts =
        parsed.counts.depth?.let { centeredStarts(it, parsed.gap, depthLength, "奥行き") }
            ?: listOf((depthLength - 1) / 2)
    val bodyData = crowdWallData(parsed.wallMaterial, lateralAxis)
    val headData = headData(parsed.headMaterial, yawFace(player.location.yaw))
    val placements = ArrayList<CrowdPlacement>()

    for (lateralOffset in lateralStarts) {
      for (depthOffset in depthStarts) {
        val point = blockAt(bounds, lateralAxis, lateralOffset, depthAxis, depthOffset)
        placements += CrowdPlacement(point.x, bodyY, point.z, bodyData)
        placements += CrowdPlacement(point.x, bodyY + 1, point.z, bodyData)
        placements += CrowdPlacement(point.x, headY, point.z, headData)
      }
    }

    return CrowdBuildPlan(
        placements = placements,
        figures = lateralStarts.size * depthStarts.size,
    )
  }

  private fun centeredStarts(count: Int, gap: Int, length: Int, label: String): List<Int> {
    require(count > 0) { "${label}人数は1以上で指定してください。" }
    val requiredLength = 1L + (count - 1).toLong() * (gap + 1).toLong()
    require(requiredLength <= length.toLong()) {
      "${label}方向の選択幅が不足しています: required=$requiredLength selected=$length"
    }
    val start = ((length.toLong() - requiredLength) / 2L).toInt()
    val stride = gap + 1
    return (0 until count).map { start + it * stride }
  }

  private fun crowdWallData(material: Material, lateralAxis: HorizontalUnit): BlockData {
    val data = material.createBlockData() as Wall
    data.isUp = true
    val eastWestHeight = if (lateralAxis.x != 0) Wall.Height.LOW else Wall.Height.NONE
    val northSouthHeight = if (lateralAxis.z != 0) Wall.Height.LOW else Wall.Height.NONE
    data.setHeight(BlockFace.NORTH, northSouthHeight)
    data.setHeight(BlockFace.EAST, eastWestHeight)
    data.setHeight(BlockFace.SOUTH, northSouthHeight)
    data.setHeight(BlockFace.WEST, eastWestHeight)
    return data
  }

  private fun headData(material: Material, facing: BlockFace): BlockData {
    val data = material.createBlockData() as Rotatable
    data.rotation = facing
    return data
  }

  private fun parseCounts(raw: String): CrowdCounts? {
    val normalized = raw.lowercase().replace("×", "x").replace("*", "x").replace(",", "x")
    val parts = normalized.split("x")
    if (parts.size !in 1..2) return null
    val lateral = parts[0].toIntOrNull() ?: return null
    val depth = parts.getOrNull(1)?.toIntOrNull()
    if (lateral <= 0 || depth != null && depth <= 0) return null
    return CrowdCounts(lateral, depth)
  }

  private fun configuredWallMaterial(): Material? =
      plugin.config.getString("crowd.wall")?.let { wallMaterialFromArg(it) }

  private fun configuredHeadMaterial(): Material? =
      plugin.config.getString("crowd.head")?.let { headMaterialFromArg(it) }

  private fun wallMaterialFromArg(raw: String): Material? {
    val normalized = raw.trim().lowercase().removePrefix("minecraft:")
    val candidates =
        if (normalized.endsWith("_wall")) {
          listOf(normalized)
        } else {
          listOf("${normalized}_wall", normalized)
        }
    for (candidate in candidates.distinct()) {
      val material = Material.matchMaterial(candidate) ?: continue
      if (material.isBlock && !material.isAir && material.createBlockData() is Wall) {
        return material
      }
    }
    return null
  }

  private fun headMaterialFromArg(raw: String): Material? {
    val normalized = raw.trim().lowercase().removePrefix("minecraft:")
    val candidates =
        listOf(
            normalized,
            "${normalized}_head",
            "${normalized}_skull",
            if (normalized == "player") "player_head" else normalized,
        )
    for (candidate in candidates.distinct()) {
      val material = Material.matchMaterial(candidate) ?: continue
      if (isHeadMaterial(material) && material.createBlockData() is Rotatable) {
        return material
      }
    }
    return null
  }

  private fun isHeadMaterial(material: Material): Boolean =
      material.isBlock &&
          !material.isAir &&
          (material.name.endsWith("_HEAD") || material.name.endsWith("_SKULL"))

  private fun wallSuggestions(prefix: String): List<String> =
      Material.values()
          .asSequence()
          .filter { it.isBlock && !it.isAir }
          .filter { runCatching { it.createBlockData() is Wall }.getOrDefault(false) }
          .map { it.key.key }
          .filter { it.startsWith(prefix.lowercase()) }
          .take(20)
          .toList()

  private fun headSuggestions(prefix: String): List<String> =
      Material.values()
          .asSequence()
          .filter { isHeadMaterial(it) }
          .filter { runCatching { it.createBlockData() is Rotatable }.getOrDefault(false) }
          .map { it.key.key }
          .filter { it.startsWith(prefix.lowercase()) }
          .take(20)
          .toList()

  private fun lengthAlong(bounds: CuboidBounds, axis: HorizontalUnit): Int =
      if (axis.x != 0) {
        bounds.maxX - bounds.minX + 1
      } else {
        bounds.maxZ - bounds.minZ + 1
      }

  private fun blockAt(
      bounds: CuboidBounds,
      lateralAxis: HorizontalUnit,
      lateralOffset: Int,
      depthAxis: HorizontalUnit,
      depthOffset: Int,
  ): HorizontalPoint {
    val x =
        coordinateAlongX(bounds, lateralAxis, lateralOffset)
            ?: coordinateAlongX(bounds, depthAxis, depthOffset)
            ?: bounds.minX
    val z =
        coordinateAlongZ(bounds, lateralAxis, lateralOffset)
            ?: coordinateAlongZ(bounds, depthAxis, depthOffset)
            ?: bounds.minZ
    return HorizontalPoint(x, z)
  }

  private fun coordinateAlongX(bounds: CuboidBounds, axis: HorizontalUnit, offset: Int): Int? =
      when (axis.x) {
        1 -> bounds.minX + offset
        -1 -> bounds.maxX - offset
        else -> null
      }

  private fun coordinateAlongZ(bounds: CuboidBounds, axis: HorizontalUnit, offset: Int): Int? =
      when (axis.z) {
        1 -> bounds.minZ + offset
        -1 -> bounds.maxZ - offset
        else -> null
      }

  private fun yawFace(yaw: Float): BlockFace =
      when (Math.floorMod((yaw / 90.0f).roundToInt(), 4)) {
        1 -> BlockFace.WEST
        2 -> BlockFace.NORTH
        3 -> BlockFace.EAST
        else -> BlockFace.SOUTH
      }

  private fun horizontalUnit(face: BlockFace): HorizontalUnit =
      when (face) {
        BlockFace.NORTH -> HorizontalUnit(0, -1)
        BlockFace.EAST -> HorizontalUnit(1, 0)
        BlockFace.SOUTH -> HorizontalUnit(0, 1)
        BlockFace.WEST -> HorizontalUnit(-1, 0)
        else -> HorizontalUnit(0, 1)
      }

  private fun leftUnit(forward: HorizontalUnit): HorizontalUnit =
      HorizontalUnit(forward.z, -forward.x)

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Crowd")
    MessageUtil.helpEntry(sender, "/$label <人数|左右x奥行> [間隔] [壁材] [頭部材]", "群衆シルエットを選択範囲に生成")
    MessageUtil.helpEntry(sender, "/$label 12 2 cobblestone_wall player_head", "横一列に12体を生成")
    MessageUtil.helpEntry(
        sender,
        "/$label 8x4 1 polished_blackstone_wall player_head",
        "左右8体・奥行4列で生成",
    )
    MessageUtil.helpEntry(sender, "//undo", "直前の群衆生成を FAWE で取り消し")
    MessageUtil.send(
        sender,
        "<gray>Wallは east/west=low, north/south=none, up=true を明示指定します。配置方向はプレイヤーの視線基準です。</gray>",
    )
  }

  private data class ParsedCrowdArgs(
      val counts: CrowdCounts,
      val gap: Int,
      val wallMaterial: Material,
      val headMaterial: Material,
  )

  private data class CrowdCounts(val lateral: Int, val depth: Int?) {
    val label: String = if (depth == null) "$lateral" else "${lateral}x$depth"

    fun figureCount(): Long = lateral.toLong() * (depth ?: 1).toLong()
  }

  private data class CuboidBounds(
      val minX: Int,
      val maxX: Int,
      val minY: Int,
      val maxY: Int,
      val minZ: Int,
      val maxZ: Int,
  ) {
    companion object {
      fun from(region: CuboidRegion): CuboidBounds {
        val a = region.pos1
        val b = region.pos2
        return CuboidBounds(
            min(a.x(), b.x()),
            max(a.x(), b.x()),
            min(a.y(), b.y()),
            max(a.y(), b.y()),
            min(a.z(), b.z()),
            max(a.z(), b.z()),
        )
      }
    }
  }

  private data class CrowdBuildPlan(
      val placements: List<CrowdPlacement>,
      val figures: Int,
  )

  private data class CrowdPlacement(val x: Int, val y: Int, val z: Int, val data: BlockData)

  private data class HorizontalUnit(val x: Int, val z: Int)

  private data class HorizontalPoint(val x: Int, val z: Int)

  companion object {
    private const val BLOCKS_PER_FIGURE = 3L
  }
}
