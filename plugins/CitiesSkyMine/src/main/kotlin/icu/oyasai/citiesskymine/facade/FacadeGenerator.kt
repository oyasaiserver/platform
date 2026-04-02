package icu.oyasai.citiesskymine.facade

import com.sk89q.worldedit.EditSession
import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.math.BlockVector3
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.entity.Player

// ---------------------------------------------------------------------------
// Coordinate helper
// ---------------------------------------------------------------------------

private class FacadeCtx(
    val es: EditSession,
    val origin: BlockVector3,
    /** +1 unit along facade width (player's right when facing wall) */
    val right: BlockVector3,
    /** +1 unit into the wall; depth<0 protrudes toward viewer */
    val back: BlockVector3,
) {
    @Suppress("DEPRECATION")
    fun set(x: Int, y: Int, depth: Int, mat: Material) {
        val wx = origin.x() + right.x() * x + back.x() * depth
        val wy = origin.y() + y
        val wz = origin.z() + right.z() * x + back.z() * depth
        try {
            es.setBlock(BlockVector3.at(wx, wy, wz), BukkitAdapter.adapt(mat.createBlockData()))
        } catch (e: Exception) { /* ignore out-of-bounds / limit */ }
    }

    /** Fill a rectangle at constant depth */
    fun fill(x1: Int, x2: Int, y1: Int, y2: Int, depth: Int, mat: Material) {
        for (x in x1..x2) for (y in y1..y2) set(x, y, depth, mat)
    }

    /** Fill a box across a depth range */
    fun fillD(x1: Int, x2: Int, y1: Int, y2: Int, dMin: Int, dMax: Int, mat: Material) {
        for (d in dMin..dMax) fill(x1, x2, y1, y2, d, mat)
    }
}

// ---------------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------------

object FacadeGenerator {

    /** Width stride between pilaster centres (pilaster at relX=0, window at 2..4, wall at 1,5) */
    private const val BAY = 6

    /**
     * Generates a Haussmann-style facade starting at the player's target block.
     * The targeted block face determines orientation.
     * @return the EditSession (caller stores it for undo)
     */
    fun generate(player: Player, bays: Int, palette: FacadePalette): EditSession? {
        val hit = player.rayTraceBlocks(20.0) ?: run {
            player.sendMessage("§cブロックを見てください (20ブロック以内)")
            return null
        }
        val block = hit.hitBlock ?: run {
            player.sendMessage("§cブロックが見つかりません")
            return null
        }
        val face = hit.hitBlockFace ?: BlockFace.SOUTH

        val (right, back) = faceVectors(face)
        val origin = BlockVector3.at(block.x, block.y, block.z)
        val weWorld = BukkitAdapter.adapt(player.world)
        val es = WorldEdit.getInstance().newEditSessionBuilder()
            .world(weWorld)
            .actor(BukkitAdapter.adapt(player))
            .build()

        val ctx = FacadeCtx(es, origin, right, back)
        buildFacade(ctx, palette.mats(), bays)

        es.close()
        return es
    }

    fun undo(player: Player, lastEs: EditSession) {
        val weWorld = BukkitAdapter.adapt(player.world)
        val undoEs = WorldEdit.getInstance().newEditSessionBuilder()
            .world(weWorld)
            .actor(BukkitAdapter.adapt(player))
            .build()
        lastEs.undo(undoEs)
        undoEs.close()
    }

    // -----------------------------------------------------------------------
    // Main assembly
    // -----------------------------------------------------------------------

    private fun buildFacade(ctx: FacadeCtx, m: FacadeMaterials, bays: Int) {
        val width = bays * BAY + 1   // total X span incl. right pilaster
        val totalH = 34              // Y=0..33

        // ── Base fill (face + 1 block body) ──────────────────────────────
        ctx.fillD(0, width - 1, 0, totalH - 1, 0, 1, m.wall)

        // ── Ground floor Y=0..3 ──────────────────────────────────────────
        buildGroundFloor(ctx, m, bays)

        // ── Cornice at Y=4 ───────────────────────────────────────────────
        buildCornice(ctx, m, width, 4, protrude = 1)

        // ── Noble floor F2  Y=5..9 ───────────────────────────────────────
        buildContinuousBalcony(ctx, m, width, y = 5)
        buildFloor(ctx, m, bays,
            yStart = 5, yEnd = 9, winY1 = 6, winY2 = 8,
            balconet = false, noble = true)

        // ── Cornice at Y=10 ──────────────────────────────────────────────
        buildCornice(ctx, m, width, 10, protrude = 1)

        // ── F3  Y=11..14 ─────────────────────────────────────────────────
        buildFloor(ctx, m, bays,
            yStart = 11, yEnd = 14, winY1 = 12, winY2 = 13,
            balconet = true, noble = false)

        // ── Cornice at Y=15 ──────────────────────────────────────────────
        buildCornice(ctx, m, width, 15, protrude = 1)

        // ── F4  Y=16..19 ─────────────────────────────────────────────────
        buildFloor(ctx, m, bays,
            yStart = 16, yEnd = 19, winY1 = 17, winY2 = 18,
            balconet = true, noble = false)

        // ── Cornice at Y=20 ──────────────────────────────────────────────
        buildCornice(ctx, m, width, 20, protrude = 1)

        // ── F5 (top)  Y=21..24 ───────────────────────────────────────────
        buildContinuousBalcony(ctx, m, width, y = 21)
        buildFloor(ctx, m, bays,
            yStart = 21, yEnd = 24, winY1 = 22, winY2 = 23,
            balconet = false, noble = false)

        // ── Main cornice  Y=25..26 (deep protrusion) ─────────────────────
        buildCornice(ctx, m, width, 25, protrude = 2)
        buildCornice(ctx, m, width, 26, protrude = 2)

        // ── Mansard roof  Y=27..33 ───────────────────────────────────────
        buildMansardRoof(ctx, m, width, bays)
    }

