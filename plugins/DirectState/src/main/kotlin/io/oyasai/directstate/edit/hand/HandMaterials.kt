package io.oyasai.directstate.edit.hand

import org.bukkit.Material
import org.bukkit.block.data.BlockData

/** 対象材質と材質切替の対応 */
internal object HandMaterials {

  val directionalMaterials: Set<String> = setOf("BARREL", "CHEST", "BELL", "FURNACE")

  val levelMaterials: Set<String> =
      setOf(
          "WATER",
          "LAVA",
          "CAULDRON",
          "WATER_CAULDRON",
          "LAVA_CAULDRON",
          "POWDER_SNOW_CAULDRON",
          "COMPOSTER",
      )

  /** 専用操作を優先し、共通lit/poweredでは編集しない材質 */
  val genericExcludedMaterials: Set<String> =
      setOf(
          "PISTON",
          "FURNACE",
          "IRON_DOOR",
          "IRON_TRAPDOOR",
          "BREWING_STAND",
          "FARMLAND",
          "LECTERN",
          "BEEHIVE",
          "CAKE",
          "LANTERN",
          "SOUL_LANTERN",
          "TURTLE_EGG",
          "SNOW",
          "OBSERVER",
          "END_PORTAL_FRAME",
      )

  /** クリックでタイプごと入れ替わる * */
  val materialSwitches: Map<String, String> =
      mapOf(
          "CARVED_PUMPKIN" to "JACK_O_LANTERN",
          "JACK_O_LANTERN" to "CARVED_PUMPKIN",
          "BAMBOO_BLOCK" to "STRIPPED_BAMBOO_BLOCK",
          "STRIPPED_BAMBOO_BLOCK" to "BAMBOO_BLOCK",
          "GRASS_BLOCK" to "DIRT_PATH",
          "DIRT_PATH" to "GRASS_BLOCK",
          "DIRT" to "COARSE_DIRT",
          "COARSE_DIRT" to "ROOTED_DIRT",
          "ROOTED_DIRT" to "DIRT",
          "NETHER_SPROUTS" to "WARPED_ROOTS",
          "WARPED_ROOTS" to "NETHER_SPROUTS",
          "AZALEA" to "FLOWERING_AZALEA",
          "FLOWERING_AZALEA" to "AZALEA",
          "AZALEA_LEAVES" to "FLOWERING_AZALEA_LEAVES",
          "FLOWERING_AZALEA_LEAVES" to "AZALEA_LEAVES",
          "AMETHYST_BLOCK" to "BUDDING_AMETHYST",
          "BUDDING_AMETHYST" to "AMETHYST_BLOCK",
          "OBSIDIAN" to "CRYING_OBSIDIAN",
          "CRYING_OBSIDIAN" to "OBSIDIAN",
          "SMALL_AMETHYST_BUD" to "MEDIUM_AMETHYST_BUD",
          "MEDIUM_AMETHYST_BUD" to "LARGE_AMETHYST_BUD",
          "LARGE_AMETHYST_BUD" to "AMETHYST_CLUSTER",
          "AMETHYST_CLUSTER" to "SMALL_AMETHYST_BUD",
          "TWISTING_VINES" to "TWISTING_VINES_PLANT",
          "TWISTING_VINES_PLANT" to "TWISTING_VINES",
          "WEEPING_VINES" to "WEEPING_VINES_PLANT",
          "WEEPING_VINES_PLANT" to "WEEPING_VINES",
          "CAVE_VINES" to "CAVE_VINES_PLANT",
          "CAVE_VINES_PLANT" to "CAVE_VINES",
          "KELP" to "KELP_PLANT",
          "KELP_PLANT" to "KELP",
          "DANDELION" to "GOLDEN_DANDELION",
          "GOLDEN_DANDELION" to "DANDELION",
          "CLOSED_EYEBLOSSOM" to "OPEN_EYEBLOSSOM",
          "OPEN_EYEBLOSSOM" to "CLOSED_EYEBLOSSOM",
          "SPONGE" to "WET_SPONGE",
          "WET_SPONGE" to "SPONGE",
          "OCHRE_FROGLIGHT" to "VERDANT_FROGLIGHT",
          "VERDANT_FROGLIGHT" to "PEARLESCENT_FROGLIGHT",
          "PEARLESCENT_FROGLIGHT" to "OCHRE_FROGLIGHT",
      )

