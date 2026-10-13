package icu.oyasai.utilities.workstation

import kotlin.test.*

class BedrockSkullTest {
  private val hash = "b".repeat(64)

  @Test
  fun `global api skin response yields the texture id`() {
    val body =
        """{"hash":"$hash","is_steve":false,"signature":"sig","texture_id":"$hash","value":"v"}"""
    assertEquals(hash, BedrockSkull.parseTextureId(body))
  }

  @Test
  fun `empty or malformed skin responses yield no texture`() {
    assertNull(BedrockSkull.parseTextureId("{}"))
    assertNull(BedrockSkull.parseTextureId("""{"texture_id":null}"""))
    assertNull(BedrockSkull.parseTextureId("""{"texture_id":"not-a-hash"}"""))
    assertNull(BedrockSkull.parseTextureId("not json"))
  }

  @Test
  fun `xuid must be digits before any request is sent`() {
    assertFailsWith<IllegalArgumentException> { BedrockSkull.textureId("2535-x") }
  }
}
