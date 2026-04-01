package icu.oyasai.citiesskymine.road

import com.sk89q.worldedit.EditSession
import org.bukkit.Location
import org.bukkit.scheduler.BukkitTask

class IntersectionSession {
    // ── 交差点固有パラメータ ──
    var arms: Int = 4
    var armLength: Int = 16
    var cornerRadius: Int = 4
    /** MC yaw（45° スナップ済み）または手動指定の回転角（度） */
    var rotationDeg: Double = 0.0
    /** ブロック座標にスナップした交差点中心 */
    var center: Location? = null

    // ── /rc と独立した道路断面設定 ──
    val settings: RoadSettings = RoadSettings()

    // ── プレビュー ──
    var previewTask: BukkitTask? = null

    // ── アンドゥ ──
    var lastEditSession: EditSession? = null
}
