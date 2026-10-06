package io.oyasai.oyasaiAdminTools.socialspy

object SocialSpyRules {
  val commands =
      listOf(
          "msg",
          "w",
          "r",
          "mail",
          "m",
          "t",
          "whisper",
          "emsg",
          "tell",
          "er",
          "reply",
          "ereply",
          "email",
          "action",
          "describe",
          "eme",
          "eaction",
          "edescribe",
          "etell",
          "ewhisper",
          "pm",
          "message",
      )

  fun matches(input: String, configured: Collection<String>): Boolean {
    if (!input.startsWith("/")) return false
    val label =
        input
            .drop(1)
            .substringBefore(' ')
            .substringBefore('\t')
            .substringAfterLast(':')
            .lowercase(java.util.Locale.ROOT)
    return label.isNotEmpty() && ("*" in configured || configured.any { it.equals(label, true) })
  }
}
