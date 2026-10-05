package icu.oyasai.frames

import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertNull
import org.junit.jupiter.api.io.TempDir

class ItemTemplateStoreTest {
  @TempDir lateinit var directory: Path

  @Test
  fun itemSurvivesReopening() {
    val file = directory.resolve("command-items.db").toFile()
    ItemTemplateStore(file).use {
      it.open()
      assertNull(it.load("dye"))
      it.save("dye", byteArrayOf(1, 2))
      it.save("dye", byteArrayOf(5, 6))
    }
    ItemTemplateStore(file).use {
      it.open()
      assertContentEquals(byteArrayOf(5, 6), it.load("dye"))
    }
  }
}
