package io.oyasai.oyasaiAdminTools.file

import io.oyasai.oyasaiAdminTools.file.FileAccessManager.submitWriteTask
import java.io.File

object FileEdit {
  fun readFile(path: String): String {
    return try {
      val file = File(path)
      file.parentFile?.mkdirs()
      if (!file.exists()) {
        file.createNewFile()
        ""
      } else {
        file.readText()
      }
    } catch (e: Exception) {
      e.printStackTrace()
      ""
    }
  }

  fun writeFile(path: String, content: String) {
    submitWriteTask {
      try {
        val file = File(path)
        file.parentFile?.mkdirs()
        if (!file.exists()) {
          file.createNewFile()
        }
        file.writeText(content)
      } catch (e: Exception) {
        e.printStackTrace()
      }
    }
  }
}
