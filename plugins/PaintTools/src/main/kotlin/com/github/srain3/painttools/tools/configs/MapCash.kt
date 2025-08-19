package com.github.srain3.painttools.tools.configs

import org.bukkit.Color

/** ピクセルごとのデータ */
data class MapCash(val x: Int, val y: Int, var color: Color) {
  fun checkPix(ix: Int, iy: Int): Boolean {
    return (ix == x && iy == y)
  }
}
