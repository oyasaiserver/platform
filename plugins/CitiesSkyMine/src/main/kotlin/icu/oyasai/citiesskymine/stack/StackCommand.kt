package icu.oyasai.citiesskymine.stack

import com.sk89q.worldedit.IncompleteRegionException
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.regions.CuboidRegion
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.shared.ArgSuggest
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import kotlin.math.roundToInt
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class StackCommand(private val plugin: Main) : CommandExecutor, TabCompleter {

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
    if (!plugin.access.require(sender, CommandKey.STACK)) return true

    if (args.isEmpty() || args[0].equals("help", ignoreCase = true)) {
      showHelp(sender, label)
      return true
    }

    val parsed = parseArgs(sender, args) ?: return true
    val region = selectedCuboid(sender) ?: return true
    val offset =
        try {
          computeOffset(sender, region, parsed.directions)
        } catch (e: IllegalArgumentException) {
          MessageUtil.error(sender, e.message ?: "方向指定が無効です。")
          return true
        }
    if (offset.x == 0 && offset.y == 0 && offset.z == 0) {
      MessageUtil.error(sender, "移動量が0です。方向を指定してください。")
      return true
    }

    val estimatedBlocks = region.volume * parsed.times.toLong()
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-stack",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    if (maxBlocks > 0 && estimatedBlocks > maxBlocks) {
      MessageUtil.error(sender, "複製ブロック数が上限 ($maxBlocks) を超えています: $estimatedBlocks")
      return true
    }

    val copied =
        try {
          copySelection(sender, region, offset, parsed.times, parsed.skipIds)
        } catch (e: Exception) {
          MessageUtil.error(sender, "stack に失敗しました: ${e.message}")
          return true
        }

    MessageUtil.success(
        sender,
        "選択範囲を複製しました: ${copied.blocks} blocks / ${parsed.times} times / offset=${offset.x},${offset.y},${offset.z} / facing=${offset.facing.name.lowercase()}",
    )
    if (copied.undoRecorded) {
      MessageUtil.info(sender, "FAWE の //undo でこの複製を取り消せます。")
    } else {
      MessageUtil.warn(sender, "複製は完了しましたが、FAWE undo 履歴への登録に失敗しました。")
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
    val previousArgs = args.dropLast(1)
    val hasTimes = previousArgs.any { it.toIntOrNull() != null }
    val hasDirection = previousArgs.any { normalizeDirection(it) != null }
    val suggestions =
        if (hasTimes) {
          listOf("-a", "air", "water", "lava", "stone", "dirt", "grass_block")
        } else if (
            hasDirection && current.toIntOrNull() != null || (hasDirection && current.isEmpty())
        ) {
          ArgSuggest.positional("times", "1-100", listOf("2", "3", "5", "10"))
        } else {
          DIRECTION_SUGGESTIONS + listOf("help")
        }
    return ArgSuggest.filterSuggestions(suggestions, current)
  }

  private fun parseArgs(sender: CommandSender, args: Array<String>): ParsedStackArgs? {
    val directions = ArrayList<String>()
    var timesIndex = -1
    for (i in args.indices) {
      if (ArgSuggest.isPlaceholder(args[i])) {
        MessageUtil.error(sender, "無効な引数です。数値を入力してください: ${args[i]}")
        return null
      }
      if (args[i].toIntOrNull() != null) {
        timesIndex = i
        break
      }
      directions.add(args[i])
    }
    if (directions.isEmpty()) {
      MessageUtil.error(sender, "方向を指定してください。例: /csm stack forward 3")
      return null
    }
    if (timesIndex < 0) {
      MessageUtil.error(sender, "回数を指定してください。例: /csm stack forward up 5")
      return null
    }
    val times = args[timesIndex].toInt().coerceAtLeast(1)
    val skipIds = args.drop(timesIndex + 1).mapNotNull { normalizeSkipId(it) }.toSet()
    return ParsedStackArgs(directions, times, skipIds)
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
          MessageUtil.error(player, "stack は cuboid 選択にだけ対応しています。")
          null
        }
  }

  private fun computeOffset(
      player: Player,
      region: CuboidRegion,
      directions: List<String>,
  ): StackOffset {
    val facing = yawFace(player.location.yaw)
    val forward = horizontalUnit(facing)
    val left = HorizontalUnit(forward.z, -forward.x)
    val right = HorizontalUnit(-left.x, -left.z)
    var x = 0
    var y = 0
    var z = 0

    for (raw in directions) {
      val (token, extra) =
          parseDirectionToken(raw) ?: throw IllegalArgumentException("不明な方向です: $raw")
      // extra > 0: use the number as absolute offset; extra == 0: use region size
      when (token) {
        DirectionToken.FORWARD -> {
          val mag = if (extra > 0) extra else horizontalMagnitude(region, forward)
          x += forward.x * mag
          z += forward.z * mag
        }
        DirectionToken.BACK -> {
          val mag = if (extra > 0) extra else horizontalMagnitude(region, forward)
          x -= forward.x * mag
          z -= forward.z * mag
        }
        DirectionToken.LEFT -> {
          val mag = if (extra > 0) extra else horizontalMagnitude(region, left)
          x += left.x * mag
          z += left.z * mag
        }
        DirectionToken.RIGHT -> {
          val mag = if (extra > 0) extra else horizontalMagnitude(region, right)
          x += right.x * mag
          z += right.z * mag
        }
        DirectionToken.UP -> y += if (extra > 0) extra else region.height
        DirectionToken.DOWN -> y -= if (extra > 0) extra else region.height
      }
    }
    return StackOffset(x, y, z, facing)
  }

  // Parses "f", "forward", "f1", "u2", "forward3" etc.
  // Returns (DirectionToken, extraBlocks) or null if unrecognized.
  private fun parseDirectionToken(raw: String): Pair<DirectionToken, Int>? {
    val direct = normalizeDirection(raw)
    if (direct != null) return Pair(direct, 0)
    val firstDigit = raw.indexOfFirst { it.isDigit() }
    if (firstDigit <= 0) return null
    val dirPart = raw.substring(0, firstDigit)
    val extraPart = raw.substring(firstDigit)
    val dir = normalizeDirection(dirPart) ?: return null
    val extra = extraPart.toIntOrNull() ?: return null
    return Pair(dir, extra)
  }

  private fun copySelection(
      player: Player,
      region: CuboidRegion,
      offset: StackOffset,
      times: Int,
      skipIds: Set<String>,
  ): StackResult {
    val posA = region.pos1
    val posB = region.pos2
    val signX = signBy(posA.x(), posB.x())
    val signY = signBy(posA.y(), posB.y())
    val signZ = signBy(posA.z(), posB.z())
    var copied = 0L

    val result =
        CsmEditSession.run(player, plugin.logger) { editSession ->
          for (t in 1..times) {
            val base = posA.add(offset.x * t, offset.y * t, offset.z * t)
            for (i in 0 until region.width) {
              for (j in 0 until region.height) {
                for (k in 0 until region.length) {
                  val src = posA.add(signX * i, signY * j, signZ * k)
                  val dst = base.add(signX * i, signY * j, signZ * k)
                  if (skipIds.isNotEmpty()) {
                    val dstId = editSession.getBlock(dst).blockType.id().lowercase()
                    if (dstId in skipIds) continue
                  }
                  editSession.setBlock(dst, editSession.getFullBlock(src))
                  copied++
                }
              }
            }
          }
          copied > 0L
        }

    return StackResult(copied, result.undoRecorded)
  }

  private fun showHelp(sender: CommandSender, label: String) {
    MessageUtil.header(sender, "CSM Stack")
    MessageUtil.helpEntry(sender, "/$label forward 3", "見ている方向に選択範囲3回分を複製")
    MessageUtil.helpEntry(sender, "/$label right up 2", "右方向+上方向へ2回分を複製")
    MessageUtil.helpEntry(sender, "/$label f1 d2 5", "前1ブロック・下2ブロックの絶対オフセットで5回複製（斜めスタック）")
    MessageUtil.helpEntry(sender, "/$label f 4 -a", "短縮形。-a は空気を上書きしない")
    MessageUtil.helpEntry(sender, "//undo", "直前のstackをFAWEで取り消し")
  }

  private fun normalizeSkipId(raw: String): String? {
    val value = raw.trim()
    if (value.isEmpty()) return null
    if (value == "-a") return "minecraft:air"
    val clean = value.removePrefix("!").lowercase()
    val material = Material.matchMaterial(clean)
    return material?.key?.toString() ?: if (clean.contains(":")) clean else "minecraft:$clean"
  }

  private fun normalizeDirection(raw: String): DirectionToken? =
      when (raw.lowercase()) {
        "forward",
        "front",
        "f",
        "前",
        "前方" -> DirectionToken.FORWARD
        "back",
        "backward",
        "b",
        "後ろ",
        "後方" -> DirectionToken.BACK
        "left",
        "l",
        "左" -> DirectionToken.LEFT
        "right",
        "r",
        "右" -> DirectionToken.RIGHT
        "up",
        "u",
        "上" -> DirectionToken.UP
        "down",
        "d",
        "下" -> DirectionToken.DOWN
        else -> null
      }

  private fun yawFace(yaw: Float): BlockFace {
    return when (Math.floorMod((yaw / 90.0f).roundToInt(), 4)) {
      1 -> BlockFace.WEST
      2 -> BlockFace.NORTH
      3 -> BlockFace.EAST
      else -> BlockFace.SOUTH
    }
  }

  private fun horizontalUnit(face: BlockFace): HorizontalUnit =
      when (face) {
        BlockFace.NORTH -> HorizontalUnit(0, -1)
        BlockFace.EAST -> HorizontalUnit(1, 0)
        BlockFace.SOUTH -> HorizontalUnit(0, 1)
        BlockFace.WEST -> HorizontalUnit(-1, 0)
        else -> HorizontalUnit(0, 1)
      }

  private fun horizontalMagnitude(region: CuboidRegion, unit: HorizontalUnit): Int =
      when {
        unit.x != 0 -> region.width
        unit.z != 0 -> region.length
        else -> 0
      }

  private fun signBy(a: Int, b: Int): Int = if (a - b >= 0) -1 else 1

  private data class ParsedStackArgs(
      val directions: List<String>,
      val times: Int,
      val skipIds: Set<String>,
  )

  private data class HorizontalUnit(val x: Int, val z: Int)

  private data class StackOffset(val x: Int, val y: Int, val z: Int, val facing: BlockFace)

  private data class StackResult(val blocks: Long, val undoRecorded: Boolean)

  private enum class DirectionToken {
    FORWARD,
    BACK,
    LEFT,
    RIGHT,
    UP,
    DOWN,
  }

  companion object {
    private val DIRECTION_SUGGESTIONS =
        listOf("forward", "back", "left", "right", "up", "down", "f", "b", "l", "r", "u", "d")
  }
}
