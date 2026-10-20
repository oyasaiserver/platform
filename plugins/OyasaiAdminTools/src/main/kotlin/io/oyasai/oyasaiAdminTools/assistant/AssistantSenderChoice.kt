package io.oyasai.oyasaiAdminTools.assistant

internal object AssistantSenderChoice {
  val defaults =
      listOf(
          "tp",
          "teleport",
          "gamemode",
          "gm",
          "gms",
          "gmc",
          "gmsp",
          "gma",
          "fly",
          "co i",
          "co inspect",
          "co near",
      )

  fun operator(command: String, configured: List<String>): Boolean {
    val words = command.substringAfter(':').lowercase(java.util.Locale.ROOT).split(Regex("\\s+"))
    return configured.any {
      val prefix = it.trim().lowercase(java.util.Locale.ROOT).split(Regex("\\s+"))
      prefix.first().isNotBlank() && words.take(prefix.size) == prefix
    }
  }

  fun playerRequired(output: String): Boolean =
      Regex(
              "(?i)(only (?:be (?:used|executed) by (?:a )?|a )?players?|must be (?:a |an? in.game )?player|player.?only|cannot be (?:used|executed) (?:from|by) (?:the )?console|プレイヤー(?:から|で|のみ|専用|しか)|ゲーム内(?:から|で).*(?:実行|使用))"
          )
          .containsMatchIn(output)
}
