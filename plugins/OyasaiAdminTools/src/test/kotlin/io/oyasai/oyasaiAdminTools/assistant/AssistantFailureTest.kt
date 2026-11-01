package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*

class AssistantFailureTest {
  @Test
  fun recordsBoundedCauseTypesAndFramesWithoutMessagesOrPaths() {
    val inner =
        ClassCastException("private player input").apply {
          stackTrace =
              Array(8) { StackTraceElement("plugin.Actor", "execute$it", "/private/source.kt", 42) }
        }
    val failure = IllegalStateException("credential", inner)
    val detail = AssistantFailure.describe(failure)
    assertContains(detail, "java.lang.IllegalStateException")
    assertContains(detail, "caused-by java.lang.ClassCastException")
    assertContains(detail, "plugin.Actor.execute0:42")
    for (hidden in
        listOf("private player input", "credential", "/private/", "execute4")) assertFalse(
        hidden in detail
    )
    val cycle = IllegalStateException().apply { initCause(failure) }
    inner.initCause(cycle)
    assertEquals(2, AssistantFailure.describe(failure).split("caused-by").size - 1)
  }
}
