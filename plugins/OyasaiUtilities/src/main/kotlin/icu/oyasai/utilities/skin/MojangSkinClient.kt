package icu.oyasai.utilities.skin

import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.UUID
import java.util.concurrent.CompletableFuture

internal object MojangUrls {
  fun profile(username: String): URI =
      URI("https://api.mojang.com/users/profiles/minecraft/$username")

  fun session(uuid: UUID): URI =
      URI(
          "https://sessionserver.mojang.com/session/minecraft/profile/" +
              "${uuid.toString().replace("-", "")}?unsigned=false"
      )
}

internal object MojangResponseParser {
  private val id = Regex(""""id"\s*:\s*"([0-9a-fA-F]{32})"""")
  private val textures = Regex("""\{[^{}]*"name"\s*:\s*"textures"[^{}]*}""")

  fun profileId(body: String): UUID? {
    val compactId = id.find(body)?.groupValues?.get(1) ?: return null
    return runCatching {
          UUID.fromString(
              "${compactId.substring(0, 8)}-${compactId.substring(8, 12)}-" +
                  "${compactId.substring(12, 16)}-${compactId.substring(16, 20)}-" +
                  compactId.substring(20)
          )
        }
        .getOrNull()
  }

  fun texture(body: String, fetchedAt: Long): SkinTexture? {
    val property = textures.find(body)?.value ?: return null
    val value = stringField(property, "value") ?: return null
    val signature = stringField(property, "signature") ?: return null
    return SkinTexture(value, signature, fetchedAt)
  }

  private fun stringField(jsonObject: String, key: String): String? =
      Regex(""""$key"\s*:\s*"([^"]*)"""").find(jsonObject)?.groupValues?.get(1)
}

internal class MojangSkinClient(
    private val http: HttpClient =
        HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10)).build(),
) {
  fun fetch(username: String): CompletableFuture<SkinTexture> =
      get(MojangUrls.profile(username)).thenCompose { profile ->
        val uuid =
            MojangResponseParser.profileId(profile) ?: return@thenCompose missingProfile(username)
        get(MojangUrls.session(uuid)).thenApply { session ->
          MojangResponseParser.texture(session, System.currentTimeMillis())
              ?: throw IllegalArgumentException("Mojang profile has no signed texture property")
        }
      }

  private fun get(uri: URI): CompletableFuture<String> =
      http
          .sendAsync(
              HttpRequest.newBuilder(uri).timeout(Duration.ofSeconds(15)).GET().build(),
              HttpResponse.BodyHandlers.ofString(),
          )
          .thenApply { response ->
            if (response.statusCode() != 200) {
              throw IllegalArgumentException("Mojang API returned HTTP ${response.statusCode()}")
            }
            response.body()
          }

  private fun missingProfile(username: String): CompletableFuture<SkinTexture> =
      CompletableFuture.failedFuture(
          IllegalArgumentException("Minecraft ID '$username' was not found")
      )
}