    // -----------------------------------------------------------------------
    // Ground floor
    // -----------------------------------------------------------------------

    private fun buildGroundFloor(ctx: FacadeCtx, m: FacadeMaterials, bays: Int) {
        val gateIdx = bays / 2  // porte cochère at centre bay
        for (b in 0 until bays) {
            val bx = b * BAY

            // Pilaster column
            ctx.fillD(bx, bx, 0, 3, 0, 1, m.pilaster)

            // Soubassement/bossage texture at Y=0
            ctx.fillD(bx + 1, bx + 5, 0, 0, 0, 1, m.ground)

            if (b == gateIdx) {
                // Porte cochère: wide open arch
                ctx.fill(bx + 1, bx + 5, 1, 3, 0, Material.AIR)
                ctx.fill(bx + 1, bx + 5, 1, 3, 1, Material.AIR)
                // Door posts (trim)
                ctx.fillD(bx + 1, bx + 1, 1, 3, 0, 1, m.trim)
                ctx.fillD(bx + 5, bx + 5, 1, 3, 0, 1, m.trim)
                // Lintel
                ctx.fillD(bx + 2, bx + 4, 3, 3, 0, 1, m.trim)
            } else {
                // Shop window
                ctx.fillD(bx + 1, bx + 1, 1, 3, 0, 1, m.trim)
                ctx.fillD(bx + 5, bx + 5, 1, 3, 0, 1, m.trim)
                ctx.fill(bx + 2, bx + 4, 1, 3, 0, Material.AIR)
                ctx.fill(bx + 2, bx + 4, 1, 3, 1, m.glass)
            }
        }
        // Right boundary pilaster
        val rx = bays * BAY
        ctx.fillD(rx, rx, 0, 3, 0, 1, m.pilaster)
    }

    // -----------------------------------------------------------------------
    // Standard floor (F2 noble, F3, F4, F5)
    // -----------------------------------------------------------------------

    private fun buildFloor(
        ctx: FacadeCtx, m: FacadeMaterials, bays: Int,
        yStart: Int, yEnd: Int,
        winY1: Int, winY2: Int,
        balconet: Boolean, noble: Boolean,
    ) {
        for (b in 0 until bays) {
            val bx = b * BAY

            // Pilaster (full floor height)
            ctx.fillD(bx, bx, yStart, yEnd, 0, 1, m.pilaster)

            // Window reveals (vertical trim beside opening)
            ctx.fillD(bx + 1, bx + 1, winY1, winY2, 0, 1, m.trim)
            ctx.fillD(bx + 5, bx + 5, winY1, winY2, 0, 1, m.trim)

            // Window opening: air face, glass body
            ctx.fill(bx + 2, bx + 4, winY1, winY2, 0, Material.AIR)
            ctx.fill(bx + 2, bx + 4, winY1, winY2, 1, m.glass)

            // Window sill at bottom (depth=0 trim)
            ctx.fill(bx + 2, bx + 4, winY1 - 1, winY1 - 1, 0, m.trim)

            // Keystone / clé de voûte above window (noble floor only)
            if (noble) {
                ctx.set(bx + 3, winY2 + 1, 0, m.trim)
                ctx.set(bx + 3, winY2 + 1, -1, m.trim)  // protruding keystone
            }

            // Balconet (individual balcony rail, F3/F4 only)
            if (balconet) {
                ctx.fill(bx + 2, bx + 4, yStart, yStart, -1, m.rail)
            }
        }
        // Right boundary pilaster
        val rx = bays * BAY
        ctx.fillD(rx, rx, yStart, yEnd, 0, 1, m.pilaster)
    }

