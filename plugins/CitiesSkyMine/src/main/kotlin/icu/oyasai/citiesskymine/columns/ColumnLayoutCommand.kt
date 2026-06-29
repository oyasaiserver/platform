package icu.oyasai.citiesskymine.columns

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
import kotlin.math.min
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class ColumnLayoutCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

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
    if (!plugin.access.require(sender, CommandKey.COLUMNS)) return true

    if (args.isEmpty() || args[0].equals("help", ignoreCase = true)) {
      showHelp(sender, label)
      return true
    }
    if (args[0].equals("undo", ignoreCase = true)) {
      MessageUtil.info(sender, "柱生成の取り消しは FAWE の //undo を使ってください。")
      return true
    }

    val parsed = parseArgs(sender, label, args) ?: return true
    val region = selectedCuboid(sender) ?: return true
    val bounds = CuboidBounds.from(region)
    val facing = yawFace(sender.location.yaw)
    val depthAxis = horizontalUnit(facing)
    val lateralAxis = leftUnit(depthAxis)

    val material = heldBlockMaterial(sender)
    val plan =
        try {
          buildPlan(bounds, lateralAxis, depthAxis, parsed, material)
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(sender, e.message ?: "柱割りの計算に失敗しました。")
          return true
        }

    showSuggestions(sender, plan)
    if (parsed.action == Action.SUGGEST) return true

    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-columns",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    if (maxBlocks > 0 && plan.placements.size.toLong() > maxBlocks) {
      MessageUtil.error(sender, "生成ブロック数が上限 ($maxBlocks) を超えています: ${plan.placements.size}")
      return true
    }

    val faweUndoRecorded =
        try {
          CsmEditSession.run(sender, plugin.logger) { editSession ->
                for (placement in plan.placements) {
                  editSession.setBlock(
                      BlockVector3.at(placement.x, placement.y, placement.z),
                      BukkitAdapter.adapt(placement.material.createBlockData()),
                  )
                }
                plan.placements.isNotEmpty()
              }
              .undoRecorded
        } catch (e: Exception) {
          MessageUtil.error(sender, "柱生成に失敗しました: ${e.message}")
          return true
        }

    MessageUtil.success(
        sender,
        "柱を生成しました: ${plan.logicalColumns} columns / ${plan.placements.size} blocks / material=${material.key.key} / mode=${parsed.mode.label} / grid=${parsed.grid}",
    )
    if (faweUndoRecorded) {
      MessageUtil.info(sender, "FAWE の //undo でこの柱生成を取り消せます。")
    } else {
      MessageUtil.warn(sender, "柱生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
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
    val current = args.last()
    val suggestions = columnArgumentSuggestions(args)
    return suggestions.filter { it.startsWith(current, ignoreCase = true) }
  }

  private fun columnArgumentSuggestions(args: Array<String>): List<String> {
    val position = args.count { !isColumnOptionToken(it) }
    val countMode = args.any { isCountModeToken(it) }
    return when {
      position <= 1 -> listOf("1", "2", "3")
      position == 2 && countMode -> listOf("3", "4", "5", "6", "5x3")
      position == 2 -> listOf("3", "5", "7", "9")
      else -> columnOptionSuggestions(args.dropLast(1))
    }
  }

  private fun columnOptionSuggestions(completedArgs: List<String>): List<String> {
    val suggestions = ArrayList<String>()
    if (completedArgs.none { isSuggestToken(it) }) suggestions += "-s"
    if (completedArgs.none { isCountModeToken(it) }) suggestions += "-p"
    if (completedArgs.none { isLayoutModeToken(it) }) suggestions += listOf("edge", "center")
    if (completedArgs.none { isGridToken(it) }) suggestions += "2d"
    return suggestions
  }

  private fun parseArgs(
      sender: CommandSender,
      label: String,
      args: Array<String>,
  ): ParsedColumnArgs? {
    var action = Action.BUILD
    var inputMode = InputMode.GAP
    var mode = LayoutMode.EDGE
    var grid = false
    val positionals = ArrayList<String>()

    for (raw in args) {
      when (raw.lowercase()) {
        "suggest",
        "s",
        "-s",
        "--suggest" -> action = Action.SUGGEST
        "build",
        "apply",
        "b" -> action = Action.BUILD
        "edge",
        "e",
        "端" -> mode = LayoutMode.EDGE
        "center",
        "centered",
        "c",
        "--centered",
        "中央",
        "余白" -> mode = LayoutMode.CENTERED
        "2d",
        "grid",
        "--grid" -> grid = true
        else ->
            if (isCountModeToken(raw)) {
              inputMode = InputMode.COUNT
            } else {
              positionals += raw
            }
      }
    }

    val widthRaw = positionals.getOrNull(0)
    val columnWidth = widthRaw?.toIntOrNull()
    if (columnWidth == null) {
      showColumnUsageError(sender, label)
      return null
    }
    if (columnWidth <= 0) {
      MessageUtil.error(sender, "柱の太さは1以上で指定してください。")
      return null
    }

    val preferredGap: Int?
    val requestedCounts: AxisCounts?
    when (inputMode) {
      InputMode.GAP -> {
        val gapRaw = positionals.getOrNull(1)
        preferredGap = gapRaw?.toIntOrNull()
        requestedCounts = null
        if (preferredGap == null) {
          showColumnUsageError(sender, label)
          return null
        }
        if (preferredGap < 0) {
          MessageUtil.error(sender, "柱間は0以上で指定してください。")
          return null
        }
      }
      InputMode.COUNT -> {
        val countRaw = positionals.getOrNull(1)
        preferredGap = null
        requestedCounts = countRaw?.let { parseAxisCounts(it) }
        if (requestedCounts == null) {
          MessageUtil.error(
              sender,
              "使い方: /$label <柱の太さ> <柱数|左右x奥行> -p [edge|center] [2d] [-s]",
          )
          return null
        }
      }
    }
    if (positionals.size > 2) {
      MessageUtil.error(sender, "不明な引数です: ${positionals.drop(2).joinToString(" ")}")
      return null
    }
    return ParsedColumnArgs(action, columnWidth, preferredGap, requestedCounts, mode, grid)
  }

  private fun showColumnUsageError(sender: CommandSender, label: String) {
    MessageUtil.error(sender, "使い方: /$label <柱の太さ> <柱間> [edge|center] [2d] [-s]")
    MessageUtil.info(sender, "柱数指定: /$label <柱の太さ> <柱数|左右x奥行> -p [edge|center] [2d] [-s]")
  }

  private fun isCountModeToken(raw: String): Boolean =
      raw.equals("count", true) ||
          raw.equals("counts", true) ||
          raw.equals("columns", true) ||
          raw.equals("n", true) ||
          raw.equals("本数", true) ||
          raw.equals("-p", true) ||
          raw.equals("--count", true)

  private fun isColumnOptionToken(raw: String): Boolean =
      isCountModeToken(raw) ||
          isSuggestToken(raw) ||
          raw.equals("build", true) ||
          raw.equals("apply", true) ||
          raw.equals("b", true) ||
          isLayoutModeToken(raw) ||
          isGridToken(raw)

  private fun isSuggestToken(raw: String): Boolean =
      raw.equals("-s", true) ||
          raw.equals("--suggest", true) ||
          raw.equals("suggest", true) ||
          raw.equals("s", true)

  private fun isLayoutModeToken(raw: String): Boolean =
      raw.equals("edge", true) ||
          raw.equals("e", true) ||
          raw.equals("端", true) ||
          raw.equals("center", true) ||
          raw.equals("centered", true) ||
          raw.equals("c", true) ||
          raw.equals("--centered", true) ||
          raw.equals("中央", true) ||
          raw.equals("余白", true)

  private fun isGridToken(raw: String): Boolean =
      raw.equals("2d", true) || raw.equals("grid", true) || raw.equals("--grid", true)

  private fun parseAxisCounts(raw: String): AxisCounts? {
    val normalized = raw.lowercase().replace("×", "x").replace("*", "x").replace(",", "x")
    val parts = normalized.split("x")
    if (parts.size !in 1..2) return null
    val lateral = parts[0].toIntOrNull() ?: return null
    val depth = parts.getOrNull(1)?.toIntOrNull()
    if (lateral <= 0 || depth != null && depth <= 0) return null
    return AxisCounts(lateral, depth)
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
          MessageUtil.error(player, "柱生成は cuboid 選択にだけ対応しています。")
          null
        }
  }

  private fun buildPlan(
      bounds: CuboidBounds,
      lateralAxis: HorizontalUnit,
      depthAxis: HorizontalUnit,
      parsed: ParsedColumnArgs,
      material: Material,
  ): ColumnBuildPlan {
    val lateralLength = lengthAlong(bounds, lateralAxis)
    val depthLength = lengthAlong(bounds, depthAxis)
    require(lateralLength >= parsed.columnWidth) {
      "左右方向の選択幅が柱の太さより小さいです: $lateralLength < ${parsed.columnWidth}"
    }
    require(depthLength >= parsed.columnWidth) {
      "奥行き方向の選択幅が柱の太さより小さいです: $depthLength < ${parsed.columnWidth}"
    }

    val lateralSuggestions =
        if (parsed.requestedCounts != null) {
          layoutsForCount(
              lateralLength,
              parsed.columnWidth,
              parsed.requestedCounts.lateral,
              parsed.mode,
          )
        } else {
          suggestLayouts(lateralLength, parsed.columnWidth, parsed.preferredGap ?: 0, parsed.mode)
        }
    require(lateralSuggestions.isNotEmpty()) { "左右方向に配置できる柱割り候補がありません。" }
    val lateralLayout = lateralSuggestions.first()

    val depthSuggestions =
        if (parsed.grid) {
          if (parsed.requestedCounts != null) {
                layoutsForCount(
                    depthLength,
                    parsed.columnWidth,
                    parsed.requestedCounts.depth ?: parsed.requestedCounts.lateral,
                    parsed.mode,
                )
              } else {
                suggestLayouts(
                    depthLength,
                    parsed.columnWidth,
                    parsed.preferredGap ?: 0,
                    parsed.mode,
                )
              }
              .also { require(it.isNotEmpty()) { "奥行き方向に配置できる柱割り候補がありません。" } }
        } else {
          emptyList()
        }
    val depthStarts =
        if (parsed.grid) {
          depthSuggestions.first().starts
        } else {
          listOf((depthLength - parsed.columnWidth) / 2)
        }

    val placements = LinkedHashMap<BlockKey, ColumnPlacement>()
    for (lateralStart in lateralLayout.starts) {
      for (depthStart in depthStarts) {
        for (lateralOffset in lateralStart until lateralStart + parsed.columnWidth) {
          for (depthOffset in depthStart until depthStart + parsed.columnWidth) {
            val horizontal = blockAt(bounds, lateralAxis, lateralOffset, depthAxis, depthOffset)
            for (y in bounds.minY..bounds.maxY) {
              val key = BlockKey(horizontal.x, y, horizontal.z)
              placements.putIfAbsent(key, ColumnPlacement(horizontal.x, y, horizontal.z, material))
            }
          }
        }
      }
    }

    val logicalColumns = lateralLayout.starts.size * depthStarts.size
    return ColumnBuildPlan(
        placements = placements.values.toList(),
        logicalColumns = logicalColumns,
        lateralLength = lateralLength,
        depthLength = depthLength,
        lateralAxis = lateralAxis,
        depthAxis = depthAxis,
        lateralSuggestions = lateralSuggestions,
        depthSuggestions = depthSuggestions,
    )
  }

  private fun suggestLayouts(
      length: Int,
      columnWidth: Int,
      preferredGap: Int,
      mode: LayoutMode,
  ): List<AxisLayout> {
    val candidates = ArrayList<AxisLayout>()
    val maxColumns = length / columnWidth
    for (columns in 1..maxColumns) {
      when (mode) {
        LayoutMode.EDGE -> candidates += edgeCandidates(length, columnWidth, preferredGap, columns)
        LayoutMode.CENTERED ->
            candidates += centeredCandidates(length, columnWidth, preferredGap, columns)
      }
    }
    return candidates
        .distinctBy {
          "${it.starts.joinToString(",")}|${it.gaps.joinToString(",")}|${it.edgeLeft}|${it.edgeRight}"
        }
        .sortedWith(
            compareBy<AxisLayout> { it.score }
                .thenBy { symmetryPenalty(it.gaps) }
                .thenBy { abs(it.averageGapHundredths - preferredGap * 100) }
                .thenByDescending { it.starts.size },
        )
        .take(5)
  }

  private fun layoutsForCount(
      length: Int,
      columnWidth: Int,
      columns: Int,
      mode: LayoutMode,
  ): List<AxisLayout> {
    if (columns <= 0 || length < columns * columnWidth) return emptyList()
    val gapTotal = length - columns * columnWidth
    return when (mode) {
      LayoutMode.EDGE -> {
        val gaps =
            if (columns <= 1) {
              emptyList()
            } else {
              balancedDistribution(gapTotal, columns - 1)
            }
        listOf(
            AxisLayout(
                starts = startsFromGaps(columnWidth, gaps, edgeLeft = 0),
                gaps = gaps,
                edgeLeft = 0,
                edgeRight = if (columns == 1) gapTotal else 0,
                score = symmetryPenalty(gaps),
                averageGapHundredths = averageHundredths(gaps),
            )
        )
      }
      LayoutMode.CENTERED -> {
        if (columns == 1) {
          val edgeLeft = gapTotal / 2
          val edgeRight = gapTotal - edgeLeft
          return listOf(
              AxisLayout(
                  starts = listOf(edgeLeft),
                  gaps = emptyList(),
                  edgeLeft = edgeLeft,
                  edgeRight = edgeRight,
                  score = abs(edgeLeft - edgeRight),
                  averageGapHundredths = (edgeLeft + edgeRight) * 100,
              )
          )
        }

        val edgeTotal = gapTotal / columns
        val gaps = balancedDistribution(gapTotal - edgeTotal, columns - 1)
        val edgeLeft = edgeTotal / 2
        val edgeRight = edgeTotal - edgeLeft
        listOf(
            AxisLayout(
                starts = startsFromGaps(columnWidth, gaps, edgeLeft),
                gaps = gaps,
                edgeLeft = edgeLeft,
                edgeRight = edgeRight,
                score = symmetryPenalty(gaps) + abs(edgeLeft - edgeRight),
                averageGapHundredths = averageHundredths(gaps + edgeTotal),
            )
        )
      }
    }
  }

  private fun edgeCandidates(
      length: Int,
      columnWidth: Int,
      preferredGap: Int,
      columns: Int,
  ): List<AxisLayout> {
    if (columns == 1) {
      if (length != columnWidth) return emptyList()
      return listOf(AxisLayout(listOf(0), emptyList(), 0, 0, 0, 0))
    }
    val gapSlots = columns - 1
    val gapTotal = length - columns * columnWidth
    if (gapTotal < 0) return emptyList()
    return gapPatternVariants(gapTotal, gapSlots, preferredGap).map { gaps ->
      AxisLayout(
          starts = startsFromGaps(columnWidth, gaps, edgeLeft = 0),
          gaps = gaps,
          edgeLeft = 0,
          edgeRight = 0,
          score = scoreGaps(gaps, preferredGap, edgeTotal = 0, edgeImbalance = 0),
          averageGapHundredths = averageHundredths(gaps),
      )
    }
  }

  private fun centeredCandidates(
      length: Int,
      columnWidth: Int,
      preferredGap: Int,
      columns: Int,
  ): List<AxisLayout> {
    val gapTotal = length - columns * columnWidth
    if (gapTotal < 0) return emptyList()
    if (columns == 1) {
      val edgeLeft = gapTotal / 2
      val edgeRight = gapTotal - edgeLeft
      return listOf(
          AxisLayout(
              starts = listOf(edgeLeft),
              gaps = emptyList(),
              edgeLeft = edgeLeft,
              edgeRight = edgeRight,
              score = scoreGaps(emptyList(), preferredGap, edgeLeft + edgeRight, 0),
              averageGapHundredths = (edgeLeft + edgeRight) * 100,
          )
      )
    }

    val edgeTargets =
        (max(0, preferredGap - 2)..min(gapTotal, preferredGap + 2)).toMutableSet().also {
          it += preferredGap.coerceIn(0, gapTotal)
        }
    return edgeTargets.flatMap { edgeTotal ->
      val interiorTotal = gapTotal - edgeTotal
      gapPatternVariants(interiorTotal, columns - 1, preferredGap).map { gaps ->
        val edgeLeft = edgeTotal / 2
        val edgeRight = edgeTotal - edgeLeft
        AxisLayout(
            starts = startsFromGaps(columnWidth, gaps, edgeLeft),
            gaps = gaps,
            edgeLeft = edgeLeft,
            edgeRight = edgeRight,
            score = scoreGaps(gaps, preferredGap, edgeTotal, abs(edgeLeft - edgeRight)),
            averageGapHundredths = averageHundredths(gaps + edgeTotal),
        )
      }
    }
  }

  private fun gapPatternVariants(total: Int, slots: Int, preferredGap: Int): List<List<Int>> {
    if (slots <= 0) return listOf(emptyList())
    if (total < 0) return emptyList()
    val variants = LinkedHashSet<List<Int>>()

    fun addVariant(values: List<Int>) {
      variants += values
      variants += mirrorReorder(values, preferredGap)
    }

    addVariant(balancedDistribution(total, slots))

    val average = total / slots
    for (delta in 1..min(3, max(average, 1))) {
      val low = average - delta
      val high = average + delta
      if (low < 0 || high == low) continue
      val numerator = total - low * slots
      val denominator = high - low
      if (numerator < 0 || numerator % denominator != 0) continue
      val highCount = numerator / denominator
      if (highCount !in 0..slots) continue
      addVariant(symmetricMix(slots, low, high, highCount))
      addVariant(alternatingMix(slots, low, high, highCount))
    }
    return variants.toList()
  }

  private fun balancedDistribution(total: Int, slots: Int): List<Int> {
    val base = total / slots
    val remainder = total % slots
    val result = MutableList(slots) { base }
    for (index in centerFirstIndices(slots).take(remainder)) {
      result[index] += 1
    }
    return result
  }

  private fun symmetricMix(slots: Int, low: Int, high: Int, highCount: Int): List<Int> {
    val result = MutableList(slots) { low }
    for (index in centerFirstIndices(slots).take(highCount)) {
      result[index] = high
    }
    return result
  }

  private fun alternatingMix(slots: Int, low: Int, high: Int, highCount: Int): List<Int> {
    val result = MutableList(slots) { low }
    var remaining = highCount
    var index = if (slots > 1) 1 else 0
    while (remaining > 0 && index < slots) {
      result[index] = high
      remaining--
      index += 2
    }
    index = 0
    while (remaining > 0 && index < slots) {
      if (result[index] != high) {
        result[index] = high
        remaining--
      }
      index += 2
    }
    return result
  }

  private fun mirrorReorder(values: List<Int>, preferredGap: Int): List<Int> {
    if (values.size <= 2) return values
    val groups =
        values
            .groupingBy { it }
            .eachCount()
            .entries
            .sortedWith(
                compareBy<Map.Entry<Int, Int>> { it.value }
                    .thenByDescending { abs(it.key - preferredGap) }
                    .thenByDescending { it.key },
            )
    if (groups.size <= 1) return values

    val result = MutableList<Int?>(values.size) { null }
    val occupied = BooleanArray(values.size)
    for (group in groups.dropLast(1)) {
      for (position in spreadPositions(values.size, group.value, occupied)) {
        result[position] = group.key
        occupied[position] = true
      }
    }

    val majorityValue = groups.last().key
    return result.map { it ?: majorityValue }
  }

  private fun spreadPositions(size: Int, count: Int, occupied: BooleanArray): List<Int> {
    val selected = ArrayList<Int>()
    val center = (size - 1).toDouble() / 2.0
    for (step in 1..count) {
      val ideal = (step.toDouble() * (size + 1).toDouble()) / (count + 1).toDouble() - 1.0
      val chosen =
          (0 until size)
              .filter { !occupied[it] && it !in selected }
              .minWithOrNull(
                  compareBy<Int> { abs(it.toDouble() - ideal) }
                      .thenBy { abs(it.toDouble() - center) }
                      .thenBy { it },
              ) ?: break
      selected += chosen
    }
    return selected
  }

  private fun centerFirstIndices(size: Int): List<Int> {
    val center = (size - 1).toDouble() / 2.0
    return (0 until size).sortedWith(compareBy<Int> { abs(it - center) }.thenBy { it })
  }

  private fun startsFromGaps(columnWidth: Int, gaps: List<Int>, edgeLeft: Int): List<Int> {
    val starts = ArrayList<Int>()
    var current = edgeLeft
    starts += current
    for (gap in gaps) {
      current += columnWidth + gap
      starts += current
    }
    return starts
  }

  private fun scoreGaps(
      gaps: List<Int>,
      preferredGap: Int,
      edgeTotal: Int,
      edgeImbalance: Int,
  ): Int {
    val judged = if (edgeTotal > 0 || gaps.isEmpty()) gaps + edgeTotal else gaps
    if (judged.isEmpty()) return preferredGap * 100
    val distance = judged.sumOf { abs(it - preferredGap) } * 100
    val spread = (judged.maxOrNull() ?: 0) - (judged.minOrNull() ?: 0)
    val shortPenalty =
        if (preferredGap > 0) {
          judged.count { it == 0 } * 2_000 + judged.count { it in 1..2 && preferredGap >= 4 } * 300
        } else {
          0
        }
    return distance + spread * 10 + edgeImbalance * 20 + shortPenalty
  }

  private fun averageHundredths(values: List<Int>): Int =
      if (values.isEmpty()) 0 else (values.sum() * 100) / values.size

  private fun symmetryPenalty(values: List<Int>): Int =
      (0 until values.size / 2).sumOf { index ->
        abs(values[index] - values[values.lastIndex - index])
      }

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

  private fun heldBlockMaterial(player: Player): Material {
    val held = player.inventory.itemInMainHand.type
    return held.takeIf { it.isBlock && !it.isAir } ?: Material.STONE
  }

  private fun showSuggestions(sender: CommandSender, plan: ColumnBuildPlan) {
    val lateralLabel = axisLabel(plan.lateralAxis)
    MessageUtil.info(
        sender,
        "左右方向候補: length=${plan.lateralLength} axis=$lateralLabel -> ${layoutSummary(plan.lateralSuggestions.first())}",
    )
    plan.lateralSuggestions.drop(1).take(2).forEachIndexed { index, layout ->
      MessageUtil.send(sender, "<gray>${index + 2}. ${layoutSummary(layout)}</gray>")
    }
    if (plan.depthSuggestions.isNotEmpty()) {
      MessageUtil.info(
          sender,
          "奥行き方向候補: length=${plan.depthLength} axis=${axisLabel(plan.depthAxis)} -> ${layoutSummary(plan.depthSuggestions.first())}",
      )
    }
  }

  private fun layoutSummary(layout: AxisLayout): String {
    val gapText = if (layout.gaps.isEmpty()) "-" else layout.gaps.joinToString(",")
    val edgeText =
        if (layout.edgeLeft > 0 || layout.edgeRight > 0) {
          " / edge=${layout.edgeLeft},${layout.edgeRight}"
        } else {
          ""
        }
    return "columns=${layout.starts.size} / gaps=$gapText$edgeText"
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Columns")
    MessageUtil.helpEntry(sender, "/$label <柱の太さ> <柱間> [edge|center] [2d] [-s]", "手持ちブロックで柱を生成")
    MessageUtil.helpEntry(
        sender,
        "/$label <柱の太さ> <柱数|左右x奥行> -p [edge|center] [2d] [-s]",
        "柱数から均等配置を生成",
    )
    MessageUtil.helpEntry(sender, "/$label 2 7 center 2d", "両端余白モードで2Dグリッド配置")
    MessageUtil.helpEntry(sender, "/$label 2 5x3 -p center 2d", "左右5本、奥行3本で2Dグリッド配置")
    MessageUtil.helpEntry(sender, "//undo", "直前の柱生成を FAWE で取り消し")
    MessageUtil.send(
        sender,
        "<gray>横方向はプレイヤーの視線から見た左右方向を使います。素材はメインハンド、空なら stone です。</gray>",
    )
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

  private fun axisLabel(axis: HorizontalUnit): String =
      when {
        axis.x > 0 -> "east"
        axis.x < 0 -> "west"
        axis.z > 0 -> "south"
        axis.z < 0 -> "north"
        else -> "unknown"
      }

  private enum class Action {
    BUILD,
    SUGGEST,
  }

  private enum class LayoutMode(val label: String) {
    EDGE("edge"),
    CENTERED("center"),
  }

  private data class ParsedColumnArgs(
      val action: Action,
      val columnWidth: Int,
      val preferredGap: Int?,
      val requestedCounts: AxisCounts?,
      val mode: LayoutMode,
      val grid: Boolean,
  )

  private enum class InputMode {
    GAP,
    COUNT,
  }

  private data class AxisCounts(val lateral: Int, val depth: Int?)

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

  private data class ColumnBuildPlan(
      val placements: List<ColumnPlacement>,
      val logicalColumns: Int,
      val lateralLength: Int,
      val depthLength: Int,
      val lateralAxis: HorizontalUnit,
      val depthAxis: HorizontalUnit,
      val lateralSuggestions: List<AxisLayout>,
      val depthSuggestions: List<AxisLayout>,
  )

  private data class AxisLayout(
      val starts: List<Int>,
      val gaps: List<Int>,
      val edgeLeft: Int,
      val edgeRight: Int,
      val score: Int,
      val averageGapHundredths: Int,
  )

  private data class HorizontalUnit(val x: Int, val z: Int)

  private data class HorizontalPoint(val x: Int, val z: Int)

  private data class ColumnPlacement(val x: Int, val y: Int, val z: Int, val material: Material)

  private data class BlockKey(val x: Int, val y: Int, val z: Int)
}
