package io.oyasai.oyasaiAdminTools.bulletin.survey

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Question
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.QuestionType
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.util.*

object SurveyGUI {
    fun openMenu(player: Player) {
        val gui = ChestGui(6, "アンケート一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = SurveyManager.surveys.map { survey ->
            val item = ItemStack(if (survey.enabled) Material.BOOK else Material.ENCHANTED_BOOK)
            val meta = item.itemMeta
            meta.displayName("<yellow>ID: ${survey.id}</yellow>".mm())
            val lore = mutableListOf(
                "<gray>タイトル: ${survey.title}</gray>".mm(),
                "<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}".mm()
            )
            lore.add("<gray>回答者数: </gray><yellow>${survey.respondedPlayers.size}名</yellow>".mm())
            survey.expiresAt?.let { lore.add("<gray>期限: </gray><aqua>${BulletinGUIUtils.dateFormat.format(Date(it))}</aqua>".mm()) }
            
            lore.add(net.kyori.adventure.text.Component.empty())
            lore.add("<yellow>左クリック: 詳細編集</yellow>".mm())
            lore.add("<aqua>右クリック: 有効/無効の切替</aqua>".mm())
            
            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { event ->
                val target = SurveyManager.surveys.find { it.id == survey.id } ?: return@GuiItem
                
                if (event.isLeftClick) {
                    openEditor(player, target)
                } else if (event.isRightClick) {
                    BulletinManagerUtils.updateSurvey(target.id) { it.copy(enabled = !it.enabled) }
                    player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                    Bukkit.getScheduler().runTask(plugin, Runnable { openMenu(player) })
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), BulletinGUIUtils.createNavigationPane(gui, pane, player, { SurveyManager.reload() }, { openMenu(player) }))
        gui.show(player)
    }

    private fun openEditor(player: Player, survey: Survey) {
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
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 1, 1)

        // Broadcast Message
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.WRITABLE_BOOK, "告知メッセージ変更", survey.broadcastMessage,
            "告知メッセージ", "開始を促すメッセージを入力してください。",
            "survey:${survey.id}:broadcastMessage"
        ) { input ->
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(broadcastMessage = input) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 2, 1)

