package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.Tools
import io.papermc.paper.dialog.Dialog
import io.papermc.paper.registry.data.dialog.ActionButton
import io.papermc.paper.registry.data.dialog.DialogBase
import io.papermc.paper.registry.data.dialog.action.DialogAction
import io.papermc.paper.registry.data.dialog.body.DialogBody
import io.papermc.paper.registry.data.dialog.type.DialogType
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextColor
import org.bukkit.entity.Player

/**
 * TEMPORARY measurement harness for the Paper Dialog API text layout spec.
 *
 * 2026-08-06 に `Knowledge/minecraft-dialog-spec.md` を実測で作るために追加した計測専用コード。 製品機能ではない。`/sldata spec
 * ...` からのみ到達し、SLData 本体のロジックには一切影響しない。 仕様シートを再測定する必要が無くなったらこのファイルごと削除してよい。
 */
@Suppress("UnstableApiUsage")
object SLDataSpec {
  /** 計測対象テキストの色。スクリーンショット解析でこの色だけを拾う。 */
  private const val PROBE_RGB = 0x00FF88
  /** 目印（定規の両端など）の色。 */
  private const val MARK_RGB = 0xFF0066
  private val PROBE_COLOR = TextColor.color(PROBE_RGB)
  private val MARK_COLOR = TextColor.color(MARK_RGB)
  private val UNIFORM = Key.key("minecraft", "uniform")
  private val DEFAULT_FONT = Key.key("minecraft", "default")
  private val specKey = Key.key("sociallikes3", "sldata_spec_noop")

  private const val USAGE =
      "spec text <w|none> <class> <count> [font] / nowidth <class> <count> [font] / " +
          "rule <w|none> <class> <count> [font] / gap <w|none> <class> <count> [font] / " +
          "rows <w|none> <count> [buttons] / btn <buttons> <cols> <btnwidth> [labelclass] [labelcount] / " +
          "tip <class> <count> [btnwidth] / glyphs <w|none> <hexStart> <perRow> <rows> [font] / " +
          "cp <w|none> <hexCp> <count> [font] / raw <w|none> <text...>"

