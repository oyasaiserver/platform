package io.oyasai.oyasaiAdminTools.bulletin

import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementGUI
import io.oyasai.oyasaiAdminTools.bulletin.announcement.AnnouncementManager
import io.oyasai.oyasaiAdminTools.bulletin.announcement.models.Announcement
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyGUI
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.utils.PermsUtils
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

object BulletinCommandExecutor : CommandExecutor, TabCompleter {
    private val miniMessage = MiniMessage.miniMessage()

    private fun adminCheck(sender: CommandSender): Boolean {
        if (!sender.hasPermission("oyasai.admin")) {
            sender.sendMessage(miniMessage.deserialize("<red>権限がありません。</red>"))
            return false
        }
        return true
    }

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (sender !is Player) {
            sender.sendMessage("このコマンドはプレイヤーのみ実行可能です。")
            return true
        }

        // Shortcut for /anke
        if (command.name.equals("anke", true)) {
            if (args.isEmpty()) {
                SurveyManager.startLastAvailableSurvey(sender)
            } else {
                handleSurvey(sender, args.toList())
            }
            return true
        }

        if (args.isEmpty() || args[0].equals("help", true)) {
            sendHelp(sender)
            return true
        }

        val subCommand = args[0].lowercase()
        val subArgs = args.drop(1)

        when (subCommand) {
            "announce", "announcement", "notice", "a" -> handleAnnouncement(sender, subArgs)
            "survey", "s", "anke" -> handleSurvey(sender, subArgs)
            "reload" -> {
                if (!adminCheck(sender)) return true
                AnnouncementManager.reload()
                SurveyManager.reload()
                sender.sendMessage(miniMessage.deserialize("<green>広報設定（お知らせ・アンケート）をリロードしました。</green>"))
            }
            "gui" -> {
                if (!adminCheck(sender)) return true
                openMainMenu(sender)
            }
            // Compatibility or direct access
            else -> {
                // survey ID
                if (SurveyManager.surveys.any { it.id == subCommand }) {
                    SurveyManager.startSurvey(sender, subCommand)
                } else {
                    sendHelp(sender)
                }
            }
        }

