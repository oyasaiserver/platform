@file:Suppress("DEPRECATION")

package me.marzipan.OyasaiPets

import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.*
import org.bukkit.command.*
import org.bukkit.entity.*
import org.bukkit.inventory.*

/** おもちゃの種類 ペットとの遊び方を決定する */
enum class ToyType {
  /** おもちゃなし */
  NONE,
  /** 投げて取ってこい */
  THROW_FETCH,
  /** 釣竿で遊ぶ（猫じゃらし等） */
  FISHING_ROD,
  /** 風船ジャンプ（イルカ用：水面からジャンプして風船をつつく） */
  BALLOON_JUMP,
}
