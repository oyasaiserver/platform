package io.oyasai.directstate.edit.shape

/** 名前は実際のブロック材質に対して解決し、BRICK/QUARTZのようなアイテム名は除外する。 */
internal class ShapeFamilies(blockNames: Set<String>) {
  /** 同じ材質系統に属するフルブロック・ハーフ・階段の名前。 */
  data class Family(val full: String, val slab: String, val stairs: String?)

  /** 実在するSLABを起点に作った、利用可能な形状ファミリー一覧。 */
  val families: List<Family> =
      blockNames
          .filter { it.endsWith("_SLAB") }
          .mapNotNull { slab ->
            val stem = slab.removeSuffix("_SLAB")
            // BAMBOOは植物であり、木材ファミリーのフルブロックではない。竹の形状は
            // bamboo_planksに解決し、充填した竹の階段がBAMBOOにならないようにする。
            val fullCandidates =
                if (stem == "BAMBOO") {
                  listOf("${stem}_PLANKS", stem, "${stem}_BLOCK", "${stem}S")
                } else {
                  listOf(stem, "${stem}_PLANKS", "${stem}_BLOCK", "${stem}S")
                }
            val full = fullCandidates.firstOrNull { it in blockNames } ?: return@mapNotNull null
            Family(full, slab, "${stem}_STAIRS".takeIf { it in blockNames })
          }
  private val byName = buildMap {
    families.forEach { family ->
      put(family.full, family)
      put(family.slab, family)
      family.stairs?.let { put(it, family) }
    }
  }

  /** 材質名から、その材質が属する形状ファミリーを引く。 */
  fun find(name: String) = byName[name]
}
