package icu.oyasai.games.dice

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration

/** サイコロの頭上ホログラム用テキスト成形ヘルパー。 表示文言や装飾、統合版（Bedrock）での絵文字互換ロジックを集約し、保守性を高めます。 */
object DiceDisplayFormatter {

  fun formatSingleDiceJava(mode: DiceMode, eye: Int): Component {
    return when (mode.maxEyes) {
      2 -> formatD2TextJava(eye)
      6 -> formatD6TextJava(eye)
      20 -> formatD20TextJava(eye)
      else -> formatPolyhedralTextJava(mode, eye)
    }
  }

  fun formatSingleDiceBedrock(mode: DiceMode, eye: Int): Component {
    return when (mode.maxEyes) {
      2 -> formatD2TextBedrock(eye)
      6 -> formatD6TextBedrock(eye)
      20 -> formatD20TextBedrock(eye)
      else -> formatPolyhedralTextBedrock(mode, eye)
    }
  }

  fun formatTotalTextJava(sum: Int, formula: String): Component {
    return Component.text("🎲 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("合計: ", NamedTextColor.GRAY))
        .append(Component.text("$sum", NamedTextColor.GREEN, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.GOLD))
        .append(Component.newline())
        .append(Component.text("( $formula )", NamedTextColor.GRAY))
  }

  fun formatTotalTextBedrock(sum: Int, formula: String): Component {
    return Component.text("⚅ ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("合計: ", NamedTextColor.GRAY))
        .append(Component.text("$sum", NamedTextColor.GREEN, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" ⚅", NamedTextColor.GOLD))
        .append(Component.newline())
        .append(Component.text("( $formula )", NamedTextColor.GRAY))
  }

  // --- Java版フォーマット（リソースパックのサイコロ🎲やコイン🪙を復元。Javaで豆腐になる⚀〜⚅は使用しない） ---
  fun formatD6TextJava(eye: Int): Component {
    val color =
        when (eye) {
          1 -> NamedTextColor.RED
          6 -> NamedTextColor.GOLD
          else -> NamedTextColor.YELLOW
        }

    return Component.text("🎲 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$eye", color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.GOLD))
  }

  fun formatD2TextJava(eye: Int): Component {
    val isHead = eye == 1
    val label = if (isHead) "表 (1)" else "裏 (2)"
    val color = if (isHead) NamedTextColor.GOLD else NamedTextColor.WHITE

    return Component.text("🪙 ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("コイン: ", NamedTextColor.GRAY))
        .append(Component.text(label, color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🪙", NamedTextColor.GOLD))
  }

  fun formatD20TextJava(eye: Int): Component {
    return when (eye) {
      20 -> {
        Component.text("⭐ ", NamedTextColor.GOLD)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 20 (Critical!)", NamedTextColor.GOLD, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ⭐", NamedTextColor.GOLD))
      }
      1 -> {
        Component.text("💀 ", NamedTextColor.RED)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 1 (Fumble)", NamedTextColor.DARK_RED, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" 💀", NamedTextColor.RED))
      }
      else -> {
        Component.text("🎲 ", NamedTextColor.AQUA)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: ", NamedTextColor.GRAY))
            .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" 🎲", NamedTextColor.AQUA))
      }
    }
  }

  fun formatPolyhedralTextJava(mode: DiceMode, eye: Int): Component {
    val tag = "D${mode.maxEyes}"
    return Component.text("🎲 ", NamedTextColor.AQUA)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$tag: ", NamedTextColor.GRAY))
        .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" 🎲", NamedTextColor.AQUA))
  }

  // --- 統合版（Bedrock）フォーマット（🎲などの豆腐化絵文字を避け、Bedrock標準で描画可能な⚀〜⚅等を使用） ---
  fun formatD6TextBedrock(eye: Int): Component {
    val (symbol, color) =
        when (eye) {
          1 -> "⚀" to NamedTextColor.RED
          2 -> "⚁" to NamedTextColor.YELLOW
          3 -> "⚂" to NamedTextColor.YELLOW
          4 -> "⚃" to NamedTextColor.YELLOW
          5 -> "⚄" to NamedTextColor.YELLOW
          6 -> "⚅" to NamedTextColor.GOLD
          else -> "⚀" to NamedTextColor.WHITE
        }

    return Component.text("$symbol ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$eye", color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" $symbol", NamedTextColor.GOLD))
  }

  fun formatD2TextBedrock(eye: Int): Component {
    val isHead = eye == 1
    val label = if (isHead) "表 (1)" else "裏 (2)"
    val color = if (isHead) NamedTextColor.GOLD else NamedTextColor.WHITE

    return Component.text("◆ ", NamedTextColor.GOLD)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("コイン: ", NamedTextColor.GRAY))
        .append(Component.text(label, color, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" ◆", NamedTextColor.GOLD))
  }

  fun formatD20TextBedrock(eye: Int): Component {
    return when (eye) {
      20 -> {
        Component.text("★ ", NamedTextColor.GOLD)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 20 (Critical!)", NamedTextColor.GOLD, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ★", NamedTextColor.GOLD))
      }
      1 -> {
        Component.text("✖ ", NamedTextColor.RED)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: 1 (Fumble)", NamedTextColor.DARK_RED, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ✖", NamedTextColor.RED))
      }
      else -> {
        Component.text("⚅ ", NamedTextColor.AQUA)
            .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text("D20: ", NamedTextColor.GRAY))
            .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
            .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
            .append(Component.text(" ⚅", NamedTextColor.AQUA))
      }
    }
  }

  fun formatPolyhedralTextBedrock(mode: DiceMode, eye: Int): Component {
    val tag = "D${mode.maxEyes}"
    return Component.text("⚅ ", NamedTextColor.AQUA)
        .append(Component.text("[ ", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text("$tag: ", NamedTextColor.GRAY))
        .append(Component.text("$eye", NamedTextColor.YELLOW, TextDecoration.BOLD))
        .append(Component.text(" ]", NamedTextColor.WHITE, TextDecoration.BOLD))
        .append(Component.text(" ⚅", NamedTextColor.AQUA))
  }
}
