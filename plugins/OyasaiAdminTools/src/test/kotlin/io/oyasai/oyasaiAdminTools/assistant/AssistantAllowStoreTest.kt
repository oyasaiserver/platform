package io.oyasai.oyasaiAdminTools.assistant

import io.oyasai.oyasaiAdminTools.storage.AdminDb
import java.nio.file.Path
import java.util.UUID
import java.util.logging.Logger
import kotlin.test.*
import org.junit.jupiter.api.io.TempDir

class AssistantAllowStoreTest {
  @TempDir lateinit var temp: Path

  @Test
  fun sharesPersistsAuditsAndNeverRemembersForbiddenCommandsOrReseedsRemovedDefaults() {
    val file = temp.resolve("admin.db").toFile()
    val rules = AssistantRules()
    val uuid = UUID.randomUUID()
    AdminDb(file, Logger.getLogger("assistant-test")).use { db ->
      db.open()
      val store = AssistantAllowStore(db, rules)
      assertEquals(3, store.list().size)
      assertFalse(store.add("custom:cbmenu demo_car size 2", "operator", uuid))
      assertFalse(store.allows("custom:cbmenu other delete"))
      assertEquals(3, store.list().size)
      assertFalse(store.allows("dynamicprofile:syokaku seeplayerinfo steve gui"))
      assertTrue(store.add("coreprotect:co lookup u:steve", "operator", uuid))
      assertFalse(store.add("coreprotect:co lookup u:alex", "other", UUID.randomUUID()))
      assertTrue(store.allows("coreprotect:co lookup u:alex"))
      val entry = store.list().last()
      assertEquals("operator", entry.name)
      assertEquals(uuid.toString(), entry.uuid)
      assertTrue(entry.addedAt > 0)
      assertFailsWith<IllegalArgumentException> {
        store.add("coreprotect:co purge", "operator", uuid)
      }
      store.add("coreprotect:co", "operator", uuid)
      assertFalse(store.allows("coreprotect:co purge"))
      store.remove(store.list().first().id)
    }
    AdminDb(file, Logger.getLogger("assistant-test")).use { db ->
      db.open()
      val store = AssistantAllowStore(db, rules)
      assertFalse(store.allows("dynamicprofile:syokaku iscandidate steve"))
      assertTrue(store.allows("dynamicprofile:syokaku getrank steve"))
      assertEquals("operator", store.list().first { it.scope == "coreprotect:co lookup" }.name)
    }
  }
}
