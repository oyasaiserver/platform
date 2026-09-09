package io.oyasai.directstate.command

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextColor
import org.bukkit.command.CommandSender

/** コマンドヘルプ */
internal object CommandHelp {
  private const val HELP_PAGE_COUNT = 3
  private val HELP_LIME: TextColor = TextColor.color(0xBFFF00)

  /** ページ番号を1～3へ収め、本文とページ移動ボタンを送信する。 */
  fun send(sender: CommandSender, argument: String?) {
    val page = argument?.toIntOrNull()?.coerceIn(1, HELP_PAGE_COUNT) ?: 1
    sender.sendMessage(
        Component.text("━━ DirectState $page/$HELP_PAGE_COUNT ━━", NamedTextColor.GOLD)
    )
    when (page) {
      1 -> {
        sender.sendMessage(helpLine("/ds", "基本コマンド"))
        sender.sendMessage(helpLine("/ds help", "このヘルプ"))
        sender.sendMessage(helpLine("/ds toggle", "有効化・無効化"))
        sender.sendMessage(helpLine("/dsh", "素手デバッグ棒"))
      }
      2 -> {
        sender.sendMessage(helpLine("/dsu", "更新抑制モード"))
        sender.sendMessage(helpLine("/dsr", "ブロック置換モード"))
        sender.sendMessage(helpLine("/dsr type", "素材置換モード"))
      }
      3 -> {
        sender.sendMessage(helpLine("/ds stick", "Hand編集棒"))
        sender.sendMessage(helpLine("/ds sstick", "シンプル棒"))
        sender.sendMessage(helpLine("/ds hstick", "ホールド棒"))
      }
    }
    sender.sendMessage(helpNavigation(page))
  }

  /** コマンド名と説明を、ヘルプ共通の色で一行にする。 */
  private fun helpLine(command: String, description: String): Component =
      Component.text(command, NamedTextColor.YELLOW)
          .append(Component.text("  $description", NamedTextColor.GRAY))

  /** 現在ページを強調し、移動できるページだけクリック可能にする。 */
  private fun helpNavigation(page: Int): Component {
    var navigation = helpNavItem("<", if (page > 1) page - 1 else null, "前のページ")
    for (target in 1..HELP_PAGE_COUNT) {
      navigation = navigation.append(Component.text(" "))
      navigation =
          navigation.append(
              if (target == page) {
                Component.text(target.toString(), HELP_LIME)
              } else {
                helpNavItem(target.toString(), target, "${target}ページへ")
              }
          )
    }
    navigation = navigation.append(Component.text(" "))
    return navigation.append(
        helpNavItem(">", if (page < HELP_PAGE_COUNT) page + 1 else null, "次のページ")
    )
  }

  /** targetがある項目だけ、クリックとホバー操作を付ける。 */
  private fun helpNavItem(label: String, target: Int?, description: String): Component {
    val color = if (target == null) NamedTextColor.GRAY else NamedTextColor.AQUA
    var item = Component.text(label, color)
    if (target != null) {
      item =
          item
              .clickEvent(ClickEvent.runCommand("/ds help $target"))
              .hoverEvent(HoverEvent.showText(Component.text(description)))
    }
    return item
  }
}
