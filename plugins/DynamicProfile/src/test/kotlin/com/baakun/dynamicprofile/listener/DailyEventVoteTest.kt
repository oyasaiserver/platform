package com.baakun.dynamicprofile.listener

import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player

class DailyEventVoteTest {
  @Test
  fun `unknown voter returns null without falling back to uncached lookup`() {
    val resolved =
        DailyEvent.resolveVotePlayerUuid(
            rawUsername = "sa",
            resolveOnlinePlayer = { null },
            resolveCachedOfflinePlayer = { null },
            hasProfile = { false },
        )

    assertNull(resolved)
  }

  @Test
  fun `cached voter without play history or existing profile is ignored`() {
    val uuid = UUID.randomUUID()
    val cached = fakeOfflinePlayer(uuid, played = false)

    val resolved =
        DailyEvent.resolveVotePlayerUuid(
            rawUsername = "UnplayedUser",
            resolveOnlinePlayer = { null },
            resolveCachedOfflinePlayer = { cached },
            hasProfile = { false },
        )

    assertNull(resolved)
  }

  @Test
  fun `online or known cached voter resolves to player uuid`() {
    val onlineUuid = UUID.randomUUID()
    val online = fakeOnlinePlayer(onlineUuid)
    val offlineUuid = UUID.randomUUID()
    val cached = fakeOfflinePlayer(offlineUuid, played = false)

    assertEquals(
        onlineUuid,
        DailyEvent.resolveVotePlayerUuid(
            rawUsername = "OnlineUser",
            resolveOnlinePlayer = { online },
            resolveCachedOfflinePlayer = { null },
            hasProfile = { false },
        ),
    )

    assertEquals(
        offlineUuid,
        DailyEvent.resolveVotePlayerUuid(
            rawUsername = "ProfileUser",
            resolveOnlinePlayer = { null },
            resolveCachedOfflinePlayer = { cached },
            hasProfile = { it == offlineUuid },
        ),
    )
  }

  private fun fakeOfflinePlayer(uuid: UUID, played: Boolean): OfflinePlayer =
      Proxy.newProxyInstance(
          OfflinePlayer::class.java.classLoader,
          arrayOf(OfflinePlayer::class.java),
      ) { _, method, _ ->
        when (method.name) {
          "getUniqueId" -> uuid
          "isOnline" -> false
          "hasPlayedBefore" -> played
          else -> null
        }
      } as OfflinePlayer

  private fun fakeOnlinePlayer(uuid: UUID): Player =
      Proxy.newProxyInstance(
          Player::class.java.classLoader,
          arrayOf(Player::class.java),
      ) { _, method, _ ->
        when (method.name) {
          "getUniqueId" -> uuid
          "isOnline" -> true
          "hasPlayedBefore" -> true
          else -> null
        }
      } as Player
}
