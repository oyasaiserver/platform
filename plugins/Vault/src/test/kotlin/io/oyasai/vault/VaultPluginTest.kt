package io.oyasai.vault

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.plugin.PluginDescriptionFile

class VaultPluginTest {
  @Test
  fun legacyMainClassIsLoadable() {
    val loader = javaClass.classLoader
    val description = PluginDescriptionFile(loader.getResourceAsStream("plugin.yml")!!)
    assertEquals("net.milkbowl.vault.Vault", description.main)
    assertTrue(VaultPlugin::class.java.isAssignableFrom(loader.loadClass(description.main)))
  }

  @Test
  fun essentialsNamespaceMatchesPluginAliasesOnly() {
    val labels =
        commandLabels(
            mapOf(
                "balance" to mapOf("aliases" to listOf("bal", "money")),
                "eco" to mapOf("aliases" to listOf("eeco", "economy")),
            ),
            listOf("balance", "eco"),
        )
    assertEquals(setOf("balance", "bal", "money", "eco", "eeco", "economy"), labels)
    assertTrue(blocksEssentialsEconomy("  /ESSENTIALS:MoNeY   player  ", labels))
    assertTrue(blocksEssentialsEconomy("essentials:EeCo\t give player 5", labels))
    assertFalse(blocksEssentialsEconomy("money player", labels))
    assertFalse(blocksEssentialsEconomy("essentials:moneyextra player", labels))
    assertEquals(listOf("ESS", "reload"), commandWords(" /ESS   reload "))
  }
}
