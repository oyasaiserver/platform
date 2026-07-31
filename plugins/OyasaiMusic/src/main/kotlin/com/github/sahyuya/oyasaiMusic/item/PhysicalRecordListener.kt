package com.github.sahyuya.oyasaiMusic.item

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.gui.AmbientRecordSettingsMenu
import org.bukkit.GameMode
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockRedstoneEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.block.BlockFace

/**
 * 環境BGMレコードの設置・回収・設定画面表示を処理する。
 * 独自音源はバニラのジュークボックス再生では扱えないため、設置処理をキャンセルし、
 * [com.github.sahyuya.oyasaiMusic.audio.AmbientPlaybackRegistry]へ再生を委譲する。
 */
class PhysicalRecordListener(private val plugin: OyasaiMusic) : Listener {

    @EventHandler
    fun onInteract(event: PlayerInteractEvent) {
        if (event.hand != EquipmentSlot.HAND) return
        val player = event.player
        val clickedBlock = event.clickedBlock

        // ジュークボックスからの取り出し（手ぶらで右クリック）。
        if (event.action == Action.RIGHT_CLICK_BLOCK && clickedBlock?.type == Material.JUKEBOX) {
            val heldItem = event.item
            if (heldItem == null || heldItem.type == Material.AIR) {
                val entry = plugin.ambientPlaybackRegistry.entryAt(clickedBlock.location) ?: return
                event.isCancelled = true
                plugin.ambientPlaybackRegistry.unregister(clickedBlock.location)
                val songId = entry.song.id ?: return
                val authorName = org.bukkit.Bukkit.getOfflinePlayer(entry.song.authorUuid).name ?: "不明"
                val material = Material.matchMaterial(entry.song.recordMaterial) ?: Material.MUSIC_DISC_13
                var ejected = PhysicalRecordItem.create(plugin, material, songId, entry.song.title, authorName)
                ejected = PhysicalRecordItem.withRange(plugin, ejected, entry.range)
                ejected = PhysicalRecordItem.withTrigger(plugin, ejected, entry.trigger)
                ejected = PhysicalRecordItem.withLoop(plugin, ejected, entry.loop)
                clickedBlock.world.dropItemNaturally(clickedBlock.location.clone().add(0.5, 1.0, 0.5), ejected)
                player.sendMessage("§a環境BGMを停止し、レコードを取り出しました。")
                return
            }
        }

        val item = event.item ?: return
        if (!PhysicalRecordItem.isRecordItem(plugin, item)) return

        // ジュークボックスへの設置（レコードを持って右クリック）。
        if (event.action == Action.RIGHT_CLICK_BLOCK && clickedBlock?.type == Material.JUKEBOX && !player.isSneaking) {
            event.isCancelled = true
            val songId = PhysicalRecordItem.songId(plugin, item) ?: return
            val song = plugin.songRepository.findById(songId)
            if (song == null) {
                player.sendMessage("§c楽曲データが見つかりません（削除された可能性があります）。")
                return
            }
            val range = PhysicalRecordItem.range(plugin, item)
            val trigger = PhysicalRecordItem.trigger(plugin, item)
            val loop = PhysicalRecordItem.loop(plugin, item)
            plugin.ambientPlaybackRegistry.register(clickedBlock.location, song, range, trigger, loop)
            player.sendMessage(
                "§a環境BGMを設置しました: ${song.title} " +
                        "(範囲:${range.label} / トリガー:${trigger.label} / ループ:${if (loop) "ON" else "OFF"})",
            )
            // 独自レコードはバニラのジュークボックス内部には保存していないため、ゲームモードを
            // 問わず手元の実体を消費する。クリエイティブで残すと取り出し時に複製できてしまう。
            item.amount -= 1
            player.updateInventory()
            return
        }

        // Shift+右クリック（ジュークボックス以外、または何もない場所）→ 環境BGM設定画面を開く。
        if (player.isSneaking && (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK)) {
            if (clickedBlock?.type == Material.JUKEBOX) return // ジュークボックスへの設置操作を優先
            event.isCancelled = true
            plugin.menuManager.openTransient(
                player,
                AmbientRecordSettingsMenu(plugin, player, player.inventory.heldItemSlot),
            )
        }
    }

    @EventHandler
    fun onRedstone(event: BlockRedstoneEvent) {
        // 実際にはジュークボックス自身ではなく、隣接ダスト/リピーターにイベントが出ることが多い。
        // 次tickで通電状態を再評価し、更新途中の電力値も避ける。
        val candidates = buildList {
            add(event.block)
            BlockFace.entries.filter { it != BlockFace.SELF }.forEach { add(event.block.getRelative(it)) }
        }.filter { it.type == Material.JUKEBOX }
        if (candidates.isEmpty()) return
        org.bukkit.Bukkit.getScheduler().runTask(plugin, Runnable {
            candidates.forEach { jukebox ->
                plugin.ambientPlaybackRegistry.onRedstoneChange(jukebox.location, jukebox.isBlockPowered)
            }
        })
    }

    @EventHandler
    fun onBlockBreak(event: BlockBreakEvent) {
        if (event.block.type != Material.JUKEBOX) return
        plugin.ambientPlaybackRegistry.unregister(event.block.location)
    }
}
