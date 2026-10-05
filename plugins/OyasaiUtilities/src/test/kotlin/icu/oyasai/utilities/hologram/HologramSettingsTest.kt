package icu.oyasai.utilities.hologram

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class HologramSettingsTest {
  @Test
  fun `old booleans preserve the original appearance`() {
    val file = File.createTempFile("holograms", ".yml")
    try {
      for ((raw, expected) in
          listOf(
              "" to BackgroundType.DEFAULT,
              "background: true" to BackgroundType.DEFAULT,
              "background: false" to BackgroundType.TRANSPARENT,
          )) {
        file.writeText(
            "holograms:\n- name: old\n  world: world\n  x: 1\n  y: 2\n  z: 3\n  lines: [hello]\n  $raw\n"
        )
        val holo = readHolograms(file).getValue("old")
        assertEquals(expected, holo.background)
        assertEquals(1f, holo.scale)
        assertEquals(DisplayMode.NORMAL, holo.mode)
        assertTrue(holo.follow)
        assertFalse(holo.shadow)
        assertFalse(holo.vertical)
        assertEquals(2 - TEXT_HEIGHT, lineY(holo.y, 0, holo.scale))
      }
    } finally {
      file.delete()
    }
  }

  @Test
  fun `all settings roundtrip and invalid numbers fall back safely`() {
    val file = File.createTempFile("holograms", ".yml")
    try {
      val holo =
          Hologram(
              "new",
              "world",
              -1.0,
              64.0,
              2.0,
              listOf("&ahello", "&#ff0000world"),
              true,
              viewRange = 2f,
              seeThrough = false,
              background = BackgroundType.BLACK,
              scale = 1.5f,
              vertical = true,
              shadow = true,
              follow = false,
              yaw = 123f,
              mode = DisplayMode.END_ROLL,
              windowLines = 8,
              scrollSpeed = 25,
              playMode = PlayMode.MANUAL,
              proximityRange = 30.0,
          )
      writeHolograms(file, listOf(holo))
      assertEquals(holo, readHolograms(file).getValue("new"))
      assertFalse(file.readText().contains("isPlaying"))
      file.writeText(
          file
              .readText()
              .replace("scale: 1.5", "scale: .NaN")
              .replace("windowLines: 8", "windowLines: -5")
              .replace("scrollSpeed: 25", "scrollSpeed: 0")
      )
      val safe = readHolograms(file).getValue("new")
      assertEquals(1f, safe.scale)
      assertEquals(1, safe.windowLines)
      assertEquals(5, safe.scrollSpeed)
      assertEquals(64 - (LINE_HEIGHT + TEXT_HEIGHT) * 1.5, lineY(64.0, 1, 1.5f))
    } finally {
      file.delete()
    }
  }

  @Test
  fun `end roll enters from the bottom and leaves at the top before looping`() {
    val lines = listOf("a", "b", "c")
    assertEquals(listOf("", "", "a"), endRollWindow(lines, 2, 0))
    assertEquals(listOf("", "a", "b"), endRollWindow(lines, 2, 1))
    assertEquals(listOf("a", "b", "c"), endRollWindow(lines, 2, 2))
    assertEquals(listOf("b", "c", ""), endRollWindow(lines, 2, 3))
    assertEquals(listOf("c", "", ""), endRollWindow(lines, 2, 4))
    assertEquals(endRollWindow(lines, 2, 0), endRollWindow(lines, 2, 5))
    assertEquals(listOf("", "", ""), endRollWindow(emptyList(), 2, 10))
    assertEquals(listOf("", "a"), endRollWindow(lines, 1, 0))
  }

  @Test
  fun `vertical columns keep colors unicode and reset padding`() {
    assertEquals(
        listOf("&r&bＣ&r　&r&aＡ", "&r　&r　&r&aＢ"),
        verticalHologramLines(listOf("&aAB", "§bC")),
    )
    assertEquals(
        listOf("&r&#ff0000猫", "&r&#ff0000😀"),
        verticalHologramLines(listOf("<#ff0000>猫😀")),
    )
    assertEquals(emptyList(), verticalHologramLines(emptyList()))
    assertEquals(emptyList(), verticalHologramLines(listOf("&a")))
    assertEquals(listOf("&r&l猫", "&r&l犬"), verticalHologramLines(listOf("<ANIM:wave>&l猫犬</ANIM>")))
  }

  @Test
  fun `gradient uses existing hex notation and preserves literal text`() {
    assertEquals(
        "&#ff0000猫&#7f007f😀&#0000ff犬",
        gradientHologramText("&a猫😀犬", listOf(0xff0000, 0x0000ff)),
    )
    assertEquals("&#ff0000猫", gradientHologramText("猫", listOf(0xff0000, 0x0000ff)))
    assertEquals("", gradientHologramText("", listOf(0xff0000)))
    assertEquals(" a ", plainHologramText("&a a "))
  }
}
