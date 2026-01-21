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

  // システム設定
  // システム設定
  const val SKILL_COOLDOWN_MS = 5000L
  const val MAX_PET_COUNT = 3
  const val REMOVEALL_CONFIRM_TIMEOUT_MS = 15_000L
  const val PERMISSION = "bigwolf.admin"

  /** config.ymlから設定を読み込む */
  fun loadFrom(config: FileConfiguration) {
    foodPointCost = config.getInt("economy.foodPointCost", foodPointCost)
    maxFoodLevel = config.getInt("pets.maxFoodLevel", maxFoodLevel)
    defaultShopCost = config.getInt("shop.defaultCost", defaultShopCost)
    skillBookCostLv1 = config.getInt("skillbook.costLv1", skillBookCostLv1)
    skillBookCostLv2 = config.getInt("skillbook.costLv2", skillBookCostLv2)
    skillBookCostLv3 = config.getInt("skillbook.costLv3", skillBookCostLv3)
    reviveCost = config.getInt("revive.cost", reviveCost)
  }

  /** config.ymlにデフォルト値を設定 */
  fun applyDefaultsTo(config: FileConfiguration) {
    config.addDefault("economy.foodPointCost", foodPointCost)
    config.addDefault("pets.maxFoodLevel", maxFoodLevel)
    config.addDefault("shop.defaultCost", defaultShopCost)
    config.addDefault("skillbook.costLv1", skillBookCostLv1)
    config.addDefault("skillbook.costLv2", skillBookCostLv2)
    config.addDefault("skillbook.costLv3", skillBookCostLv3)
    config.addDefault("revive.cost", reviveCost)
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