  fun handle(player: Player, args: List<String>): Boolean {
    val mode = args.firstOrNull()?.lowercase()
    try {
      when (mode) {
        "text" -> {
          val w = args[1]
          val cls = args[2]
          val n = args[3].toInt()
          val font = args.getOrNull(4)
          show(player, w, listOf(body(w, probe(buildString(cls, n), font))), "text $w $cls $n")
        }
        "nowidth" -> {
          val cls = args[1]
          val n = args[2].toInt()
          val font = args.getOrNull(3)
          show(
              player,
              "none",
              listOf(DialogBody.plainMessage(probe(buildString(cls, n), font))),
              "nowidth $cls $n",
          )
        }
        "rule" -> {
          // 定規: 両端に | を置き、中身は class の文字を count 個。
          val w = args[1]
          val cls = args[2]
          val n = args[3].toInt()
          val font = args.getOrNull(4)
          val c =
              Component.text()
                  .append(mark("|", font))
                  .append(probe(buildString(cls, n), font))
                  .append(mark("|", font))
                  .build()
          show(player, w, listOf(body(w, c)), "rule $w $cls $n")
        }
        "gap" -> {
          // 空白系の送り幅測定用。| + 空白n個 + | を、n=0 の基準行と一緒に出す。
          val w = args[1]
          val cls = args[2]
          val n = args[3].toInt()
          val font = args.getOrNull(4)
          val zero = Component.text().append(mark("|", font)).append(mark("|", font)).build()
          val probeLine =
              Component.text()
                  .append(mark("|", font))
                  .append(probe(buildString(cls, n), font))
                  .append(mark("|", font))
                  .build()
          show(player, w, listOf(body(w, zero), body(w, probeLine)), "gap $w $cls $n")
        }
        "rows" -> {
          val w = args[1]
          val n = args[2].toInt()
          val buttons = args.getOrNull(3)?.toInt() ?: 1
          val bodies = (1..n).map { i -> body(w, probe("L%03d".format(i), null)) }
          showWithButtons(player, w, bodies, buttons, 2, 130, "rows $w $n btn=$buttons")
        }
        "btn" -> {
          val count = args[1].toInt()
          val cols = args[2].toInt()
          val bw = args[3].toInt()
          val labelClass = args.getOrNull(4) ?: "digit"
          val labelCount = args.getOrNull(5)?.toInt() ?: 4
          val bodies = listOf(body("none", probe("BTN count=$count cols=$cols w=$bw", null)))
          showWithButtons(
              player,
              "none",
              bodies,
              count,
              cols,
              bw,
              "btn $count/$cols/$bw",
              labelClass,
              labelCount,
          )
        }
        "tip" -> {
          val cls = args[1]
          val n = args[2].toInt()
          val bw = args.getOrNull(3)?.toInt() ?: 130
          val count = args.getOrNull(4)?.toInt() ?: 24
          val cols = args.getOrNull(5)?.toInt() ?: 4
          val tooltip = probe(buildString(cls, n), null)
          val buttons =
              (1..count).map {
                ActionButton.builder(Component.text("H$it"))
                    .tooltip(tooltip)
                    .width(bw)
                    .action(DialogAction.customClick(specKey, null))
                    .build()
              }
          val dialog =
              Dialog.create { b ->
                b.empty()
                    .base(
                        DialogBase.builder(Component.text("spec tip $cls $n"))
                            .canCloseWithEscape(true)
                            .body(listOf(body("none", probe("tooltip chars=$n", null))))
                            .build()
                    )
                    .type(DialogType.multiAction(buttons).columns(cols).build())
              }
          player.showDialog(dialog)
          player.sendMessage(Tools.socialLikesLOGO + " spec tip $cls $n w=$bw")
        }
        "glyphs" -> {
          val w = args[1]
          val start = args[2].removePrefix("U+").removePrefix("0x").toInt(16)
          val perRow = args[3].toInt()
          val rows = args[4].toInt()
          val font = args.getOrNull(5)
          val bodies =
              (0 until rows).map { r ->
                val sb = StringBuilder()
                for (c in 0 until perRow) {
                  sb.appendCodePoint(start + r * perRow + c)
                }
                body(w, probe(sb.toString(), font))
              }
          show(player, w, bodies, "glyphs U+%04X x${perRow}x$rows".format(start))
        }
        "cp" -> {
          val w = args[1]
          val cp = args[2].removePrefix("U+").removePrefix("0x").toInt(16)
          val n = args[3].toInt()
          val font = args.getOrNull(4)
          val sb = StringBuilder()
          repeat(n) { sb.appendCodePoint(cp) }
          val c =
              Component.text()
                  .append(mark("|", font))
                  .append(probe(sb.toString(), font))
                  .append(mark("|", font))
                  .build()
          show(player, w, listOf(body(w, c)), "cp U+%04X x$n".format(cp))
        }
        "raw" -> {
          val w = args[1]
          val text = args.drop(2).joinToString(" ")
          show(player, w, listOf(body(w, probe(text, null))), "raw $w")
        }
        else -> {
          player.sendMessage(Tools.socialLikesLOGO + " /sldata $USAGE")
          return true
        }
      }
    } catch (e: Exception) {
      player.sendMessage(
          Tools.socialLikesLOGO + " spec error: ${e::class.simpleName}: ${e.message}"
      )
      Tools.plugin.logger.warning(
          "[SLDataSpec] ${args.joinToString(" ")} -> ${e.stackTraceToString()}"
      )
      return true
    }
    return true
  }

  private fun fontKey(name: String?): Key? =
      when (name?.lowercase()) {
        null,
        "uniform",
        "u" -> UNIFORM
        "default",
        "d" -> DEFAULT_FONT
        "none",
        "-" -> null
        else -> Key.key(name)
      }

