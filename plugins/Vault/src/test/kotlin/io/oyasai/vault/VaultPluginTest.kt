package io.oyasai.vault

import kotlin.test.Test
import kotlin.test.assertEquals
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
}
