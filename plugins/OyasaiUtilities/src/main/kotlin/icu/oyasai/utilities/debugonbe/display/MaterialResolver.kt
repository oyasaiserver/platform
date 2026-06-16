package icu.oyasai.utilities.debugonbe.display

import org.bukkit.Material
import org.bukkit.inventory.ItemStack

object MaterialResolver {

  /** ブロックの素材に対応する「ベースとなるブロック (木材や丸石など)」を取得する。 */
  fun getBaseMaterial(blockType: Material): Material {
    val name = blockType.name
    if (name.startsWith("NETHER_BRICK_")) {
      return Material.NETHER_BRICKS
    }
    if (name.startsWith("RED_NETHER_BRICK_")) {
      return Material.RED_NETHER_BRICKS
    }
    return when {
      name.endsWith("_FENCE") -> {
        val base = name.removeSuffix("_FENCE")
        if (base == "NETHER_BRICK") Material.NETHER_BRICKS
        else Material.matchMaterial("${base}_PLANKS") ?: blockType
      }
      name.endsWith("_WALL") -> {
        val base = name.removeSuffix("_WALL")
        Material.matchMaterial(base) ?: Material.matchMaterial("${base}S") ?: blockType
      }
      name.endsWith("_STAIRS") -> {
        val base = name.removeSuffix("_STAIRS")
        Material.matchMaterial(base)
            ?: Material.matchMaterial("${base}_PLANKS")
            ?: Material.matchMaterial("${base}S")
            ?: blockType
      }
      name.endsWith("_SLAB") -> {
        val base = name.removeSuffix("_SLAB")
        Material.matchMaterial(base)
            ?: Material.matchMaterial("${base}_PLANKS")
            ?: Material.matchMaterial("${base}S")
            ?: blockType
      }
      else -> blockType
    }
  }

  /** 防具立てに装備されているアイテムが「素材ブロック」のプレースホルダーであるかを判定する。 */
  private fun isMainMaterialPlaceholder(material: Material): Boolean {
    if (!material.isBlock) return false
    val name = material.name
    return name.endsWith("_FENCE") ||
        name.endsWith("_WALL") ||
        name.endsWith("_STAIRS") ||
        name.endsWith("_SLAB") ||
        name.endsWith("_PLANKS") ||
        name.contains("STONE") ||
        name.contains("BRICK") ||
        name.contains("LOG") ||
        name.contains("WOOD") ||
        name.contains("COPPER") ||
        name.contains("PRISMARINE") ||
        name.contains("SANDSTONE") ||
        name == "IRON_BARS" ||
        name.contains("GLASS")
  }

  /** 置き換え先のブロックに基づいて、防具立てのアイテムを動的に変換する。 */
  fun resolveItem(baseMaterial: Material, item: ItemStack?): ItemStack? {
    if (item == null) return null
    if (isMainMaterialPlaceholder(item.type)) {
      if (baseMaterial != item.type) {
        val clone = item.clone()
        clone.type = baseMaterial
        return clone
      }
    }
    return item
  }

  /** 指定素材が板ガラス（透明または色付き）であるか判定する。 */
  fun isGlassPane(material: Material): Boolean {
    val name = material.name
    return name == "GLASS_PANE" || name.endsWith("_STAINED_GLASS_PANE")
  }

  /** 色付き板ガラスに対応するガラスブロックの素材を取得する。 */
  fun getGlassBlockMaterial(glassPaneType: Material): Material {
    val name = glassPaneType.name
    return when {
      name == "GLASS_PANE" -> Material.GLASS
      name.endsWith("_STAINED_GLASS_PANE") -> {
        val color = name.removeSuffix("_STAINED_GLASS_PANE")
        Material.matchMaterial("${color}_STAINED_GLASS") ?: Material.GLASS
      }
      else -> Material.GLASS
    }
  }
}
