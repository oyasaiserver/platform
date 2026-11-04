package io.oyasai.oyasaiban

internal object ServerAccess {
  private class Rule(val permissions: Set<String>, val deniedMessage: String)

  private val rules =
      mapOf(
          "survival" to
              Rule(
                  setOf("group.jokyu", "oyasai.server.survival"),
                  "サバイバルサーバーには上級以上の人だけが入れます",
              ),
          "axiom" to Rule(setOf("group.takumi", "oyasai.server.axiom"), "Axiom サーバーには匠以上の人だけが入れます"),
      )

  fun requiredPermissions(serverName: String): Set<String> =
      rules[serverName.lowercase()]?.permissions.orEmpty()

  fun deniedMessage(serverName: String): String =
      rules[serverName.lowercase()]?.deniedMessage ?: "このサーバーには入れません"

  fun canConnect(serverName: String, grantedPermissions: Set<String>): Boolean {
    val required = requiredPermissions(serverName)
    return required.isEmpty() || required.any { it in grantedPermissions }
  }
}
