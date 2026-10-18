package io.oyasai.oyasaiAdminTools.assistant

import ai.koog.agents.core.agent.AIAgent
import ai.koog.agents.core.tools.ToolRegistry
import ai.koog.agents.testing.tools.getMockExecutor
import ai.koog.prompt.llm.LLMCapability
import ai.koog.prompt.llm.LLMProvider
import ai.koog.prompt.llm.LLModel
import kotlin.test.*
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeoutOrNull

class AssistantStrategyTest {
  @Test
  fun textContinuesUntilFinishOrBudgetAndPreservesKnownResults() = runBlocking {
    val model =
        LLModel(
            provider = LLMProvider.OpenRouter,
            id = "offline",
            capabilities = listOf(LLMCapability.Completion, LLMCapability.Tools),
        )
    var queries = 0
    val query =
        AssistantTool("run_query", "offline", emptyList()) {
          queries++
          "条件達成"
        }
    val observed = mutableListOf<String>()
    val progress = AssistantProgress { name, _ -> observed.add(name) }
    val executor = getMockExecutor {
      mockLLMAnswer("確認します") onRequestEquals "昇格して"
      mockLLMToolCall(query, emptyMap()) onRequestContains "途中経過だけで終わらず"
      mockLLMToolCall(
          listOf(progress.finish to mapOf("answer" to "条件達成を確認しました"), query to emptyMap())
      ) onRequestContains "条件達成"
    }
    val agent =
        AIAgent(
            executor,
            model,
            toolRegistry =
                ToolRegistry {
                  tool(query)
                  tool(progress.finish)
                },
            strategy = progress.strategy(3),
            maxIterations = 22,
        )
    try {
      assertEquals("条件達成を確認しました", agent.run("昇格して"))
      assertEquals(1, queries)
      assertEquals(listOf("run_query", "finish"), observed)
    } finally {
      agent.close()
      executor.close()
    }

    queries = 0
    val limited = AssistantProgress()
    val repeating = getMockExecutor {
      mockLLMToolCall(
          listOf(query to emptyMap(), query to emptyMap(), query to emptyMap())
      ) onRequestContains ""
    }
    val capped =
        AIAgent(
            repeating,
            model,
            toolRegistry =
                ToolRegistry {
                  tool(query)
                  tool(limited.finish)
                },
            strategy = limited.strategy(2),
            maxIterations = 18,
        )
    try {
      val answer = capped.run("調べ続けて")
      assertEquals(2, queries)
      assertContains(answer, "上限")
      assertContains(answer, "条件達成")
      assertContains(limited.partial("時間制限"), "条件達成")
    } finally {
      capped.close()
      repeating.close()
    }

    queries = 0
    val timed = AssistantProgress()
    val slow =
        AssistantTool("slow_query", "offline", emptyList()) {
          if (++queries > 1) delay(10_000)
          "取得済みの条件"
        }
    val delayed = getMockExecutor { mockLLMToolCall(slow, emptyMap()) onRequestContains "" }
    val timeoutAgent =
        AIAgent(
            delayed,
            model,
            toolRegistry =
                ToolRegistry {
                  tool(slow)
                  tool(timed.finish)
                },
            strategy = timed.strategy(3),
            maxIterations = 22,
        )
    try {
      assertNull(withTimeoutOrNull(500) { timeoutAgent.run("時間内に調べて") })
      assertContains(timed.partial("時間制限"), "取得済みの条件")
    } finally {
      timeoutAgent.close()
      delayed.close()
    }

    val textOnly = AssistantProgress()
    val ignoring = getMockExecutor { mockLLMAnswer("確認します").asDefaultResponse }
    val bounded =
        AIAgent(
            ignoring,
            model,
            toolRegistry = ToolRegistry { tool(textOnly.finish) },
            strategy = textOnly.strategy(1),
            maxIterations = 14,
        )
    try {
      assertContains(bounded.run("調べて"), "上限")
    } finally {
      bounded.close()
      ignoring.close()
    }
  }
}
