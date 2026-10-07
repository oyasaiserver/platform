package com.baakun.dynamicprofile.promotion

import java.io.File
import java.nio.file.Files
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class PromotionMigrationTest {
  @Test
  fun `legacy ranks and webhook are copied once without modifying sources or DP settings`() {
    val root = File("build/test-tmp").apply { mkdirs() }
    val folder = Files.createTempDirectory(root.toPath(), "dp-promotion-").toFile()
    try {
      val legacy = File(folder, "OyasaiAdminTools").apply { mkdirs() }
      val ranks = File(legacy, "ranks.json").apply { writeText("[{\"name\":\"test\"}]") }
      val config =
          File(legacy, "config.yml").apply {
            writeText("webhook-url: 'legacy-value'\nother-setting: 42\n")
          }
      val originalConfig = config.readText()
      val dp = File(folder, "DynamicProfile").apply { mkdirs() }
      File(dp, "config.yml").writeText("Move: 20\n")
      PromotionMigration.copyLegacyFiles(dp)
      assertEquals(ranks.readText(), File(dp, "ranks.json").readText())
      val dpConfig = YamlConfiguration.loadConfiguration(File(dp, "config.yml"))
      assertEquals("legacy-value", dpConfig.getString("webhook-url"))
      assertEquals(20, dpConfig.getInt("Move"))
      assertFalse(dpConfig.contains("other-setting"))
      assertEquals(originalConfig, config.readText())
      File(dp, "ranks.json").writeText("[]")
      File(dp, "config.yml").writeText("webhook-url: ''\n")
      PromotionMigration.copyLegacyFiles(dp)
      assertEquals("[]", File(dp, "ranks.json").readText())
      assertEquals(
          "",
          YamlConfiguration.loadConfiguration(File(dp, "config.yml")).getString("webhook-url"),
      )
      assertTrue(ranks.isFile)
      assertEquals(originalConfig, config.readText())
    } finally {
      folder.deleteRecursively()
    }
  }
}
