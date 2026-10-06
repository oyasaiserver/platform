package icu.oyasai.utilities.teleport

import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class TravelClassLoadingTest {
  @Test
  fun `travel and spawn types load and reflect without Essentials`() {
    val loader = javaClass.classLoader
    assertFailsWith<ClassNotFoundException> {
      Class.forName("com.earth2me.essentials.Essentials", false, loader)
    }
    listOf(
            "icu.oyasai.utilities.teleport.TeleportFeature",
            "icu.oyasai.utilities.teleport.TravelBridge",
            "icu.oyasai.utilities.spawn.SpawnFeature",
        )
        .forEach { name ->
          val type = Class.forName(name, true, loader)
          assertTrue(type.declaredMethods.isNotEmpty(), name)
          type.declaredConstructors
          type.declaredFields
        }
  }
}
