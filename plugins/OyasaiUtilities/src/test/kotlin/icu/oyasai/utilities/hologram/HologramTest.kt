package icu.oyasai.utilities.hologram

import java.io.File
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer

class HologramTest {
  @Test
  fun `normalizes section hex and anim tags`() {
    assertEquals("&e箱庭", normalizeHologramText("§e箱庭"))
    assertEquals(
        "&#b9ff28[マジパンポータル]",
        normalizeHologramText("<#b9ff28>[マジパンポータル]"),
    )
    assertEquals(
        "&#B22AFE&l&nSocial Likes",
        normalizeHologramText("<#B22AFE>&l&nSocial Likes</#ff8157>"),
    )
    assertEquals(
        "=ようこそ、新マジパン市へ！=",
        normalizeHologramText("<ANIM:wave:&b,&f>=ようこそ、新マジパン市へ！=</ANIM>"),
    )
    val legacy = LegacyComponentSerializer.builder().character('&').hexColors().build()
    assertEquals(
        legacy.deserialize("&#B22AFE&l&nSocial Likes"),
        hologramComponent("<#B22AFE>&l&nSocial Likes</#ff8157>"),
    )
    assertEquals(
        legacy.deserialize("これはなに？"),
        hologramComponent("<ANIM:wave:&b,&f>これはなに？</ANIM>"),
    )
  }

  @Test
  fun `parses one DecentHolograms file`() {
    val holo = parseDecentHologram("sociallikes", sociallikes)
    assertNotNull(holo)
    assertEquals("tuto", holo.world)
    assertEquals(-241.993, holo.x, 0.000_000_1)
    assertEquals(41.750, holo.y, 0.000_000_1)
    assertEquals(92.535, holo.z, 0.000_000_1)
    assertEquals(true, holo.enabled)
    assertEquals("<#B22AFE>&l&nSocial Likes</#ff8157>", holo.lines[0])
    assertEquals("<ANIM:wave:&b,&f>これはなに？</ANIM>", holo.lines[1])
    assertEquals(5, holo.lines.size)
    assertEquals("&#B22AFE&l&nSocial Likes", normalizeHologramText(holo.lines[0]))

    val disabled =
        parseDecentHologram(
            "QA_ja",
            """
            location: tuto:0:1:2
            enabled: false
            pages: []
            """
                .trimIndent(),
        )
    assertNotNull(disabled)
    assertFalse(disabled.enabled)
    assertEquals(emptyList(), disabled.lines)
    assertNull(parseDecentHologram("bad", "enabled: true\n"))
    assertNull(holo.viewRange)
    assertTrue(holo.seeThrough)
    assertEquals(41.750 - TEXT_HEIGHT, lineY(holo.y, 0), 0.000_000_1)
    assertEquals(41.750 - LINE_HEIGHT - TEXT_HEIGHT, lineY(holo.y, 1), 0.000_000_1)
  }

  @Test
  fun `roundtrips view range and see through and reads files without them`() {
    val file = File.createTempFile("holograms", ".yml")
    file.deleteOnExit()
    val tuned =
        Hologram(
            "tuned",
            "world",
            1.0,
            2.0,
            3.0,
            listOf("a"),
            enabled = true,
            viewRange = 2.5f,
            seeThrough = false,
        )
    val plain = tuned.copy(name = "plain", viewRange = null, seeThrough = true)
    writeHolograms(file, listOf(tuned, plain))
    val read = readHolograms(file)
    assertEquals(2.5f, read["tuned"]?.viewRange)
    assertEquals(false, read["tuned"]?.seeThrough)
    assertNull(read["plain"]?.viewRange)
    assertEquals(true, read["plain"]?.seeThrough)

    file.writeText(
        """
        holograms:
        - name: old
          world: world
          x: 1
          y: 2
          z: 3
          enabled: true
          lines:
          - hello
        """
            .trimIndent(),
    )
    val old = readHolograms(file)["old"]
    assertNotNull(old)
    assertNull(old.viewRange)
    assertTrue(old.seeThrough)
    assertEquals(listOf("hello"), old.lines)
  }
}

private val sociallikes =
    """
    location: tuto:-241.993:41.750:92.535
    enabled: true
    display-range: 48
    update-range: 48
    update-interval: 20
    facing: 0.0
    down-origin: false
    pages:
    - lines:
      - content: <#B22AFE>&l&nSocial Likes</#ff8157>
        height: 0.3
      - content: <ANIM:wave:&b,&f>これはなに？</ANIM>
        height: 0.3
      - content: '&a✔ &b建築にイイネを付けられる独自PLです'
        height: 0.3
        offsetX: 0.17
      - content: '&a✔ &bイイネすると1000円がもらえます'
        height: 0.3
      - content: '&a✔ &bイイネされると2ポイントもらえます'
        height: 0.3
        offsetX: 0.11
      actions: {}
    """
        .trimIndent()
