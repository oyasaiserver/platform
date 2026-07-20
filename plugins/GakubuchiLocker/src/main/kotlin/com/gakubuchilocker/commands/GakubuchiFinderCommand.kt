package com.gakubuchilocker.commands

import com.gakubuchilocker.GakubuchiLockerPlugin
import org.bukkit.Color
import org.bukkit.Particle
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.ItemFrame
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

// 透明化(シアーズで見た目を消した)額縁を赤いパーティクルで可視化して発見しやすくするコマンド
class GakubuchiFinderCommand(
    private val plugin: GakubuchiLockerPlugin,
) : CommandExecutor, TabCompleter {
  companion object {
    private const val DEFAULT_RADIUS = 32.0
    private const val MAX_RADIUS = 100.0
    private const val DURATION_TICKS = 200L // パーティクル表示時間 (10秒)
    private const val INTERVAL_TICKS = 10L // 再表示間隔 (0.5秒)
  }

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (sender !is Player) {
      sender.sendMessage("§cこのコマンドはプレイヤーのみ使用できます。")
      return true
    }

    if (!sender.hasPermission("gakubuchilocker.use")) {
      sender.sendMessage("§c[Gakubuchi] §fこのコマンドを使用する権限がありません。")
      return true
    }

    val radius = args.getOrNull(0)?.toDoubleOrNull()?.coerceIn(1.0, MAX_RADIUS) ?: DEFAULT_RADIUS

    val frames =
        sender
            .getNearbyEntities(radius, radius, radius)
            .filterIsInstance<ItemFrame>()
            .filter { !it.isVisible }
            .filter { plugin.db.isLocked(it.uniqueId) }
            .filter { sender.isOp || plugin.db.getOwner(it.uniqueId) == sender.uniqueId }

    if (frames.isEmpty()) {
      sender.sendMessage("§e[Gakubuchi] §f半径${radius.toInt()}ブロック以内に透明額縁は見つかりませんでした。")
      return true
    }

    sender.sendMessage("§a[Gakubuchi] §f透明額縁を${frames.size}個発見しました。赤いパーティクルで表示します。")

    val dustOptions = Particle.DustOptions(Color.RED, 1.5f)

    object : BukkitRunnable() {
          var elapsedTicks = 0L

          override fun run() {
            if (elapsedTicks >= DURATION_TICKS || !sender.isOnline) {
              cancel()
              return
            }

            frames.forEach { frame ->
              if (frame.isValid) {
                sender.spawnParticle(
                    Particle.DUST,
                    frame.location.clone().add(0.5, 0.5, 0.5),
                    10,
                    0.1,
                    0.1,
                    0.1,
                    0.0,
                    dustOptions,
                )
              }
            }

            elapsedTicks += INTERVAL_TICKS
          }
        }
        .runTaskTimer(plugin, 0L, INTERVAL_TICKS)

    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    if (args.size == 1) {
      return listOf("16", "32", "64").filter { it.startsWith(args[0]) }
    }
    return emptyList()
  }
}
