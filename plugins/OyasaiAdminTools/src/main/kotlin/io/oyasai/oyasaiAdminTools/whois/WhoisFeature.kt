package io.oyasai.oyasaiAdminTools.whois

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.playerhistory.PlayerHistoryFeature
import io.oyasai.oyasaiAdminTools.seen.recordedTime
import io.oyasai.oyasaiAdminTools.staff.StaffFeature
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class WhoisFeature(plugin: OyasaiAdminTools, private val history: PlayerHistoryFeature) :
    StaffFeature(plugin, "whois") {
  override fun execute(sender: CommandSender, args: Array<out String>) {
    if (args.isEmpty()) {
      sender.sendMessage("/whois <player>")
      return
    }
    val target = history.resolve(args[0]) ?: return missing(sender)
    val record = history.store.get(target.uniqueId, target.name)
    val p = target.player?.takeIf { visible(sender, it) }
    sender.sendMessage(
        "§6${target.name} (${if (p == null) "オフライン" else "オンライン"}) / UUID: ${target.uniqueId}"
    )
    sender.sendMessage(
        "OP: ${target.isOp} / Whitelist: ${target.isWhitelisted} / Ban: ${target.isBanned}"
    )
    sender.sendMessage(
        "初回: ${recordedTime(target.firstPlayed)} / ログイン: ${recordedTime(record.login)} / ログアウト: ${recordedTime(record.logout)}"
    )
    if (sender !is Player || sender.hasPermission("essentials.whois.ip"))
        sender.sendMessage("IP: ${record.ip ?: "記録なし"}")
    if (p == null) {
      record.location?.let {
        sender.sendMessage("最終場所: ${it.worldName ?: it.world} ${it.x}, ${it.y}, ${it.z}")
      }
      return
    }
    val hidden = p.getMetadata("vanished").any { it.owningPlugin == plugin && it.asBoolean() }
    sender.sendMessage(
        "表示名: ${if (hidden && plugin.config.getBoolean("staff.hide-displayname-in-vanish", true)) p.name else p.displayName}"
    )
    sender.sendMessage("体力: ${p.health} / 満腹: ${p.foodLevel} / 満腹度: ${p.saturation}")
    sender.sendMessage(
        "経験値: ${totalExperience(p.level, p.exp)} / レベル: ${p.level} / プレイ時間: ${p.getStatistic(org.bukkit.Statistic.PLAY_ONE_MINUTE) * 50L / 1000}s"
    )
    val l = p.location
    sender.sendMessage("場所: ${l.world.name} ${l.blockX}, ${l.blockY}, ${l.blockZ}")
    sender.sendMessage(
        "ゲームモード: ${p.gameMode} / 飛行許可: ${p.allowFlight} / 飛行中: ${p.isFlying} / 速度: ${if (p.isFlying) p.flySpeed else p.walkSpeed} / Vanish: $hidden"
    )
  }
}

/**
 * Essentials SetExpFix computes from level/progress because Bukkit totalExperience can be stale.
 */
internal fun totalExperience(level: Int, progress: Float): Long {
  val base =
      when {
        level <= 16 -> level.toLong() * level + 6L * level
        level <= 31 -> (2.5 * level * level - 40.5 * level + 360).toLong()
        else -> (4.5 * level * level - 162.5 * level + 2220).toLong()
      }
  val next =
      when {
        level < 16 -> 2 * level + 7
        level < 31 -> 5 * level - 38
        else -> 9 * level - 158
      }
  return base + Math.round(progress * next).toLong()
}
