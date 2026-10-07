package io.oyasai.oyasaitoken.api

import java.util.UUID
import java.util.concurrent.CompletableFuture

/** Optional OyasaiToken extension for callers that need SQLite commit confirmation. */
interface OyasaiTokenCommitApi {
  /**
   * Adds tokens and completes true only after the matching SQLite transaction has committed.
   * Completes false if the operation is rejected or persistence fails.
   *
   * Callers that need a bounded wait must apply their own timeout without blocking the Bukkit
   * primary thread.
   */
  fun addTokensWithCommit(uuid: UUID, amount: Long): CompletableFuture<Boolean>
}