        return true
    }

    private fun handleAnnouncement(player: Player, args: List<String>) {
        if (args.isEmpty() || args[0].equals("gui", true)) {
            if (!adminCheck(player)) return
            AnnouncementGUI.openMenu(player)
            return
        }

        when (args[0].lowercase()) {
            "add" -> {
                if (!adminCheck(player)) return
                if (args.size < 2) {
                    player.sendMessage(miniMessage.deserialize("<red>使用法: /bl announce add <ID></red>"))
                    return
                }
                val id = args[1]
                if (AnnouncementManager.announcements.any { it.id == id }) {
                    player.sendMessage(miniMessage.deserialize("<red>そのIDのお知らせは既に存在します。</red>"))
                    return
                }
                val newAnnouncement = Announcement(id = id, message = "新しいお知らせ", interval = 300)
                AnnouncementManager.announcements.add(newAnnouncement)
                AnnouncementManager.save()
                AnnouncementManager.refreshTimers()
                player.sendMessage(miniMessage.deserialize("<green>お知らせ '$id' を追加しました。</green>"))
                AnnouncementGUI.openMenu(player)
            }
            "reload" -> {
                if (!adminCheck(player)) return
                AnnouncementManager.reload()
                player.sendMessage(miniMessage.deserialize("<green>お知らせ設定をリロードしました。</green>"))
            }
            else -> sendHelp(player)
        }
    }

    private fun handleSurvey(player: Player, args: List<String>) {
        if (args.isEmpty()) {
            SurveyManager.startLastAvailableSurvey(player)
            return
        }

        when (args[0].lowercase()) {
            "gui" -> {
                if (!adminCheck(player)) return
                SurveyGUI.openMenu(player)
            }
            "add" -> {
                if (!adminCheck(player)) return
                if (args.size < 2) {
                    player.sendMessage(miniMessage.deserialize("<red>使用法: /bl survey add <ID></red>"))
                    return
                }
                val id = args[1]
                if (SurveyManager.surveys.any { it.id == id }) {
                    player.sendMessage(miniMessage.deserialize("<red>そのIDのアンケートは既に存在します。</red>"))
                    return
                }
                val newSurvey = Survey(id = id, title = "新しいアンケート")
                SurveyManager.surveys.add(newSurvey)
                SurveyManager.save()
                SurveyManager.refreshTimers()
                player.sendMessage(miniMessage.deserialize("<green>アンケート '$id' を追加しました。</green>"))
                SurveyGUI.openMenu(player)
            }
            "open" -> SurveyManager.startLastAvailableSurvey(player)
            "resume" -> {
                val progress = SurveyManager.getProgress(player.uniqueId)
                if (progress == null) {
                    player.sendMessage(miniMessage.deserialize("<red>進行中のアンケートはありません。</red>"))
                    return
                }
                val survey = SurveyManager.surveys.find { it.id == progress.surveyId } ?: return
                SurveyManager.showQuestion(player, survey, progress.currentQuestionIndex)
            }
            "answer" -> {
                if (args.size < 3) return
                val index = args[1].toIntOrNull() ?: return
                val answer = args.drop(2).joinToString(" ")
                SurveyManager.handleAnswer(player, index, answer)
            }
            "send" -> {
                if (!adminCheck(player)) return
                if (args.size < 2) {
                    player.sendMessage(miniMessage.deserialize("<red>使用法: /bl survey send <ID></red>"))
                    return
                }
                SurveyManager.exportResultsToDiscord(player, args[1])
            }
            "reload" -> {
                if (!adminCheck(player)) return
                SurveyManager.reload()
                player.sendMessage(miniMessage.deserialize("<green>アンケート設定をリロードしました。</green>"))
            }
            else -> {
                // If args[0] is surveyId
                SurveyManager.startSurvey(player, args[0])
            }
        }
    }

    private fun openMainMenu(player: Player) {
        val gui = com.github.stefvanschie.inventoryframework.gui.type.ChestGui(3, "広報管理")
        val pane = com.github.stefvanschie.inventoryframework.pane.StaticPane(9, 3)

        pane.addItem(com.github.stefvanschie.inventoryframework.gui.GuiItem(org.bukkit.inventory.ItemStack(org.bukkit.Material.HORN_CORAL).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<gold>お知らせ管理</gold>")) }
        }) { AnnouncementGUI.openMenu(player) }, 3, 1)

        pane.addItem(com.github.stefvanschie.inventoryframework.gui.GuiItem(org.bukkit.inventory.ItemStack(org.bukkit.Material.PAPER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<gold>アンケート管理</gold>")) }
        }) { SurveyGUI.openMenu(player) }, 5, 1)

        gui.addPane(com.github.stefvanschie.inventoryframework.pane.util.Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun sendHelp(player: Player) {
        player.sendMessage(miniMessage.deserialize("<gold>==== [Oyasai Bulletin Help] ====</gold>"))
        player.sendMessage(miniMessage.deserialize("<yellow>/anke</yellow> : 最新のアンケートを開く"))
        player.sendMessage(miniMessage.deserialize("<yellow>/bl survey <ID></yellow> : アンケートを開始する"))
        player.sendMessage(miniMessage.deserialize("<yellow>/bl survey resume</yellow> : アンケートを再開する"))
        if (player.hasPermission("oyasai.admin")) {
            player.sendMessage(miniMessage.deserialize("<gray>-- 管理者用 --</gray>"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl gui</yellow> : 総合管理画面"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl announce gui</yellow> : お知らせ管理"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl survey gui</yellow> : アンケート管理"))
            player.sendMessage(miniMessage.deserialize("<yellow>/bl reload</yellow> : 全てのリロード"))
        }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String> {
        if (command.name.equals("anke", true)) return emptyList()

        if (args.size == 1) {
            val list = mutableListOf("help", "announce", "survey")
            if (sender.hasPermission("oyasai.admin")) {
                list.add("gui")
                list.add("reload")
            }
            // Add survey IDs for quick start (for users)
            list.addAll(SurveyManager.surveys.filter { it.enabled }.map { it.id })
            return list.filter { it.startsWith(args[0], true) }
        }

        if (args.size >= 2) {
            val sub = args[0].lowercase()
            when (sub) {
                "announce", "announcement", "notice", "a" -> {
                    if (!sender.hasPermission("oyasai.admin")) return emptyList()
                    if (args.size == 2) {
                        return listOf("gui", "add", "reload").filter { it.startsWith(args[1], true) }
                    }
                }
                "survey", "s", "anke" -> {
                    if (args.size == 2) {
                        val list = mutableListOf("resume", "open")
                        if (sender.hasPermission("oyasai.admin")) {
                            list.add("gui")
                            list.add("add")
                            list.add("reload")
                            list.add("send")
                        }
                        val surveyIds = if (sender.hasPermission("oyasai.admin")) {
                            SurveyManager.surveys.map { it.id }
                        } else {
                            SurveyManager.surveys.filter { it.enabled }.map { it.id }
                        }
                        list.addAll(surveyIds)
                        return list.filter { it.startsWith(args[1], true) }
                    }
                    if (args.size == 3 && args[1].equals("send", true) && sender.hasPermission("oyasai.admin")) {
                        return SurveyManager.surveys.map { it.id }.filter { it.startsWith(args[2], true) }
                    }
                }
            }
        }

        return emptyList()
    }
}
