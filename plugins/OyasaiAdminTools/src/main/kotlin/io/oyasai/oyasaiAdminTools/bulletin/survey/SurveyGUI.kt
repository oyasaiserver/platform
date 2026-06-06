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
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.text.SimpleDateFormat
import java.util.*

object SurveyGUI {
    private val miniMessage = MiniMessage.miniMessage()
    private val dateFormat = SimpleDateFormat("yyyy/MM/dd HH:mm")

    fun openMenu(player: Player) {
        val gui = ChestGui(6, "アンケート一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = SurveyManager.surveys.map { survey ->
            val item = ItemStack(if (survey.enabled) Material.BOOK else Material.ENCHANTED_BOOK)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>ID: ${survey.id}</yellow>"))
            val lore = mutableListOf(
                miniMessage.deserialize("<gray>タイトル: ${survey.title}</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}")
            )
            lore.add(miniMessage.deserialize("<gray>回答者数: </gray><yellow>${survey.respondedPlayers.size}名</yellow>"))
            survey.expiresAt?.let { lore.add(miniMessage.deserialize("<gray>期限: </gray><aqua>${dateFormat.format(Date(it))}</aqua>")) }
            
            lore.add(Component.empty())
            lore.add(miniMessage.deserialize("<yellow>左クリック: 詳細編集</yellow>"))
            lore.add(miniMessage.deserialize("<aqua>右クリック: 有効/無効の切替</aqua>"))
            
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
            val sec = input.trim().toLongOrNull() ?: return@createSettingItem
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
            val resp = parts.getOrNull(0)?.toIntOrNull() ?: return@createSettingItem
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
            val time = input.trim().ifBlank { null }?.toLongOrNull()
            BulletinManagerUtils.updateSurvey(survey.id) { it.copy(expiresAt = time) }
            openEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 2, 2)

        // Groups
        pane.addItem(GuiItem(ItemStack(Material.WHITE_BANNER).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>ターゲットグループ設定</yellow>"))
                lore(listOf(
                    miniMessage.deserialize("<gray>現在: ${survey.targetGroups.joinToString(", ").ifEmpty { "全員" }}</gray>"),
                    miniMessage.deserialize("<gray>クリックしてGUIで選択</gray>")
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
                displayName(miniMessage.deserialize("<aqua>結果をDiscordに送信</aqua>"))
                lore(listOf(miniMessage.deserialize("<gray>現在の回答結果をCSV形式で送信します</gray>")))
            }
        }) {
            SurveyManager.exportResultsToDiscord(player, survey.id)
            player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
        }, 6, 2)

        // Questions Editor Button
        pane.addItem(GuiItem(ItemStack(Material.BOOK).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<gold>質問の管理</gold>")) }
        }) {
            openQuestionsEditor(player, survey)
        }, 4, 2)

        // Delete
        pane.addItem(GuiItem(ItemStack(Material.BARRIER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<red>削除する</red>")) }
        }) {
            SurveyManager.surveys.removeIf { it.id == survey.id }
            SurveyManager.save()
            SurveyManager.refreshTimers()
            openMenu(player)
        }, 7, 2)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
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
            meta.displayName(miniMessage.deserialize("<yellow>Q${idx+1}: ${q.text}</yellow>"))
            meta.lore(listOf(
                miniMessage.deserialize("<gray>タイプ: ${q.type}</gray>"),
                miniMessage.deserialize("<gray>選択肢: ${q.options.joinToString(", ")}</gray>"),
                Component.empty(),
                miniMessage.deserialize("<red>左クリック: 削除</red>"),
                miniMessage.deserialize("<yellow>右クリック: 編集</yellow>")
            ))
            item.itemMeta = meta
            GuiItem(item) { event ->
                if (event.isLeftClick) {
                    BulletinManagerUtils.updateSurvey(survey.id) { s ->
                        val newQs = s.questions.toMutableList().apply { removeAt(idx) }
                        s.copy(questions = newQs)
                    }
                    openQuestionsEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
                } else if (event.isRightClick) {
                    openQuestionDetailEditor(player, survey, idx)
                }
            }
        }
        pane.populateWithGuiItems(items)

        val actions = StaticPane(9, 1)
        actions.addItem(GuiItem(ItemStack(Material.NETHER_STAR).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<green>質問を追加</green>")) }
        }) {
            BulletinManagerUtils.updateSurvey(survey.id) { s ->
                val newQs = s.questions.toMutableList().apply { add(Question(text = "新しい質問", type = QuestionType.CLICK_TO_ANSWER)) }
                s.copy(questions = newQs)
            }
            openQuestionsEditor(player, SurveyManager.surveys.find { it.id == survey.id }!!)
        }, 4, 0)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
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
                displayName(miniMessage.deserialize("<yellow>タイプ切り替え</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${q.type}</gray>"), miniMessage.deserialize("<gray>クリックで次へ</gray>")))
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
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
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
