package io.oyasai.oyasaiAdminTools.bulletin.survey.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyExporter
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SurveyEditor {

    fun open(player: Player, survey: Survey) {
        val gui = ChestGui(4, "編集: ${survey.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 4)

        // Title
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.NAME_TAG, "タイトル変更", survey.title,
            "タイトル", "アンケートのタイトルを入力してください。",
            "survey:${survey.id}:title"
        ) { input ->
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(title = input.trim()) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 1, 1)

        // Broadcast Messages
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.WRITABLE_BOOK, "告知メッセージ管理", 
            if (survey.broadcastMessages.isEmpty()) "" else "${survey.broadcastMessages.size}個登録済み",
            "告知メッセージ一覧", "1行につき1つのメッセージを入力してください。\n放送時にランダムで選択されます。",
            "survey:${survey.id}:broadcastMessages"
        ) { input ->
            val list = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(broadcastMessages = list) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 2, 1)

        // Interval
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.CLOCK, "告知間隔 (秒)", survey.broadcastInterval.toString(),
            "告知間隔 (秒)", "告知を流す間隔を秒単位で入力してください。",
            "survey:${survey.id}:broadcastInterval"
        ) { input ->
            val sec = input.trim().toLongOrNull() ?: run { player.msg("<red>数字を入力してください。</red>"); return@createSettingItem }
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(broadcastInterval = sec) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 3, 1)

        // Max Responses / Rewards
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.GOLD_INGOT, "回答/報酬上限", "${survey.maxResponses} ${survey.maxRewards}",
            "回答上限と報酬上限", "回答できる最大回数と、報酬を貰える最大回数をスペース区切りで入力してください。",
            "survey:${survey.id}:maxResponsesRewards"
        ) { input ->
            val parts = input.trim().split(Regex("\\s+"))
            val resp = parts.getOrNull(0)?.toIntOrNull() ?: run { player.msg("<red>無効な入力です。</red>"); return@createSettingItem }
            val rew = parts.getOrNull(1)?.toIntOrNull() ?: resp
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(maxResponses = resp, maxRewards = rew) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 4, 1)

        // Webhook
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.BLUE_STAINED_GLASS_PANE, "Discord Webhook", survey.discordWebhookUrl ?: "",
            "Discord Webhook", "Webhook URLを入力してください。'none' で解除されます。",
            "survey:${survey.id}:discordWebhookUrl"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(discordWebhookUrl = if (cleaned == "none") null else cleaned) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 5, 1)

        // Reward Commands
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMMAND_BLOCK, "報酬コマンド", survey.rewardCommands.joinToString(" | "),
            "報酬コマンド", "1行につき1つのコマンドを入力してください。",
            "survey:${survey.id}:rewardCommands"
        ) { input ->
            val cmds = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(rewardCommands = cmds) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 6, 1)

        // Sound
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.JUKEBOX, "効果音設定", survey.sound ?: "",
            "効果音ID", "告知時に流す効果音のIDを入力してください。",
            "survey:${survey.id}:sound"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(sound = cleaned.ifBlank { null }) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 3, 2)

        // Expiration
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMPASS, "期限設定 (UNIXミリ秒)", survey.expiresAt?.toString() ?: "",
            "期限 (UNIXミリ秒)", "自動停止する期限をUNIXタイムスタンプ(ミリ秒)で入力してください。",
            "survey:${survey.id}:expiresAt"
        ) { input ->
            val cleaned = input.trim()
            if (cleaned.isNotEmpty() && cleaned.toLongOrNull() == null) {
                player.msg("<red>無効なUNIXタイムスタンプです。</red>")
                return@createSettingItem
            }
            val time = cleaned.ifBlank { null }?.toLongOrNull()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(expiresAt = time) }
            open(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 2, 2)

        // Groups
        pane.addItem(GuiItem(ItemStack(Material.WHITE_BANNER).apply {
            itemMeta = itemMeta.apply { 
                displayName("<yellow>ターゲットグループ設定</yellow>".mm())
                lore(listOf(
                    "<gray>現在: ${survey.targetGroups.joinToString(", ").ifEmpty { "全員" }}</gray>".mm(),
                    "<gray>クリックしてGUIで選択</gray>".mm()
                ))
            }
        }) {
            BulletinGUIUtils.openTargetGroupsEditor(
                player, 
                survey.id,
                survey.targetGroups,
                { newGroups -> BulletinManagerUtils.updateSurvey(survey.id) { it.copy(targetGroups = newGroups) } },
                { open(player, SurveyManager.surveys.find { it.id == survey.id }!!) }
            )
        }, 1, 2)

        // Discord Export Button
        pane.addItem(GuiItem(ItemStack(Material.DISPENSER).apply {
            itemMeta = itemMeta.apply { 
                displayName("<aqua>結果をDiscordに送信</aqua>".mm())
                lore(listOf("<gray>現在の回答結果をCSV形式で送信します</gray>".mm()))
            }
        }) {
            SurveyExporter.exportResultsToDiscord(player, survey.id)
            player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
        }, 6, 2)

        // Questions Editor Button
        pane.addItem(GuiItem(ItemStack(Material.BOOK).apply {
            itemMeta = itemMeta.apply { displayName("<gold>質問の管理</gold>".mm()) }
        }) {
            SurveyQuestionEditor.open(player, survey)
        }, 4, 2)

        // Delete
        pane.addItem(GuiItem(ItemStack(Material.BARRIER).apply {
            itemMeta = itemMeta.apply { displayName("<red>削除する</red>".mm()) }
        }) {
            BulletinGUIUtils.openConfirmationGUI(
                player, "削除の確認", survey.id,
                {
                    SurveyManager.surveys.removeIf { it.id == survey.id }
                    SurveyManager.save()
                    SurveyManager.refreshTimers()
                    SurveyBrowser.open(player)
                    player.msg("<green>削除しました。</green>")
                },
                { open(player, survey) }
            )
        }, 7, 2)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { SurveyBrowser.open(player) }, 8, 3)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }
}
