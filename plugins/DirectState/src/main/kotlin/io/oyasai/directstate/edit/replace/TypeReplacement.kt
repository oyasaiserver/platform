package io.oyasai.directstate.edit.replace

import io.oyasai.directstate.edit.shape.ShapeFamilies

/** 既知の単一ブロック形状のみ: ブロックエンティティや複数パーツのブロックは含めない。 */
internal class TypeReplacement(private val blockNames: Set<String>) {
  /** familyは材質の系統、kindはstairsやslabなどの形を表す。 */
  private data class Variant(val family: String, val kind: String)

  private val families = ShapeFamilies(blockNames)

  /** ブロック名からstairsやslabなどの形だけを取り出す。 */
  fun kind(name: String): String? = variant(name)?.kind

  /** ブロック名を、材質系統と形の組へ分解する。置換対象外ならnull。 */
  private fun variant(name: String): Variant? {
    val brushable = brushableVariant(name)
    if (brushable != null) return brushable
    val colour = colourVariant(name)
    if (colour != null) return colour
    val wood = woodVariant(name)
    if (wood != null) return wood
    val kind =
        when {
          name.endsWith("_STAIRS") -> "stairs"
          name.endsWith("_SLAB") -> "slab"
          name.endsWith("_WALL") -> "wall"
          name.endsWith("_FENCE_GATE") -> "gate"
          name.endsWith("_FENCE") -> "fence"
          name == "GLASS_PANE" || name.endsWith("_STAINED_GLASS_PANE") -> "pane"
          name.endsWith("_TRAPDOOR") -> "trapdoor"
          name == "GLASS" || name.endsWith("_STAINED_GLASS") -> "full"
          families.find(name)?.full == name -> "full"
          else -> return null
        }
    return Variant(familyFromShape(name), kind)
  }

  /** 二つのブロックが同じ形なら、状態をそのまま引き継げると判定する。 */
  fun compatible(source: String, target: String): Boolean {
    val sourceKind = kind(source) ?: return false
    return sourceKind == kind(target)
  }

  /** 登録済みブロック名から、置換に使う材質系統を取り出す。 */
  private fun family(name: String): String? {
    if (name !in blockNames) return null
    return variant(name)?.family
  }

  /** 形付きブロック名から、対応するフルブロックの名前を材質系統として探す。 */
  private fun familyFromShape(name: String): String {
    val knownFamily = families.find(name)
    if (knownFamily != null) return knownFamily.full
    // FENCE_GATEはFENCEより長いため、先に判定する。
    val kind = if (name.endsWith("_FENCE_GATE")) "gate" else kindBySuffix(name)
    val stem =
        when (kind) {
          "stairs" -> name.removeSuffix("_STAIRS")
          "slab" -> name.removeSuffix("_SLAB")
          "wall" -> name.removeSuffix("_WALL")
          "fence" -> name.removeSuffix("_FENCE")
          "gate" -> name.removeSuffix("_FENCE_GATE")
          "trapdoor" -> name.removeSuffix("_TRAPDOOR")
          "pane" -> name.removeSuffix("_PANE")
          else -> name
        }
    for (candidate in listOf(stem, "${stem}_PLANKS", "${stem}_BLOCK", "${stem}S", "${stem}_SLAB")) {
      val family = families.find(candidate)
      if (family != null) return family.full
    }
    return stem
  }

  /** 名前の末尾から、一般的なブロック形状を判定する。 */
  private fun kindBySuffix(name: String) =
      when {
        name.endsWith("_STAIRS") -> "stairs"
        name.endsWith("_SLAB") -> "slab"
        name.endsWith("_WALL") -> "wall"
        name.endsWith("_FENCE_GATE") -> "gate"
        name.endsWith("_FENCE") -> "fence"
        name.endsWith("_TRAPDOOR") -> "trapdoor"
        name.endsWith("_PANE") -> "pane"
        else -> "full"
      }

  /** 色違いブロックを、色の系統とglass・woolなどの形へ分ける。 */
  private fun colourVariant(name: String): Variant? {
    val kind =
        when {
          name == "GLASS" || name.endsWith("_STAINED_GLASS") -> "glass"
          name == "GLASS_PANE" || name.endsWith("_STAINED_GLASS_PANE") -> "pane"
          name.endsWith("_WOOL") -> "wool"
          name.endsWith("_CARPET") -> "carpet"
          name.endsWith("_BED") -> "bed"
          else -> return null
        }
    val family =
        when {
          name == "GLASS" || name == "GLASS_PANE" -> "clear_glass"
          kind == "glass" -> name.removeSuffix("_STAINED_GLASS")
          kind == "pane" -> name.removeSuffix("_STAINED_GLASS_PANE")
          else -> name.substringBeforeLast('_')
        }
    return Variant("colour:$family", kind)
  }

  /** 砂・砂利と怪しげな亜種を、同じ材質系統として扱う。 */
  private fun brushableVariant(name: String): Variant? =
      when (name) {
        "SAND",
        "GRAVEL",
        "SUSPICIOUS_SAND",
        "SUSPICIOUS_GRAVEL" -> Variant("brushable:sand_gravel", "full")
        else -> null
      }

