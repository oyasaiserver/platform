package io.oyasai.oyasaiAdminTools.assistant

import com.google.gson.JsonParser
import java.nio.file.Files
import kotlin.test.*

class AssistantContainerTest {
  @Test
  fun launchOnlyMountsDocsAndNeverPassesCredentials() {
    val docs = Files.createTempDirectory("container-docs")
    try {
      val command =
          AssistantPi.containerCommand(
              "/usr/bin/podman",
              "localhost/test:fixed",
              docs.toString(),
              "fake",
              "test-name",
          )
      for (flag in
          listOf(
              "--network=none",
              "--cap-drop=ALL",
              "--security-opt=no-new-privileges",
              "--read-only",
              "--user=1000:1000",
              "--memory=512m",
              "--cpus=1",
              "--pids-limit=64",
              "--pull=never",
          )) assertContains(command, flag)
      assertEquals(
          listOf("--volume=${docs.toRealPath()}:/docs:ro"),
          command.filter { it.startsWith("--volume=") },
      )
      assertEquals(listOf("--env=TMPDIR=/workspace"), command.filter { it.startsWith("--env=") })
      assertEquals(1, command.count { it.startsWith("--tmpfs=") })
      assertFalse(
          command.any { it.contains("KEY") || it.contains("socket") || it.contains("--privileged") }
      )
    } finally {
      Files.delete(docs)
    }
  }

  @Test
  fun containerRequestsAreFreshAndChildrenReceiveNoKey() {
    val root = Files.createTempDirectory("assistant-container-fixture")
    val executable = root.resolve("podman")
    Files.writeString(
        executable,
        """
        #!/bin/sh
              if [ "${'$'}1" = rm ]; then exit 0; fi
              test -z "${'$'}OYASAI_ASSISTANT_API_KEY" || exit 1
              echo '{"type":"ready","protocol":1,"tools":["get_context","run_command","read","bash","write","edit","search_memory"]}'
              IFS= read -r request || exit 0
              case "${'$'}request" in *'"text":"slow"'*) IFS= read -r hold; exit 0;; esac
              id=${'$'}(printf '%s' "${'$'}request" | sed -E 's/.*"id":"([^"]+)".*/\1/')
              echo "{\"type\":\"answer\",\"id\":\"${'$'}id\",\"answer\":\"完了\"}"
              while IFS= read -r request; do
                id=${'$'}(printf '%s' "${'$'}request" | sed -E 's/.*"id":"([^"]+)".*/\1/')
                case "${'$'}request" in *'"text":"slow"'*) IFS= read -r hold; exit 0;; esac
                echo "{\"type\":\"answer\",\"id\":\"${'$'}id\",\"answer\":\"完了\"}"
              done
        """
            .trimIndent(),
    )
    executable.toFile().setExecutable(true)
    val pids = java.util.concurrent.CopyOnWriteArrayList<Long>()
    val logger =
        java.util.logging.Logger.getAnonymousLogger().apply {
          useParentHandlers = false
          addHandler(
              object : java.util.logging.Handler() {
                override fun publish(record: java.util.logging.LogRecord) {
                  if (record.message.contains("started pid="))
                      pids.add(record.message.substringAfter("pid=").toLong())
                }

                override fun flush() {}

                override fun close() {}
              }
          )
        }
    try {
      AssistantPi(
              executable.toString(),
              "",
              root.toString(),
              "fake",
              "must-stay-in-host",
              1000,
              logger,
              "localhost/fake",
          )
          .use { backend ->
            kotlinx.coroutines.runBlocking {
              repeat(2) {
                assertEquals(
                    "完了",
                    kotlinx.coroutines.withTimeout(3000) {
                      backend.run("test", 12, emptyMap(), AssistantProgress())
                    },
                )
              }
              assertFailsWith<kotlinx.coroutines.TimeoutCancellationException> {
                kotlinx.coroutines.withTimeout(100) {
                  backend.run("slow", 12, emptyMap(), AssistantProgress())
                }
              }
            }
          }
      assertEquals(1, pids.size) // Enable probe, two complete requests and one cancelled request.
      assertTrue(pids.none { ProcessHandle.of(it).map { p -> p.isAlive }.orElse(false) })
    } finally {
      Files.delete(executable)
      Files.delete(root)
    }
  }

  @Test
  fun proxyCannotChooseUrlHeadersModelOrOutputBudget() {
    val body =
        JsonParser.parseString("""{"messages":[{"role":"user","content":"hello"}],"tools":[]}""")
            .asJsonObject
    val request = AssistantModelRelay.sanitize(body, "fixed-model")
    assertEquals("fixed-model", request["model"].asString)
    assertEquals(2048, request["max_tokens"].asInt)
    assertFalse(request["stream"].asBoolean)
    for (field in listOf("url", "headers", "model", "max_tokens", "stream")) {
      val hostile = body.deepCopy().apply { addProperty(field, "evil") }
      assertFails { AssistantModelRelay.sanitize(hostile, "fixed") }
    }
    val hostile =
        body.deepCopy().apply {
          add(
              "tools",
              JsonParser.parseString("""[{"type":"function","function":{"name":"host_shell"}}]"""),
          )
        }
    assertFails { AssistantModelRelay.sanitize(hostile, "fixed") }
    val large =
        body.deepCopy().apply {
          getAsJsonArray("messages")[0].asJsonObject.addProperty("content", "a".repeat(524288))
        }
    assertFails { AssistantModelRelay.sanitize(large, "fixed") }
    val multibyte =
        body.deepCopy().apply {
          getAsJsonArray("messages")[0].asJsonObject.addProperty("content", "あ".repeat(200000))
        }
    assertFails { AssistantModelRelay.sanitize(multibyte, "fixed") }
  }
}
