package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import java.util.jar.JarFile
import kotlin.test.*

class AssistantDocsTest {
  @Test
  fun searchesMatchingSectionsWithShortExcerptsAndNoUnrelatedFallback() {
    val docs = AssistantDocs()
    val result = docs.search("SocialSpy")
    assertContains(result, "oyasai-admin-tools/")
    assertContains(result.lowercase(), "socialspy")
    assertTrue(result.length < 4000)
    assertContains(docs.search("nonexistent-topic-987654321"), "該当する同梱資料はありません")
    assertContains(docs.search(" "), "検索語")
  }

  @Test
  fun bundlesOnlyPublicReferencesAndBoundsDocumentPartsAndNames() {
    val docs = AssistantDocs()
    assertContains(docs.list(), "oyasai-admin-tools")
    assertFalse(docs.list().contains("oyasai-infra"))
    assertContains(docs.read("oyasai-infra", "1"), "資料がありません")
    assertContains(docs.read("oyasai-admin-tools", "1"), "PROJECT.md")
    assertContains(docs.read("oyasai-admin-tools", "0"), "part")
    assertContains(docs.read("../config.yml", "1"), "資料がありません")
    JarFile(File("build/libs/OyasaiAdminTools.jar")).use { jar ->
      val bundled =
          jar.entries()
              .asSequence()
              .map { it.name }
              .filter { it.startsWith("assistant-docs/") && !it.endsWith('/') }
              .toList()
      assertTrue(bundled.size > 3)
      assertFalse(bundled.any { it.contains("oyasai-infra") })
      assertTrue(
          bundled.all {
            it == "assistant-docs/index.txt" ||
                it.matches(Regex("assistant-docs/[^/]+/(PROJECT|player)\\.md"))
          }
      )
    }
  }
}
