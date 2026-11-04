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
  fun allowsEitherPermissionOrBoth() {
    for (permissions in
        listOf(
            setOf("group.jokyu"),
            setOf("oyasai.server.survival"),
            setOf("group.jokyu", "oyasai.server.survival"),
        )) {
      assertTrue(ServerAccess.canConnect("survival", permissions), permissions.toString())
    }
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
      assertTrue(ServerAccess.canConnect(server, setOf("group.jokyu")), server)
      assertTrue(ServerAccess.canConnect(server, setOf("oyasai.server.survival")), server)
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
