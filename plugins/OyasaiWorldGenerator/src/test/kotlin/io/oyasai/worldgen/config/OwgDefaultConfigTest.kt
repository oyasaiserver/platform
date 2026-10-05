package io.oyasai.worldgen.config

import java.io.InputStreamReader
import java.util.logging.Logger
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration

class OwgDefaultConfigTest {
  @Test
  fun bundledConfigHasNoHeightWorlds() {
    val stream = requireNotNull(javaClass.getResourceAsStream("/config.yml"))
    val config = stream.use { YamlConfiguration.loadConfiguration(InputStreamReader(it)) }
    val loaded = OwgConfig.load(config, Logger.getLogger(javaClass.name))
    assertTrue(loaded.worlds.isEmpty())
    assertTrue(loaded.configuredWorldNames.isEmpty())
    assertEquals(emptyList(), loaded.validationErrors)
  }
}
