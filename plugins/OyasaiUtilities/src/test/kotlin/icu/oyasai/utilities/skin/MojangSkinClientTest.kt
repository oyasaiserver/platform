package icu.oyasai.utilities.skin

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertTrue

class MojangSkinClientTest {
  @Test
  fun `Mojang URLs use the documented endpoints`() {
    assertEquals(
        "https://api.mojang.com/users/profiles/minecraft/Dinnerbone",
        MojangUrls.profile("Dinnerbone").toString(),
    )
    assertEquals(
        "https://sessionserver.mojang.com/session/minecraft/profile/" +
            "069a79f444e94726a5befca90e38aaf5?unsigned=false",
        MojangUrls.session(UUID.fromString("069a79f4-44e9-4726-a5be-fca90e38aaf5")).toString(),
    )
  }

  @Test
  fun `parses a signed texture property`() {
    val uuid = MojangResponseParser.profileId("""{"id":"069a79f444e94726a5befca90e38aaf5"}""")
    assertEquals(UUID.fromString("069a79f4-44e9-4726-a5be-fca90e38aaf5"), uuid)
    val texture =
        MojangResponseParser.texture(
            """{"properties":[{"name":"textures","value":"texture-value","signature":"signature"}]}""",
            1234,
        )
    assertNotNull(texture)
    assertEquals(SkinTexture("texture-value", "signature", 1234), texture)
  }

  @Test
  fun `cache expires after its maximum age`() {
    val cached = SkinTexture("value", "signature", 1_000)
    assertTrue(SkinCache.isFresh(cached, 1_000 + SkinCache.maxAgeMillis))
    assertFalse(SkinCache.isFresh(cached, 1_001 + SkinCache.maxAgeMillis))
  }
}
