package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.audio.PluginSoundEffect
import com.github.sahyuya.oyasaiMusic.economy.PayoutResult
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.entity.Player

object SongPromotionService {
  private val pending = ConcurrentHashMap.newKeySet<UUID>()

  fun promote(plugin: OyasaiMusic, viewer: Player, songId: Long) {
    if (!pending.add(viewer.uniqueId)) {
      viewer.sendMessage("§7宣伝を処理中です。")
      return
    }
    Bukkit.getScheduler()
        .runTaskAsynchronously(
            plugin,
            Runnable {
              val song = runCatching { plugin.songRepository.findById(songId) }.getOrNull()
              Bukkit.getScheduler()
                  .runTask(
                      plugin,
                      Runnable {
                        if (!viewer.isOnline || song == null || !song.published) {
                          pending.remove(viewer.uniqueId)
                          if (viewer.isOnline) viewer.sendMessage("§c公開中の楽曲だけ宣伝できます。")
                          return@Runnable
                        }
                        plugin.economyService.chargePoints(viewer, 10).thenAccept { result ->
                          Bukkit.getScheduler()
                              .runTask(
                                  plugin,
                                  Runnable {
                                    try {
                                      when (result) {
                                        PayoutResult.Success -> {
                                          val message =
                                              Component.text(
                                                      "[OyasaiMusic] ${viewer.name} がリポスト: ",
                                                      NamedTextColor.GRAY,
                                                  )
                                                  .append(
                                                      Component.text(
                                                              "「${song.title}」",
                                                              NamedTextColor.AQUA,
                                                          )
                                                          .clickEvent(
                                                              ClickEvent.runCommand(
                                                                  "/mm open $songId"
                                                              )
                                                          )
                                                  )
                                                  .append(
                                                      Component.text(
                                                              " [クリックで開く]",
                                                              NamedTextColor.GREEN,
                                                          )
                                                          .clickEvent(
                                                              ClickEvent.runCommand(
                                                                  "/mm open $songId"
                                                              )
                                                          )
                                                  )
                                          val recipients =
                                              Bukkit.getOnlinePlayers().filter {
                                                it.hasPermission("oyasaimusic.notify")
                                              }
                                          recipients.forEach { it.sendMessage(message) }
                                          plugin.soundEffectService.play(
                                              PluginSoundEffect.ADVERTISE,
                                              recipients,
                                          )
                                          if (viewer.isOnline)
                                              viewer.sendMessage("§b10§fP§aを消費して宣伝しました。")
                                        }
                                        is PayoutResult.Failed ->
                                            viewer.sendMessage("§c${result.reason}")
                                        is PayoutResult.Unavailable ->
                                            viewer.sendMessage("§c${result.reason}")
                                      }
                                    } finally {
                                      pending.remove(viewer.uniqueId)
                                    }
                                  },
                              )
                        }
                      },
                  )
            },
        )
  }
}
