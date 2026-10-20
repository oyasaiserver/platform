package io.oyasai.oyasaiAdminTools.assistant

import kotlin.test.*
import kotlinx.coroutines.runBlocking

class AssistantContinuationTest {
  @Test
  fun confirmedOutputReturnsToSameActorWithToolsAndCanProposeNextStep() = runBlocking {
    val tool = AssistantTool("run_command") { "次の確認待ち" }
    val tools = mapOf(tool.name to tool)
    val progress = AssistantProgress()
    val backend =
        object : AssistantBackend {
          override suspend fun run(
              request: String,
              maxToolCalls: Int,
              tools: Map<String, AssistantTool>,
              progress: AssistantProgress,
          ): String = error("Must use actor session")

          override suspend fun runFor(
              actor: String,
              request: String,
              maxToolCalls: Int,
              tools: Map<String, AssistantTool>,
              progress: AssistantProgress,
          ): String {
            assertEquals("operator-uuid", actor)
            assertContains(request, "dynamicprofile:syokaku iscandidate pmzt")
            assertContains(request, "pmzt 条件達成")
            assertContains(request, "観測結果")
            assertEquals(12, maxToolCalls)
            assertSame(tool, tools["run_command"])
            return tools.getValue("run_command").execute(mapOf("command" to "syokaku promote pmzt"))
          }

          override fun close() {}
        }
    assertEquals(
        "次の確認待ち",
        backend.continueAfterCommand(
            "operator-uuid",
            "dynamicprofile:syokaku iscandidate pmzt",
            "pmzt 条件達成",
            12,
            tools,
            progress,
        ),
    )
  }
}
