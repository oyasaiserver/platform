package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.ActionType
import com.github.sahyuya.oyasaiMenu.model.MenuAction
import com.github.sahyuya.oyasaiMenu.model.PlayerMenuState
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.PlayerAccess
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.entity.Player

/**
 * ActionEngine
 *
 * 設計書 "2. Action Engine" の実装。 アクションリストを受け取り、プレイヤーに対して順番に実行する。
 *
 * check_permission のような条件分岐アクションは、 結果に応じて success/fail リストを再帰的に実行する。
 */
class ActionEngine(private val plugin: OyasaiMenu) {

  // ============================
  // メイン実行エントリポイント
  // ============================

  /** アクションリストを順番に実行する。 このメソッドは必ずメインスレッドから呼ぶこと。 */
  fun executeActions(player: Player, actions: List<MenuAction>, state: PlayerMenuState? = null) {
    actions.forEach { executeAction(player, it, state) }
  }

  // ============================
  // アクション別実行ロジック
  // ============================

  private fun executeAction(player: Player, action: MenuAction, state: PlayerMenuState?) {
    when (action.type) {
      ActionType.OPEN_MENU -> {
        val target = action.getString("target")
        if (target.isEmpty()) {
          plugin.logger.warning("open_menu にターゲットが未指定。")
          return
        }
        runDelayed {
          // popup/ プレフィックスがある場合や PopupMenuLoader に登録済みなら popupMenuEngine へ委譲
          val popupId = target.removePrefix("popup/")
          if (plugin.popupMenuLoader.getPopup(popupId) != null) {
            plugin.popupMenuEngine.open(player, popupId)
          } else {
            plugin.menuEngine.openMenu(player, target)
          }
        }
      }

      ActionType.OPEN_POPUP -> {
        val target = action.getString("target")
        if (target.isEmpty()) {
          plugin.logger.warning("open_popup にターゲットが未指定。")
          return
        }
        runDelayed { plugin.popupMenuEngine.open(player, target) }
      }

      ActionType.OPEN_SPECIAL -> {
        val target = action.getString("target")
        if (target.isEmpty()) {
          plugin.logger.warning("open_special にターゲットが未指定。")
          return
        }
        runDelayed { plugin.specialMenuEngine.open(player, target, action) }
      }

      ActionType.PARAM_COMMAND -> {
        runDelayed { plugin.parameterCommandEngine.open(player, action) }
      }

      ActionType.RUN_COMMAND,
      ActionType.CONSOLE_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd)
      }

