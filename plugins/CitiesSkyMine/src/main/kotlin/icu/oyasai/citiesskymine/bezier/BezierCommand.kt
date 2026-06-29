package icu.oyasai.citiesskymine.bezier

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class BezierCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

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
    if (!plugin.access.require(sender, CommandKey.BEZIER)) return true

    when (args.getOrNull(0)?.lowercase()) {
      null,
      "help" -> sendHelp(sender, "/$label")
      "add",
      "here" -> addPoint(sender)
      "set" -> setPoint(sender, args)
      "fromsel",
      "selection",
      "convex" -> loadFromSelection(sender)
      "plane",
      "flatplane",
      "planar" -> planeMode(sender, args.getOrNull(1))
      "remove" -> removePoint(sender, args)
      "clear",
      "reset" -> clear(sender)
      "preview" -> preview(sender, args.getOrNull(1))
      "build" -> build(sender, args)
      "status" -> status(sender)
      "segments" -> setSegments(sender, args)
      else -> {
        MessageUtil.error(sender, "不明なサブコマンド: ${args[0]}")
        sendHelp(sender, "/$label")
      }
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
    if (args.size == 1) return SUBCOMMANDS.filter { it.startsWith(args[0], ignoreCase = true) }
    return when (args[0].lowercase()) {
      "set",
      "remove" ->
          if (args.size == 2)
              (1..MAX_POINTS).map { it.toString() }.filter { it.startsWith(args[1]) }
          else emptyList()
      "preview" ->
          if (args.size == 2)
              listOf("on", "off", "plane").filter { it.startsWith(args[1], ignoreCase = true) }
          else emptyList()
      "build" -> tabCompleteBuild(args)
      "segments" ->
          if (args.size == 2) listOf("32", "64", "96", "128").filter { it.startsWith(args[1]) }
          else emptyList()
      else -> emptyList()
    }
  }

  fun sendHelp(sender: CommandSender, base: String) {
    MessageUtil.header(sender, "Bezier")
    MessageUtil.helpEntry(sender, "$base add", "現在位置を制御点として追加")
    MessageUtil.helpEntry(sender, "$base set <1-$MAX_POINTS>", "指定番号の制御点を現在位置に更新")
    MessageUtil.helpEntry(sender, "$base preview <on|off>", "現在の WorldEdit 選択を自動読込してプレビュー")
    MessageUtil.helpEntry(sender, "$base plane <on|off>", "制御点のYをそろえて平面化")
    MessageUtil.helpEntry(sender, "$base remove [1-$MAX_POINTS]", "指定制御点、または末尾の制御点を削除")
    MessageUtil.helpEntry(sender, "$base build [material] [radius]", "曲線を実ブロックで生成。取り消しは //undo")
    MessageUtil.helpEntry(sender, "$base build flat [material] [width]", "道路用の1枚板を生成。取り消しは //undo")
    MessageUtil.helpEntry(sender, "$base segments [8-256]", "曲線の分割数を設定")
    MessageUtil.helpEntry(sender, "$base clear", "制御点とプレビューをクリア")
  }

  private fun addPoint(player: Player) {
    val session = plugin.getBezierSession(player)
    if (session.controlPoints.size >= MAX_POINTS) {
      MessageUtil.error(player, "制御点は最大 ${MAX_POINTS} 点です。")
      return
    }
    session.controlPoints += centerLocation(player.location)
    MessageUtil.success(player, "制御点 ${session.controlPoints.size} を追加しました。")
    if (session.previewTask != null) plugin.updateBezierPreview(player)
  }

  private fun loadFromSelection(player: Player) {
    val vertices = selectedVerticesOrNull(player, showErrors = true) ?: return
    if (vertices.size < 2) {
      MessageUtil.error(player, "convex/polyhedral 選択で2点以上の頂点を選択してください。")
      return
    }
    if (vertices.size > MAX_POINTS) {
      MessageUtil.error(player, "制御点は最大 $MAX_POINTS 点です。現在の選択: ${vertices.size} 点")
      return
    }

    val session = plugin.getBezierSession(player)
    session.controlPoints.clear()
    session.controlPoints += vertices.map { it.toCenteredLocation(player) }
    if (session.previewTask != null) plugin.updateBezierPreview(player)
    MessageUtil.success(player, "WorldEdit/FAWE 選択から ${vertices.size} 点の制御点を読み込みました。")
  }

  private fun setPoint(player: Player, args: Array<String>) {
    val index = parseIndex(player, args.getOrNull(1)) ?: return
    val session = plugin.getBezierSession(player)
    if (index > session.controlPoints.size + 1) {
      MessageUtil.error(
          player,
          "制御点 $index はまだ作成できません。先に ${session.controlPoints.size + 1} 番を追加してください。",
      )
      return
    }
    val location = centerLocation(player.location)
    if (index == session.controlPoints.size + 1) {
      session.controlPoints += location
      MessageUtil.success(player, "制御点 $index を追加しました。")
    } else {
      session.controlPoints[index - 1] = location
      MessageUtil.success(player, "制御点 $index を現在位置に更新しました。")
    }
    if (session.previewTask != null) plugin.updateBezierPreview(player)
  }

  private fun removePoint(player: Player, args: Array<String>) {
    val session = plugin.getBezierSession(player)
    if (session.controlPoints.isEmpty()) {
      MessageUtil.warn(player, "削除できる制御点がありません。")
      return
    }
    val index =
        if (args.getOrNull(1) == null) session.controlPoints.size
        else parseIndex(player, args[1]) ?: return
    if (index !in 1..session.controlPoints.size) {
      MessageUtil.error(player, "制御点 $index は存在しません。")
      return
    }
    session.controlPoints.removeAt(index - 1)
    MessageUtil.success(player, "制御点 $index を削除しました。")
    if (session.controlPoints.size < 2) plugin.stopBezierPreview(player)
  }

  private fun clear(player: Player) {
    val session = plugin.getBezierSession(player)
    session.controlPoints.clear()
    plugin.stopBezierPreview(player)
    MessageUtil.success(player, "ベジェ曲線の制御点をクリアしました。")
  }

  private fun planeMode(player: Player, mode: String?) {
    val session = plugin.getBezierSession(player)
    session.planeMode =
        when (mode?.lowercase()) {
          null,
          "toggle" -> !session.planeMode
          "on",
          "true",
          "1" -> true
          "off",
          "false",
          "0" -> false
          else -> {
            MessageUtil.error(player, "plane は on または off を指定してください。")
            return
          }
        }
    if (session.previewTask != null) plugin.updateBezierPreview(player)
    MessageUtil.success(player, "ベジェ平面モード: ${if (session.planeMode) "on" else "off"}")
  }

  private fun preview(player: Player, mode: String?) {
    when (mode?.lowercase()) {
      null,
      "on" -> {
        syncSelectionControlPoints(player, showErrors = false)
        val session = plugin.getBezierSession(player)
        if (session.controlPoints.size < 2) {
          MessageUtil.error(player, "プレビューには2点以上の制御点が必要です。")
          return
        }
        plugin.updateBezierPreview(player)
        MessageUtil.success(player, "ベジェ曲線プレビューを開始しました。")
      }
      "off" -> {
        plugin.stopBezierPreview(player)
        MessageUtil.success(player, "ベジェ曲線プレビューを停止しました。")
      }
      "plane" -> planeMode(player, "toggle")
      else -> MessageUtil.error(player, "preview は on または off を指定してください。")
    }
  }

  private fun build(player: Player, args: Array<String>) {
    syncSelectionControlPoints(player, showErrors = false)
    val session = plugin.getBezierSession(player)
    if (session.controlPoints.size < 2) {
      MessageUtil.error(player, "生成には2点以上の制御点が必要です。")
      return
    }
    if (session.controlPoints.any { it.world != player.world }) {
      MessageUtil.error(player, "制御点と現在のワールドが一致していません。clear して作り直してください。")
      return
    }

    val buildOptions = parseBuildOptions(player, args.drop(1)) ?: return
    val blocks =
        when (buildOptions.mode) {
          BuildMode.TUBE ->
              BezierGeometry.blockPath(
                  activeControlPoints(session),
                  session.segments,
                  buildOptions.size,
              )
          BuildMode.FLAT ->
              BezierGeometry.flatRoadPath(
                  activeControlPoints(session),
                  session.segments,
                  buildOptions.size,
              )
        }
    if (blocks.isEmpty()) {
      MessageUtil.error(player, "生成できるブロックがありません。")
      return
    }
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-bezier",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    if (maxBlocks > 0 && blocks.size > maxBlocks) {
      MessageUtil.error(player, "生成ブロック数が上限 ($maxBlocks) を超えています: ${blocks.size}")
      return
    }

    val blockData = BukkitAdapter.adapt(buildOptions.material.createBlockData())
    val result =
        CsmEditSession.run(player, plugin.logger) { editSession ->
          for (block in blocks) {
            editSession.setBlock(block, blockData)
          }
          true
        }
    MessageUtil.success(
        player,
        "ベジェ曲線を生成しました: mode=${buildOptions.mode.id} material=${buildOptions.material.name.lowercase()} size=${buildOptions.size} blocks=${blocks.size}",
    )
    if (result.undoRecorded) {
      MessageUtil.info(player, "FAWE の //undo でこの生成を取り消せます。")
    } else {
      MessageUtil.warn(player, "生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
  }

  private fun status(player: Player) {
    syncSelectionControlPoints(player, showErrors = false)
    val session = plugin.getBezierSession(player)
    val state = if (session.previewTask != null) "表示中" else "停止中"
    MessageUtil.info(
        player,
        "制御点=${session.controlPoints.size}/$MAX_POINTS segments=${session.segments} preview=$state plane=${if (session.planeMode) "on" else "off"}",
    )
    activeControlPoints(session).forEachIndexed { index, location ->
      MessageUtil.info(player, "${index + 1}: ${format(location)}")
    }
  }

  private fun setSegments(player: Player, args: Array<String>) {
    val raw = args.getOrNull(1)
    val value = raw?.toIntOrNull()
    if (value == null || value !in 8..256) {
      MessageUtil.error(player, "segments は 8 から 256 の整数で指定してください。")
      return
    }
    plugin.getBezierSession(player).segments = value
    MessageUtil.success(player, "segments を $value に設定しました。")
  }

  private fun parseBuildOptions(player: Player, rawArgs: List<String>): BuildOptions? {
    if (rawArgs.size > 3) {
      MessageUtil.error(player, "引数が多すぎます。使い方は /csm help bezier または /.help bezier を見てください。")
      return null
    }
    if (rawArgs.firstOrNull()?.equals("flat", ignoreCase = true) == true) {
      return parseFlatBuildOptions(player, rawArgs.drop(1))
    }
    if (rawArgs.size > 2) {
      MessageUtil.error(player, "build の使い方: /.bez build [material] [radius]")
      return null
    }

    val first = rawArgs.getOrNull(0)
    val second = rawArgs.getOrNull(1)
    val material: Material
    val size: Int
    if (first == null) {
      material = heldBlock(player) ?: return null
      size = 0
    } else if (first.toIntOrNull() != null) {
      if (second != null) {
        MessageUtil.error(player, "radius を先に指定する場合、material は同時に指定できません。")
        return null
      }
      material = heldBlock(player) ?: return null
      size = parseRadius(player, first) ?: return null
    } else {
      material = parseMaterial(player, first) ?: return null
      size = second?.let { parseRadius(player, it) ?: return null } ?: 0
    }
    return BuildOptions(BuildMode.TUBE, material, size)
  }

  private fun parseFlatBuildOptions(player: Player, rawArgs: List<String>): BuildOptions? {
    if (rawArgs.size > 2) {
      MessageUtil.error(player, "flat の使い方: /.bez build flat [material] [width]")
      return null
    }
    val first = rawArgs.getOrNull(0)
    val second = rawArgs.getOrNull(1)
    val material: Material
    val width: Int
    if (first == null) {
      material = heldBlock(player) ?: return null
      width = 5
    } else if (first.toIntOrNull() != null) {
      if (second != null) {
        MessageUtil.error(player, "width を先に指定する場合、material は同時に指定できません。")
        return null
      }
      material = heldBlock(player) ?: return null
      width = parseWidth(player, first) ?: return null
    } else {
      material = parseMaterial(player, first) ?: return null
      width = second?.let { parseWidth(player, it) ?: return null } ?: 5
    }
    return BuildOptions(BuildMode.FLAT, material, width)
  }

  private fun heldBlock(player: Player): Material? {
    val material = player.inventory.itemInMainHand.type
    if (material.isAir || !material.isBlock) {
      MessageUtil.error(player, "手持ちに配置可能なブロックを持つか、material を指定してください。")
      return null
    }
    return material
  }

  private fun parseMaterial(player: Player, raw: String): Material? {
    val material = Material.matchMaterial(raw)
    if (material == null || material.isAir || !material.isBlock) {
      MessageUtil.error(player, "material は配置可能なブロック名で指定してください: $raw")
      return null
    }
    return material
  }

  private fun parseRadius(player: Player, raw: String): Int? {
    val radius = raw.toIntOrNull()
    if (radius == null || radius !in 0..8) {
      MessageUtil.error(player, "radius は 0 から 8 の整数で指定してください。")
      return null
    }
    return radius
  }

  private fun parseWidth(player: Player, raw: String): Int? {
    val width = raw.toIntOrNull()
    if (width == null || width !in 1..64) {
      MessageUtil.error(player, "width は 1 から 64 の整数で指定してください。")
      return null
    }
    return width
  }

  private fun parseIndex(player: Player, raw: String?): Int? {
    val index = raw?.toIntOrNull()
    if (index == null || index !in 1..MAX_POINTS) {
      MessageUtil.error(player, "制御点番号は 1 から $MAX_POINTS で指定してください。")
      return null
    }
    return index
  }

  private fun format(location: Location): String =
      "x=${location.x.format1()} y=${location.y.format1()} z=${location.z.format1()}"

  private fun Double.format1(): String = String.format("%.1f", this)

  private fun tabCompleteBuild(args: Array<String>): List<String> {
    return when (args.size) {
      2 ->
          (listOf("flat", "[material]", "stone", "smooth_quartz", "white_concrete", "0", "1", "2"))
              .filter { it.startsWith(args[1], ignoreCase = true) }
      3 ->
          if (args[1].equals("flat", ignoreCase = true)) {
            listOf("[material]", "stone", "smooth_quartz", "white_concrete", "5", "7", "9").filter {
              it.startsWith(args[2], ignoreCase = true)
            }
          } else {
            listOf("[radius]", "0", "1", "2", "3").filter { it.startsWith(args[2]) }
          }
      4 ->
          if (args[1].equals("flat", ignoreCase = true)) {
            listOf("[width]", "3", "5", "7", "9").filter { it.startsWith(args[3]) }
          } else {
            emptyList()
          }
      else -> emptyList()
    }
  }

  private fun selectedVerticesOrNull(player: Player, showErrors: Boolean): List<BlockVector3>? {
    return try {
      selectedVertices(player)
    } catch (e: Exception) {
      if (showErrors) MessageUtil.error(player, "WorldEdit/FAWE の選択頂点を読み込めませんでした: ${e.message}")
      null
    }
  }

  private fun selectedVertices(player: Player): List<BlockVector3> {
    val actor = BukkitAdapter.adapt(player)
    val weWorld = BukkitAdapter.adapt(player.world)
    val session = WorldEdit.getInstance().sessionManager.get(actor)
    val selector = session.getRegionSelector(weWorld)
    val selectorVertices = verticesFrom(selector)
    if (selectorVertices.isNotEmpty()) return selectorVertices
    val region = selector.getRegion()
    return verticesFrom(region)
  }

  private fun verticesFrom(source: Any): List<BlockVector3> {
    if (source is CuboidRegion) return cuboidVertices(source)
    val method =
        source.javaClass.methods.firstOrNull { it.name == "getVertices" && it.parameterCount == 0 }
    val value = method?.invoke(source) as? Iterable<*> ?: return emptyList()
    return value.filterIsInstance<BlockVector3>().distinct()
  }

  private fun cuboidVertices(region: CuboidRegion): List<BlockVector3> {
    val min = region.minimumPoint
    val max = region.maximumPoint
    return listOf(
            BlockVector3.at(min.x(), min.y(), min.z()),
            BlockVector3.at(max.x(), min.y(), min.z()),
            BlockVector3.at(max.x(), max.y(), max.z()),
            BlockVector3.at(min.x(), max.y(), max.z()),
        )
        .distinct()
  }

  private fun syncSelectionControlPoints(player: Player, showErrors: Boolean) {
    val vertices = selectedVerticesOrNull(player, showErrors) ?: return
    if (vertices.size < 2) return
    if (vertices.size > MAX_POINTS) {
      if (showErrors) MessageUtil.error(player, "制御点は最大 $MAX_POINTS 点です。現在の選択: ${vertices.size} 点")
      return
    }
    val selected = vertices.map { it.toCenteredLocation(player) }
    val session = plugin.getBezierSession(player)
    if (sameLocations(session.controlPoints, selected)) return
    session.controlPoints.clear()
    session.controlPoints += selected
  }

  private fun activeControlPoints(session: BezierSession): List<Location> {
    if (!session.planeMode || session.controlPoints.isEmpty()) return session.controlPoints
    val y = session.controlPoints.first().y
    return session.controlPoints.map { Location(it.world, it.x, y, it.z) }
  }

  private fun sameLocations(a: List<Location>, b: List<Location>): Boolean =
      a.size == b.size &&
          a.zip(b).all { (left, right) ->
            left.world == right.world && left.x == right.x && left.y == right.y && left.z == right.z
          }

  private fun centerLocation(location: Location): Location =
      Location(
          location.world,
          location.blockX.toDouble() + 0.5,
          location.blockY.toDouble() + 0.5,
          location.blockZ.toDouble() + 0.5,
      )

  private fun BlockVector3.toCenteredLocation(player: Player): Location =
      Location(player.world, x().toDouble() + 0.5, y().toDouble() + 0.5, z().toDouble() + 0.5)

  private data class BuildOptions(val mode: BuildMode, val material: Material, val size: Int)

  private enum class BuildMode(val id: String) {
    TUBE("tube"),
    FLAT("flat"),
  }

  private companion object {
    const val MAX_POINTS = 32
    val SUBCOMMANDS =
        listOf(
            "add",
            "set",
            "plane",
            "remove",
            "preview",
            "build",
            "segments",
            "status",
            "clear",
            "help",
        )
  }
}
