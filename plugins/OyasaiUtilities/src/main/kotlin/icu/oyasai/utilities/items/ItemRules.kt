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
  private val idPattern = Regex("[a-z0-9_-]{1,32}")

  fun isValidId(id: String): Boolean = idPattern.matches(id)

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
