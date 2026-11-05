package io.oyasai.oyasaiban

internal object ServerAccess {
  // requireAll: すべての権限が要る。false ならどれか1つで通す。
  private class Rule(
      val permissions: Set<String>,
      val deniedMessage: String,
      val requireAll: Boolean = false,
  )

  private val rules =
      mapOf(
          "survival" to
              Rule(
                  setOf("group.jokyu", "oyasai.server.survival"),
                  "サバイバルサーバーには、上級以上でホワイトリストに載った人だけが入れます",
                  requireAll = true,
              ),
          "axiom" to Rule(setOf("group.takumi", "oyasai.server.axiom"), "Axiom サーバーには匠以上の人だけが入れます"),
      )

  fun requiredPermissions(serverName: String): Set<String> =
      rules[serverName.lowercase()]?.permissions.orEmpty()

  fun deniedMessage(serverName: String): String =
      rules[serverName.lowercase()]?.deniedMessage ?: "このサーバーには入れません"

  fun canConnect(serverName: String, grantedPermissions: Set<String>): Boolean {
    val rule = rules[serverName.lowercase()] ?: return true
    return if (rule.requireAll) grantedPermissions.containsAll(rule.permissions)
    else rule.permissions.any { it in grantedPermissions }
  }
}