  /** 木材名を、樹種とsign・door・logなどの形へ分ける。 */
  private fun woodVariant(name: String): Variant? {
    if (name == "BAMBOO_BLOCK" || name == "STRIPPED_BAMBOO_BLOCK") {
      if ("BAMBOO_PLANKS" !in blockNames) return null
      val kind = if (name.startsWith("STRIPPED_")) "stripped_log" else "log"
      return Variant("wood:BAMBOO_PLANKS", kind)
    }
    val suffixes =
        listOf(
            "_WALL_HANGING_SIGN" to "wall_hanging_sign",
            "_HANGING_SIGN" to "hanging_sign",
            "_WALL_SIGN" to "wall_sign",
            "_SIGN" to "sign",
            "_FENCE_GATE" to "gate",
            "_TRAPDOOR" to "trapdoor",
            "_STAIRS" to "stairs",
            "_FENCE" to "fence",
            "_DOOR" to "door",
            "_SLAB" to "slab",
            "_PLANKS" to "full",
            "_LOG" to "log",
            "_WOOD" to "wood",
            "_STEM" to "log",
            "_HYPHAE" to "wood",
        )
    for ((suffix, kind) in suffixes) {
      if (name.endsWith(suffix)) {
        // STRIPPEDが形の違いになるのは、原木と木だけ。看板などでは樹種名の一部として除く。
        val stripped = name.startsWith("STRIPPED_") && kind in setOf("log", "wood")
        val raw = name.removeSuffix(suffix).removePrefix("STRIPPED_")
        val base = "${raw}_PLANKS"
        if (base !in blockNames) return null
        return Variant("wood:$base", if (stripped) "stripped_$kind" else kind)
      }
    }
    return null
  }

  /** サンプルしたブロックは材質ファミリーだけを提供し、編集対象ブロックが形状を提供する。 */
  fun resolve(source: String, sampled: String): String? {
    val shape = kind(source) ?: return null
    val selectedFamily = family(sampled) ?: return null
    if (kind(sampled) == shape && selectedFamily == family(source)) return sampled
    return blockNames.firstOrNull { kind(it) == shape && family(it) == selectedFamily }
  }

  /** 壁、フェンス、板ガラスは接続を持つ互換バリアントである。 */
  fun resolveCompatible(source: String, sampled: String): String? {
    val sameShape = resolve(source, sampled)
    if (sameShape != null) return sameShape
    val sourceKind = kind(source) ?: return null
    val selectedFamily = family(sampled) ?: return null
    val compatibleKinds =
        when (sourceKind) {
          "wall" -> setOf("fence", "pane")
          "fence" -> setOf("wall", "pane")
          "pane" -> setOf("wall", "fence")
          else -> return null
        }
    return blockNames.firstOrNull { kind(it) in compatibleKinds && family(it) == selectedFamily }
  }

  companion object {
    /** 受理したすべてのプロパティを保持し、未対応のプロパティは対象側の既定値に任せる。 */
    fun transfer(source: String, target: String, accepts: (String) -> Boolean): String {
      val retained = mutableListOf<String>()
      for (property in propertiesOf(source)) {
        val candidate = "$target[${(retained + property).joinToString(",")}]"
        if (accepts(candidate)) retained += property
      }
      return if (retained.isEmpty()) target else "$target[${retained.joinToString(",")}]"
    }

    /** 接続状態の表現が違う壁・フェンス・板ガラスのプロパティを変換してから引き継ぐ。 */
    fun transferCompatible(
        source: String,
        target: String,
        sourceKind: String?,
        targetKind: String?,
        accepts: (String) -> Boolean,
    ): String {
      if (sourceKind == targetKind) return transfer(source, target, accepts)
      val converted = mutableListOf<String>()
      val horizontalFaces = setOf("north", "east", "south", "west")
      val booleanConnectionKinds = setOf("fence", "pane")
      for (property in propertiesOf(source)) {
        val parts = property.split('=', limit = 2)
        if (parts.size != 2) continue
        val name = parts[0]
        val value = parts[1]
        val convertedProperty =
            when {
              sourceKind == "wall" &&
                  targetKind in booleanConnectionKinds &&
                  name in horizontalFaces -> "$name=${value != "none"}"
              sourceKind in booleanConnectionKinds &&
                  targetKind == "wall" &&
                  name in horizontalFaces -> "$name=${if (value == "true") "low" else "none"}"
              sourceKind == "wall" && targetKind in booleanConnectionKinds && name == "up" -> null
              else -> property
            }
        if (convertedProperty != null) converted += convertedProperty
      }
      val convertedState =
          if (converted.isEmpty()) "source" else "source[${converted.joinToString(",")}]"
      return transfer(convertedState, target, accepts)
    }

    /** `minecraft:block[property=value]` からproperty部分だけを取り出す。 */
    private fun propertiesOf(blockData: String): List<String> =
        blockData.substringAfter('[', "").substringBefore(']').split(',').filter { it.isNotEmpty() }
  }
}
