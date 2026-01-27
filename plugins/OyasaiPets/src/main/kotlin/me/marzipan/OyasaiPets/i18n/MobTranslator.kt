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


    /** バリアント名の日本語翻訳 */
    private val variantTranslations = mapOf(
        // オオカミのバリアント
        "pale" to "白色",
        "spotted" to "斑点",
        "snowy" to "雪原",
        "black" to "黒色",
        "ashen" to "灰色",
        "rusty" to "赤茶色",
        "woods" to "森林",
        "chestnut" to "栗色",
        "striped" to "縞模様",

        // ネコのバリアント
        "tabby" to "トラネコ",
        "tuxedo" to "タキシード",
        "red" to "茶トラ",
        "siamese" to "シャム",
        "british_shorthair" to "ブリティッシュショートヘア",
        "calico" to "三毛",
        "persian" to "ペルシャ",
        "ragdoll" to "ラグドール",
        "white" to "白",
        "jellie" to "ジェリー",
        "all_black" to "黒",

        // キツネのバリアント
        "red_fox" to "アカギツネ",
        "snow_fox" to "ホッキョクギツネ",

        // ウサギのバリアント
        "brown" to "茶色",
        "white_splotched" to "白斑",
        "gold" to "金色",
        "salt" to "塩コショウ",
        "toast" to "トースト",

        // ウーパールーパーのバリアント
        "lucy" to "ピンク",
        "wild" to "茶色",
        "gold_axolotl" to "金色",
        "cyan" to "水色",
        "blue" to "青色",

        // カエルのバリアント
        "temperate" to "温帯",
        "warm" to "暖かい",
        "cold" to "寒い",

        // ウマのバリアント
        "white_horse" to "白馬",
        "creamy" to "クリーム色",
        "chestnut_horse" to "栗毛",
        "brown_horse" to "鹿毛",
        "black_horse" to "黒馬",
        "gray" to "芦毛",
        "dark_brown" to "黒鹿毛",

        // ラマのバリアント
        "creamy_llama" to "クリーム色",
        "white_llama" to "白色",
        "brown_llama" to "茶色",
        "gray_llama" to "灰色",

        // パンダのバリアント
        "normal" to "通常",
        "lazy" to "怠惰",
        "worried" to "心配",
        "playful" to "陽気",
        "brown_panda" to "茶色",
        "weak" to "虚弱",
        "aggressive" to "攻撃的",

        // ムーシュルームのバリアント
        "red_mooshroom" to "赤",
        "brown_mooshroom" to "茶色",

        // オウムのバリアント
        "red_blue" to "赤青",
        "blue" to "青",
        "green" to "緑",
        "yellow_blue" to "黄青",
        "gray_parrot" to "灰色",

        // 熱帯魚のバリアント
        "kob" to "コブ",
        "sunstreak" to "サンストリーク",
        "snooper" to "スヌーパー",
        "dasher" to "ダッシャー",
        "brinely" to "ブラインリー",
        "spotty" to "スポッティ",
        "flopper" to "フロッパー",
        "stripey" to "ストライピー",
        "glitter" to "グリッター",
        "blockfish" to "ブロックフィッシュ",
        "betty" to "ベティ",
        "clayfish" to "クレイフィッシュ"
    )

    /**
     * バリアント名を日本語に変換
     * @param variant バリアント名（英語）
     * @return 日本語名（マッピングがない場合は元の文字列）
     */
    fun translateVariant(variant: String?): String {
        if (variant == null) return "デフォルト"
        return variantTranslations[variant.lowercase()] ?: variant
    }
}
