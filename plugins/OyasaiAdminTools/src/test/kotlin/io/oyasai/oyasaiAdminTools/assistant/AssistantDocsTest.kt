package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import java.util.jar.JarFile
import kotlin.test.*

class AssistantDocsTest {
  @Test
  fun bundlesOnlyPublicReferencesAndBoundsDocumentPartsAndNames() {
    val docs = AssistantDocs()
    assertContains(docs.list(), "oyasai-admin-tools")
    assertContains(docs.read("oyasai-infra", "1"), "PROJECT.md")
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
      assertTrue(
          bundled.all {
            it == "assistant-docs/index.txt" ||
                it.matches(Regex("assistant-docs/[^/]+/(PROJECT|player)\\.md"))
          }
      )
    }
  }
}
