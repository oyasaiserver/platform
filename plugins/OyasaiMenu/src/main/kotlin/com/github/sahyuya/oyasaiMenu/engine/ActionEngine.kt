package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.model.ActionType
import com.github.sahyuya.oyasaiMenu.model.MenuAction
import com.github.sahyuya.oyasaiMenu.model.PlayerMenuState
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.entity.Player

/**
 * ActionEngine
 *
 * 設計書 "2. Action Engine" の実装。
 * アクションリストを受け取り、プレイヤーに対して順番に実行する。
 *
 * check_permission のような条件分岐アクションは、
 * 結果に応じて success/fail リストを再帰的に実行する。
 */
class ActionEngine(private val plugin: OyasaiMenu) {

    // ============================
    // メイン実行エントリポイント
    // ============================

    /**
     * アクションリストを順番に実行する。
     * このメソッドは必ずメインスレッドから呼ぶこと。
     */
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
                    plugin.logger.warning("open_menu にターゲットが未指定。"); return
                }
                Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                    // popup/ プレフィックスがある場合や PopupMenuLoader に登録済みなら popupMenuEngine へ委譲
                    val popupId = target.removePrefix("popup/")
                    if (plugin.popupMenuLoader.getPopup(popupId) != null) {
                        plugin.popupMenuEngine.open(player, popupId)
                    } else {
                        plugin.menuEngine.openMenu(player, target)
                    }
                }, 1L)
            }

            ActionType.RUN_COMMAND -> {
                val cmd = applyPlaceholders(player, action.getString("command"))
                if (cmd.isNotEmpty()) Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd)
            }

            ActionType.RUN_PLAYER_COMMAND -> {
                val cmd = applyPlaceholders(player, action.getString("command"))
                if (cmd.isNotEmpty()) player.performCommand(cmd)
            }

            ActionType.MESSAGE -> {
                val text = applyPlaceholders(player, action.getString("text"))
                player.sendMessage(c(text))
            }

            ActionType.CLOSE_MENU -> player.closeInventory()

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
                val pitch  = action.getString("pitch",  "1.0").toFloatOrNull() ?: 1.0f
                runCatching {
                    player.playSound(player.location, "minecraft:$soundName", volume, pitch)
                }.onFailure { plugin.logger.warning("不明なサウンド: $soundName") }
            }

            ActionType.BROADCAST -> {
                Bukkit.broadcast(comp(applyPlaceholders(player, action.getString("text"))))
            }

            ActionType.PLACEHOLDER_TEXT -> {
                val text = applyPlaceholders(player, action.getString("text"))
                player.sendMessage(c(text))
            }

            ActionType.OPEN_SHOP -> {
                val category = action.getString("category", "")
                Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                    if (category.isEmpty()) {
                        // カテゴリ未指定 → ショップ一覧メニューを開く
                        plugin.popupMenuEngine.open(player, "shopindex")
                    } else {
                        // カテゴリ指定 → ShopEngine 経由でショップGUIを直接開く
                        // ※ menuEngine.openMenu("shop/blocks") ではなく shopEngine.openShop() を呼ぶ。
                        //   menus/shop/blocks.yml という静的ファイルは存在しないため。
                        plugin.shopEngine.openShop(player, category)
                    }
                }, 1L)
            }

            ActionType.OPEN_POINT_SHOP -> {
                val category = action.getString("category", "")
                Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                    val catId = if (category.isEmpty())
                        plugin.pointShopLoader.getAllCategories().keys.firstOrNull() ?: return@Runnable
                    else category
                    plugin.pointShopEngine.openShop(player, catId)
                }, 1L)
            }

            ActionType.OPEN_UTILITY -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.popupMenuEngine.open(player, "utility") }, 1L)

            ActionType.OPEN_MACRO -> {
                Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                    plugin.macroEngine.openMacroList(player)
                }, 1L)
            }

            ActionType.OPEN_INFO -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.menuEngine.openMenu(player, "root") }, 1L)

            ActionType.OPEN_CHANNEL -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.popupMenuEngine.open(player, "channel") }, 1L)

            ActionType.OPEN_SOCIALLIKES -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.popupMenuEngine.open(player, "sociallikes") }, 1L)

            ActionType.OPEN_CARBUILDER -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.popupMenuEngine.open(player, "carbuilder") }, 1L)

            ActionType.OPEN_LINKS -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.popupMenuEngine.open(player, "links") }, 1L)

            ActionType.OPEN_SELL -> Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                plugin.sellEngine.openSellMenu(player) }, 1L)

            ActionType.UNKNOWN ->
                plugin.logger.warning("未知のアクション: player=${player.name}")
        }
    }

    // ============================
    // 権限チェック (LuckPerms 優先)
    // ============================

    /**
     * LuckPerms が有効なら LuckPerms API 経由で確認し、
     * 無ければ Bukkit 標準の hasPermission() で代替する。
     * LuckPerms は softdepend なので try-catch で安全に呼び出す。
     */
    private fun checkPermission(player: Player, permission: String): Boolean {
        if (permission.isEmpty()) return true
        return runCatching {
            val lp = LuckPermsProvider.get()
            val user = lp.userManager.getUser(player.uniqueId) ?: return player.hasPermission(permission)
            user.cachedData.permissionData.checkPermission(permission).asBoolean()
        }.getOrElse { player.hasPermission(permission) }
    }

    // ============================
    // ユーティリティ
    // ============================

    private fun applyPlaceholders(player: Player, text: String): String =
        plugin.menuEngine.applyPlaceholders(player, text)
}
