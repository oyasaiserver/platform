package icu.oyasai.networksync

import com.google.gson.JsonElement
import com.google.gson.JsonObject
import com.google.gson.JsonParser
import com.google.gson.stream.JsonReader
import java.io.StringReader
import java.nio.file.Files
import java.nio.file.Path

data class NetworkSyncConfig(
    val serverHostPrefix: String,
    val directChatHostSuffixes: Set<String>,
    val ventureChatChannel: String,
    val syncedChannels: Set<String>,
    val tabEnabled: Boolean,
    val tabRemoteDisplayName: String,
    val tabRemoteListOrder: Int,
    val directChatEnabled: Boolean,
    val cancelDirectChatBackend: Boolean,
    val directChatFormat: String,
    val debug: Boolean,
) {
  companion object {
    private val defaults =
        NetworkSyncConfig(
            serverHostPrefix = "oyasai-minecraft-",
            directChatHostSuffixes = setOf("-lobby"),
            ventureChatChannel = "venturechat:data",
            syncedChannels = setOf("Global"),
            tabEnabled = true,
            tabRemoteDisplayName = "<gray>{player}",
            tabRemoteListOrder = 1000,
            directChatEnabled = true,
            cancelDirectChatBackend = true,
            directChatFormat = "<white>{player}<gray>: <white>{message}",
            debug = false,
        )

    fun load(dataDirectory: Path, resourceLoader: ClassLoader): NetworkSyncConfig {
      Files.createDirectories(dataDirectory)
      val file = dataDirectory.resolve("config.json")
      if (Files.notExists(file)) {
        resourceLoader.getResourceAsStream("config.json").use { input ->
          requireNotNull(input) { "config.json is missing from the plugin jar" }
          Files.copy(input, file)
        }
      }

      val reader = JsonReader(StringReader(Files.readString(file)))
      reader.isLenient = true
      val root = JsonParser.parseReader(reader).asJsonObject
      val detection = root.jsonObject("server-detection")
      val ventureChat = root.jsonObject("venturechat")
      val tab = root.jsonObject("tab")
      val directChat = root.jsonObject("direct-chat")
      return NetworkSyncConfig(
          serverHostPrefix = detection.string("host-prefix") ?: defaults.serverHostPrefix,
          directChatHostSuffixes =
              detection.strings("direct-chat-host-suffixes").toSet().ifEmpty {
                defaults.directChatHostSuffixes
              },
          ventureChatChannel = ventureChat.string("channel") ?: defaults.ventureChatChannel,
          syncedChannels =
              ventureChat.strings("synced-channels").toSet().ifEmpty { defaults.syncedChannels },
          tabEnabled = tab.bool("enabled") ?: defaults.tabEnabled,
          tabRemoteDisplayName = tab.string("remote-display-name") ?: defaults.tabRemoteDisplayName,
          tabRemoteListOrder = tab.int("remote-list-order") ?: defaults.tabRemoteListOrder,
          directChatEnabled = directChat.bool("enabled") ?: defaults.directChatEnabled,
          cancelDirectChatBackend =
              directChat.bool("cancel-backend-chat") ?: defaults.cancelDirectChatBackend,
          directChatFormat = directChat.string("format") ?: defaults.directChatFormat,
          debug = root.bool("debug") ?: defaults.debug,
      )
    }

    private fun JsonObject.jsonObject(key: String): JsonObject =
        getAsJsonObject(key) ?: JsonObject()

    private fun JsonObject.string(key: String): String? =
        get(key)?.takeUnless { it.isJsonNull }?.asString

    private fun JsonObject.strings(key: String): List<String> =
        getAsJsonArray(key)
            ?.mapNotNull { it.takeUnless(JsonElement::isJsonNull)?.asString }
            .orEmpty()

    private fun JsonObject.bool(key: String): Boolean? =
        get(key)?.takeUnless { it.isJsonNull }?.asBoolean

    private fun JsonObject.int(key: String): Int? = get(key)?.takeUnless { it.isJsonNull }?.asInt
  }
}
