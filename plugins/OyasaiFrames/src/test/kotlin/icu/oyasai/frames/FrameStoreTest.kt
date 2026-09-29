package icu.oyasai.frames

import com.github.srain3.painttools.tools.configs.PaintRenderGate
import icu.oyasai.imageonmap.FrameRecord
import java.nio.file.Files
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class FrameStoreTest {
  @Test
  fun lockAndPosterCanBeRemovedIndependently() {
    val file = Files.createTempDirectory("frames-shared").resolve("frames.db").toFile()
    val id = UUID.randomUUID()
    val owner = UUID.randomUUID()
    val world = UUID.randomUUID()
    val poster = FrameRecord(id, 42, world, 1, 2, 3, "NORTH", 7L, false)
    FrameStore(file).use { store ->
      store.lock(id, owner, world, "world", 1, 2, 3)
      store.saveFrames(listOf(poster))
      assertEquals(owner, store.lockedOwners()[id])
      assertEquals(poster, store.frame(id))
      store.deleteFrames(listOf(id))
      assertNull(store.frame(id))
      assertEquals(owner, store.lockedOwners()[id])
      store.saveFrames(listOf(poster))
      store.unlock(id)
      assertNull(store.lockedOwners()[id])
      assertEquals(poster, store.frame(id))
      store.deleteFrames(listOf(id))
      assertTrue(store.allFrames().isEmpty())
    }
  }

  @Test
  fun rendererDrawsOncePerAttachment() {
    val first = PaintRenderGate()
    assertTrue(first.consume())
    assertFalse(first.consume())
    assertTrue(PaintRenderGate().consume())
  }
}
