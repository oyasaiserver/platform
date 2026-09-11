package io.oyasai.worldgen.height

import org.bukkit.World

interface HeightProvider {
  /** ワールド生成前に呼ぶ。宣言だけ行う */
  fun declare(worldName: String, spec: HeightSpec)

  /** WorldInitEvent の中で呼ぶ。実際に適用する */
  fun apply(world: World): Boolean

  /** 適用後の読み返し。期待値と一致するか */
  fun verify(world: World, spec: HeightSpec): Boolean

  val name: String
}

data class HeightSpec(val minY: Int, val height: Int, val logicalHeight: Int) {
  val maxHeight: Int
    get() = minY + height
}
