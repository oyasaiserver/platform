package com.ququla89.headhunt.manager

import com.ququla89.headhunt.model.Treasure
import java.io.File
import java.util.UUID
import java.util.logging.Logger
import org.bukkit.Location
import org.bukkit.NamespacedKey
import org.bukkit.World
import org.bukkit.block.Block
import org.bukkit.block.Skull
import org.bukkit.block.TileState
import org.bukkit.persistence.PersistentDataType

data class TreasureValidationIssue(
    val treasure: Treasure,
    val reason: String,
)

data class TreasureClearResult(
    val removed: Int,
    val retained: List<TreasureValidationIssue>,
)

data class TreasureRepairResult(
    val repaired: Int,
    val removed: Int,
    val unresolved: List<TreasureValidationIssue>,
)

class TreasureManager(
    dataFile: File,
    private val treasureIdKey: NamespacedKey,
    private val logger: Logger,
    private val worldResolver: (String) -> World?,
    private val fileStore: TreasureFileStore = TreasureFileStore(dataFile, logger),
) : TreasureCatalog {
  private val treasures: MutableMap<UUID, Treasure> = linkedMapOf()

  override val size: Int
    get() = treasures.size

  fun all(): Collection<Treasure> = treasures.values

  fun find(id: UUID): Treasure? = treasures[id]

  fun findAt(block: Block): Treasure? {
    val id = readTreasureId(block) ?: return null
    val treasure = treasures[id] ?: return null
    val worldName = block.world.name
    return treasure.takeIf {
      it.worldName == worldName && it.x == block.x && it.y == block.y && it.z == block.z
    }
  }

  override fun contains(id: UUID): Boolean = treasures.containsKey(id)

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
    val existingId = readTreasureId(block)
    if (existingId != null && contains(existingId)) return null

    val id = UUID.randomUUID()
    state.persistentDataContainer.set(treasureIdKey, PersistentDataType.STRING, id.toString())
    if (!state.update(true, false)) return null
    val treasure = Treasure.fromLocation(id, location)
    treasures[id] = treasure
    return treasure
  }

  fun unregister(id: UUID): Treasure? = treasures.remove(id)

  fun unregisterAt(block: Block): Treasure? {
    val id = readTreasureId(block) ?: return null
    val registeredTreasure = findAt(block)
    val state = block.state as? TileState ?: return null
    state.persistentDataContainer.remove(treasureIdKey)
    if (!state.update(true, false)) return null
    return if (registeredTreasure?.id == id) unregister(id) else null
  }

  fun clearAll(): TreasureClearResult {
    var removed = 0
    val retained = mutableListOf<TreasureValidationIssue>()
    for (treasure in treasures.values.toList()) {
      val world = worldResolver(treasure.worldName)
      if (world == null) {
        retained += TreasureValidationIssue(treasure, "ワールドが読み込まれていません。")
        continue
      }
      if (treasure.y !in world.minHeight until world.maxHeight) {
        treasures.remove(treasure.id)
        removed++
        continue
      }

      val state = world.getBlockAt(treasure.x, treasure.y, treasure.z).state as? TileState
      if (state == null) {
        treasures.remove(treasure.id)
        removed++
        continue
      }
      state.persistentDataContainer.remove(treasureIdKey)
      if (state.update(true, false)) {
        treasures.remove(treasure.id)
        removed++
      } else {
        retained += TreasureValidationIssue(treasure, "ブロックの宝IDを削除できませんでした。")
      }
    }
    return TreasureClearResult(removed, retained)
  }

  fun validateAll(): List<TreasureValidationIssue> {
    val issues = mutableListOf<TreasureValidationIssue>()
    val locations = mutableMapOf<String, UUID>()
    for (treasure in treasures.values) {
      val locationKey = "${treasure.worldName}:${treasure.x}:${treasure.y}:${treasure.z}"
      val duplicateId = locations.putIfAbsent(locationKey, treasure.id)
      if (duplicateId != null) {
        issues += TreasureValidationIssue(treasure, "別の宝と座標が重複しています。")
        continue
      }

      val world = worldResolver(treasure.worldName)
      if (world == null) {
        issues += TreasureValidationIssue(treasure, "ワールドが読み込まれていません。")
        continue
      }
      if (treasure.y !in world.minHeight until world.maxHeight) {
        issues += TreasureValidationIssue(treasure, "Y座標がワールドの範囲外です。")
        continue
      }
      val block = world.getBlockAt(treasure.x, treasure.y, treasure.z)
      if (block.state !is Skull) {
        issues += TreasureValidationIssue(treasure, "登録座標に頭ブロックがありません。")
        continue
      }
      if (readTreasureId(block) != treasure.id) {
        issues += TreasureValidationIssue(treasure, "ブロックの宝IDが登録情報と一致しません。")
      }
    }
    return issues
  }

  fun repairAll(): TreasureRepairResult {
    var repaired = 0
    var removed = 0
    val unresolved = mutableListOf<TreasureValidationIssue>()
    val locations = mutableSetOf<String>()
    for (treasure in treasures.values.toList()) {
      val locationKey = "${treasure.worldName}:${treasure.x}:${treasure.y}:${treasure.z}"
      if (!locations.add(locationKey)) {
        treasures.remove(treasure.id)
        removed++
        continue
      }
      val world = worldResolver(treasure.worldName)
      if (world == null) {
        unresolved += TreasureValidationIssue(treasure, "ワールドが読み込まれていません。")
        continue
      }
      if (treasure.y !in world.minHeight until world.maxHeight) {
        treasures.remove(treasure.id)
        removed++
        continue
      }
      val block = world.getBlockAt(treasure.x, treasure.y, treasure.z)
      val state = block.state as? Skull
      if (state == null) {
        treasures.remove(treasure.id)
        removed++
        continue
      }
      if (readTreasureId(block) == treasure.id) continue

      state.persistentDataContainer.set(
          treasureIdKey,
          PersistentDataType.STRING,
          treasure.id.toString(),
      )
      if (state.update(true, false)) {
        repaired++
      } else {
        unresolved += TreasureValidationIssue(treasure, "ブロックの宝IDを修復できませんでした。")
      }
    }
    return TreasureRepairResult(repaired, removed, unresolved)
  }

  fun load() {
    treasures.clear()
    treasures.putAll(fileStore.load())
    logger.info("${treasures.size}件の宝HEADを読み込みました。")
  }

  fun save(): Boolean = fileStore.save(treasures.values)
}
