package icu.oyasai.lwc

import com.google.gson.JsonArray
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import java.util.UUID
import org.bukkit.Material
import org.bukkit.block.Block
import org.bukkit.block.BlockFace
import org.bukkit.block.data.Bisected
import org.bukkit.block.data.type.Chest

internal data class BlockKey(val world: String, val x: Int, val y: Int, val z: Int) {
  companion object {
    fun of(block: Block) = BlockKey(block.world.name, block.x, block.y, block.z)
  }
}

internal class Protection(
    var id: Int,
    val key: BlockKey,
    val owner: UUID,
    val type: Int,
    private val data: JsonObject,
) {
  val shared: Set<UUID>
    get() =
        data
            .getAsJsonArray("rights")
            ?.mapNotNull { entry ->
              val item = entry.asJsonObject
              if (item.get("type")?.asInt != 1 || item.get("rights")?.asInt != 1) null
              else runCatching { UUID.fromString(item.get("name").asString) }.getOrNull()
            }
            ?.toSet() ?: emptySet()

  val hopper: Boolean
    get() = data.getAsJsonArray("flags")?.any { it.asJsonObject.get("id")?.asInt == 5 } == true

  fun setShared(player: UUID, enabled: Boolean) {
    val rights = data.getAsJsonArray("rights") ?: JsonArray().also { data.add("rights", it) }
    val kept =
        JsonArray().also { result ->
          rights.forEach { entry ->
            if (
                entry.asJsonObject.get("name")?.asString != player.toString() ||
                    entry.asJsonObject.get("type")?.asInt != 1
            )
                result.add(entry)
          }
        }
    if (enabled) {
      kept.add(
          JsonObject().apply {
            addProperty("name", player.toString())
            addProperty("type", 1)
            addProperty("rights", 1)
          }
      )
    }
    data.add("rights", kept)
  }

  fun setHopper(enabled: Boolean) {
    val flags = data.getAsJsonArray("flags") ?: JsonArray()
    val kept =
        JsonArray().also { result ->
          flags.forEach { if (it.asJsonObject.get("id")?.asInt != 5) result.add(it) }
        }
    if (enabled) kept.add(JsonObject().apply { addProperty("id", 5) })
    data.add("flags", kept)
  }

  fun json(): String = data.toString()

  companion object {
    fun create(key: BlockKey, owner: UUID, type: Int) =
        Protection(
            -1,
            key,
            owner,
            type,
            JsonObject().apply {
              add("rights", JsonArray())
              add("flags", JsonArray())
            },
        )

    fun read(id: Int, key: BlockKey, owner: UUID, type: Int, json: String): Protection {
      val data = JsonParser.parseString(json.ifBlank { "{}" }).asJsonObject
      val protection = Protection(id, key, owner, type, data)
      protection.shared
      protection.hopper
      return protection
    }
  }
}

private val CONTAINERS =
    setOf(
        "CHEST",
        "TRAPPED_CHEST",
        "FURNACE",
        "BLAST_FURNACE",
        "SMOKER",
        "DISPENSER",
        "DROPPER",
        "BARREL",
        "COMPOSTER",
        "LECTERN",
        "DECORATED_POT",
        "CRAFTER",
    )

internal fun isContainer(material: Material): Boolean {
  val name = material.name
  return name in CONTAINERS ||
      name == "COPPER_CHEST" ||
      name.endsWith("_COPPER_CHEST") ||
      name.endsWith("_SHELF") ||
      name.endsWith("SHULKER_BOX")
}

internal fun isManual(material: Material): Boolean {
  val name = material.name
  return name.endsWith("_DOOR") ||
      name.endsWith("_TRAPDOOR") ||
      name.endsWith("_FENCE_GATE") ||
      name.endsWith("_SIGN") ||
      name.endsWith("_WALL_SIGN") ||
      name.endsWith("_BANNER") ||
      name.endsWith("_WALL_BANNER")
}

internal fun relatedKeys(block: Block): List<BlockKey> {
  val keys = mutableListOf(BlockKey.of(block))
  val data = block.blockData
  if (data is Bisected && block.type.name.endsWith("_DOOR")) {
    keys += BlockKey.of(block.getRelative(0, doorOtherY(data.half), 0))
  }
  if (data is Chest && data.type != Chest.Type.SINGLE) {
    val offset = chestOtherOffset(data.type, data.facing)
    if (offset != null) {
      val neighbor = block.getRelative(offset.first, 0, offset.second)
      val other = neighbor.blockData as? Chest
      if (
          neighbor.type == block.type &&
              other?.facing == data.facing &&
              other.type != data.type &&
              other.type != Chest.Type.SINGLE
      )
          keys += BlockKey.of(neighbor)
    }
  }
  return keys
}

internal fun doorOtherY(half: Bisected.Half): Int = if (half == Bisected.Half.TOP) -1 else 1

internal fun chestOtherOffset(type: Chest.Type, facing: BlockFace): Pair<Int, Int>? {
  val right =
      when (facing) {
        BlockFace.NORTH -> 1 to 0
        BlockFace.SOUTH -> -1 to 0
        BlockFace.EAST -> 0 to 1
        BlockFace.WEST -> 0 to -1
        else -> return null
      }
  return when (type) {
    Chest.Type.LEFT -> right
    Chest.Type.RIGHT -> -right.first to -right.second
    Chest.Type.SINGLE -> null
  }
}

internal fun remainingSeconds(until: Long, now: Long): Int =
    ((until - now + 999) / 1000).toInt().coerceAtLeast(0)
