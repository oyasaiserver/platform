package io.oyasai.oyasaiAdminTools.assistant

import ai.koog.agents.core.dsl.builder.node
import ai.koog.agents.core.dsl.builder.strategy
import ai.koog.agents.core.environment.ReceivedToolResult
import ai.koog.prompt.message.Message
import ai.koog.prompt.message.MessagePart
import kotlin.coroutines.cancellation.CancellationException

internal class AssistantProgress(private val onResult: (String, String) -> Unit = { _, _ -> }) {
  private var answer: String? = null
  val finish =
      AssistantTool("finish", "調査・提案を終え、分かったことと確認待ちの内容を日本語で回答する", listOf("answer")) {
        val text = it["answer"].orEmpty()
        if (text.isBlank()) "拒否: 最終回答が空です。" else text.also { answer = it }
      }

  fun partial(reason: String): String = "$reason。回答をまとめられませんでした。対象を絞ってもう一度依頼してください。"

  companion object {
    const val SUMMARY_PROMPT =
        "ここまでで分かったことを日本語で短くまとめて答えてください。道具は使わず、生の道具の結果を並べないでください。未確認・未完了のことはそう明記してください。"
  }

  // Each request gets its own graph and state; even a provider ignoring required tools is bounded.
  fun strategy(maxToolCalls: Int) =
      strategy<String, String>("assistant_until_finish") {
        var calls = 0
        var rounds = 0
        val setup by
            node<String, Unit> { input -> llm.writeSession { appendPrompt { user(input) } } }
        val request by
            node<Unit, Message.Assistant> {
              rounds++
              llm.writeSession { requestLLMOnlyCallingTools() }
            }
        val execute by
            node<Message.Assistant, Unit> { response ->
              val toolCalls = response.parts.filterIsInstance<MessagePart.Tool.Call>()
              val completed = mutableListOf<ReceivedToolResult>()
              for (call in toolCalls) {
                if (calls >= maxToolCalls || answer != null) break
                calls++
                val result = environment.executeTool(call)
                onResult(call.tool, result.output)
                completed.add(result)
              }
              if (toolCalls.isNotEmpty()) {
                llm.writeSession {
                  appendPrompt {
                    user {
                      toolCalls.forEachIndexed { index, call ->
                        toolResult(
                            completed.getOrNull(index)?.toMessagePart()
                                ?: MessagePart.Tool.Result(
                                    id = call.id,
                                    tool = call.tool,
                                    parts = listOf(MessagePart.Text("上限または終了済みのため実行していません。")),
                                    isError = true,
                                )
                        )
                      }
                    }
                  }
                }
              }
              if (toolCalls.isEmpty()) {
                llm.writeSession { appendPrompt { user("途中経過だけで終わらず、次の道具か finish を呼んでください。") } }
              }
            }
        val done by
            node<Unit, String> {
              answer
                  ?: try {
                    llm.writeSession {
                          appendPrompt { user(SUMMARY_PROMPT) }
                          val response = requestLLMWithoutTools()
                          if (response.parts.any { it is MessagePart.Tool.Call }) ""
                          else
                              response.parts
                                  .filterIsInstance<MessagePart.Text>()
                                  .joinToString("\n") { it.text }
                                  .trim()
                        }
                        .ifBlank { partial("道具または応答回数の上限に達しました") }
                  } catch (cancelled: CancellationException) {
                    throw cancelled
                  } catch (_: Exception) {
                    partial("道具または応答回数の上限に達しました")
                  }
            }
        edge(nodeStart forwardTo setup)
        edge(setup forwardTo request)
        edge(request forwardTo execute)
        edge(
            execute forwardTo
                done onCondition
                {
                  answer != null || calls >= maxToolCalls || rounds >= maxToolCalls + 1
                }
        )
        edge(
            execute forwardTo
                request onCondition
                {
                  answer == null && calls < maxToolCalls && rounds < maxToolCalls + 1
                }
        )
        edge(done forwardTo nodeFinish)
      }
}