  private fun probe(text: String, font: String?): Component {
    var c = Component.text(text, PROBE_COLOR)
    fontKey(font)?.let { c = c.font(it) }
    return c
  }

  private fun mark(text: String, font: String?): Component {
    var c = Component.text(text, MARK_COLOR)
    fontKey(font)?.let { c = c.font(it) }
    return c
  }

  private fun body(width: String, contents: Component): DialogBody =
      if (width.equals("none", ignoreCase = true)) DialogBody.plainMessage(contents)
      else DialogBody.plainMessage(contents, width.toInt())

  private fun show(player: Player, width: String, bodies: List<DialogBody>, note: String) {
    showWithButtons(player, width, bodies, 1, 1, 130, note)
  }

  private fun showWithButtons(
      player: Player,
      width: String,
      bodies: List<DialogBody>,
      buttonCount: Int,
      columns: Int,
      buttonWidth: Int,
      note: String,
      labelClass: String = "digit",
      labelCount: Int = 4,
  ) {
    val buttons =
        (1..buttonCount).map { i ->
          val label = if (buttonCount == 1) "OK" else buildString(labelClass, labelCount)
          ActionButton.builder(probe(label, null))
              .tooltip(Component.text("b$i"))
              .width(buttonWidth)
              .action(DialogAction.customClick(specKey, null))
              .build()
        }
    val dialog =
        Dialog.create { b ->
          b.empty()
              .base(
                  DialogBase.builder(Component.text("spec", NamedTextColor.DARK_GRAY))
                      .canCloseWithEscape(true)
                      .afterAction(DialogBase.DialogAfterAction.CLOSE)
                      .body(bodies)
                      .build()
              )
              .type(DialogType.multiAction(buttons).columns(columns).build())
        }
    player.showDialog(dialog)
    player.sendMessage(Tools.socialLikesLOGO + " spec $note bodies=${bodies.size}")
    Tools.plugin.logger.info("[SLDataSpec] shown: $note bodies=${bodies.size} buttons=$buttonCount")
  }

  /** class に応じたテスト文字列を count 文字ぶん生成する。 */
  private fun buildString(cls: String, count: Int): String {
    if (count <= 0) return ""
    val sb = StringBuilder()
    for (i in 0 until count) sb.append(glyph(cls, i))
    return sb.toString()
  }

  private fun glyph(cls: String, i: Int): String =
      when (cls.lowercase()) {
        "half" -> "#"
        "halfw" -> "W"
        "full" -> "＃"
        "digit" -> if (i % 10 == 0) "${(i / 10) % 10}" else "."
        "digitplain" -> "${i % 10}"
        "fulldigit" -> "${'０' + (i % 10)}"
        "kana" -> "あいうえおかきくけこ"[i % 10].toString()
        "kanji" -> "一二三四五六七八九十"[i % 10].toString()
        "space" -> " "
        "nbsp" -> " "
        "fullspace" -> "　"
        "zwnj" -> "‌"
        "block" -> "█"
        "fullblock" -> "⬛"
        "words" -> if (i % 5 == 4) " " else "a"
        "wordsfull" -> if (i % 5 == 4) " " else "あ"
        // 折り返し候補になる区切り文字の検証用
        "wordsfs" -> if (i % 5 == 4) "　" else "あ" // U+3000 区切り
        "wordsnb" -> if (i % 5 == 4) "\u00A0" else "a" // U+00A0 区切り
        "wordszw" -> if (i % 5 == 4) "‌" else "a" // U+200C 区切り
        "wordshy" -> if (i % 5 == 4) "-" else "a" // ハイフン区切り
        "wordstab" -> if (i % 5 == 4) "\t" else "a"
        "nl" -> if (i % 5 == 4) "\n" else "a"
        else -> cls // 1文字そのままリテラルとして繰り返す
      }
}
