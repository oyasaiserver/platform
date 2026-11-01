package icu.oyasai.utilities.spawn

import icu.oyasai.utilities.hats.clampDustParticleSize
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull
import org.bukkit.Color
import org.bukkit.Material
import org.bukkit.Particle

class RespawnTargetTest {
  private fun target(
      jailed: Boolean = false,
      respawnAtHome: Boolean = true,
      respawnAtBed: Boolean = true,
      anchorSpawn: Boolean = false,
      respawnAtAnchor: Boolean = false,
      bed: String? = "bed",
      home: String? = "home",
      spawn: String? = "spawn",
  ): String? =
      respawnTarget(
          jailed,
          respawnAtHome,
          respawnAtBed,
          anchorSpawn,
          respawnAtAnchor,
          { bed },
          { home },
          spawn,
      )

  @Test
  fun `jailed players are left to vanilla`() {
    assertNull(target(jailed = true))
  }

  @Test
  fun `respawn at home prefers bed then home then spawn`() {
    assertEquals("bed", target())
    assertEquals("home", target(bed = null))
    assertEquals("home", target(respawnAtBed = false))
    assertEquals("spawn", target(bed = null, home = null))
  }

  @Test
  fun `anchor respawn uses home unless anchors are allowed`() {
    assertEquals("home", target(anchorSpawn = true))
    assertEquals("bed", target(anchorSpawn = true, respawnAtAnchor = true))
  }

  @Test
  fun `without respawn at home always goes to spawn`() {
    assertEquals("spawn", target(respawnAtHome = false))
    assertNull(target(respawnAtHome = false, spawn = null))
  }

  @Test
  fun `tools kit parser supports essentials book metadata and aliases`() {
    val sword = parseToolsKitEntry("stonesword 1")
    assertEquals(Material.STONE_SWORD, sword.material)
    assertEquals(1, sword.amount)

    val book =
        parseToolsKitEntry(
            "book 1 title:&4Book_&9o_&6Colors author:KHobbits lore:Ingame_color_codes book:ummo"
        )
    assertEquals(Material.BOOK, book.material)
    assertEquals(1, book.amount)
    assertEquals("§4Book §9o §6Colors", book.title)
    assertEquals("§4Book §9o §6Colors", book.displayName)
    assertEquals("KHobbits", book.author)
    assertEquals(listOf("Ingame color codes"), book.lore)
  }

  @Test
  fun `dust particle size is clamped within bukkit range`() {
    assertEquals(0.01f, clampDustParticleSize(0.0f))
    assertEquals(1.0f, clampDustParticleSize(1.0f))
    assertEquals(4.0f, clampDustParticleSize(6.0f))
    // Particle.DustOptions must accept the clamped value without throwing
    val dust = Particle.DustOptions(Color.WHITE, clampDustParticleSize(6.0f))
    assertEquals(4.0f, dust.size)
  }
}
