package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import java.net.URLClassLoader
import kotlin.test.*

class AssistantShadingTest {
  @Test
  fun jarDoesNotContainBrainOrHttpClient() {
    val jar = File("build/libs/OyasaiAdminTools.jar")
    assertTrue(jar.isFile)
    URLClassLoader(arrayOf(jar.toURI().toURL()), ClassLoader.getPlatformClassLoader()).use { loader
      ->
      java.util.jar.JarFile(jar).use { archive ->
        val entries = archive.entries().asSequence().map { it.name }.toList()
        assertFalse(entries.any { it.startsWith("assistant-docs/") })
        for (prefix in
            listOf(
                "io/oyasai/oyasaiAdminTools/assistant/AssistantPi",
                "io/ktor/",
                "com/sk89q/worldedit/",
                "com/fastasyncworldedit/",
                "ai/koog/",
                "com/fasterxml/jackson/",
                "aws/",
                "io/opentelemetry/",
                "io/ktor/server/",
                "io/ktor/client/engine/apache5/",
                "org/apache/hc/",
                "org/fusesource/jansi/",
            )) {
          assertFalse(
              entries.any {
                it.startsWith("io/oyasai/oyasaiAdminTools/libs/$prefix") || it.startsWith(prefix)
              },
              prefix,
          )
        }
      }
    }
  }
}
