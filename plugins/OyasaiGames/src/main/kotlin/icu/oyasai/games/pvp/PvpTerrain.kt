package icu.oyasai.games.pvp

import java.io.File
import org.bukkit.Bukkit
import org.bukkit.block.Block
import org.bukkit.block.Container
import org.bukkit.configuration.file.YamlConfiguration

internal class PvpTerrain(private val folder: File, private val arena: ArenaConfig) {
  private val file = File(folder, "terrain/${arena.name}.yml")
  private val journal = YamlConfiguration()
  private var sequence = 0
  private val saved = hashSetOf<String>()

  private fun key(block: Block) = "${block.world.name},${block.x},${block.y},${block.z}"

  private fun record(block: Block, state: org.bukkit.block.BlockState = block.state) {
    val coordinate = key(block)
    if (!saved.add(coordinate)) return
    val path = "blocks.${sequence++}"
    journal.set("$path.location", coordinate)
    journal.set("$path.data", state.blockData.asString)
    if (arena.bool("modules.blockrestore.restorecontainers") && state is Container)
        journal.set("$path.items", (state as Container).inventory.contents.map { it?.clone() })
  }

  fun beforeChange(block: Block) {
    if (!arena.has("BlockRestore") || !arena.bool("modules.blockrestore.restoreblocks", true))
        return
    if (arena.regions.none { it.type == "BATTLE" && it.contains(block.location) }) return
    record(block)
    saveYaml(file, journal)
  }

  fun beforeReplaced(state: org.bukkit.block.BlockState) {
    if (!arena.has("BlockRestore") || !arena.bool("modules.blockrestore.restoreblocks", true))
        return
    if (arena.regions.none { it.type == "BATTLE" && it.contains(state.location) }) return
    record(state.block, state)
    saveYaml(file, journal)
  }

  fun begin() {
    check(!file.exists()) { "Terrain recovery is pending" }
    if (!arena.has("BlockRestore") || !arena.bool("modules.blockrestore.hard")) return
    for (region in arena.regions.filter { it.type == "BATTLE" }) {
      val b = region.bounds
      val world = Bukkit.getWorld(region.world) ?: error("Region world is unavailable")
      val xs = minOf(b[0], b[3])..maxOf(b[0], b[3])
      val ys = minOf(b[1], b[4])..maxOf(b[1], b[4])
      val zs = minOf(b[2], b[5])..maxOf(b[2], b[5])
      // ponytail: bounded synchronous snapshot; batch by chunk if arenas grow.
      require(xs.count().toLong() * ys.count() * zs.count() <= 500_000) {
        "Hard restore region is too large"
      }
      for (x in xs) for (y in ys) for (z in zs) record(world.getBlockAt(x, y, z))
    }
    saveYaml(file, journal)
  }

  fun restore() {
    if (!file.exists()) return
    val y = YamlConfiguration().also { it.load(file) }
    val blocks = y.getConfigurationSection("blocks") ?: error("Invalid terrain journal")
    blocks.getKeys(false).forEach { key ->
      val loc = Point.parse(blocks.getString("$key.location")!!).location()
      loc.block.setBlockData(Bukkit.createBlockData(blocks.getString("$key.data")!!), false)
      if (blocks.contains("$key.items")) {
        val container = loc.block.state as? Container ?: error("Restored container is unavailable")
        container.inventory.contents =
            (blocks.getList("$key.items")!!)
                .map { it as? org.bukkit.inventory.ItemStack }
                .toTypedArray()
        container.update(true, false)
      }
    }
    file.delete().also { check(it) { "Could not retire terrain journal" } }
    journal.set("blocks", null)
    saved.clear()
    sequence = 0
  }

  fun fillChests() {
    if (!arena.has("ChestFiller")) return
    val source =
        arena
            .text("modules.chestfiller.sourceLocation")
            .takeIf { it.isNotBlank() && it != "none" }
            ?.let {
              (Point.parse(it).location().block.state as? Container)
                  ?.inventory
                  ?.contents
                  ?.filterNotNull()
                  ?.filter { !it.type.isAir } ?: error("ChestFiller source is unavailable")
            } ?: PvpItems.list(arena.yaml.getList("modules.chestfiller.items") ?: emptyList<Any>())
    check(source.isNotEmpty()) { "ChestFiller source is empty" }
    val minimum = arena.int("modules.chestfiller.minItems")
    val maximum = arena.int("modules.chestfiller.maxItems", 5)
    require(minimum in 0..maximum && maximum <= 27)
    for (coordinate in arena.yaml.getStringList("modules.chestfiller.containerList")) {
      val container =
          Point.parse(coordinate).location().block.state as? Container
              ?: error("ChestFiller target is unavailable")
      if (arena.bool("modules.chestfiller.clear", true)) container.inventory.clear()
      repeat((minimum..maximum).random()) { container.inventory.addItem(source.random().clone()) }
    }
  }
}
