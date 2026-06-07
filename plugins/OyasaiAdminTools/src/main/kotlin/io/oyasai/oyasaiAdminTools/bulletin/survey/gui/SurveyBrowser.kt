package io.oyasai.oyasaiAdminTools.bulletin.survey.gui

import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import io.oyasai.oyasaiAdminTools.OyasaiAdminTools.Companion.plugin
import io.oyasai.oyasaiAdminTools.bulletin.survey.SurveyManager
import io.oyasai.oyasaiAdminTools.bulletin.survey.models.Survey
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinGUIUtils
import io.oyasai.oyasaiAdminTools.bulletin.utils.BulletinManagerUtils
import io.oyasai.oyasaiAdminTools.utils.BookInputHandler
import io.oyasai.oyasaiAdminTools.utils.MMUtils.mm
import io.oyasai.oyasaiAdminTools.utils.MMUtils.msg
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SurveyBrowser {

  fun open(player: Player) {
    val gui = ChestGui(6, "アンケート一覧")
    gui.setOnTopClick { it.isCancelled = true }
    gui.setOnTopDrag { it.isCancelled = true }
    val pane = PaginatedPane(9, 5)

    val items =
        SurveyManager.surveys.map { survey ->
          val item = ItemStack(if (survey.enabled) Material.BOOK else Material.ENCHANTED_BOOK)
          val meta = item.itemMeta
          meta.displayName("<yellow>ID: ${survey.id}</yellow>".mm())
          val firstMsg = survey.broadcastMessages.firstOrNull() ?: "<gray>なし</gray>"
          val lore =
              mutableListOf(
                  "<gray>タイトル: ${survey.title}</gray>".mm(),
                  "<gray>放送内容: </gray><white>$firstMsg</white>".mm(),
                  "<gray>状態: </gray>${if (survey.enabled) "<green>有効" else "<red>無効"}".mm(),
              )
          lore.add("<gray>回答者数: </gray><yellow>${survey.respondedPlayers.size}名</yellow>".mm())
          survey.expiresAt?.let {
            lore.add(
                "<gray>期限: </gray><aqua>${BulletinGUIUtils.dateFormat.format(Date(it))}</aqua>".mm()
            )
          }

          lore.add(net.kyori.adventure.text.Component.empty())
          lore.add("<yellow>左クリック: 詳細編集</yellow>".mm())
          lore.add("<aqua>右クリック: 有効/無効の切替</aqua>".mm())

          meta.lore(lore)
          item.itemMeta = meta

          GuiItem(item) { event ->
            val target = SurveyManager.surveys.find { it.id == survey.id } ?: return@GuiItem

            if (event.isLeftClick) {
              SurveyEditor.open(player, target)
            } else if (event.isRightClick) {
              BulletinManagerUtils.updateSurvey(target.id) { it.copy(enabled = !it.enabled) }
              player.playSound(player.location, Sound.UI_BUTTON_CLICK, 1.0f, 1.0f)
              Bukkit.getScheduler().runTask(plugin, Runnable { open(player) })
            }
          }
        }

    pane.populateWithGuiItems(items)
    gui.addPane(Slot.fromXY(0, 0), pane)

    val navigation =
        BulletinGUIUtils.createNavigationPane(
            gui,
            pane,
            player,
            { SurveyManager.reload() },
            { open(player) },
        )

    navigation.addItem(
        GuiItem(
            ItemStack(Material.NETHER_STAR).apply {
              itemMeta = itemMeta.apply { displayName("<green>新規アンケート作成</green>".mm()) }
            }
        ) {
          BookInputHandler.requestInput(
              player,
              "survey:create:id",
              "新規アンケートID",
              "作成するアンケートのIDを入力してください。\n(例: player_survey_2024)",
              "",
          ) { input ->
            val id = input.trim()
            if (id.isEmpty()) return@requestInput
            if (SurveyManager.surveys.any { it.id == id }) {
              player.msg("<red>そのIDは既に存在します。</red>")
              return@requestInput
            }
            val newSurvey = Survey(id = id, title = "新しいアンケート")
            SurveyManager.surveys.add(newSurvey)
            SurveyManager.save()
            SurveyManager.refreshTimers()
            player.msg("<green>アンケート '$id' を作成しました。</green>")
            SurveyEditor.open(player, newSurvey)
          }
        },
        1,
        0,
    )

    gui.addPane(Slot.fromXY(0, 5), navigation)
    gui.show(player)
  }
}
