package icu.oyasai.utilities.workstation

import com.google.gson.JsonParser
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import org.bukkit.Bukkit
import org.geysermc.floodgate.api.FloodgateApi
import org.geysermc.floodgate.api.player.FloodgatePlayer

/**
 * Skin for a Bedrock player in `/skull`: the online Floodgate player is matched by Java-side name
 * (".gamertag"), then the GeyserMC Global API returns the skin Floodgate stored when they joined.
 */
internal object BedrockSkull {
  private val http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()

  /** The online Bedrock player whose Java-side name is [javaName], or null for any other name. */
  fun onlinePlayer(javaName: String): FloodgatePlayer? {
    if (!javaName.startsWith(".") || Bukkit.getPluginManager().getPlugin("floodgate") == null) {
      return null
    }
    val api = FloodgateApi.getInstance()
    return Bukkit.getOnlinePlayers().firstNotNullOfOrNull { player ->
      api.getPlayer(player.uniqueId)?.takeIf { it.javaUsername.equals(javaName, ignoreCase = true) }
    }
  }

  /** Texture id of the skin stored for [xuid], or null when none is stored. Blocks: run async. */
  fun textureId(xuid: String): String? {
    require(xuid.all { it.isDigit() }) { "XUID must be digits" }
    val request =
        HttpRequest.newBuilder(URI("https://api.geysermc.org/v2/skin/$xuid"))
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build()
    val response = http.send(request, HttpResponse.BodyHandlers.ofString())
    return if (response.statusCode() == 200) parseTextureId(response.body()) else null
  }

  /** `{}` (no stored skin) and malformed bodies give null. */
  fun parseTextureId(body: String): String? =
      runCatching { JsonParser.parseString(body).asJsonObject.get("texture_id")?.asString }
          .getOrNull()
          ?.takeIf { WorkstationRules.isTexture(it) }
}
