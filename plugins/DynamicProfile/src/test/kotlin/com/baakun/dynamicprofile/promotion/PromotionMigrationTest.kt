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

  @Test
  fun `resolveLuckPermsProvider updates companion provider lazily on enable`() {
    com.baakun.dynamicprofile.DynamicProfile.provider = null
    assertNull(com.baakun.dynamicprofile.DynamicProfile.provider)

    var registered = false
    val fakeProvider =
        org.bukkit.plugin.RegisteredServiceProvider(
            net.luckperms.api.LuckPerms::class.java,
            java.lang.reflect.Proxy.newProxyInstance(
                net.luckperms.api.LuckPerms::class.java.classLoader,
                arrayOf(net.luckperms.api.LuckPerms::class.java),
            ) { _, _, _ ->
              null
            } as net.luckperms.api.LuckPerms,
            org.bukkit.plugin.ServicePriority.Normal,
            java.lang.reflect.Proxy.newProxyInstance(
                org.bukkit.plugin.Plugin::class.java.classLoader,
                arrayOf(org.bukkit.plugin.Plugin::class.java),
            ) { _, _, _ ->
              null
            } as org.bukkit.plugin.Plugin,
        )

    assertNull(
        com.baakun.dynamicprofile.DynamicProfile.resolveLuckPermsProvider {
          if (registered) fakeProvider else null
        }
    )
    assertNull(com.baakun.dynamicprofile.DynamicProfile.provider)

    registered = true
    assertSame(
        fakeProvider,
        com.baakun.dynamicprofile.DynamicProfile.resolveLuckPermsProvider {
          if (registered) fakeProvider else null
        },
    )
    assertSame(fakeProvider, com.baakun.dynamicprofile.DynamicProfile.provider)
    com.baakun.dynamicprofile.DynamicProfile.provider = null
  }
}
