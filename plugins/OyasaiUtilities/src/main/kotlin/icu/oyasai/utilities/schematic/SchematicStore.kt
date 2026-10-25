package icu.oyasai.utilities.schematic

import java.io.File
import java.io.InputStream
import java.nio.file.Files
import java.nio.file.StandardCopyOption

internal object SchematicStore {
  const val MAX_BYTES = 32L * 1024 * 1024

  fun idOf(input: String): String = input.substringAfterLast("/")

  fun save(
      directory: File,
      id: String,
      source: InputStream,
      deadlineNanos: Long,
      nanoTime: () -> Long = System::nanoTime,
  ): File {
    val temporary = Files.createTempFile(directory.toPath(), "download-", ".part")
    try {
      Files.newOutputStream(temporary).use { output ->
        val buffer = ByteArray(8192)
        var total = 0L
        while (true) {
          check(nanoTime() < deadlineNanos) { "ダウンロードがタイムアウトしました" }
          val count = source.read(buffer)
          if (count < 0) break
          total += count
          require(total <= MAX_BYTES) { "サイズ上限は 32 MiB です" }
          output.write(buffer, 0, count)
        }
      }
      val destination = File(directory, "$id.schem")
      Files.move(
          temporary,
          destination.toPath(),
          StandardCopyOption.REPLACE_EXISTING,
          StandardCopyOption.ATOMIC_MOVE,
      )
      return destination
    } finally {
      Files.deleteIfExists(temporary)
    }
  }
}
