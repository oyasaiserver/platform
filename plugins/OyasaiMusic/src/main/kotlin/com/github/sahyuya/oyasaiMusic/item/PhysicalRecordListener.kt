package com.github.sahyuya.oyasaiMusic.item

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.gui.AmbientRecordSettingsMenu
import org.bukkit.Material
import org.bukkit.block.BlockFace
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.block.BlockBreakEvent
import org.bukkit.event.block.BlockRedstoneEvent
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.EquipmentSlot

/**
 * 環境BGMレコードの設置・回収・設定画面表示を処理する。 独自音源はバニラのジュークボックス再生では扱えないため、設置処理をキャンセルし、
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
        if (player.gameMode != entry.insertedGameMode) {
          player.sendMessage(
              "§cこのレコードは ${gameModeLabel(entry.insertedGameMode)} で装填されています。" +
                  "同じゲームモードで取り出してください。"
          )
          return
        }
        val songId = entry.song.id ?: return
        val authorName = org.bukkit.Bukkit.getOfflinePlayer(entry.song.authorUuid).name ?: "不明"
        val material = Material.matchMaterial(entry.song.recordMaterial) ?: Material.MUSIC_DISC_13
        var ejected =
            PhysicalRecordItem.create(plugin, material, songId, entry.song.title, authorName)
        ejected = PhysicalRecordItem.withRange(plugin, ejected, entry.range)
        ejected = PhysicalRecordItem.withTrigger(plugin, ejected, entry.trigger)
        ejected = PhysicalRecordItem.withLoop(plugin, ejected, entry.loop)
        if (!canFit(player, ejected)) {
          player.sendMessage("§cインベントリに空きがないため、レコードを取り出せません。")
          return
        }
        plugin.ambientPlaybackRegistry.unregister(clickedBlock.location)
        player.inventory.addItem(ejected)
        player.sendMessage("§a環境BGMを停止し、レコードを取り出しました。")
        return
      }
    }

    val item = event.item ?: return
    if (!PhysicalRecordItem.isRecordItem(plugin, item)) return

    // ジュークボックスへの設置（レコードを持って右クリック）。
    if (
        event.action == Action.RIGHT_CLICK_BLOCK &&
            clickedBlock?.type == Material.JUKEBOX &&
            !player.isSneaking
    ) {
      event.isCancelled = true
      val songId = PhysicalRecordItem.songId(plugin, item) ?: return
      val song = plugin.songRepository.findById(songId)
      if (song == null) {
        player.sendMessage("§c楽曲データが見つかりません（削除された可能性があります）。")
        return
      }
      val range = PhysicalRecordItem.range(plugin, item)
      if (!AmbientRange.canUse(player, range)) {
        player.sendMessage("§c再生範囲 ${range.label} を使う権限がありません。")
        return
      }
      val trigger = PhysicalRecordItem.trigger(plugin, item)
      val loop = PhysicalRecordItem.loop(plugin, item)
      // 入替: 既存レコードがある場合は旧盤を復元して返却する（上書き消失の防止）。
      // 排出分岐と同一方針で、インベントリ満杯時は無変更で中止する。
      val oldEntry = plugin.ambientPlaybackRegistry.entryAt(clickedBlock.location)
      var toReturn: org.bukkit.inventory.ItemStack? = null
      if (oldEntry != null) {
        if (player.gameMode != oldEntry.insertedGameMode) {
          player.sendMessage(
              "§cこのジュークボックスのレコードは ${gameModeLabel(oldEntry.insertedGameMode)} で装填されています。" +
                  "同じゲームモードで入れ替えてください。"
          )
          return
        }
        val oldId = oldEntry.song.id ?: return
        val oldAuthor = org.bukkit.Bukkit.getOfflinePlayer(oldEntry.song.authorUuid).name ?: "不明"
        val oldMaterial =
            Material.matchMaterial(oldEntry.song.recordMaterial) ?: Material.MUSIC_DISC_13
        var rebuilt =
            PhysicalRecordItem.create(plugin, oldMaterial, oldId, oldEntry.song.title, oldAuthor)
        rebuilt = PhysicalRecordItem.withRange(plugin, rebuilt, oldEntry.range)
        rebuilt = PhysicalRecordItem.withTrigger(plugin, rebuilt, oldEntry.trigger)
        rebuilt = PhysicalRecordItem.withLoop(plugin, rebuilt, oldEntry.loop)
        if (!canFit(player, rebuilt)) {
          player.sendMessage("§cインベントリに空きがないため、レコードを交換できません。")
          return
        }
        toReturn = rebuilt
      }
      plugin.ambientPlaybackRegistry.register(
          clickedBlock.location,
          song,
          range,
          trigger,
          loop,
          player.gameMode,
      )
      toReturn?.let { player.inventory.addItem(it) }
      player.sendMessage(
          "§a環境BGMを設置しました: ${song.title} " +
              "(範囲:${range.label} / トリガー:${trigger.label} / ループ:${if (loop) "ON" else "OFF"})" +
              (toReturn?.let { "（旧レコードを返却しました）" } ?: ""),
      )
      // 独自レコードはバニラのジュークボックス内部には保存していないため、ゲームモードを
      // 問わず手元の実体を消費する。クリエイティブで残すと取り出し時に複製できてしまう。
      item.amount -= 1
      player.updateInventory()
      return
    }

    // Shift+右クリック（ジュークボックス以外、または何もない場所）→ 環境BGM設定画面を開く。
    if (
        player.isSneaking &&
            (event.action == Action.RIGHT_CLICK_AIR || event.action == Action.RIGHT_CLICK_BLOCK)
    ) {
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
    val candidates =
        buildList {
              add(event.block)
              BlockFace.entries
                  .filter { it != BlockFace.SELF }
                  .forEach { add(event.block.getRelative(it)) }
            }
            .filter { it.type == Material.JUKEBOX }
    if (candidates.isEmpty()) return
    org.bukkit.Bukkit.getScheduler()
        .runTask(
            plugin,
            Runnable {
              candidates.forEach { jukebox ->
                plugin.ambientPlaybackRegistry.onRedstoneChange(
                    jukebox.location,
                    jukebox.isBlockPowered,
                )
              }
            },
        )
  }

  @EventHandler
  fun onBlockBreak(event: BlockBreakEvent) {
    if (event.block.type != Material.JUKEBOX) return
    plugin.ambientPlaybackRegistry.unregister(event.block.location)
  }

  private fun canFit(
      player: org.bukkit.entity.Player,
      item: org.bukkit.inventory.ItemStack,
  ): Boolean =
      player.inventory.storageContents.any { existing ->
        existing == null ||
            existing.type == Material.AIR ||
            (existing.isSimilar(item) && existing.amount + item.amount <= existing.maxStackSize)
      }

  private fun gameModeLabel(gameMode: org.bukkit.GameMode): String =
      when (gameMode) {
        org.bukkit.GameMode.CREATIVE -> "クリエイティブ"
        org.bukkit.GameMode.SURVIVAL -> "サバイバル"
        org.bukkit.GameMode.ADVENTURE -> "アドベンチャー"
        org.bukkit.GameMode.SPECTATOR -> "スペクテイター"
      }
}
