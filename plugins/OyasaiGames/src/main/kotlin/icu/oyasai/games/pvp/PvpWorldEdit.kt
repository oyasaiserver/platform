package icu.oyasai.games.pvp

import com.sk89q.worldedit.WorldEdit
import com.sk89q.worldedit.bukkit.BukkitAdapter
import com.sk89q.worldedit.extent.clipboard.io.ClipboardFormats
import com.sk89q.worldedit.function.operation.Operations
import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.session.ClipboardHolder
import java.io.File
import org.bukkit.Bukkit

internal fun validateSchematics(folder: File, arena: ArenaConfig) {
  val names = arena.yaml.getStringList("modules.worldedit.regions")
  val regions = arena.regions.filter { it.name in names || names.isEmpty() && it.type == "BATTLE" }
  require(regions.isNotEmpty()) { "WorldEdit region is missing" }
  regions.forEach { region ->
    require(
        listOf("schem", "schematic").any {
          File(folder, "schematics/${arena.name}_${region.name}.$it").isFile
        }
    ) {
      "Required arena schematic is missing"
    }
  }
}

internal fun restoreSchematic(folder: File, arena: ArenaConfig) {
  if (!arena.has("WorldEdit") || !arena.bool("modules.worldedit.autoload")) return
  check(
      Bukkit.getPluginManager().isPluginEnabled("WorldEdit") ||
          Bukkit.getPluginManager().isPluginEnabled("FastAsyncWorldEdit")
  ) {
    "WorldEdit is unavailable"
  }
  validateSchematics(folder, arena)
  val names = arena.yaml.getStringList("modules.worldedit.regions")
  for (region in
      arena.regions.filter { it.name in names || names.isEmpty() && it.type == "BATTLE" }) {
    val file =
        listOf("schem", "schematic")
            .map { File(folder, "schematics/${arena.name}_${region.name}.$it") }
            .firstOrNull { it.isFile } ?: error("Required arena schematic is missing")
    val format = ClipboardFormats.findByFile(file) ?: error("Unknown schematic format")
    val clipboard = file.inputStream().use { stream -> format.getReader(stream).use { it.read() } }
    val world = Bukkit.getWorld(region.world) ?: error("Schematic world is unavailable")
    WorldEdit.getInstance().newEditSession(BukkitAdapter.adapt(world)).use { session ->
      val b = region.bounds
      val target = BlockVector3.at(minOf(b[0], b[3]), minOf(b[1], b[4]), minOf(b[2], b[5]))

      val operation =
          ClipboardHolder(clipboard)
              .createPaste(session)
              .to(target)
              .ignoreAirBlocks(!arena.bool("modules.worldedit.replaceair", true))
              .build()
      Operations.complete(operation)
    }
  }
}
