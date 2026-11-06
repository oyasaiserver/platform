package io.oyasai.oyasaiAdminTools.assistant

import com.sk89q.worldedit.math.BlockVector3
import com.sk89q.worldedit.regions.CuboidRegion
import com.sk89q.worldedit.regions.EllipsoidRegion
import java.lang.reflect.Proxy
import java.util.UUID
import kotlin.test.*
import org.bukkit.entity.Player

class AssistantSelectionLockTest {
  private val id = UUID.randomUUID()
  private val player =
      Proxy.newProxyInstance(Player::class.java.classLoader, arrayOf(Player::class.java)) {
          _,
          method,
          _ ->
        when (method.name) {
          "getUniqueId" -> id
          "isOnline" -> true
          "sendMessage" -> null
          else -> error(method.name)
        }
      } as Player

  private class Mask(var current: String? = "original") : AssistantSelectionLock.Mask {
    val original = current
    var empty = true
    var intact = true
    override var area: AssistantSelectionLock.Area? = null

    override fun validate(player: Player, maxBlocks: Long) {
      require(empty) { "not empty" }
    }

    override fun survey(player: Player, area: AssistantSelectionLock.Area, maxBlocks: Long) =
        "$area"

    override fun lock(player: Player, maxBlocks: Long, area: AssistantSelectionLock.Area?): String {
      if (area == null) validate(player, maxBlocks)
      this.area = area ?: AssistantSelectionLock.Area(listOf(0, 0, 0), listOf(0, 0, 0))
      current = "fixed"
      return "fixed"
    }

    override fun intact(player: Player) = intact

    override fun execute(player: Player, command: String, output: (String) -> Unit) = true

    override fun restore() {
      current = original
    }
  }

  @Test
  fun expiryExplicitReleaseDisableAndCloseRestoreOriginalIncludingAbsentMask() {
    for (original in listOf(null, "original")) for (reason in
        listOf("expiry", "unlock", "disable", "close", "changed")) {
      var time = 0L
      val mask = Mask(original)
      val locks = AssistantSelectionLock(1000, 10, { mask }, { time })
      locks.lock(player)
      assertEquals("fixed", mask.current)
      assertTrue(locks.active(player))
      when (reason) {
        "expiry" -> {
          time = 600_000_000_000L
          locks.tick(true)
        }
        "unlock" -> locks.unlock(id)
        "disable" -> locks.tick(false)
        "close" -> locks.close()
        "changed" -> {
          mask.intact = false
          assertFalse(locks.active(player))
        }
      }
      assertEquals(original, mask.current, reason)
      assertFalse(locks.active(player))
    }
  }

  @Test
  fun refreshRequiresEmptySelectionAndKeepsFirstOriginalMask() {
    val mask = Mask()
    val locks = AssistantSelectionLock(1000, 10, { mask })
    locks.lock(player)
    mask.empty = false
    assertFails { locks.validate(player) }
    assertFails { locks.lock(player) }
    assertTrue(locks.active(player))
    assertEquals("fixed", mask.current)
    mask.empty = true
    locks.lock(player)
    locks.unlock(id)
    assertEquals("original", mask.current)
  }

  @Test
  fun confirmedAreaSkipsAirAndAllowsOnlyVanillaEditsInsideIt() {
    val mask = Mask().apply { empty = false }
    val locks = AssistantSelectionLock(1000, 10, { mask })
    assertFails { locks.lock(player) }
    val area = AssistantSelectionLock.Area.parse("5,70,5 0 64 0")
    assertEquals(listOf(0, 64, 0), area.min)
    assertEquals(252, area.volume)
    for (text in listOf("0 0 0 1 1", "0 0 0 1 1 x", "~ 0 0 1 1 1")) assertFails {
      AssistantSelectionLock.Area.parse(text)
    }
    assertFalse(locks.inside(player, "minecraft:setblock 1 65 1 stone"))
    locks.lock(player, area)
    assertTrue(locks.inside(player, "minecraft:setblock 1 65 1 chest{Items:[]}"))
    assertTrue(locks.inside(player, "minecraft:fill 0 64 0 5 70 5 air destroy"))
    for (command in
        listOf(
            "minecraft:fill 0 64 0 6 70 5 air",
            "minecraft:setblock ~ 65 1 stone",
            "minecraft:setblock 1 65",
            "minecraft:clone 0 64 0 1 65 1 2 66 2",
            "fastasyncworldedit:/set stone",
        )) assertFalse(locks.inside(player, command), command)
    locks.unlock(id)
    assertFalse(locks.inside(player, "minecraft:setblock 1 65 1 stone"))
  }

  @Test
  fun validatesShapeVolumeEveryAirBlockAndReportsRepresentativeScanTime() {
    val region = CuboidRegion(null, BlockVector3.ZERO, BlockVector3.at(99, 99, 99))
    assertFails { FaweSelectionMask.validate(EllipsoidRegion(null), 1_000_000) { _, _, _ -> true } }
    var reads = 0
    assertFails {
      FaweSelectionMask.validate(region, 999_999) { _, _, _ ->
        reads++
        true
      }
    }
    assertEquals(0, reads)
    assertFails {
      FaweSelectionMask.validate(region, 1_000_000) { x, y, z -> x != 99 || y != 99 || z != 99 }
    }
    repeat(3) { FaweSelectionMask.validate(region, 1_000_000) { _, _, _ -> true } }
    val start = System.nanoTime()
    FaweSelectionMask.validate(region, 1_000_000) { _, _, _ ->
      reads++
      true
    }
    println(
        "Selection scan 100x100x100: ${(System.nanoTime() - start) / 1_000_000.0} ms (in-memory predicate, no server/chunk IO)"
    )
    assertEquals(1_000_000, reads)
    val enormous =
        CuboidRegion(
            null,
            BlockVector3.at(Int.MIN_VALUE, 0, Int.MIN_VALUE),
            BlockVector3.at(Int.MAX_VALUE, 255, Int.MAX_VALUE),
        )
    assertFails {
      FaweSelectionMask.validate(enormous, 1_000_000) { _, _, _ ->
        error("must reject before reading")
      }
    }
  }
}
