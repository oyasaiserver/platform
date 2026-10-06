package icu.oyasai.games.weapons

import java.nio.file.Files
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration

class WeaponCatalogTest {
  @Test
  fun `legacy dye definition accepts retained arena material without widening other definitions`() {
    val config =
        YamlConfiguration().apply {
          set("Item_Information.Item_Type", "351~8")
          set("Item_Information.Item_Name", "&aExample grenade")
        }
    val definition = readWeaponDefinition("Example", config)
    assertTrue(matchesWeaponMaterial(definition, Material.LIGHT_GRAY_DYE))
    assertTrue(matchesWeaponMaterial(definition, Material.GRAY_DYE))
    assertFalse(matchesWeaponMaterial(definition, Material.RED_DYE))
    config.set("Item_Information.Item_Type", "LIGHT_GRAY_DYE")
    assertFalse(matchesWeaponMaterial(readWeaponDefinition("Example", config), Material.GRAY_DYE))
  }

  @Test
  fun `definition validation isolates invalid weapons and preserves configured values`() {
    val config =
        YamlConfiguration().apply {
          set("Item_Information.Item_Type", 340)
          set("Item_Information.Item_Name", "&aExample")
          set("Shooting.Recoil_Amount", -17)
          set("Shooting.Projectile_Damage", 13)
          set("Reload.Enable", true)
          set("Reload.Reload_Amount", 9)
          set("Reload.Reload_Duration", 31)
          set("Fully_Automatic.Enable", true)
          set("Fully_Automatic.Fire_Rate", 7)
        }
    val definition = readWeaponDefinition("Example", config)
    assertEquals(Material.BOOK, definition.material)
    assertEquals(-17.0, definition.d("Shooting.Recoil_Amount"))
    assertEquals(31, definition.i("Reload.Reload_Duration"))
    config.set("Fully_Automatic.Fire_Rate", 17)
    assertFailsWith<IllegalArgumentException> { readWeaponDefinition("Example", config) }
    config.set("Fully_Automatic.Fire_Rate", 7)
    config.set("Reload.Reload_Amount", 0)
    assertFailsWith<IllegalArgumentException> { readWeaponDefinition("Example", config) }
    config.set("Reload.Reload_Amount", 9)
    config.set("Shooting.Projectile_Damage", -1)
    assertFailsWith<IllegalArgumentException> { readWeaponDefinition("Example", config) }
    config.set("Shooting.Projectile_Damage", 13)
    config.set("Item_Information.Item_Type", "missing_material")
    assertFailsWith<IllegalArgumentException> { readWeaponDefinition("Example", config) }
    config.set("Item_Information.Attachments.Type", "accessory")
    config.set("Item_Information.Item_Name", null)
    assertTrue(readWeaponDefinition("Accessory", config).accessory)
  }

  @Test
  fun `legacy IDs use flattened materials rather than losing subtype`() {
    assertEquals(Material.RED_MUSHROOM, WeaponMaterials.resolve("40"))
    assertEquals(Material.OAK_SAPLING, WeaponMaterials.resolve("6"))
    assertEquals(Material.COCOA_BEANS, WeaponMaterials.resolve("351~3"))
    assertEquals(Material.GRAY_DYE, WeaponMaterials.resolve("351~8"))
    assertEquals(Material.RED_TERRACOTTA, WeaponMaterials.resolve("159~14"))
    assertEquals(Material.GOLDEN_SWORD, WeaponMaterials.resolve("283"))
    assertEquals(Material.NETHERITE_HOE, WeaponMaterials.resolve("netherite_hoe"))
    assertNull(WeaponMaterials.resolve("99999"))
    assertNull(WeaponMaterials.resolve("351~99"))
  }

  @Test
  fun `same name melee attachment resolves to parent without accepting unrelated duplicates`() {
    fun definition(id: String, melee: Boolean, attachment: String = "") =
        WeaponDefinition(
            id,
            YamlConfiguration().apply {
              set("Item_Information.Item_Name", "&aDemo tool")
              set("Item_Information.Melee_Mode", melee)
              set("Item_Information.Melee_Attachment", attachment)
            },
            Material.IRON_SWORD,
        )
    val parent = definition("Demo", false, "DemoMelee")
    val child = definition("DemoMelee", true)
    val unrelated = definition("Other", false)
    val candidates = legacyWeaponCandidates(listOf(parent, child))
    assertEquals(listOf(parent), candidates)
    assertEquals(
        parent,
        WeaponNames.match("§aDemo tool ▪ «9»", candidates) {
          listOf(it.s("Item_Information.Item_Name"))
        },
    )
    assertNull(
        WeaponNames.match("Demo tool", legacyWeaponCandidates(listOf(parent, child, unrelated))) {
          listOf(it.s("Item_Information.Item_Name"))
        }
    )
  }

  @Test
  fun `initial import copies weapons and general without overwriting either side`() {
    val root = Files.createTempDirectory("weapon-import-test").toFile()
    try {
      val legacy = root.resolve("CrackShot/weapons").apply { mkdirs() }
      val fixture = "Demo:\n  Item_Information:\n    Item_Name: '&aDemo'\n    Item_Type: 340\n"
      legacy.resolve("demo.yml").writeText(fixture)
      root.resolve("CrackShot/general.yml").writeText("Disabled_Worlds: []\n")
      val target = root.resolve("OyasaiGames/weapons")
      assertTrue(copyLegacyWeapons(target))
      assertEquals(fixture, target.resolve("demo.yml").readText())
      assertEquals(fixture, legacy.resolve("demo.yml").readText())
      assertEquals("Disabled_Worlds: []\n", target.resolve("general.yml").readText())
      target.resolve("demo.yml").writeText("Edited: true\n")
      assertFalse(copyLegacyWeapons(target))
      assertEquals("Edited: true\n", target.resolve("demo.yml").readText())
      assertEquals(fixture, legacy.resolve("demo.yml").readText())
      assertFalse(copyLegacyWeapons(root.resolve("Other/plugins/OyasaiGames/weapons")))
    } finally {
      root.deleteRecursively()
    }
  }

  @Test
  fun `native YAML reads fictitious legacy sections without changing numbers`() {
    val yaml =
        YamlConfiguration().apply {
          loadFromString(
              """
              Demo:
                Shooting:
                  Recoil_Amount: -13
                  Projectile_Damage: 11
                  Delay_Between_Shots: 9
                Reload:
                  Reload_Duration: 37
              """
                  .trimIndent()
          )
        }
    val w = WeaponDefinition("Demo", yaml.getConfigurationSection("Demo")!!, Material.BOOK)
    assertEquals(-13.0, w.d("Shooting.Recoil_Amount"))
    assertEquals(11, w.i("Shooting.Projectile_Damage"))
    assertEquals(9, w.i("Shooting.Delay_Between_Shots"))
    assertEquals(37, w.i("Reload.Reload_Duration"))
    assertFalse(w.b("Shooting.Dual_Wield"))
  }
}
