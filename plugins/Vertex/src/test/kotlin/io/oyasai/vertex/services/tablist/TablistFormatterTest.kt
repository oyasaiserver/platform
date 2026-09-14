package io.oyasai.vertex.services.tablist

import kotlin.test.Test
import kotlin.test.assertEquals

class TablistFormatterTest {
  @Test
  fun formatsPlayerNameWithConfiguredGroupColor() {
    assertEquals(
        "&r&a*&7suffix&f&7<&61,234&7>&f Steve",
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
}
