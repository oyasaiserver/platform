package io.oyasai.oyasaiAdminTools.bulletin

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.models.Question
import io.oyasai.oyasaiAdminTools.bulletin.models.QuestionType
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import java.text.SimpleDateFormat
import java.util.*

object BulletinGUI {
    private val miniMessage = MiniMessage.miniMessage()
    private val dateFormat = SimpleDateFormat("yyyy/MM/dd HH:mm")

    fun openMainMenu(player: Player) {
        val gui = ChestGui(3, "放送室")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        pane.addItem(GuiItem(ItemStack(Material.HORN_CORAL).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<gold>お知らせ管理</gold>")) }
        }) { openNoticesMenu(player) }, 3, 1)

        pane.addItem(GuiItem(ItemStack(Material.PAPER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<gold>アンケート管理</gold>")) }
        }) { openSurveysMenu(player) }, 5, 1)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    fun openNoticesMenu(player: Player) {
        val gui = ChestGui(6, "お知らせ一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = BulletinManager.notices.map { notice ->
            val item = ItemStack(if (notice.enabled) Material.LIME_STAINED_GLASS_PANE else Material.RED_STAINED_GLASS_PANE)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>ID: ${notice.id}</yellow>"))
            val lore = mutableListOf(
                miniMessage.deserialize("<gray>内容: </gray>${notice.message}"),
                miniMessage.deserialize("<gray>間隔: ${notice.interval}s</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (notice.enabled) "<green>有効" else "<red>無効"}")
            )
            notice.expiresAt?.let { lore.add(miniMessage.deserialize("<gray>期限: </gray><aqua>${dateFormat.format(Date(it))}</aqua>")) }
            if (notice.targetGroups.isNotEmpty()) lore.add(miniMessage.deserialize("<gray>対象: </gray><white>${notice.targetGroups.joinToString(", ")}</white>"))
            
            lore.add(Component.empty())
            lore.add(miniMessage.deserialize("<yellow>左クリック: 詳細編集</yellow>"))
            lore.add(miniMessage.deserialize("<aqua>右クリック: 有効/無効の切替</aqua>"))
            
            meta.lore(lore)
            item.itemMeta = meta

            GuiItem(item) { event ->
                val target = BulletinManager.notices.find { it.id == notice.id } ?: return@GuiItem
                
                if (event.isLeftClick) {
                    openNoticeEditor(player, target)
                } else if (event.isRightClick) {
                    val index = BulletinManager.notices.indexOf(target)
                    if (index != -1) {
                        BulletinManager.notices[index] = target.copy(enabled = !target.enabled)
                        BulletinManager.save()
                        BulletinManager.refreshTimers()
                        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                        Bukkit.getScheduler().runTask(plugin, Runnable { openNoticesMenu(player) })
                    }
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane, player, "notices"))
        gui.show(player)
    }

    fun openSurveysMenu(player: Player) {
        val gui = ChestGui(6, "アンケート一覧")
        gui.setOnTopClick { it.isCancelled = true }
        gui.setOnTopDrag { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val items = BulletinManager.surveys.map { survey ->
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
                val target = BulletinManager.surveys.find { it.id == survey.id } ?: return@GuiItem
                
                if (event.isLeftClick) {
                    openSurveyEditor(player, target)
                } else if (event.isRightClick) {
                    val index = BulletinManager.surveys.indexOf(target)
                    if (index != -1) {
                        BulletinManager.surveys[index] = target.copy(enabled = !target.enabled)
                        BulletinManager.save()
                        BulletinManager.refreshTimers()
                        player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
                        Bukkit.getScheduler().runTask(plugin, Runnable { openSurveysMenu(player) })
                    }
                }
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), createNavigationPane(gui, pane, player, "surveys"))
        gui.show(player)
    }

    private fun openNoticeEditor(player: Player, notice: io.oyasai.oyasaiAdminTools.bulletin.models.Notice) {
        val gui = ChestGui(3, "編集: ${notice.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Message
        pane.addItem(GuiItem(ItemStack(Material.WRITABLE_BOOK).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>メッセージ変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${notice.message}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "告知メッセージ", 
                "定期放送されるメッセージを入力してください。\nMiniMessage形式が使用可能です。\n(例: <green>投票してね！</green>)",
                notice.message
            ) { input ->
                updateNotice(notice.id) { it.copy(message = input) }
                openNoticeEditor(player, BulletinManager.notices.find { it.id == notice.id }!!)
            }
        }, 1, 1)

        // Interval
        pane.addItem(GuiItem(ItemStack(Material.CLOCK).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>間隔変更 (秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${notice.interval}秒</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "間隔 (秒)", 
                "放送する間隔を秒単位の数字で入力してください。\n(例: 1800 -> 30分間隔)",
                notice.interval.toString()
            ) { input ->
                val sec = input.trim().toLongOrNull() ?: return@requestInput
                updateNotice(notice.id) { it.copy(interval = sec) }
                openNoticeEditor(player, BulletinManager.notices.find { it.id == notice.id }!!)
            }
        }, 2, 1)

        // Sound
        pane.addItem(GuiItem(ItemStack(Material.JUKEBOX).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>効果音設定</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${notice.sound ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "効果音ID", 
                "告知時に流す効果音のIDを入力してください。\n内容を空にして署名すると無効になります。\n(例: entity.experience_orb.pickup)",
                notice.sound ?: ""
            ) { input ->
                val cleaned = input.trim()
                updateNotice(notice.id) { it.copy(sound = cleaned.ifBlank { null }) }
                openNoticeEditor(player, BulletinManager.notices.find { it.id == notice.id }!!)
            }
        }, 3, 1)

        // Expiration
        pane.addItem(GuiItem(ItemStack(Material.COMPASS).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>期限設定 (UNIXミリ秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${notice.expiresAt ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "期限 (UNIXミリ秒)", 
                "自動停止する期限をUNIXタイムスタンプ(ミリ秒)で入力してください。\n内容を空にして署名すると無期限になります。\n(現在の時刻: ${System.currentTimeMillis()})",
                notice.expiresAt?.toString() ?: ""
            ) { input ->
                val cleaned = input.trim()
                val time = cleaned.ifBlank { null }?.toLongOrNull()
                updateNotice(notice.id) { it.copy(expiresAt = time) }
                openNoticeEditor(player, BulletinManager.notices.find { it.id == notice.id }!!)
            }
        }, 4, 1)

        // Groups
        pane.addItem(GuiItem(ItemStack(Material.WHITE_BANNER).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>ターゲットグループ設定</yellow>"))
                lore(listOf(
                    miniMessage.deserialize("<gray>現在: ${notice.targetGroups.joinToString(", ").ifEmpty { "全員" }}</gray>"),
                    miniMessage.deserialize("<gray>クリックしてGUIで選択</gray>")
                ))
            }
        }) {
            openTargetGroupsEditor(player, notice.id, "notice")
        }, 5, 1)

        // Delete
        pane.addItem(GuiItem(ItemStack(Material.BARRIER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<red>削除する</red>")) }
        }) {
            BulletinManager.notices.removeIf { it.id == notice.id }
            BulletinManager.save()
            BulletinManager.refreshTimers()
            openNoticesMenu(player)
        }, 7, 1)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
        }) { openNoticesMenu(player) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun openSurveyEditor(player: Player, survey: io.oyasai.oyasaiAdminTools.bulletin.models.Survey) {
        val gui = ChestGui(4, "編集: ${survey.id}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 4)

        // Title
        pane.addItem(GuiItem(ItemStack(Material.NAME_TAG).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>タイトル変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.title}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "タイトル", 
                "アンケートのタイトルを入力してください。\nこのタイトルは本を開いた際や管理画面で表示されます。",
                survey.title
            ) { input ->
                updateSurvey(survey.id) { it.copy(title = input.trim()) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 1, 1)

        // Broadcast Message
        pane.addItem(GuiItem(ItemStack(Material.WRITABLE_BOOK).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>告知メッセージ変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.broadcastMessage}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "告知メッセージ", 
                "アンケートの開始を促す告知メッセージを入力してください。\nMiniMessage形式が使用可能です。",
                survey.broadcastMessage
            ) { input ->
                updateSurvey(survey.id) { it.copy(broadcastMessage = input) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 2, 1)

        // Interval
        pane.addItem(GuiItem(ItemStack(Material.CLOCK).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>間隔変更 (秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.broadcastInterval}秒</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "告知間隔 (秒)", 
                "告知を流す間隔を秒単位の数字で入力してください。\n(例: 3600 -> 1時間間隔)",
                survey.broadcastInterval.toString()
            ) { input ->
                val sec = input.trim().toLongOrNull() ?: return@requestInput
                updateSurvey(survey.id) { it.copy(broadcastInterval = sec) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 3, 1)

        // Max Responses / Rewards
        pane.addItem(GuiItem(ItemStack(Material.GOLD_INGOT).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>回答/報酬上限</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>回答上限: ${survey.maxResponses}</gray>"), miniMessage.deserialize("<gray>報酬上限: ${survey.maxRewards}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "回答上限と報酬上限", 
                "回答できる最大回数と、報酬を貰える最大回数をスペース区切りで入力してください。\n(例: '1 1' -> 回答も報酬も1回まで)\n(例: '5 1' -> 回答は5回できるが報酬は1回のみ)",
                "${survey.maxResponses} ${survey.maxRewards}"
            ) { input ->
                val parts = input.trim().split(Regex("\\s+"))
                val resp = parts.getOrNull(0)?.toIntOrNull() ?: return@requestInput
                val rew = parts.getOrNull(1)?.toIntOrNull() ?: resp
                updateSurvey(survey.id) { it.copy(maxResponses = resp, maxRewards = rew) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 4, 1)

        // Webhook
        pane.addItem(GuiItem(ItemStack(Material.BLUE_STAINED_GLASS_PANE).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<blue>Discord Webhook</blue>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.discordWebhookUrl ?: "未設定"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "Discord Webhook", 
                "結果を通知するDiscordのWebhook URLを入力してください。\n'none' と入力すると解除されます。",
                survey.discordWebhookUrl ?: "none"
            ) { input ->
                val cleaned = input.trim()
                updateSurvey(survey.id) { it.copy(discordWebhookUrl = if (cleaned == "none") null else cleaned) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 5, 1)

        // Reward Commands
        pane.addItem(GuiItem(ItemStack(Material.COMMAND_BLOCK).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>報酬コマンド</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.rewardCommands.joinToString(" | ")}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "報酬コマンド", 
                "アンケート完了時に実行されるコマンドを入力してください。\n1行につき1つのコマンドを入力してください。\n'%player%' はプレイヤー名に置き換わります。\n(例: give %player% diamond 1)",
                survey.rewardCommands.joinToString("\n")
            ) { input ->
                val cmds = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
                updateSurvey(survey.id) { it.copy(rewardCommands = cmds) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 6, 1)

        // Sound
        pane.addItem(GuiItem(ItemStack(Material.JUKEBOX).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>効果音設定</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.sound ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "効果音ID", 
                "告知時に流す効果音のIDを入力してください。\n内容を空にして署名すると無効になります。",
                survey.sound ?: ""
            ) { input ->
                val cleaned = input.trim()
                updateSurvey(survey.id) { it.copy(sound = cleaned.ifBlank { null }) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
        }, 3, 2)

        // Expiration
        pane.addItem(GuiItem(ItemStack(Material.COMPASS).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>期限設定 (UNIXミリ秒)</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${survey.expiresAt ?: "なし"}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "期限 (UNIXミリ秒)", 
                "自動停止する期限をUNIXタイムスタンプ(ミリ秒)で入力してください。\n内容を空にして署名すると無期限になります。\n(現在の時刻: ${System.currentTimeMillis()})",
                survey.expiresAt?.toString() ?: ""
            ) { input ->
                val cleaned = input.trim()
                val time = cleaned.ifBlank { null }?.toLongOrNull()
                updateSurvey(survey.id) { it.copy(expiresAt = time) }
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
            }
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
            openTargetGroupsEditor(player, survey.id, "survey")
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
            BulletinManager.surveys.removeIf { it.id == survey.id }
            BulletinManager.save()
            BulletinManager.refreshTimers()
            openSurveysMenu(player)
        }, 7, 2)

        // Back
        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
        }) { openSurveysMenu(player) }, 8, 3)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun openQuestionsEditor(player: Player, survey: io.oyasai.oyasaiAdminTools.bulletin.models.Survey) {
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
                    val newQs = survey.questions.toMutableList().apply { removeAt(idx) }
                    updateSurvey(survey.id) { it.copy(questions = newQs) }
                    openQuestionsEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
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
            val newQs = survey.questions.toMutableList().apply { add(Question(text = "新しい質問", type = QuestionType.CLICK_TO_ANSWER)) }
            updateSurvey(survey.id) { it.copy(questions = newQs) }
            openQuestionsEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!)
        }, 4, 0)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
        }) { openSurveyEditor(player, survey) }, 8, 0)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.addPane(Slot.fromXY(0, 5), actions)
        gui.show(player)
    }

    private fun openQuestionDetailEditor(player: Player, survey: io.oyasai.oyasaiAdminTools.bulletin.models.Survey, qIdx: Int) {
        val q = survey.questions[qIdx]
        val gui = ChestGui(3, "質問編集: Q${qIdx+1}")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = StaticPane(9, 3)

        // Text
        pane.addItem(GuiItem(ItemStack(Material.NAME_TAG).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>質問文変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${q.text}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "質問文", 
                "質問の本文を入力してください。",
                q.text
            ) { input ->
                updateQuestion(survey.id, qIdx) { it.copy(text = input) }
                openQuestionDetailEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!, qIdx)
            }
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
            openQuestionDetailEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!, qIdx)
        }, 4, 1)

        // Options
        pane.addItem(GuiItem(ItemStack(Material.PAPER).apply {
            itemMeta = itemMeta.apply { 
                displayName(miniMessage.deserialize("<yellow>選択肢変更</yellow>"))
                lore(listOf(miniMessage.deserialize("<gray>現在: ${q.options.joinToString(", ")}</gray>")))
            }
        }) {
            BookInputHandler.requestInput(
                player, 
                "選択肢", 
                "質問の選択肢を入力してください。\n1行につき1つの選択肢を入力してください。",
                q.options.joinToString("\n")
            ) { input ->
                val opts = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
                updateQuestion(survey.id, qIdx) { it.copy(options = opts) }
                openQuestionDetailEditor(player, BulletinManager.surveys.find { it.id == survey.id }!!, qIdx)
            }
        }, 6, 1)

        pane.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("戻る")) }
        }) { openQuestionsEditor(player, survey) }, 8, 2)

        gui.addPane(Slot.fromXY(0, 0), pane)
        gui.show(player)
    }

    private fun openTargetGroupsEditor(player: Player, id: String, type: String) {
        val gui = ChestGui(6, "グループ選択")
        gui.setOnTopClick { it.isCancelled = true }
        val pane = PaginatedPane(9, 5)

        val lpApi = net.luckperms.api.LuckPermsProvider.get()
        val allGroups = lpApi.groupManager.loadedGroups.sortedBy { it.weight.orElse(0) }.reversed()
        
        val currentGroups = if (type == "notice") {
            BulletinManager.notices.find { it.id == id }?.targetGroups ?: emptyList()
        } else {
            BulletinManager.surveys.find { it.id == id }?.targetGroups ?: emptyList()
        }

        val items = allGroups.map { group ->
            val isSelected = currentGroups.contains(group.name)
            val item = ItemStack(if (isSelected) Material.LIME_BANNER else Material.WHITE_BANNER)
            val meta = item.itemMeta
            meta.displayName(miniMessage.deserialize("<yellow>${group.displayName ?: group.name}</yellow>"))
            meta.lore(listOf(
                miniMessage.deserialize("<gray>内部名: ${group.name}</gray>"),
                miniMessage.deserialize("<gray>状態: </gray>${if (isSelected) "<green>選択中" else "<red>未選択"}")
            ))
            item.itemMeta = meta
            
            GuiItem(item) { _ ->
                val newGroups = if (isSelected) {
                    currentGroups.filter { it != group.name }
                } else {
                    currentGroups + group.name
                }
                
                if (type == "notice") {
                    updateNotice(id) { it.copy(targetGroups = newGroups) }
                } else {
                    updateSurvey(id) { it.copy(targetGroups = newGroups) }
                }
                
                openTargetGroupsEditor(player, id, type)
            }
        }

        pane.populateWithGuiItems(items)
        gui.addPane(Slot.fromXY(0, 0), pane)

        val actions = StaticPane(9, 1)
        actions.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("保存して戻る")) }
        }) {
            if (type == "notice") {
                openNoticeEditor(player, BulletinManager.notices.find { it.id == id }!!)
            } else {
                openSurveyEditor(player, BulletinManager.surveys.find { it.id == id }!!)
            }
        }, 8, 0)
        
        gui.addPane(Slot.fromXY(0, 5), actions)
        gui.show(player)
    }

    private fun updateNotice(id: String, action: (io.oyasai.oyasaiAdminTools.bulletin.models.Notice) -> io.oyasai.oyasaiAdminTools.bulletin.models.Notice) {
        val target = BulletinManager.notices.find { it.id == id } ?: return
        val index = BulletinManager.notices.indexOf(target)
        if (index != -1) {
            BulletinManager.notices[index] = action(target)
            BulletinManager.save()
            BulletinManager.refreshTimers()
        }
    }

    private fun updateSurvey(id: String, action: (io.oyasai.oyasaiAdminTools.bulletin.models.Survey) -> io.oyasai.oyasaiAdminTools.bulletin.models.Survey) {
        val target = BulletinManager.surveys.find { it.id == id } ?: return
        val index = BulletinManager.surveys.indexOf(target)
        if (index != -1) {
            BulletinManager.surveys[index] = action(target)
            BulletinManager.save()
            BulletinManager.refreshTimers()
        }
    }

    private fun updateQuestion(surveyId: String, qIdx: Int, action: (io.oyasai.oyasaiAdminTools.bulletin.models.Question) -> io.oyasai.oyasaiAdminTools.bulletin.models.Question) {
        updateSurvey(surveyId) { survey ->
            val newQs = survey.questions.toMutableList()
            if (qIdx in newQs.indices) {
                newQs[qIdx] = action(newQs[qIdx])
            }
            survey.copy(questions = newQs)
        }
    }

    private fun createNavigationPane(gui: ChestGui, pane: PaginatedPane, player: Player, type: String): StaticPane {
        val navigation = StaticPane(9, 1)
        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("前のページ")) }
        }) {
            if (pane.page > 0) { pane.page--; gui.update() }
        }, 0, 0)
        navigation.addItem(GuiItem(ItemStack(Material.ARROW).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("次のページ")) }
        }) {
            if (pane.page < pane.pages - 1) { pane.page++; gui.update() }
        }, 8, 0)
        navigation.addItem(GuiItem(ItemStack(Material.SUNFLOWER).apply {
            itemMeta = itemMeta.apply { displayName(miniMessage.deserialize("<green>リロード</green>")) }
        }) {
            BulletinManager.reload()
            player.sendMessage(miniMessage.deserialize("<green>設定をリロードしました。</green>"))
            player.playSound(player.location, Sound.BLOCK_NOTE_BLOCK_CHIME, 1.0f, 1.2f)
            Bukkit.getScheduler().runTask(plugin, Runnable { if (type == "notices") openNoticesMenu(player) else openSurveysMenu(player) })
        }, 4, 0)
        return navigation
    }
}