    // -----------------------------------------------------------------------
    // Horizontal elements
    // -----------------------------------------------------------------------

    private fun buildCornice(ctx: FacadeCtx, m: FacadeMaterials, width: Int, y: Int, protrude: Int) {
        ctx.fill(0, width - 1, y, y, 0, m.trim)
        for (d in 1..protrude) {
            ctx.fill(0, width - 1, y, y, -d, m.trim)
        }
    }

    /** Full-width continuous balcony rail (F2 and F5) */
    private fun buildContinuousBalcony(ctx: FacadeCtx, m: FacadeMaterials, width: Int, y: Int) {
        ctx.fill(0, width - 1, y, y, -1, m.rail)
    }

    // -----------------------------------------------------------------------
    // Mansard roof
    // -----------------------------------------------------------------------

    /**
     * Brisis (Y=27..31): steep slope, steps back 1 block every 2 rows.
     * Lucarne (dormer): every other bay, punched into brisis.
     * Terrasson (Y=32..33): flat cap in lighter material.
     */
    private fun buildMansardRoof(ctx: FacadeCtx, m: FacadeMaterials, width: Int, bays: Int) {
        val maxD = 6  // roof body extends to depth=6

        // Brisis
        for (y in 27..31) {
            val fd = (y - 27) / 2   // frontDepth: 0,0,1,1,2 for y=27..31
            // Clear sloped gap in front of roof face
            if (fd > 0) ctx.fill(0, width - 1, y, y, 0, Material.AIR)
            if (fd > 1) ctx.fill(0, width - 1, y, y, 1, Material.AIR)
            // Roof solid from face to back
            ctx.fillD(0, width - 1, y, y, fd, maxD, m.roofDark)
        }

        // Lucarne (dormer windows) every other bay
        for (b in 0 until bays step 2) {
            val cx = b * BAY + BAY / 2  // bay centre X
            buildLucarne(ctx, m, cx)
        }

        // Terrasson cap
        ctx.fillD(0, width - 1, 32, 33, 2, maxD, m.roofLight)
        // Clear the gap created by brisis slope at terrasson level
        ctx.fill(0, width - 1, 32, 33, 0, Material.AIR)
        ctx.fill(0, width - 1, 32, 33, 1, Material.AIR)
    }

    /**
     * Lucarne (dormer window) centred at cx, starting at Y=27.
     * 3 wide × 3 tall, protruding 1 block from brisis face.
     */
    private fun buildLucarne(ctx: FacadeCtx, m: FacadeMaterials, cx: Int) {
        val x1 = cx - 1; val x2 = cx + 1
        // Punch hole in brisis at Y=27..28
        ctx.fill(x1, x2, 27, 28, 0, Material.AIR)
        ctx.fill(x1, x2, 27, 28, 1, Material.AIR)
        // Lucarne side walls (trim) at depth=-1
        ctx.fillD(x1, x1, 27, 29, -1, 0, m.trim)
        ctx.fillD(x2, x2, 27, 29, -1, 0, m.trim)
        // Lucarne window
        ctx.fill(cx, cx, 27, 28, -1, m.glass)
        ctx.fill(cx, cx, 27, 28, 0, m.glass)
        // Lucarne mini-roof at Y=29
        ctx.fillD(x1, x2, 29, 29, -1, 1, m.roofDark)
    }

    // -----------------------------------------------------------------------
    // Orientation vectors
    // -----------------------------------------------------------------------

    /**
     * Returns (right, back) BlockVector3 pair for the given targeted block face.
     *
     * right = player's right when looking at the face (cross(viewDir, up))
     * back  = into the wall (opposite of face normal)
     */
    private fun faceVectors(face: BlockFace): Pair<BlockVector3, BlockVector3> = when (face) {
        // Player on south side, looks north → right=+X, back=-Z
        BlockFace.SOUTH -> Pair(BlockVector3.at(1, 0, 0),  BlockVector3.at(0, 0, -1))
        // Player on north side, looks south → right=-X, back=+Z
        BlockFace.NORTH -> Pair(BlockVector3.at(-1, 0, 0), BlockVector3.at(0, 0, 1))
        // Player on east side, looks west → right=-Z, back=-X
        BlockFace.EAST  -> Pair(BlockVector3.at(0, 0, -1), BlockVector3.at(-1, 0, 0))
        // Player on west side, looks east → right=+Z, back=+X
        BlockFace.WEST  -> Pair(BlockVector3.at(0, 0, 1),  BlockVector3.at(1, 0, 0))
        // Fallback (top/bottom face: treat as SOUTH)
        else            -> Pair(BlockVector3.at(1, 0, 0),  BlockVector3.at(0, 0, -1))
    }
}
