package io.oyasai.oyasaiban

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class ServerAccessTest {
  @Test
  fun allowsUnrestrictedServersWithoutPermissions() {
    for (server in listOf("main", "lobby", "unknown", "")) {
      assertTrue(ServerAccess.canConnect(server, emptySet()), server)
    }
  }

  @Test
  fun survivalNeedsRankAndWhitelist() {
    assertTrue(ServerAccess.canConnect("survival", setOf("group.jokyu", "oyasai.server.survival")))
    assertFalse(ServerAccess.canConnect("survival", setOf("group.jokyu")))
    assertFalse(ServerAccess.canConnect("survival", setOf("oyasai.server.survival")))
  }

  @Test
  fun deniesMissingOrUnrelatedPermissions() {
    assertFalse(ServerAccess.canConnect("survival", emptySet()))
    assertFalse(ServerAccess.canConnect("survival", setOf("oyasai.ban", "group.chukyu")))
  }

  @Test
  fun matchesServerNamesIgnoringCase() {
    for (server in listOf("survival", "SURVIVAL", "Survival")) {
      assertFalse(ServerAccess.canConnect(server, emptySet()), server)
      assertTrue(
          ServerAccess.canConnect(server, setOf("group.jokyu", "oyasai.server.survival")),
          server,
      )
    }
    assertTrue(ServerAccess.canConnect("MAIN", emptySet()))
  }

  @Test
  fun axiomNeedsTakumiOrItsOwnPermission() {
    assertFalse(ServerAccess.canConnect("axiom", setOf("group.jokyu", "oyasai.server.survival")))
    assertTrue(ServerAccess.canConnect("axiom", setOf("group.takumi")))
    assertTrue(ServerAccess.canConnect("axiom", setOf("oyasai.server.axiom")))
  }
}
