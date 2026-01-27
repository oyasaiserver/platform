package me.marzipan.OyasaiPets.i18n

import org.bukkit.entity.EntityType

/**
 * MOB名称の日本語翻訳を管理するオブジェクト
 */
object MobTranslator {

    /** EntityType → 日本語のマッピング */
    private val translations = mapOf(
        EntityType.WOLF to "オオカミ",
        EntityType.CAT to "ネコ",
        EntityType.FOX to "キツネ",
        EntityType.RABBIT to "ウサギ",
        EntityType.PANDA to "パンダ",
        EntityType.POLAR_BEAR to "シロクマ",
        EntityType.OCELOT to "ヤマネコ",
        EntityType.HORSE to "ウマ",
        EntityType.DONKEY to "ロバ",
        EntityType.MULE to "ラバ",
        EntityType.LLAMA to "ラマ",
        EntityType.TRADER_LLAMA to "行商人のラマ",
        EntityType.PIG to "ブタ",
        EntityType.COW to "ウシ",
        EntityType.SHEEP to "ヒツジ",
        EntityType.CHICKEN to "ニワトリ",
        EntityType.GOAT to "ヤギ",
        EntityType.CAMEL to "ラクダ",
        EntityType.SNIFFER to "スニッファー",
        EntityType.ARMADILLO to "アルマジロ",
        EntityType.DOLPHIN to "イルカ",
        EntityType.TURTLE to "カメ",
        EntityType.AXOLOTL to "ウーパールーパー",
        EntityType.FROG to "カエル",
        EntityType.TADPOLE to "オタマジャクシ",
        EntityType.TROPICAL_FISH to "熱帯魚",
        EntityType.PUFFERFISH to "フグ",
        EntityType.COD to "タラ",
        EntityType.SALMON to "サケ",
        EntityType.PARROT to "オウム",
        EntityType.BAT to "コウモリ",
        EntityType.BEE to "ミツバチ",
        EntityType.ALLAY to "アレイ",
        EntityType.IRON_GOLEM to "鉄のゴーレム",
        EntityType.SNOW_GOLEM to "雪のゴーレム",
        EntityType.STRIDER to "ストライダー",
        EntityType.SKELETON_HORSE to "スケルトンホース",
        EntityType.ZOMBIE_HORSE to "ゾンビホース",
        EntityType.VILLAGER to "村人",
        EntityType.WANDERING_TRADER to "行商人",
        EntityType.MOOSHROOM to "ムーシュルーム"
    )

    /**
     * EntityTypeを日本語に変換
     * @param type EntityType
     * @return 日本語名（マッピングがない場合は英語名）
     */
    fun toJapanese(type: EntityType): String {
        return translations[type] ?: type.name
    }

    /**
     * 指定されたEntityTypeが日本語翻訳を持つか確認
     */
    fun hasTranslation(type: EntityType): Boolean {
        return translations.containsKey(type)
    }
}