      ActionType.RUN_PLAYER_COMMAND,
      ActionType.PLAYER_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) player.performCommand(cmd.removePrefix("/"))
      }

      ActionType.OP_PLAYER_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) {
          val wasOp = player.isOp
          try {
            player.isOp = true
            player.performCommand(cmd.removePrefix("/"))
          } finally {
            player.isOp = wasOp
          }
        }
      }

      ActionType.MESSAGE -> {
        val text = applyPlaceholders(player, action.getString("text"))
        player.sendMessage(c(text))
      }

      ActionType.CLOSE_MENU,
      ActionType.CLOSE -> player.closeInventory()

      ActionType.CHECK_PERMISSION -> {
        // 成功なら success リスト、失敗なら fail リストを再帰実行
        val hasPerm = checkPermission(player, action.getString("permission"))
        executeActions(player, if (hasPerm) action.success else action.fail, state)
      }

      ActionType.MACRO_EXECUTE -> {
        // MacroManager 経由でクールダウンチェックとコマンド実行を委譲
        val macroId = action.getString("id")
        val error = plugin.macroManager.executeMacro(player, macroId)
        if (error != null) player.sendMessage(c("&c$error"))
      }

      ActionType.SOUND -> {
        val soundName = action.getString("sound", "UI_BUTTON_CLICK").lowercase()
        val volume = action.getString("volume", "1.0").toFloatOrNull() ?: 1.0f
        val pitch = action.getString("pitch", "1.0").toFloatOrNull() ?: 1.0f
        runCatching { player.playSound(player.location, "minecraft:$soundName", volume, pitch) }
            .onFailure { plugin.logger.warning("不明なサウンド: $soundName") }
      }

      ActionType.BROADCAST -> {
        Bukkit.broadcast(comp(applyPlaceholders(player, action.getString("text"))))
      }

      ActionType.URL -> {
        val url = applyPlaceholders(player, action.getString("url"))
        if (url.isNotEmpty()) {
          player.sendMessage(
              Component.text(url)
                  .color(NamedTextColor.AQUA)
                  .decoration(TextDecoration.ITALIC, false)
                  .clickEvent(ClickEvent.openUrl(url))
                  .hoverEvent(
                      HoverEvent.showText(
                          Component.text("クリックで開く")
                              .color(NamedTextColor.GRAY)
                              .decoration(TextDecoration.ITALIC, false)
                      )
                  )
          )
        }
      }

      ActionType.CHAT_PASTE -> {
        val text = applyPlaceholders(player, action.getString("text"))
        if (text.isNotEmpty()) {
          player.sendMessage(
              Component.text()
                  .decoration(TextDecoration.ITALIC, false)
                  .append(Component.text("クリックでコピー: ").color(NamedTextColor.GRAY))
                  .append(
                      Component.text(text)
                          .color(NamedTextColor.WHITE)
                          .clickEvent(ClickEvent.copyToClipboard(text))
                          .hoverEvent(
                              HoverEvent.showText(
                                  Component.text("クリックでクリップボードにコピー")
                                      .color(NamedTextColor.GRAY)
                                      .decoration(TextDecoration.ITALIC, false)
                              )
                          )
                  )
                  .build()
          )
        }
      }

      ActionType.SUGGEST_COMMAND -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) {
          val normalized = cmd.removePrefix("/")
          player.sendMessage(
              Component.text()
                  .decoration(TextDecoration.ITALIC, false)
                  .append(Component.text("▶ ").color(NamedTextColor.GREEN))
                  .append(
                      Component.text(normalized)
                          .color(NamedTextColor.YELLOW)
                          .clickEvent(ClickEvent.suggestCommand(normalized))
                          .hoverEvent(
                              HoverEvent.showText(
                                  Component.text("クリックでコマンドをチャット欄に入力")
                                      .color(NamedTextColor.GRAY)
                                      .decoration(TextDecoration.ITALIC, false)
                              )
                          )
                  )
                  .build()
          )
        }
      }

      ActionType.PLACEHOLDER_TEXT -> {
        val text = applyPlaceholders(player, action.getString("text"))
        player.sendMessage(c(text))
      }

      ActionType.OPEN_SHOP -> {
        val category = action.getString("category", "")
        runDelayed {
          if (category.isEmpty()) {
            // カテゴリ未指定 → ショップ一覧メニューを開く
            plugin.popupMenuEngine.open(player, "shopindex")
          } else {
            // カテゴリ指定 → ShopEngine 経由でショップGUIを直接開く
            // ※ menuEngine.openMenu("shop/blocks") ではなく shopEngine.openShop() を呼ぶ。
            //   menus/shop/blocks.yml という静的ファイルは存在しないため。
            plugin.shopEngine.openShop(player, category)
          }
        }
      }

      ActionType.OPEN_POINT_SHOP -> {
        val category = action.getString("category", "")
        runDelayed {
          val catId =
              if (category.isEmpty())
                  plugin.pointShopLoader.getAllCategories().keys.firstOrNull() ?: return@runDelayed
              else category
          plugin.pointShopEngine.openShop(player, catId)
        }
      }

      ActionType.OPEN_UTILITY,
      ActionType.OPEN_CHANNEL,
      ActionType.OPEN_SOCIALLIKES,
      ActionType.OPEN_CARBUILDER,
      ActionType.OPEN_LINKS -> {
        val popupId = LEGACY_POPUP_IDS[action.type] ?: return
        runDelayed { plugin.popupMenuEngine.open(player, popupId) }
      }

      ActionType.OPEN_MACRO -> runDelayed { plugin.macroEngine.openMacroList(player) }

      ActionType.OPEN_INFO -> runDelayed { plugin.menuEngine.openMenu(player, "root") }

      ActionType.OPEN_SELL -> runDelayed { plugin.sellEngine.openSellMenu(player) }

      ActionType.UNKNOWN -> plugin.logger.warning("未知のアクション: player=${player.name}")
    }
  }

  // ============================
  // 権限チェック (LuckPerms 優先)
  // ============================

  /**
   * LuckPerms が有効なら LuckPerms API 経由で確認し、 無ければ Bukkit 標準の hasPermission() で代替する。 LuckPerms は
   * softdepend なので try-catch で安全に呼び出す。
   */
  private fun checkPermission(player: Player, permission: String): Boolean {
    return PlayerAccess.hasRequirement(player, permission)
  }

  // ============================
  // ユーティリティ
  // ============================

  private fun applyPlaceholders(player: Player, text: String): String =
      plugin.menuEngine.applyPlaceholders(player, text)

  private inline fun runDelayed(crossinline action: () -> Unit) {
    Bukkit.getScheduler().runTaskLater(plugin, Runnable { action() }, 1L)
  }

  companion object {
    private val LEGACY_POPUP_IDS =
        mapOf(
            ActionType.OPEN_UTILITY to "utility",
            ActionType.OPEN_CHANNEL to "channel",
            ActionType.OPEN_SOCIALLIKES to "sociallikes",
            ActionType.OPEN_CARBUILDER to "carbuilder",
            ActionType.OPEN_LINKS to "links",
        )
  }
}
