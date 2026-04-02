package icu.oyasai.citiesskymine

import icu.oyasai.citiesskymine.facade.HaussmannCommand
import icu.oyasai.citiesskymine.road.*
import org.bukkit.entity.Player
import org.bukkit.plugin.java.JavaPlugin
import java.util.*

class Main : JavaPlugin() {
    private val sessions             = HashMap<UUID, RoadSession>()
    private val intersectionSessions = HashMap<UUID, IntersectionSession>()

    override fun onEnable() {
        val rcHandler = RoadCurveCommand(this)
        val rcCmd = getCommand("rc")
        rcCmd?.setExecutor(rcHandler)
        rcCmd?.tabCompleter = rcHandler
        server.pluginManager.registerEvents(WaypointListener(this), this)

        val riHandler = IntersectionCommand(this)
        val riCmd = getCommand("ri")
        riCmd?.setExecutor(riHandler)
        riCmd?.tabCompleter = riHandler

        val hbHandler = HaussmannCommand(this)
        val hbCmd = getCommand("hb")
        hbCmd?.setExecutor(hbHandler)
        hbCmd?.tabCompleter = hbHandler

        logger.info("CitiesSkyMine enabled")
    }

    override fun onDisable() {
        sessions.values.forEach { it.previewTask?.cancel() }
        intersectionSessions.values.forEach { it.previewTask?.cancel() }
        sessions.clear()
        intersectionSessions.clear()
    }

    // ──────────────────────────────────────────────────
    // Road セッション
    // ──────────────────────────────────────────────────

    fun getSession(player: Player): RoadSession =
        sessions.getOrPut(player.uniqueId) { RoadSession() }

    fun updatePreview(player: Player) {
        val session = getSession(player)
        session.previewDirty = true
        if (session.previewTask != null) return
        if (session.waypoints.size < 2) return

        session.previewTask = server.scheduler.runTaskTimer(this, Runnable {
            if (!player.isOnline) { stopPreview(player); return@Runnable }
            val s = getSession(player)
            if (s.waypoints.size < 2) return@Runnable
            if (s.previewDirty) {
                s.cachedPath   = RoadGeometry.computePath(s.waypoints, s.settings)
                s.previewDirty = false
            }
            if (s.cachedPath.isNotEmpty()) RoadPreview.showOnce(player, s.cachedPath, s.settings)
        }, 0L, 10L)
    }

    fun stopPreview(player: Player) {
        val session = sessions[player.uniqueId] ?: return
        session.previewTask?.cancel()
        session.previewTask = null
        session.cachedPath  = emptyList()
    }

    // ──────────────────────────────────────────────────
    // Intersection セッション
    // ──────────────────────────────────────────────────

    fun getIntersectionSession(player: Player): IntersectionSession =
        intersectionSessions.getOrPut(player.uniqueId) { IntersectionSession() }

    /** 設定変更・中心設定後に呼び出す。dirty フラグを立ててプレビュータスクを起動する。 */
    fun updateIntersectionPreview(player: Player) {
        val session = getIntersectionSession(player)
        if (session.previewTask != null) return   // 既存タスクが再描画する
        if (session.center == null) return

        val roadSettings = getSession(player).settings
        session.previewTask = server.scheduler.runTaskTimer(this, Runnable {
            if (!player.isOnline) { stopIntersectionPreview(player); return@Runnable }
            val s = getIntersectionSession(player)
            if (s.center == null) return@Runnable
            // プレビューはパーティクル輪郭線のみ（ブロック計算不要）
            IntersectionPreview.showOnce(player, s.center!!, s, roadSettings)
        }, 0L, 10L)
    }

    fun stopIntersectionPreview(player: Player) {
        val session = intersectionSessions[player.uniqueId] ?: return
        session.previewTask?.cancel()
        session.previewTask = null
    }
}
