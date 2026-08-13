package icu.oyasai.citiesskymine.shared

object ArgSuggest {
  /**
   * 数値の自由入力パラメータ用。 先頭に "<label: range>" というプレースホルダを1つ置き、 続けて実際に使える代表値を並べる。
   * プレースホルダは説明用ダミーで、onCommand側で弾く。
   */
  fun positional(label: String, range: String, examples: List<String>): List<String> =
      listOf("<$label: $range>") + examples

  /** key-value 形式の set サブコマンド用（/rc set, /ri set）。 値の位置で範囲説明+代表値を出す。 */
  fun setValue(label: String, range: String, examples: List<String>): List<String> =
      positional(label, range, examples)

  /** プレースホルダ文字列かどうかを判定する。 */
  fun isPlaceholder(arg: String): Boolean =
      arg.startsWith("<") || arg.startsWith("[") || arg.startsWith("eg.")

  /** タブ補完候補のフィルタ。 プレースホルダ（<...>）は常に候補に含め、 それ以外は部分入力でフィルタリングする。 */
  fun filterSuggestions(suggestions: List<String>, input: String): List<String> =
      suggestions.filter { isPlaceholder(it) || it.startsWith(input, ignoreCase = true) }
}
