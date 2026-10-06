package icu.oyasai.games.weapons

import kotlin.test.*
import org.bukkit.Material
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.Test

class WeaponEffectsTest {
  @Test
  fun `grenade and bomblet detonation uses enabled lightning independently of collision flags`() {
    assertTrue(grenadeDetonationLightning("GRENADE", true))
    assertFalse(grenadeDetonationLightning("grenade", false))
    assertFalse(grenadeDetonationLightning("snowball", true))
    assertFalse(grenadeDetonationLightning("flare", true))
  }

  @Test
  fun `legacy sound aliases target names in the current API`() {
    for (name in WeaponEffectValues.soundAliases.values) {
      assertEquals(name, org.bukkit.Sound::class.java.getField(name).name)
    }
    assertEquals("ITEM_TOTEM_USE", org.bukkit.Sound::class.java.getField("ITEM_TOTEM_USE").name)
    assertNull(WeaponEffectValues.sound("-1-0.6-23"))
  }

  @Test
  fun `damage combines configured bonuses before entity multiplier and ignores flight and headshots for melee`() {
    val config =
        YamlConfiguration().apply {
          set("Shooting.Projectile_Damage", 13)
          set("Damage_Based_On_Flight_Time.Enable", true)
          set("Damage_Based_On_Flight_Time.Bonus_Damage_Per_Tick", -2)
          set("Damage_Based_On_Flight_Time.Maximum_Damage", -7)
          set("Headshot.Enable", true)
          set("Headshot.Bonus_Damage", 11)
          set("Backstab.Enable", true)
          set("Backstab.Bonus_Damage", 3)
          set("Critical_Hits.Enable", true)
          set("Critical_Hits.Bonus_Damage", 5)
          set("Abilities.Super_Effective", "COW-2")
        }
    val w = WeaponDefinition("Example", config, Material.BOOK)
    assertEquals(50.0, hitDamage(w, 8, true, true, false, true, "COW"))
    assertEquals(42.0, hitDamage(w, 8, true, true, true, true, "COW"))
    assertEquals(6.0, hitDamage(w, 8, false, false, false, false, "PIG"))
    for (section in
        listOf("Headshot", "Backstab", "Critical_Hits", "Damage_Based_On_Flight_Time")) {
      config.set("$section.Enable", false)
    }
    assertEquals(13.0, hitDamage(w, 8, true, true, false, true, "PIG"))
    config.set("Abilities.Super_Effective", "COW-0")
    assertEquals(0.0, hitDamage(w, 8, true, true, false, true, "COW"))
    config.set("Damage_Based_On_Flight_Time.Enable", true)
    config.set("Damage_Based_On_Flight_Time.Maximum_Damage", -100)
    assertEquals(0.0, hitDamage(w, 8, false, false, false, false, "PIG"))
  }

  @Test
  fun `sound defaults and delayed melody preserve values`() {
    assertEquals(WeaponSound("NOTE_PIANO", 1f, 1f, 0), WeaponEffectValues.sound(" NOTE_PIANO "))
    assertEquals(
        WeaponSound("NOTE_PIANO", 2f, .75f, 12),
        WeaponEffectValues.sound("NOTE_PIANO-2-0.75-12"),
    )
    assertEquals(
        WeaponSound("NOTE_PIANO", 2f, 1f, 12),
        WeaponEffectValues.sound("NOTE_PIANO-2--12"),
    )
    assertNull(WeaponEffectValues.sound("NOTE_PIANO-x-1-2"))
    assertNull(WeaponEffectValues.sound("NOTE_PIANO-1-1-x"))
    assertNull(WeaponEffectValues.sound("NOTE_PIANO-NaN-1-2"))
  }

  @Test
  fun `potion aliases use ticks and convert level to zero based amplifier`() {
    assertEquals(WeaponPotion("haste", 80, 2), WeaponEffectValues.potion("FAST_DIGGING-80-3"))
    assertEquals(WeaponPotion("slowness", 12, 0), WeaponEffectValues.potion(" slow-12-1 "))
    assertNull(WeaponEffectValues.potion("SPEED-20-0"))
    assertNull(WeaponEffectValues.potion("SPEED-negative-1"))
  }

  @Test
  fun `chance uses exclusive upper bound`() {
    assertFalse(WeaponEffectValues.chance(25.0, 25.0))
    assertTrue(WeaponEffectValues.chance(25.0, 24.999))
    assertFalse(WeaponEffectValues.chance(0.0, 0.0))
    assertTrue(WeaponEffectValues.chance(100.0, 99.999))
    assertFalse(WeaponEffectValues.chance(Double.NaN, 0.0))
  }

  @Test
  fun `flight damage caps reduction and bonus`() {
    assertEquals(-3.0, WeaponEffectValues.flightBonus(3, -1.0, -5.0))
    assertEquals(-5.0, WeaponEffectValues.flightBonus(9, -1.0, -5.0))
    assertEquals(6.0, WeaponEffectValues.flightBonus(3, 2.0, 9.0))
    assertEquals(9.0, WeaponEffectValues.flightBonus(8, 2.0, 9.0))
    assertEquals(0.0, WeaponEffectValues.flightBonus(-1, -1.0, -5.0))
  }

  @Test
  fun `entity multiplier uses exact case insensitive type`() {
    assertEquals(2.5, WeaponEffectValues.multiplier("COW-2.5,ZOMBIE-0.5", "cow"))
    assertEquals(.5, WeaponEffectValues.multiplier("COW-2.5,ZOMBIE-0.5", "ZOMBIE"))
    assertEquals(1.0, WeaponEffectValues.multiplier("COW-2.5", "MUSHROOM_COW"))
    assertEquals(1.0, WeaponEffectValues.multiplier("COW-invalid", "COW"))
  }
}
