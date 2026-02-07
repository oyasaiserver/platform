package me.marzipan.OyasaiPets

import org.bukkit.configuration.file.FileConfiguration

/** BigWolfプラグインの設定管理クラス */
object BigWolfConfig {
  // ペット設定
  var maxFoodLevel = 50
  var foodPointCost = 100

  // ショップ設定
  var defaultShopCost = 100

  // スキルブック設定
  var skillBookCostLv1 = 50
  var skillBookCostLv2 = 100
  var skillBookCostLv3 = 150

  // 復活設定
  var reviveCost = 50

  // 交配設定
  var breedMinLevel = 10
  var breedCost = 200
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
  var recoverCost = 100

  // 遊びでのレベルアップ設定
  var playLevelUpChance = 0.05
  var playLevelUpMaxLevel = 10
  var healItemAmount = 10

  // ペットスポーン時AI設定
  var spawnAiEnabled = true

  // ペット自由移動時の速度倍率（1.0 = デフォルト、0.5 = 半分の速度）
  var freeRoamSpeedMultiplier = 0.5

  // 性質（定型/非定型）設定
  var atypicalBaseChance = 0.07          // 基本確率 7%
  var atypicalOneParentChance = 0.15     // 片親非定型 15%
  var atypicalBothParentChance = 0.35    // 両親非定型 35%
  var atypicalLevelUpBonus = 1.5         // レベルアップ確率倍率
  var atypicalAffectionBonus = 1.3       // 親密度上昇倍率
  var childAiEnabled = true              // 子供AI有効化

  // システム設定
  const val SKILL_COOLDOWN_MS = 5000L
  const val MAX_PET_COUNT = 3
  const val REMOVEALL_CONFIRM_TIMEOUT_MS = 15_000L

  /** config.ymlから設定を読み込む */
  fun loadFrom(config: FileConfiguration) {
    // 経済設定
    foodPointCost = config.getInt("economy.foodPointCost", foodPointCost)

    // ペット設定
    maxFoodLevel = config.getInt("pets.maxFoodLevel", maxFoodLevel)

    // ショップ設定
    defaultShopCost = config.getInt("shop.defaultCost", defaultShopCost)

    // スキルブック設定
    skillBookCostLv1 = config.getInt("skillbook.costLv1", skillBookCostLv1)
    skillBookCostLv2 = config.getInt("skillbook.costLv2", skillBookCostLv2)
    skillBookCostLv3 = config.getInt("skillbook.costLv3", skillBookCostLv3)

    // 復活設定
    reviveCost = config.getInt("revive.cost", reviveCost)

    // 回復設定
    recoverCost = config.getInt("recover.cost", recoverCost)

    // アイテム設定
    healItemAmount = config.getInt("items.healAmount", healItemAmount)

    // 遊び機能設定
    playLevelUpChance = config.getDouble("play.levelUpChance", playLevelUpChance)
    playLevelUpMaxLevel = config.getInt("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    spawnAiEnabled = config.getBoolean("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    freeRoamSpeedMultiplier = config.getDouble("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)

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
    breedParentVariantWeight = config.getInt("breed.variantWeights.parent", breedParentVariantWeight)
    breedOtherVariantWeight = config.getInt("breed.variantWeights.other", breedOtherVariantWeight)

    // 性質設定
    atypicalBaseChance = config.getDouble("traits.atypicalBaseChance", atypicalBaseChance)
    atypicalOneParentChance = config.getDouble("traits.atypicalOneParentChance", atypicalOneParentChance)
    atypicalBothParentChance = config.getDouble("traits.atypicalBothParentChance", atypicalBothParentChance)
    atypicalLevelUpBonus = config.getDouble("traits.atypicalLevelUpBonus", atypicalLevelUpBonus)
    atypicalAffectionBonus = config.getDouble("traits.atypicalAffectionBonus", atypicalAffectionBonus)
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
    config.addDefault("skillbook.costLv1", skillBookCostLv1)
    config.addDefault("skillbook.costLv2", skillBookCostLv2)
    config.addDefault("skillbook.costLv3", skillBookCostLv3)

    // 復活設定
    config.addDefault("revive.cost", reviveCost)

    // 回復設定
    config.addDefault("recover.cost", recoverCost)

    // アイテム設定
    config.addDefault("items.healAmount", healItemAmount)

    // 遊び機能設定
    config.addDefault("play.levelUpChance", playLevelUpChance)
    config.addDefault("play.levelUpMaxLevel", playLevelUpMaxLevel)

    // ペットスポーン時AI設定
    config.addDefault("pets.spawnAiEnabled", spawnAiEnabled)

    // ペット自由移動時の速度倍率
    config.addDefault("pets.freeRoamSpeedMultiplier", freeRoamSpeedMultiplier)

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

  /** スキルブックレベルに応じたコストを取得 */
  fun getSkillBookCost(level: Int): Int =
      when (level) {
        1 -> skillBookCostLv1
        2 -> skillBookCostLv2
        3 -> skillBookCostLv3
        else -> 0
      }
}
