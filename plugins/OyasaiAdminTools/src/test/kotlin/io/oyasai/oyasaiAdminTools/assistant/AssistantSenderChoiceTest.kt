package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*

class AssistantSenderChoiceTest {
  @Test
  fun multiWordPrefixesMatchWholeWordsAfterNamespace() {
    for (command in
        listOf("coreprotect:co i", "coreprotect:co inspect", "coreprotect:co near 10")) assertTrue(
        AssistantSenderChoice.operator(command, AssistantSenderChoice.defaults),
        command,
    )
    for (command in
        listOf(
            "coreprotect:co info",
            "coreprotect:co inspector",
            "coreprotect:co lookup",
            "coreprotect:co nearby",
        )) assertFalse(
        AssistantSenderChoice.operator(command, AssistantSenderChoice.defaults),
        command,
    )
    assertTrue(AssistantSenderChoice.operator("coreprotect:co inspect", listOf("CO INSPECT")))
  }

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
