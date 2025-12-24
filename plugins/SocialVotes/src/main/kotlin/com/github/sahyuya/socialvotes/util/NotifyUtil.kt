package com.github.sahyuya.socialvotes.util

import org.bukkit.Sound
import org.bukkit.entity.Player

object NotifyUtil {

  /* ==============================
   * 基本サウンド
   * ============================== */
  fun sound(p: Player, sound: Sound, volume: Float = 1.0f, pitch: Float = 1.0f) {
    p.playSound(p.location, sound, volume, pitch)
  }

  /* ==============================
   * 成功 / 失敗
   * ============================== */
  fun success(p: Player, message: String? = null) {
    message?.let { p.sendMessage(it) }
    sound(p, Sound.BLOCK_NOTE_BLOCK_BELL, 1.0f, 1.0f)
  }

  fun error(p: Player, message: String? = null) {
    message?.let { p.sendMessage(it) }
    sound(p, Sound.ENTITY_VILLAGER_NO, 1.0f, 1.0f)
  }

  fun invalid(p: Player, message: String? = null) {
    message?.let { p.sendActionBar(it) }
    sound(p, Sound.BLOCK_NOTE_BLOCK_BANJO, 1.0f, 0.5f)
  }

  /* ==============================
   * 状態切替系（UI向け）
   * ============================== */
  fun toggleOn(p: Player, message: String? = null) {
    message?.let { p.sendMessage(it) }
    sound(p, Sound.BLOCK_WOODEN_TRAPDOOR_OPEN, 1.0f, 1.0f)
  }

  fun toggleOff(p: Player, message: String? = null) {
    message?.let { p.sendMessage(it) }
    sound(p, Sound.BLOCK_WOODEN_TRAPDOOR_CLOSE, 1.0f, 1.0f)
  }

  /* ==============================
   * 複数人通知（OP / owner 等）
   * ============================== */
  fun notifyPlayers(
    targets: Collection<Player>,
    message: String,
    sound: Sound = Sound.BLOCK_AMETHYST_BLOCK_BREAK,
    volume: Float = 1.0f,
    pitch: Float = 0.5f,
  ) {
    targets.forEach {
      it.sendMessage(message)
      it.playSound(it.location, sound, volume, pitch)
    }
  }
}
