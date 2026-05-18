package io.oyasai.oyasaiAdminTools.utils

import com.google.gson.JsonParser
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.util.UUID
import org.bukkit.Bukkit

object PlayerUtils {

  fun resolveUUID(playerName: String): UUID? {
    val onlinePlayer = Bukkit.getPlayerExact(playerName)
    if (onlinePlayer != null) {
      return onlinePlayer.uniqueId
    }

    if (playerName.startsWith(".")) {
      val offlinePlayer = Bukkit.getOfflinePlayer(playerName)
      if (offlinePlayer.hasPlayedBefore()) {
        return offlinePlayer.uniqueId
      }
      return fetchBedrockUUID(playerName)
    }
    return resolveOnlineUUID(playerName)
  }

  private fun resolveOnlineUUID(playerName: String): UUID? {
    return try {
      Bukkit.getOfflinePlayer(playerName).uniqueId
    } catch (e: Exception) {
      null
    }
  }

  private fun fetchBedrockUUID(playerName: String): UUID? {
    val gamertag = playerName.substring(1)
    if (!gamertag.contains("_")) {
      return fetchUUIDFromXUID(gamertag)
    }

    val underscoreUUID = fetchUUIDFromXUID(gamertag)
    val spaceGamertag = gamertag.replace("_", " ")
    val spaceUUID = fetchUUIDFromXUID(spaceGamertag)
    if (underscoreUUID != null && spaceUUID != null) {
      Bukkit.getLogger()
          .warning("[AdminTools] Both gamertags exist. '${gamertag}', '${spaceGamertag}'")
      return null
    }
    return underscoreUUID ?: spaceUUID
  }

  private fun fetchUUIDFromXUID(gamertag: String): UUID? {
    val encodedGamertag = gamertag.replace(" ", "%20")
    val url = "https://api.geysermc.org/v2/xbox/xuid/$encodedGamertag"

    return try {
      val client = HttpClient.newHttpClient()
      val request = HttpRequest.newBuilder().uri(URI(url)).build()
      val response = client.send(request, HttpResponse.BodyHandlers.ofString())

      if (response.statusCode() == 200) {
        val json = JsonParser.parseString(response.body()).asJsonObject
        if (json.has("xuid")) {
          val xuid = json.get("xuid").asLong
          val hexStr = xuid.toString(16).padStart(16, '0')
          val part4 = hexStr.substring(0, 4)
          val part5 = hexStr.substring(4, 16)
          val uuidStr = "00000000-0000-0000-$part4-$part5"
          return UUID.fromString(uuidStr)
        }
      }
      null
    } catch (e: Exception) {
      e.printStackTrace()
      null
    }
  }
}
