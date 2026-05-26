package icu.oyasai.citiesskymine.facade

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.extent.clipboard.Clipboard
import com.sk89q.worldedit.extent.clipboard.io.ClipboardFormats
import com.sk89q.worldedit.math.BlockVector3
import java.io.File
import java.io.FileInputStream
import org.bukkit.block.BlockFace
import org.bukkit.entity.Player

// ---------------------------------------------------------------------------
// Asset definitions — derived from Python analysis of fasard.schem
// ---------------------------------------------------------------------------

/** Schematic-space constants for fasard.schem (W=131, H=39, L=36, offset=[0,0,-37]) */
private object A {
  const val OFF_Z = -37 // schematic Z offset
  const val FACE_LZ = 33 // local Z of front facade face
  const val DZ_FRONT = -2 // outermost decoration (balcony rail etc.)
  const val DZ_BACK = 20 // back wall (local Z = FACE_LZ - 20 = 13)
  const val Y0 = 0
  const val Y1 = 30

  /** Patterns: id, display name, bayX0, bayWidth, maxAvailBays */
  val PATTERNS =
      listOf(
          // Regular narrow bay (window×2 + pilaster×1) — clean section lx=21..80
          Pattern("regular", "レギュラー(3幅)", 21, 3, 20),
          // Wide bay (window×2 + pilaster×2) — right section lx=93..108
          Pattern("wide", "ワイド(4幅)", 93, 4, 4),
          // Ground floor detail from left section (4-wide tall window)
          Pattern("grand", "グランド(4幅左)", 0, 4, 5),
      )

  data class Pattern(
      val id: String,
      val displayName: String,
      val bayX0: Int,
      val bayWidth: Int,
      val maxAvailBays: Int,
  )
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

object SchematicFacadeGenerator {

  private var cache: Pair<String, Clipboard>? = null

  val patternIds: List<String>
    get() = A.PATTERNS.map { it.id }

  // ── generate: tile N bays from the selected pattern ──────────────────

  fun generateInto(
      player: Player,
      editSession: EditSession,
      schemFile: File,
      bays: Int,
      patternId: String,
  ): Boolean {
    val pat = A.PATTERNS.firstOrNull { it.id == patternId } ?: A.PATTERNS[0]
    val clip = load(schemFile, player) ?: return false
    val (right, back, origin) = setup(player) ?: return false

    for (i in 0 until bays) {
      val srcX0 = pat.bayX0 + (i % pat.maxAvailBays) * pat.bayWidth
      pasteSlab(
          clip,
          editSession,
          origin,
          right,
          back,
          srcX0,
          srcX0 + pat.bayWidth - 1,
          A.Y0,
          A.Y1,
          A.DZ_FRONT,
          A.DZ_BACK,
          worldX = i * pat.bayWidth,
      )
    }

    return true
  }

  // ── pasteFull: paste the whole schematic once ─────────────────────────

  fun pasteFullInto(player: Player, editSession: EditSession, schemFile: File): Boolean {
    val clip = load(schemFile, player) ?: return false
    val (right, back, origin) = setup(player) ?: return false

    pasteSlab(
        clip,
        editSession,
        origin,
        right,
        back,
        0,
        130,
        A.Y0,
        38,
        A.DZ_FRONT,
        A.DZ_BACK,
        worldX = 0,
    )

    return true
  }

  // ── internals ─────────────────────────────────────────────────────────

  private data class SetupResult(
      val right: BlockVector3,
      val back: BlockVector3,
      val origin: BlockVector3,
  )

  private fun setup(player: Player): SetupResult? {
    val hit =
        player.rayTraceBlocks(20.0)
            ?: run {
              player.sendMessage("§cブロックを見てください")
              return null
            }
    val block =
        hit.hitBlock
            ?: run {
              player.sendMessage("§cブロックなし")
              return null
            }
    val face = hit.hitBlockFace ?: BlockFace.SOUTH
    val (right, back) = faceVectors(face)
    val origin = BlockVector3.at(block.x, block.y, block.z)
    return SetupResult(right, back, origin)
  }

  @Suppress("DEPRECATION")
  private fun pasteSlab(
      clip: Clipboard,
      es: EditSession,
      origin: BlockVector3,
      right: BlockVector3,
      back: BlockVector3,
      srcX0: Int,
      srcX1: Int,
      srcY0: Int,
      srcY1: Int,
      dzMin: Int,
      dzMax: Int, // dzMin<0 = in front of wall, dzMax>0 = behind
      worldX: Int, // X offset in world (bay index × bayWidth)
  ) {
    for (srcX in srcX0..srcX1) {
      val bx = worldX + (srcX - srcX0)
      for (srcY in srcY0..srcY1) {
        for (dz in dzMin..dzMax) {
          val lz = A.FACE_LZ - dz // local Z in schematic
          val clipPos = BlockVector3.at(srcX, srcY, lz + A.OFF_Z)
          val state =
              try {
                clip.getBlock(clipPos)
              } catch (_: Exception) {
                continue
              }
          val id = state.blockType?.id() ?: continue
          if (id == "minecraft:air" || id == "minecraft:__reserved__") continue

          val wx = origin.x() + right.x() * bx + back.x() * dz
          val wy = origin.y() + srcY
          val wz = origin.z() + right.z() * bx + back.z() * dz

          es.setBlock(BlockVector3.at(wx, wy, wz), state)
        }
      }
    }
  }

  private fun load(file: File, player: Player): Clipboard? {
    cache?.let { (k, c) -> if (k == file.absolutePath) return c }
    val fmt =
        ClipboardFormats.findByFile(file)
            ?: run {
              player.sendMessage("§c対応フォーマット不明: ${file.name}")
              return null
            }
    return try {
      val c = FileInputStream(file).use { fmt.getReader(it).read() }
      cache = Pair(file.absolutePath, c)
      player.sendMessage("§7スキマティック読み込み: ${file.name}")
      c
    } catch (e: Exception) {
      player.sendMessage("§c読み込みエラー: ${e.message}")
      null
    }
  }

  private fun faceVectors(face: BlockFace): Pair<BlockVector3, BlockVector3> =
      when (face) {
        BlockFace.SOUTH -> Pair(BlockVector3.at(1, 0, 0), BlockVector3.at(0, 0, -1))
        BlockFace.NORTH -> Pair(BlockVector3.at(-1, 0, 0), BlockVector3.at(0, 0, 1))
        BlockFace.EAST -> Pair(BlockVector3.at(0, 0, -1), BlockVector3.at(-1, 0, 0))
        BlockFace.WEST -> Pair(BlockVector3.at(0, 0, 1), BlockVector3.at(1, 0, 0))
        else -> Pair(BlockVector3.at(1, 0, 0), BlockVector3.at(0, 0, -1))
      }
}
