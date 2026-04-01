package icu.oyasai.citiesskymine.road

import org.bukkit.Material

data class RoadSettings(
    var radius: Double = 20.0,           // 円弧半径（ブロック）
    var transitionLength: Double = 10.0, // 緩和曲線長（ブロック）
    var laneWidth: Int = 4,              // 片側車道幅（ブロック）
    var centerLineWidth: Int = 1,        // 中央白線幅（ブロック）
    var outerLineWidth: Int = 1,         // 外縁白線幅（ブロック）
    var sidewalkWidth: Int = 2,          // 歩道幅（ブロック）
    var roadMaterial: Material = Material.GRAY_CONCRETE,
    var sidewalkMaterial: Material = Material.ANDESITE,
    var lineMaterial: Material = Material.SMOOTH_QUARTZ,
    var debugLineGroups: Boolean = false // true の場合、ライン種別ごとにデバッグ用素材を使う
)
