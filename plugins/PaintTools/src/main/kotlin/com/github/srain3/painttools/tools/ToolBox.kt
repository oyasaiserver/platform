package com.github.srain3.painttools.tools

import com.github.srain3.painttools.PaintTools
import org.bukkit.ChatColor
import org.bukkit.Material

/** 細々した呼び出し頻度のある便利ボックス */
object ToolBox {
  /** メインクラス[PaintTools]を利用できるようにする変数 */
  lateinit var pl: PaintTools

  /**
   * &をMinecraftで使われている装飾用記号(§)に変換して返す
   *
   * @param message 変換したい文字列
   * @return &を§に変換した文字列
   */
  fun colorMessage(message: String): String {
    return ChatColor.translateAlternateColorCodes('&', message)
  }

  val dyeList =
      listOf(
          Material.WHITE_DYE,
          Material.LIGHT_GRAY_DYE,
          Material.GRAY_DYE,
          Material.BLACK_DYE,
          Material.BROWN_DYE,
          Material.RED_DYE,
          Material.ORANGE_DYE,
          Material.YELLOW_DYE,
          Material.LIME_DYE,
          Material.GREEN_DYE,
          Material.CYAN_DYE,
          Material.LIGHT_BLUE_DYE,
          Material.BLUE_DYE,
          Material.PURPLE_DYE,
          Material.MAGENTA_DYE,
          Material.PINK_DYE,
      )

  fun checkDye(material: Material?): Boolean {
    return dyeList.contains(material ?: return false)
  }
}
