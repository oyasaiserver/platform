package io.oyasai.vertex.services.tablist

import kotlin.test.Test
import kotlin.test.assertEquals

class TablistFormatterTest {
  @Test
  fun formatsPlayerNameWithConfiguredGroupColor() {
    assertEquals(
        "&r&a*&7suffix&f&7<&61234&7>&f Steve",
        TablistFormatter.playerNameLegacy("&a", "&7suffix", 1234, "Steve"),
    )
  }

  @Test
  fun formatsPlayerNameWithoutStarWhenGroupColorIsMissing() {
    assertEquals(
        "&r&7admin&f&7<&65&7>&f Alex",
        TablistFormatter.playerNameLegacy("", "&7admin", 5, "Alex"),
    )
  }

  @Test
  fun formatsFooterWithCommasOnlyForMoneyAndTokens() {
    assertEquals(
        listOf(
                "",
                "&7&o¥&r&2599,113,222 &f|&r &357,721&7&oP",
                "",
                "&a3&f &7players online &f| &f20 &7TPS",
                "&7Total &6504857 &7Likes &f| &222842 &7SLIDs",
                "&8&m==============================",
            )
            .joinToString("\n"),
        TablistFormatter.footerLegacy(
            money = 599113222.0,
            tokens = 57721,
            online = 3,
            tps = "20",
            allLikes = 504857,
            buildings = 22842,
        ),
    )
  }

  @Test
  fun formatsTpsLikeTab() {
    assertEquals("20", TablistFormatter.formatTps(20.0))
    assertEquals("19.87", TablistFormatter.formatTps(19.87))
    assertEquals("20", TablistFormatter.formatTps(20.05))
  }

  @Test
  fun formatsAfkNamePart() {
    assertEquals("Steve", TablistFormatter.playerDisplayNameLegacy("Steve", afk = false))
    assertEquals("&7Steve &o[AFK]", TablistFormatter.playerDisplayNameLegacy("Steve", afk = true))
  }

  @Test
  fun formatsHeaderWithMinecraftVersion() {
    assertEquals(
        listOf(
                "&8&m=============================",
                "&7&l&o&nOYASAI&f&l&oSERVER &7&l&o26.2",
                "&bLikes&7：&643791",
            )
            .joinToString("\n"),
        TablistFormatter.headerLegacy("26.2", 43791),
    )
  }
}
