package icu.oyasai.utilities.items

enum class ClaimRule(val key: String, val label: String) {
  FREE("free", "誰でも何度でも"),
  STAFF("staff", "運営のみ"),
  ONCE("once", "1人1回");

  companion object {
    fun parse(text: String): ClaimRule? = entries.firstOrNull { it.key == text.lowercase() }
  }
}

object ItemRules {
  /** 番号は登録順の連番（1から）。 */
  fun parseNumber(text: String?): Int? = text?.toIntOrNull()?.takeIf { it > 0 }

  /** 空白で区切った語がすべて名前に含まれるか。大文字小文字は区別しない。 */
  fun matchesName(name: String, query: String): Boolean {
    val words = query.trim().split(Regex("\\s+")).filter { it.isNotEmpty() }
    return words.isNotEmpty() && words.all { name.contains(it, ignoreCase = true) }
  }

  /** 運営のみのアイテムは、一覧と補完に出さない。 */
  fun visibleTo(rule: ClaimRule, staff: Boolean): Boolean = staff || rule != ClaimRule.STAFF

  /** 受け取れないときだけ理由を返す。運営はルールに関係なく受け取れる。 */
  fun denial(rule: ClaimRule, staff: Boolean, alreadyClaimed: Boolean): String? =
      when {
        staff -> null
        rule == ClaimRule.STAFF -> "このアイテムは運営だけが受け取れます。"
        rule == ClaimRule.ONCE && alreadyClaimed -> "このアイテムは1人1回までで、すでに受け取っています。"
        else -> null
      }
}