  /** Bukkit非依存の純粋な切替表引き。Materialへの変換が必要な場合はswitchMaterialを使う。 */
  fun switchMaterialName(name: String): String? = materialSwitches[name]

  /** 共通level操作を許可する材質か調べる。 */
  fun isLevelMaterial(name: String): Boolean = name in levelMaterials

  /** ブロック固有操作を優先し、共通lit/powered操作から外す材質か調べる。 */
  fun isGenericExcluded(name: String): Boolean = name in genericExcludedMaterials

  /** 回転値を持つ頭・旗として扱う材質か調べる。 */
  internal fun isRotatableMaterial(name: String) =
      name == "PLAYER_HEAD" ||
          name == "PLAYER_WALL_HEAD" ||
          name.endsWith("_BANNER") ||
          name.endsWith("_WALL_BANNER")

  /** 金床の三段階のどれかを調べる。 */
  internal fun isAnvilMaterial(name: String) =
      name in setOf("ANVIL", "CHIPPED_ANVIL", "DAMAGED_ANVIL")

  /** 専用の向き巡回を行う材質か調べる。 */
  internal fun isFacingMaterial(name: String) =
      name in HandMaterials.directionalMaterials ||
          name in setOf("LOOM", "STONECUTTER") ||
          name.endsWith("_GLAZED_TERRACOTTA") ||
          name == "ATTACHED_MELON_STEM" ||
          name == "ATTACHED_PUMPKIN_STEM"

  /** 通常のカボチャ・メロンの茎を、実が付いた茎の材質へ変える。 */
  internal fun attachedStemMaterial(name: String): Material =
      when (name) {
        "PUMPKIN_STEM" -> Material.ATTACHED_PUMPKIN_STEM
        "MELON_STEM" -> Material.ATTACHED_MELON_STEM
        else -> error("Not a regular stem: $name")
      }

  /** 実が付いたカボチャ・メロンの茎を、通常の茎へ戻す。 */
  internal fun regularStemMaterial(name: String): Material =
      when (name) {
        "ATTACHED_PUMPKIN_STEM" -> Material.PUMPKIN_STEM
        "ATTACHED_MELON_STEM" -> Material.MELON_STEM
        else -> error("Not an attached stem: $name")
      }

  // 材質固有のバリアント
  internal val STEM_MATERIALS = setOf("PUMPKIN_STEM", "MELON_STEM")
  internal val ATTACHED_STEM_MATERIALS = setOf("ATTACHED_PUMPKIN_STEM", "ATTACHED_MELON_STEM")
  internal val FURNACE_HOLE_MATERIALS = setOf("FURNACE", "BLAST_FURNACE", "SMOKER")
  internal val SUSPICIOUS_MATERIALS = setOf("SUSPICIOUS_SAND", "SUSPICIOUS_GRAVEL")
  internal val PLAIN_BRUSHABLE_MATERIALS = setOf("SAND", "GRAVEL")
  internal val PUMPKIN_MATERIALS = setOf("PUMPKIN", "CARVED_PUMPKIN", "JACK_O_LANTERN")
  internal val CORAL_FAN_MATERIALS =
      mapOf(
          "BRAIN_CORAL_FAN" to "BRAIN_CORAL_WALL_FAN",
          "BRAIN_CORAL_WALL_FAN" to "BRAIN_CORAL_FAN",
          "BUBBLE_CORAL_FAN" to "BUBBLE_CORAL_WALL_FAN",
          "BUBBLE_CORAL_WALL_FAN" to "BUBBLE_CORAL_FAN",
          "FIRE_CORAL_FAN" to "FIRE_CORAL_WALL_FAN",
          "FIRE_CORAL_WALL_FAN" to "FIRE_CORAL_FAN",
          "HORN_CORAL_FAN" to "HORN_CORAL_WALL_FAN",
          "HORN_CORAL_WALL_FAN" to "HORN_CORAL_FAN",
          "TUBE_CORAL_FAN" to "TUBE_CORAL_WALL_FAN",
          "TUBE_CORAL_WALL_FAN" to "TUBE_CORAL_FAN",
          "DEAD_BRAIN_CORAL_FAN" to "DEAD_BRAIN_CORAL_WALL_FAN",
          "DEAD_BRAIN_CORAL_WALL_FAN" to "DEAD_BRAIN_CORAL_FAN",
          "DEAD_BUBBLE_CORAL_FAN" to "DEAD_BUBBLE_CORAL_WALL_FAN",
          "DEAD_BUBBLE_CORAL_WALL_FAN" to "DEAD_BUBBLE_CORAL_FAN",
          "DEAD_FIRE_CORAL_FAN" to "DEAD_FIRE_CORAL_WALL_FAN",
          "DEAD_FIRE_CORAL_WALL_FAN" to "DEAD_FIRE_CORAL_FAN",
          "DEAD_HORN_CORAL_FAN" to "DEAD_HORN_CORAL_WALL_FAN",
          "DEAD_HORN_CORAL_WALL_FAN" to "DEAD_HORN_CORAL_FAN",
          "DEAD_TUBE_CORAL_FAN" to "DEAD_TUBE_CORAL_WALL_FAN",
          "DEAD_TUBE_CORAL_WALL_FAN" to "DEAD_TUBE_CORAL_FAN",
      )

