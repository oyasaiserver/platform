package io.oyasai.oyasaiAdminTools.seen

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.playerhistory.PlayerHistoryFeature
import io.oyasai.oyasaiAdminTools.staff.StaffFeature
import java.time.Instant
import java.time.ZoneId
import java.time.format.DateTimeFormatter
import org.bukkit.command.CommandSender

fun recordedTime(time: Long): String =
    if (time <= 0) "記録なし"
    else
        DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z")
            .withZone(ZoneId.systemDefault())
            .format(Instant.ofEpochMilli(time))

class SeenFeature(plugin: OyasaiAdminTools, private val history: PlayerHistoryFeature) :
    StaffFeature(plugin, "seen") {
  override fun execute(sender: CommandSender, args: Array<out String>) {
    if (args.isEmpty()) {
      sender.sendMessage("/seen <player>")
      return
    }
    val target = history.resolve(args[0]) ?: return missing(sender)
    val record = history.store.get(target.uniqueId, target.name)
    val live = target.player?.takeIf { visible(sender, it) }
    sender.sendMessage("§6${target.name}: ${if (live != null) "オンライン" else "オフライン"}")
    sender.sendMessage(
        "§6最終ログイン: ${recordedTime(record.login)} / 最終ログアウト: ${recordedTime(record.logout)}"
    )
    if (sender.hasPermission("essentials.seen.uuid")) sender.sendMessage("UUID: ${target.uniqueId}")
    if (sender.hasPermission("essentials.seen.firstlogin"))
        sender.sendMessage("初回参加: ${recordedTime(target.firstPlayed)}")
    if (sender.hasPermission("essentials.seen.ip")) sender.sendMessage("IP: ${record.ip ?: "記録なし"}")
    if (sender.hasPermission("essentials.seen.whitelist"))
        sender.sendMessage("Whitelist: ${target.isWhitelisted}")
    if (live == null && sender.hasPermission("essentials.seen.location"))
        record.location?.let {
          sender.sendMessage("最終場所: ${it.worldName ?: it.world} ${it.x}, ${it.y}, ${it.z}")
        }
    if (target.isBanned) {
      val ban =
          plugin.server
              .getBanList<org.bukkit.ban.ProfileBanList>(org.bukkit.BanList.Type.PROFILE)
              .getBanEntry(target.playerProfile)
      sender.sendMessage(
          "Ban: ${if (sender.hasPermission("essentials.seen.banreason")) ban?.reason ?: "true" else "true"}"
      )
      ban?.expiration?.let { sender.sendMessage("Ban期限: ${recordedTime(it.time)}") }
    }
  }
}
