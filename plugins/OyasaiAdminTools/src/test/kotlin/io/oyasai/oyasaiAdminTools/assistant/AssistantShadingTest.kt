package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import java.net.URLClassLoader
import kotlin.test.*

class AssistantShadingTest {
  @Test
  fun relayLoadsFromJarWithoutServerLibrariesOrNetwork() {
    val jar = File("build/libs/OyasaiAdminTools.jar")
    assertTrue(jar.isFile)
    URLClassLoader(arrayOf(jar.toURI().toURL()), ClassLoader.getPlatformClassLoader()).use { loader
      ->
      (loader
              .loadClass("io.oyasai.oyasaiAdminTools.assistant.AssistantModelRelay")
              .getConstructor(String::class.java, String::class.java, Long::class.javaPrimitiveType)
              .newInstance("offline-placeholder", "offline-test", 1000L) as AutoCloseable)
          .close()
      java.util.jar.JarFile(jar).use { archive ->
        val entries = archive.entries().asSequence().map { it.name }.toList()
        assertFalse(entries.any { it.startsWith("assistant-docs/") })
        for (prefix in
            listOf(
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
