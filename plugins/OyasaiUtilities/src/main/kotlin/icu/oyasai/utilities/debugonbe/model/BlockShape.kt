package icu.oyasai.utilities.debugonbe.model

import org.bukkit.block.data.BlockData

/** ブロック形状の種類。 素材（オーク・ダークオークなど）ではなく、形状（フェンス・壁など）で分類する。 */
enum class BlockShape(
    /** このシェイプに対応するブロック状態キーの一覧 */
    val stateKeys: List<String>
) {

  FENCE(listOf("east", "west", "north", "south", "waterlogged")),
  WALL(listOf("east", "west", "north", "south", "up", "waterlogged")),
  STAIRS(listOf("facing", "half", "shape", "waterlogged")),
  SLAB(listOf("type", "waterlogged")),
  DOOR(listOf("facing", "half", "hinge", "open", "powered")),
  TRAPDOOR(listOf("facing", "half", "open", "powered", "waterlogged")),
  GLASS_PANE(listOf("east", "west", "north", "south", "waterlogged")),
  IRON_BARS(listOf("east", "west", "north", "south", "waterlogged"));

  companion object {

    /** BlockData からシェイプを判定する。 対応していないブロックタイプの場合は null を返す。 */
    fun of(blockData: BlockData): BlockShape? {
      val name = blockData.material.name
      return when {
        name.endsWith("_FENCE") -> FENCE
        name.endsWith("_WALL") -> WALL
        name.endsWith("_STAIRS") -> STAIRS
        name.endsWith("_SLAB") -> SLAB
        name.endsWith("_TRAPDOOR") -> TRAPDOOR
        name.endsWith("_DOOR") -> DOOR
        name == "GLASS_PANE" || name.endsWith("_GLASS_PANE") -> GLASS_PANE
        name == "IRON_BARS" -> IRON_BARS
        else -> null
      }
    }

    /** 文字列から BlockShape を返す */
    fun fromString(name: String): BlockShape? =
        entries.firstOrNull { it.name.equals(name, ignoreCase = true) }
  }
}
