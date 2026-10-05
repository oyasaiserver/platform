package icu.oyasai.games.weapons

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class WeaponNamesTest {
  @Test
  fun `unknown formatting markers retain their text but normalize legacy notation`() {
    assertEquals("&zExample", WeaponNames.base("§zExample ▪ «9»"))
    assertEquals(
        "&zExample",
        WeaponNames.match("§zExample ▪ «9»", listOf("&zExample")) { listOf(it) },
    )
    assertNull(WeaponNames.match("Example", listOf("&zExample")) { listOf(it) })
  }

  @Test
  fun `colored names and numeric magazines retain identity and ammunition`() {
    assertEquals("Example Beam", WeaponNames.base("§bExample Beam §7▪ §e«5»"))
    assertEquals(5, WeaponNames.rounds("§bExample Beam §7▪ §e«5»"))
    assertEquals("Example Beam", WeaponNames.base("&bExample Beam"))
    assertEquals("Example Beam", WeaponNames.base("§bExample Beam □ «0»"))
    assertEquals(0, WeaponNames.rounds("Example Beam «0»"))
    assertNull(WeaponNames.rounds("Example Beam «×»"))
    assertEquals("Example Beam", WeaponNames.base("Example Beam «×»"))
    assertEquals("Example Beam", WeaponNames.base("§bExample Beam «3 | 7»"))
    assertEquals(7, WeaponNames.rounds("Example Beam «3 | 7»"))
    assertEquals(3, WeaponNames.rounds("Example Beam «3 | 7»", left = true))
    assertEquals("Example Beam", WeaponNames.base("Example Beam «3|7»"))
  }

  @Test
  fun `matching is exact and rejects ambiguity instead of choosing a weapon`() {
    val definitions = listOf("Example", "Example Plus")
    assertEquals("Example", WeaponNames.match("§aExample ▪ «7»", definitions) { listOf(it) })
    assertNull(WeaponNames.match("Renamed Example", definitions) { listOf(it) })
    assertNull(WeaponNames.match("Example", definitions) { listOf("Example") })
    assertNull(WeaponNames.match("", definitions) { listOf(it) })
    assertEquals("Example Plus", WeaponNames.match("Example Plus", definitions) { listOf(it) })
  }

  @Test
  fun `reload and open action markers preserve identity and numeric ammunition`() {
    for (name in listOf("Example ▫ «5»ᴿ", "Example ▫ «5» ᴿ", "Example ▫ «×»ᴿ", "Example ▫")) {
      assertEquals("Example", WeaponNames.base(name))
      assertEquals("Example", WeaponNames.match(name, listOf("Example")) { listOf(it) })
    }
    assertEquals(5, WeaponNames.rounds("Example ▫ «5»ᴿ"))
    assertEquals("ExampleᴿInside", WeaponNames.base("ExampleᴿInside"))
  }

  @Test
  fun `legacy action markers survive the first ammunition rewrite`() {
    assertEquals("▪", WeaponNames.actionMarker("Example ▪ «5»"))
    assertEquals("▫", WeaponNames.actionMarker("Example ▫ «4»ᴿ"))
    assertEquals("_", WeaponNames.actionMarker("Example _ «0»"))
    assertNull(WeaponNames.actionMarker("Example «5»"))
    assertNull(WeaponNames.actionMarker("ExampleᴿInside"))
  }
}
