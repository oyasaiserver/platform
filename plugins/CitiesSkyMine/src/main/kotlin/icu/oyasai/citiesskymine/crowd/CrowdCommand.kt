package icu.oyasai.citiesskymine.crowd

import com.destroystokyo.paper.profile.PlayerProfile
import com.sk89q.worldedit.EmptyClipboardException
import com.sk89q.worldedit.WorldEdit
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
import io.papermc.paper.datacomponent.item.ResolvableProfile
import kotlin.math.PI
import kotlin.math.atan2
import kotlin.math.cos
import kotlin.math.roundToInt
import kotlin.math.sin
import kotlin.random.Random
import net.kyori.adventure.text.Component
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.block.BlockFace
import org.bukkit.block.Skull
import org.bukkit.block.data.BlockData
import org.bukkit.block.data.Rotatable
import org.bukkit.block.data.type.Wall
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Mannequin
import org.bukkit.entity.Player
import org.bukkit.persistence.PersistentDataType
import org.bukkit.util.BoundingBox

class CrowdCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
  internal val heads = CrowdHeads(plugin)
  private val mannequinMarker = NamespacedKey(plugin, "crowd_mannequin")
  private val allWalls by lazy {
    Material.entries.filter { material ->
      !material.isLegacy && material.isBlock && material.createBlockData() is Wall
    }
  }
  private var torsoWalls = loadWalls("crowd.torso-walls")
  private var legWalls = loadWalls("crowd.leg-walls")

  fun reloadMaterials() {
    torsoWalls = loadWalls("crowd.torso-walls")
    legWalls = loadWalls("crowd.leg-walls")
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
    if (args.firstOrNull().equals("remove", true)) {
      if (args.size == 1) removeMannequins(sender)
      else MessageUtil.error(sender, "使い方: /$label remove")
      return true
    }
    if (args.firstOrNull().equals("help", true)) {
      showHelp(sender, label)
      return true
    }
    val request = parseNatural(sender, args) ?: return true
    val natural = request.options
    val region = selectedCuboid(sender, "群衆生成は cuboid 選択にだけ対応しています。") ?: return true
    val bounds = CuboidBounds.from(region)
    val bodyY = bounds.minY
    if (
        bodyY < sender.world.minHeight ||
            bodyY >= sender.world.maxHeight ||
            !request.mannequin && bodyY + 2 >= sender.world.maxHeight
    ) {
      MessageUtil.error(sender, "生成先Yがワールド範囲外です: body=$bodyY head=${bodyY + 2}")
      return true
    }
    val depthAxis = horizontalUnit(sender.facing)
    val rightAxis = HorizontalUnit(-depthAxis.z, depthAxis.x)
    val width = lengthAlong(bounds, rightAxis)
    val depth = lengthAlong(bounds, depthAxis)
    val requestedPeople = (natural.density * width.toLong() * depth).roundToInt()
    if (request.mannequin) {
      val max = plugin.config.getInt("crowd.max-mannequins", 300).coerceAtLeast(0)
      if (requestedPeople > max) {
        MessageUtil.error(sender, "マネキン数が上限 ($max) を超えています: $requestedPeople")
        return true
      }
    } else {
      val maxBlocks =
          plugin.config.getLong(
              "limits.max-blocks-crowd",
              plugin.config.getLong("limits.max-blocks-csm", 2_000_000),
          )
      if (maxBlocks > 0 && requestedPeople.toLong() > maxBlocks / 3) {
        MessageUtil.error(
            sender,
            "生成ブロック数が上限 ($maxBlocks) を超えています: ${requestedPeople.toLong() * 3}",
        )
        return true
      }
    }
    val seed = natural.seed
    val random = Random(seed)
    val crowd =
        try {
          generateNaturalCrowd(natural.copy(width = width, depth = depth))
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(sender, e.message ?: "群衆配置の計算に失敗しました。")
          return true
        }
    val figures =
        crowd.people.map { person ->
          val point = blockAt(bounds, rightAxis, person.x, depthAxis, person.z)
          val dx = cos(person.yaw) * rightAxis.x + sin(person.yaw) * depthAxis.x
          val dz = cos(person.yaw) * rightAxis.z + sin(person.yaw) * depthAxis.z
          Figure(
              point.x,
              point.z,
              (atan2(-dx, dz) * 180 / PI).toFloat(),
              nearestFace(dx, dz, HEAD_FACES),
          )
        }
    if (request.mannequin) {
      spawnMannequins(sender, figures, bodyY, crowd.groups, seed, random)
      return true
    }
    placeBlocks(sender, figures, bodyY, crowd.groups, seed, random)
    return true
  }

  private fun placeBlocks(
      player: Player,
      figures: List<Figure>,
      bodyY: Int,
      groups: Int,
      seed: Long,
      random: Random,
  ) {
    val profiles = heads.profiles()
    val placements = ArrayList<CrowdPlacement>(figures.size * 3)
    val skulls = ArrayList<SkullPlacement>()
    for (figure in figures) {
      val torso = torsoWalls.random(random)
      val legs = legWalls.random(random)
      placements += CrowdPlacement(figure.x, bodyY, figure.z, footData(legs))
      placements += CrowdPlacement(figure.x, bodyY + 1, figure.z, torsoData(torso, figure.facing))
      placements += CrowdPlacement(figure.x, bodyY + 2, figure.z, headData(figure.facing))
      if (profiles.isNotEmpty())
          skulls += SkullPlacement(figure.x, bodyY + 2, figure.z, profiles.random(random))
    }
    val undoRecorded =
        try {
          CsmEditSession.run(player, plugin.logger) { editSession ->
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
          MessageUtil.error(player, "群衆生成に失敗しました: ${e.message}")
          return
        }
    // CsmEditSession.run completes commit before returning; tile states must be written afterward.
    var failedHeads = 0
    for (placement in skulls) {
      val applied =
          runCatching {
                val state =
                    player.world.getBlockAt(placement.x, placement.y, placement.z).state as? Skull
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
        player,
        "群衆を生成しました: ${figures.size}人 / $groups グループ / seed=$seed",
    )
    if (failedHeads > 0) MessageUtil.warn(player, "頭のスキンを $failedHeads 個適用できませんでした。")
    if (undoRecorded) MessageUtil.info(player, "FAWE の //undo でこの群衆生成を取り消せます。")
    else MessageUtil.warn(player, "群衆生成は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
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
        2 -> listOf("add", "remove", "list", "import").filter { it.startsWith(args[1], true) }
        3 ->
            if (args[1].equals("import", true))
                listOf("selection", "clipboard").filter { it.startsWith(args[2], true) }
            else emptyList()
        else -> emptyList()
      }
    }
    if (!plugin.access.canUse(sender, CommandKey.CROWD)) return emptyList()
    val current = args.last()
    val suggestions =
        if (args.size == 1)
            listOf(
                "density=0.12",
                "group=0.6",
                "stand=50",
                "noise=0.6",
                "scale=14",
                "gap=1",
                "fb=0",
                "forward=50",
                "right=50",
                "jitter=15",
                "mode=block",
                "mode=mannequin",
                "seed=42",
                "remove",
                "heads",
                "help",
            )
        else if (current.startsWith("mode=", ignoreCase = true))
            listOf("mode=block", "mode=mannequin")
        else if (current.substringBefore('=') in listOf("fb", "forward", "right") && '=' in current)
            listOf(0, 50, 100).map { "${current.substringBefore('=')}=$it" }
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
      "import" -> {
        if (sender !is Player) MessageUtil.error(sender, "このコマンドはプレイヤーから実行してください。")
        else if (args.size > 2 || args.getOrNull(1) !in listOf(null, "selection", "clipboard"))
            headsUsage(sender, label)
        else importHeads(sender, args.getOrNull(1) ?: "selection")
      }
      else -> headsUsage(sender, label)
    }
  }

  private fun headsUsage(sender: CommandSender, label: String) =
      MessageUtil.info(
          sender,
          "使い方: /$label heads <add MCID|remove MCID|list|import [selection|clipboard]>",
      )

  private fun importHeads(player: Player, source: String) {
    val limit = plugin.config.getInt("crowd.heads.max-scan-blocks", 200_000).coerceAtLeast(1)
    val entries = ArrayList<HeadTexture>()
    val skipped =
        try {
          if (source == "selection") scanSelectedHeads(player, limit, entries)
          else scanClipboardHeads(player, limit, entries)
        } catch (e: Exception) {
          MessageUtil.error(player, "頭の走査に失敗しました: ${e.message}")
          return
        } ?: return
    heads.importHeads(player, entries, skipped)
  }

  private fun scanSelectedHeads(
      player: Player,
      limit: Int,
      entries: MutableList<HeadTexture>,
  ): Int? {
    val region = selectedCuboid(player, "頭の取り込みは cuboid 選択にだけ対応しています。") ?: return null
    if (region.volume > limit) {
      MessageUtil.error(player, "走査範囲が上限 ($limit ブロック) を超えています。")
      return null
    }
    val bounds = CuboidBounds.from(region)
    var skipped = 0
    for (x in bounds.minX..bounds.maxX) for (y in bounds.minY..bounds.maxY) for (z in
        bounds.minZ..bounds.maxZ) {
      val block = player.world.getBlockAt(x, y, z)
      if (block.type != Material.PLAYER_HEAD && block.type != Material.PLAYER_WALL_HEAD) continue
      val profile = (block.state as? Skull)?.playerProfile
      val texture =
          profile?.properties?.firstOrNull { it.name == "textures" && it.value.isNotBlank() }
      if (texture == null) skipped++
      else entries += HeadTexture(profile.id, profile.name, texture.value, texture.signature)
    }
    return skipped
  }

  private fun scanClipboardHeads(
      player: Player,
      limit: Int,
      entries: MutableList<HeadTexture>,
  ): Int? {
    val session = WorldEdit.getInstance().sessionManager.get(BukkitAdapter.adapt(player))
    val clipboard =
        try {
          session.clipboard.clipboard
        } catch (_: EmptyClipboardException) {
          MessageUtil.error(player, "WorldEdit のクリップボードが空です。")
          return null
        }
    if (clipboard.region.volume > limit) {
      MessageUtil.error(player, "走査範囲が上限 ($limit ブロック) を超えています。")
      return null
    }
    var skipped = 0
    for (pos in clipboard) {
      val block = clipboard.getFullBlock(pos)
      if (block.blockType.id() !in listOf("minecraft:player_head", "minecraft:player_wall_head"))
          continue
      val head = headTextureFromNbt(block.nbtData)
      if (head == null) skipped++ else entries += head
    }
    return skipped
  }

  private fun parseNatural(sender: CommandSender, args: Array<String>): NaturalArgs? {
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
    val group = number("group", 0.6, 0.0, 3.0)
    val stand = number("stand", 50.0, 0.0, 100.0)
    val noise = number("noise", 0.6, 0.0, 1.0)
    val scale = number("scale", 14.0, 3.0, 48.0)
    val fb = number("fb", 0.0, 0.0, 100.0)
    val forward = number("forward", 50.0, 0.0, 100.0)
    val right = number("right", 50.0, 0.0, 100.0)
    val jitter = number("jitter", 15.0, 0.0, 90.0)
    val gap = (values["gap"] ?: plugin.config.getString("crowd.natural.gap", "1"))?.toIntOrNull()
    val mode = values["mode"] ?: plugin.config.getString("crowd.natural.mode", "block")
    val seed =
        values["seed"]?.toLongOrNull()
            ?: if (values.containsKey("seed")) null else Random.nextLong()
    if (
        listOf(density, group, stand, noise, scale, fb, forward, right, jitter).any {
          it == null
        } || gap !in 0..4 || mode !in listOf("block", "mannequin") || seed == null
    ) {
      MessageUtil.error(sender, "引数が範囲外です。/csm crowd help で範囲を確認してください。")
      return null
    }
    val options =
        NaturalCrowdOptions(
            1,
            1,
            density!!,
            group!!,
            stand!!,
            noise!!,
            scale!!,
            gap!!,
            fb!!,
            forward!!,
            right!!,
            jitter!!,
            seed,
        )
    return NaturalArgs(options, mode == "mannequin")
  }

  private fun spawnMannequins(
      player: Player,
      figures: List<Figure>,
      y: Int,
      groups: Int,
      seed: Long,
      random: Random,
  ) {
    val profiles = heads.profiles()
    val spawned = ArrayList<Mannequin>(figures.size)
    try {
      for (figure in figures) {
        val location =
            Location(player.world, figure.x + 0.5, y.toDouble(), figure.z + 0.5, figure.yaw, 0f)
        val profile = profiles.randomOrNull(random)?.let(ResolvableProfile::resolvableProfile)
        spawned +=
            player.world.spawn(location, Mannequin::class.java) { mannequin ->
              mannequin.setRotation(figure.yaw, 0f)
              mannequin.setBodyYaw(figure.yaw)
              mannequin.setGravity(false)
              mannequin.setImmovable(true)
              mannequin.setCustomNameVisible(false)
              mannequin.setDescription(Component.empty())
              if (profile != null) mannequin.setProfile(profile)
              mannequin.persistentDataContainer.set(
                  mannequinMarker,
                  PersistentDataType.BYTE,
                  1.toByte(),
              )
            }
      }
    } catch (e: Exception) {
      spawned.forEach { it.remove() }
      MessageUtil.error(player, "マネキン生成に失敗しました: ${e.message}")
      return
    }
    MessageUtil.success(
        player,
        "群衆を生成しました: ${figures.size}人 / $groups グループ / seed=$seed。マネキンは //undo では消えません。/csm crowd remove で削除できます。",
    )
  }

  private fun removeMannequins(player: Player) {
    val region = selectedCuboid(player, "群衆の削除は cuboid 選択にだけ対応しています。") ?: return
    val bounds = CuboidBounds.from(region)
    val box =
        BoundingBox(
            bounds.minX.toDouble(),
            bounds.minY.toDouble(),
            bounds.minZ.toDouble(),
            bounds.maxX + 1.0,
            bounds.maxY + 1.0,
            bounds.maxZ + 1.0,
        )
    var removed = 0
    try {
      for (entity in player.world.getNearbyEntities(box)) {
        if (
            entity !is Mannequin ||
                !entity.persistentDataContainer.has(mannequinMarker, PersistentDataType.BYTE)
        )
            continue
        val location = entity.location
        if (
            location.blockX !in bounds.minX..bounds.maxX ||
                location.blockY !in bounds.minY..bounds.maxY ||
                location.blockZ !in bounds.minZ..bounds.maxZ
        )
            continue
        entity.remove()
        removed++
      }
    } catch (e: Exception) {
      MessageUtil.error(player, "マネキン削除中に失敗しました（削除済み $removed 体）: ${e.message}")
      return
    }
    MessageUtil.success(player, "選択範囲内の群衆マネキンを $removed 体削除しました。")
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

  private fun headData(facing: BlockFace): BlockData =
      (Material.PLAYER_HEAD.createBlockData() as Rotatable).apply { rotation = facing.oppositeFace }

  private fun nearestFace(x: Double, z: Double, faces: List<BlockFace>): BlockFace =
      faces.maxBy { face ->
        val length = kotlin.math.sqrt((face.modX * face.modX + face.modZ * face.modZ).toDouble())
        (x * face.modX + z * face.modZ) / length
      }

  private fun loadWalls(path: String): List<Material> {
    val names = plugin.config.getStringList(path)
    if (names.isEmpty()) return allWalls
    val walls =
        names.mapNotNull { raw ->
          Material.matchMaterial(raw)?.takeIf { it.isBlock && it.createBlockData() is Wall }
              ?: run {
                plugin.logger.warning("$path に不正な壁素材があります: $raw")
                null
              }
        }
    return walls.ifEmpty { allWalls }
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Crowd")
    MessageUtil.helpEntry(
        sender,
        "/$label [density=0.12] [group=0.6] [stand=50] [noise=0.6] [scale=14]",
        "自然な群衆を生成",
    )
    MessageUtil.helpEntry(
        sender,
        "/$label [gap=1] [fb=0] [forward=50] [right=50] [jitter=15] [seed=数値] [mode=block|mannequin]",
        "配置の間隔・向き・乱数を指定",
    )
    MessageUtil.helpEntry(sender, "/$label remove", "選択範囲内の生成済みマネキンを削除")
    if (plugin.access.canUse(sender, CommandKey.CROWD_HEADS)) headsUsage(sender, label)
    MessageUtil.info(
        sender,
        "density 0.01–1, group 0–3, stand/fb/forward/right 0–100, noise 0–1, scale 3–48, gap 0–4, jitter 0–90。fb は前後組、forward はその前向き、right は左右組の右向きの割合。ブロックは //undo、マネキンは remove。",
    )
  }

  fun sendHelp(sender: CommandSender, label: String) = showHelp(sender, label.removePrefix("/"))

  private data class NaturalArgs(val options: NaturalCrowdOptions, val mannequin: Boolean)

  private data class Figure(val x: Int, val z: Int, val yaw: Float, val facing: BlockFace)

  private data class CrowdPlacement(val x: Int, val y: Int, val z: Int, val data: BlockData)

  private data class SkullPlacement(val x: Int, val y: Int, val z: Int, val profile: PlayerProfile)

  companion object {
    private val NATURAL_KEYS =
        listOf(
            "density",
            "group",
            "stand",
            "noise",
            "scale",
            "gap",
            "fb",
            "forward",
            "right",
            "jitter",
            "mode",
            "seed",
        )
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
