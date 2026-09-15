package io.oyasai.oyasaitab

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer

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
  fun normalizesMiniMessageSuffixWithoutChangingLegacySuffix() {
    assertEquals(
        "&x&f&1&c&4&0&f*&b*",
        TablistFormatter.normalizeSuffix("<color:#F1C40F>*</color><aqua>*</aqua>"),
    )
    assertEquals("&aLegacy", TablistFormatter.normalizeSuffix("&aLegacy"))
    // 書き出した hex を表示側の legacyAmpersand() が読み戻せること
    assertEquals(
        TextColor.fromHexString("#F1C40F"),
        LegacyComponentSerializer.legacyAmpersand()
            .deserialize(TablistFormatter.normalizeSuffix("<color:#F1C40F>*</color>"))
            .color(),
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

    assertEquals(1003, orders[white])
    assertEquals(1002, orders[blue])
    assertEquals(1001, orders[default])
    assertEquals(1000, orders[afkWhite])
    assertTrue(orders.values.all { it >= LOCAL_TAB_ORDER_BASE })
    assertTrue(orders.getValue(white) > orders.getValue(blue))
    assertTrue(orders.getValue(blue) > orders.getValue(default))
    assertTrue(orders.getValue(default) > orders.getValue(afkWhite))
  }

  @Test
  fun keepsRemoteOrderBelowLocalBand() {
    val first = UUID.fromString("00000000-0000-0000-0000-000000000011")
    val second = UUID.fromString("00000000-0000-0000-0000-000000000012")
    val orders =
        CrossServerTabLogic.remoteOrders(
            listOf(
                CrossServerTabEntry(second, "§bBeni", "lobby", 20),
                CrossServerTabEntry(first, "§aAki", "axiom", 10),
            )
        )

    assertEquals(999, orders[first])
    assertEquals(998, orders[second])
    assertTrue(orders.values.all { it in 1 until LOCAL_TAB_ORDER_BASE })
  }

  @Test
  fun calculatesRemoteDiffWithoutRemovingLocalEntries() {
    val viewer = UUID.fromString("00000000-0000-0000-0000-000000000020")
    val local = UUID.fromString("00000000-0000-0000-0000-000000000021")
    val remote = UUID.fromString("00000000-0000-0000-0000-000000000022")
    val stale = UUID.fromString("00000000-0000-0000-0000-000000000023")
    val movedLocal = UUID.fromString("00000000-0000-0000-0000-000000000024")
    val diff =
        CrossServerTabLogic.diffForViewer(
            viewerId = viewer,
            viewerServer = "main",
            managedEntries = setOf(stale, movedLocal),
            records =
                listOf(
                    CrossServerTabEntry(local, "§aLocal", "main", 5),
                    CrossServerTabEntry(remote, "§bRemote", "lobby", 8),
                    CrossServerTabEntry(stale, "§cGone", "axiom", 9),
                    CrossServerTabEntry(movedLocal, "§dMoved", "lobby", 10),
                ),
            connectedPlayerServers =
                mapOf(viewer to "main", local to "main", remote to "lobby", movedLocal to "main"),
        )

    assertEquals(setOf(stale), diff.remove)
    assertEquals(setOf(movedLocal), diff.forget)
    assertEquals(listOf(remote), diff.upsert.map { it.uuid })
  }

  @Test
  fun usesActualServerToAvoidDuplicateDuringSwitch() {
    val viewer = UUID.fromString("00000000-0000-0000-0000-000000000051")
    val switching = UUID.fromString("00000000-0000-0000-0000-000000000052")
    val diff =
        CrossServerTabLogic.diffForViewer(
            viewerId = viewer,
            viewerServer = "lobby",
            managedEntries = emptySet(),
            records = listOf(CrossServerTabEntry(switching, "§aSwitching", "main", 20)),
            connectedPlayerServers = mapOf(viewer to "lobby", switching to "lobby"),
        )

    assertEquals(emptyList(), diff.upsert)
  }

  @Test
  fun keepsDisconnectEntryWhenPlayerAlreadyReconnected() {
    val player = UUID.fromString("00000000-0000-0000-0000-000000000031")

    assertEquals(false, CrossServerTabLogic.shouldRemoveOnDisconnect(player, setOf(player)))
    assertEquals(true, CrossServerTabLogic.shouldRemoveOnDisconnect(player, emptySet()))
  }

  @Test
  fun roundTripsSnapshotCodec() {
    val player = UUID.fromString("00000000-0000-0000-0000-000000000041")
    val snapshot =
        OyasaiTabSnapshot(
            "main",
            listOf(OyasaiTabPlayerSnapshot(player, "§aSteve", "main", 42)),
        )

    assertEquals(snapshot, OyasaiTabSnapshotCodec.decode(OyasaiTabSnapshotCodec.encode(snapshot)))
  }

  @Test
  fun showsServerLabelInsteadOfLikesForRemotePlayers() {
    assertEquals(
        "§7<§6Axiom§7>§f §r§a*§f marzipan99",
        CrossServerTabLogic.remoteDisplayNameLegacy("axiom", "§r§a*§f marzipan99"),
    )
    assertEquals(
        "§7<§6Lobby§7>§f Aramaa",
        CrossServerTabLogic.remoteDisplayNameLegacy("lobby", "Aramaa"),
    )
  }

  @Test
  fun buildsCrossServerNameWithoutLikesBadge() {
    assertEquals(
        "&r&a*&7suffix&f Steve",
        TablistFormatter.playerNameNoBadgeLegacy("&a", "&7suffix", "Steve"),
    )
    assertEquals("&r&f Alex", TablistFormatter.playerNameNoBadgeLegacy("", "", "Alex"))
  }
}
