package io.oyasai.oyasaiAdminTools.assistant

import java.nio.file.Files
import java.util.logging.Handler
import java.util.logging.LogRecord
import java.util.logging.Logger
import kotlin.test.*
import kotlinx.coroutines.TimeoutCancellationException
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withTimeout

class AssistantPiTest {
  private val ready =
      """echo '{"type":"ready","protocol":1,"tools":["get_context","run_command","read","bash","write","edit","search_memory"]}'"""
  private val request =
      """IFS= read -r request
id=${'$'}(printf '%s' "${'$'}request" | sed -E 's/.*"id":"([^"]+)".*/\1/')"""

  private fun fixture(body: String, action: (AssistantPi, List<Long>) -> Unit) {
    val script = Files.createTempFile("assistant-pi-fixture", ".sh")
    Files.writeString(
        script,
        """
      test "${'$'}1" = 'argument with spaces' || exit 1
      test -z "${'$'}OYASAI_ASSISTANT_API_KEY" || exit 1
      test -z "${'$'}JAVA_HOME" || exit 1
      $ready
      $request
      $body
      """
            .trimIndent(),
    )
    val pids = java.util.concurrent.CopyOnWriteArrayList<Long>()
    val logger =
        Logger.getAnonymousLogger().apply {
          useParentHandlers = false
          addHandler(
              object : Handler() {
                override fun publish(record: LogRecord) {
                  if (record.message.contains("started pid="))
                      pids.add(record.message.substringAfter("pid=").toLong())
                }

                override fun flush() {}

                override fun close() {}
              }
          )
        }
    val backend =
        AssistantPi(
            listOf("/bin/sh", script.toString(), "argument with spaces"),
            "fake-test-key",
            "fake",
            1000,
            logger,
        )
    try {
      action(backend, pids)
    } finally {
      backend.close()
      assertTrue(pids.none { ProcessHandle.of(it).map { p -> p.isAlive }.orElse(false) })
      Files.delete(script)
    }
  }

  @Test
  fun toolsUseTheSuppliedPolicyAndReturnAnAnswer() =
      fixture(
          """
          echo "{\"type\":\"tool\",\"id\":\"${'$'}id\",\"callId\":\"one\",\"name\":\"run_command\",\"args\":{\"command\":\"syokaku iscandidate pmzt\",\"summary\":\"pmztの条件を照会\"}}"
          IFS= read -r result
          echo "{\"type\":\"answer\",\"id\":\"${'$'}id\",\"answer\":\"本人の確認待ちです。\"}"
          IFS= read -r hold
          """
              .trimIndent()
      ) { backend, _ ->
        runBlocking {
          var command = ""
          val tool =
              AssistantTool("run_command") {
                command = it.getValue("command")
                "本人確認待ち"
              }
          val answer =
              withTimeout(3000) {
                backend.run("test", 12, mapOf("run_command" to tool), AssistantProgress())
              }
          assertEquals("syokaku iscandidate pmzt", command)
          assertContains(answer, "確認待ち")
        }
      }

  @Test
  fun deathFailsTheRequestAndNextRequestStartsAnotherChild() =
      fixture("exit 1") { backend, pids ->
        runBlocking {
          repeat(2) {
            assertFails {
              withTimeout(3000) { backend.run("test", 12, emptyMap(), AssistantProgress()) }
            }
          }
          assertEquals(2, pids.size)
        }
      }

  @Test
  fun cancellationStopsTheChildAndUnexpectedToolsNeverRun() {
    fixture("IFS= read -r hold") { backend, _ ->
      runBlocking {
        assertFailsWith<TimeoutCancellationException> {
          withTimeout(200) { backend.run("test", 12, emptyMap(), AssistantProgress()) }
        }
      }
    }
    fixture(
        """echo "{\"type\":\"tool\",\"id\":\"${'$'}id\",\"callId\":\"bad\",\"name\":\"bash\",\"args\":{}}"
IFS= read -r hold"""
    ) { backend, _ ->
      runBlocking {
        assertFails {
          withTimeout(3000) { backend.run("test", 12, emptyMap(), AssistantProgress()) }
        }
      }
    }
  }
}
