package io.oyasai.directstate.edit.replace

/** 素材置換時に、対象ブロックの形をどの範囲まで維持するか。 */
internal enum class TypeReplaceMode {
  OFF,
  STRICT,
  COMPATIBLE;

  /** OFF→STRICT→COMPATIBLE→OFFの順で次へ進む。 */
  fun next() = entries[(ordinal + 1) % entries.size]

  companion object {
    /** 大文字小文字を無視して設定名を解釈し、不明ならnullを返す。 */
    fun parse(value: String): TypeReplaceMode? = entries.firstOrNull { it.name.equals(value, true) }
  }
}
