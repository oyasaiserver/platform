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
            .use {}
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
