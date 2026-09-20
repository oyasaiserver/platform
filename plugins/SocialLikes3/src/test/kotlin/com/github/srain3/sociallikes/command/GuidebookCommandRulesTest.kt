package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.datas.GuidebookType
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class GuidebookCommandRulesTest {
  @Test
  fun `empty and catalog commands open the catalog`() {
    assertEquals(GuidebookAction.Catalog, GuidebookCommandRules.parse(emptyList()))
    assertEquals(GuidebookAction.Catalog, GuidebookCommandRules.parse(listOf("catalog")))
  }

  @Test
  fun `editor mutations parse only exact integer arguments`() {
    assertEquals(
        GuidebookAction.Move(10, 20, -1),
        GuidebookCommandRules.parse(listOf("move", "10", "20", "-1")),
    )
    assertEquals(
        GuidebookAction.Remove(10, 20),
        GuidebookCommandRules.parse(listOf("remove", "10", "20")),
    )
    assertEquals(
        GuidebookAction.Create(GuidebookType.OFFICIAL),
        GuidebookCommandRules.parse(listOf("create", "official")),
    )
    assertNull(GuidebookCommandRules.parse(listOf("move", "10", "20", "2")))
    assertNull(GuidebookCommandRules.parse(listOf("remove", "10", "x")))
    assertNull(GuidebookCommandRules.parse(listOf("toggle", "10", "extra")))
  }

  @Test
  fun `delete requires the explicit confirmation command`() {
    assertEquals(
        GuidebookAction.DeleteRequest(10),
        GuidebookCommandRules.parse(listOf("delete-request", "10")),
    )
    assertEquals(
        GuidebookAction.DeleteConfirm(10),
        GuidebookCommandRules.parse(listOf("delete-confirm", "10")),
    )
    assertNull(GuidebookCommandRules.parse(listOf("delete", "10")))
  }
}
