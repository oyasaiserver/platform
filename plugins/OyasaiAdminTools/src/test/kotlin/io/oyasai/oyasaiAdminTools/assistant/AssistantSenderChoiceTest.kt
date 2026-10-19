package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*

class AssistantSenderChoiceTest {
  @Test
  fun knownPlayerCommandsAndRuntimeFallback() {
    assertTrue(AssistantSenderChoice.operator("minecraft:tp pmzt", AssistantSenderChoice.defaults))
    assertFalse(AssistantSenderChoice.operator("bukkit:plugins", AssistantSenderChoice.defaults))
    assertFalse(AssistantSenderChoice.operator("minecraft:tp pmzt", emptyList()))
    for (output in
        listOf(
            "Only players can use this command",
            "This command can only be executed by a player",
            "プレイヤーのみ使用できます",
        )) assertTrue(AssistantSenderChoice.playerRequired(output), output)
    assertFalse(AssistantSenderChoice.playerRequired("昇格条件を満たしています"))
  }
}
