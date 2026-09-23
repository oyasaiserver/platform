package com.github.srain3.sociallikes.command

import kotlin.test.Test
import kotlin.test.assertEquals

class TabCompletionTest {
  @Test
  fun `choices are prefix-filtered and hint shows only for empty argument`() {
    val choices = listOf("next", "back", "new")
    assertEquals(listOf("next", "back", "new", "<ID>"), completions("", choices, "<ID>"))
    assertEquals(listOf("next", "new"), completions("n", choices, "<ID>"))
    assertEquals(emptyList(), completions("12", choices, "<ID>"))
    assertEquals(listOf("[件数]"), completions("", emptyList(), "[件数]"))
  }
}
