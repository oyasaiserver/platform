package com.github.srain3.sociallikes.command

import com.github.srain3.sociallikes.datas.GuidebookType
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class GuidebookCommandRulesTest {
  @Test
  fun `public and edit entry points parse exactly`() {
    assertEquals(GuidebookAction.Catalog, GuidebookCommandRules.parse(emptyList()))
    assertEquals(GuidebookAction.Read(12), GuidebookCommandRules.parse(listOf("12")))
    assertEquals(GuidebookAction.EditCatalog, GuidebookCommandRules.parse(listOf("edit")))
    assertEquals(GuidebookAction.Edit(12), GuidebookCommandRules.parse(listOf("edit", "12")))
    assertEquals(GuidebookAction.Editor(12), GuidebookCommandRules.parse(listOf("editor", "12")))
    assertEquals(GuidebookAction.Go(12, 34), GuidebookCommandRules.parse(listOf("go", "12", "34")))
    assertNull(GuidebookCommandRules.parse(listOf("go", "12", "x")))
    assertNull(GuidebookCommandRules.parse(listOf("go", "12", "34", "extra")))
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
        GuidebookAction.Create(GuidebookType.PERSONAL),
        GuidebookCommandRules.parse(listOf("create")),
    )
    assertEquals(
        GuidebookAction.Create(GuidebookType.OFFICIAL),
        GuidebookCommandRules.parse(listOf("create", "official")),
    )
    assertEquals(
        GuidebookAction.Comment(10, 20),
        GuidebookCommandRules.parse(listOf("comment", "10", "20")),
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

  @Test
  fun `removed book catalog commands stay removed`() {
    assertNull(GuidebookCommandRules.parse(listOf("catalog")))
    assertNull(GuidebookCommandRules.parse(listOf("info", "10")))
    assertNull(GuidebookCommandRules.parse(listOf("get", "10")))
    assertNull(GuidebookCommandRules.parse(listOf("editable")))
    assertNull(GuidebookCommandRules.parse(listOf("key", "10")))
    assertNull(GuidebookCommandRules.parse(listOf("create", "personal")))
  }
}
