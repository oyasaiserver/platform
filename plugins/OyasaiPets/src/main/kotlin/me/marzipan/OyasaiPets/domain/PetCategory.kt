package me.marzipan.OyasaiPets.domain

/**
 * ペットのカテゴリ分類
 * 移動方法や環境適性を決定する
 */
enum class PetCategory {
    /** 陸上型: 水中で遅くなる */
    LAND,
    /** 水棲型: 水中で速く、陸で遅い */
    WATER,
    /** 飛行型: ジャンプで上昇、スローフォーリング */
    FLYING
}

