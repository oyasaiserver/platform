package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SignPdcMigration
import com.github.srain3.sociallikes.stats.SLDataLogger
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

/** /sldataop コマンド (管理者 / OP 専用) 他プレイヤー統計の閲覧・ダンプ、設定リロード、フォント検証などを集約。 */
object SLDataOp : CommandExecutor, TabCompleter {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (!sender.isOp) {
      sender.sendMessage(Tools.socialLikesLOGO + " &cこのコマンドを実行する権限がありません。".color())
      SLDataLogger.log(sender, label, args.toList(), 0, false, "Permission denied")
      return true
    }

    val t0 = System.currentTimeMillis()
    val sub = args.firstOrNull()?.lowercase()

    when (sub) {
      null,
      "",
      "help" -> {
        sendOpHelp(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "help",
        )
      }
      "reload" -> {
        // config.yml（ガイドの冊数・掲載数・告知・行数など）と本の色・文言を読み直す。
        // 起動時にだけ使う値（readSource・バックアップ・整合チェック間隔・Discord）は再起動が要る
        Tools.plugin.reloadConfig()
        com.github.srain3.sociallikes.gui.GuidebookStyle.load()
        sender.sendMessage(Tools.socialLikesLOGO + " &fconfig.yml とガイドの表示設定を再読込しました。".color())
        val config = SLData.reloadDialogRenderConfig()
        val statsText = SLData.reloadDialogStatsText()
        sender.sendMessage(
            Tools.socialLikesLOGO +
                " &fdialog設定を再読込しました。style=${config.widthStyle.name.lowercase()} line='${config.lineChar}' empty='${config.emptyChar}' stats2-text=${statsText.loadedEntryCount}項目"
                    .color()
        )
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "reload",
        )
      }
      "rewrite-sign-pdc" -> {
        SignPdcMigration.start(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "rewrite-sign-pdc started",
        )
      }
      "stats",
      "stats2",
      "detail",
      "details" -> {
        if (sender !is Player) {
          sender.sendMessage(
              Tools.socialLikesLOGO + " &cコンソールからは dump を使用してください: /sldataop dump <player>".color()
          )
          SLDataLogger.log(sender, label, args.toList(), 0, false, "Console cannot open GUI")
          return true
        }
        val targetName = args.getOrNull(1)
        if (targetName == null) {
          SLData.openDialogStats(sender)
          SLDataLogger.log(
              sender,
              label,
              args.toList(),
              System.currentTimeMillis() - t0,
              true,
              "Self stats from op",
          )
        } else {
          val offline = Bukkit.getOfflinePlayer(targetName)
          val targetUuid = offline.uniqueId
          SLData.openDialogStats(sender, targetUuid, offline.name ?: targetName)
          SLDataLogger.log(
              sender,
              label,
              args.toList(),
              System.currentTimeMillis() - t0,
              true,
              "Target: $targetName ($targetUuid)",
          )
        }
      }
      "dump" -> {
        if (sender is Player) {
          SLData.dumpDialogStatsFromPlayer(sender, args.drop(1).toTypedArray())
        } else {
          SLData.dumpDialogStatsFromConsole(sender, arrayOf("dialog", "stats2") + args.toList())
        }
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "dump",
        )
      }
      "font" -> {
        if (sender !is Player) {
          sender.sendMessage(Tools.socialLikesLOGO + " &cfontはプレイヤー専用です。".color())
          return true
        }
        if (args.getOrNull(1)?.lowercase() in setOf("vanilla", "nopack", "no-pack")) {
          SLDataFont.openVanillaFor(sender)
        } else {
          SLDataFont.openFor(sender)
        }
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            true,
            "font",
        )
      }
      else -> {
        sender.sendMessage(Tools.socialLikesLOGO + " &c不明な管理サブコマンドです: ${args[0]}".color())
        sendOpHelp(sender)
        SLDataLogger.log(
            sender,
            label,
            args.toList(),
            System.currentTimeMillis() - t0,
            false,
            "Unknown subcommand: ${args[0]}",
        )
      }
    }
    return true
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): MutableList<String> {
    if (!sender.isOp) return mutableListOf()

    return when (args.size) {
      1 ->
          listOf(
                  "stats",
                  "dump",
                  "reload",
                  "font",
                  "rewrite-sign-pdc",
              )
              .filter { it.startsWith(args[0], ignoreCase = true) }
              .toMutableList()
      2 ->
          when (args[0].lowercase()) {
            "stats",
            "detail",
            "dump" ->
                Bukkit.getOnlinePlayers()
                    .map { it.name }
                    .filter { it.startsWith(args[1], ignoreCase = true) }
                    .toMutableList()
            "font" ->
                listOf("pack", "vanilla")
                    .filter { it.startsWith(args[1], ignoreCase = true) }
                    .toMutableList()
            else -> mutableListOf()
          }
      else -> mutableListOf()
    }
  }

  private fun sendOpHelp(sender: CommandSender) {
    sender.sendMessage(Tools.socialLikesLOGO + " &c/sldataop 管理者用コマンド一覧".color())
    sender.sendMessage("&7/sldataop stats <プレイヤー> &f- 他プレイヤーの統計ダイアログを開く".color())
    sender.sendMessage("&7/sldataop dump <プレイヤー> &f- 統計集計データをテキストダンプ出力".color())
    sender.sendMessage("&7/sldataop reload &f- dialog.yml 等の設定を再読込".color())
    sender.sendMessage("&7/sldataop rewrite-sign-pdc &f- 登録済み看板のPDCを新ID・世代2へ一括書換".color())
    sender.sendMessage("&7/sldataop font [pack|vanilla] &f- フォントGUIの検証".color())
  }
}
