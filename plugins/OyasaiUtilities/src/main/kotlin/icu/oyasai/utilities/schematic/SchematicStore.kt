package icu.oyasai.utilities.schematic

import java.io.File
import java.io.InputStream
import java.nio.file.Files
import java.nio.file.StandardCopyOption

internal object SchematicStore {
  const val MAX_BYTES = 32L * 1024 * 1024
  private val SAFE_ID_REGEX = Regex("^[A-Za-z0-9_-]+$")

  fun idOf(input: String): String =
      input.trim().substringBefore("?").substringBefore("#").substringAfterLast("/")

  fun isValidId(id: String): Boolean =
      id.isNotEmpty() &&
          !id.contains("..") &&
          !id.contains('/') &&
          !id.contains('\\') &&
          SAFE_ID_REGEX.matches(id)

  fun save(
      directory: File,
      id: String,
      source: InputStream,
      deadlineNanos: Long,
      nanoTime: () -> Long = System::nanoTime,
  ): File {
    require(isValidId(id)) { "不正な schematic ID です" }
    val baseCanonical = directory.canonicalFile
    val destination = File(directory, "$id.schem")
    val destCanonical = destination.canonicalFile
    require(
        destCanonical.parentFile == baseCanonical &&
            destCanonical.path.startsWith(baseCanonical.path + File.separator)
    ) {
      "保存先パスがディレクトリ外を指しています"
    }
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
