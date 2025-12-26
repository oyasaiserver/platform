package com.github.sahyuya.socialvotes.listeners

import com.github.sahyuya.socialvotes.ChatInput
import com.github.sahyuya.socialvotes.commands.AddModeManager
import com.github.sahyuya.socialvotes.commands.RemoveModeManager
import com.github.sahyuya.socialvotes.commands.UpdateModeManager
import com.github.sahyuya.socialvotes.gui.*
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent

class QuitListener : Listener {
  @EventHandler
  fun onQuit(e: PlayerQuitEvent) {
    val uuid = e.player.uniqueId

    // モード管理解除
    AddModeManager.cancel(uuid)
    RemoveModeManager.cancel(uuid)
    UpdateModeManager.cancel(uuid)

    // チャット入力待機解除
    ChatInput.cancel(uuid)

    // GUIの閲覧状態解除（メモリリーク防止）
    // ※ 各GUIオブジェクトに `forget(uuid)` のようなメソッドを追加してください
    SimpleGUI.forget(uuid)
    DetailGUI.forget(uuid)
    ResultGUI.forget(uuid)
    VoterListGUI.forget(uuid)
  }
}
