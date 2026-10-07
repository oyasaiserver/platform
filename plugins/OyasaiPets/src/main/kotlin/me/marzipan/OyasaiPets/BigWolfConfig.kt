package me.marzipan.OyasaiPets

import kotlin.reflect.KMutableProperty0
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.plugin.java.JavaPlugin

// ===== File: BigWolfConfig.kt =====
/** BigWolfプラグインの設定管理クラス */
object BigWolfConfig {
  // ペット設定
  var maxFoodLevel = 50
  var foodPointCost = 10

  // ショップ設定
  var defaultShopCost = 100

  // スキルブック設定
  var skillBookShopCostLv1 = 50
  var skillBookShopCostLv2 = 100
  var skillBookShopCostLv3 = 150
  var skillBookUseCostLv1 = 50
  var skillBookUseCostLv2 = 100
  var skillBookUseCostLv3 = 150

  // 復活設定
  var reviveCost = 50

  // 交配設定
  var breedMinLevel = 10
  var breedCost = 100
  var maxBreedCount = 3
  var breedRandomMin = 0.9
  var breedRandomMax = 1.1
  var breedGenBonusPerGen = 0.02
  var breedGenBonusMax = 0.2
  var breedMutationChance = 0.1
  var breedMutationBoost = 0.15
  var breedStatCap = 1.5
  var breedBonusLevelPerGen = 1
  var breedBonusLevelMax = 5

  // 交配バリアント確率設定
  // 親のバリアントが選ばれる重み（デフォルト: 7）
  // 親1と親2のバリアントがそれぞれこの重みで候補に追加される
  var breedParentVariantWeight = 7

  // その他のバリアントが選ばれる重み（デフォルト: 3）
  // 親以外の各バリアントがこの重みで候補に追加される
  var breedOtherVariantWeight = 3

  // 復旧設定
  var recoverCost = 50

  // 遊びでのレベルアップ設定
  var playLevelUpChance = 0.05
  var playLevelUpMaxLevel = 10
  var healItemAmount = 10

  // アイテムショップ価格
  var itemShopPetFoodCost = 20
  var itemShopPetBrushCost = 15
  var itemShopPetTreatCost = 15
  var itemShopHealPotionCost = 30
  var itemShopParticleCost = 200
  var itemShopToyCost = 50

  // ペットスポーン時AI設定
  var spawnAiEnabled = true

  // ペット自由移動時の速度倍率（1.0 = デフォルト、0.5 = 半分の速度）
  var freeRoamSpeedMultiplier = 0.5
  // 飛行MOBのフリーローム速度倍率（MOVEMENT_SPEED・FLYING_SPEED 両方に適用）
  var freeRoamFlyingSpeedMultiplier = 0.5

  // 性質（定型/非定型）設定
  var atypicalBaseChance = 0.07 // 基本確率 7%
  var atypicalOneParentChance = 0.15 // 片親非定型 15%
  var atypicalBothParentChance = 0.35 // 両親非定型 35%
  var atypicalLevelUpBonus = 1.5 // レベルアップ確率倍率
  var atypicalAffectionBonus = 1.3 // 親密度上昇倍率
  var childAiEnabled = true // 子供AI有効化

  // システム設定
  const val SKILL_COOLDOWN_MS = 5000L
  const val MAX_PET_COUNT = 3

  private class Field<T>(val key: String, val path: String, val prop: KMutableProperty0<T>) {
    fun read(config: FileConfiguration, intDefault: Int? = null) {
      when (val cur = prop.get()) {
        is Int -> put(config.getInt(path, intDefault ?: cur))
        is Double -> put(config.getDouble(path, cur))
        is Boolean -> put(config.getBoolean(path, cur))
      }
    }

    fun write(raw: String): Boolean =
        when (prop.get()) {
          is Int -> raw.toIntOrNull()?.also { put(it) } != null
          is Double -> raw.toDoubleOrNull()?.also { put(it) } != null
          is Boolean ->
              when (raw.lowercase()) {
                "true" -> {
                  put(true)
                  true
                }
                "false" -> {
                  put(false)
                  true
                }
                else -> false
              }
          else -> false
        }

    private fun put(value: Any) {
      @Suppress("UNCHECKED_CAST") (prop as KMutableProperty0<Any>).set(value)
    }
  }

