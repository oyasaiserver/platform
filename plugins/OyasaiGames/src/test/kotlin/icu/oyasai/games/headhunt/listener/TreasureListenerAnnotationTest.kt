package icu.oyasai.games.headhunt.listener

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority

class TreasureListenerAnnotationTest {
  @Test
  fun `state changing handlers ignore cancelled events at highest priority`() {
    for (methodName in
        listOf(
            "onInteract",
            "onBlockPlace",
            "onBlockBreak",
            "onBlockFromTo",
            "onEntityExplode",
            "onBlockExplode",
            "onPistonExtend",
            "onPistonRetract",
        )) {
      val method = TreasureListener::class.java.declaredMethods.single { it.name == methodName }
      val handler = method.getAnnotation(EventHandler::class.java)

      assertTrue(handler.ignoreCancelled)
      assertEquals(EventPriority.HIGHEST, handler.priority)
    }
  }

  @Test
  fun `quit handler is registered at default priority`() {
    val method = TreasureListener::class.java.declaredMethods.single { it.name == "onPlayerQuit" }
    val handler = method.getAnnotation(EventHandler::class.java)

    assertEquals(EventPriority.NORMAL, handler.priority)
    assertTrue(!handler.ignoreCancelled)
  }
}
