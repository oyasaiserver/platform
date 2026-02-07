package me.marzipan.OyasaiPets.domain

import me.marzipan.OyasaiPets.BigWolfConfig
import kotlin.random.Random

/**
 * ペットの性質（定型/非定型）を管理するユーティリティ
 */
object TemperamentHelper {

    const val TYPICAL = "typical"
    const val ATYPICAL = "atypical"

    /**
     * 購入時・野生スポーン時の性質を決定
     * @return "typical" or "atypical"
     */
    fun determineForPurchase(): String {
        return if (Random.nextDouble() < BigWolfConfig.atypicalBaseChance) {
            ATYPICAL
        } else {
            TYPICAL
        }
    }

    /**
     * 交配時の性質を決定（親の性質に基づく）
     * @param parent1Temperament 親1の性質
     * @param parent2Temperament 親2の性質
     * @return "typical" or "atypical"
     */
    fun determineForBreeding(parent1Temperament: String, parent2Temperament: String): String {
        val parent1Atypical = parent1Temperament == ATYPICAL
        val parent2Atypical = parent2Temperament == ATYPICAL

        val chance = when {
            parent1Atypical && parent2Atypical -> BigWolfConfig.atypicalBothParentChance
            parent1Atypical || parent2Atypical -> BigWolfConfig.atypicalOneParentChance
            else -> BigWolfConfig.atypicalBaseChance
        }

        return if (Random.nextDouble() < chance) {
            ATYPICAL
        } else {
            TYPICAL
        }
    }

    /**
     * 性質の日本語表示名を取得
     */
    fun getDisplayName(temperament: String): String {
        return when (temperament) {
            ATYPICAL -> "非定型 ★"
            else -> "定型"
        }
    }

    /**
     * 性質に応じたレベルアップ確率倍率を取得
     */
    fun getLevelUpMultiplier(temperament: String): Double {
        return if (temperament == ATYPICAL) {
            BigWolfConfig.atypicalLevelUpBonus
        } else {
            1.0
        }
    }

    /**
     * 性質に応じた親密度上昇倍率を取得
     */
    fun getAffectionMultiplier(temperament: String): Double {
        return if (temperament == ATYPICAL) {
            BigWolfConfig.atypicalAffectionBonus
        } else {
            1.0
        }
    }
}
