package icu.oyasai.citiesskymine.menu

import icu.oyasai.citiesskymine.Main
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.entity.Player

// =============================================================================
// CsmActionEngine
// =============================================================================
// OyasaiMenu の engine/ActionEngine.kt および engine/PopupMenuEngine.kt の
// アクション実行部分をフォーク・統合したもの。
//
// OyasaiMenu との対応:
//   OPEN_MENU       → ActionEngine: ActionType.OPEN_MENU
//   PLAYER_CMD      → ActionEngine: ActionType.RUN_PLAYER_COMMAND
//   CONSOLE_CMD     → ActionEngine: ActionType.RUN_COMMAND
//   OP_PLAYER_CMD   → PopupMenuEngine: PopupActionType.OP_PLAYER_CMD (OyasaiMenu 未実装)
//   MESSAGE         → ActionEngine: ActionType.MESSAGE
//   BROADCAST       → ActionEngine: ActionType.BROADCAST
//   SOUND           → ActionEngine: ActionType.SOUND
//   URL             → PopupMenuEngine: PopupActionType.URL      (OyasaiMenu 未実装)
//   CHAT_PASTE      → PopupMenuEngine: PopupActionType.CHAT_PASTE (OyasaiMenu 未実装)
//   SUGGEST_COMMAND → PopupMenuEngine: PopupActionType.SUGGEST_COMMAND (OyasaiMenu 未実装)
//   OPEN_POPUP      → PopupMenuEngine: PopupActionType.OPEN_POPUP
//   CLOSE           → ActionEngine: ActionType.CLOSE_MENU
//
// [TODO: OyasaiMenu 統合] 将来的には OyasaiMenu の ActionEngine にハンドラを追加し、
// このクラスを削除して OyasaiMenu 側に委譲する形に移行できる。
// =============================================================================
class CsmActionEngine(private val plugin: Main, private val menuEngine: CsmMenuEngine) {

  fun executeActions(player: Player, actions: List<CsmMenuAction>) {
    actions.forEach { executeAction(player, it) }
  }

  private fun executeAction(player: Player, action: CsmMenuAction) {
    when (action.type) {

      // OyasaiMenu: ActionType.OPEN_MENU
      CsmActionType.OPEN_MENU -> {
        val target = action.getString("target")
        if (target.isNotEmpty())
            Bukkit.getScheduler()
                .runTaskLater(plugin, Runnable { menuEngine.openMenu(player, target) }, 1L)
      }

      // OyasaiMenu: ActionType.RUN_PLAYER_COMMAND / PopupActionType.PLAYER_CMD
      CsmActionType.PLAYER_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) player.performCommand(cmd)
      }

      // OyasaiMenu: ActionType.RUN_COMMAND / PopupActionType.CONSOLE_CMD
      CsmActionType.CONSOLE_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd)
      }

      // OyasaiMenu: PopupActionType.OP_PLAYER_CMD (OyasaiMenu 未実装)
      CsmActionType.OP_PLAYER_CMD -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) {
          val wasOp = player.isOp
          try {
            player.isOp = true
            player.performCommand(cmd)
          } finally {
            player.isOp = wasOp
          }
        }
      }

      // OyasaiMenu: ActionType.MESSAGE
      CsmActionType.MESSAGE -> {
        player.sendMessage(comp(applyPlaceholders(player, action.getString("text"))))
      }

      // OyasaiMenu: ActionType.BROADCAST
      CsmActionType.BROADCAST -> {
        Bukkit.broadcast(comp(applyPlaceholders(player, action.getString("text"))))
      }

      // OyasaiMenu: ActionType.SOUND
      CsmActionType.SOUND -> {
        val soundName = action.getString("sound", "ui.button.click").lowercase()
        val volume = action.getString("volume", "1.0").toFloatOrNull() ?: 1.0f
        val pitch = action.getString("pitch", "1.0").toFloatOrNull() ?: 1.0f
        runCatching { player.playSound(player.location, "minecraft:$soundName", volume, pitch) }
            .onFailure { plugin.logger.warning("[CsmMenu] 不明なサウンド: $soundName") }
      }

      // OyasaiMenu: PopupActionType.URL (OyasaiMenu 未実装)
      CsmActionType.URL -> {
        val url = action.getString("url")
        if (url.isNotEmpty()) {
          val msg =
              Component.text(url)
                  .color(NamedTextColor.AQUA)
                  .decoration(TextDecoration.ITALIC, false)
                  .clickEvent(ClickEvent.openUrl(url))
                  .hoverEvent(
                      HoverEvent.showText(
                          Component.text("クリックで開く")
                              .color(NamedTextColor.GRAY)
                              .decoration(TextDecoration.ITALIC, false)))
          player.sendMessage(msg)
        }
      }

      // OyasaiMenu: PopupActionType.CHAT_PASTE (OyasaiMenu 未実装)
      CsmActionType.CHAT_PASTE -> {
        val text = action.getString("text")
        if (text.isNotEmpty()) {
          val msg =
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
                                      .decoration(TextDecoration.ITALIC, false))))
                  .build()
          player.sendMessage(msg)
        }
      }

      // OyasaiMenu: PopupActionType.SUGGEST_COMMAND (OyasaiMenu 未実装)
      CsmActionType.SUGGEST_COMMAND -> {
        val cmd = applyPlaceholders(player, action.getString("command"))
        if (cmd.isNotEmpty()) {
          val msg =
              Component.text()
                  .decoration(TextDecoration.ITALIC, false)
                  .append(Component.text("▶ ").color(NamedTextColor.GREEN))
                  .append(
                      Component.text(cmd)
                          .color(NamedTextColor.YELLOW)
                          .clickEvent(ClickEvent.suggestCommand(cmd))
                          .hoverEvent(
                              HoverEvent.showText(
                                  Component.text("クリックでコマンドをチャット欄に入力")
                                      .color(NamedTextColor.GRAY)
                                      .decoration(TextDecoration.ITALIC, false))))
                  .build()
          player.sendMessage(msg)
        }
      }

      // OyasaiMenu: PopupActionType.OPEN_POPUP
      // [TODO: OyasaiMenu 統合] 統合後は OyasaiMenu の popupMenuEngine.open() を直接呼ぶ
      CsmActionType.OPEN_POPUP -> {
        val target = action.getString("target")
        if (target.isNotEmpty()) {
          plugin.logger.warning("[CsmMenu] OPEN_POPUP は OyasaiMenu との統合後に有効になります (target=$target)")
        }
      }

      // OyasaiMenu: ActionType.CLOSE_MENU / PopupActionType.CLOSE
      CsmActionType.CLOSE -> player.closeInventory()

      CsmActionType.UNKNOWN -> plugin.logger.warning("[CsmMenu] 未知のアクション: player=${player.name}")
    }
  }

  private fun applyPlaceholders(player: Player, text: String): String {
    var result = text.replace("%player%", player.name).replace("%player_name%", player.name)
    if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI"))
        result = me.clip.placeholderapi.PlaceholderAPI.setPlaceholders(player, result)
    return result
  }

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)
}
