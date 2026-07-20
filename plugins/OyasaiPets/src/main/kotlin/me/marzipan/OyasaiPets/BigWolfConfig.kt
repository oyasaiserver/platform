@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.configuration.file.FileConfiguration
import org.bukkit.entity.*
import org.bukkit.inventory.*
import org.bukkit.plugin.java.JavaPlugin

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

  /** config.ymlから設定を読み込む */
  fun loadFrom(config: FileConfiguration) {
    // 経済設定
    foodPointCost = config.getInt("economy.foodPointCost", foodPointCost)

    // ペット設定
    maxFoodLevel = config.getInt("pets.maxFoodLevel", maxFoodLevel)

    // ショップ設定
    defaultShopCost = config.getInt("shop.defaultCost", defaultShopCost)

    // スキルブック設定（購入/使用で別コスト対応）
    val legacySkillCostLv1 = config.getInt("skillbook.costLv1", skillBookShopCostLv1)
    val legacySkillCostLv2 = config.getInt("skillbook.costLv2", skillBookShopCostLv2)
    val legacySkillCostLv3 = config.getInt("skillbook.costLv3", skillBookShopCostLv3)
    skillBookShopCostLv1 = config.getInt("skillbook.shopCostLv1", legacySkillCostLv1)
    skillBookShopCostLv2 = config.getInt("skillbook.shopCostLv2", legacySkillCostLv2)
    skillBookShopCostLv3 = config.getInt("skillbook.shopCostLv3", legacySkillCostLv3)
    skillBookUseCostLv1 = config.getInt("skillbook.useCostLv1", legacySkillCostLv1)
    skillBookUseCostLv2 = config.getInt("skillbook.useCostLv2", legacySkillCostLv2)
    skillBookUseCostLv3 = config.getInt("skillbook.useCostLv3", legacySkillCostLv3)

    // 復活設定
    reviveCost = config.getInt("revive.cost", reviveCost)

    // 回復設定
    recoverCost = config.getInt("recover.cost", recoverCost)

    // アイテム設定
    healItemAmount = config.getInt("items.healAmount", healItemAmount)

    // アイテムショップ価格
    itemShopPetFoodCost = config.getInt("itemshop.petFoodCost", itemShopPetFoodCost)
    itemShopPetBrushCost = config.getInt("itemshop.petBrushCost", itemShopPetBrushCost)
    itemShopPetTreatCost = config.getInt("itemshop.petTreatCost", itemShopPetTreatCost)
    itemShopHealPotionCost = config.getInt("itemshop.healPotionCost", itemShopHealPotionCost)
    itemShopParticleCost = config.getInt("itemshop.particleCost", itemShopParticleCost)
    itemShopToyCost = config.getInt("itemshop.toyCost", itemShopToyCost)

    // 遊び機能設定
    playLevelUpChance = config.getDouble("play.levelUpChance", playLevelUpChance)
    playLevelUpMaxLevel = config.getInt("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    spawnAiEnabled = config.getBoolean("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    freeRoamSpeedMultiplier =
        config.getDouble("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)
    freeRoamFlyingSpeedMultiplier =
        config.getDouble("pets.freeRoamFlyingSpeedMultiplier", freeRoamFlyingSpeedMultiplier)

    // 交配設定
    breedMinLevel = config.getInt("breed.minLevel", breedMinLevel)
    breedCost = config.getInt("breed.cost", breedCost)
    maxBreedCount = config.getInt("breed.maxCount", maxBreedCount)
    breedRandomMin = config.getDouble("breed.randomMin", breedRandomMin)
    breedRandomMax = config.getDouble("breed.randomMax", breedRandomMax)
    breedGenBonusPerGen = config.getDouble("breed.genBonusPerGen", breedGenBonusPerGen)
    breedGenBonusMax = config.getDouble("breed.genBonusMax", breedGenBonusMax)
    breedMutationChance = config.getDouble("breed.mutationChance", breedMutationChance)
    breedMutationBoost = config.getDouble("breed.mutationBoost", breedMutationBoost)
    breedStatCap = config.getDouble("breed.statCap", breedStatCap)
    breedBonusLevelPerGen = config.getInt("breed.bonusLevelPerGen", breedBonusLevelPerGen)
    breedBonusLevelMax = config.getInt("breed.bonusLevelMax", breedBonusLevelMax)

    // バリアント遺伝確率設定
    breedParentVariantWeight =
        config.getInt("breed.variantWeights.parent", breedParentVariantWeight)
    breedOtherVariantWeight = config.getInt("breed.variantWeights.other", breedOtherVariantWeight)

    // 性質設定
    atypicalBaseChance = config.getDouble("traits.atypicalBaseChance", atypicalBaseChance)
    atypicalOneParentChance =
        config.getDouble("traits.atypicalOneParentChance", atypicalOneParentChance)
    atypicalBothParentChance =
        config.getDouble("traits.atypicalBothParentChance", atypicalBothParentChance)
    atypicalLevelUpBonus = config.getDouble("traits.atypicalLevelUpBonus", atypicalLevelUpBonus)
    atypicalAffectionBonus =
        config.getDouble("traits.atypicalAffectionBonus", atypicalAffectionBonus)
    childAiEnabled = config.getBoolean("traits.childAiEnabled", childAiEnabled)
  }

  /** config.ymlにデフォルト値を設定 */
  fun applyDefaultsTo(config: FileConfiguration) {
    // 経済設定
    config.addDefault("economy.foodPointCost", foodPointCost)

    // ペット設定
    config.addDefault("pets.maxFoodLevel", maxFoodLevel)

    // ショップ設定
    config.addDefault("shop.defaultCost", defaultShopCost)

    // スキルブック設定
    // 旧キー（costLv*）は互換性維持のため残しつつ、新しいshop/useキーも設定
    config.addDefault("skillbook.costLv1", skillBookShopCostLv1)
    config.addDefault("skillbook.costLv2", skillBookShopCostLv2)
    config.addDefault("skillbook.costLv3", skillBookShopCostLv3)
    config.addDefault("skillbook.shopCostLv1", skillBookShopCostLv1)
    config.addDefault("skillbook.shopCostLv2", skillBookShopCostLv2)
    config.addDefault("skillbook.shopCostLv3", skillBookShopCostLv3)
    config.addDefault("skillbook.useCostLv1", skillBookUseCostLv1)
    config.addDefault("skillbook.useCostLv2", skillBookUseCostLv2)
    config.addDefault("skillbook.useCostLv3", skillBookUseCostLv3)

    // 復活設定
    config.addDefault("revive.cost", reviveCost)

    // 回復設定
    config.addDefault("recover.cost", recoverCost)

    // アイテム設定
    config.addDefault("items.healAmount", healItemAmount)

    // アイテムショップ価格
    config.addDefault("itemshop.petFoodCost", itemShopPetFoodCost)
    config.addDefault("itemshop.petBrushCost", itemShopPetBrushCost)
    config.addDefault("itemshop.petTreatCost", itemShopPetTreatCost)
    config.addDefault("itemshop.healPotionCost", itemShopHealPotionCost)
    config.addDefault("itemshop.particleCost", itemShopParticleCost)
    config.addDefault("itemshop.toyCost", itemShopToyCost)

    // 遊び機能設定
    config.addDefault("play.levelUpChance", playLevelUpChance)
    config.addDefault("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    config.addDefault("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    config.addDefault("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)
    config.addDefault("pets.freeRoamFlyingSpeedMultiplier", freeRoamFlyingSpeedMultiplier)

    // 交配設定
    config.addDefault("breed.minLevel", breedMinLevel)
    config.addDefault("breed.cost", breedCost)
    config.addDefault("breed.maxCount", maxBreedCount)
    config.addDefault("breed.randomMin", breedRandomMin)
    config.addDefault("breed.randomMax", breedRandomMax)
    config.addDefault("breed.genBonusPerGen", breedGenBonusPerGen)
    config.addDefault("breed.genBonusMax", breedGenBonusMax)
    config.addDefault("breed.mutationChance", breedMutationChance)
    config.addDefault("breed.mutationBoost", breedMutationBoost)
    config.addDefault("breed.statCap", breedStatCap)
    config.addDefault("breed.bonusLevelPerGen", breedBonusLevelPerGen)
    config.addDefault("breed.bonusLevelMax", breedBonusLevelMax)

    // バリアント遺伝確率設定
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
    config.addDefault("breed.variantWeights.parent", breedParentVariantWeight)
    config.addDefault("breed.variantWeights.other", breedOtherVariantWeight)

    // 性質設定
    config.addDefault("traits.atypicalBaseChance", atypicalBaseChance)
    config.addDefault("traits.atypicalOneParentChance", atypicalOneParentChance)
    config.addDefault("traits.atypicalBothParentChance", atypicalBothParentChance)
    config.addDefault("traits.atypicalLevelUpBonus", atypicalLevelUpBonus)
    config.addDefault("traits.atypicalAffectionBonus", atypicalAffectionBonus)
    config.addDefault("traits.childAiEnabled", childAiEnabled)
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
  fun asEntryList(): List<Pair<String, Any>> =
      listOf(
          "foodPointCost" to foodPointCost,
          "maxFoodLevel" to maxFoodLevel,
          "defaultShopCost" to defaultShopCost,
          "skillBookShopCostLv1" to skillBookShopCostLv1,
          "skillBookShopCostLv2" to skillBookShopCostLv2,
          "skillBookShopCostLv3" to skillBookShopCostLv3,
          "skillBookUseCostLv1" to skillBookUseCostLv1,
          "skillBookUseCostLv2" to skillBookUseCostLv2,
          "skillBookUseCostLv3" to skillBookUseCostLv3,
          "reviveCost" to reviveCost,
          "recoverCost" to recoverCost,
          "healItemAmount" to healItemAmount,
          "breedMinLevel" to breedMinLevel,
          "breedCost" to breedCost,
          "maxBreedCount" to maxBreedCount,
          "breedRandomMin" to breedRandomMin,
          "breedRandomMax" to breedRandomMax,
          "breedGenBonusPerGen" to breedGenBonusPerGen,
          "breedGenBonusMax" to breedGenBonusMax,
          "breedMutationChance" to breedMutationChance,
          "breedMutationBoost" to breedMutationBoost,
          "breedStatCap" to breedStatCap,
          "breedBonusLevelPerGen" to breedBonusLevelPerGen,
          "breedBonusLevelMax" to breedBonusLevelMax,
          "breedParentVariantWeight" to breedParentVariantWeight,
          "breedOtherVariantWeight" to breedOtherVariantWeight,
          "playLevelUpChance" to playLevelUpChance,
          "playLevelUpMaxLevel" to playLevelUpMaxLevel,
          "spawnAiEnabled" to spawnAiEnabled,
          "freeRoamSpeedMultiplier" to freeRoamSpeedMultiplier,
          "freeRoamFlyingSpeedMultiplier" to freeRoamFlyingSpeedMultiplier,
          "atypicalBaseChance" to atypicalBaseChance,
          "atypicalOneParentChance" to atypicalOneParentChance,
          "atypicalBothParentChance" to atypicalBothParentChance,
          "atypicalLevelUpBonus" to atypicalLevelUpBonus,
          "atypicalAffectionBonus" to atypicalAffectionBonus,
          "childAiEnabled" to childAiEnabled,
      )

  /** キー名から現在値を取得 */
  fun getField(key: String): Any? =
      when (key) {
        "skillBookCostLv1" -> skillBookUseCostLv1
        "skillBookCostLv2" -> skillBookUseCostLv2
        "skillBookCostLv3" -> skillBookUseCostLv3
        else -> asEntryList().find { it.first == key }?.second
      }

  /** キー名と文字列値でコンフィグを変更（成功時true） */
  fun setField(key: String, raw: String): Boolean =
      when (key) {
        "foodPointCost" -> raw.toIntOrNull()?.also { foodPointCost = it } != null
        "maxFoodLevel" -> raw.toIntOrNull()?.also { maxFoodLevel = it } != null
        "defaultShopCost" -> raw.toIntOrNull()?.also { defaultShopCost = it } != null
        "skillBookShopCostLv1" -> raw.toIntOrNull()?.also { skillBookShopCostLv1 = it } != null
        "skillBookShopCostLv2" -> raw.toIntOrNull()?.also { skillBookShopCostLv2 = it } != null
        "skillBookShopCostLv3" -> raw.toIntOrNull()?.also { skillBookShopCostLv3 = it } != null
        "skillBookUseCostLv1" -> raw.toIntOrNull()?.also { skillBookUseCostLv1 = it } != null
        "skillBookUseCostLv2" -> raw.toIntOrNull()?.also { skillBookUseCostLv2 = it } != null
        "skillBookUseCostLv3" -> raw.toIntOrNull()?.also { skillBookUseCostLv3 = it } != null
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
        "reviveCost" -> raw.toIntOrNull()?.also { reviveCost = it } != null
        "recoverCost" -> raw.toIntOrNull()?.also { recoverCost = it } != null
        "healItemAmount" -> raw.toIntOrNull()?.also { healItemAmount = it } != null
        "breedMinLevel" -> raw.toIntOrNull()?.also { breedMinLevel = it } != null
        "breedCost" -> raw.toIntOrNull()?.also { breedCost = it } != null
        "maxBreedCount" -> raw.toIntOrNull()?.also { maxBreedCount = it } != null
        "breedRandomMin" -> raw.toDoubleOrNull()?.also { breedRandomMin = it } != null
        "breedRandomMax" -> raw.toDoubleOrNull()?.also { breedRandomMax = it } != null
        "breedGenBonusPerGen" -> raw.toDoubleOrNull()?.also { breedGenBonusPerGen = it } != null
        "breedGenBonusMax" -> raw.toDoubleOrNull()?.also { breedGenBonusMax = it } != null
        "breedMutationChance" -> raw.toDoubleOrNull()?.also { breedMutationChance = it } != null
        "breedMutationBoost" -> raw.toDoubleOrNull()?.also { breedMutationBoost = it } != null
        "breedStatCap" -> raw.toDoubleOrNull()?.also { breedStatCap = it } != null
        "breedBonusLevelPerGen" -> raw.toIntOrNull()?.also { breedBonusLevelPerGen = it } != null
        "breedBonusLevelMax" -> raw.toIntOrNull()?.also { breedBonusLevelMax = it } != null
        "breedParentVariantWeight" ->
            raw.toIntOrNull()?.also { breedParentVariantWeight = it } != null
        "breedOtherVariantWeight" ->
            raw.toIntOrNull()?.also { breedOtherVariantWeight = it } != null
        "playLevelUpChance" -> raw.toDoubleOrNull()?.also { playLevelUpChance = it } != null
        "playLevelUpMaxLevel" -> raw.toIntOrNull()?.also { playLevelUpMaxLevel = it } != null
        "spawnAiEnabled" -> {
          val value =
              when (raw.lowercase()) {
                "true" -> true
                "false" -> false
                else -> return false
              }
          spawnAiEnabled = value
          true
        }
        "freeRoamSpeedMultiplier" ->
            raw.toDoubleOrNull()?.also { freeRoamSpeedMultiplier = it } != null
        "freeRoamFlyingSpeedMultiplier" ->
            raw.toDoubleOrNull()?.also { freeRoamFlyingSpeedMultiplier = it } != null
        "atypicalBaseChance" -> raw.toDoubleOrNull()?.also { atypicalBaseChance = it } != null
        "atypicalOneParentChance" ->
            raw.toDoubleOrNull()?.also { atypicalOneParentChance = it } != null
        "atypicalBothParentChance" ->
            raw.toDoubleOrNull()?.also { atypicalBothParentChance = it } != null
        "atypicalLevelUpBonus" -> raw.toDoubleOrNull()?.also { atypicalLevelUpBonus = it } != null
        "atypicalAffectionBonus" ->
            raw.toDoubleOrNull()?.also { atypicalAffectionBonus = it } != null
        "childAiEnabled" -> {
          val value =
              when (raw.lowercase()) {
                "true" -> true
                "false" -> false
                else -> return false
              }
          childAiEnabled = value
          true
        }
        else -> false
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
    val path =
        when (key) {
          "foodPointCost" -> "economy.foodPointCost"
          "maxFoodLevel" -> "pets.maxFoodLevel"
          "defaultShopCost" -> "shop.defaultCost"
          "skillBookShopCostLv1" -> "skillbook.shopCostLv1"
          "skillBookShopCostLv2" -> "skillbook.shopCostLv2"
          "skillBookShopCostLv3" -> "skillbook.shopCostLv3"
          "skillBookUseCostLv1" -> "skillbook.useCostLv1"
          "skillBookUseCostLv2" -> "skillbook.useCostLv2"
          "skillBookUseCostLv3" -> "skillbook.useCostLv3"
          "reviveCost" -> "revive.cost"
          "recoverCost" -> "recover.cost"
          "healItemAmount" -> "items.healAmount"
          "breedMinLevel" -> "breed.minLevel"
          "breedCost" -> "breed.cost"
          "maxBreedCount" -> "breed.maxCount"
          "breedRandomMin" -> "breed.randomMin"
          "breedRandomMax" -> "breed.randomMax"
          "breedGenBonusPerGen" -> "breed.genBonusPerGen"
          "breedGenBonusMax" -> "breed.genBonusMax"
          "breedMutationChance" -> "breed.mutationChance"
          "breedMutationBoost" -> "breed.mutationBoost"
          "breedStatCap" -> "breed.statCap"
          "breedBonusLevelPerGen" -> "breed.bonusLevelPerGen"
          "breedBonusLevelMax" -> "breed.bonusLevelMax"
          "breedParentVariantWeight" -> "breed.variantWeights.parent"
          "breedOtherVariantWeight" -> "breed.variantWeights.other"
          "playLevelUpChance" -> "play.levelUpChance"
          "playLevelUpMaxLevel" -> "play.levelUpMaxLevel"
          "spawnAiEnabled" -> "pets.spawnAiEnabled"
          "freeRoamSpeedMultiplier" -> "pets.freeRoamSpeedMultiplier"
          "freeRoamFlyingSpeedMultiplier" -> "pets.freeRoamFlyingSpeedMultiplier"
          "atypicalBaseChance" -> "traits.atypicalBaseChance"
          "atypicalOneParentChance" -> "traits.atypicalOneParentChance"
          "atypicalBothParentChance" -> "traits.atypicalBothParentChance"
          "atypicalLevelUpBonus" -> "traits.atypicalLevelUpBonus"
          "atypicalAffectionBonus" -> "traits.atypicalAffectionBonus"
          "childAiEnabled" -> "traits.childAiEnabled"
          else -> return
        }
    plugin.config.set(path, getField(key))
    plugin.saveConfig()
  }
}
