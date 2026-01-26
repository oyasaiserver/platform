package me.marzipan.OyasaiPets.domain

/**
 * おもちゃの種類
 * ペットとの遊び方を決定する
 */
enum class ToyType {
    /** おもちゃなし */
    NONE,
    /** 投げて取ってこい */
    THROW_FETCH,
    /** 釣竿で遊ぶ（猫じゃらし等） */
    FISHING_ROD
}

