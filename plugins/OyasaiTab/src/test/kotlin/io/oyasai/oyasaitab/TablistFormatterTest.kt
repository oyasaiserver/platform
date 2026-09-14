package io.oyasai.oyasaitab

import java.util.UUID
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

  @Test
  fun formatsNameTagPrefixWithLevelAndSuffix() {
    assertEquals(
        "&7[Lv.42&7]&r&x&4&0&8&0&2&0*&b称号&f",
        TablistFormatter.nameTagPrefixLegacy(
            "&7[%dp_level%&7]&r&x&4&0&8&0&2&0*%luckperms-suffix%&f",
            "&b称号",
            "Lv.42",
        ),
    )
    assertEquals(
        "&b【案内人】&f",
        TablistFormatter.nameTagPrefixLegacy("&b【案内人】&f", "&b称号", "Lv.42"),
    )
  }

  @Test
  fun sortsAfkAfterActiveThenGroupThenName() {
    val white = UUID.fromString("00000000-0000-0000-0000-000000000001")
    val blue = UUID.fromString("00000000-0000-0000-0000-000000000002")
    val default = UUID.fromString("00000000-0000-0000-0000-000000000003")
    val afkWhite = UUID.fromString("00000000-0000-0000-0000-000000000004")
    val orders =
        TabOrder.calculate(
            listOf(
                TabOrder.Entry(default, "Cocoa", "default", afk = false),
                TabOrder.Entry(afkWhite, "Aki", "white", afk = true),
                TabOrder.Entry(blue, "Beni", "blue", afk = false),
                TabOrder.Entry(white, "Aki", "white", afk = false),
            ),
            listOf("white", "blue", "default"),
        )

    assertEquals(0, orders[white])
    assertEquals(1, orders[blue])
    assertEquals(2, orders[default])
    assertEquals(3, orders[afkWhite])
  }
}
