package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import java.net.URLClassLoader
import kotlin.test.*

class AssistantShadingTest {
  @Test
  fun providersLoadFromJarWithoutServerLibrariesOrNetwork() {
    val jar = File("build/libs/OyasaiAdminTools.jar")
    assertTrue(jar.isFile)
    URLClassLoader(arrayOf(jar.toURI().toURL()), ClassLoader.getPlatformClassLoader()).use { loader
      ->
      val constructor =
          loader
              .loadClass("io.oyasai.oyasaiAdminTools.assistant.AssistantAgent")
              .getConstructor(String::class.java, String::class.java, String::class.java)
      for (provider in listOf("openrouter", "google", "deepseek")) {
        (constructor.newInstance(provider, "offline-test", "offline-placeholder") as AutoCloseable)
            .use { backend ->
              val prefix = "io.oyasai.oyasaiAdminTools.libs.ai.koog."
              fun field(name: String): Any =
                  backend.javaClass
                      .getDeclaredField(name)
                      .apply { isAccessible = true }
                      .get(backend)
              val registry =
                  loader
                      .loadClass(prefix + "agents.core.tools.ToolRegistry")
                      .getConstructor()
                      .newInstance()
              val clock =
                  loader.loadClass(prefix + "utils.time.KoogClock").getField("System").get(null)
              val install =
                  java.lang.reflect.Proxy.newProxyInstance(
                      loader,
                      arrayOf(loader.loadClass("kotlin.jvm.functions.Function1")),
                  ) { _, _, _ ->
                    loader.loadClass("kotlin.Unit").getField("INSTANCE").get(null)
                  }
              val progress =
                  loader
                      .loadClass("io.oyasai.oyasaiAdminTools.assistant.AssistantProgress")
                      .getConstructor()
                      .newInstance()
              val strategy =
                  progress.javaClass
                      .getMethod("strategy", Int::class.javaPrimitiveType)
                      .invoke(progress, 2)
              val factory =
                  loader.loadClass(prefix + "agents.core.agent.AIAgentFactoryKt").methods.single {
                    it.name == "AIAgent" &&
                        it.parameterCount == 11 &&
                        it.parameterTypes[2].name ==
                            prefix + "agents.core.agent.entity.AIAgentGraphStrategy" &&
                        it.parameterTypes[1].name == prefix + "prompt.llm.LLModel"
                  }
              val graph =
                  factory.invoke(
                      null,
                      field("executor"),
                      field("model"),
                      strategy,
                      registry,
                      "offline test",
                      null,
                      1,
                      null,
                      null,
                      clock,
                      install,
                  )
              assertNotNull(
                  graph.javaClass
                      .getMethod("createSession", String::class.java)
                      .invoke(graph, "offline test")
              )
            }
      }
      java.util.jar.JarFile(jar).use { archive ->
        val entries = archive.entries().asSequence().map { it.name }.toList()
        for (prefix in
            listOf(
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
      val prefix = "io.oyasai.oyasaiAdminTools.libs."
      val serializerType = loader.loadClass(prefix + "ai.koog.serialization.JSONSerializer")
      val serializer =
          loader
              .loadClass(prefix + "ai.koog.serialization.jackson.JacksonSerializer")
              .getConstructor()
              .newInstance()
      val json =
          serializerType
              .getMethod("decodeJSONElementFromString", String::class.java)
              .invoke(serializer, "{\"command\":\"syokaku iscandidate Steve\"}")
      val functionType = loader.loadClass("kotlin.jvm.functions.Function2")
      val action =
          java.lang.reflect.Proxy.newProxyInstance(loader, arrayOf(functionType)) { _, _, _ ->
            "確認待ち"
          }
      val toolType = loader.loadClass("io.oyasai.oyasaiAdminTools.assistant.AssistantTool")
      val tool =
          toolType
              .getConstructor(
                  String::class.java,
                  String::class.java,
                  List::class.java,
                  functionType,
              )
              .newInstance("run_query", "offline test", listOf("command"), action)
      val decoded =
          toolType
              .getMethod(
                  "decodeArgs",
                  loader.loadClass(prefix + "ai.koog.serialization.JSONObject"),
                  serializerType,
              )
              .invoke(tool, json, serializer)
      assertEquals(mapOf("command" to "syokaku iscandidate Steve"), decoded)
    }
  }
}