  // parent: 親のバリアントが選ばれる重み（デフォルト: 7）
  // other: その他のバリアントが選ばれる重み（デフォルト: 3）
  //
  // 計算例（オオカミ9種類, parent=7, other=3 の場合）:
  //   親1: 7個, 親2: 7個, その他7種: 各3個
  //   合計: 35個 → 親1=20%, 親2=20%, その他各=8.6%
  //
  // 設定例:
  //   parent=10, other=0  : 親のバリアントのみ（100%遺伝）
  //   parent=7,  other=3  : デフォルト（親40%, その他60%）
  //   parent=5,  other=5  : 均等（各約11%）
  //   parent=0,  other=10 : 完全ランダム
  private val fields =
      listOf(
          Field("foodPointCost", "economy.foodPointCost", ::foodPointCost),
          Field("maxFoodLevel", "pets.maxFoodLevel", ::maxFoodLevel),
          Field("defaultShopCost", "shop.defaultCost", ::defaultShopCost),
          Field("skillBookShopCostLv1", "skillbook.shopCostLv1", ::skillBookShopCostLv1),
          Field("skillBookShopCostLv2", "skillbook.shopCostLv2", ::skillBookShopCostLv2),
          Field("skillBookShopCostLv3", "skillbook.shopCostLv3", ::skillBookShopCostLv3),
          Field("skillBookUseCostLv1", "skillbook.useCostLv1", ::skillBookUseCostLv1),
          Field("skillBookUseCostLv2", "skillbook.useCostLv2", ::skillBookUseCostLv2),
          Field("skillBookUseCostLv3", "skillbook.useCostLv3", ::skillBookUseCostLv3),
          Field("reviveCost", "revive.cost", ::reviveCost),
          Field("recoverCost", "recover.cost", ::recoverCost),
          Field("healItemAmount", "items.healAmount", ::healItemAmount),
          Field("breedMinLevel", "breed.minLevel", ::breedMinLevel),
          Field("breedCost", "breed.cost", ::breedCost),
          Field("maxBreedCount", "breed.maxCount", ::maxBreedCount),
          Field("breedRandomMin", "breed.randomMin", ::breedRandomMin),
          Field("breedRandomMax", "breed.randomMax", ::breedRandomMax),
          Field("breedGenBonusPerGen", "breed.genBonusPerGen", ::breedGenBonusPerGen),
          Field("breedGenBonusMax", "breed.genBonusMax", ::breedGenBonusMax),
          Field("breedMutationChance", "breed.mutationChance", ::breedMutationChance),
          Field("breedMutationBoost", "breed.mutationBoost", ::breedMutationBoost),
          Field("breedStatCap", "breed.statCap", ::breedStatCap),
          Field("breedBonusLevelPerGen", "breed.bonusLevelPerGen", ::breedBonusLevelPerGen),
          Field("breedBonusLevelMax", "breed.bonusLevelMax", ::breedBonusLevelMax),
          Field(
              "breedParentVariantWeight",
              "breed.variantWeights.parent",
              ::breedParentVariantWeight,
          ),
          Field("breedOtherVariantWeight", "breed.variantWeights.other", ::breedOtherVariantWeight),
          Field("playLevelUpChance", "play.levelUpChance", ::playLevelUpChance),
          Field("playLevelUpMaxLevel", "play.levelUpMaxLevel", ::playLevelUpMaxLevel),
          Field("spawnAiEnabled", "pets.spawnAiEnabled", ::spawnAiEnabled),
          Field(
              "freeRoamSpeedMultiplier",
              "pets.freeRoamSpeedMultiplier",
              ::freeRoamSpeedMultiplier,
          ),
          Field(
              "freeRoamFlyingSpeedMultiplier",
              "pets.freeRoamFlyingSpeedMultiplier",
              ::freeRoamFlyingSpeedMultiplier,
          ),
          Field("atypicalBaseChance", "traits.atypicalBaseChance", ::atypicalBaseChance),
          Field(
              "atypicalOneParentChance",
              "traits.atypicalOneParentChance",
              ::atypicalOneParentChance,
          ),
          Field(
              "atypicalBothParentChance",
              "traits.atypicalBothParentChance",
              ::atypicalBothParentChance,
          ),
          Field("atypicalLevelUpBonus", "traits.atypicalLevelUpBonus", ::atypicalLevelUpBonus),
          Field(
              "atypicalAffectionBonus",
              "traits.atypicalAffectionBonus",
              ::atypicalAffectionBonus,
          ),
          Field("childAiEnabled", "traits.childAiEnabled", ::childAiEnabled),
      )