        // Interval
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.CLOCK, "告知間隔 (秒)", survey.broadcastInterval.toString(),
            "告知間隔 (秒)", "告知を流す間隔を秒単位で入力してください。",
            "survey:${survey.id}:broadcastInterval"
        ) { input ->
            val sec = input.trim().toLongOrNull() ?: run { player.msg("<red>数字を入力してください。</red>"); return@createSettingItem }
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(broadcastInterval = sec) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
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
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 4, 1)

        // Webhook
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.BLUE_STAINED_GLASS_PANE, "Discord Webhook", survey.discordWebhookUrl ?: "未設定",
            "Discord Webhook", "Webhook URLを入力してください。'none' で解除されます。",
            "survey:${survey.id}:discordWebhookUrl"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(discordWebhookUrl = if (cleaned == "none") null else cleaned) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 5, 1)

        // Reward Commands
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMMAND_BLOCK, "報酬コマンド", survey.rewardCommands.joinToString(" | "),
            "報酬コマンド", "1行につき1つのコマンドを入力してください。",
            "survey:${survey.id}:rewardCommands"
        ) { input ->
            val cmds = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(rewardCommands = cmds) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 6, 1)

        // Sound
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.JUKEBOX, "効果音設定", survey.sound ?: "なし",
            "効果音ID", "告知時に流す効果音のIDを入力してください。",
            "survey:${survey.id}:sound"
        ) { input ->
            val cleaned = input.trim()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(sound = cleaned.ifBlank { null }) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 3, 2)

        // Expiration
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.COMPASS, "期限設定 (UNIXミリ秒)", survey.expiresAt?.toString() ?: "なし",
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
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
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
                { openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!) }
            )
        }, 1, 2)

        // Discord Export Button
        pane.addItem(GuiItem(ItemStack(Material.DISPENSER).apply {
            itemMeta = itemMeta.apply { 
                displayName("<aqua>結果をDiscordに送信</aqua>".mm())
                lore(listOf("<gray>現在の回答結果をCSV形式で送信します</gray>".mm()))
            }
        }) {
            SurveyManager.exportResultsToDiscord(player, survey.id)
            player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
        }, 6, 2)

        // Questions Editor Button
        pane.addItem(GuiItem(ItemStack(Material.BOOK).apply {
            itemMeta = itemMeta.apply { displayName("<gold>質問の管理</gold>".mm()) }
        }) {
            openQuestionsEditor(player, survey)
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
                    openMenu(player)
                    player.msg("<green>削除しました。</green>")
                },
                { openEditor(player, survey) }
            )
        }, 7, 2)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { openMenu(player) }, 8, 3)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun openQuestionsEditor(player: Player, survey: Survey) {
        val gui = ChestGui(6, "質問管理: ${survey.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = survey.questions.mapIndexed { idx, q ->
            val item = ItemStack(Material.PAPER)
            val meta = item.itemMeta
            meta.displayName("<yellow>Q${idx+1}: ${q.text}</yellow>".mm())
            meta.lore(listOf(
                "<gray>タイプ: ${q.type}</gray>".mm(),
                "<gray>選択肢: ${q.options.joinToString(", ")}</gray>".mm(),
                net.kyori.adventure.text.Component.empty(),
                "<red>左クリック: 削除</red>".mm(),
                "<yellow>右クリック: 編集</yellow>".mm()
            ))
            item.itemMeta = meta
            GuiItem(item) { event ->
                if (event.isLeftClick) {
                    BulletinGUIUtils.openConfirmationGUI(
                        player, "質問削除", "Q${idx+1}",
                        {
                            BulletinManagerUtils.updateSurvey(survey.id) { s ->
                                val newQs = s.questions.toMutableList().apply { removeAt(idx) }
                                s.copy(questions = newQs)
                            }
                            openQuestionsEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
                        },
                        { openQuestionsEditor(player, survey) }
                    )
                } else if (event.isRightClick) {
                    openQuestionDetailEditor(player, survey, idx)
                }
            }
        }
        pane.populateWithGuiItems(items)

        val actions = StaticPane(9, 1)
        actions.addItem(GuiItem(ItemStack(Material.NETHER_STAR).apply {
            itemMeta = itemMeta.apply { displayName("<green>質問を追加</green>".mm()) }
        }) {
            BulletinManagerUtils.updateSurvey(survey.id) { s ->
                val newQs = s.questions.toMutableList().apply { add(Question(text = "新しい質問", type = QuestionType.CLICK_TO_ANSWER)) }
                s.copy(questions = newQs)
            }
            openQuestionsEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 4, 0)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { openEditor(player, survey) }, 8, 0)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), actions)
        gui.show(player)
    }

    private fun openQuestionDetailEditor(player: Player, survey: Survey, qIdx: Int) {
        val q = survey.questions[qIdx]
        val gui = ChestGui(3, "質問編集: Q${qIdx+1}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Text
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.NAME_TAG, "質問文変更", q.text,
            "質問文", "質問の本文を入力してください。",
            "survey:${survey.id}:question:${qIdx}:text"
        ) { input ->
            updateQuestion(survey.id, qIdx) { it.copy(text = input) }
            openQuestionDetailEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!, qIdx)
        }, 2, 1)

        // Type
        pane.addItem(GuiItem(ItemStack(Material.REPEATER).apply {
            itemMeta = itemMeta.apply { 
                displayName("<yellow>タイプ切り替え</yellow>".mm())
                lore(listOf("<gray>現在: ${q.type}</gray>".mm(), "<gray>クリックで次へ</gray>".mm()))
            }
        }) {
            val nextType = QuestionType.entries[(q.type.ordinal + 1) % QuestionType.entries.size]
            updateQuestion(survey.id, qIdx) { it.copy(type = nextType) }
            openQuestionDetailEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!, qIdx)
        }, 4, 1)

        // Options
        pane.addItem(BulletinGUIUtils.createSettingItem(
            player, Material.PAPER, "選択肢変更", q.options.joinToString(", "),
            "選択肢", "1行につき1つの選択肢を入力してください。",
            "survey:${survey.id}:question:${qIdx}:options"
        ) { input ->
            val opts = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
            updateQuestion(survey.id, qIdx) { it.copy(options = opts) }
            openQuestionDetailEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!, qIdx)
        }, 6, 1)

        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName("戻る".mm()) }
        }) { openQuestionsEditor(player, survey) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun updateQuestion(surveyId: String, qIdx: Int, action: (Question) -> Question) {
        BulletinManagerUtils.updateSurvey(surveyId) { survey ->
            val newQs = survey.questions.toMutableList()
            if (qIdx in newQs.indices) {
                newQs[qIdx] = action(newQs[qIdx])
            }
            survey.copy(questions = newQs)
        }
    }
}
