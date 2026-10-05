package icu.oyasai.games.bedwars

import java.io.File
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class BedWarsShopTest {
  @Test
  fun `payment plan splits stacks conserves excess and refuses partial payment`() {
    val stacks = listOf(2, 0, 5, 9)
    assertEquals(listOf(0, 0, 0, 7), BedWarsShop.debitPlan(stacks, 9))
    assertEquals(listOf(0, 0, 0, 0), BedWarsShop.debitPlan(stacks, 16))
    assertNull(BedWarsShop.debitPlan(stacks, 17))
    assertEquals(listOf(2, 0, 5, 9), stacks)
    assertFails { BedWarsShop.debitPlan(stacks, 0) }
    assertFails { BedWarsShop.debitPlan(listOf(-1), 1) }
  }

  @Test
  fun `downgrade compares only matching equipment family`() {
    assertTrue(BedWarsShop.isDowngrade("STONE_SWORD", listOf("IRON_SWORD")))
    assertTrue(BedWarsShop.isDowngrade("CHAINMAIL_BOOTS", listOf("DIAMOND_BOOTS")))
    assertTrue(BedWarsShop.isDowngrade("WOODEN_PICKAXE", listOf("IRON_PICKAXE")))
    assertFalse(BedWarsShop.isDowngrade("IRON_SWORD", listOf("IRON_SWORD")))
    assertFalse(BedWarsShop.isDowngrade("DIAMOND_SWORD", listOf("IRON_SWORD")))
    assertFalse(BedWarsShop.isDowngrade("IRON_AXE", listOf("DIAMOND_PICKAXE")))
    assertFalse(BedWarsShop.isDowngrade("STICK", listOf("DIAMOND_SWORD")))
  }

  @Test
  fun `quickbuy resolves original catalog stack and rejects changed prices`() {
    val entry = BedWarsShopEntry(mapOf("type" to "STONE", "amount" to 8), BedWarsPrice("iron", 3))
    val catalog = BedWarsShopCatalog(mapOf("blocks" to listOf(entry)))
    val saved = org.bukkit.configuration.file.YamlConfiguration()
    saved.set("1.material", "STONE")
    saved.set("1.amount", 3)
    saved.set("1.resource", "iron")
    assertSame(entry, BedWarsShop.resolveQuickbuy(catalog, saved, "1"))
    saved.set("1.amount", 2)
    assertNull(BedWarsShop.resolveQuickbuy(catalog, saved, "1"))
  }

  @Test
  fun `tower entrance rotates and has no floor filling the player`() {
    val north = BedWarsSpecials.towerOffsets(0, -1)
    assertFalse(Triple(0, 1, 2) in north)
    assertFalse(Triple(0, 2, 2) in north)
    assertTrue(Triple(0, 3, 2) in north)
    assertTrue(Triple(0, 5, 0) in north)
    assertFalse(north.any { it.second == 0 })
    val east = BedWarsSpecials.towerOffsets(1, 0)
    assertFalse(Triple(-2, 1, 0) in east)
    assertEquals(north.size, east.size)
    assertFails { BedWarsSpecials.towerOffsets(1, 1) }
  }

  @Test
  fun `prices reject zero negative unknown overflow and trailing text`() {
    assertEquals(BedWarsPrice("iron", 7), BedWarsShopCatalog.price("7 of IRON"))
    listOf("0 of iron", "-1 of gold", "2 of stone", "2147483648 of gold", "4 of iron extra")
        .forEach { assertNull(BedWarsShopCatalog.price(it)) }
  }

  @Test
  fun `compact stacks preserve amount name lore`() {
    val stack = BedWarsShopCatalog.stack("STONE;12;Example;first;second")
    assertEquals("STONE", stack["type"])
    assertEquals(12, stack["amount"])
    assertEquals("Example", stack["display-name"])
    assertEquals(listOf("first", "second"), stack["lore"])
  }

  @Test
  fun `recursive catalogs preserve property data and isolate invalid entries`(@TempDir dir: File) {
    val file = File(dir, "shop.yml")
    file.writeText(
        """
        data:
          - locate: '${'$'}blocks'
            stack: WHITE_WOOL;1;Example
          - id: blocks
            write: false
            stack: STONE
            items:
              - STONE;6 for 3 of iron
              - stack: EGG
                price: 1 of emerald
                properties: BridgeEgg
              - stack: STRING
                price: 2 of diamond
                properties:
                  name: trap
                  effects:
                    - type: regeneration
                      duration: 20
              - stack: STONE
                price: 0 of iron
        """
            .trimIndent()
    )
    val warnings = mutableListOf<String>()
    val catalog = BedWarsShopCatalog.load(file, warnings::add)
    assertEquals("blocks", catalog.pages["main"]!!.single().target)
    assertEquals(3, catalog.pages["blocks"]!!.size)
    assertEquals(6, catalog.pages["blocks"]!![0].stack["amount"])
    assertEquals("bridgeegg", catalog.pages["blocks"]!![1].property)
    assertEquals("trap", catalog.pages["blocks"]!![2].property)
    assertEquals(1, warnings.size)
    assertTrue(warnings.single().contains("invalid price"))
  }

  @Test
  fun `column without row means first row and invalid materials are skipped`(@TempDir dir: File) {
    val file = File(dir, "shop.yml")
    file.writeText(
        """
        data:
          - stack: STONE
            price: 2 of iron
            column: 4
            skip: 1
          - stack: UNKNOWN_MATERIAL
            price: 2 of iron
        """
            .trimIndent()
    )
    val warnings = mutableListOf<String>()
    val catalog = BedWarsShopCatalog.load(file, warnings::add)
    assertEquals(4, catalog.pages["main"]!!.single().slot)
    assertEquals(1, catalog.pages["main"]!!.single().skip)
    assertEquals(1, warnings.size)
  }

  @Test
  fun `nested upgrade shop creates a navigable page`(@TempDir dir: File) {
    val file = File(dir, "upgrade.yml")
    file.writeText(
        """
        data:
          - stack: STRING
            items:
              - stack: STRING
                price: 3 of diamond
                properties: minertrap
        """
            .trimIndent()
    )
    val catalog = BedWarsShopCatalog.load(file) { fail(it) }
    val target = catalog.pages["main"]!!.single().target!!
    assertEquals("minertrap", catalog.pages[target]!!.single().property)
  }
}