  /** Materialを名前による材質切替へ渡す短縮入口。 */
  internal fun switchMaterial(material: Material): Material? = switchMaterial(material.name)

  /** 金床を通常→欠け→破損→通常の順で切り替える。 */
  internal fun nextAnvilMaterial(name: String): Material =
      when (name) {
        "ANVIL" -> Material.CHIPPED_ANVIL
        "CHIPPED_ANVIL" -> Material.DAMAGED_ANVIL
        else -> Material.ANVIL
      }

  /** 切替表の名前をBukkit Materialへ解決する。未定義ならnull。 */
  internal fun switchMaterial(name: String): Material? =
      HandMaterials.switchMaterialName(name)?.let(Material::matchMaterial)

  /** 原木・木を皮付きと皮なしの相方へ変換する。対象外ならnull。 */
  internal fun strippedCounterpart(name: String): Material? {
    val counterpart =
        when {
          name.startsWith("STRIPPED_") && (name.endsWith("_LOG") || name.endsWith("_WOOD")) ->
              name.removePrefix("STRIPPED_")
          name.endsWith("_LOG") || name.endsWith("_WOOD") -> "STRIPPED_$name"
          else -> return null
        }
    return Material.matchMaterial(counterpart)
  }

  /** 通常看板・壁看板・吊り看板をまとめて判定する。 */
  internal fun isSign(data: BlockData) = data.material.name.endsWith("_SIGN")

  /** 吊り看板の壁付け・通常吊り・鎖二本吊りに対応する材質を返す。 */
  internal fun hangingSignMaterialTransition(name: String, attached: Boolean): Material? {
    return when {
      name.endsWith("_WALL_HANGING_SIGN") ->
          Material.matchMaterial(name.removeSuffix("_WALL_HANGING_SIGN") + "_HANGING_SIGN")
      name.endsWith("_HANGING_SIGN") && attached ->
          Material.matchMaterial(name.removeSuffix("_HANGING_SIGN") + "_WALL_HANGING_SIGN")
      else -> null
    }
  }

  /** 位置対応の成長面を持つ材質。 */
  internal val growthFaceMaterials = setOf("VINE", "GLOW_LICHEN", "SCULK_VEIN", "RESIN_CLUMP")

  /** クリック面toggleのキノコ系材質。 */
  internal val mushroomFaceMaterials =
      setOf("BROWN_MUSHROOM_BLOCK", "RED_MUSHROOM_BLOCK", "MUSHROOM_STEM")

  /** 2ブロック植物。Door/Stairs等のBisectedは含めず、植物だけを文脈編集する。 */
  internal val twoBlockPlantMaterials =
      setOf(
          "SUNFLOWER",
          "LILAC",
          "ROSE_BUSH",
          "PEONY",
          "TALL_GRASS",
          "LARGE_FERN",
          "TALL_SEAGRASS",
          "PITCHER_CROP",
          "PITCHER_PLANT",
          "SMALL_DRIPLEAF",
      )
}
