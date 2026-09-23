package io.oyasai.oyasaiban

import com.velocitypowered.api.proxy.ProxyServer
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import org.slf4j.Logger

class NameResolver(
    private val proxy: ProxyServer,
    private val database: PunishmentDatabase,
    private val logger: Logger,
) {
  private val http = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()

  fun resolve(target: String): CompletableFuture<UUID?> {
    if (target.startsWith("uuid:", ignoreCase = true)) {
      return CompletableFuture.completedFuture(
          runCatching { UUID.fromString(target.substringAfter(':')) }.getOrNull()
      )
    }
    proxy.getPlayer(target).orElse(null)?.let {
      return CompletableFuture.completedFuture(it.uniqueId)
    }
    return database.findSeenUuid(target).thenCompose { known ->
      when {
        known != null -> CompletableFuture.completedFuture(known)
        target.startsWith('.') -> resolveBedrock(target.substring(1))
        else -> resolveMojang(target)
      }
    }
  }

  private fun resolveBedrock(gamertag: String): CompletableFuture<UUID?> {
    if (proxy.pluginManager.getPlugin("floodgate").isEmpty) {
      return CompletableFuture.completedFuture(null)
    }
    val lookup: CompletableFuture<UUID?> =
        runCatching { FloodgateNameResolver.resolve(gamertag) }
            .getOrElse {
              logger.warn("Floodgate name lookup could not start: {}", it.message)
              CompletableFuture.completedFuture(null)
            }
    return lookup.orTimeout(10, TimeUnit.SECONDS).exceptionally {
      logger.warn("Floodgate name lookup failed for {}: {}", gamertag, it.message)
      null
    }
  }

  fun lookupMojangBlocking(name: String): UUID? = resolveMojang(name).join()

  private fun resolveMojang(name: String): CompletableFuture<UUID?> {
    if (!name.matches(Regex("[A-Za-z0-9_]{1,16}"))) {
      return CompletableFuture.completedFuture(null)
    }
    val request =
        HttpRequest.newBuilder(
                URI.create("https://api.minecraftservices.com/minecraft/profile/lookup/name/$name")
            )
            .timeout(Duration.ofSeconds(10))
            .GET()
            .build()
    return http
        .sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply { response ->
          if (response.statusCode() != 200) null
          else
              profileId
                  .find(response.body())
                  ?.groupValues
                  ?.get(1)
                  ?.let(AdvancedBanImporter::parseUuid)
        }
        .exceptionally {
          logger.warn("Mojang name lookup failed for {}: {}", name, it.message)
          null
        }
  }

  companion object {
    private val profileId = Regex(""""id"\s*:\s*"([0-9a-fA-F-]{32,36})"""")
  }
}

private object FloodgateNameResolver {
  fun resolve(gamertag: String): CompletableFuture<UUID?> =
      org.geysermc.floodgate.api.FloodgateApi.getInstance().getUuidFor(gamertag).thenApply { it }
}
