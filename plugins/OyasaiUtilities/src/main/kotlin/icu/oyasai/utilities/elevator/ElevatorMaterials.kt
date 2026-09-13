package icu.oyasai.utilities.elevator

import org.bukkit.Material

/**
 * Legacy Simple Elevators names (`Material:Data`) → Paper 1.21 / 26.2 materials.
 *
 * STEP:7 is quartz slab (1.8 stone-slab data 7). SMOOTH_QUARTZ_SLAB also used data 7 in XSeries; we
 * keep QUARTZ_SLAB. STEP without data is SMOOTH_STONE_SLAB (data 0), not 7.
 */
internal object ElevatorMaterials {
  private val woolByData =
      listOf(
          Material.WHITE_WOOL,
          Material.ORANGE_WOOL,
          Material.MAGENTA_WOOL,
          Material.LIGHT_BLUE_WOOL,
          Material.YELLOW_WOOL,
          Material.LIME_WOOL,
          Material.PINK_WOOL,
          Material.GRAY_WOOL,
          Material.LIGHT_GRAY_WOOL,
          Material.CYAN_WOOL,
          Material.PURPLE_WOOL,
          Material.BLUE_WOOL,
          Material.BROWN_WOOL,
          Material.GREEN_WOOL,
          Material.RED_WOOL,
          Material.BLACK_WOOL,
      )
  private val carpetByData =
      woolByData.map { Material.valueOf(it.name.replace("_WOOL", "_CARPET")) }
  private val stepByData =
      listOf(
          Material.SMOOTH_STONE_SLAB,
          Material.SANDSTONE_SLAB,
          Material.PETRIFIED_OAK_SLAB,
          Material.COBBLESTONE_SLAB,
          Material.BRICK_SLAB,
          Material.STONE_BRICK_SLAB,
          Material.NETHER_BRICK_SLAB,
          Material.QUARTZ_SLAB,
      )
  private val stoneByData =
      listOf(
          Material.STONE,
          Material.GRANITE,
          Material.POLISHED_GRANITE,
          Material.DIORITE,
          Material.POLISHED_DIORITE,
          Material.ANDESITE,
          Material.POLISHED_ANDESITE,
      )
  private val dirtByData = listOf(Material.DIRT, Material.COARSE_DIRT, Material.PODZOL)
  private val aliases =
      mapOf(
          "REDSTONE_TORCH_ON" to Material.REDSTONE_TORCH,
          "REDSTONE_TORCH_OFF" to Material.REDSTONE_TORCH,
          "WOOD_BUTTON" to Material.OAK_BUTTON,
          "SIGN" to Material.OAK_SIGN,
          "SIGN_POST" to Material.OAK_SIGN,
          "WALL_SIGN" to Material.OAK_WALL_SIGN,
      )

  fun resolve(raw: String): Material? {
    val token = normalize(raw)
    if (token.isEmpty() || token == "ANY") return null
    val (name, data) = splitData(token)
    when (name) {
      "WOOL" -> return data?.let { woolByData.getOrNull(it) } ?: Material.WHITE_WOOL
      "CARPET" -> return data?.let { carpetByData.getOrNull(it) } ?: Material.WHITE_CARPET
      "STEP" -> return data?.let { stepByData.getOrNull(it) } ?: Material.SMOOTH_STONE_SLAB
      "STONE" -> return data?.let { stoneByData.getOrNull(it) } ?: Material.STONE
      "DIRT" -> return data?.let { dirtByData.getOrNull(it) } ?: Material.DIRT
    }
    Material.matchMaterial(name)?.let {
      return it
    }
    return aliases[name]
  }

  fun ignoreToken(raw: String): IgnoreToken? {
    val token = normalize(raw)
    if (token.isEmpty()) return null
    if (token == "BANNER") return IgnoreToken.NameContains("BANNER")
    if (token == "SIGN" || token == "SIGN_POST" || token == "WALL_SIGN") {
      return IgnoreToken.NameContains("SIGN")
    }
    val material = resolve(token) ?: return null
    return IgnoreToken.Exact(material)
  }

  fun normalize(raw: String): String = raw.trim().replace('-', '_').replace(' ', '_').uppercase()

  private fun splitData(token: String): Pair<String, Int?> {
    val i = token.lastIndexOf(':')
    if (i <= 0) return token to null
    val data = token.substring(i + 1).toIntOrNull() ?: return token to null
    return token.substring(0, i) to data
  }

  sealed interface IgnoreToken {
    data class Exact(val material: Material) : IgnoreToken

    data class NameContains(val needle: String) : IgnoreToken
  }
}
