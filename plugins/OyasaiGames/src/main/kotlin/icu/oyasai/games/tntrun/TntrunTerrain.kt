package icu.oyasai.games.tntrun

import icu.oyasai.games.pvp.saveYaml
import java.io.File
import java.nio.file.Files
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.TileState
import org.bukkit.configuration.file.YamlConfiguration

internal fun restoreTerrainFile(
    file: File,
    apply: (String, Cell, String) -> Unit,
    flush: (String) -> Unit,
) {
  if (!file.exists()) return
  val yaml = readYaml(file)
  val world = yaml.getString("world") ?: error("Missing terrain world")
  val blocks = yaml.getConfigurationSection("blocks") ?: error("Missing terrain blocks")
  val entries =
      blocks.getKeys(false).map {
        Cell.parse(it) to (blocks.getString(it) ?: error("Missing block data"))
      }
  entries.forEach { (cell, data) -> apply(world, cell, data) }
  // Saving the world before deleting makes recovery safe across an immediate restart.
  flush(world)
  Files.delete(file.toPath())
}

internal class RunTerrain(private val file: File, private val arena: RunArena) {
  private val initial = linkedMapOf<Cell, String>()
  private val pending = linkedMapOf<Cell, Long>()

  fun restore() {
    restoreTerrainFile(
        file,
        { world, cell, data ->
          val w = Bukkit.getWorld(world) ?: error("Terrain recovery world is unavailable")
          w.getBlockAt(cell.x, cell.y, cell.z).setBlockData(Bukkit.createBlockData(data), false)
        },
        { Bukkit.getWorld(it)!!.save() },
    )
    initial.clear()
    pending.clear()
  }

  fun begin() {
    check(!file.exists()) { "Terrain recovery is pending" }
    val w = Bukkit.getWorld(arena.world) ?: error("Arena world is unavailable")
    val b = arena.bounds
    val journal = YamlConfiguration()
    journal.set("world", arena.world)
    journal.createSection("blocks")
    initial.clear()
    pending.clear()
    for (x in b.low.x..b.high.x) for (y in b.low.y..b.high.y) for (z in b.low.z..b.high.z) {
      val block = w.getBlockAt(x, y, z)
      // Never destroy block entities: BlockData alone cannot preserve their inventory/PDC.
      if (!block.type.isAir && block.type != Material.LIGHT && block.state !is TileState) {
        val cell = Cell(x, y, z)
        val data = block.blockData.asString
        initial[cell] = data
        journal.set("blocks.${cell.key}", data)
      }
    }
    saveYaml(file, journal)
  }

  fun step(x: Double, y: Double, z: Double, tick: Long) {
    val world = Bukkit.getWorld(arena.world) ?: error("Arena world is unavailable")
    val cell =
        footprint(x, y, z).firstOrNull {
          arena.bounds.contains(it) &&
              !world.getBlockAt(it.x, it.y, it.z).type.isAir &&
              world.getBlockAt(it.x, it.y, it.z).type != Material.LIGHT
        } ?: return
    val below = cell.copy(y = cell.y - 1)
    val blocks = listOf(cell, below)
    if (
        blocks.any {
          !arena.bounds.contains(it) || world.getBlockAt(it.x, it.y, it.z).state is TileState
        }
    )
        return
    // Every removable non-air block must have a durable original snapshot.
    check(blocks.all { world.getBlockAt(it.x, it.y, it.z).type.isAir || it in initial })
    pending.putIfAbsent(cell, tick + arena.delay)
  }

  fun destroy(tick: Long, effect: (Block) -> Unit) {
    val world = Bukkit.getWorld(arena.world) ?: error("Arena world is unavailable")
    val due = pending.filterValues { it <= tick }.keys.toList()
    for (cell in due) {
      pending.remove(cell)
      val top = world.getBlockAt(cell.x, cell.y, cell.z)
      val bottom = world.getBlockAt(cell.x, cell.y - 1, cell.z)
      check(top.state !is TileState && bottom.state !is TileState)
      effect(top)
      top.setType(Material.AIR, false)
      bottom.setType(Material.AIR, false)
    }
  }
}
