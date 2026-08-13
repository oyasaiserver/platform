package io.oyasai.oyasaiAdminTools.bulletin.survey.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Question
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.QuestionType
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SurveyQuestionEditor {

  fun open(player: Player, survey: Survey?) {
    if (survey == null) {
      player.msg("<red>アンケートが見つかりませんでした。</red>")
      return
    }
    val gui = ChestGui(6, "質問管理: ${survey.id}")
    gui.setOnTopClick { it.isCancelled = true }
    val pane = PaginatedPane(9, 5)

    val items =
        survey.questions.mapIndexed { idx, q ->
          val item = ItemStack(Material.PAPER)
          val meta = item.itemMeta
          meta.displayName("<yellow>Q${idx+1}: ${q.text}</yellow>".mm())
          meta.lore(
              listOf(
                  "<gray>タイプ: ${q.type}</gray>".mm(),
                  "<gray>選択肢: ${q.options.joinToString(", ")}</gray>".mm(),
                  net.kyori.adventure.text.Component.empty(),
                  "<red>左クリック: 削除</red>".mm(),
                  "<yellow>右クリック: 編集</yellow>".mm(),
              )
          )
          item.itemMeta = meta
          GuiItem(item) { event ->
            if (event.isLeftClick) {
              BulletinGUIUtils.openConfirmationGUI(
                  player,
                  "質問削除",
                  "Q${idx+1}",
                  {
                    BulletinManagerUtils.updateSurvey(survey.id) { s ->
                      val newQs = s.questions.toMutableList().apply { removeAt(idx) }
                      s.copy(questions = newQs)
                    }
                    open(player, SurveyManager.surveys.find { it.id == survey.id })
                  },
                  { open(player, survey) },
              )
            } else if (event.isRightClick) {
              openDetail(player, survey, idx)
            }
          }
        }
    pane.populateWithGuiItems(items)

    val actions = StaticPane(9, 1)
    actions.addItem(
        GuiItem(
            ItemStack(Material.NETHER_STAR).apply {
              itemMeta = itemMeta.apply { displayName("<green>質問を追加</green>".mm()) }
            }
        ) {
          BulletinManagerUtils.updateSurvey(survey.id) { s ->
            val newQs =
                s.questions.toMutableList().apply {
                  add(Question(text = "新しい質問", type = QuestionType.CLICK_TO_ANSWER))
                }
            s.copy(questions = newQs)
          }
          open(player, SurveyManager.surveys.find { it.id == survey.id })
        },
        4,
        0,
    )
    actions.addItem(
        GuiItem(
            ItemStack(Material.ARROW).apply { itemMeta = itemMeta.apply { displayName("戻る".mm()) } }
        ) {
          SurveyEditor.open(player, survey)
        },
        8,
        0,
    )

    gui.addPane(Slot.fromXY(0, 0), pane)
    gui.addPane(Slot.fromXY(0, 5), actions)
    gui.show(player)
  }

  private fun openDetail(player: Player, survey: Survey?, qIdx: Int) {
    if (survey == null) {
      player.msg("<red>アンケートが見つかりませんでした。</red>")
      return
    }
    val q = survey.questions[qIdx]
    val gui = ChestGui(3, "質問編集: Q${qIdx+1}")
    gui.setOnTopClick { it.isCancelled = true }
    val pane = StaticPane(9, 3)

    // Text
    pane.addItem(
        BulletinGUIUtils.createSettingItem(
            player,
            Material.NAME_TAG,
            "質問文変更",
            q.text,
            "${survey.title} (Q${qIdx+1})",
            "質問文",
            "質問の本文を入力してください。",
            "survey:${survey.id}:question:${qIdx}:text",
        ) { input ->
          updateQuestion(survey.id, qIdx) { it.copy(text = input) }
          openDetail(player, SurveyManager.surveys.find { it.id == survey.id }, qIdx)
        },
        2,
        1,
    )

    // Type
    pane.addItem(
        GuiItem(
            ItemStack(Material.REPEATER).apply {
              itemMeta =
                  itemMeta.apply {
                    displayName("<yellow>タイプ切り替え</yellow>".mm())
                    lore(listOf("<gray>現在: ${q.type}</gray>".mm(), "<gray>クリックで次へ</gray>".mm()))
                  }
            }
        ) {
          val nextType = QuestionType.entries[(q.type.ordinal + 1) % QuestionType.entries.size]
          updateQuestion(survey.id, qIdx) { it.copy(type = nextType) }
          openDetail(player, SurveyManager.surveys.find { it.id == survey.id }, qIdx)
        },
        4,
        1,
    )

    // Options
    pane.addItem(
        BulletinGUIUtils.createSettingItem(
            player,
            Material.PAPER,
            "選択肢変更",
            q.options.joinToString(", "),
            "${survey.title} (Q${qIdx+1})",
            "選択肢",
            "1行につき1つの選択肢を入力してください。",
            "survey:${survey.id}:question:${qIdx}:options",
        ) { input ->
          val opts = input.split("\n").map { it.trim() }.filter { it.isNotEmpty() }
          updateQuestion(survey.id, qIdx) { it.copy(options = opts) }
          openDetail(player, SurveyManager.surveys.find { it.id == survey.id }, qIdx)
        },
        6,
        1,
    )

    pane.addItem(
        GuiItem(
            ItemStack(Material.ARROW).apply { itemMeta = itemMeta.apply { displayName("戻る".mm()) } }
        ) {
          open(player, survey)
        },
        8,
        2,
    )

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
