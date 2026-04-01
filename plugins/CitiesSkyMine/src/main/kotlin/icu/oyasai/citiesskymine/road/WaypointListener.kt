package icu.oyasai.citiesskymine.road

import icu.oyasai.citiesskymine.Main
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot

class WaypointListener(private val plugin: Main) : Listener {

    /**
     * Bone を持ってブロックを右クリックで通過点を追加する。
     * 追加後、プレビュータスクを自動的に起動（または更新）する。
     */
    @EventHandler
    fun onInteract(event: PlayerInteractEvent) {
        val player = event.player
        if (!player.hasPermission("citiesskymine.road")) return
        if (event.hand != EquipmentSlot.HAND) return
        if (event.action != Action.RIGHT_CLICK_BLOCK) return
        if (player.inventory.itemInMainHand.type != Material.BONE) return

        val block = event.clickedBlock ?: return
        event.isCancelled = true

        val loc     = block.location.add(0.5, 1.0, 0.5)
        val session = plugin.getSession(player)
        session.waypoints.add(loc)

        player.sendMessage(
            "§a[RC] 通過点 §f${session.waypoints.size}§a を追加: §f(${block.x}, ${block.y + 1}, ${block.z})"
        )

        // 2点目が揃ったらプレビュー開始、以降は毎回 dirty マークして再計算
        plugin.updatePreview(player)
    }
}
