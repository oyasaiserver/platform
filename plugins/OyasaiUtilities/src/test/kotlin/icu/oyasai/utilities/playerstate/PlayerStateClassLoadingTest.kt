package icu.oyasai.utilities.playerstate

import kotlin.test.Test
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class PlayerStateClassLoadingTest {
  @Test
  fun `core feature types load and reflect with Essentials absent`() {
    val loader = javaClass.classLoader
    assertFailsWith<ClassNotFoundException> {
      Class.forName("com.earth2me.essentials.Essentials", false, loader)
    }
    listOf("PlayerStateFeature", "PlayerStateCommands", "PlayerStateRules", "PlayerStateBridge")
        .forEach { name ->
          val type = Class.forName("icu.oyasai.utilities.playerstate.$name", true, loader)
          // Reflection resolves method and constructor signatures as Bukkit registration does.
          assertTrue(type.declaredMethods.isNotEmpty(), name)
          type.declaredConstructors
        }
  }
}
