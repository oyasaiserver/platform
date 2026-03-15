package me.ankokunsan.entityPose

enum class EntiPart(val display: String) {
    KAKUDO("角度の刻みを変更"),
    ALL("体全体"),
    HEAD("頭"),
    SITTING("座る"),
    ZAHYO("一回あたりに動く座標の大きさ変更"),
    X("X座標"),
    Y("Y座標"),
    Z("Z座標"),
    HAN("反転");

    fun next(): EntiPart {
        val values = EntiPart.entries
        val nextIndex = (this.ordinal + 1) % values.size
        return values[nextIndex]
    }
    fun prev(): EntiPart =
        EntiPart.entries[(ordinal - 1 + EntiPart.entries.size) % EntiPart.entries.size]
}