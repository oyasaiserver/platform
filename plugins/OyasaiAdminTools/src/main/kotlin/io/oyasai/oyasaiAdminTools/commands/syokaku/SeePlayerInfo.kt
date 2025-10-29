package io.oyasai.oyasaiAdminTools.commands.syokaku

import com.baakun.dynamicprofile.util.Tools.getStats
import com.github.srain3.sociallikes.datas.Data
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import java.time.LocalDateTime
import java.time.temporal.ChronoUnit
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SeePlayerInfo : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    // /syokaku seeplayerinfo <player>
    if (args.size < 1) {
      sender.sendMessage("§cUsage: /syokaku seeplayerinfo <player>")
      return true
    }
    val playerName = args[0]
    val player = Bukkit.getOfflinePlayer(playerName)
    val statsData = getStats(player.uniqueId) // DynamicProfile依存
    val builds = Data.getSLDataAll().filter { it.owner.equals(player.uniqueId) }
    // 初建築からの日数
    // 最後の建築からの日数
    if (args.size == 1) {
      val lastPromo = getStats(player.uniqueId).promotions.records.maxByOrNull { it.date }
      val lastPromoDate =
        if (lastPromo != null) DateTimeUtils.parseToJST(lastPromo.date)
        else DateTimeUtils.getCurrentJST()
      sender.sendMessage("§e${playerName}さんの情報:")
      val rankFuture = PermsUtils.getCurrentRank(player.uniqueId)

      rankFuture.thenAccept { rank ->
        sender.sendMessage(" - §a現在のランク: §r${rank?.name} (ID: ${rank?.groupName})")
        sender.sendMessage(
          " - §a最後の昇格日: §e${lastPromo?.date} (${
            ChronoUnit.DAYS.between(
              lastPromoDate,
              DateTimeUtils.getCurrentJST(),
            )
          }日前)"
        )
        sender.sendMessage(" - §a初回ログイン: §e${statsData.getFirstPlayed()}")
        sender.sendMessage(" - §a最終ログイン: §e${statsData.getLastOnlineTime()}")
        sender.sendMessage(" - §aログイン回数: §e${statsData.join}回")
        sender.sendMessage(" - §a総プレイ時間: §e${statsData.getPlayTime()}")
        sender.sendMessage(" - §a建築数: §e${builds.size}個")
        if (builds.isNotEmpty()) {
          val firstBuild = builds.minByOrNull { it.time }
          val lastBuild = builds.maxByOrNull { it.time }
          sender.sendMessage(
            " - §a初建築: §e${DateTimeUtils.formatToString(firstBuild?.time ?: LocalDateTime.now())}, §a経過日数: ${
              ChronoUnit.DAYS.between(
                firstBuild?.time,
                LocalDateTime.now(),
              )
            }"
          )
          sender.sendMessage(
            " - §a最終建築: §e${DateTimeUtils.formatToString(lastBuild?.time ?: LocalDateTime.now())}, §a経過日数: ${
              ChronoUnit.DAYS.between(
                lastBuild?.time,
                LocalDateTime.now(),
              )
            }"
          )
        }
      }
    } else {
      // GUI一覧表示・チャットで1個ずつ表示
      val history = getStats(player.uniqueId).promotions
      if (args[1].toIntOrNull() != null) {
        val page = args[1].toInt() - 1
        if (page < 0 || page >= history.records.size) {
          sender.sendMessage("§cページ番号が不正です。0 - ${history.records.size}")
          return true
        }
        sender.sendMessage("§e${playerName}さんの昇格履歴:")
        if (history.records.isEmpty()) {
          sender.sendMessage(" - 昇格履歴がありません。")
        } else {
          val record = history.records.sortedByDescending { it.date }.get(page)

          // type 昇格・降格
          // date 昇格日：
          // previousRank -> newRank
          // note　備考
          // promotedBy　昇格者：
          // isForced　特例昇格：
          // lastBuildID　最後の建築ID
          // builds　建築数
          // lastLv　昇格時点のレベル
          // lastExp　昇格時点の経験値
          // << (r/n) >>　ページ切り替え(1ページ1件)、クリック可

          val message =
            Component.text("===============${page+1}/${history.records.size}=============")
              .appendNewline()
              .append(Component.text(" - 日付: ${record.date}"))
              .appendNewline()
              .append(Component.text(" - 種類: ${record.type}"))
              .appendNewline()
              .append(Component.text(" - ランク: ${record.previousRank} -> ${record.newRank}"))
              .appendNewline()
              .append(Component.text(" - 備考: ${record.note}"))
              .appendNewline()
              .append(
                Component.text(
                  " - 昇格者: ${Bukkit.getOfflinePlayer(UUID.fromString(record.promotedBy)).name}"
                )
              )
              .appendNewline()
              .append(Component.text(" - 特例昇格: ${if (record.isForced) "はい" else "いいえ"}"))
              .appendNewline()
              .append(
                Component.text(" - プレイ時間: ${record.playedSec/3600}時間")
              )
              .appendNewline()
              .append(
                Component.text(" - 最後の建築ID: ${record.lastBuildID}")
                  .clickEvent(ClickEvent.runCommand("sltp ${record.lastBuildID}"))
              )
              .appendNewline()
              .append(Component.text(" - 建築数: ${record.builds}"))
              .appendNewline()
              .append(Component.text(" - 昇格時点のレベル: ${record.lastLv}"))
              .appendNewline()
              .append(Component.text(" - 昇格時点の経験値: ${record.lastExp}"))
              .appendNewline()
              .append(
                Component.text("<<================")
                  .hoverEvent(HoverEvent.showText(Component.text("クリックして前のページ")))
                  .clickEvent(ClickEvent.runCommand("syokaku seeplayerinfo ${playerName} ${page}"))
              )
              //
              // .append(Component.text("<<<<<<<<<<<<<<<").clickEvent(ClickEvent.runCommand("syokaku
              // ${playerName} ${if(page+1<history.records.size) page+1 else page}")))//ページを戻る
              .append(
                Component.text("================>>")
                  .hoverEvent(HoverEvent.showText(Component.text("クリックして次のページ")))
                  .clickEvent(
                    ClickEvent.runCommand("syokaku seeplayerinfo ${playerName} ${page+2}")
                  )
              )
          sender.sendMessage(message)
        }
      } else if (args[1] == "gui" && sender is Player) {
        // GUIで一覧表示
        val inventory = Bukkit.createInventory(sender, 54, "${playerName}さんの昇格履歴")
        history.records
          .sortedByDescending { it.date }
          .forEach {
            (
              type,
              newRank,
              previousRank,
              promotedBy,
              isForced,
              date,
              note,
              playedSec,
              lastBuildID,
              builds,
              lastLv,
              lastExp) ->
            val item = ItemStack(Material.OAK_SIGN)
            val meta = item.itemMeta
            meta?.setDisplayName("§a${previousRank} -> ${newRank}")
            val lore = mutableListOf<Component>()
            lore.add(Component.text("§e日付: §f${date}"))
            lore.add(Component.text("§e種類: §f${type}"))
            lore.add(
              Component.text(
                "§e昇格者: §f${Bukkit.getOfflinePlayer(UUID.fromString(promotedBy)).name}"
              )
            )
            lore.add(Component.text("§e備考: §f${note}"))
            lore.add(Component.text("§e特例昇格: §f${if (isForced) "はい" else "いいえ"}"))
            lore.add(Component.text("§eプレイ時間: §f${playedSec/3600}時間"))
            lore.add(Component.text("§e最後の建築ID: §f${lastBuildID}"))
            lore.add(Component.text("§e建築数: §f${builds}"))
            lore.add(Component.text("§e昇格時点のレベル: §f${lastLv}"))
            lore.add(Component.text("§e昇格時点の経験値: §f${lastExp}"))
            meta?.lore(lore)
            item.itemMeta = meta
            inventory.addItem(item)
          }
        sender.openInventory(inventory)
      }
    }

    return true
  }
}
