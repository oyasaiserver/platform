package io.oyasai.oyasaiAdminTools.bulletin.announcement.commands

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.announcement.gui.AnnouncementBrowser
import io.oyasai.oyasaiAdminTools.bulletin.announcement.gui.AnnouncementEditor
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object AnnouncementSubCommand {

  fun handle(sender: CommandSender, args: List<String>) {
    if (sender !is Player) {
      sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
      return
    }

    if (args.isEmpty() || args[0].equals("gui", true)) {
      if (!sender.hasPermission("oyasai.admin")) {
        sender.msg("<red>権限がありません。</red>")
        return
      }
      AnnouncementBrowser.open(sender)
      return
    }

    when (args[0].lowercase()) {
      "add" -> {
        if (!sender.hasPermission("oyasai.admin")) return
        if (args.size < 2) {
          sender.msg("<red>使用法: /bl announce add <ID></red>")
          return
        }
        val id = args[1]
        if (AnnouncementManager.announcements.any { it.id == id }) {
          sender.msg("<red>そのIDのお知らせは既に存在します。</red>")
          return
        }
        val newAnnouncement = Announcement(id = id, messages = listOf("新しいお知らせ"), interval = 300)
        AnnouncementManager.announcements.add(newAnnouncement)
        AnnouncementManager.save()
        AnnouncementManager.refreshTimers()
        sender.msg("<green>お知らせ '$id' を追加しました。</green>")
        AnnouncementEditor.open(sender, newAnnouncement)
      }
      "reload" -> {
        if (!sender.hasPermission("oyasai.admin")) return
        AnnouncementManager.reload()
        sender.msg("<green>お知らせ設定をリロードしました。</green>")
      }
    }
  }
}
