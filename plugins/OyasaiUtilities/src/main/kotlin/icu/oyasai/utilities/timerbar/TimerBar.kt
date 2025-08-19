package icu.oyasai.utilities.timerbar

import icu.oyasai.utilities.OyasaiUtilities
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.boss.BarColor
import org.bukkit.boss.BarStyle
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object TimerBar {
  private val key by lazy { NamespacedKey(OyasaiUtilities.plugin, "OUTimer") }
  private val bossBar by lazy {
    Bukkit.getServer().createBossBar(key, null, BarColor.WHITE, BarStyle.SEGMENTED_10)
  }

  private const val STR10 = "§9残り時間: "
  private const val STR3 = "§e残り時間: "
  private const val STR1 = "§c残り時間: "

  private var bukkitRunnable: BukkitRunnable? = null

  fun onDisable() {
    Bukkit.getServer().removeBossBar(key)
  }

  fun isTimerObject(): Boolean {
    return bukkitRunnable != null
  }

  fun addPlayerToBossBar(player: Player) {
    bossBar.addPlayer(player)
  }

  fun removePlayerToBossBar(player: Player) {
    bossBar.removePlayer(player)
  }

  fun endTimer() {
    bukkitRunnable = null
    TimerObj.endTimer()
  }

  fun startTimer(timeStr: String): Boolean {
    if (bukkitRunnable != null) return false
    val sec = TimerObj.strToSec(timeStr)
    if (sec == 0) return false
    bossBar.setTitle(STR10 + TimerObj.secToStr(sec))
    bossBar.progress = 1.0
    bossBar.color = BarColor.GREEN
    bossBar.isVisible = true

    Bukkit.getServer().onlinePlayers.forEach { player -> addPlayerToBossBar(player) }

    bukkitRunnable =
      object : BukkitRunnable() {
        override fun run() {
          if (bukkitRunnable == null) {
            bossBar.removeAll()
            bossBar.isVisible = false
            cancel()
            return
          }

          var progress = TimerObj.getNowSec().toDouble() / TimerObj.getMaxSec().toDouble()
          if (progress !in 0.0..1.0) {
            progress = 1.0
          }

          bossBar.progress = progress
          bossBar.color = ifColor(progress)
          bossBar.setTitle(ifStr(progress) + TimerObj.secToStr(TimerObj.getNowSec()))
        }
      }
    bukkitRunnable?.runTaskTimer(OyasaiUtilities.plugin, 4, 4)

    TimerObj.countStart(sec)
    return true
  }

  private fun ifColor(progress: Double): BarColor {
    return if (progress > 0.3) {
      BarColor.GREEN
    } else if (progress > 0.1) {
      BarColor.YELLOW
    } else {
      BarColor.RED
    }
  }

  private fun ifStr(progress: Double): String {
    return if (progress > 0.3) {
      STR10
    } else if (progress > 0.1) {
      STR3
    } else {
      STR1
    }
  }
}
