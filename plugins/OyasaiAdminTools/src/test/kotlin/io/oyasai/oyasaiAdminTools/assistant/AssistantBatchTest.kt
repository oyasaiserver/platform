package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*

class AssistantBatchTest {
  @Test
  fun acceptsOneToTwentyCommandsAndRejectsEmptyOrOversizedBatches() {
    assertEquals(
        listOf("//set stone", "//walls glass"),
        AssistantBatch.parse("//set stone\r\n//walls glass"),
    )
    assertEquals(20, AssistantBatch.parse(List(20) { "plugins" }.joinToString("\n")).size)
    for (text in
        listOf("", "plugins\n", "plugins\n\nplugins", List(21) { "plugins" }.joinToString("\n"))) {
      assertFails { AssistantBatch.parse(text) }
    }
  }

  @Test
  fun onlyAuditedFaweBlockEditsGetMaskAllowance() {
    for (command in
        listOf("/set stone", "/walls glass", "/paste", "brush sphere stone 3")) assertTrue(
        AssistantBatch.maskedEdit("fastasyncworldedit:$command"),
        command,
    )
    for (command in
        listOf(
            "/regen",
            "/undo",
            "/redo",
            "history rollback",
            "restore",
            "superpickaxe recursive",
            "brush command /stop",
            "brush scattercommand /stop",
            "brush butcher",
            "/paste -e",
            "/paste -x",
            "/paste -nx",
            "/move -eb",
            "/setbiome plains",
            "gtransform rotate 90",
            "unknown",
        )) assertFalse(AssistantBatch.maskedEdit("fastasyncworldedit:$command"), command)
    assertFalse(AssistantBatch.maskedEdit("minecraft:fill 0 0 0 1 1 1 air"))
    for (command in listOf("gmask", "/gmask #region", "mask stone", "/mask #region")) assertTrue(
        AssistantBatch.maskChange("fastasyncworldedit:$command"),
        command,
    )
    assertFalse(AssistantBatch.maskChange("other:gmask"))
  }
}
