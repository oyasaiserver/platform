package io.oyasai.oyasaiban

import java.nio.file.Files
import java.nio.file.Path

data class OyasaiBanConfig(val webhookBanUrl: String) {
  companion object {
    fun load(dataDirectory: Path, classLoader: ClassLoader): OyasaiBanConfig {
      Files.createDirectories(dataDirectory)
      val path = dataDirectory.resolve("config.yml")
      if (!Files.exists(path)) {
        classLoader.getResourceAsStream("config.yml")!!.use { Files.copy(it, path) }
      }
      val values =
          Files.readAllLines(path)
              .mapNotNull { line ->
                val clean = line.substringBefore('#').trim()
                if (clean.isEmpty() || ':' !in clean) null
                else clean.substringBefore(':').trim() to clean.substringAfter(':').trim().unquote()
              }
              .toMap()
      return OyasaiBanConfig(values["webhook-ban-url"].orEmpty())
    }

    private fun String.unquote(): String =
        if (
            length >= 2 &&
                ((first() == '"' && last() == '"') || (first() == '\'' && last() == '\''))
        ) {
          substring(1, length - 1)
        } else this
  }
}
