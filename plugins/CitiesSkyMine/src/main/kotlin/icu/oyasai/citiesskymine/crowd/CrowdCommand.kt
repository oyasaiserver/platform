package icu.oyasai.citiesskymine.crowd

import com.destroystokyo.paper.profile.PlayerProfile
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
import icu.oyasai.citiesskymine.util.CuboidBounds
import icu.oyasai.citiesskymine.util.HorizontalUnit
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.util.blockAt
import icu.oyasai.citiesskymine.util.horizontalUnit
import icu.oyasai.citiesskymine.util.lengthAlong
import icu.oyasai.citiesskymine.util.selectedCuboid
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import kotlin.math.cos
import kotlin.math.roundToInt
import kotlin.math.sin
import kotlin.random.Random
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.block.Skull
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Rotatable
import org.bukkit.block.data.type.Wall
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class CrowdCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
  internal val heads = CrowdHeads(plugin)
  private var torsoWalls =
      loadWalls(
          "crowd.torso-walls",
          listOf("BRICK_WALL", "SANDSTONE_WALL", "RED_NETHER_BRICK_WALL", "PRISMARINE_WALL"),
      )
  private var legWalls =
      loadWalls(
          "crowd.leg-walls",
          listOf("DEEPSLATE_BRICK_WALL", "BLACKSTONE_WALL", "POLISHED_BLACKSTONE_WALL"),
      )

  fun reloadMaterials() {
    torsoWalls =
        loadWalls(
            "crowd.torso-walls",
            listOf("BRICK_WALL", "SANDSTONE_WALL", "RED_NETHER_BRICK_WALL", "PRISMARINE_WALL"),
        )
    legWalls =
        loadWalls(
            "crowd.leg-walls",
            listOf("DEEPSLATE_BRICK_WALL", "BLACKSTONE_WALL", "POLISHED_BLACKSTONE_WALL"),
        )
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<String>,
  ): Boolean {
    if (args.firstOrNull().equals("heads", true)) {
      handleHeads(sender, label, args.drop(1))
      return true
    }
    if (sender !is Player) {
      MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
      return true
    }
    if (!plugin.access.require(sender, CommandKey.CROWD)) return true
    if (args.firstOrNull().equals("help", true)) {
      showHelp(sender, label)
      return true
    }
    if (args.firstOrNull().equals("undo", true)) {
      MessageUtil.info(sender, "群衆生成の取り消しは FAWE の //undo を使ってください。")
      return true
    }

    val grid = args.firstOrNull()?.let { parseCounts(it) }
    val natural = if (grid == null) parseNatural(sender, args) ?: return true else null
    val legacy = if (grid != null) parseGrid(sender, label, args, grid) ?: return true else null
    val region = selectedCuboid(sender, "群衆生成は cuboid 選択にだけ対応しています。") ?: return true
    val bounds = CuboidBounds.from(region)
    val bodyY = bounds.minY
    if (bodyY < sender.world.minHeight || bodyY + 2 >= sender.world.maxHeight) {
      MessageUtil.error(sender, "生成先Yがワールド範囲外です: body=$bodyY head=${bodyY + 2}")
      return true
    }
    val depthAxis = horizontalUnit(sender.facing)
    val rightAxis = HorizontalUnit(-depthAxis.z, depthAxis.x)
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-crowd",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000),
        )
    val width = lengthAlong(bounds, rightAxis)
    val depth = lengthAlong(bounds, depthAxis)
    val target =
        if (legacy != null) legacy.counts.figureCount()
        else (natural!!.density * width.toLong() * depth).roundToInt().toLong()
    if (maxBlocks > 0 && target > maxBlocks / 3) {
      val estimate = if (target > Long.MAX_VALUE / 3) Long.MAX_VALUE else target * 3
      MessageUtil.error(sender, "生成ブロック数が上限 ($maxBlocks) を超えています: $estimate")
      return true
    }
    val seed = natural?.seed ?: Random.nextLong()
    val random = Random(seed)
    val figures =
        try {
          if (legacy != null) gridFigures(bounds, rightAxis, depthAxis, legacy, sender.facing)
          else {
            val options = natural!!.copy(width = width, depth = depth)
            generateNaturalCrowd(options).let { result ->
              result.people.map { person ->
                val point = blockAt(bounds, rightAxis, person.x, depthAxis, person.z)
                val dx = cos(person.yaw) * rightAxis.x + sin(person.yaw) * depthAxis.x
                val dz = cos(person.yaw) * rightAxis.z + sin(person.yaw) * depthAxis.z
                Figure(point.x, point.z, nearestFace(dx, dz, HEAD_FACES))
              } to result.groups
            }
          }
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(sender, e.message ?: "群衆配置の計算に失敗しました。")
          return true
        }
    val headMaterial = legacy?.headMaterial ?: configuredHeadMaterial() ?: Material.PLAYER_HEAD
    val profiles = if (headMaterial == Material.PLAYER_HEAD) heads.profiles() else emptyList()
    val placements = ArrayList<CrowdPlacement>(figures.first.size * 3)
    val skulls = ArrayList<SkullPlacement>()
    for (figure in figures.first) {
      val torso = legacy?.wallMaterial ?: torsoWalls.random(random)
      val legs = legacy?.wallMaterial ?: legWalls.random(random)
      placements += CrowdPlacement(figure.x, bodyY, figure.z, footData(legs))
      placements += CrowdPlacement(figure.x, bodyY + 1, figure.z, torsoData(torso, figure.facing))
      placements +=
          CrowdPlacement(figure.x, bodyY + 2, figure.z, headData(headMaterial, figure.facing))
      if (profiles.isNotEmpty())
          skulls += SkullPlacement(figure.x, bodyY + 2, figure.z, profiles.random(random))
    }
    val undoRecorded =
        try {
          CsmEditSession.run(sender, plugin.logger) { editSession ->
                for (placement in placements) {
                  editSession.setBlock(
                      BlockVector3.at(placement.x, placement.y, placement.z),
                      BukkitAdapter.adapt(placement.data),
                  )
                }
                placements.isNotEmpty()
              }
              .undoRecorded
        } catch (e: Exception) {
          MessageUtil.error(sender, "群衆生成に失敗しました: ${e.message}")
          return true
        }
    // CsmEditSession.run completes commit before returning; tile states must be written afterward.
    var failedHeads = 0
    for (placement in skulls) {
      val applied =
          runCatching {
                val state =
                    sender.world.getBlockAt(placement.x, placement.y, placement.z).state as? Skull
                if (state == null) false
                else {
                  state.setPlayerProfile(placement.profile)
                  state.update(true, false)
                }
              }
              .onFailure { plugin.logger.warning("群衆の頭スキンを適用できませんでした: ${it.message}") }
              .getOrDefault(false)
      if (!applied) failedHeads++
    }
    MessageUtil.success(
        sender,
        "群衆を生成しました: ${figures.first.size}人 / ${figures.second}グループ / seed=$seed",
    )
    if (failedHeads > 0) MessageUtil.warn(sender, "頭のスキンを $failedHeads 個適用できませんでした。")
    if (undoRecorded) MessageUtil.info(sender, "FAWE の //undo でこの群衆生成を取り消せます。")
    else MessageUtil.warn(sender, "群衆生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    if (args.isEmpty()) return emptyList()
    if (args[0].equals("heads", true)) {
      if (!plugin.access.canUse(sender, CommandKey.CROWD_HEADS)) return emptyList()
      return when (args.size) {
        2 -> listOf("add", "remove", "list").filter { it.startsWith(args[1], true) }
        else -> emptyList()
      }
    }
    if (!plugin.access.canUse(sender, CommandKey.CROWD)) return emptyList()
    val current = args.last()
    val grid = args.firstOrNull()?.let { parseCounts(it) }
    if (grid != null) {
      val suggestions =
          when (args.size) {
            2 -> listOf("1", "2", "3")
            3 -> wallSuggestions(current)
            4 -> headSuggestions(current)
            else -> emptyList()
          }
      return ArgSuggest.filterSuggestions(suggestions, current)
    }
    val suggestions =
        if (args.size == 1)
            listOf(
                "density=0.12",
                "group=1",
                "stand=25",
                "noise=0.6",
                "scale=14",
                "gap=1",
                "right=50",
                "jitter=15",
                "seed=42",
                "8",
                "10x3",
                "heads",
                "help",
            )
        else
            NATURAL_KEYS.filter { key -> args.none { it.startsWith("$key=", true) } }.map { "$it=" }
    return ArgSuggest.filterSuggestions(suggestions, current)
  }

  private fun handleHeads(sender: CommandSender, label: String, args: List<String>) {
    if (!plugin.access.require(sender, CommandKey.CROWD_HEADS)) return
    when (args.firstOrNull()?.lowercase()) {
      "list" -> if (args.size == 1) heads.list(sender) else headsUsage(sender, label)
      "add" -> if (args.size == 2) heads.add(sender, args[1]) else headsUsage(sender, label)
      "remove" -> if (args.size == 2) heads.remove(sender, args[1]) else headsUsage(sender, label)
      else -> headsUsage(sender, label)
    }
  }

  private fun headsUsage(sender: CommandSender, label: String) =
      MessageUtil.info(sender, "使い方: /$label heads <add MCID|remove MCID|list>")

  private fun parseNatural(sender: CommandSender, args: Array<String>): NaturalCrowdOptions? {
    val values = mutableMapOf<String, String>()
    for (arg in args) {
      val parts = arg.split('=', limit = 2)
      if (
          parts.size != 2 ||
              parts[0] !in NATURAL_KEYS ||
              parts[1].isBlank() ||
              values.putIfAbsent(parts[0], parts[1]) != null
      ) {
        MessageUtil.error(sender, "無効または重複した引数です: $arg")
        return null
      }
    }
    fun number(key: String, default: Double, min: Double, max: Double): Double? {
      val raw = values[key]
      val value =
          if (raw == null) plugin.config.getDouble("crowd.natural.$key", default)
          else raw.toDoubleOrNull()
      if (value == null || !value.isFinite() || value !in min..max) return null
      return value
    }
    val density = number("density", 0.12, 0.01, 1.0)
    val group = number("group", 1.0, 0.0, 3.0)
    val stand = number("stand", 25.0, 0.0, 100.0)
    val noise = number("noise", 0.6, 0.0, 1.0)
    val scale = number("scale", 14.0, 3.0, 48.0)
    val right = number("right", 50.0, 0.0, 100.0)
    val jitter = number("jitter", 15.0, 0.0, 90.0)
    val gap = (values["gap"] ?: plugin.config.getString("crowd.natural.gap", "1"))?.toIntOrNull()
    val seed =
        values["seed"]?.toLongOrNull()
            ?: if (values.containsKey("seed")) null else Random.nextLong()
    if (
        listOf(density, group, stand, noise, scale, right, jitter).any { it == null } ||
            gap !in 0..4 ||
            seed == null
    ) {
      MessageUtil.error(sender, "引数が範囲外です。/csm crowd help で範囲を確認してください。")
      return null
    }
    return NaturalCrowdOptions(
        1,
        1,
        density!!,
        group!!,
        stand!!,
        noise!!,
        scale!!,
        gap!!,
        right!!,
        jitter!!,
        seed,
    )
  }

  private fun parseGrid(
      sender: CommandSender,
      label: String,
      args: Array<String>,
      counts: CrowdCounts,
  ): GridArgs? {
    var index = 1
    var gap = plugin.config.getInt("crowd.default-gap", 2)
    args.getOrNull(index)?.toIntOrNull()?.let {
      gap = it
      index++
    }
    if (gap < 0) {
      MessageUtil.error(sender, "間隔は0以上で指定してください。")
      return null
    }
    val wall =
        args.getOrNull(index)?.let { raw ->
          wallMaterialFromArg(raw)
              ?: run {
                MessageUtil.error(sender, "Wallブロック素材を指定してください: $raw")
                return null
              }
        }
    if (wall != null) index++
    val head =
        args.getOrNull(index)?.let { raw ->
          headMaterialFromArg(raw)
              ?: run {
                MessageUtil.error(sender, "頭部に使える head/skull ブロックを指定してください: $raw")
                return null
              }
        }
    if (head != null) index++
    if (index < args.size) {
      MessageUtil.error(sender, "使い方: /$label <人数|左右x奥行> [間隔] [壁材] [頭部材]")
      return null
    }
    return GridArgs(counts, gap, wall, head)
  }

  private fun gridFigures(
      bounds: CuboidBounds,
      rightAxis: HorizontalUnit,
      depthAxis: HorizontalUnit,
      args: GridArgs,
      facing: BlockFace,
  ): Pair<List<Figure>, Int> {
    val width = lengthAlong(bounds, rightAxis)
    val depth = lengthAlong(bounds, depthAxis)
    val xs = centeredStarts(args.counts.lateral, args.gap, width, "左右")
    val zs =
        args.counts.depth?.let { centeredStarts(it, args.gap, depth, "奥行き") }
            ?: listOf((depth - 1) / 2)
    val figures =
        xs.flatMap { x ->
          zs.map { z ->
            blockAt(bounds, rightAxis, x, depthAxis, z).let { Figure(it.x, it.z, facing) }
          }
        }
    return figures to figures.size
  }

  private fun centeredStarts(count: Int, gap: Int, length: Int, label: String): List<Int> {
    val stride = gap.toLong() + 1
    val needed = 1L + (count - 1).toLong() * stride
    require(needed <= length) { "${label}方向の選択幅が不足しています: required=$needed selected=$length" }
    val start = ((length - needed) / 2).toInt()
    return (0 until count).map { (start + it * stride).toInt() }
  }

  private fun footData(material: Material): BlockData =
      (material.createBlockData() as Wall).apply {
        isUp = true
        for (face in CARDINAL_FACES) setHeight(face, Wall.Height.NONE)
      }

  private fun torsoData(material: Material, facing: BlockFace): BlockData =
      (material.createBlockData() as Wall).apply {
        isUp = true
        val cardinal = nearestFace(facing.modX.toDouble(), facing.modZ.toDouble(), CARDINAL_FACES)
        val axis = horizontalUnit(cardinal)
        for (face in CARDINAL_FACES) {
          val side = horizontalUnit(face)
          setHeight(
              face,
              if (axis.x * side.x + axis.z * side.z == 0) Wall.Height.LOW else Wall.Height.NONE,
          )
        }
      }

  private fun headData(material: Material, facing: BlockFace): BlockData =
      (material.createBlockData() as Rotatable).apply { rotation = facing }

  private fun nearestFace(x: Double, z: Double, faces: List<BlockFace>): BlockFace =
      faces.maxBy { face ->
        val length = kotlin.math.sqrt((face.modX * face.modX + face.modZ * face.modZ).toDouble())
        (x * face.modX + z * face.modZ) / length
      }

  private fun parseCounts(raw: String): CrowdCounts? {
    val parts = raw.lowercase().replace("×", "x").replace("*", "x").replace(",", "x").split("x")
    if (parts.size !in 1..2) return null
    val width = parts[0].toIntOrNull() ?: return null
    val depth = parts.getOrNull(1)?.toIntOrNull()
    if (width <= 0 || depth != null && depth <= 0) return null
    return CrowdCounts(width, depth)
  }

  private fun loadWalls(path: String, defaults: List<String>): List<Material> {
    val names = plugin.config.getStringList(path).ifEmpty { defaults }
    val walls =
        names.mapNotNull { raw ->
          wallMaterialFromArg(raw)
              ?: run {
                plugin.logger.warning("$path に不正な壁素材があります: $raw")
                null
              }
        }
    return walls.ifEmpty { defaults.mapNotNull(::wallMaterialFromArg) }
  }

  private fun configuredHeadMaterial(): Material? =
      plugin.config.getString("crowd.head")?.let(::headMaterialFromArg)

  private fun wallMaterialFromArg(raw: String): Material? {
    val name = raw.trim().lowercase().removePrefix("minecraft:")
    val candidates = if (name.endsWith("_wall")) listOf(name) else listOf("${name}_wall", name)
    return candidates.asSequence().mapNotNull(Material::matchMaterial).firstOrNull {
      it.isBlock && it.createBlockData() is Wall
    }
  }

  private fun headMaterialFromArg(raw: String): Material? {
    val name = raw.trim().lowercase().removePrefix("minecraft:")
    return listOf(
            name,
            "${name}_head",
            "${name}_skull",
            if (name == "player") "player_head" else name,
        )
        .asSequence()
        .mapNotNull(Material::matchMaterial)
        .firstOrNull { isHeadMaterial(it) && it.createBlockData() is Rotatable }
  }

  private fun isHeadMaterial(material: Material): Boolean =
      material.isBlock && (material.name.endsWith("_HEAD") || material.name.endsWith("_SKULL"))

  private fun wallSuggestions(prefix: String): List<String> =
      Material.values()
          .asSequence()
          .filter { it.isBlock && runCatching { it.createBlockData() is Wall }.getOrDefault(false) }
          .map { it.key.key }
          .filter { it.startsWith(prefix.lowercase()) }
          .take(20)
          .toList()

  private fun headSuggestions(prefix: String): List<String> =
      Material.values()
          .asSequence()
          .filter(::isHeadMaterial)
          .filter { runCatching { it.createBlockData() is Rotatable }.getOrDefault(false) }
          .map { it.key.key }
          .filter { it.startsWith(prefix.lowercase()) }
          .take(20)
          .toList()

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Crowd")
    MessageUtil.helpEntry(
        sender,
        "/$label [density=0.12] [group=1] [stand=25] [noise=0.6] [scale=14]",
        "自然な群衆を生成",
    )
    MessageUtil.helpEntry(
        sender,
        "/$label [gap=1] [right=50] [jitter=15] [seed=数値]",
        "配置の間隔・向き・乱数を指定",
    )
    MessageUtil.helpEntry(sender, "/$label 8|10x3 [間隔] [壁材] [頭部材]", "従来の格子配置")
    if (plugin.access.canUse(sender, CommandKey.CROWD_HEADS)) headsUsage(sender, label)
    MessageUtil.info(
        sender,
        "density 0.01–1, group 0–3, stand/right 0–100, noise 0–1, scale 3–48, gap 0–4, jitter 0–90。取り消しは //undo。",
    )
  }

  fun sendHelp(sender: CommandSender, label: String) = showHelp(sender, label.removePrefix("/"))

  private data class CrowdCounts(val lateral: Int, val depth: Int?) {
    fun figureCount(): Long = lateral.toLong() * (depth ?: 1)
  }

  private data class GridArgs(
      val counts: CrowdCounts,
      val gap: Int,
      val wallMaterial: Material?,
      val headMaterial: Material?,
  )

  private data class Figure(val x: Int, val z: Int, val facing: BlockFace)

  private data class CrowdPlacement(val x: Int, val y: Int, val z: Int, val data: BlockData)

  private data class SkullPlacement(val x: Int, val y: Int, val z: Int, val profile: PlayerProfile)

  companion object {
    private val NATURAL_KEYS =
        listOf("density", "group", "stand", "noise", "scale", "gap", "right", "jitter", "seed")
    private val CARDINAL_FACES =
        listOf(BlockFace.NORTH, BlockFace.EAST, BlockFace.SOUTH, BlockFace.WEST)
    private val HEAD_FACES =
        listOf(
            BlockFace.NORTH,
            BlockFace.NORTH_NORTH_EAST,
            BlockFace.NORTH_EAST,
            BlockFace.EAST_NORTH_EAST,
            BlockFace.EAST,
            BlockFace.EAST_SOUTH_EAST,
            BlockFace.SOUTH_EAST,
            BlockFace.SOUTH_SOUTH_EAST,
            BlockFace.SOUTH,
            BlockFace.SOUTH_SOUTH_WEST,
            BlockFace.SOUTH_WEST,
            BlockFace.WEST_SOUTH_WEST,
            BlockFace.WEST,
            BlockFace.WEST_NORTH_WEST,
            BlockFace.NORTH_WEST,
            BlockFace.NORTH_NORTH_WEST,
        )
  }
}