  /** config.ymlから設定を読み込む */
  fun loadFrom(config: FileConfiguration) {
    val legacySkillCostLv1 = config.getInt("skillbook.costLv1", skillBookShopCostLv1)
    val legacySkillCostLv2 = config.getInt("skillbook.costLv2", skillBookShopCostLv2)
    val legacySkillCostLv3 = config.getInt("skillbook.costLv3", skillBookShopCostLv3)
    for (f in fields) {
      val fallback =
          when (f.key) {
            "skillBookShopCostLv1",
            "skillBookUseCostLv1" -> legacySkillCostLv1
            "skillBookShopCostLv2",
            "skillBookUseCostLv2" -> legacySkillCostLv2
            "skillBookShopCostLv3",
            "skillBookUseCostLv3" -> legacySkillCostLv3
            else -> null
          }
      f.read(config, fallback)
    }

    // アイテムショップ価格（一覧・変更・保存・補完には出さない）
    itemShopPetFoodCost = config.getInt("itemshop.petFoodCost", itemShopPetFoodCost)
    itemShopPetBrushCost = config.getInt("itemshop.petBrushCost", itemShopPetBrushCost)
    itemShopPetTreatCost = config.getInt("itemshop.petTreatCost", itemShopPetTreatCost)
    itemShopHealPotionCost = config.getInt("itemshop.healPotionCost", itemShopHealPotionCost)
    itemShopParticleCost = config.getInt("itemshop.particleCost", itemShopParticleCost)
    itemShopToyCost = config.getInt("itemshop.toyCost", itemShopToyCost)
  }

  /** config.ymlにデフォルト値を設定 */
  fun applyDefaultsTo(config: FileConfiguration) {
    for (f in fields) config.addDefault(f.path, f.prop.get())
    // 旧キー（costLv*）は互換性維持のため残す
    config.addDefault("skillbook.costLv1", skillBookShopCostLv1)
    config.addDefault("skillbook.costLv2", skillBookShopCostLv2)
    config.addDefault("skillbook.costLv3", skillBookShopCostLv3)
    // アイテムショップ価格（一覧・変更・保存・補完には出さない）
    config.addDefault("itemshop.petFoodCost", itemShopPetFoodCost)
    config.addDefault("itemshop.petBrushCost", itemShopPetBrushCost)
    config.addDefault("itemshop.petTreatCost", itemShopPetTreatCost)
    config.addDefault("itemshop.healPotionCost", itemShopHealPotionCost)
    config.addDefault("itemshop.particleCost", itemShopParticleCost)
    config.addDefault("itemshop.toyCost", itemShopToyCost)
  }

  /** スキルブック購入時のコスト */
  fun getSkillBookShopCost(level: Int): Int =
      when (level) {
        1 -> skillBookShopCostLv1
        2 -> skillBookShopCostLv2
        3 -> skillBookShopCostLv3
        else -> 0
      }

  /** スキルブック使用時のコスト */
  fun getSkillBookUseCost(level: Int): Int =
      when (level) {
        1 -> skillBookUseCostLv1
        2 -> skillBookUseCostLv2
        3 -> skillBookUseCostLv3
        else -> 0
      }

  /** 全コンフィグキーと現在値のリストを返す */
  fun asEntryList(): List<Pair<String, Any>> = fields.map { it.key to it.prop.get() }

  /** キー名から現在値を取得 */
  fun getField(key: String): Any? =
      when (key) {
        "skillBookCostLv1" -> skillBookUseCostLv1
        "skillBookCostLv2" -> skillBookUseCostLv2
        "skillBookCostLv3" -> skillBookUseCostLv3
        else -> fields.find { it.key == key }?.prop?.get()
      }

  /** キー名と文字列値でコンフィグを変更（成功時true） */
  fun setField(key: String, raw: String): Boolean =
      when (key) {
        "skillBookCostLv1" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv1 = it
              skillBookUseCostLv1 = it
            } != null
        "skillBookCostLv2" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv2 = it
              skillBookUseCostLv2 = it
            } != null
        "skillBookCostLv3" ->
            raw.toIntOrNull()?.also {
              skillBookShopCostLv3 = it
              skillBookUseCostLv3 = it
            } != null
        else -> fields.find { it.key == key }?.write(raw) ?: false
      }

  /** 変更したキーをconfig.ymlに永続化 */
  fun saveField(key: String, plugin: JavaPlugin) {
    when (key) {
      "skillBookCostLv1" -> {
        plugin.config.set("skillbook.shopCostLv1", skillBookShopCostLv1)
        plugin.config.set("skillbook.useCostLv1", skillBookUseCostLv1)
        plugin.config.set("skillbook.costLv1", skillBookUseCostLv1)
        plugin.saveConfig()
        return
      }
      "skillBookCostLv2" -> {
        plugin.config.set("skillbook.shopCostLv2", skillBookShopCostLv2)
        plugin.config.set("skillbook.useCostLv2", skillBookUseCostLv2)
        plugin.config.set("skillbook.costLv2", skillBookUseCostLv2)
        plugin.saveConfig()
        return
      }
      "skillBookCostLv3" -> {
        plugin.config.set("skillbook.shopCostLv3", skillBookShopCostLv3)
        plugin.config.set("skillbook.useCostLv3", skillBookUseCostLv3)
        plugin.config.set("skillbook.costLv3", skillBookUseCostLv3)
        plugin.saveConfig()
        return
      }
    }
    val path = fields.find { it.key == key }?.path ?: return
    plugin.config.set(path, getField(key))
    plugin.saveConfig()
  }
}
