package io.oyasai.oyasaiAdminTools.assistant

import ai.koog.agents.core.agent.AIAgent
import ai.koog.agents.core.tools.ToolDescriptor
import ai.koog.agents.core.tools.ToolRegistry
import ai.koog.agents.testing.tools.getMockExecutor
import ai.koog.prompt.Prompt
import ai.koog.prompt.executor.model.PromptExecutor
import ai.koog.prompt.llm.LLMCapability
import ai.koog.prompt.llm.LLMProvider
import ai.koog.prompt.llm.LLModel
import ai.koog.prompt.message.Message
import kotlin.test.*
import kotlinx.coroutines.delay
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeoutOrNull

class AssistantStrategyTest {
  @Test
  fun failedOrBlankSummaryReturnsShortFallbackOnlyOnce() = runBlocking {
    for (fail in listOf(false, true)) {
      var summaries = 0
      val progress = AssistantProgress()
      val tool =
          AssistantTool("read_doc", "offline", emptyList()) { "RAW_RESULT_SHOULD_NOT_APPEAR" }
      val executor = getMockExecutor {
        mockLLMToolCall(tool, emptyMap()) onRequestEquals "調べて"
        mockLLMAnswer("") onCondition
            {
              if (it.contains(AssistantProgress.SUMMARY_PROMPT)) {
                summaries++
                if (fail) error("Offline summary failure")
                true
              } else false
            }
      }
      val model =
          LLModel(
              provider = LLMProvider.OpenRouter,
              id = "offline",
              capabilities = listOf(LLMCapability.Completion, LLMCapability.Tools),
          )
      val agent =
          AIAgent(
              executor,
              model,
              toolRegistry =
                  ToolRegistry {
                    tool(tool)
                    tool(progress.finish)
                  },
              strategy = progress.strategy(1),
              maxIterations = 14,
          )
      try {
        val answer = agent.run("調べて")
        assertEquals(1, summaries)
        assertTrue(answer.length < 120)
        assertFalse(answer.contains("RAW_RESULT"))
        assertContains(answer, "もう一度")
      } finally {
        agent.close()
        executor.close()
      }
    }
  }

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
        AssistantTool("run_command", "offline", emptyList()) {
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
      assertEquals(listOf("run_command", "finish"), observed)
    } finally {
      agent.close()
      executor.close()
    }

    queries = 0
    val limited = AssistantProgress()
    val repeating = getMockExecutor {
      mockLLMToolCall(
          listOf(query to emptyMap(), query to emptyMap(), query to emptyMap())
      ) onRequestEquals "調べ続けて"
      mockLLMAnswer("条件達成は確認できましたが、操作は未完了です。") onRequestContains AssistantProgress.SUMMARY_PROMPT
    }
    var summaries = 0
    val checked =
        object : PromptExecutor() {
          override suspend fun execute(
              prompt: Prompt,
              model: LLModel,
              tools: List<ToolDescriptor>,
          ): Message.Assistant {
            if (
                prompt.messages.last().parts.any {
                  it is ai.koog.prompt.message.MessagePart.Text &&
                      it.text.contains(AssistantProgress.SUMMARY_PROMPT)
                }
            ) {
              summaries++
              assertTrue(tools.isEmpty())
              assertNull(prompt.params.toolChoice)
            }
            return repeating.execute(prompt, model, tools)
          }

          override fun executeStreaming(
              prompt: Prompt,
              model: LLModel,
              tools: List<ToolDescriptor>,
          ) = repeating.executeStreaming(prompt, model, tools)

          override suspend fun moderate(prompt: Prompt, model: LLModel) =
              repeating.moderate(prompt, model)

          override fun close() = repeating.close()
        }
    val capped =
        AIAgent(
            checked,
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
      assertEquals("条件達成は確認できましたが、操作は未完了です。", answer)
      assertEquals(1, summaries)
      assertFalse(limited.partial("時間制限").contains("条件達成"))
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
      assertFalse(timed.partial("時間制限").contains("取得済みの条件"))
    } finally {
      timeoutAgent.close()
      delayed.close()
    }

    val textOnly = AssistantProgress()
    val ignoring = getMockExecutor {
      mockLLMAnswer("確認します").asDefaultResponse
      mockLLMAnswer("必要な情報を取得できませんでした。") onRequestContains AssistantProgress.SUMMARY_PROMPT
    }
    val bounded =
        AIAgent(
            ignoring,
            model,
            toolRegistry = ToolRegistry { tool(textOnly.finish) },
            strategy = textOnly.strategy(1),
            maxIterations = 14,
        )
    try {
      assertEquals("必要な情報を取得できませんでした。", bounded.run("調べて"))
    } finally {
      bounded.close()
      ignoring.close()
    }
  }
}
