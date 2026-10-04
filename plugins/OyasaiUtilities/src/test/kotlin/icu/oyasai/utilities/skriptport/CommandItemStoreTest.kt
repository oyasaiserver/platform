package icu.oyasai.utilities.skriptport

import java.nio.file.Path
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertNull
import org.junit.jupiter.api.io.TempDir

class CommandItemStoreTest {
  @TempDir lateinit var directory: Path

  @Test
  fun `both items survive reopening and saving one does not replace the other`() {
    val file = directory.resolve("command-items.db").toFile()
    CommandItemStore(file).use {
      it.open()
      assertNull(it.load("dye"))
      it.save("dye", byteArrayOf(1, 2))
      it.save("menu", byteArrayOf(3, 4))
      it.save("dye", byteArrayOf(5, 6))
    }
    CommandItemStore(file).use {
      it.open()
      assertContentEquals(byteArrayOf(5, 6), it.load("dye"))
      assertContentEquals(byteArrayOf(3, 4), it.load("menu"))
    }
  }
}
