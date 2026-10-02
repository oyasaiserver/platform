package icu.oyasai.utilities.hologram

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer

private val hexOpen = Regex("<#([0-9A-Fa-f]{6})>")
private val hexClose = Regex("</#[0-9A-Fa-f]{6}>")
private val animOpen = Regex("<ANIM:[^>]*>", RegexOption.IGNORE_CASE)
private val animClose = Regex("</ANIM>", RegexOption.IGNORE_CASE)

private val legacy = LegacyComponentSerializer.builder().character('&').hexColors().build()

/** `§` / MiniMessage hex / `<ANIM>` を Legacy の `&` 表記へ潰す。アニメは中身だけ残す。 */
fun normalizeHologramText(raw: String): String =
    raw.replace('§', '&')
        .replace(hexOpen) { "&#${it.groupValues[1]}" }
        .replace(hexClose, "")
        .replace(animOpen, "")
        .replace(animClose, "")

fun hologramComponent(line: String): Component = legacy.deserialize(normalizeHologramText(line))

private val textToken = Regex("&#[0-9a-fA-F]{6}|&[0-9a-fk-orA-FK-OR]|[\\s\\S]")

/** 色・装飾を各文字に閉じ込め、サロゲートペアも一文字として扱う。 */
private fun hologramCharacters(raw: String): List<String> {
  val result = mutableListOf<String>()
  var style = "&r"
  for (match in textToken.findAll(normalizeHologramText(raw))) {
    val token = match.value
    if (token.length > 1 && token[0] == '&') {
      val code = token[1].lowercaseChar()
      style = if (code in "0123456789abcdef#r") "&r$token" else style + token
    } else {
      result += style + token
    }
  }
  return result
}

/** 原稿の各行を右から左の列にし、各列は上から下へ読む。 */
fun verticalHologramLines(lines: List<String>): List<String> {
  val columns = lines.map { hologramCharacters(it) }
  return List(columns.maxOfOrNull { it.size } ?: 0) { row ->
    columns.asReversed().joinToString("&r　") { column ->
      val token = column.getOrNull(row) ?: return@joinToString "&r　"
      textToken.replace(token) { match ->
        val s = match.value
        if (s.length == 1 && s[0] in '!'..'~') (s[0].code + 0xfee0).toChar().toString()
        else if (s == " ") "　" else s
      }
    }
  }
}

fun plainHologramText(raw: String): String =
    normalizeHologramText(raw).replace(Regex("&#[0-9a-fA-F]{6}|&[0-9a-fk-orA-FK-OR]"), "")

/** 既存の hex 表記へ展開するので、新しいテキスト構文は不要。 */
fun gradientHologramText(raw: String, colors: List<Int>): String {
  require(colors.isNotEmpty())
  val chars = plainHologramText(raw).codePoints().toArray()
  return chars
      .mapIndexed { i, cp ->
        val position =
            if (chars.size <= 1) 0.0 else i.toDouble() / (chars.size - 1) * (colors.size - 1)
        val start = position.toInt()
        val a = colors[start]
        val b = colors[(start + 1).coerceAtMost(colors.lastIndex)]
        val fraction = position - start
        val rgb =
            listOf(16, 8, 0).fold(0) { value, shift ->
              val channel =
                  ((a shr shift and 255) * (1 - fraction) + (b shr shift and 255) * fraction)
                      .toInt()
              value or (channel shl shift)
            }
        "&#%06x%s".format(rgb, String(Character.toChars(cp)))
      }
      .joinToString("")
}
