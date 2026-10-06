package io.oyasai.chat.paper.japanize

import java.util.UUID
import java.util.concurrent.CompletableFuture

enum class LunaResolutionMethod {
  UUIDCACHE,
  LUCKPERMS,
  BUKKIT_CACHE,
  UNRESOLVED,
}

data class LunaResolution(val enabled: Boolean, val uuid: UUID?, val method: LunaResolutionMethod)

data class LunaResolvedImport(
    val players: Map<UUID, Boolean>,
    val resolutions: List<LunaResolution>,
    val skippedDefault: Int,
) {
  fun report(): List<String> =
      LunaResolutionMethod.entries.map { method ->
        val entries = resolutions.filter { it.method == method }
        "$method: on=${entries.count { it.enabled }}, off=${entries.count { !it.enabled }}"
      }
}

/** Each worker awaits one lookup before starting another; no threads block on futures. */
class LunaImportResolver(
    private val luckPerms: ((String) -> CompletableFuture<UUID?>)?,
    private val bukkitCache: (String) -> CompletableFuture<UUID?>,
    private val concurrency: Int = 8,
) {
  init {
    require(concurrency > 0)
  }

  fun resolve(data: LunaImportData, playerDefault: Boolean): CompletableFuture<LunaResolvedImport> {
    val entries = data.preferences.entries.toList()
    val workers =
        (0 until minOf(concurrency, entries.size)).map { worker ->
          var chain = CompletableFuture.completedFuture(emptyList<LunaResolution>())
          for (index in worker until entries.size step concurrency) {
            val entry = entries[index]
            chain =
                chain.thenCompose { results ->
                  resolveName(entry.key, data.names).thenApply { (uuid, method) ->
                    results + LunaResolution(entry.value, uuid, method)
                  }
                }
          }
          chain
        }
    return CompletableFuture.allOf(*workers.toTypedArray()).thenApply {
      val results = workers.flatMap { it.getNow(emptyList()) }
      val players =
          buildMap<UUID, Boolean> {
            results.forEach { result ->
              if (result.enabled != playerDefault) result.uuid?.let { put(it, result.enabled) }
            }
          }
      LunaResolvedImport(players, results, entries.count { it.value == playerDefault })
    }
  }

  private fun resolveName(
      name: String,
      cache: Map<String, UUID>,
  ): CompletableFuture<Pair<UUID?, LunaResolutionMethod>> {
    cache[name]?.let {
      return CompletableFuture.completedFuture(it to LunaResolutionMethod.UUIDCACHE)
    }
    val lookup =
        try {
          luckPerms?.invoke(name) ?: CompletableFuture.completedFuture(null)
        } catch (_: Exception) {
          CompletableFuture.completedFuture<UUID?>(null)
        }
    return lookup
        .handle { uuid, _ -> uuid }
        .thenCompose { uuid ->
          if (uuid != null)
              CompletableFuture.completedFuture(uuid to LunaResolutionMethod.LUCKPERMS)
          else
              bukkitCache(name).thenApply { cached ->
                cached to
                    if (cached == null) LunaResolutionMethod.UNRESOLVED
                    else LunaResolutionMethod.BUKKIT_CACHE
              }
        }
  }
}
