package icu.oyasai.citiesskymine.schematic

import com.fastasyncworldedit.core.configuration.Settings
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.extent.clipboard.io.ClipboardFormats
import com.sk89q.worldedit.function.operation.Operations
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.math.transform.AffineTransform
import com.sk89q.worldedit.regions.selector.CuboidRegionSelector
import com.sk89q.worldedit.session.ClipboardHolder
import icu.oyasai.citiesskymine.Main
import icu.oyasai.citiesskymine.access.CsmAccessController.CommandKey
import icu.oyasai.citiesskymine.util.MessageUtil
import icu.oyasai.citiesskymine.worldedit.CsmEditSession
import java.io.File
import java.io.FileInputStream
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import kotlin.math.roundToInt
import org.bukkit.World
import org.bukkit.block.BlockFace
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class SchematicCommand(private val plugin: Main) : CommandExecutor, TabCompleter {
  private val activePastes = ConcurrentHashMap.newKeySet<UUID>()

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
    if (!plugin.access.require(sender, CommandKey.SCHEMATIC)) return true

    val first = args.getOrNull(0)
    when (first?.lowercase()) {
      null,
      "help" -> sendHelp(sender, "/$label")
      "list" -> listSchematics(sender)
      "reload" -> reloadSchematics(sender)
      else -> paste(sender, first, args.drop(1))
    }
    return true
  }

  fun sendHelp(sender: CommandSender, base: String) {
    MessageUtil.header(sender, "Schematic")
    MessageUtil.helpEntry(
        sender,
        "$base <name> [-a]",
        "スキマティックを読み込んで貼り付け",
    )
    MessageUtil.helpEntry(sender, "$base list", "FAWE の //schem list を実行")
    MessageUtil.helpEntry(sender, "$base reload", "スキマティック保存先を確認")
    MessageUtil.helpEntry(sender, "//undo", "直前の貼り付けをFAWEで取り消し")
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<String>,
  ): List<String> {
    return when (args.size) {
      1 ->
          (listOf("list", "reload", "help") +
                  ((sender as? Player)?.let { schematicIds(it) }.orEmpty()))
              .filter { it.startsWith(args[0], ignoreCase = true) }
      2 ->
          if (
              args[0].equals("list", ignoreCase = true) ||
                  args[0].equals("reload", ignoreCase = true) ||
                  args[0].equals("help", ignoreCase = true)
          ) {
            emptyList()
          } else {
            optionSuggestions(emptyList(), args[1])
          }
      3 -> optionSuggestions(args.drop(1).dropLast(1), args[2])
      else -> emptyList()
    }
  }

  private fun paste(player: Player, rawId: String, optionArgs: List<String>) {
    val id =
        normalizeId(rawId)
            ?: run {
              MessageUtil.error(player, "スキマティック名は英数字、_、-、. の64文字以内で指定してください。")
              return
            }
    val file =
        resolveSchematicFile(player, id)
            ?: run {
              MessageUtil.error(player, "スキマティックが見つかりません: $id")
              MessageUtil.info(player, "保存先: ${schematicsDirectory(player).absolutePath}")
              return
            }
    val options =
        parseOptions(player, optionArgs)
            ?: run {
              MessageUtil.error(player, "指定できる引数は -a だけです。")
              MessageUtil.info(player, "使い方: /.sc <name> [-a]")
              return
            }
    val target = frontOrigin(player)
    val turns = yawTurns(player.location.yaw)
    val ignoreAir = options.ignoreAir
    val maxFileBytes = plugin.config.getLong("limits.max-schematic-file-bytes", 10L * 1024L * 1024L)
    val maxBlocks =
        plugin.config.getLong(
            "limits.max-blocks-schematic",
            plugin.config.getLong("limits.max-blocks-csm", 2_000_000L),
        )
    val maxVolume =
        plugin.config.getLong(
            "limits.max-volume-schematic",
            plugin.config.getLong("limits.max-blocks-schematic", 500_000L),
        )
    if (maxFileBytes > 0 && file.length() > maxFileBytes) {
      MessageUtil.error(player, "スキマティックファイルが上限 ($maxFileBytes bytes) を超えています: ${file.length()}")
      return
    }
    if (!activePastes.add(player.uniqueId)) {
      MessageUtil.warn(player, "このプレイヤーのスキマティック貼り付けが実行中です。完了後に再実行してください。")
      return
    }

    MessageUtil.info(player, "スキマティックを読み込み中: <white>${file.name}</white>")
    plugin.server.scheduler.runTaskAsynchronously(
        plugin,
        Runnable {
          val loaded =
              try {
                loadSchematic(file, target.origin, turns, ignoreAir, maxBlocks, maxVolume)
              } catch (e: Exception) {
                plugin.server.scheduler.runTask(
                    plugin,
                    Runnable {
                      activePastes.remove(player.uniqueId)
                      if (player.isOnline) {
                        MessageUtil.error(player, "スキマティックの読み込みに失敗しました: ${e.message}")
                      }
                    },
                )
                return@Runnable
              }
          plugin.server.scheduler.runTask(
              plugin,
              Runnable {
                if (!player.isOnline) {
                  loaded.clipboard.close()
                  activePastes.remove(player.uniqueId)
                  return@Runnable
                }
                plugin.server.scheduler.runTaskAsynchronously(
                    plugin,
                    Runnable {
                      val result =
                          try {
                            pasteLoaded(target.world, player, loaded, turns, ignoreAir)
                          } catch (e: Exception) {
                            plugin.server.scheduler.runTask(
                                plugin,
                                Runnable {
                                  activePastes.remove(player.uniqueId)
                                  if (player.isOnline) {
                                    MessageUtil.error(player, "貼り付けに失敗しました: ${e.message}")
                                  }
                                },
                            )
                            return@Runnable
                          }
                      plugin.server.scheduler.runTask(
                          plugin,
                          Runnable {
                            try {
                              finishPaste(
                                  player,
                                  target.world,
                                  id,
                                  loaded,
                                  turns,
                                  ignoreAir,
                                  result,
                              )
                            } finally {
                              activePastes.remove(player.uniqueId)
                            }
                          },
                      )
                    },
                )
              },
          )
        },
    )
  }

  private fun finishPaste(
      player: Player,
      world: World,
      id: String,
      loaded: LoadedSchematic,
      turns: Int,
      ignoreAir: Boolean,
      result: CsmEditSession.Result,
  ) {
    if (!player.isOnline) return
    val selectionApplied =
        if (plugin.config.getBoolean("schematic.select-after-paste", true)) {
          selectPastedRegion(player, world, loaded.bounds)
        } else {
          false
        }
    MessageUtil.success(
        player,
        "スキマティックを貼り付けました: $id / ${loaded.blockCount} blocks / ${turns * 90}°",
    )
    if (ignoreAir) {
      MessageUtil.info(player, "-a: air は無視しました。")
    }
    if (selectionApplied) {
      MessageUtil.info(player, "貼り付け範囲を WorldEdit 選択に設定しました。")
    }
    if (result.undoRecorded) {
      MessageUtil.info(player, "FAWE の //undo で取り消せます。")
    } else {
      MessageUtil.warn(player, "貼り付けは完了しましたが、FAWE undo 履歴への登録に失敗しました。")
    }
  }

  private fun listSchematics(player: Player) {
    if (!plugin.server.dispatchCommand(player, "schem list")) {
      MessageUtil.error(player, "FAWE の //schem list を実行できませんでした。")
    }
  }

  private fun reloadSchematics(player: Player) {
    val dir = schematicsDirectory(player)
    if (!dir.exists() && !dir.mkdirs()) {
      MessageUtil.error(player, "スキマティック保存先を作成できません: ${dir.absolutePath}")
      return
    }
    MessageUtil.success(player, "スキマティック保存先を確認しました: ${schematicIds(player).size} files")
    MessageUtil.info(player, dir.absolutePath)
  }

  private fun loadSchematic(
      file: File,
      origin: BlockVector3,
      turns: Int,
      ignoreAir: Boolean,
      maxBlocks: Long,
      maxVolume: Long,
  ): LoadedSchematic {
    val format = ClipboardFormats.findByFile(file) ?: error("対応フォーマット不明: ${file.name}")
    val clipboard = FileInputStream(file).use { input -> format.getReader(input).use { it.read() } }
    val volume = clipboardVolume(clipboard)
    if (maxVolume > 0 && volume > maxVolume) {
      clipboard.close()
      error("スキマティック範囲が上限 ($maxVolume) を超えています: $volume")
    }
    val count = countBlocks(clipboard, ignoreAir)
    if (maxBlocks > 0 && count > maxBlocks) {
      clipboard.close()
      error("貼り付けブロック数が上限 ($maxBlocks) を超えています: $count")
    }
    val bounds = transformedBounds(clipboard, origin, turns)
    return LoadedSchematic(clipboard, origin, count, bounds)
  }

  private fun pasteLoaded(
      world: World,
      player: Player,
      loaded: LoadedSchematic,
      turns: Int,
      ignoreAir: Boolean,
  ): CsmEditSession.Result =
      try {
        CsmEditSession.run(world, player, plugin.logger) { editSession ->
          ClipboardHolder(loaded.clipboard).use { holder ->
            val transform = rotationTransform(turns)
            if (!transform.isIdentity) {
              holder.setTransform(transform)
            }
            Operations.complete(
                holder
                    .createPaste(editSession)
                    .to(loaded.origin)
                    .ignoreAirBlocks(ignoreAir)
                    .copyEntities(false)
                    .copyBiomes(false)
                    .build(),
            )
          }
          true
        }
      } catch (e: Exception) {
        loaded.clipboard.close()
        throw e
      }

  private fun clipboardVolume(clipboard: Clipboard): Long {
    val dimensions = clipboard.dimensions
    return dimensions.x().toLong() * dimensions.y().toLong() * dimensions.z().toLong()
  }

  private fun countBlocks(clipboard: Clipboard, ignoreAir: Boolean): Long {
    var count = 0L
    for (pos in clipboard) {
      val state = clipboard.getBlock(pos)
      if (ignoreAir && state.blockType?.id() == "minecraft:air") continue
      count++
    }
    return count
  }

  private fun transformedBounds(
      clipboard: Clipboard,
      origin: BlockVector3,
      turns: Int,
  ): PasteBounds {
    val min = clipboard.minimumPoint
    val max = clipboard.maximumPoint
    val transform = rotationTransform(turns)
    var minX = Int.MAX_VALUE
    var minY = Int.MAX_VALUE
    var minZ = Int.MAX_VALUE
    var maxX = Int.MIN_VALUE
    var maxY = Int.MIN_VALUE
    var maxZ = Int.MIN_VALUE
    val corners =
        listOf(
            BlockVector3.at(min.x(), min.y(), min.z()),
            BlockVector3.at(min.x(), min.y(), max.z()),
            BlockVector3.at(min.x(), max.y(), min.z()),
            BlockVector3.at(min.x(), max.y(), max.z()),
            BlockVector3.at(max.x(), min.y(), min.z()),
            BlockVector3.at(max.x(), min.y(), max.z()),
            BlockVector3.at(max.x(), max.y(), min.z()),
            BlockVector3.at(max.x(), max.y(), max.z()),
        )
    for (corner in corners) {
      val relative = corner.subtract(clipboard.origin).toVector3()
      val placed = origin.toVector3().add(transform.apply(relative)).toBlockPoint()
      minX = minOf(minX, placed.x())
      minY = minOf(minY, placed.y())
      minZ = minOf(minZ, placed.z())
      maxX = maxOf(maxX, placed.x())
      maxY = maxOf(maxY, placed.y())
      maxZ = maxOf(maxZ, placed.z())
    }
    return PasteBounds(minX, minY, minZ, maxX, maxY, maxZ)
  }

  private fun selectPastedRegion(player: Player, world: World, bounds: PasteBounds): Boolean {
    return try {
      val actor = BukkitAdapter.adapt(player)
      val weWorld = BukkitAdapter.adapt(world)
      val selector =
          CuboidRegionSelector(
              weWorld,
              BlockVector3.at(bounds.minX, bounds.minY, bounds.minZ),
              BlockVector3.at(bounds.maxX, bounds.maxY, bounds.maxZ),
          )
      val session = WorldEdit.getInstance().sessionManager.get(actor)
      session.setRegionSelector(weWorld, selector)
      session.dispatchCUISelection(actor)
      true
    } catch (e: Exception) {
      MessageUtil.warn(player, "貼り付け範囲の選択に失敗しました: ${e.message}")
      false
    }
  }

  private fun parseOptions(player: Player, args: List<String>): PasteOptions? {
    var ignoreAir = false
    for (raw in args) {
      val value = raw.lowercase()
      when (value) {
        "-a" -> {
          if (ignoreAir) return null
          ignoreAir = true
        }
        else -> {
          MessageUtil.error(player, "不明な引数: $raw")
          return null
        }
      }
    }
    return PasteOptions(ignoreAir)
  }

  private fun optionSuggestions(previousArgs: List<String>, prefix: String): List<String> {
    if (previousArgs.any { it.equals("-a", ignoreCase = true) }) return emptyList()
    return listOf("-a").filter { it.startsWith(prefix, ignoreCase = true) }
  }

  private fun frontOrigin(player: Player): TargetOrigin {
    val base = player.location.block
    val face = yawFace(player.location.yaw)
    val origin =
        BlockVector3.at(
            base.x + face.modX,
            base.y,
            base.z + face.modZ,
        )
    return TargetOrigin(player.world, origin)
  }

  private fun normalizeId(raw: String): String? {
    val withoutExtension =
        when {
          raw.endsWith(".schematic", ignoreCase = true) -> raw.dropLast(".schematic".length)
          raw.endsWith(".schem", ignoreCase = true) -> raw.dropLast(".schem".length)
          else -> raw
        }
    if (!SCHEMATIC_ID.matches(withoutExtension)) return null
    return withoutExtension
  }

  private fun resolveSchematicFile(player: Player, id: String): File? {
    val dir = schematicsDirectory(player)
    val dirPath = dir.canonicalFile.toPath()
    return SCHEMATIC_EXTENSIONS.map { File(dir, "$id$it") }
        .firstOrNull { file -> file.isFile && file.canonicalFile.toPath().startsWith(dirPath) }
  }

  private fun schematicIds(player: Player): List<String> {
    val dir = schematicsDirectory(player)
    if (!dir.isDirectory) return emptyList()
    return dir.listFiles { file ->
          file.isFile && SCHEMATIC_EXTENSIONS.any { file.name.endsWith(it, ignoreCase = true) }
        }
        .orEmpty()
        .map { file ->
          SCHEMATIC_EXTENSIONS.firstOrNull { file.name.endsWith(it, ignoreCase = true) }
              ?.let { file.name.dropLast(it.length) } ?: file.name
        }
        .filter { SCHEMATIC_ID.matches(it) }
        .sorted()
  }

  private fun schematicsDirectory(player: Player): File {
    val worldEdit = WorldEdit.getInstance()
    val base =
        worldEdit.getWorkingDirectoryPath(worldEdit.configuration.saveDir).toFile().canonicalFile
    return if (Settings.settings().PATHS.PER_PLAYER_SCHEMATICS) {
      File(base, player.uniqueId.toString()).canonicalFile
    } else {
      base
    }
  }

  private fun rotationTransform(turns: Int): AffineTransform =
      if (turns.floorMod(4) == 0) AffineTransform()
      else AffineTransform().rotateY(turns.floorMod(4) * 90.0)

  private fun yawTurns(yaw: Float): Int = (yaw / 90.0f).roundToInt().floorMod(4)

  private fun yawFace(yaw: Float): BlockFace =
      when (yawTurns(yaw)) {
        0 -> BlockFace.SOUTH
        1 -> BlockFace.WEST
        2 -> BlockFace.NORTH
        else -> BlockFace.EAST
      }

  private fun Int.floorMod(divisor: Int): Int = Math.floorMod(this, divisor)

  private data class PasteOptions(val ignoreAir: Boolean)

  private data class TargetOrigin(val world: World, val origin: BlockVector3)

  private data class LoadedSchematic(
      val clipboard: Clipboard,
      val origin: BlockVector3,
      val blockCount: Long,
      val bounds: PasteBounds,
  )

  private data class PasteBounds(
      val minX: Int,
      val minY: Int,
      val minZ: Int,
      val maxX: Int,
      val maxY: Int,
      val maxZ: Int,
  )

  companion object {
    private val SCHEMATIC_ID = Regex("[A-Za-z0-9][A-Za-z0-9_.-]{0,63}")
    private val SCHEMATIC_EXTENSIONS = listOf(".schem", ".schematic")
  }
}
