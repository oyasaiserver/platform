package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.Treasure
import java.io.File
import java.util.UUID
import java.util.logging.Logger
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.block.Block
import org.bukkit.block.TileState
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.persistence.PersistentDataType

class TreasureManager(
    private val dataFile: File,
    private val treasureIdKey: NamespacedKey,
    private val logger: Logger,
) {
  private val treasures: MutableMap<UUID, Treasure> = linkedMapOf()

  val size: Int
    get() = treasures.size

  fun all(): Collection<Treasure> = treasures.values

  fun find(id: UUID): Treasure? = treasures[id]

  fun isTreasureBlock(block: Block): Boolean = readTreasureId(block) != null

  fun readTreasureId(block: Block): UUID? {
    val state = block.state as? TileState ?: return null
    val raw =
        state.persistentDataContainer.get(treasureIdKey, PersistentDataType.STRING) ?: return null
    return runCatching { UUID.fromString(raw) }.getOrNull()
  }

  fun register(location: Location): Treasure? {
    val block = location.block
    val state = block.state as? TileState ?: return null
    val id = UUID.randomUUID()
    state.persistentDataContainer.set(treasureIdKey, PersistentDataType.STRING, id.toString())
    state.update(true, false)
    val treasure = Treasure.fromLocation(id, location)
    treasures[id] = treasure
    return treasure
  }

  fun unregister(id: UUID): Treasure? = treasures.remove(id)

  fun unregisterAt(block: Block): Treasure? {
    val id = readTreasureId(block) ?: return null
    val state = block.state as? TileState
    state?.persistentDataContainer?.remove(treasureIdKey)
    state?.update(true, false)
    return unregister(id)
  }

  fun clearAll() {
    treasures.clear()
  }

  fun load() {
    treasures.clear()
    if (!dataFile.exists()) return
    val yaml = YamlConfiguration.loadConfiguration(dataFile)
    val section = yaml.getConfigurationSection("treasures") ?: return
    for (key in section.getKeys(false)) {
      val entry = section.getConfigurationSection(key) ?: continue
      val id = runCatching { UUID.fromString(key) }.getOrNull() ?: continue
      val world = entry.getString("world") ?: continue
      val x = entry.getInt("x")
      val y = entry.getInt("y")
      val z = entry.getInt("z")
      treasures[id] = Treasure(id, world, x, y, z)
    }
    logger.info("Loaded ${treasures.size} treasure(s) from ${dataFile.name}")
  }

  fun save() {
    val yaml = YamlConfiguration()
    val section = yaml.createSection("treasures")
    for (treasure in treasures.values) {
      val entry = section.createSection(treasure.id.toString())
      entry.set("world", treasure.worldName)
      entry.set("x", treasure.x)
      entry.set("y", treasure.y)
      entry.set("z", treasure.z)
    }
    dataFile.parentFile?.mkdirs()
    yaml.save(dataFile)
  }
}
