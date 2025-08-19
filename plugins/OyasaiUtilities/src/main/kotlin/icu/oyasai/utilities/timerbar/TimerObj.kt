package icu.oyasai.utilities.timerbar

import java.util.Timer
import kotlin.concurrent.timerTask

object TimerObj {
  private var timer = Timer()
  private var maxSec = 0
  private var nowSec = 0

  fun getMaxSec(): Int {
    return maxSec
  }

  fun getNowSec(): Int {
    return nowSec
  }

  fun addNowSec(sec: Int) {
    nowSec += sec
  }

  fun countStart(sec: Int) {
    timer.cancel()
    timer = Timer()
    maxSec = sec
    nowSec = sec
    val task = timerTask {
      if (nowSec <= 0) {
        return@timerTask
      }
      nowSec--
    }
    timer.scheduleAtFixedRate(task, 1000, 1000)
  }

  fun endTimer() {
    timer.cancel()
  }

  // 分→秒へ
  private fun mToS(min: Int): Int {
    return min * 60
  }

  // 時→秒へ
  private fun hToS(hour: Int): Int {
    val min = hour * 60
    return mToS(min)
  }

  /** 文字列の時間から秒数へ変換 */
  fun strToSec(string: String): Int {
    var sec = 0
    val str = string.replace("-", "")

    val hour = str.split("h")
    val hi =
      if (hour.size == 1) {
        // hが含まれない場合
        0
      } else {
        // hが含まれていた場合
        val h = hour[0].toIntOrNull() ?: 0
        sec += hToS(h)
        1
      }

    if (hour[hi].isBlank()) return sec
    val minutes = hour[hi].split("m")
    val mi =
      if (minutes.size == 1) {
        // mが含まれない場合
        0
      } else {
        // mが含まれていた場合
        val m = minutes[0].toIntOrNull() ?: 0
        sec += mToS(m)
        1
      }

    if (minutes[mi].isBlank()) return sec
    val seconds = minutes[mi].replace("s", "")
    sec += seconds.toIntOrNull() ?: 0

    return sec
  }

  /** 秒数から文字列へ */
  fun secToStr(sec0: Int): String {
    val s = sec0 % 60
    val min0 = sec0 / 60
    val m = min0 % 60
    val h = min0 / 60

    var str = ""
    str +=
      if (h == 0) {
        ""
      } else {
        "${h}h"
      }
    str +=
      if (h == 0) {
        if (m == 0) {
          ""
        } else {
          "${m}m"
        }
      } else {
        " ${m}m"
      }
    str +=
      if (h == 0) {
        if (m == 0) {
          if (s == 0) {
            "END!"
          } else {
            "${s}s"
          }
        } else {
          " ${s}s"
        }
      } else {
        " ${s}s"
      }

    return str
  }

  // Plugin終了処理
  fun onDisable() {
    timer.cancel()
    timer.purge()
    TimerBar.onDisable()
  }
}
