package io.oyasai.chat.common.japanize

/** General IME romanization rules; independently maintained, without LunaChat source. */
object Romaji {
  private val table =
      buildMap<String, String> {
        fun row(prefix: String, kana: String) {
          "aiueo".zip(kana).forEach { (vowel, value) -> put("$prefix$vowel", value.toString()) }
        }
        row("", "あいうえお")
        listOf(
                "k" to "かきくけこ",
                "g" to "がぎぐげご",
                "s" to "さしすせそ",
                "z" to "ざじずぜぞ",
                "t" to "たちつてと",
                "d" to "だぢづでど",
                "n" to "なにぬねの",
                "h" to "はひふへほ",
                "b" to "ばびぶべぼ",
                "p" to "ぱぴぷぺぽ",
                "m" to "まみむめも",
                "r" to "らりるれろ",
            )
            .forEach { (p, k) -> row(p, k) }
        putAll(
            mapOf(
                "ya" to "や",
                "yu" to "ゆ",
                "yo" to "よ",
                "wa" to "わ",
                "wo" to "を",
                "wi" to "うぃ",
                "we" to "うぇ",
                "shi" to "し",
                "chi" to "ち",
                "tsu" to "つ",
                "fu" to "ふ",
                "ji" to "じ",
            )
        )
        listOf(
                "ky" to "き",
                "gy" to "ぎ",
                "sy" to "し",
                "sh" to "し",
                "zy" to "じ",
                "j" to "じ",
                "jy" to "じ",
                "ty" to "ち",
                "ch" to "ち",
                "cy" to "ち",
                "dy" to "ぢ",
                "ny" to "に",
                "hy" to "ひ",
                "by" to "び",
                "py" to "ぴ",
                "my" to "み",
                "ry" to "り",
            )
            .forEach { (p, k) ->
              "auo".zip("ゃゅょ").forEach { (v, small) -> put("$p$v", "$k$small") }
              put("${p}e", "${k}ぇ")
            }
        listOf("x", "l").forEach { p ->
          row(p, "ぁぃぅぇぉ")
          put("${p}tu", "っ")
          put("${p}tsu", "っ")
          put("${p}ya", "ゃ")
          put("${p}yu", "ゅ")
          put("${p}yo", "ょ")
          put("${p}wa", "ゎ")
        }
        row("v", "ゔゔゔゔゔ")
        putAll(
            mapOf(
                "va" to "ゔぁ",
                "vi" to "ゔぃ",
                "ve" to "ゔぇ",
                "vo" to "ゔぉ",
                "fa" to "ふぁ",
                "fi" to "ふぃ",
                "fe" to "ふぇ",
                "fo" to "ふぉ",
                "tsa" to "つぁ",
                "tsi" to "つぃ",
                "tse" to "つぇ",
                "tso" to "つぉ",
                "thi" to "てぃ",
                "thu" to "てゅ",
                "dhi" to "でぃ",
                "dhu" to "でゅ",
                "twu" to "とぅ",
                "dwu" to "どぅ",
            )
        )
      }

  fun convert(input: String): String = buildString {
    val lower = input.lowercase(java.util.Locale.ROOT)
    var i = 0
    while (i < lower.length) {
      val c = lower[i]
      val next = lower.getOrNull(i + 1)
      when {
        c == '-' -> {
          append('ー')
          i++
        }
        c == 'n' && next == '\'' -> {
          append('ん')
          i += 2
        }
        c == 'n' && next == 'n' -> {
          append('ん')
          i += 2
        }
        c == 'n' && (next == null || next !in "aiueoy") -> {
          append('ん')
          i++
        }
        c in "bcdfghjklmpqrstvwxyz" && next == c -> {
          append('っ')
          i++
        }
        else -> {
          val key =
              (4 downTo 1)
                  .mapNotNull { length ->
                    lower.substring(i, (i + length).coerceAtMost(lower.length)).takeIf {
                      it in table
                    }
                  }
                  .firstOrNull()
          if (key != null) {
            append(table.getValue(key))
            i += key.length
          } else {
            append(input[i])
            i++
          }
        }
      }
    }
  }
}
